export const stats = [
  { label: 'GitHub Repos', value: '17+', icon: 'github' },
  { label: 'Projects Built', value: '5+', icon: 'code' },
  { label: 'Hackathons', value: '2+', icon: 'briefcase' },
  { label: 'Tech Stack', value: '10+', icon: 'shield' },
]

export const skills = {
  'Programming Languages': {
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java (Basic)'],
    level: 'Advanced',
  },
  'Web Technologies': {
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'MongoDB', 'HTML5', 'CSS3', 'Presistent Cart'],
    level: 'Advanced',
  },
  'Blockchain': {
    items: ['Solidity', 'Ethereum (Sepolia)', 'Wagmi', 'Smart Contracts'],
    level: 'Intermediate',
  },
  'Tools & Design': {
    items: ['Git', 'GitHub', 'Figma', 'UI/UX Design (Google Certified)', 'Vercel'],
    level: 'Advanced',
  },
}

export interface Project {
  id: string
  title: string
  tagline: string
  description: string
  longDescription: string
  metrics: {
    label: string
    value: string
  }[]
  techStack: string[]
  features: string[]
  challenges: string[]
  learnings: string[]
  github?: string
  demo?: string
  image: string
  featured: boolean
  category: 'AI/ML' | 'Full-Stack' | 'Blockchain'
}

export const projects: Project[] = [
  {
    id: 'aura-ecommerce',
    title: 'Aura - E-commerce Clothing Store',
    tagline: 'Modern clothing brand platform with 3D visualization',
    description: 'Developed and deployed a full-stack e-commerce platform featuring a clean, intuitive UI/UX, dynamic product listings, and a persistent shopping cart using Convex.',
    longDescription: 'Created a comprehensive e-commerce solution for a modern clothing brand. The platform features dynamic product listings, a persistent shopping cart, and real-time backend database management using Convex. Delivered a seamless shopping experience with polished UI/UX.',
    metrics: [
      { label: 'Performance', value: 'High' },
      { label: 'UX', value: 'Intuitive' },
      { label: 'Database', value: 'Real-time' },
    ],
    techStack: ['Next.js', 'React', 'Convex', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Dynamic product listings',
      'Persistent shopping cart',
      'Real-time database management',
      'Clean and intuitive UI/UX',
    ],
    challenges: [
      'Implementing persistent cart state',
      'Optimizing real-time data flow',
    ],
    learnings: [
      'Convex database integration',
      'E-commerce state management patterns',
    ],
    github: 'https://github.com/vengeanceprashlesh/AURA', // Assuming same repo
    demo: 'https://aura-clothing-blond.vercel.app/',
    image: '/projects/aura.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 'herbx-blockchain',
    title: 'HerbX - Blockchain Supply Chain',
    tagline: 'Transparent supply chain for Ayurvedic herbs',
    description: 'Ethereum-based dApp ensuring transparency and immutability in the Ayurvedic supply chain, enabling product verification via QR code.',
    longDescription: 'Developing an Ethereum-based decentralized application (dApp) to create a transparent and immutable supply chain for Ayurvedic herbs. Leveraged smart contracts for tamper-proof record-keeping, allowing consumers to verify product origin and authenticity instantly via a QR code scan.',
    metrics: [
      { label: 'Status', value: 'In Progress' },
      { label: 'Network', value: 'Sepolia' },
      { label: 'Security', value: 'Immutable' },
    ],
    techStack: ['Solidity', 'Next.js', 'TypeScript', 'Ethereum (Sepolia)', 'Tailwind CSS', 'Wagmi'],
    features: [
      'Transparent supply chain tracking',
      'Immutable record-keeping',
      'QR code product verification',
      'Anti-counterfeit mechanism',
    ],
    challenges: [
      'Smart contract optimization',
      'Integration with frontend via Wagmi',
    ],
    learnings: [
      'Blockchain application architecture',
      'Supply chain transparency solutions',
    ],
    github: 'https://github.com/vengeanceprashlesh/HerbX', // Assuming same repo
    image: '/projects/herbx.png',
    featured: true,
    category: 'Blockchain',
  },
  {
    id: 'evolve-ai',
    title: 'Evolve / AI Study App',
    tagline: 'Personalized AI study application',
    description: 'A full-stack personalized AI study application designed to help college students optimize their learning process.',
    longDescription: 'Developed and deployed a full-stack personalized AI study application designed to help college students optimize their learning process. This project was part of the Smart India Hackathon 2025, a 36-hour national-level event solving real-world problems.',
    metrics: [
      { label: 'Hackathon', value: 'SIH 2025' },
      { label: 'Duration', value: '36 Hours' },
      { label: 'Focus', value: 'AI Learning' },
    ],
    techStack: ['Next.js', 'React', 'AI Integration', 'Tailwind CSS'],
    features: [
      'Personalized study plans',
      'AI-driven learning optimization',
      'Real-world problem solving focus',
    ],
    challenges: [
      'Rapid prototyping in 36 hours',
      'Integrating AI logic effectively',
    ],
    learnings: [
      'Hackathon teamwork and pressure management',
      'Building practical AI solutions',
    ],
    demo: 'https://evolve-xi.vercel.app/',
    image: '/projects/ai-study.png', // Using existing image path
    featured: true,
    category: 'Full-Stack',
  },
]

export const timeline = [
  {
    year: '2024 - 2028',
    title: 'Bachelor of Computer Science',
    description: 'School of Technology | Woxsen University. GPA: 7.8/10. Specializing in Full-Stack Web Development.',
  },
  {
    year: '2022 - 2024',
    title: 'Intermediate',
    description: 'Sunbeam School Varuna. GPA: 7.6/10.',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon 2025',
    description: 'Competed in a 36-hour national-level event focused on solving real-world problems. Built an AI study app.',
  },
  {
    year: '2025',
    title: 'Foundations of UX Design',
    description: 'Certified in Foundations of User Experience (UX) Design (Google Certified).',
  },
  {
    year: '2025',
    title: 'Project Aura',
    description: 'Developed and deployed a full-stack e-commerce platform for a modern clothing brand.',
  },
]

export const certifications = [
  {
    name: "Foundations of User Experience (UX) Design",
    issuer: "Google",
    year: "2025",
    link: "https://coursera.org", // Placeholder
    icon: "google"
  },
  {
    name: "Full Stack Web Development",
    issuer: "Woxsen University",
    year: "2024",
    link: "#",
    icon: "code"
  },
  {
    name: "More Loading...",
    issuer: "Self-Paced",
    year: "2026",
    link: "#",
    icon: "more"
  }
]

export const socials = {
  github: 'https://github.com/vengeanceprashlesh',
  linkedin: 'https://linkedin.com/in/prashlesh',
  portfolio: 'https://prashlesh-portfolio.vercel.app',
  email: 'iamprashlesh@gmail.com',
  leetcode: 'https://leetcode.com/prashlesh',
}
