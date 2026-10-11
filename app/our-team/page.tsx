import type { Metadata } from "next";
import OurTeamClient from "./OurTeamClient";

export const metadata: Metadata = {
  title: "Our Team | Licensed Business Brokers Florida & Advisors",
  description:
    "Meet the experienced team at KMF Business Advisors. Our licensed business brokers Florida team specialize in confidential business sales, valuations, and commercial real estate.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/our-team/",
  },
  openGraph: {
    title: "Our Team | Licensed Business Brokers Florida & Advisors",
    description:
      "Meet the experienced team at KMF Business Advisors. Our licensed business brokers Florida team specialize in confidential business sales, valuations, and commercial real estate.",
    url: "https://kmfbusinessadvisor.com/our-team/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/John-C.-Bucher-1.webp",
        width: 500,
        height: 607,
        alt: "business broker in florida",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Licensed Business Brokers Florida & Advisors",
    description:
      "Meet the experienced team at KMF Business Advisors. Our licensed business brokers Florida team specialize in confidential business sales, valuations, and commercial real estate.",
    images: ["https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/John-C.-Bucher-1.webp"],
  },
};

export default function OurTeamPage() {
  return <OurTeamClient />;
}
