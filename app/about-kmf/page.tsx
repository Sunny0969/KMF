import { Metadata } from "next";
import AboutKmfClient from "./AboutKmfClient";

export const metadata: Metadata = {
  title: "KMF Business Advisors | About Our Firm",
  description:
    "Learn more about KMF Business Advisors. We are premier business brokerage specialists serving middle-market companies across Florida.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/about-kmf/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "KMF Business Advisors | About Our Firm",
    description:
      "Learn more about KMF Business Advisors. We are premier business brokerage specialists serving middle-market companies across Florida.",
    url: "https://kmfbusinessadvisor.com/about-kmf/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2026/10/53e4defa970fcba494f0208c5eb9c757.jpg",
        width: 735,
        height: 617,
        alt: "KMF Business Advisors team consulting with Florida business owner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KMF Business Advisors | About Our Firm",
    description:
      "Learn more about KMF Business Advisors. We are premier business brokerage specialists serving middle-market companies across Florida.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2026/10/53e4defa970fcba494f0208c5eb9c757.jpg",
    ],
  },
};

export default function AboutKmfPage() {
  return <AboutKmfClient />;
}
