import type { Metadata } from "next";
import BusinessesForSaleClient from "./BusinessesForSaleClient";

export const metadata: Metadata = {
  title: "Businesses for Sale in Florida | KMF Business Advisors",
  description:
    "Explore top-rated businesses for sale in florida. Find confidential, pre-screened business opportunities across multiple industries with KMF.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/businesses-for-sale/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Businesses for Sale in Florida | KMF Business Advisors",
    description:
      "Explore top-rated businesses for sale in florida. Find confidential, pre-screened business opportunities across multiple industries with KMF.",
    url: "https://kmfbusinessadvisor.com/businesses-for-sale/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
        width: 500,
        height: 200,
        alt: "KMF Business Advisors official logo - Florida business brokerage services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Businesses for Sale in Florida | KMF Business Advisors",
    description:
      "Explore top-rated businesses for sale in florida. Find confidential, pre-screened business opportunities across multiple industries with KMF.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function BusinessesForSalePage() {
  return <BusinessesForSaleClient />;
}
