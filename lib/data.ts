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
  year: string
  imageAlignment?: string
  objectFit?: string
}

export const projects: Project[] = [
  {
    id: 'most-valuable',
    title: 'Most Valuable - Raffle Platform',
    tagline: 'High-stakes e-commerce raffle system',
    description: 'Developed a high-performance e-commerce raffle platform. Features secure entry systems, real-time draw mechanics, and a transparent winner selection process.',
    longDescription: 'A freelance project built for high-demand raffle events. Engineered a seamless entry system with secure payment integration and real-time participation tracking. The platform ensures fairness and transparency in every draw, handling high-traffic drops with ease.',
    metrics: [
      { label: 'Type', value: 'Freelance' },
      { label: 'Security', value: 'High' },
      { label: 'Scale', value: 'Global' },
    ],
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PostgreSQL'],
    features: [
      'Secure raffle entry system',
      'Real-time participation tracking',
      'Transparent winner selection',
      'High-traffic performance',
    ],
    challenges: [
      'Ensuring fair draw logic',
      'Handling concurrent user spikes',
    ],
    learnings: [
      'Secure transaction handling',
      'High-concurrency architecture',
    ],
    github: 'https://github.com/PrashleshPratapSingh/most-valuable',
    demo: 'https://most-valuable.vercel.app/',
    image: '/projects/most-valuable.png',
    featured: true,
    category: 'Full-Stack',
    year: '2024',
    imageAlignment: 'object-center',
    objectFit: 'object-contain',
  },
  {
    id: 'empath-ai',
    title: 'EmpathAI - Mental Health Support',
    tagline: 'Always-available, voice-first empathic AI companion',
    description: 'An AI-powered mental health safety net offering real-time, voice-based support and crisis detection for those unable to access traditional therapy.',
    longDescription: 'EmpathAI isn\'t checking boxes—it\'s listening. Built to bridge the gap when human help isn\'t available, it serves as a judgment-free, 24/7 mental health companion.\n\nUnlike standard chatbots, EmpathAI processes voice tone, sentiment, and historical context to provide genuine, therapeutic-grade empathy. It features a three-layer architecture: a responsive Frontend (Next.js/Framer), a deep Intelligence Layer (Gemini/Llama/Groq) for emotion detection, and a secure Data Layer (Convex) for privacy.\n\nThe system includes real-time crisis detection to intervene when professional help is urgently needed, making it a critical tool for students, professionals, and underserved communities.',
    metrics: [
      { label: 'Response Time', value: '<500ms' },
      { label: 'Availability', value: '24/7' },
      { label: 'Privacy', value: 'E2E Encrypted' },
    ],
    techStack: ['Next.js 15', 'Gemini 2.5', 'Llama 3.3', 'Groq', 'Convex', 'Clerk', 'Framer Motion'],
    features: [
      'Natural Voice Conversations (No typing)',
      'Real-time Emotion & Tone Analysis',
      'Crisis Pattern Detection',
      'Long-term Memory & Context Retention'
    ],
    challenges: [
      'Achieving sub-500ms latency for voice-to-voice interaction',
      'Balancing AI empathy with clinical safety boundaries',
      'Architecting a secure, HIPAA-compliant real-time data layer'
    ],
    learnings: [
      'Complex multi-modal AI pipeline verification',
      'Real-time WebSocket audio streaming optimization',
      'Designing "Human-in-the-loop" safety nets for AI'
    ],
    demo: 'https://empath-ai-omega.vercel.app/',
    github: 'https://github.com/PrashleshPratapSingh',
    image: '/empath-ai.png',
    featured: true,
    category: 'AI/ML',
    year: '2026',
    imageAlignment: 'object-center',
    objectFit: 'object-contain'
  },
  {
    id: 'herbx-blockchain',
    title: 'HerbX - Blockchain Supply Chain (WIP)',
    tagline: 'Transparent supply chain for Ayurvedic herbs',
    description: 'Ethereum-based dApp ensuring transparency and immutability in the Ayurvedic supply chain, enabling product verification via QR code.',
    longDescription: 'Developing an Ethereum-based decentralized application (dApp) to create a transparent and immutable supply chain for Ayurvedic herbs. Leveraged smart contracts for tamper-proof record-keeping, allowing consumers to verify product origin and authenticity instantly via a QR code scan.',
    metrics: [
      { label: 'Status', value: 'Work in Progress' },
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
    github: 'https://github.com/PrashleshPratapSingh/HerbX',
    demo: 'https://herb-x.vercel.app/',
    image: '/Screenshot 2026-01-27 203629.png',
    featured: true,
    category: 'Blockchain',
    year: '2025',
    imageAlignment: 'object-center',
    objectFit: 'object-contain',
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
  github: 'https://github.com/PrashleshPratapSingh',
  linkedin: 'https://linkedin.com/in/prashlesh',
  portfolio: 'https://prashlesh-portfolio.vercel.app',
  email: 'iamprashlesh@gmail.com',
  leetcode: 'https://leetcode.com/prashlesh',
}
