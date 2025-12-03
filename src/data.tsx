// src/data.tsx
import type { Lawyer, Feature, Pricing } from "./types";
import React from "react";
import { FileText } from "lucide-react";

export const lawyers: Lawyer[] = [
  { name: "Aisha Bello", specialty: "Family Law", experience: "8 years", rating: 4.9, cases: 120, avatar: "A", color: "from-indigo-500 to-purple-500" },
  { name: "Marcus Johnson", specialty: "Corporate", experience: "12 years", rating: 4.8, cases: 200, avatar: "M", color: "from-cyan-500 to-blue-500" },
  { name: "Samira Khan", specialty: "Immigration", experience: "6 years", rating: 5.0, cases: 85, avatar: "S", color: "from-pink-500 to-rose-500" }
];

export const features: Feature[] = [
  { title: "Smart Case Management", desc: "Track cases, deadlines, and tasks with intelligent reminders and automated workflows.", icon: <FileText className="w-5 h-5" />},
  { title: "AI Document Analysis", desc: "Upload contracts and get instant summaries, key dates, and risk assessments in seconds.", icon: <FileText className="w-5 h-5" />},
  { title: "Secure Messaging", desc: "End-to-end encrypted conversations with clients, organized by case with file sharing.", icon: <FileText className="w-5 h-5" />},
  { title: "OCR & Search", desc: "Scan documents, extract text automatically, and find anything instantly across all files.", icon: <FileText className="w-5 h-5" />},
  { title: "Client Portal", desc: "Give clients secure access to their case status, documents, and updates 24/7.", icon: <FileText className="w-5 h-5" /> },
  { title: "Mobile First", desc: "Work from anywhere with our blazing-fast mobile app—never miss a deadline again.", icon: <FileText className="w-5 h-5" />}
];

export const pricing: Pricing[] = [
  { tier: "Starter", price: "Free", period: "forever", features: ["1 user account","5 active cases","5 documents/month","Basic AI summaries","Email support"], highlight: false },
  { tier: "Professional", price: "$29", period: "/month", features: ["5 user accounts","Unlimited cases","Unlimited documents","Advanced AI features","Priority support","Custom branding"], highlight: true },
  { tier: "Enterprise", price: "Custom", period: "pricing", features: ["Unlimited users","Dedicated support","Admin dashboard","Custom integrations","SLA guarantee","White-label option"], highlight: false }
];
