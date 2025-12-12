export const stats = [
  { label: 'GitHub Repos', value: '17+', icon: 'github' },
  { label: 'Projects Built', value: '5+', icon: 'code' },
  { label: 'Hackathons', value: '2+', icon: 'briefcase' },
  { label: 'Tech Stack', value: '10+', icon: 'shield' },
]

export const skills = {
  'Programming Languages': {
    items: ['C++', 'Python', 'JavaScript', 'TypeScript', 'Java', 'Solidity'],
    level: 'Advanced',
  },
  'Frontend Development': {
    items: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5', 'CSS3'],
    level: 'Advanced',
  },
  'Backend Development': {
    items: ['Node.js', 'Express.js', 'MongoDB', 'Convex', 'PostgreSQL'],
    level: 'Intermediate',
  },
  'Blockchain': {
    items: ['Solidity', 'Ethereum', 'Smart Contracts', 'Web3.js'],
    level: 'Intermediate',
  },
  'Tools & Design': {
    items: ['Git', 'GitHub', 'Figma', 'UI/UX Design', 'Vercel'],
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
    title: 'AURA - E-commerce Clothing Store',
    tagline: 'Full-stack e-commerce platform for modern clothing retail',
    description: 'Developed and deployed a full-stack e-commerce platform for a modern clothing brand with 3D product visualization, persistent shopping cart, and real-time inventory management.',
    longDescription: 'Built a complete e-commerce solution featuring a modern UI with 3D product visualization, user authentication, persistent shopping cart using Convex database, size guides, and an intuitive checkout flow. The platform delivers a premium shopping experience with smooth animations and responsive design across all devices.',
    metrics: [
      { label: 'Products', value: '50+' },
      { label: 'Load Time', value: '<2s' },
      { label: 'Mobile Score', value: '95+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    techStack: ['Next.js', 'React', 'Convex', 'TypeScript', 'Tailwind CSS', 'Clerk Auth'],
    features: [
      '3D product visualization with interactive previews',
      'Persistent shopping cart with Convex real-time database',
      'Size guide and product filtering system',
      'Secure user authentication with Clerk',
      'Responsive design with smooth animations',
    ],
    challenges: [
      'Implementing real-time cart sync across devices',
      'Optimizing 3D renders for mobile performance',
      'Managing complex state with product variants',
    ],
    learnings: [
      'Full-stack development with Next.js and Convex',
      'Real-time database patterns and optimistic updates',
      'E-commerce UX best practices',
    ],
    github: 'https://github.com/vengeanceprashlesh/AURA',
    demo: 'https://aura-store.vercel.app',
    image: '/projects/aura.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 'herbx-blockchain',
    title: 'HerbX - Blockchain Supply Chain',
    tagline: 'Decentralized herb traceability using Ethereum smart contracts',
    description: 'Blockchain-based supply chain system for tracking herbal products from farm to consumer with complete transparency and immutable records.',
    longDescription: 'Developing a decentralized supply chain tracking system for herbal products using Ethereum smart contracts on the Sepolia testnet. The platform enables farmers, distributors, and consumers to verify product authenticity and trace the complete journey of herbs through the supply chain with tamper-proof blockchain records.',
    metrics: [
      { label: 'Status', value: 'In Progress' },
      { label: 'Smart Contracts', value: '3+' },
      { label: 'Test Coverage', value: '85%' },
      { label: 'Network', value: 'Sepolia' },
    ],
    techStack: ['Solidity', 'Next.js', 'TypeScript', 'Ethereum', 'Tailwind CSS', 'Hardhat'],
    features: [
      'Smart contract-based product registration',
      'QR code scanning for instant verification',
      'Complete supply chain visibility',
      'Role-based access for stakeholders',
      'Immutable transaction history',
    ],
    challenges: [
      'Designing gas-efficient smart contracts',
      'Handling blockchain confirmation delays in UX',
      'Integrating Web3 wallet connections seamlessly',
    ],
    learnings: [
      'Solidity smart contract development',
      'Ethereum development with Hardhat',
      'Web3 frontend integration patterns',
    ],
    github: 'https://github.com/vengeanceprashlesh/HerbX',
    image: '/projects/herbx.png',
    featured: true,
    category: 'Blockchain',
  },
  {
    id: 'clarityflow',
    title: 'ClarityFlow',
    tagline: 'AI-powered productivity and focus application',
    description: 'A productivity application designed to help users maintain focus and clarity in their daily tasks with intelligent scheduling and insights.',
    longDescription: 'Built a modern productivity application that helps users organize tasks, maintain focus, and track their productivity patterns. Features include intelligent task prioritization, focus mode timers, and detailed analytics to understand work patterns and improve efficiency.',
    metrics: [
      { label: 'Features', value: '10+' },
      { label: 'UI Components', value: '25+' },
      { label: 'Performance', value: '98+' },
      { label: 'Accessibility', value: 'A11Y' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Convex'],
    features: [
      'Intelligent task prioritization system',
      'Focus mode with customizable timers',
      'Productivity analytics and insights',
      'Clean, distraction-free interface',
      'Cross-device synchronization',
    ],
    challenges: [
      'Designing intuitive UX for task management',
      'Implementing real-time sync across devices',
      'Building accessible UI components',
    ],
    learnings: [
      'Advanced React patterns and state management',
      'Animation and micro-interaction design',
      'Accessibility best practices',
    ],
    github: 'https://github.com/vengeanceprashlesh/ClarityFlow',
    image: '/projects/clarityflow.png',
    featured: true,
    category: 'Full-Stack',
  },
  {
    id: 'evolve',
    title: 'Evolve',
    tagline: 'Personal growth and habit tracking platform',
    description: 'A habit tracking and personal development application to help users build positive habits and track their progress over time.',
    longDescription: 'Created a comprehensive habit tracking platform that enables users to set goals, build habits, and visualize their personal growth journey. The application features streak tracking, motivational reminders, and progress analytics to keep users engaged and motivated.',
    metrics: [
      { label: 'Habit Types', value: '5+' },
      { label: 'Streak Tracking', value: '∞' },
      { label: 'Charts', value: '4+' },
      { label: 'Themes', value: '3+' },
    ],
    techStack: ['TypeScript', 'Next.js', 'React', 'Tailwind CSS', 'Chart.js'],
    features: [
      'Daily habit tracking with streaks',
      'Progress visualization with charts',
      'Goal setting and milestones',
      'Customizable reminder notifications',
      'Dark/light theme support',
    ],
    challenges: [
      'Creating engaging progress visualizations',
      'Implementing reliable notification system',
      'Designing motivational UX elements',
    ],
    learnings: [
      'Data visualization with Chart.js',
      'User engagement and gamification',
      'Local storage and offline support',
    ],
    github: 'https://github.com/vengeanceprashlesh/evolve',
    image: '/projects/evolve.png',
    featured: false,
    category: 'Full-Stack',
  },
  {
    id: 'ai-study-app',
    title: 'AI Study Application',
    tagline: 'Personalized learning platform with AI assistance',
    description: 'Full-stack personalized AI study application designed to help students optimize their learning process and track academic progress.',
    longDescription: 'Developed a personalized AI-powered study application as part of Smart India Hackathon 2025. The platform uses AI to adapt learning content based on student performance, provides personalized study recommendations, and tracks learning progress to help students achieve their academic goals more efficiently.',
    metrics: [
      { label: 'Hackathon', value: 'SIH 2025' },
      { label: 'AI Features', value: '5+' },
      { label: 'User Types', value: '3' },
      { label: 'Modules', value: '8+' },
    ],
    techStack: ['Next.js', 'TypeScript', 'Python', 'AI/ML', 'Tailwind CSS', 'PostgreSQL'],
    features: [
      'AI-powered personalized learning paths',
      'Progress tracking and analytics',
      'Adaptive quiz and assessment system',
      'Study schedule optimization',
      'Performance insights and recommendations',
    ],
    challenges: [
      'Integrating AI models for personalization',
      'Building adaptive assessment algorithms',
      'Handling diverse learning patterns',
    ],
    learnings: [
      'AI integration in educational applications',
      'Hackathon development under time constraints',
      'Team collaboration and rapid prototyping',
    ],
    image: '/projects/ai-study.png',
    featured: false,
    category: 'AI/ML',
  },
]

export const timeline = [
  {
    year: '2024',
    title: 'Started B.Tech CSE',
    description: 'Began Computer Science Engineering at Woxsen University, Hyderabad',
  },
  {
    year: '2024',
    title: 'First Full-Stack Project',
    description: 'Built AURA e-commerce platform with Next.js and Convex',
  },
  {
    year: '2025',
    title: 'Smart India Hackathon',
    description: 'Competed in SIH 2025 - Built AI-powered study application',
  },
  {
    year: '2025',
    title: 'Blockchain Development',
    description: 'Started HerbX - Supply chain tracking with Ethereum smart contracts',
  },
  {
    year: '2025',
    title: 'UX Design Certification',
    description: 'Certified in Foundations of User Experience (UX Design)',
  },
]

export const socials = {
  github: 'https://github.com/vengeanceprashlesh',
  linkedin: 'https://linkedin.com/in/prashlesh',
  portfolio: 'https://prashlesh-portfolio.vercel.app',
  email: 'prashlesh@gmail.com',
  leetcode: 'https://leetcode.com/prashlesh',
}
