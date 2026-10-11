import { Metadata } from 'next';
import RealEstateClient from './RealEstateClient';

export const metadata: Metadata = {
  title: 'Commercial Real Estate Florida Services | KMF Business Advisors',
  description:
    'Looking for commercial property or business real estate in Florida? KMF Business Advisors offers expert commercial property sales, acquisitions, and leasing.',
  alternates: {
    canonical: 'https://kmfbusinessadvisor.com/real-estate/',
  },
  openGraph: {
    title: 'Commercial Real Estate Florida Services | KMF Business Advisors',
    description:
      'Looking for commercial property or business real estate in Florida? KMF Business Advisors offers expert commercial property sales, acquisitions, and leasing.',
    url: 'https://kmfbusinessadvisor.com/real-estate/',
    siteName: 'KMF Business Advisors',
    locale: 'en_US',
    type: 'article',
  },
};

export default function RealEstatePage() {
  return <RealEstateClient />;
}
