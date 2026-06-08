import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  starbucks,
  tesla,
  shopify,
  meta,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three.js", icon: threejs },
  { name: "Git", icon: git },
];

const experiences = [
  {
    title: "Full-Stack Developer Trainee",
    company_name: "Smart Skills Council — Skill India",
    icon: starbucks,
    iconBg: "#FAF0F0",
    date: "May 2024 – May 2025",
    certificate: "/certificates/ssc.pdf",
    points: [
      "12-month government-certified training in Full Stack Development — Grade A+ (90/100).",
      "Built and deployed full-stack applications using React, Node.js, Express, and MongoDB.",
      "Worked on REST APIs, JWT authentication, and database design.",
      "Capstone: Built Chianya — a live AI-powered youth mental health platform aligned with UN SDG 3 and SDG 4.",
    ],
  },
  {
    title: "AI/ML Virtual Intern",
    company_name: "YBI Foundation",
    icon: tesla,
    iconBg: "#FAF0F0",
    date: "July 2024 – Sept 2024",
    certificate: "/certificates/Ybi.pdf",
    points: [
      "Supervised and unsupervised ML models using Python and scikit-learn.",
      "Data preprocessing, feature engineering, and model evaluation.",
      "Gained practical understanding of real-world AI/ML workflows.",
    ],
  },
  {
    title: "Software Engineering Virtual Experience",
    company_name: "JPMorgan Chase & Co.",
    icon: shopify,
    iconBg: "#FAF0F0",
    date: "Aug 2024 – Sept 2024",
    certificate: "/certificates/JP.pdf",
    points: [
      "Completed virtual job simulation focused on software engineering tasks.",
      "Worked on financial data structures, analysis tasks, and industry-level workflows.",
      "Improved analytical thinking and problem-solving practices.",
    ],
  },
  {
    title: "Artificial Intelligence Virtual Experience",
    company_name: "Accenture",
    icon: meta,
    iconBg: "#FAF0F0",
    date: "Jul 2024 – Aug 2024",
    certificate: "/certificates/accenture.pdf",
    points: [
      "3-week virtual program on AI fundamentals and real-world applications.",
      "Explored how AI transforms workplaces and business decision-making.",
      "Gained understanding of human-AI collaboration in practice.",
    ],
  },
];

const projects = [
  {
    name: "Chianya — Forest of Consciousness",
    tagline: "A digital sanctuary for youth who are carrying something heavy.",
    description:
      "An AI-powered emotional wellbeing platform for youth aged 16–28. A living 3D forest that responds to how you feel. AI companion Antar with crisis detection routed to real helplines. Letter to Future Self delivered 30 days later. Built because the 11 PM moment deserved a real answer.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Three.js", color: "green-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Groq AI", color: "green-text-gradient" },
    ],
    sdgs: ["SDG 3", "SDG 4"],
    status: "live",
    emoji: "🌿",
    color: "#7A9E7E",
    image: "/projects/chianya.png",
    live_link: "https://chianya.vercel.app",
    source_code_link: "https://github.com/Anchalbisht10/Chianya",
  },
  {
    name: "KAIROS — For the First-Generation Girl",
    tagline: "An AI older sister for girls from small towns who have no one to guide them.",
    description:
      "Scholarship and guidance platform for first-generation college girls from Tier 2/3 Indian cities. AI mentor KAI helps them find scholarships, navigate careers, and know they are not alone. 35+ real scholarships seeded across 7 states.",
    tags: [
      { name: "React", color: "pink-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "Groq AI", color: "pink-text-gradient" },
    ],
    sdgs: ["SDG 4", "SDG 5"],
    status: "in development",
    emoji: "🎓",
    color: "#E8A598",
    image: "/projects/doctor.png",
    live_link: null,
    source_code_link: "https://github.com/Anchalbisht10",
  },
  {
    name: "OjasVyn — Rural Healthcare Access",
    tagline: "Because healthcare is not a privilege that distance should deny.",
    description:
      "Bilingual Hindi/English platform connecting rural Indians to government hospitals and Ayurvedic health guidance via AI. Covers 20+ states and 1,400+ government facilities. Zero cost. Zero registration.",
    tags: [
      { name: "React", color: "green-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Groq AI", color: "green-text-gradient" },
    ],
    sdgs: ["SDG 3", "SDG 10"],
    status: "in development",
    emoji: "🏥",
    color: "#7A9E7E",
    image: "/projects/ojas.png",
    live_link: null,
    source_code_link: "https://github.com/Anchalbisht10",
  },
];

const testimonials = [];
const services = [];

export { services, technologies, experiences, testimonials, projects };