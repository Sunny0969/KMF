import fs from "node:fs/promises";
import path from "node:path";
import type { BlogRecord } from "@/lib/blog";
import type { InquiryRecord } from "@/lib/inquiry";

const DATA_DIR =
  process.env.DATA_DIR ||
  (process.env.VERCEL ? path.join("/tmp", "kmf-data") : path.join(process.cwd(), "data"));

const INQUIRIES_FILE = path.join(DATA_DIR, "inquiries.json");
const BLOGS_FILE = path.join(DATA_DIR, "blogs.json");

const SEED_BLOGS: BlogRecord[] = [
  {
    id: "seed-blog-1",
    created_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 3).toISOString(),
    slug: "how-to-value-a-florida-business",
    title: "How to Value a Florida Business for Confidential Sale",
    meta_title: "How to Value a Florida Business for Sale | KMF Business Advisors",
    meta_description:
      "Understand SDE, EBITDA, and market multipliers to calculate the fair market valuation of your Florida business before listing.",
    category: "seller",
    content_html:
      "<p>Valuing a small-to-medium-sized business in Florida requires analyzing Seller's Discretionary Earnings (SDE), add-backs, and industry-specific market multipliers.</p><h2>Understanding SDE vs EBITDA</h2><p>For owner-operated businesses generating under $5M in revenue, SDE is the gold standard benchmark. SDE includes net profit plus the owner's salary, perks, interest, and non-recurring expenses.</p><h2>The Multiplier Effect</h2><p>In Florida, main street businesses typically trade at 2.0x to 3.5x SDE, while larger businesses and recurring revenue models command higher multiples.</p>",
    faqs: [
      {
        question: "How long does a business valuation take?",
        answer: "A professional valuation typically takes 3 to 7 business days once financial statements (P&L and tax returns) are provided.",
      },
      {
        question: "Is the valuation strictly confidential?",
        answer: "Yes, all consultations and valuations at KMF Business Advisors are protected under strict confidentiality agreements.",
      },
    ],
    cover_image_url: null,
    published: true,
  },
  {
    id: "seed-blog-2",
    created_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    updated_at: new Date(Date.now() - 86400000 * 2).toISOString(),
    slug: "guide-to-buying-a-business-in-florida",
    title: "The Ultimate Guide to Buying an Established Business in Florida",
    meta_title: "Guide to Buying a Business in Florida | KMF Business Advisors",
    meta_description:
      "Everything buyers need to know about due diligence, SBA financing, and closing a profitable Florida business acquisition.",
    category: "buyer",
    content_html:
      "<p>Florida continues to be one of the top destinations for entrepreneurs acquiring profitable, established businesses. From favorable tax policies to population growth, the market offers exceptional opportunities.</p><h2>Step 1: Financial Readiness & SBA Pre-Qualification</h2><p>Before beginning your search, ensure you have verifiable liquid capital and understand SBA 7(a) loan requirements, which typically require a 10% to 20% down payment.</p><h2>Step 2: Due Diligence</h2><p>Reviewing historical financial records, lease agreements, customer concentration, and employee contracts is vital before final purchase commitment.</p>",
    faqs: [
      {
        question: "What is the typical down payment for buying a business?",
        answer: "With SBA financing, down payments are usually 10% to 20%. Cash purchases or seller financing structures vary based on agreement.",
      },
    ],
    cover_image_url: null,
    published: true,
  },
  {
    id: "seed-blog-3",
    created_at: new Date(Date.now() - 86400000).toISOString(),
    updated_at: new Date(Date.now() - 86400000).toISOString(),
    slug: "companies-for-sale-in-usa",
    title: "Companies for Sale in USA: Finding and Acquiring Profitable Businesses",
    meta_title: "Companies for Sale in USA | Florida & National Business Opportunities",
    meta_description:
      "Explore strategies for finding, evaluating, and purchasing profitable companies for sale in Florida and across the USA with KMF Business Advisors.",
    category: "seller",
    content_html:
      "<p>Navigating companies for sale in the USA requires a clear acquisition strategy, thorough financial analysis, and seasoned brokerage representation.</p><h2>Evaluating Business Listings</h2><p>When searching for companies for sale across Florida and the greater US, focus on historical cash flow, recurring revenue, trained staff, and growth potential.</p><h2>Confidential Acquisition Process</h2><p>Working with professional business advisors ensures you review vetted financial statements and protect trade secrets throughout due diligence and closing.</p>",
    faqs: [
      {
        question: "How do I find confidential companies for sale in the USA?",
        answer:
          "Working with a licensed business broker like KMF Business Advisors gives you access to off-market and pre-vetted business listings that are never advertised publicly.",
      },
    ],
    cover_image_url: null,
    published: true,
  },
];

async function ensureDirectory(): Promise<void> {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch {
    // Ignore already exists
  }
}

export async function getLocalInquiries(): Promise<InquiryRecord[]> {
  await ensureDirectory();
  try {
    const raw = await fs.readFile(INQUIRIES_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export async function saveLocalInquiry(inquiry: InquiryRecord): Promise<void> {
  await ensureDirectory();
  const inquiries = await getLocalInquiries();
  const existingIndex = inquiries.findIndex((item) => item.id === inquiry.id);
  if (existingIndex >= 0) {
    inquiries[existingIndex] = inquiry;
  } else {
    inquiries.unshift(inquiry);
  }
  await fs.writeFile(INQUIRIES_FILE, JSON.stringify(inquiries, null, 2), "utf-8");
}

export async function getLocalBlogs(): Promise<BlogRecord[]> {
  await ensureDirectory();
  try {
    const raw = await fs.readFile(BLOGS_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed;
    }
  } catch {
    // Fall back to seed blogs
  }
  try {
    await fs.writeFile(BLOGS_FILE, JSON.stringify(SEED_BLOGS, null, 2), "utf-8");
  } catch {
    // Non-fatal
  }
  return SEED_BLOGS;
}

export async function saveLocalBlog(blog: BlogRecord): Promise<void> {
  await ensureDirectory();
  const blogs = await getLocalBlogs();
  const existingIndex = blogs.findIndex((item) => item.id === blog.id || item.slug === blog.slug);
  if (existingIndex >= 0) {
    blogs[existingIndex] = blog;
  } else {
    blogs.unshift(blog);
  }
  await fs.writeFile(BLOGS_FILE, JSON.stringify(blogs, null, 2), "utf-8");
}

export async function deleteLocalBlog(id: string): Promise<boolean> {
  await ensureDirectory();
  const blogs = await getLocalBlogs();
  const filtered = blogs.filter((item) => item.id !== id);
  if (filtered.length !== blogs.length) {
    await fs.writeFile(BLOGS_FILE, JSON.stringify(filtered, null, 2), "utf-8");
    return true;
  }
  return false;
}
