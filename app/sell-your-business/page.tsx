import type { Metadata } from "next";
import SellYourBusinessClient from "./SellYourBusinessClient";

export const metadata: Metadata = {
  title: "Sell my Business in Florida | Top 1 Florida Business Brokers",
  description:
    "Ready to sell my business in Florida? KMF Business Advisors provides confidential valuations, qualified buyers, and expert guidance to maximize your exit value.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/sell-your-business/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Sell my Business in Florida | Top 1 Florida Business Brokers",
    description:
      "Ready to sell my business in Florida? KMF Business Advisors provides confidential valuations, qualified buyers, and expert guidance to maximize your exit value.",
    url: "https://kmfbusinessadvisor.com/sell-your-business/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2025/05/Business-broker-Florida-team-meeting-with-client-discussing-business-sale-1024x585.jpeg",
        width: 1024,
        height: 585,
        alt: "sell my business in Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell my Business in Florida | Top 1 Florida Business Brokers",
    description:
      "Ready to sell my business in Florida? KMF Business Advisors provides confidential valuations, qualified buyers, and expert guidance to maximize your exit value.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2025/05/Business-broker-Florida-team-meeting-with-client-discussing-business-sale-1024x585.jpeg",
    ],
  },
};

export default function SellYourBusinessPage() {
  return <SellYourBusinessClient />;
}
