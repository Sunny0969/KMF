import { Metadata } from "next";
import AccessibilityStatementClient from "./AccessibilityStatementClient";

export const metadata: Metadata = {
  title: "Accessibility Statement - KMF",
  description:
    "KMF Business Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for",
  alternates: {
    canonical: "/accessibility-statement",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Accessibility Statement - KMF",
    description:
      "KMF Business Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for",
    url: "/accessibility-statement",
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
    title: "Accessibility Statement - KMF",
    description:
      "KMF Business Advisors is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function AccessibilityStatementPage() {
  return <AccessibilityStatementClient />;
}
