import { Metadata } from "next";
import SellFranchiseClient from "./SellFranchiseClient";

export const metadata: Metadata = {
  title: "Sell a Franchise in Florida | KMF Business Advisors",
  description:
    "Need to sell a franchise in florida? KMF manages franchisor approvals, buyer vetting, and confidential franchise transfers for maximum value.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/sell-a-franchise/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Sell a Franchise in Florida | KMF Business Advisors",
    description:
      "Need to sell a franchise in florida? KMF manages franchisor approvals, buyer vetting, and confidential franchise transfers for maximum value.",
    url: "https://kmfbusinessadvisor.com/sell-a-franchise/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2026/08/e2969419ee507d8701664c1c74364397.jpg",
        width: 736,
        height: 736,
        alt: "Sell a Franchise in Florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sell a Franchise in Florida | KMF Business Advisors",
    description:
      "Need to sell a franchise in florida? KMF manages franchisor approvals, buyer vetting, and confidential franchise transfers for maximum value.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2026/08/e2969419ee507d8701664c1c74364397.jpg",
    ],
  },
};

export default function SellFranchisePage() {
  return <SellFranchiseClient />;
}
