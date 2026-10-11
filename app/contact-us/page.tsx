import { Metadata } from "next";
import ContactUsClient from "./ContactUsClient";

export const metadata: Metadata = {
  title: "Contact Us | KMF Florida's Leading Business Advisors",
  description:
    "Get in touch with KMF Florida's Leading Business Advisors in Sunrise, FL. Schedule a 100% confidential consultation with our licensed Florida business brokers today.",
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/contact-us/",
  },
  openGraph: {
    locale: "en_US",
    type: "article",
    title: "Contact Us | KMF Florida's Leading Business Advisors",
    description:
      "Get in touch with KMF Florida's Leading Business Advisors in Sunrise, FL. Schedule a 100% confidential consultation with our licensed Florida business brokers today.",
    url: "https://kmfbusinessadvisor.com/contact-us/",
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
    title: "Contact Us | KMF Florida's Leading Business Advisors",
    description:
      "Get in touch with KMF Florida's Leading Business Advisors in Sunrise, FL. Schedule a 100% confidential consultation with our licensed Florida business brokers today.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/cropped-KMF-LOGO-e1681225150914.png",
    ],
  },
};

export default function ContactUsPage() {
  return <ContactUsClient />;
}
