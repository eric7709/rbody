export interface IVDrip {
  slug: string;
  name: string;
  price: number;
  bestFor: string;
  description: string;
  benefits: string[];
  treatmentTime?: string;
  note?: string;
}

export interface ExpectationStep {
  step: string;
  detail: string;
}

export interface LymphaticDetail {
  eyebrow: string;
  title: string;
  strapline: string;
  intro: string;
  benefits: string[];
  who: string[];
  expect: ExpectationStep[];
  why: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  detail: string;
}
export interface Service {
  slug: string;
  name: string;
  price?: string; // Add this line
  bestFor: string;
  description: string;
  benefits: string[];
  treatmentTime?: string;
  recommendedSessions?: string;
  included?: string[];
  minimumStay?: string;
  treatmentAreas?: string[];
  note?: string;
  drips?: IVDrip[];
  lymphaticDetail?: LymphaticDetail;
  process?: ProcessStep[];
}