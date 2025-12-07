export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  features: string[];
  recommended?: boolean;
}

export interface ClassInfo {
  id: string;
  title: string;
  description: string;
  image: string;
  schedule: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}