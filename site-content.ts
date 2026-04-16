export const siteConfig = {
  name: "Architects Inc.",
  description:
    "An architecture practice designing considered residential, cultural, and commercial spaces across the Pacific.",

  meta: {
    title: "Architects Inc. — Architecture of Quiet Presence",
  },

  hero: {
    /** Large display name shown as the h1 in the hero */
    title: "Architects Inc.",
    /** Tagline shown beneath the title */
    subtitle: "Architecture of Quiet Presence",
    /** Social handle shown in the top-left badge */
    handle: "@ateliernorr",
    /** Location label shown bottom-right of the hero */
    location: "Wellington, NZ",
    image: {
      src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=80",
      alt: "Minimal concrete and timber residence framed by native planting",
    },
    cta: "Start a Project",
  },

  nav: [
    { label: "Home", href: "#" },
    { label: "Practice", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],

  services: {
    heading: "Our Services",
    items: [
      {
        number: "01",
        title: "Residential Architecture",
        description:
          "Homes shaped by landscape, light, and the daily rituals of the people who live in them.",
        image:
          "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=900&q=80",
        alt: "Contemporary residence with large glazed openings at dusk",
      },
      {
        number: "02",
        title: "Commercial & Workplace",
        description:
          "Work environments with material honesty, spatial generosity, and a clear sense of place.",
        image:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80",
        alt: "Bright modern office interior with timber ceiling",
      },
      {
        number: "03",
        title: "Cultural & Civic",
        description:
          "Galleries, libraries, and public buildings designed to host community and endure quietly.",
        image:
          "https://images.unsplash.com/photo-1577985043696-8bd54d9f093f?auto=format&fit=crop&w=900&q=80",
        alt: "Concrete cultural building with a sculpted staircase",
      },
      {
        number: "04",
        title: "Interiors & Furniture",
        description:
          "Interiors and bespoke joinery that extend the language of the architecture into daily life.",
        image:
          "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80",
        alt: "Warm minimalist interior with custom oak joinery",
      },
    ],
  },

  features: [
    { title: "Considered", desc: "Every decision measured against site, climate, and use." },
    { title: "Crafted", desc: "Details resolved with the people who make them." },
    { title: "Enduring", desc: "Buildings designed to age with grace and intent." },
  ],

  about: {
    eyebrow: "The Practice",
    heading: "A small studio shaping places with patience and precision.",
    body: [
      "Founded in 2014, Architects Inc. is an architecture studio working across residential, cultural, and commercial projects in Aotearoa and the wider Pacific. We partner with clients who value restraint, craft, and a long view.",
      "Our work begins with the site — its light, its weather, its history — and moves slowly outward into plan, material, and detail. We draw by hand, model in timber, and build relationships that last well beyond the final inspection.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80",
      alt: "Architects reviewing drawings and physical models at a studio table",
    },
    stats: [
      { value: 12, suffix: "+", label: "Years in practice" },
      { value: 96, suffix: "", label: "Buildings completed" },
      { value: 14, suffix: "", label: "Design awards" },
      { value: 7, suffix: "", label: "Countries built in" },
    ],
  },

  work: {
    eyebrow: "Selected Projects",
    heading: "Recent work",
    intro:
      "A handful of buildings and interiors from the last few years — each shaped by its site, its people, and a shared belief in quiet, careful architecture.",
    items: [
      {
        number: "01",
        title: "Kōura House",
        category: "Coastal Residence",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=80",
        alt: "Timber-clad coastal home with wide eaves overlooking the sea",
      },
      {
        number: "02",
        title: "Halcyon Pavilion",
        category: "Cultural Building",
        year: "2025",
        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
        alt: "Concrete pavilion with rhythmic columns and reflecting pool",
      },
      {
        number: "03",
        title: "Mira Vineyard",
        category: "Hospitality",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1400&q=80",
        alt: "Stone and timber winery building nestled into a vineyard",
      },
      {
        number: "04",
        title: "Field & Form Studio",
        category: "Workplace",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
        alt: "Warm workplace interior with exposed structure and daylight",
      },
      {
        number: "05",
        title: "Verdant House",
        category: "Urban Residence",
        year: "2024",
        image:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&w=1400&q=80",
        alt: "Urban townhouse with planted courtyard and steel screen",
      },
      {
        number: "06",
        title: "Cabin at Tōtara Bend",
        category: "Private Retreat",
        year: "2023",
        image:
          "https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1400&q=80",
        alt: "Small dark-stained cabin in a forest clearing",
      },
    ],
  },

  contact: {
    eyebrow: "Begin a Conversation",
    heading: "Let's build something",
    headingAccent: "made to last.",
    body: "We take on a small number of new commissions each year. Send a note about your site and intentions — we read every message and reply within two business days.",
    email: "studio@ateliernorr.com",
    cta: "Start a project",
    columns: [
      {
        label: "Studio",
        lines: ["48 Heritage Lane", "Studio 04, Floor 2", "Wellington 6011, NZ"],
      },
      {
        label: "Inquiries",
        lines: ["studio@ateliernorr.com", "press@ateliernorr.com", "+64 4 555 0142"],
      },
      {
        label: "Hours",
        lines: ["Mon — Fri", "9:00 — 18:00 NZST", "Site visits by appointment"],
      },
    ],
    socials: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Are.na", href: "#" },
      { label: "Archello", href: "#" },
    ],
  },

  footer: {
    rights: "All rights reserved.",
    note: "Drawn and built in Aotearoa.",
  },
};
