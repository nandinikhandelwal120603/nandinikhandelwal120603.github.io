export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  hasDemo?: boolean;
  hasCaseStudy?: boolean;
  slug: string;
  featured: boolean;
  type: "AI_SYSTEM" | "AUTOMATION" | "CORE_ENGINEERING" | "FINTECH" | "EXPERIMENT";
  tags?: string[];
  category: "FEATURED_SYSTEMS" | "AI_SYSTEMS_LAB" | "CORE_ENGINEERING";
}

export const projectsData: Project[] = [
  {
    title: "Manager Pro Dashboard",
    description: "Offline-first automation system for real-world property and financial tracking operations.",
    technologies: ["React", "Supabase", "PWA", "SMS Gateway"],
    githubUrl: "https://github.com/nandinikhandelwal120603/Manager-Pro",
    demoUrl: "/project/manager-pro-dashboard",
    hasDemo: true,
    hasCaseStudy: true,
    slug: "manager-pro-dashboard",
    featured: true,
    type: "AUTOMATION",
    tags: ["Operations", "Offline-First", "Financial Tracking"],
    category: "FEATURED_SYSTEMS",
  },
  {
    title: "AURA: AI Styling Protocol",
    description: "Neural-powered fashion assistant that converts a wardrobe into a structured dataset for AI-driven outfit generation.",
    technologies: ["React", "Supabase", "Gemini Vision", "TensorFlow.js"],
    githubUrl: "https://github.com/nandinikhandelwal120603/AURA",
    demoUrl: "/project/aura-wardrobe-assistant",
    hasDemo: true,
    hasCaseStudy: true,
    slug: "aura-wardrobe-assistant",
    featured: true,
    type: "AI_SYSTEM",
    tags: ["Computer Vision", "Personalized Data", "Style Intelligence"],
    category: "FEATURED_SYSTEMS",
  },
  {
    title: "Jarvis Voice Assistant",
    description: "Futuristic voice interface that turns natural speech into executable AI workflows with real-time agent coordination.",
    technologies: ["React", "n8n", "OpenAI", "Web Speech API"],
    githubUrl: "https://github.com/nandinikhandelwal120603/Jarvis-AI",
    demoUrl: "/project/jarvis-voice-assistant",
    hasDemo: true,
    hasCaseStudy: true,
    slug: "jarvis-voice-assistant",
    featured: true,
    type: "AI_SYSTEM",
    tags: ["Voice Interface", "Agent Execution", "n8n"],
    category: "FEATURED_SYSTEMS",
  },
  {
    title: "LinkedIn Buyer Lead Engine",
    description: "AI-powered discovery and qualification system that finds real buyers on LinkedIn using search + AI filtering.",
    technologies: ["n8n", "Google Search API", "AI Filtering", "Google Sheets"],
    githubUrl: "https://github.com/nandinikhandelwal120603/LinkedIn-Lead-Engine",
    demoUrl: "/project/linkedin-lead-engine",
    hasDemo: false,
    hasCaseStudy: true,
    slug: "linkedin-lead-engine",
    featured: true,
    type: "AUTOMATION",
    tags: ["Lead Intelligence", "Autonomous Search", "Marketing Tech"],
    category: "AI_SYSTEMS_LAB",
  },
  {
    title: "Automated YouTuber",
    description: "Fully autonomous end-to-end AI content generation pipeline from script to published video.",
    technologies: ["Python", "YouTube API", "FFmpeg", "OpenAI"],
    githubUrl: "https://github.com/nandinikhandelwal120603/Automated-YouTuber",
    demoUrl: "/project/automated-youtuber",
    hasDemo: false,
    hasCaseStudy: true,
    slug: "automated-youtuber",
    featured: true,
    type: "AI_SYSTEM",
    tags: ["Content Automation", "Pipeline", "Video Engine"],
    category: "AI_SYSTEMS_LAB",
  },
  {
    title: "Automated Marketing Report Engine",
    description: "Agency-grade intelligence system that turns raw ga4/ads data into high-fidelity executive insights—automatically.",
    technologies: ["n8n", "OpenAI", "GA4 API", "Meta Ads API"],
    githubUrl: "https://github.com/nandinikhandelwal120603/Marketing-Report-Engine",
    demoUrl: "/project/marketing-report-engine",
    hasDemo: false,
    hasCaseStudy: true,
    slug: "marketing-report-engine",
    featured: true,
    type: "AUTOMATION",
    tags: ["Business System", "AI Agent", "Data Pipeline"],
    category: "AI_SYSTEMS_LAB",
  },
];
