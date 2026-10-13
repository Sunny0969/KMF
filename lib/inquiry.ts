export const INQUIRY_SOURCES = [
  "home",
  "contact-us",
  "sell-a-franchise",
  "profitable-business",
  "buyer-resources",
] as const;

export type InquirySource = (typeof INQUIRY_SOURCES)[number];

export type InquiryRecord = {
  id: string;
  created_at: string;
  source: string;
  full_name: string;
  email: string;
  phone: string | null;
  details: Record<string, string | boolean>;
};

export const SOURCE_LABELS: Record<InquirySource, string> = {
  home: "Homepage",
  "contact-us": "Contact",
  "sell-a-franchise": "Franchise resale",
  "profitable-business": "Business valuation",
  "buyer-resources": "Buyer registration",
};

const DETAIL_LABELS: Record<string, string> = {
  service: "Service",
  message: "Message",
  serviceInterest: "Area of interest",
  conceptName: "Franchise concept",
  numUnits: "Number of units",
  unitLocations: "Unit locations",
  yearsOperating: "Years operating",
  sdeEbitda: "SDE / EBITDA",
  leaseExpiration: "Lease expiration",
  grossRevenue: "Gross revenue",
  remainingTerm: "Remaining term",
  resaleTimeframe: "Resale timeframe",
  franchisorNotified: "Franchisor notified",
  businessName: "Business name",
  industry: "Industry",
  timeframe: "Timeframe",
  realEstateIncluded: "Real estate included",
  location: "Location",
  annualRevenue: "Annual revenue",
  profitSDE: "Profit / SDE",
  ownerCompensation: "Owner compensation",
  expectedPrice: "Expected price",
  employees: "Employees",
  ownerHours: "Owner hours",
  refNumber: "Reference number",
  locations: "Preferred locations",
  preferredIndustry: "Preferred industry",
  investmentBudget: "Investment budget",
  liquidCapital: "Liquid capital",
  purchaseStructure: "Purchase structure",
  visaInterest: "Visa interest",
  opportunityAlerts: "Opportunity alerts",
};

export function sourceLabel(source: string) {
  if (source in SOURCE_LABELS) return SOURCE_LABELS[source as InquirySource];
  return source;
}

export function detailLabel(key: string) {
  if (DETAIL_LABELS[key]) return DETAIL_LABELS[key];
  const spaced = key.replace(/([A-Z])/g, " $1").replace(/[_-]+/g, " ").trim();
  return spaced.charAt(0).toUpperCase() + spaced.slice(1);
}

export function formatDetailValue(value: string | boolean) {
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value;
}
