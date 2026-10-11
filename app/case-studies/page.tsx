import { Metadata } from "next";
import CaseStudiesClient from "./CaseStudiesClient";

export const metadata: Metadata = {
  title: "KMF Business Advisors Florida | Case Studies",
  description:
    "Explore successful business sale case studies by KMF Business Advisors Florida. Proven track record in confidential business sales, valuations, and M&A deals in Florida.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/case-studies/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "KMF Business Advisors Florida | Case Studies",
    description:
      "Explore successful business sale case studies by KMF Business Advisors Florida. Proven track record in confidential business sales, valuations, and M&A deals in Florida.",
    url: "https://kmfbusinessadvisor.com/case-studies/",
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
    title: "KMF Business Advisors Florida | Case Studies",
    description:
      "Explore successful business sale case studies by KMF Business Advisors Florida. Proven track record in confidential business sales, valuations, and M&A deals in Florida.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function CaseStudiesPage() {
  return <CaseStudiesClient />;
}
