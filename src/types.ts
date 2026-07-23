export type Page = 'home' | 'about' | 'services' | 'pricing' | 'contact' | 'faq';

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  highlights: string[];
  ctaText?: string;
}

export interface FormationOption {
  type: 'PBC' | 'PLC';
  fullName: string;
  priceUSD: number;
  bestFor: string;
  minDirectors: string;
  linesOfBusiness: string;
  regulatoryCommitments: string;
  docsIncluded: string[];
}

export interface RetainerPackage {
  id: string;
  name: string;
  priceUSD: number;
  period: string;
  popular?: boolean;
  tagline: string;
  features: string[];
}

export interface StartupPackage {
  id: string;
  name: string;
  priceUSD: number;
  popular?: boolean;
  tagline: string;
  features: string[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'formation' | 'tax' | 'vat' | 'audit' | 'general';
}

export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  serviceInterested: string;
  packageTier?: string;
  message: string;
  preferredContact: 'whatsapp' | 'phone' | 'email';
}

export interface EstimatorInputs {
  businessType: 'startup' | 'individual' | 'existing_sme' | 'corporate';
  needsFormation: boolean;
  formationType: 'pbc' | 'plc' | 'none';
  monthlyRevenueUSD: number;
  needsMonthlyRetainer: boolean;
  needsAudit: boolean;
  needsFiscalisation: boolean;
}

export interface EstimatorResult {
  recommendedStartupPackage?: StartupPackage;
  recommendedRetainer?: RetainerPackage;
  recommendedFormation?: FormationOption;
  estimatedDays: number;
  requiredDocuments: string[];
  totalInitialUSD: number;
  monthlyOngoingUSD: number;
}
