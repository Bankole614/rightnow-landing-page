import {
  FileText,
  Sparkles,
  MessagesSquare,
  Store,
  WalletCards,
  ClipboardList,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Product", href: "#product" },
  { label: "Features", href: "#features" },
  // { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
];

export const FEATURES = [
  {
    icon: FileText,
    title: "Case files, organized",
    body: "Hearings, notes, and documents live on one timeline, visible to the right people and no one else.",
  },
  {
    icon: Sparkles,
    title: "Ask your case anything",
    body: "AI reads every filed document and answers questions from the record in seconds, with sources, not guesses.",
  },
  {
    icon: MessagesSquare,
    title: "Messaging built for cases",
    body: "Threaded conversations, read receipts, and attachments, scoped to the case they belong to.",
  },
  {
    icon: Store,
    title: "Legal marketplace",
    body: "Lawyers post listings, clients post requests, and both sides can send proposals to find the right fit.",
  },
  {
    icon: WalletCards,
    title: "Wallet and payments",
    body: "Lawyers manage funds in their wallet while clients pay securely through Stripe and Paystack.",
  },
  {
    icon: ClipboardList,
    title: "Audit logs",
    body: "See who did what and when with a clear record of important case and account activity.",
  },
];

export const TIERS = [
  {
    name: "Free",
    price: "₦0",
    priceUsd: "$0",
    period: "/mo",
    desc: "Full case management to get started.",
    features: [
      "Unlimited cases",
      "Hearings, notes & documents",
      "Case messaging",
      "Marketplace listing",
      "5 AI summaries or questions/mo",
    ],
    highlighted: false,
  },
  {
    name: "Paid",
    price: "₦15,000",
    priceUsd: "~$11",
    period: "/mo",
    desc: "Everything in Free, with room to actually use the AI.",
    features: [
      "Everything in Free",
      "50 AI summaries or questions/mo",
      "Priority email support",
      "Early access to new features",
    ],
    highlighted: true,
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "I stopped losing hearing dates the week we switched. Everything is in the case file, where it should have been all along.",
    name: "F. Okonkwo",
    role: "Solo Practitioner, Lagos",
  },
  {
    quote:
      "My clients ask fewer 'what's happening with my case' calls now — they can just check the app.",
    name: "A. Ibrahim",
    role: "Managing Partner, 4-person firm",
  },
  {
    quote:
      "The AI Q&A found a clause in a 40-page filing faster than my paralegal could have flagged it.",
    name: "T. Adeyemi",
    role: "Litigation Associate",
  },
];

export const FAQS = [
  {
    q: "Can clients see everything a lawyer sees?",
    a: "No. Case visibility is role-based. Private notes and internal remarks are restricted to owners and legal staff, and clients see only what's marked shared.",
  },
  {
    q: "How does the AI answer questions about my case?",
    a: "It reads the summarized case record. Documents, notes, and hearings you have access to and answers only from what's actually filed, flagging when something isn't in the record.",
  },
  {
    q: "Do you support payments outside Nigeria?",
    a: "Yes. Stripe handles international payments and Paystack handles NGN, so invoices work whether your client is local or abroad.",
  },
  {
    q: "Can I move my existing cases in?",
    a: "Yes, bring your documents and case details, and our team will help you get set up during onboarding.",
  },
];
