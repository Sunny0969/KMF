import { Metadata } from "next";
import FranchiseYourBusinessClient from "./FranchiseYourBusinessClient";

export const metadata: Metadata = {
  title: "Franchise Your Business Florida | KMF Business Advisors",
  description:
    "Transform your Florida business into a thriving franchise system. KMF Business Advisors guides you through FDD legal prep, operations manuals, and buyer matching.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/franchise-your-business-florida/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Franchise Your Business Florida | KMF Business Advisors",
    description:
      "Transform your Florida business into a thriving franchise system. KMF Business Advisors guides you through FDD legal prep, operations manuals, and buyer matching.",
    url: "https://kmfbusinessadvisor.com/franchise-your-business-florida/",
    siteName: "KMF Business Advisor",
  },
};

export default function FranchiseYourBusinessPage() {
  return <FranchiseYourBusinessClient />;
}
