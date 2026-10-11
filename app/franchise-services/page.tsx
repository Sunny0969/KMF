import { Metadata } from 'next';
import FranchiseServicesClient from './FranchiseServicesClient';

export const metadata: Metadata = {
  title: 'Franchise Services in Florida | Buy, Sell & Franchise Your Business',
  description:
    'Explore top franchise opportunities in Florida with KMF Business Advisors. We guide buyers, assist sellers, and help existing businesses franchise successfully.',
  alternates: {
    canonical: 'https://kmfbusinessadvisor.com/franchise-services/',
  },
  openGraph: {
    title: 'Franchise Services in Florida | Buy, Sell & Franchise Your Business',
    description:
      'Explore top franchise opportunities in Florida with KMF Business Advisors. We guide buyers, assist sellers, and help existing businesses franchise successfully.',
    url: 'https://kmfbusinessadvisor.com/franchise-services/',
    siteName: 'KMF Business Advisor',
    locale: 'en_US',
    type: 'article',
  },
};

export default function FranchiseServicesPage() {
  return <FranchiseServicesClient />;
}
