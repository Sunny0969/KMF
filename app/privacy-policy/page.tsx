import { Metadata } from "next";
import PrivacyPolicyClient from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy - KMF",
  description: "1. Information We Collect",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Privacy Policy - KMF",
    description: "1. Information We Collect",
    url: "/privacy-policy",
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
    title: "Privacy Policy - KMF",
    description: "1. Information We Collect",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
