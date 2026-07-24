import { Service } from "./types";

export const services: Service[] = [
  {
    slug: "lymphatic-drainage-massage",
    name: "Lymphatic Drainage Massage",
    price: "₦50,000 per session",
    bestFor: "Post-operative recovery, bloating, fluid retention, and general lymphatic wellness.",
    description: "Recover, heal, and feel your best with our specialized lymphatic drainage massage. Whether you’re recovering from cosmetic surgery, a C-section, or experiencing bloating and fluid retention, this gentle treatment helps reduce swelling, improve circulation, encourage natural lymphatic drainage, and support a smoother, more comfortable recovery.",
    benefits: [
      "Reduces swelling and inflammation throughout the body",
      "Helps soften fibrosis and scar tissue after surgery",
      "Improves lymphatic circulation and waste elimination",
      "Relieves discomfort and tightness in treated areas",
      "Supports faster recovery after surgical procedures",
      "Reduces water retention and bloating",
      "Promotes relaxation and overall wellbeing",
      "Strengthens immune system function",
      "Improves skin texture and appearance",
      "Reduces cellulite appearance when combined with other treatments",
      "Detoxifies the body by eliminating metabolic waste"
    ],
    treatmentTime: "60 minutes",
    note: "Includes consultation, body assessment, treatment, and aftercare recommendations.",
    recommendedSessions: "3 or more sessions, depending on your goals. For post-operative recovery, we recommend daily sessions for the first week, then 2-3 times weekly for optimal results."
  },
  {
    slug: "luxury-post-op-care",
    name: "Luxury Post-Op Care",
    bestFor: "Clients recovering from cosmetic surgery who want professional care in a safe, comfortable, and supportive environment.",
    description: "Our Luxury Post-Op Care program redefines the recovery experience, offering world-class care in a serene, private setting. We understand that recovery from cosmetic surgery is just as important as the procedure itself, which is why we've created an environment that promotes optimal healing while ensuring your comfort and peace of mind. Our dedicated team of experienced nurses and healthcare professionals provides round-the-clock care, monitoring your recovery progress and ensuring you heal safely and comfortably. We combine medical excellence with five-star hospitality, offering personalized attention, gourmet meals, and premium amenities that transform your recovery from a necessity into a rejuvenating experience.",
    price: "₦150,000 per day",

    benefits: [
      "Supports a smoother, more comfortable recovery process",
      "Helps reduce swelling and fluid retention with professional lymphatic drainage",
      "Encourages healthy tissue healing and scar management",
      "Supports healthy circulation to prevent complications",
      "Professional monitoring throughout your recovery by trained nurses",
      "Personalized nursing care in a luxury environment",
      "Reduces stress and anxiety during the recovery period",
      "Expedites recovery time with proper care and support",
      "Prevents complications through early detection and intervention",
      "Provides peace of mind for you and your family"
    ],
    included: [
      "24-hour professional nursing care with experienced post-op specialists",
      "Daily lymphatic drainage massage to reduce swelling and promote healing",
      "Transportation to and from the hospital for surgical appointments",
      "Gourmet breakfast, lunch, dinner, snacks & fresh juice (nutritionally optimized for recovery)",
      "Daily laundry service to keep you comfortable",
      "Private or shared accommodation in a serene, healing environment",
      "Free Wi-Fi & Netflix for entertainment and relaxation",
      "Peaceful recovery environment away from city noise and stress",
      "Personalized recovery kit with essentials",
      "Access to our wellness lounge and relaxation areas",
      "Complimentary bathrobe and slippers",
      "Fresh flowers and daily room service"
    ],
    minimumStay: "5 days minimum, with extensions available based on your recovery needs"
  },
  {
    slug: "body-sculpting",
    name: "Body Sculpting",
    price: "₦50,000 per session",
    bestFor: "Individuals looking to contour and define their body without surgery.",
    description: "Our Body Sculpting treatment is a premium non-invasive procedure designed to refine and enhance your natural body shape. Using state-of-the-art technology, this treatment targets specific areas to break down fat cells, tighten skin, and improve muscle definition. The procedure works by delivering controlled energy to the treatment area, which stimulates fat cell breakdown, promotes collagen production, and encourages natural tissue remodeling. This results in a more toned, defined appearance without the risks, costs, or recovery time associated with surgical procedures. Whether you're looking to define your abdominal muscles, contour your thighs, or create a more sculpted silhouette, our body sculpting treatments provide impressive, natural-looking results.",
    benefits: [
      "Contours and defines the body for a more sculpted appearance",
      "Enhances your natural silhouette without surgery",
      "Targets stubborn areas that don't respond to diet and exercise",
      "Complements a healthy lifestyle and fitness routine",
      "No downtime - return to normal activities immediately",
      "Stimulates collagen production for improved skin texture",
      "Creates muscle definition and tone",
      "Reduces localized fat deposits",
      "Improves body proportions and symmetry",
      "Long-lasting results with proper maintenance"
    ],
    treatmentTime: "60 minutes per session",
    recommendedSessions: "3 or more sessions, depending on your goals. For optimal results, we recommend 3-6 sessions spaced 1-2 weeks apart."
  },
  {
    slug: "lipolysis",
    name: "Lipolysis",
    price: "₦180,000–₦300,000 per session",
    bestFor: "Stubborn pockets of fat that are resistant to diet and exercise.",
    description:
      "Lipolysis is a revolutionary non-surgical fat reduction treatment that uses advanced technology to target and break down stubborn fat cells in specific areas of the body. This FDA-cleared procedure delivers controlled energy to adipose tissue, causing fat cells to rupture and release their contents, which are then naturally eliminated by your body's lymphatic system over the following weeks. The treatment is precise, comfortable, and requires no incisions, anesthesia, or downtime, making it an ideal solution for individuals who are close to their ideal weight but struggle with localized fat deposits that won't respond to traditional weight loss methods.",
    benefits: [
      "Targets the abdomen (stomach) - effectively reduces belly fat and love handles",
      "Helps reduce love handles and flank areas for a more defined waistline",
      "Treats inner and outer thighs to create smoother leg contours",
      "Helps contour the upper arms and reduce 'bat wings'",
      "Reduces fat beneath the chin for a more defined jawline",
      "Non-surgical with minimal downtime - return to normal activities immediately",
      "Permanent fat cell reduction in treated areas",
      "Gradual, natural-looking results over 8-12 weeks",
      "Comfortable treatment with minimal discomfort",
      "Can be combined with other body contouring treatments"
    ],
    treatmentTime: "30 minutes per session",
    recommendedSessions: "3 or more sessions, depending on your goals and the area being treated. Most clients see optimal results after 3-6 sessions spaced 2-4 weeks apart."
  },
  {
    slug: "rbody-signature-sculpt-program",
    name: "RBody Signature Sculpt Program",
    price: "Starts from ₦500,000 (monthly program)",
    bestFor: "Individuals looking for a medically guided weight loss and body transformation program.",
    description: "The RBody Signature Sculpt Program is our comprehensive, medically supervised weight loss and body transformation journey. This all-inclusive program combines cutting-edge medical weight loss therapies with advanced body sculpting treatments to help you achieve sustainable results while maintaining a beautifully contoured shape. Unlike traditional weight loss programs that can leave you with sagging skin and loss of curves, our signature approach ensures you lose weight in a way that enhances your natural body shape. Each program is carefully personalized to your unique body composition, goals, and lifestyle, with ongoing support from our team of medical professionals, nutritionists, and body contouring specialists.",
    benefits: [
      "Supports healthy, sustainable weight loss without extreme dieting",
      "Helps preserve and enhance your natural curves while losing weight",
      "Improves body definition and muscle tone as you lose weight",
      "Personalized to your specific body goals and lifestyle",
      "Ongoing professional support and progress monitoring",
      "Combines medical weight loss with body contouring for comprehensive results",
      "Includes nutritional guidance and lifestyle coaching",
      "Addresses both weight loss and body shaping simultaneously",
      "Prevents common weight loss issues like loose skin",
      "Sustainable approach that develops healthy habits for life"
    ],
    included: [
      "4 weight loss pens every month (medical-grade appetite suppressants)",
      "4 body sculpting sessions every month to maintain shape as you lose weight",
      "Personalized treatment plan developed by medical professionals",
      "Progress monitoring with regular check-ins and adjustments",
      "Expert guidance throughout your journey from our team of specialists",
      "Nutritional counseling and meal planning support",
      "Body composition analysis and tracking",
      "Access to our wellness community and support network"
    ],
    recommendedSessions: "Typically recommended for 2 months or more depending on your goals. The program is designed to be flexible and can be extended based on your progress and desired outcomes."
  },
  {
    slug: "botox",
    name: "Botox",
    bestFor: "Individuals looking to soften fine lines and wrinkles or achieve a refreshed appearance.",
    description: "Botox is a clinically proven, minimally invasive treatment that temporarily relaxes targeted facial muscles to soften expression lines while maintaining natural-looking results. This FDA-approved treatment uses a purified form of botulinum toxin to gently reduce muscle activity in specific facial areas, preventing the formation of dynamic wrinkles and smoothing existing lines. Our experienced medical professionals carefully assess your facial anatomy and expressions to create a personalized treatment plan that achieves natural-looking rejuvenation without compromising your unique facial expressions. The treatment is quick, virtually painless, and requires no downtime, making it the perfect lunchtime procedure for busy individuals seeking to refresh their appearance.",
    benefits: [
      "Softens fine lines and wrinkles for a younger appearance",
      "Helps prevent deeper expression lines from forming",
      "Creates a smoother, refreshed appearance",
      "Quick treatment with minimal downtime (15-30 minutes)",
      "Personalized treatment plan tailored to your facial anatomy",
      "Results last 3-6 months with consistent outcomes",
      "Prevents progression of dynamic wrinkles into static wrinkles",
      "Can lift brows and create a more alert, rested appearance",
      "Non-surgical with no recovery time",
      "Gradual, natural-looking results that don't appear 'frozen'"
    ],
    treatmentAreas: [
      "Forehead lines - horizontal wrinkles from raised eyebrows",
      "Frown lines - vertical lines between the eyebrows ('11' lines)",
      "Crow's feet - fine lines around the outer corners of the eyes",
      "Bunny lines - wrinkles on the sides of the nose",
      "Chin dimpling - to smooth an uneven or dimpled chin",
      "Lip flip - for a fuller, more defined upper lip",
      "Jawline slimming - to reduce the appearance of masseter muscle",
      "Excessive sweating - hyperhidrosis treatment for underarms, palms, and feet",
      "Brow lift - for a more open, alert appearance",
      "Neck bands - to soften vertical neck bands"
    ],
    treatmentTime: "15–30 minutes"
  },
  {
    slug: "iv-therapy",
    name: "IV Therapy",
    bestFor: "Individuals looking to support hydration, immunity, energy, skin health, and overall wellness.",
    description: "Our premium IV Therapy treatments deliver essential vitamins, minerals, amino acids, and antioxidants directly into your bloodstream for immediate and efficient absorption. Unlike oral supplements that are partially lost during digestion, IV therapy provides 100% bioavailability, ensuring your body receives the full therapeutic benefit of each nutrient. Each IV drip is carefully formulated by our medical professionals to address specific wellness goals, from boosting energy levels and immune function to enhancing skin radiance and accelerating recovery. The treatment is administered in a comfortable, relaxing environment by trained healthcare professionals who monitor your comfort and safety throughout the session. Whether you're preparing for a special event, recovering from illness, or simply optimizing your health, our IV therapy offers a powerful boost to your wellbeing.",
    benefits: [
      "Supports optimal hydration and overall wellness",
      "Delivers nutrients directly into the bloodstream for 100% absorption",
      "Fast and efficient nutrient delivery for immediate effects",
      "Tailored to your specific wellness goals and needs",
      "Administered by trained healthcare professionals in a safe environment",
      "Boosts energy levels and combats fatigue",
      "Strengthens immune system function",
      "Enhances skin health and promotes a natural glow",
      "Accelerates recovery from illness, exercise, or stress",
      "Customizable with premium nutrient combinations",
      "Immediate rehydration for enhanced vitality",
      "Supports mental clarity and focus"
    ],
    treatmentTime: "45–60 minutes",
    note: "Multiple IV drips available for different wellness goals. Each drip is customized to your specific needs.",
    drips: [
      {
        slug: "lumi-radiance-drip",
        name: "Lumi Radiance Drip",
        price: 85000,
        bestFor: "Dull, tired-looking skin and enhancing your natural glow.",
        description: "The Lumi Radiance Drip is our signature beauty infusion, featuring a carefully formulated blend of glutathione, vitamin C, biotin, and other radiance-boosting nutrients. This powerful combination works synergistically to support healthy skin from within, promoting a brighter, more even complexion and a natural luminosity. The high-dose vitamin C acts as a potent antioxidant that protects against environmental damage, while glutathione helps inhibit melanin production for a more even skin tone. Biotin and other B-complex vitamins support skin, hair, and nail health, making this the perfect pre-event or regular wellness treatment for anyone seeking to achieve that coveted 'lit from within' glow.",
        benefits: [
          "Supports a brighter, more radiant-looking complexion",
          "Rich in antioxidants to help protect against oxidative stress",
          "Promotes healthier-looking, revitalized skin",
          "Supports a more even-looking skin tone",
          "Helps restore a fresh, luminous appearance",
          "Enhances skin hydration and elasticity",
          "Supports collagen production for firmer skin",
          "Helps reduce the appearance of dark spots and hyperpigmentation",
          "Promotes overall skin health and vitality"
        ],
        note: "For best results, multiple sessions may be recommended based on your individual skin goals. We typically recommend a course of 3-6 sessions for optimal, lasting results."
      },
      {
        slug: "smokers-recovery-drip",
        name: "Smokers Recovery Drip",
        price: 70000,
        bestFor: "Current and former smokers, and individuals regularly exposed to second-hand smoke.",
        description: "The Smokers Recovery Drip is a comprehensive antioxidant infusion designed specifically to help combat the oxidative stress and nutritional depletion caused by smoking and environmental toxins. This powerful formulation combines high-dose vitamin C, glutathione, B-complex vitamins, and other essential nutrients to support your body's natural detoxification processes. The treatment works to replenish depleted vitamins, neutralize harmful free radicals, and support overall wellness. Regular treatments can help reduce cellular damage, improve skin health, boost immunity, and support your body's recovery from the effects of smoking. Even if you've quit, this drip helps accelerate your body's natural healing process.",
        benefits: [
          "Rich in antioxidants to combat oxidative stress",
          "Supports immune function and overall wellness",
          "Replenishes essential vitamins depleted by smoking",
          "Promotes hydration and recovery",
          "Supports healthier-looking skin",
          "Supports lung health and respiratory function",
          "Helps reduce cellular damage from toxins",
          "Supports natural detoxification processes",
          "Boosts energy and mental clarity"
        ],
        treatmentTime: "45–60 minutes"
      },
      {
        slug: "skin-repair-booster",
        name: "Skin Repair Booster",
        price: 95000,
        bestFor: "Dull, dehydrated, or tired-looking skin.",
        description: "The Skin Repair Booster is a luxurious, intensive infusion that works from the inside out to transform your skin. This premium formulation combines high-dose vitamin C, glutathione, essential amino acids, zinc, and skin-supporting nutrients that work synergistically to support collagen production, improve hydration, and promote cellular regeneration. The amino acids provide the building blocks for new collagen and elastin, while vitamin C and glutathione provide powerful antioxidant protection against environmental damage. The result is skin that looks plumper, more hydrated, and noticeably brighter with a youthful radiance. This treatment is ideal for those seeking to address multiple skin concerns simultaneously.",
        benefits: [
          "Supports collagen production for firmer, more youthful skin",
          "Improves skin hydration and glow",
          "Rich in antioxidants to protect against environmental damage",
          "Promotes healthier-looking, more radiant skin",
          "Supports a brighter, more even-looking complexion",
          "Provides essential nutrients for skin repair and regeneration",
          "Helps reduce the appearance of fine lines",
          "Supports wound healing and tissue repair",
          "Enhances overall skin texture and tone"
        ],
        treatmentTime: "45–60 minutes"
      },
      {
        slug: "bridal-glow-drip",
        name: "Bridal Glow Drip",
        price: 120000,
        bestFor: "Brides-to-be, special occasions, photoshoots, events, dull skin, and anyone wanting a radiant, healthy glow.",
        description: "The Bridal Glow Drip is our ultimate luxury infusion, specially curated for those wanting to look their absolute best for a special occasion. This comprehensive blend combines our most potent skin-enhancing ingredients - including high-dose vitamin C, glutathione, biotin, and hydrating electrolytes - to deliver immediate radiance and lasting skin health. The formulation works quickly to hydrate the skin from within, reduce inflammation, brighten the complexion, and create that coveted 'bridal glow.' Beyond the immediate effects, regular sessions build cumulative benefits that leave you with healthy, luminous skin for your big day. The treatment is administered in a soothing environment, making it a relaxing pre-event ritual.",
        benefits: [
          "Promotes a radiant, luminous complexion for your special day",
          "Supports brighter, more even-looking skin",
          "Helps improve skin hydration and vitality",
          "Rich in antioxidants to support healthy skin",
          "Leaves you looking refreshed and event-ready",
          "Reduces stress effects on your skin",
          "Provides immediate hydration for plump, dewy skin",
          "Supports skin's natural glow from within",
          "Creates a camera-ready complexion"
        ],
        treatmentTime: "45–60 minutes"
      },
      {
        slug: "vitamin-c-immune-boost",
        name: "Vitamin C Immune Boost",
        price: 55000,
        bestFor: "Individuals looking to support their immune system, boost energy, and enhance overall wellness.",
        description: "The Vitamin C Immune Boost is a potent, high-dose vitamin C infusion designed to fortify your immune system and enhance your overall wellbeing. This treatment delivers a therapeutic dose of vitamin C directly into your bloodstream, providing powerful antioxidant protection and supporting immune function at a cellular level. Vitamin C is essential for the production of white blood cells and antibodies, making this infusion particularly beneficial during cold and flu season, periods of high stress, or when you need an extra boost of vitality. The treatment also supports collagen production, enhances iron absorption, and provides powerful protection against oxidative stress.",
        benefits: [
          "Supports a healthy, robust immune system",
          "Rich in antioxidants to protect against cellular damage",
          "Helps combat oxidative stress and inflammation",
          "Promotes energy and overall wellbeing",
          "Supports recovery and hydration",
          "Enhances collagen production for healthy skin",
          "Improves iron absorption for better energy",
          "Shortens duration of illness when sick",
          "Supports cardiovascular health"
        ],
        treatmentTime: "45–60 minutes"
      }
    ]
  }
];

/**
 * Every bookable name in the catalog — top-level services AND their
 * individual drips — derived directly from `services` rather than
 * hand-typed. This is what search/autocomplete components should read
 * from, so a treatment (or a drip) can never silently go missing from
 * a list again just because someone forgot to type its name somewhere.
 */
export const serviceTitles: string[] = services.flatMap((service) => [
  service.name,
  ...(service.drips?.map((drip) => drip.name) ?? []),
]);

/**
 * One entry per top-level service (never expands drips) — use this for
 * "all treatments" grids/nav where IV Therapy should appear as a single
 * grouped card, not five separate ones.
 */
export const groupedServices: Service[] = services;

/**
 * A flat, bookable listing: a service WITHOUT its own drips stays as one
 * row, but a service that has drips (like IV Therapy) is replaced by one
 * row per drip. Use this wherever every individually bookable item needs
 * its own entry — a booking dropdown, a search index, etc.
 */
export interface BookableListing {
  slug: string;
  name: string;
  /** Route to the page where this item can actually be booked. */
  href: string;
  price?: string | number;
}

export const bookableListings: BookableListing[] = services.flatMap(
  (service): BookableListing[] => {
    if (service.drips && service.drips.length > 0) {
      return service.drips.map((drip) => ({
        slug: drip.slug,
        name: drip.name,
        href: `/treatments/${service.slug}#${drip.slug}`,
        price: drip.price,
      }));
    }
    return [
      {
        slug: service.slug,
        name: service.name,
        href: `/treatments/${service.slug}`,
        price: service.price,
      },
    ];
  }
);