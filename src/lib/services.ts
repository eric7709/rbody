import { Service } from "./types";

export const services: Service[] = [
  {
    slug: "lipolysis",
    name: "Lipolysis",
    price: "₦180,000–₦300,000 per session",
    bestFor: "Stubborn pockets of fat that are resistant to diet and exercise.",
    description:
      "A targeted treatment designed to help reduce localized fat deposits and enhance your natural body contours.",
    benefits: [
      "Targets the abdomen (stomach)",
      "Helps reduce love handles",
      "Treats inner and outer thighs",
      "Helps contour the upper arms",
      "Reduces fat beneath the chin",
      "Non-surgical with minimal downtime",
    ],
    treatmentTime: "30 minutes",
    recommendedSessions: "3 or more sessions, depending on your goals.",
  },
  {
    slug: "rbody-signature-sculpt-program",
    name: "RBody Signature Sculpt Program",
    price: "Starts from ₦500,000 (monthly program)",
    bestFor:
      "Individuals looking for a medically guided weight loss and body transformation program.",
    description:
      "Our signature program combines medical weight loss with body sculpting to help you lose weight while maintaining a beautifully contoured shape.",
    benefits: [
      "Supports healthy, sustainable weight loss",
      "Helps preserve and enhance your natural curves",
      "Improves body definition as you lose weight",
      "Personalized to your body goals",
      "Ongoing professional support",
    ],
    included: [
      "4 weight loss pens every month",
      "4 body sculpting sessions every month",
      "Personalized treatment plan",
      "Progress monitoring",
      "Expert guidance throughout your journey",
    ],
    recommendedSessions:
      "Typically recommended for 2 months or more depending on your goals.",
  },
  {
    slug: "body-sculpting",
    name: "Body Sculpting",
    price: "₦50,000 per session",
    bestFor:
      "Individuals looking to contour and define their body without surgery.",
    description:
      "A non-invasive treatment designed to enhance your natural shape by targeting stubborn areas that may not respond to diet and exercise alone.",
    benefits: [
      "Contours and defines the body",
      "Enhances your natural silhouette",
      "Targets stubborn areas",
      "Complements a healthy lifestyle",
      "No downtime",
    ],
    treatmentTime: "60 minutes",
    recommendedSessions: "3 or more sessions, depending on your goals.",
  },
  {
    slug: "luxury-post-op-care",
    name: "Luxury Post-Op Care",
    bestFor:
      "Clients recovering from cosmetic surgery who want professional care in a safe, comfortable, and supportive environment.",
    description:
      "Recover with confidence in our luxury post-operative care program, where every detail is designed to support your healing journey.",
    benefits: [
      "Supports a smoother, more comfortable recovery",
      "Helps reduce swelling and fluid retention",
      "Encourages healthy tissue healing",
      "Supports healthy circulation",
      "Professional monitoring throughout your recovery",
      "Personalized nursing care in a luxury environment",
    ],
    included: [
      "24-hour professional nursing care",
      "Daily lymphatic drainage massage",
      "Transportation to and from the hospital",
      "Breakfast, lunch, dinner, snacks & fresh juice",
      "Daily laundry service",
      "Private or shared accommodation",
      "Free Wi-Fi & Netflix",
      "Peaceful recovery environment",
    ],
    minimumStay: "5 days",
  },
  {
    slug: "botox",
    name: "Botox",
    bestFor:
      "Individuals looking to soften fine lines and wrinkles or achieve a refreshed appearance.",
    description:
      "Botox is a non-surgical treatment that temporarily relaxes targeted facial muscles to soften expression lines while maintaining natural-looking results.",
    benefits: [
      "Softens fine lines and wrinkles",
      "Helps prevent deeper expression lines",
      "Creates a smoother, refreshed appearance",
      "Quick treatment with minimal downtime",
      "Personalized treatment plan",
    ],
    treatmentAreas: [
      "Forehead lines",
      "Frown lines",
      "Crow's feet",
      "Bunny lines",
      "Chin dimpling",
      "Lip flip",
      "Jawline slimming",
      "Excessive sweating",
    ],
    treatmentTime: "15–30 minutes",
  },
  {
    slug: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    bestFor:
      "Post-operative recovery, bloating, fluid retention, and general lymphatic wellness.",
    description:
      "A gentle, specialized massage designed to stimulate the lymphatic system, helping your body naturally eliminate excess fluid while supporting healing and recovery.",
    benefits: [
      "Reduces swelling and inflammation",
      "Helps soften fibrosis after surgery",
      "Improves lymphatic circulation",
      "Relieves discomfort and tightness",
      "Supports faster recovery",
      "Reduces water retention",
      "Promotes relaxation and wellbeing",
    ],
    treatmentTime: "60 minutes",
    note: "Includes consultation, body assessment, treatment, and aftercare recommendations.",
    recommendedSessions: "3 or more sessions, depending on your goals.",
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    bestFor:
      "Individuals looking to support hydration, immunity, energy, skin health, and overall wellness.",
    description:
      "Our premium IV therapy treatments deliver essential vitamins, minerals, and antioxidants directly into your bloodstream for fast, efficient absorption.",
    benefits: [
      "Supports hydration and overall wellness",
      "Delivers nutrients directly into the bloodstream",
      "Fast and efficient absorption",
      "Tailored to your wellness goals",
      "Administered by trained healthcare professionals",
    ],
    treatmentTime: "45–60 minutes",
    note: "Multiple IV drips available for different wellness goals.",
    drips: [
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
    ],
    lymphaticDetail: {
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
        {
          step: "Consultation",
          detail:
            "A short conversation about your history, surgery date (if any), and goals.",
        },
        {
          step: "Body assessment",
          detail:
            "We check areas of swelling, tightness or fibrosis before we begin.",
        },
        {
          step: "60-minute treatment",
          detail:
            "Hands-on lymphatic technique delivered by a trained therapist.",
        },
        {
          step: "Aftercare recommendations",
          detail:
            "Simple guidance to protect and extend your results at home.",
        },
      ],
      why:
        "Unlike a regular massage, our lymphatic drainage sessions are performed using specialised techniques by trained professionals who understand post-operative care and lymphatic health. Every treatment is tailored to your body's needs to promote safe, effective recovery and lasting results.",
    },
    process: [
      {
        step: "01",
        title: "Consultation",
        detail:
          "We assess your body, history and goals — including any surgeon recovery notes.",
      },
      {
        step: "02",
        title: "Personalized Plan",
        detail:
          "A treatment schedule built around your timeline, not a generic package.",
      },
      {
        step: "03",
        title: "Active Treatment",
        detail:
          "Sessions delivered by trained specialists, with progress reviewed regularly.",
      },
      {
        step: "04",
        title: "Maintenance",
        detail:
          "Ongoing support to protect and maintain your results long-term.",
      },
    ],
  },
];

export const serviceTitles: string[] = [
  "Lipolysis",
  "RBody Signature Sculpt Program",
  "Body Sculpting",
  "Luxury Post-Op Care",
  "Botox",
  "Lymphatic Drainage Massage",
  "Lumi Radiance Drip",
  "Smokers Recovery Drip",
  "Skin Repair Booster",
  "Bridal Glow Drip",
  "Vitamin C Immune Boost",
];