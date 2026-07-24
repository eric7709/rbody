import type { Metadata } from "next";

export const defaultMetadata: Metadata = {
    metadataBase: new URL("https://rbodyclinic.com"), // Replace with your live domain

    title: {
        default: "Rbody Clinic — Post-Op Care, Lymphatic Drainage & Body Sculpting in Lagos",
        template: "%s | Rbody Clinic Lagos",
    },
    description:
        "Lagos’ premier clinic for specialist post-surgical recovery care, 24/7 luxury post-op care, lymphatic drainage massage, body sculpting, lipolysis, Botox, and custom IV therapy.",

    keywords: [
        // --- Brand & Core Local SEO ---
        "Rbody Clinic",
        "Rbody Clinic Lagos",
        "Rbody Lagos",
        "Recovery clinic Lagos",
        "Body clinic Lagos",
        "Wellness clinic Lagos",

        // --- Post-Op & Recovery Care ---
        "Post-op care Lagos",
        "Post-surgery recovery house Lagos",
        "Luxury post-op care Lagos",
        "Plastic surgery recovery center Lagos",
        "Post-liposuction care Lagos",
        "BBL recovery care Lagos",
        "Post-op nurse Lagos",
        "C-section recovery massage Lagos",

        // --- Lymphatic Drainage ---
        "Lymphatic drainage massage Lagos",
        "Post-op lymphatic massage Lagos",
        "Fibrosis massage Lagos",
        "Swelling reduction after surgery",
        "Manual lymphatic drainage Nigeria",

        // --- Body Sculpting & Contouring ---
        "Body sculpting Lagos",
        "Non-surgical body contouring Lagos",
        "Non-surgical lipolysis Nigeria",
        "Fat reduction Lagos",
        "Belly fat removal without surgery Lagos",
        "Skin tightening Lagos",
        "RBody Signature Sculpt",

        // --- IV Therapy & Wellness Drips ---
        "IV therapy Lagos",
        "Vitamin drip Lagos",
        "Glutathione drip Lagos",
        "Lumi Radiance Drip",
        "Bridal Glow Drip Lagos",
        "Skin Repair Booster IV",
        "Smokers Recovery Drip",
        "Immune boost IV Lagos",
        "Hydration drip Lagos",

        // --- Aesthetics & Medical Weight Loss ---
        "Botox clinic Lagos",
        "Botox injection Lagos",
        "Medical weight loss Lagos",
        "Weight loss pens Nigeria",
        "Non-invasive aesthetic clinic Lagos",
    ],

    authors: [{ name: "Rbody Clinic" }],
    creator: "Rbody Clinic",
    publisher: "Rbody Clinic",

    other: {
        "geo.region": "NG-LA",
        "geo.placename": "Lagos",
    },

    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },

    openGraph: {
        title: "Rbody Clinic — Lagos Recovery & Body Sculpting Clinic",
        description:
            "Specialist care for post-operative recovery, lymphatic drainage, body sculpting, non-invasive lipolysis, and IV wellness therapy in Lagos.",
        url: "https://rbodyclinic.com",
        siteName: "Rbody Clinic",
        locale: "en_NG",
        type: "website",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Rbody Clinic Lagos — Body Sculpting and Luxury Recovery Care",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Rbody Clinic — Post-Op Care & Body Sculpting Lagos",
        description:
            "Specialist post-op recovery care, lymphatic drainage, lipolysis, and IV therapy in Lagos, Nigeria.",
        images: ["/og-image.jpg"],
    },
};

// Export your JSON-LD Schema alongside metadata
export const clinicSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "Rbody Clinic",
    image: "https://rbodyclinic.com/og-image.jpg",
    description:
        "Specialist clinic for lymphatic drainage massage, post-surgical recovery care, body sculpting, lipolysis, and IV therapy in Lagos.",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lagos",
        addressCountry: "NG",
    },
    url: "https://rbodyclinic.com",
    priceRange: "₦50,000 - ₦500,000",
    currenciesAccepted: "NGN",
    medicalSpecialty: ["Dermatology", "PlasticSurgery", "PhysicalTherapy"],
};