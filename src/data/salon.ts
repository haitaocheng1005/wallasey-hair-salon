import type { IconName } from "@/components/Icon";

export const salon = {
  name: "Whitesea Hair Salon",
  phoneDisplay: "07538 888888",
  phoneHref: "tel:+447538888888",
  addressLines: [
    "27 Mersey Crown Avenue",
    "Liverpool",
    "L8 7QZ",
    "United Kingdom",
  ],
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=27%20Mersey%20Crown%20Avenue%20Liverpool%20L8%207QZ%20United%20Kingdom",
  openingHours: "Monday to Saturday, 10:30-17:30",
  facebook: "https://www.facebook.com/merseycrownsalon",
  instagram: "https://www.instagram.com/merseycrownsalon",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Ladies Haircut",
    description:
      "Professional haircut services tailored to your face shape, lifestyle, and personal style.",
    image: "/salon/haircut-service.webp",
    icon: "scissors" satisfies IconName,
    price: "from GBP 45",
  },
  {
    title: "Hair Colour",
    description:
      "Modern colouring services including full colour, highlights, roots, and tone refresh.",
    image: "/salon/colour-service.webp",
    icon: "palette" satisfies IconName,
    price: "from GBP 70",
  },
  {
    title: "Hair Styling",
    description:
      "Elegant styling for everyday looks, special occasions, parties, and events.",
    image: "/salon/styling-service.webp",
    icon: "waves" satisfies IconName,
    price: "from GBP 35",
  },
  {
    title: "Hair Treatment",
    description:
      "Nourishing hair treatments designed to improve shine, softness, and hair condition.",
    image: "/salon/luxury-portrait.webp",
    icon: "sparkles" satisfies IconName,
    price: "from GBP 35",
  },
  {
    title: "Consultation",
    description:
      "Friendly and professional advice to help you choose the right hairstyle, colour, and care routine.",
    image: "/salon/colour-service-2.webp",
    icon: "message-circle" satisfies IconName,
    price: "ask in salon",
  },
] as const;

export const priceGuide = [
  {
    category: "Cuts & Styling",
    items: [
      { label: "Ladies Haircut", price: "GBP 45-65" },
      { label: "Blow Dry", price: "GBP 30-45" },
      { label: "Occasion Styling", price: "GBP 50-80" },
    ],
  },
  {
    category: "Colour",
    items: [
      { label: "Full Colour", price: "GBP 70-120" },
      { label: "Highlights", price: "GBP 80-150" },
      { label: "Balayage", price: "GBP 95-180" },
      { label: "Root Refresh", price: "GBP 45-70" },
    ],
  },
  {
    category: "Treatments",
    items: [
      { label: "Conditioning Treatment", price: "GBP 35-60" },
      { label: "Keratin Treatment", price: "GBP 120-200" },
      { label: "Colour Care Add-on", price: "GBP 20-35" },
    ],
  },
];

export const whyChooseUs = [
  {
    title: "Detailed consultation",
    description:
      "We listen carefully before cutting, colouring, or styling, so your finished look fits your hair and your life.",
    icon: "message-circle" satisfies IconName,
  },
  {
    title: "Patient customer care",
    description:
      "Appointments are calm, friendly, and unrushed, with clear advice at every stage.",
    icon: "heart-handshake" satisfies IconName,
  },
  {
    title: "Aftercare advice",
    description:
      "Leave with practical care tips to keep your cut, colour, and shine looking fresh between visits.",
    icon: "calendar-heart" satisfies IconName,
  },
  {
    title: "Local experience",
    description:
      "A well-established salon serving women in Wallasey, Liverpool, and the surrounding area for many years.",
    icon: "star" satisfies IconName,
  },
] as const;

export const galleryImages = [
  {
    src: "/salon/before-after-pink-bob.webp",
    title: "Rose colour transformation",
    category: "Before & After",
    wide: true,
  },
  {
    src: "/salon/colour-service-2.webp",
    title: "Soft rose colour service",
    category: "Hair Works",
  },
  {
    src: "/salon/styling-service.webp",
    title: "Event styling in salon",
    category: "Hair Works",
  },
  {
    src: "/salon/salon-team.webp",
    title: "Friendly salon team",
    category: "Salon Environment",
    wide: true,
  },
  {
    src: "/salon/haircut-service.webp",
    title: "Precision haircut",
    category: "Hair Works",
  },
  {
    src: "/salon/before-after-rose-waves.webp",
    title: "Dimensional colour refresh",
    category: "Before & After",
    wide: true,
  },
  {
    src: "/salon/model.webp",
    title: "Glossy brunette finish",
    category: "Hair Works",
  },
  {
    src: "/salon/luxury-portrait-1.webp",
    title: "Editorial salon portrait",
    category: "Hair Works",
  },
  {
    src: "/salon/reviews.webp",
    title: "Client reviews",
    category: "Salon Environment",
    wide: true,
  },
];

export const socialLinks = [
  { label: "Facebook", href: salon.facebook, icon: "share" satisfies IconName },
  { label: "Instagram", href: salon.instagram, icon: "camera" satisfies IconName },
] as const;

export const contactCards = [
  {
    title: "Call the salon",
    value: salon.phoneDisplay,
    href: salon.phoneHref,
    icon: "phone" satisfies IconName,
  },
  {
    title: "Visit us",
    value: salon.addressLines.join(", "),
    href: salon.mapHref,
    icon: "map-pin" satisfies IconName,
  },
  {
    title: "Opening hours",
    value: salon.openingHours,
    href: "/contact#booking-form",
    icon: "calendar-heart" satisfies IconName,
  },
] as const;
