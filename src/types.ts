export interface Product {
  id: string;
  brandName: string;
  description: string;
  strength: string;
  packaging: string;
  countryOfOrigin: string;
  minOrderQuantity: number;
  mrp: number;
  wholesalePrice: number;
  mfg: string;
  division: string;
  gstPct: number;
  category: string;
  form: string;
  isFeatured?: boolean;
  badge?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface NavLink {
  name: string;
  path: string;
}
