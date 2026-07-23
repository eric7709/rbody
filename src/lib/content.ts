export const site = {
  name: "Rbody",
  fullName: "Rbody Clinic",
  tagline: "Lagos's Recovery & Body Clinic",
  whatsappNumber: "+2347074170795",
  whatsappDisplay: "+234 000 000 0000",
  address: "Adedeji Adekola Street, Lekki Phase 1, Lagos, Nigeria",
  instagram: "@rbody_clinic",
  hours: [
    { days: "Mon – Sat", time: "8:00 AM – 5:00 PM" },
    { days: "Sunday", time: "12pm - 5pm" },
  ],
};

export const waLink = (message?: string) =>
  `https://wa.me/${site.whatsappNumber}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`;

export type Service = {
  slug: string;
  name: string;
  icon: "hand" | "user" | "sparkles" | "droplet" | "syringe" | "gauge";
  summary: string;
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    icon: "hand",
    summary:
      "Gentle, technique-led manual massage that helps move excess fluid, reduce swelling, and support your body's natural drainage system.",
    benefits: [
      "Reduces swelling & puffiness",
      "Softens fibrosis and hardness",
      "Improves comfort & mobility",
    ],
  },
  {
    slug: "post-op-recovery-care",
    name: "Post-Op Recovery Care",
    icon: "user",
    summary:
      "Specialist support for clients recovering from cosmetic surgery — BBL, tummy tucks, liposuction and more — following safe, guided protocols.",
    benefits: [
      "Faster, smoother healing",
      "Reduces risk of complications",
      "Guidance aligned to your surgeon's plan",
    ],
  },
  {
    slug: "body-sculpting",
    name: "Body Sculpting",
    icon: "sparkles",
    summary:
      "Non-invasive contouring sessions that target stubborn areas and help refine your natural shape over a series of visits.",
    benefits: [
      "Visibly tightens & contours",
      "No downtime required",
      "Progress tracked each session",
    ],
  },
  {
    slug: "lipolysis",
    name: "Lipolysis",
    icon: "droplet",
    summary:
      "Targeted fat-reduction treatment designed to break down localized fat deposits that resist diet and exercise.",
    benefits: [
      "Targets stubborn fat areas",
      "Complements sculpting plans",
      "Minimal downtime",
    ],
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy (Glow, Brightening & Lightening)",
    icon: "syringe",
    summary:
      "Nutrient and antioxidant infusions administered to support radiant, even-toned skin from the inside out.",
    benefits: [
      "Brightens & evens skin tone",
      "Boosts hydration & glow",
      "Administered by trained staff",
    ],
  },
  {
    slug: "weight-loss-injections",
    name: "Weight-Loss Injections",
    icon: "gauge",
    summary:
      "Medically-guided weight-loss injection programs, paired with progress check-ins to keep your plan safe and on track.",
    benefits: [
      "Structured, monitored program",
      "Paired with body sculpting for results",
      "Ongoing consultation included",
    ],
  },
];

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

export const ivDrips: IVDrip[] = [
  {
    slug: "lumi-radiance-drip",
    name: "Lumi Radiance Drip",
    price: 85000,
    bestFor: "Dull, tired-looking skin and enhancing your natural glow.",
    description:
      "A carefully formulated blend of glutathione, vitamin C, and other radiance-boosting nutrients designed to support healthy, glowing skin from within.",
    benefits: [
      "Supports a brighter, more radiant-looking complexion",
      "Rich in antioxidants to help protect against oxidative stress",
      "Promotes healthier-looking, revitalized skin",
      "Supports a more even-looking skin tone",
      "Helps restore a fresh, luminous appearance",
    ],
    note: "For best results, multiple sessions may be recommended based on your individual skin goals.",
  },
  {
    slug: "smokers-recovery-drip",
    name: "Smokers Recovery Drip",
    price: 70000,
    bestFor:
      "Current and former smokers, and individuals regularly exposed to second-hand smoke.",
    description:
      "A premium IV infusion with vitamin C, glutathione, B-complex vitamins, and other antioxidant nutrients designed to replenish essential vitamins, support the body's natural defenses against oxidative stress, and promote overall wellbeing.",
    benefits: [
      "Rich in antioxidants",
      "Supports immune function",
      "Replenishes essential vitamins",
      "Promotes hydration and recovery",
      "Supports healthier-looking skin",
    ],
    treatmentTime: "45–60 minutes",
  },
  {
    slug: "skin-repair-booster",
    name: "Skin Repair Booster",
    price: 95000,
    bestFor: "Dull, dehydrated, or tired-looking skin.",
    description:
      "A premium IV infusion with vitamin C, glutathione, amino acids, and skin-supporting nutrients that helps support collagen production, improve hydration, and promote healthier, more radiant-looking skin.",
    benefits: [
      "Supports collagen production",
      "Improves skin hydration and glow",
      "Rich in antioxidants",
      "Promotes healthier-looking skin",
      "Supports a brighter, more even-looking complexion",
    ],
    treatmentTime: "45–60 minutes",
  },
  {
    slug: "bridal-glow-drip",
    name: "Bridal Glow Drip",
    price: 120000,
    bestFor:
      "Brides-to-be, special occasions, photoshoots, events, dull skin, and anyone wanting a radiant, healthy glow.",
    description:
      "A luxurious IV infusion designed to enhance your natural glow, support healthy-looking skin, and leave you looking refreshed and radiant for your big day or any special occasion.",
    benefits: [
      "Promotes a radiant, luminous complexion",
      "Supports brighter, more even-looking skin",
      "Helps improve skin hydration and vitality",
      "Rich in antioxidants to support healthy skin",
      "Leaves you looking refreshed and event-ready",
    ],
    treatmentTime: "45–60 minutes",
  },
  {
    slug: "vitamin-c-immune-boost",
    name: "Vitamin C Immune Boost",
    price: 55000,
    bestFor:
      "Individuals looking to support their immune system, boost energy, and enhance overall wellness.",
    description:
      "A high-dose vitamin C IV infusion designed to support immune function, provide powerful antioxidant protection, and help you feel refreshed and revitalized.",
    benefits: [
      "Supports a healthy immune system",
      "Rich in antioxidants",
      "Helps combat oxidative stress",
      "Promotes energy and overall wellbeing",
      "Supports recovery and hydration",
    ],
    treatmentTime: "45–60 minutes",
  },
];


export const lymphaticDetail = {
  eyebrow: "Signature Treatment",
  title: "Lymphatic Drainage Massage",
  strapline: "Feel lighter. Heal better. Recover faster.",
  intro:
    "Lymphatic drainage massage is a gentle, specialised treatment designed to stimulate your lymphatic system, helping your body naturally eliminate excess fluid and toxins. Whether you're recovering from surgery or dealing with bloating and water retention, this treatment supports faster recovery and improved overall wellness.",
  benefits: [
    "Reduces swelling and inflammation",
    "Improves lymphatic circulation",
    "Softens fibrosis after surgery",
    "Relieves discomfort and tightness",
    "Supports faster healing",
    "Helps reduce water retention",
    "Promotes relaxation and wellbeing",
  ],
  who: [
    "Post-operative clients",
    "Clients with bloating",
    "Water retention",
    "Poor circulation",
    "General wellness",
  ],
  expect: [
    { step: "Consultation", detail: "A short conversation about your history, surgery date (if any), and goals." },
    { step: "Body assessment", detail: "We check areas of swelling, tightness or fibrosis before we begin." },
    { step: "60-minute treatment", detail: "Hands-on lymphatic technique delivered by a trained therapist." },
    { step: "Aftercare recommendations", detail: "Simple guidance to protect and extend your results at home." },
  ],
  why:
    "Unlike a regular massage, our lymphatic drainage sessions are performed using specialised techniques by trained professionals who understand post-operative care and lymphatic health. Every treatment is tailored to your body's needs to promote safe, effective recovery and lasting results.",
};

export const process = [
  {
    step: "01",
    title: "Consultation",
    detail:
      "We assess your body, history and goals — including any surgeon recovery notes.",
  },
  {
    step: "02",
    title: "Personalized Plan",
    detail: "A treatment schedule built around your timeline, not a generic package.",
  },
  {
    step: "03",
    title: "Active Treatment",
    detail: "Sessions delivered by trained specialists, with progress reviewed regularly.",
  },
  {
    step: "04",
    title: "Maintenance",
    detail: "Ongoing support to protect and maintain your results long-term.",
  },
];

export const galleryItems = [
  { label: "Clinic Entrance", icon: "door" },
  { label: "Massage Session", icon: "hand" },
  { label: "Treatment Room", icon: "sofa" },
  { label: "Client Session", icon: "camera" },
  { label: "IV Therapy Setup", icon: "droplet" },
  { label: "Process Video", icon: "video" },
] as const;

export const beforeAfter = [
  {
    title: "Body Sculpting",
    meta: "8 sessions",
    images: [
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody4_xd2ccq.jpg",
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody5_wyqral.jpg",
    ],
  },
  {
    title: "Rbody Signature Sculpt",
    meta: "Signature program",
    images: [
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody1_qsx0an.jpg",
    ],
  },
  {
    title: "Post-Op Recovery",
    meta: "6 weeks",
    images: [],
  },
  {
    title: "Weight-Loss Program",
    meta: "3 months",
    images: [],
  },
  {
    title: "Lymphatic Drainage",
    meta: "4 sessions",
    images: [
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody6_qzk250.jpg",
    ],
  },
  {
    title: "Lipolysis Treatment",
    meta: "6 sessions",
    images: [
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody2_y3usnt.jpg",
      "https://res.cloudinary.com/ddagbflm8/image/upload/v1784723534/rbody3_v4wbbg.jpg",
    ],
  },
  {
    title: "IV Therapy Glow",
    meta: "3 sessions",
    images: [],
  },
];
export const testimonials = [
  {
    quote:
      "I came in for post-op lymphatic massage after my surgery and the difference in my swelling within two weeks was incredible. The team genuinely knew what they were doing.",
    name: "Ada O.",
    role: "Post-Op Recovery Client",
  },
  {
    quote:
      "Rbody's body sculpting sessions actually delivered visible results. They tracked my progress every session and adjusted the plan when needed — very professional.",
    name: "Chiamaka N.",
    role: "Body Sculpting Client",
  },
  {
    quote:
      "The IV glow therapy left my skin looking so even and hydrated. Clean space, friendly staff, and they explained everything before starting.",
    name: "Funke A.",
    role: "IV Therapy Client",
  },
];

export const whyChoose = [
  {
    title: "Specialist expertise",
    detail:
      "Our therapists are trained specifically in post-surgical and body-contouring techniques, not generalist spa treatments.",
    icon: "graduation",
  },
  {
    title: "Personalized plans",
    detail:
      "Every plan starts with a real consultation — no fixed packages forced onto every client.",
    icon: "clipboard",
  },
  {
    title: "Hygiene you can trust",
    detail:
      "Medical-grade cleanliness standards across every treatment room and tool used.",
    icon: "shield",
  },
  {
    title: "Client-first care",
    detail:
      "Honest advice on what you actually need, with clear guidance at every step of your journey.",
    icon: "heart",
  },
];

export const faqs = [
  {
    q: "How long does each treatment session take?",
    a: "Most sessions run 45–75 minutes depending on the treatment and your personal plan. Your first visit includes a consultation, so allow a little extra time.",
  },
  {
    q: "How many sessions will I need?",
    a: "This depends on your goals and starting point. Post-op recovery is often guided by your surgeon's timeline, while body sculpting and lipolysis are usually delivered as a series. We'll recommend a realistic number at your consultation.",
  },
  {
    q: "Is there any downtime or recovery needed?",
    a: "Lymphatic drainage, body sculpting and IV therapy generally involve little to no downtime. Post-op recovery care is scheduled around your surgeon's own recovery guidelines.",
  },
  {
    q: "How much do treatments cost?",
    a: "Pricing depends on the treatment and the plan built for you. Message us on WhatsApp with the service you're interested in and we'll share current pricing.",
  },
  {
    q: "Who are these treatments suitable for?",
    a: "We work with post-operative clients, clients managing bloating or water retention, and anyone pursuing body contouring or medically-guided weight loss. Every plan starts with an assessment to confirm suitability.",
  },
  {
    q: "Do I need to bring anything to my appointment?",
    a: "Comfortable, loose clothing is helpful. If you're recovering from surgery, please bring any compression garments or notes from your surgeon.",
  },
  {
    q: "Can I book a one-off session, or do I need a package?",
    a: "Both options are available. We're happy to start with a single session, though we may recommend a short series once we understand your goals.",
  },
];
