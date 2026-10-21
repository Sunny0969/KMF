import { Metadata } from "next";
import FloridaSellerResourcesClient from "./FloridaSellerResourcesClient";
import { listPublishedBlogs } from "@/lib/blogs";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Florida Business Seller Resources | KMF",
  description:
    "Access Florida business seller resources to help you prepare your company for a confidential, maximum-value exit with KMF Business Advisors.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/florida-business-seller-resources/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Florida Business Seller Resources | KMF",
    description:
      "Access Florida business seller resources to help you prepare your company for a confidential, maximum-value exit with KMF Business Advisors.",
    url: "https://kmfbusinessadvisor.com/florida-business-seller-resources/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2026/10/high-level-description-a-casual-iphone-s_A0nXVJXxVYyvOdsneb-uDA_hidKYOkfRR6GBk3XkG8erQ-1-1024x576.jpg",
        width: 1024,
        height: 576,
        alt: "Business for sale",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florida Business Seller Resources | KMF",
    description:
      "Access Florida business seller resources to help you prepare your company for a confidential, maximum-value exit with KMF Business Advisors.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2026/10/high-level-description-a-casual-iphone-s_A0nXVJXxVYyvOdsneb-uDA_hidKYOkfRR6GBk3XkG8erQ-1-1024x576.jpg",
    ],
  },
};

export default async function FloridaSellerResourcesPage() {
  const blogs = await listPublishedBlogs("seller");
  return <FloridaSellerResourcesClient blogs={blogs} />;
}
