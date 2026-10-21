import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function BlogRedirectPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const { category } = await searchParams;
  if (category === "seller") {
    redirect("/florida-business-seller-resources");
  }
  redirect("/florida-business-buyer-resources");
}
