/**
 * A single IV infusion offered under the "IV Therapy" service.
 * Drips are variants of one treatment (same delivery method, same
 * location on the body) rather than standalone services, so they live
 * nested under their parent Service rather than as top-level entries.
 */
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

/** The deep-dive block specific to Lymphatic Drainage Massage. */
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
  price?: string;
  bestFor: string;
  description: string;
  benefits: string[];
  treatmentTime?: string;
  recommendedSessions?: string;
  included?: string[];
  minimumStay?: string;
  treatmentAreas?: string[];
  note?: string;
  /** Only present on services (like IV Therapy) with individually bookable variants. */
  drips?: IVDrip[];
  lymphaticDetail?: LymphaticDetail;
  process?: ProcessStep[];
}