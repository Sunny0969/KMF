import { Metadata } from "next";
import TermsAndConditionsClient from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions - KMF",
  description: "1. Acceptance of Terms",
  alternates: {
    canonical: "/terms-and-conditions",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Terms and Conditions - KMF",
    description: "1. Acceptance of Terms",
    url: "/terms-and-conditions",
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
    title: "Terms and Conditions - KMF",
    description: "1. Acceptance of Terms",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
