import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Business Broker Florida | KMF Business Advisors",
  description:
    "Looking for a trusted business broker florida ? KMF Business Advisors provides confidential business brokerage and M&A services across Florida.",
  metadataBase: new URL("https://kmfbusinessadvisor.com/"),
  alternates: {
    canonical: "https://kmfbusinessadvisor.com/",
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    title: "Business Broker Florida | KMF Business Advisors",
    description:
      "Looking for a trusted business broker florida ? KMF Business Advisors provides confidential business brokerage and M&A services across Florida.",
    url: "https://kmfbusinessadvisor.com/",
    siteName: "KMF Business Advisor",
    images: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png",
        width: 500,
        height: 248,
        alt: "business broker in florida",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Broker Florida | KMF Business Advisors",
    description:
      "Looking for a trusted business broker florida ? KMF Business Advisors provides confidential business brokerage and M&A services across Florida.",
    images: [
      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png",
    ],
  },
  icons: {
    icon: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914-100x100.png",
        sizes: "32x32",
      },
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png",
        sizes: "192x192",
      },
    ],
    apple: [
      {
        url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Place",
                  "@id": "https://kmfbusinessadvisor.com/#place",
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: "26.1833548",
                    longitude: " -80.2860978",
                  },
                  hasMap:
                    "https://www.google.com/maps/search/?api=1&query=26.1833548, -80.2860978",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "10242 NW 47th St, STE 39",
                    addressLocality: "Sunrise",
                    addressRegion: "Florida",
                    postalCode: "33351",
                    addressCountry: "US",
                  },
                },
                {
                  "@type": ["LocalBusiness", "Organization"],
                  "@id": "https://kmfbusinessadvisor.com/#organization",
                  name: "KMF Business Advisor",
                  url: "https://kmfbusinessadvisor.com/",
                  email: "swadhwani@kmfbusinessadvisors.com",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "10242 NW 47th St, STE 39",
                    addressLocality: "Sunrise",
                    addressRegion: "Florida",
                    postalCode: "33351",
                    addressCountry: "US",
                  },
                  logo: {
                    "@type": "ImageObject",
                    "@id": "https://kmfbusinessadvisor.com/#logo",
                    url: "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914-qdr4u42nzklc6fnjmpcypywnwfwdk63tlx7jl1mg3k.png",
                    contentUrl:
                      "https://kmfbusinessadvisor.com/wp-content/uploads/2024/04/KMF-LOGO-e1681225150914-qdr4u42nzklc6fnjmpcypywnwfwdk63tlx7jl1mg3k.png",
                    caption: "KMF Business Advisor",
                    inLanguage: "en-US",
                    width: "121",
                    height: "60",
                  },
                  openingHours: ["Mo,Tu,We,Th,Fr,Sa,Su 09:00-17:00"],
                  description: "Business broker in Florida. ",
                  legalName: "KMF Business Advisor",
                  location: {
                    "@id": "https://kmfbusinessadvisor.com/#place",
                  },
                  telephone: "954-864-9161",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`} suppressHydrationWarning>
        <Header />
        {children}
      </body>
    </html>
  );
}
