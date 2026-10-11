import { Metadata } from "next";
import FloridaBuyerResourcesClient from "./FloridaBuyerResourcesClient";

export const metadata: Metadata = {
  title: "Florida Business Buyer Resources | KMF",
  description:
    "Explore Florida business buyer resources for guidance on due diligence, business valuation reviews, and securing acquisition financing.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/florida-business-buyer-resources/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Florida Business Buyer Resources | KMF",
    description:
      "Explore Florida business buyer resources for guidance on due diligence, business valuation reviews, and securing acquisition financing.",
    url: "https://kmfbusinessadvisor.com/florida-business-buyer-resources/",
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
    title: "Florida Business Buyer Resources | KMF",
    description:
      "Explore Florida business buyer resources for guidance on due diligence, business valuation reviews, and securing acquisition financing.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function FloridaBuyerResourcesPage() {
  return <FloridaBuyerResourcesClient />;
}
