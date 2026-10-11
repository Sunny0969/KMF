import { Metadata } from "next";
import BusinessBrokerFaqClient from "./BusinessBrokerFaqClient";

export const metadata: Metadata = {
  title: "Business Broker FAQ | KMF Business Advisors",
  description:
    "Read our business broker faq to get clear answers about business sales, valuations, non-disclosure agreements, and brokerage fees in Florida.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/business-broker-faq/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Business Broker FAQ | KMF Business Advisors",
    description:
      "Read our business broker faq to get clear answers about business sales, valuations, non-disclosure agreements, and brokerage fees in Florida.",
    url: "https://kmfbusinessadvisor.com/business-broker-faq/",
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
    title: "Business Broker FAQ | KMF Business Advisors",
    description:
      "Read our business broker faq to get clear answers about business sales, valuations, non-disclosure agreements, and brokerage fees in Florida.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function BusinessBrokerFaqPage() {
  return <BusinessBrokerFaqClient />;
}
