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

export interface Feature {
  title: string;
  desc: string;
  icon: React.ReactNode;
  gradient: string;
}

export interface Pricing {
  tier: string;
  price: string;
  period: string;
  features: string[];
  highlight: boolean;
}
