import {
  BadgeCheck,
  Building2,
  ClipboardCheck,
  Factory,
  HardHat,
  Home,
  Landmark,
  Paintbrush,
  ShieldCheck,
  Timer,
  UserRoundCheck,
  Wrench,
} from "lucide-react";

export const company = {
  name: "A.K.A Constructions",
  phone: "+91 75088 54525",
  whatsapp: "917508854525",
  addressLines: [
    "Plot No. 406, Second Floor,",
    "Sector 82,",
    "Sahibzada Ajit Singh Nagar,",
    "Punjab 140307",
  ],
  hours: "Monday-Saturday, 9:00 AM - 6:00 PM",
  location: "Sahibzada Ajit Singh Nagar (Mohali), Punjab",
};

export const seoKeywords = [
  "Construction Company in Mohali",
  "Construction Services Punjab",
  "Residential Construction Mohali",
  "Commercial Construction Punjab",
  "Building Contractors Mohali",
  "Civil Construction Services Punjab",
];

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export const services = [
  {
    title: "Residential Construction",
    icon: Home,
    description:
      "Thoughtfully managed home construction for villas, independent floors and premium residences.",
    benefits: ["Clear budgeting", "Durable finishes", "Personalised planning"],
    features: ["Site supervision", "Structural coordination", "Finishing schedules"],
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Commercial Construction",
    icon: Building2,
    description:
      "Reliable delivery of office, retail and mixed-use spaces built for daily business performance.",
    benefits: ["Efficient handovers", "Vendor coordination", "Compliance-led execution"],
    features: ["MEP coordination", "Quality audits", "Milestone reporting"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Building Renovation",
    icon: Wrench,
    description:
      "Planned upgrades that improve usability, finishes and value while respecting existing structures.",
    benefits: ["Less disruption", "Improved lifespan", "Practical design input"],
    features: ["Condition assessment", "Phased execution", "Finish replacement"],
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Interior Fit-Out Solutions",
    icon: Paintbrush,
    description:
      "Premium interior fit-outs for homes, offices and customer-facing commercial environments.",
    benefits: ["Coordinated trades", "Refined detailing", "Material accountability"],
    features: ["Ceilings and partitions", "Flooring", "Joinery coordination"],
    image: "https://images.unsplash.com/photo-1600210491369-e753d80a41f3?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Civil Construction",
    icon: HardHat,
    description:
      "Civil works delivered with attention to structural integrity, site safety and documentation.",
    benefits: ["Robust methods", "Experienced labour", "Measured progress"],
    features: ["Concrete works", "Masonry", "Drainage and utility works"],
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Project Management",
    icon: ClipboardCheck,
    description:
      "Disciplined planning, procurement and supervision to keep complex projects moving with clarity.",
    benefits: ["Transparent updates", "Risk control", "Schedule discipline"],
    features: ["Programme tracking", "Contractor coordination", "Cost oversight"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Infrastructure Development",
    icon: Landmark,
    description:
      "Practical infrastructure works for communities, commercial sites and institutional environments.",
    benefits: ["Long-term usability", "Methodical execution", "Strong site control"],
    features: ["External works", "Road and pathway works", "Utility coordination"],
    image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Maintenance & Repair Services",
    icon: Factory,
    description:
      "Responsive repair and maintenance support for built assets requiring dependable care.",
    benefits: ["Preventive upkeep", "Quick response", "Practical recommendations"],
    features: ["Leak repairs", "Surface restoration", "Civil maintenance"],
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
  },
];

export const whyChooseUs = [
  { title: "Experienced Team", text: "Site teams and supervisors aligned around practical delivery.", icon: UserRoundCheck },
  { title: "Quality Materials", text: "Material selection is guided by durability, suitability and finish.", icon: BadgeCheck },
  { title: "On-Time Delivery", text: "Schedules are planned around clear milestones and active follow-up.", icon: Timer },
  { title: "Professional Project Management", text: "Clients receive structured coordination from planning to handover.", icon: ClipboardCheck },
  { title: "Safety First Approach", text: "Safer sites protect people, quality and the pace of work.", icon: ShieldCheck },
  { title: "Client Satisfaction", text: "Communication stays clear, grounded and accountable.", icon: BadgeCheck },
];

export const projects = [
  {
    title: "Sector 82 Premium Residence",
    category: "Residential",
    location: "Mohali, Punjab",
    description: "A refined independent residence with clean facade lines, durable finishes and carefully sequenced handover.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Corporate Office Fit-Out",
    category: "Commercial",
    location: "Sahibzada Ajit Singh Nagar",
    description: "A workplace fit-out focused on efficient circulation, robust services and a polished client-facing finish.",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Retail Development Shell",
    category: "Retail",
    location: "Punjab",
    description: "Civil and finishing works for a retail environment designed for daily footfall and operational reliability.",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Villa Renovation & Extension",
    category: "Residential",
    location: "Mohali",
    description: "A phased renovation with structural upgrades, improved internal planning and premium external finishes.",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Institutional External Works",
    category: "Infrastructure",
    location: "Punjab",
    description: "Pathways, drainage and site improvement works delivered with careful logistics and safe site movement.",
    image: "https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=1400&q=80",
  },
  {
    title: "Modern Office Space",
    category: "Commercial",
    location: "Mohali",
    description: "Commercial interiors coordinated around services, acoustic comfort and a durable everyday finish.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
  },
];

export const testimonials = [
  {
    quote:
      "The team kept the project organised and communicated clearly at each stage. The workmanship and finish were exactly what we needed.",
    name: "R. Sharma",
    role: "Residential Client, Mohali",
  },
  {
    quote:
      "A.K.A Constructions handled our office works with a professional approach, practical scheduling and strong attention to site details.",
    name: "Meera S.",
    role: "Commercial Client, Punjab",
  },
  {
    quote:
      "Their project supervision gave us confidence. Timelines, materials and site progress were discussed transparently throughout.",
    name: "A. Gill",
    role: "Renovation Client",
  },
];

export const faqs = [
  {
    question: "Do you handle both residential and commercial projects?",
    answer:
      "Yes. A.K.A Constructions supports residential, commercial, renovation, civil and infrastructure-related works across Mohali and Punjab.",
  },
  {
    question: "Can you provide a project estimate before work begins?",
    answer:
      "Yes. We review the site, scope and preferred materials before preparing a practical estimate and delivery approach.",
  },
  {
    question: "How do you manage quality on site?",
    answer:
      "Quality is managed through material checks, site supervision, milestone reviews and clear coordination with skilled trades.",
  },
  {
    question: "What are your business hours?",
    answer: "Our office hours are Monday to Saturday, 9:00 AM to 6:00 PM.",
  },
];
