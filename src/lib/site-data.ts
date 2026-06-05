import {
  BarChart3,
  CheckCircle2,
  Clapperboard,
  Edit3,
  FileText,
  ImageIcon,
  Mic,
  Palette,
  Search,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "Bilancy",
  email: "info@bilancy.com",
  emailHref: "mailto:info@bilancy.com",
  phone: "+1 479 562 1020",
  phoneHref: "tel:+14795621020",
  whatsappHref:
    "https://wa.me/14795621020?text=Hi%20Bilancy%2C%20I%27m%20interested%20in%20your%20YouTube%20automation%20services.",
  logo: "/wiuthout-bg.png",
  workUrl: "https://drive.google.com/drive/folders/1JnhCMppSMNmna59w5wNW0VsniaQDmWus?usp=sharing",
};

export const navItems = [
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#work" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/faq" },
];

export const socialLinks = [
  { label: "WhatsApp", href: brand.whatsappHref },
  { label: "Portfolio", href: brand.workUrl },
  { label: "Email", href: brand.emailHref },
];

export const stats = [
  { value: "50M+", label: "Views Generated" },
  { value: "100+", label: "Happy Clients" },
  { value: "24/7", label: "Support" },
];

export const heroCards = [
  {
    title: "Profitable Niches",
    description: "We start with proven niches and ideas backed by research, not assumptions.",
    Icon: Search,
  },
  {
    title: "High-Retention Content System",
    description: "Our scripts, editing, and thumbnails are designed to keep viewers watching longer.",
    Icon: Clapperboard,
  },
  {
    title: "End-to-End Automation",
    description: "From ideas to upload-ready videos, we handle the entire process for you.",
    Icon: Zap,
  },
  {
    title: "Consistent & Scalable Growth",
    description: "We focus on steady channel growth built for long-term results.",
    Icon: TrendingUp,
  },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  highlights: string[];
};

export const services: Service[] = [
  {
    icon: TrendingUp,
    title: "1. Niche Research",
    description: "Identification of profitable niches • Competitor & audience analysis",
    highlights: ["Profitable niche identification", "Competitor analysis", "Audience research"],
  },
  {
    icon: FileText,
    title: "2. Content & Idea Research",
    description:
      "Viral topic discovery • High-CTR & high-retention content angles • Competitor performance breakdown • Evergreen + trending hybrid ideas",
    highlights: ["Viral topics", "High-CTR angles", "Performance analysis"],
  },
  {
    icon: Edit3,
    title: "3. High-Retention Script Writing",
    description:
      "Engaging, story-driven scripts • Strong hooks and retention-focused structure • SEO-optimized and fact-checked writing • Tailored tone & style for your niche",
    highlights: ["Story-driven scripts", "Strong hooks", "SEO-optimized"],
  },
  {
    icon: Mic,
    title: "4. Professional Voiceovers",
    description:
      "Studio-quality male & female voiceovers • US, UK, and Neutral accents available • Emotion-driven delivery for better retention",
    highlights: ["Studio quality", "Multiple accents", "Emotion-driven"],
  },
  {
    icon: Zap,
    title: "5. Video Editing (Premium Quality)",
    description:
      "Fast-paced, engaging editing style • Stock footage and transitions • Background music & sound design • Optimized for maximum watch time",
    highlights: ["Fast-paced editing", "Stock footage", "Sound design"],
  },
  {
    icon: ImageIcon,
    title: "6. Thumbnail Design (High CTR)",
    description:
      "Eye-catching, scroll-stopping designs • Strong emotions, bold text & clean layout • A/B tested hooks & visual psychology • Fully brand-consistent graphics",
    highlights: ["Scroll-stopping designs", "A/B tested", "Brand-consistent"],
  },
  {
    icon: BarChart3,
    title: "7. YouTube SEO Optimization",
    description:
      "Keyword research & metadata optimization • Title, description & tag optimization • Audience targeting & ranking strategy • Playlist & channel structure setup",
    highlights: ["Keyword research", "Metadata optimization", "Ranking strategy"],
  },
  {
    icon: TrendingUp,
    title: "8. Growth Analysis & Performance Tracking",
    description:
      "Monthly analytics reports • Competitor benchmarking • Content performance insights • Growth strategy recommendations",
    highlights: ["Analytics reports", "Benchmarking", "Strategy recommendations"],
  },
  {
    icon: Palette,
    title: "9. Channel Creation & Branding",
    description:
      "Complete YouTube channel setup • Professional logo & banner design • Branding guidelines (fonts, colors, style) • About section copywriting",
    highlights: ["Complete setup", "Professional design", "Branding guidelines"],
  },
];

export const creatorLogos = Array.from({ length: 10 }, (_, index) => ({
  src: `/tenpics/${index + 1}.png`,
  alt: `Creator ${index + 1}`,
}));

export const workRowOne = [
  "/how/Untitled design (1).jpg",
  "/how/Untitled design (2).jpg",
  "/how/Untitled design (3).jpg",
  "/how/Untitled design (4).jpg",
  "/how/Untitled design (5).jpg",
  "/how/Untitled design (6).jpg",
  "/how/Untitled design (7).jpg",
  "/how/Untitled design (8).jpg",
  "/how/Untitled design (9).jpg",
  "/how/Untitled design (10).jpg",
  "/how/15.jpeg",
  "/how/17.jpeg",
  "/how/19.jpeg",
  "/how/7 habits killing your engine thumbnail.jpg",
];

export const workRowTwo = [
  "/how/Untitled design (11).jpg",
  "/how/Untitled design (12).jpg",
  "/how/Untitled design (13).jpg",
  "/how/Untitled design (14).jpg",
  "/how/Untitled design (15).jpg",
  "/how/Untitled design (16).jpg",
  "/how/Untitled design (17).jpg",
  "/how/Untitled design (18).jpg",
  "/how/Untitled design (19).jpg",
  "/how/Untitled design (20).jpg",
  "/how/STOP USING DISH SOAP & SPONGES THUMBNAIL.jpg",
  "/how/THUMBNAIL 2 (1).png",
  "/how/rich_l.webp",
  "/how/rrr.webp",
];

export const caseStudyGroups = [
  {
    channel: "Channel 1",
    images: [
      "/Channel 1/The Auto Brain.jpeg",
      "/Channel 1/The Auto Brain (1).jpeg",
      "/Channel 1/The Auto Brain (2).jpeg",
    ],
  },
  {
    channel: "Channel 2",
    images: [
      "/CHANNEL 2/KNOW A BIT MORE (1).jpeg",
      "/CHANNEL 2/KNOW A BIT MORE (2).jpeg",
      "/CHANNEL 2/KNOW A BIT MORE (3).jpeg",
    ],
  },
  {
    channel: "Channel 3",
    images: [
      "/CHANNEL 3/rush for gold (1).jpeg",
      "/CHANNEL 3/rush for gold (2).jpeg",
      "/CHANNEL 3/rush for gold (3).jpeg",
    ],
  },
  {
    channel: "Achievements",
    images: Array.from({ length: 17 }, (_, index) => `/Achivements/${index + 1}.jpeg`),
  },
];

export const beginnerSteps = [
  {
    number: "01",
    title: "Profitable Niche Selection",
    description:
      "We research and select a profitable niche for your channel. Then we guide you step by step from setup to publishing.",
  },
  {
    number: "02",
    title: "Channel Setup & Branding",
    description: "We create your channel, branding, and basic setup so it looks professional from day one.",
  },
  {
    number: "03",
    title: "Choose a Video Package",
    description:
      "After selecting a package from our pricing section or scheduling a call, you'll be connected with our team to share all the necessary details and specific requests for your video.",
  },
  {
    number: "04",
    title: "Video Production",
    description:
      "After we get a good understanding of your channel and video needs, our team will start right away. Your video, including the script writing, voiceover, editing and the thumbnail, will be ready in 60-72 hours tops.",
  },
  {
    number: "05",
    title: "Approval + Delivery",
    description:
      "After we finish your video, you can ask for any changes you want. We'll make sure you're completely happy with the final result before delivery!",
  },
  {
    number: "06",
    title: "Growth & Automation",
    description:
      "As we continue working together, the process becomes automated. You own the channel, we handle the work, and your channel grows consistently. Sit back and relax. We take care of everything while you focus on growth.",
  },
];

export const existingSteps = [
  {
    number: "01",
    title: "Channel Review",
    description: "We review your current channel, content, and performance to understand what needs improvement.",
  },
  ...beginnerSteps.slice(2),
];

export const plans = [
  {
    name: "STARTER PACKAGE",
    description: "Ideal for beginners",
    originalPrice: 110,
    discountedPrice: 99,
    features: [
      "Profitable Niche Research",
      "Channel Setup (Logo, Banner)",
      "1 Best Quality Video (7-10 Mins Duration)",
      "High-quality thumbnail",
      "Cost: $99 (Limited Time - More Than 10% Discount Included)",
    ],
  },
  {
    name: "Per Video",
    description: "Pay per video - perfect for testing our service",
    originalPrice: 60,
    discountedPrice: 50,
    features: [
      "7 - 10 minute professional video production",
      "Custom-written script tailored to your content",
      "Professional voiceover narration",
      "High-quality custom thumbnail design",
      "Final review and unlimited revisions",
    ],
  },
  {
    name: "10 Videos",
    description: "Perfect for channels ready to step up their content game",
    originalPrice: 600,
    discountedPrice: 500,
    popular: true,
    features: [
      "10 high-quality videos",
      "Duration 7-10 minutes",
      "Premium scripts",
      "Multiple voice over choices",
      "Advanced video editing",
      "High CTR thumbnails",
      "SEO services",
      "Unlimited Revisions",
    ],
  },
  {
    name: "15 Videos",
    description: "Your monthly solution for consistent growth",
    originalPrice: 900,
    discountedPrice: 700,
    recommended: true,
    features: [
      "15 high-quality videos",
      "Duration 7-10 minutes",
      "Premium scripts",
      "Multiple voice over choices",
      "Advanced video editing",
      "High CTR thumbnails",
      "SEO services",
      "Unlimited Revisions",
    ],
  },
];

export const testimonials = [
  {
    name: "Alex Rivera",
    role: "Tech Reviewer",
    channel: "TechGenius",
    subscribers: "150K",
    content:
      "The team transformed my channel completely. The editing quality is cinema-level, and the automation tools saved me countless hours. My views increased by 400% in just 6 months!",
    avatar: "AR",
  },
  {
    name: "Sarah Johnson",
    role: "Fitness Coach",
    channel: "FitLife Pro",
    subscribers: "200K",
    content:
      "Best investment I've made in my channel. The thumbnails alone increased my CTR by 60%. The team understands YouTube algorithm perfectly and delivers consistently.",
    avatar: "SJ",
  },
  {
    name: "Marcus Chen",
    role: "Gaming Creator",
    channel: "GameMaster",
    subscribers: "500K",
    content:
      "Working with this team feels like having a professional studio at my disposal. They handle everything from editing to SEO, letting me focus purely on creating content.",
    avatar: "MC",
  },
  {
    name: "Emma Williams",
    role: "Educational Content",
    channel: "LearnWithEmma",
    subscribers: "180K",
    content:
      "The script writing and voiceover services are incredible. They helped me find my unique voice and style. My audience engagement has never been better!",
    avatar: "EW",
  },
];

export const faqs = [
  {
    question: "How long does it take for an entire video to get made?",
    answer: "We guarantee your video fully edited, with a thumbnail, ready to go, all within a max period of 60-72 hours.",
  },
  {
    question: "Is there a trial period available to test the service before committing?",
    answer:
      "Absolutely! You can order a customizable sample video for FREE! This will be completely risk free, no commitment is required. The free sample will allow you to witness the impact of our automation services on your channel firsthand.",
  },
  {
    question: "Who owns the videos created through your automation services, and what is the liability in terms of compliance with YouTube policies?",
    answer:
      "You retain full ownership of all videos created through our automation services. We ensure all content complies with YouTube's terms of service and community guidelines. However, the final responsibility for content uploaded to your channel rests with you as the channel owner.",
  },
];

export const processIcons = {
  beginner: Users,
  existing: CheckCircle2,
};
