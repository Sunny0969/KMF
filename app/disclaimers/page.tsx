import { Metadata } from "next";
import DisclaimersClient from "./DisclaimersClient";

export const metadata: Metadata = {
  title: "Disclaimers - KMF",
  description: "General Information Only",
  alternates: {
    canonical: "/disclaimers",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Disclaimers - KMF",
    description: "General Information Only",
    url: "/disclaimers",
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
    title: "Disclaimers - KMF",
    description: "General Information Only",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function DisclaimersPage() {
  return <DisclaimersClient />;
}
