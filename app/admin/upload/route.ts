import { createHash } from "crypto";
import { NextResponse } from "next/server";
import { isAdminSession } from "@/lib/admin-session";

export async function POST(request: Request) {
  if (!(await isAdminSession())) {
    return NextResponse.json({ error: "You need to sign in again." }, { status: 401 });
  }

  const incoming = await request.formData();
  const file = incoming.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Choose an image." }, { status: 400 });
  }
  if (!file.type.startsWith("image/")) {
    return NextResponse.json({ error: "Only image files can be uploaded." }, { status: 400 });
  }
  if (file.size > 8 * 1024 * 1024) {
    return NextResponse.json({ error: "Image must be under 8 MB." }, { status: 400 });
  }

  const cloudName = process.env.CLOUDINARY_CLOUD_NAME?.trim();
  const apiKey = process.env.CLOUDINARY_API_KEY?.trim();
  const apiSecret = process.env.CLOUDINARY_API_SECRET?.trim();

  // If Cloudinary credentials are fully configured, upload to Cloudinary
  if (cloudName && apiKey && apiSecret) {
    try {
      const timestamp = Math.round(Date.now() / 1000);
      const folder = "kmf-blogs";
      const signature = createHash("sha1")
        .update(`folder=${folder}&timestamp=${timestamp}${apiSecret}`)
        .digest("hex");

      const body = new FormData();
      body.append("file", file);
      body.append("api_key", apiKey);
      body.append("timestamp", String(timestamp));
      body.append("folder", folder);
      body.append("signature", signature);

      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body,
      });
      const payload = (await response.json()) as { secure_url?: string; error?: { message?: string } };
      if (response.ok && payload.secure_url) {
        return NextResponse.json({ url: payload.secure_url });
      }
      console.warn("Cloudinary upload failed, falling back to data URL:", payload.error?.message);
    } catch (e: any) {
      console.warn("Cloudinary upload request failed, falling back to data URL:", e?.message);
    }
  }

  // Seamless fallback: Convert image to Data URL (works without Cloudinary or any external service)
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const dataUrl = `data:${file.type};base64,${buffer.toString("base64")}`;
    return NextResponse.json({ url: dataUrl });
  } catch {
    return NextResponse.json({ error: "Failed to process image." }, { status: 500 });
  }
}
