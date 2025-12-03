// src/types.ts
export interface Lawyer {
  name: string;
  specialty: string;
  experience: string;
  rating: number;
  cases: number;
  avatar: string;
  color: string; // tailwind gradient classes (e.g. 'from-indigo-500 to-purple-500')
}

export interface ActiveCase {
  title: string;
  nextHearing?: string; // ISO date or human string
  progressPercent?: number; // 0-100
  tasksSummary?: string; // e.g. "3/8"
  docsCount?: number;
  messagesCount?: number;
  demo?: boolean; // indicate demo/sample
}

export interface Feature {
  title: string;
  desc: string;
  icon: string;
}

export interface Pricing {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}
