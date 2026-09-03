export interface Product {
  id: string;
  category: "b2b" | "agency" | string;
  categoryLabel: string;
  title: string;
  description: string;
  features: string[];
  tags: string[];
  ctaLabel: string;
  ctaHref: string;
}

export interface UseCase {
  id: string;
  clientType: string;
  problem: string;
  solution: string;
  metrics: { label: string; value: number; suffix?: string }[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StackItem {
  id: string;
  name: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface SocialProofItem {
  id: string;
  name: string;
}
