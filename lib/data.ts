import type { Service, Testimonial, NavItem, Stat } from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES: Service[] = [
  {
    id: "carpet-washing",
    title: "Carpet Washing",
    description:
      "Deep extraction cleaning that lifts embedded dirt, allergens, and stains from all carpet types — leaving fibres fresh, bright, and revived.",
    icon: "Layers",
    features: [
      "Hot-water extraction",
      "Stain & odour treatment",
      "Fast-dry formula",
      "All carpet types",
    ],
  },
  {
    id: "tile-floor",
    title: "Tile Floor Washing & Deep Clean",
    description:
      "High-pressure grout scrubbing and surface restoration that strips grime, bacteria, and limescale — revealing the original lustre of your floors.",
    icon: "Grid3x3",
    features: [
      "Grout deep scrub",
      "Limescale removal",
      "Anti-bacterial treatment",
      "Sealing available",
    ],
  },
  {
    id: "chair-cleaning",
    title: "Chair Cleaning",
    description:
      "Professional upholstery care for fabric, leather, and mesh chairs — sanitised, deodorised, and restored to showroom condition.",
    icon: "Armchair",
    features: [
      "Fabric & leather care",
      "Deep sanitisation",
      "Odour elimination",
      "Office & home chairs",
    ],
  },
  {
    id: "flat-cleaning",
    title: "Flat Cleaning",
    description:
      "Comprehensive apartment cleaning from kitchen to bathroom — a meticulous service that covers every surface, corner, and fixture.",
    icon: "Building2",
    features: [
      "Kitchen & bathroom",
      "All surfaces",
      "Move-in / move-out",
      "Regular scheduling",
    ],
  },
  {
    id: "indoor-glass",
    title: "Indoor Glass Cleaning",
    description:
      "Streak-free, crystal-clear cleaning for windows, partitions, mirrors, and glass doors using professional-grade solutions.",
    icon: "ScanLine",
    features: [
      "Streak-free finish",
      "Partitions & mirrors",
      "Interior windows",
      "High-reach access",
    ],
  },
];

export const STATS: Stat[] = [
  { value: "1,200+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "8+", label: "Years Experience" },
  { value: "24/7", label: "Support Available" },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Priya Mehra",
    role: "Homeowner, Delhi",
    content:
      "The carpet washing service was exceptional. Stains I thought were permanent vanished completely. My flat feels brand new.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Arjun Kapoor",
    role: "Office Manager, Gurugram",
    content:
      "We hired them for tile deep cleaning across our entire office floor. The grout went from black to white. Absolutely stunning results.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sunita Sharma",
    role: "Property Owner, Noida",
    content:
      "Booked the flat cleaning for a move-out handover. The team was thorough, professional, and punctual. The landlord was impressed.",
    rating: 5,
  },
];

export const WHY_US = [
  {
    title: "Certified Professionals",
    description:
      "Every technician is trained, background-checked, and certified in advanced cleaning techniques.",
    icon: "ShieldCheck",
  },
  {
    title: "Eco-Safe Products",
    description:
      "We use non-toxic, biodegradable solutions that are safe for your family, pets, and the planet.",
    icon: "Leaf",
  },
  {
    title: "Satisfaction Guaranteed",
    description:
      "Not satisfied? We re-clean at no cost. Your peace of mind is our highest priority.",
    icon: "BadgeCheck",
  },
  {
    title: "Flexible Scheduling",
    description:
      "Book morning, evening, or weekends. We adapt to your timetable, not the other way around.",
    icon: "CalendarCheck",
  },
];
