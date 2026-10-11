import { Metadata } from "next";
import ProfitableBusinessClient from "./ProfitableBusinessClient";

export const metadata: Metadata = {
  title: "Profitable Businesses For Sale in Florida | KMF Business Advisors",
  description: "Explore profitable businesses for sale in Florida or discover what your business is worth. Get confidential valuation & expert broker advice with KMF Advisors.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/profitable-business-for-sale/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Profitable Businesses For Sale in Florida | KMF Business Advisors",
    description: "Explore profitable businesses for sale in Florida or discover what your business is worth. Get confidential valuation & expert broker advice with KMF Advisors.",
    url: "https://kmfbusinessadvisor.com/profitable-business-for-sale/",
    siteName: "KMF Business Advisors",
  },
};

export default function ProfitableBusinessPage() {
  return <ProfitableBusinessClient />;
}
