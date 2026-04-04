export interface Agent {
  role: string;
  description: string;
}

export interface ProjectDetail {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  githubUrl: string;
  demo?: {
    video: string;
    description: string;
  };
  problem: string;
  insight: string;
  system: {
    sections: string[];
    stack: string[];
  };
  workflow: string[];
  agents?: Agent[];
  features: string[];
  impact?: string;
  gallery?: string[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  "celestial-insights": {
    slug: "celestial-insights",
    title: "Celestial Insights",
    tagline: "AI-Powered Vedic Astrology Engine",
    description: "Turning ancient Jyotish into a data-driven, AI-augmented decision system.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Celestial-Insights",
    demo: {
      video: "v_astrology_demo",
      description: "Generate your Kundli in real-time, get AI-powered life analysis, and download a structured PDF Codex."
    },
    problem: "Traditional astrology tools are static, generic, and hard to interpret. They lack contextual intelligence and personalization for modern life decisions.",
    insight: "Astrology is already a structured system of rules and data. By combining precise astronomical calculations with LLM-based reasoning, we can create a personalized insight engine.",
    system: {
      sections: [
        "Input Layer: Birth details & Geocoding",
        "Calculation Engine: Custom Jyotish engine for Planetary positions, Dignities & Doshas",
        "AI Synthesis: Structured JSON injection into LLM context-aware prompting",
        "Output Layer: Multi-language PDF & interpretation generation"
      ],
      stack: ["Python", "Streamlit", "Google Gemini", "ReportLab", "Geopy"]
    },
    workflow: [
      "Wait for birth data and resolve geo/timezone accuracy",
      "Compute Kundli, planetary metrics, and Shadbala",
      "Interpret astrological patterns via AI Analysis Agent",
      "Generate high-fidelity PDF Codex with structured insights"
    ],
    agents: [
      { role: "Data Agent", description: "Resolves geographical coordinates and timezone accuracy." },
      { role: "Computation Agent", description: "Generates Kundli and complex planetary metrics." },
      { role: "Analysis Agent", description: "Interprets astrological patterns using LLM reasoning." },
      { role: "Narrative Agent", description: "Converts insights into human-readable guidance." }
    ],
    features: [
      "Lahiri Ayanamsha-based calculations",
      "Shadbala & planetary dignity evaluation",
      "Dosha detection (Manglik, Kaal Sarp, etc.)",
      "Dasha timeline forecasting",
      "Hyper-personalized life insights"
    ],
    impact: "Rule-based + AI hybrid reasoning system built on ancient datasets."
  },
  "manager-pro-dashboard": {
    slug: "manager-pro-dashboard",
    title: "Manager Pro Dashboard",
    tagline: "Offline-First Automation System for Operations",
    description: "Built to replace messy real-life financial tracking with a clean, automated system.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Manager-Pro",
    demo: {
      video: "v_manager_demo",
      description: "Tenant management, debt tracking engine, and automated SMS reminder system."
    },
    problem: "Manual tracking systems break at scale, cause missed payments, and create chaos in records for small-scale operations.",
    insight: "Operations don't always need heavy infra; they need smart logic, local-first reliability, and automation hooks that work in real-world scenarios.",
    system: {
      sections: [
        "Core Modules: PG Management & Debt Ledger",
        "Data Layer: Supabase cloud sync with Offline-first PWA fallback",
        "Execution Layer: Android SMS Gateway integration for automated dispatch"
      ],
      stack: ["React + Vite", "Tailwind CSS", "Supabase", "PWA Architecture"]
    },
    workflow: [
      "Event Trigger: Rent Due or Debt Update detected",
      "Queue System: Dispatch task to PENDING/SENT queue",
      "Execution: SMS Gateway dispatches reminder via Android hook",
      "Logging: Record transaction and result for audit"
    ],
    agents: [
      { role: "Finance Agent", description: "Monitors debt cycles and payment schedules." },
      { role: "Dispatch Agent", description: "Manages the queue for real-world SMS notifications." }
    ],
    features: [
      "Real-time rent status (PAID / OVERDUE / UPCOMING)",
      "Dynamic debt calculation engine",
      "One-click rent updates",
      "Smart reminder scheduling",
      "Lifecycle tracking for tenants"
    ],
    impact: "Eliminated manual tracking by turning a personal problem into a scalable, self-contained operational system.",
    gallery: [
      "/dist/images/projects/manager-pro/mp1.jpeg",
      "/dist/images/projects/manager-pro/mp2.jpeg",
      "/dist/images/projects/manager-pro/mp3.jpeg"
    ]
  },
  "automated-youtuber": {
    slug: "automated-youtuber",
    title: "Automated YouTuber",
    tagline: "End-to-End AI Content Generation Pipeline",
    description: "A fully autonomous system that turns ideas into published YouTube videos.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Automated-YouTuber",
    demo: {
      video: "v_youtube_demo",
      description: "Multi-channel publishing, real-time pipeline logs, and automated scheduling."
    },
    problem: "Content creation doesn't scale; writing, editing, and uploading are time-consuming and repetitive tasks.",
    insight: "Content creation is a pipeline problem, not a creative limitation. Automation can handle the repetitive 'work' while maintaining output quality.",
    system: {
      sections: [
        "Content Engine: AI Script & Voiceover (TTS) generation",
        "Video Engine: Python-based renderer for visuals + captions",
        "Distribution Engine: YouTube API for metadata & scheduling"
      ],
      stack: ["Python", "Streamlit", "Pandas", "YouTube API", "FFmpeg"]
    },
    workflow: [
      "Select idea from trending topics or idea list",
      "Generate structured script and high-quality voiceover",
      "Render video with automated b-roll and subtitles",
      "Upload and optimize metadata for publishing"
    ],
    agents: [
      { role: "Idea Agent", description: "Generates content topics based on trends." },
      { role: "Script Agent", description: "Writes structured scripts with engagement hooks." },
      { role: "Media Agent", description: "Generates voice, visuals, and manages rendering." },
      { role: "Publishing Agent", description: "Handles API uploads and SEO metadata." }
    ],
    features: [
      "Multi-channel automation",
      "Bulk upload capability",
      "Smart scheduling system",
      "Centralized dashboard control"
    ],
    impact: "6 channels automated with zero manual publishing, demonstrating a scalable production-level architecture.",
    gallery: [
      "/dist/images/projects/automated-youtuber/y1.jpeg",
      "/dist/images/projects/automated-youtuber/y2.jpeg",
      "/dist/images/projects/automated-youtuber/y3.jpeg",
      "/dist/images/projects/automated-youtuber/y4.jpeg"
    ]
  },
  "trading-bot-dashboard": {
    slug: "trading-bot-dashboard",
    title: "Trading Bot + Dashboard",
    tagline: "Real-Time Trading System with CLI + Visual Terminal",
    description: "A full-stack trading interface combining high-speed execution with interactive analytics.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Trading-Bot",
    demo: {
      video: "v_trading_demo",
      description: "Real-time price tracking, interactive charts, and one-click execution."
    },
    problem: "Trading tools are often either too complex for quick action or too limited for deep analysis.",
    insight: "Traders need fast execution pipelines combined with high-fidelity visualization for direct control under pressure.",
    system: {
      sections: [
        "Execution Layer: CLI supporting MARKET/LIMIT/STOP orders",
        "Data Layer: Binance Futures API with real-time feeds",
        "Visualization Layer: Streamlit dashboard with Plotly charts"
      ],
      stack: ["Python", "Streamlit", "Plotly", "Binance API", "Pandas"]
    },
    workflow: [
      "Receive user action or signal trigger",
      "Validate balance and order constraints",
      "Dispatch API request to exchange execution layer",
      "Log transaction and refresh real-time dashboard"
    ],
    features: [
      "Real-time ticker system",
      "Interactive candlestick charts",
      "Portfolio tracking",
      "Order management system",
      "Auto-refreshing dashboard"
    ],
    impact: "Dual interface system with production-level logging for real-time financial data handling."
  },
  "jarvis-voice-assistant": {
    slug: "jarvis-voice-assistant",
    title: "Jarvis Voice Assistant",
    tagline: "Conversational AI Interface with Real-Time Agent Execution",
    description: "A futuristic voice interface that turns natural speech into executable AI workflows.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Jarvis-AI",
    demo: {
      video: "https://drive.google.com/file/d/1m6VfPwz6clizpbY6iArVa5w6Ync2UUhK/view",
      description: "Real-time voice interaction with visual feedback orb reacting to system state (Listening → Thinking → Speaking)."
    },
    problem: "Most AI assistants feel static, lack visual feedback, and don't connect to real-world automation systems.",
    insight: "Voice + AI becomes powerful only when it can trigger real systems, not just respond with text.",
    system: {
      sections: [
        "Input Layer: Web Speech API for Voice-to-Text",
        "Processing Layer: Multi-threaded Axios hooks to webhooks",
        "Automation Layer: n8n workflow for complex logic processing",
        "Visual Layer: WebGL-powered Orb (OGL) reflecting system state"
      ],
      stack: ["React", "n8n", "Framer Motion", "OGL (WebGL)", "Axios"]
    },
    workflow: [
      "Voice Input detected via Web Speech API",
      "Convert Speech to Text and dispatch to n8n webhook",
      "AI Agent processes input and determines execution path",
      "Process results and return JSON for UI + Speech Synthesis",
      "Update Orb state visually (Listening/Thinking/Speaking)"
    ],
    agents: [
      { role: "Listener Agent", description: "Monitors and transcribes voice commands in real-time." },
      { role: "Decision Agent", description: "Determines which automation workflow to trigger." },
      { role: "Execution Agent", description: "Handles API calls and system-level task execution." }
    ],
    features: [
      "Real-time voice-to-workflow execution",
      "WebGL-powered visual state indicator",
      "State-based color transitions (Listening/Thinking/Speaking)",
      "Multi-agent automation backend"
    ],
    impact: "A voice-controlled execution interface for AI systems, not just a UI."
  },
  "aura-wardrobe-assistant": {
    slug: "aura-wardrobe-assistant",
    title: "AURA: AI Styling Protocol",
    tagline: "Personalized Wardrobe Intelligence System",
    description: "Converts a user's wardrobe into a structured dataset and generates AI-driven outfits.",
    githubUrl: "https://github.com/nandinikhandelwal120603/AURA",
    demo: {
      video: "v_aura_demo",
      description: "Upload clothing images, segment items automatically, and generate personalized style rules."
    },
    problem: "People often don't utilize their wardrobes fully and struggle with daily styling decisions based on context.",
    insight: "Clothing can be treated as structured data + visual attributes, turning styling into a computation problem.",
    system: {
      sections: [
        "Input Layer: Batch image uploads and segmentation",
        "Vision Layer: AI-driven extraction of color, fabric, and style",
        "Context Layer: Integration with body type profiles and weather APIs",
        "Styling Engine: Prompt-injected AI synthesis for recommendations"
      ],
      stack: ["Next.js", "Supabase", "Gemini Vision", "TensorFlow.js"]
    },
    workflow: [
      "Upload clothing batch via mobile/web UI",
      "Perform vision analysis to extract metadata",
      "Store structured attributes in persistent Supabase layer",
      "Synthesize recommendations via context-aware AI engine",
      "Display curated outfits and save to Digital Lookbook"
    ],
    agents: [
      { role: "Vision Agent", description: "Segments and extracts metadata from clothing images." },
      { role: "Style Agent", description: "Computes outfit combinations based on weather and body type." },
      { role: "Data Agent", description: "Manages the structured wardrobe dataset and lookbook history." }
    ],
    features: [
      "AI Wardrobe digitization engine",
      "Personalized styling synthesis",
      "Weather-aware outfit recommendations",
      "Digital Lookbook for long-term style tracking"
    ],
    impact: "Transformed fashion into a data + AI optimization system."
  },
  "linkedin-lead-engine": {
    slug: "linkedin-lead-engine",
    title: "LinkedIn Buyer Lead Engine",
    tagline: "AI-Powered Lead Discovery & Qualification System",
    description: "Finds real buyers from LinkedIn automatically using search + AI filtering.",
    githubUrl: "https://github.com/nandinikhandelwal120603/LinkedIn-Lead-Engine",
    demo: {
      video: "v_linkedin_demo",
      description: "Leads auto-populating in Google Sheets with AI summaries of requirements."
    },
    problem: "Manual lead generation is time-consuming, noisy, and highly inefficient at scale.",
    insight: "Instead of raw scraping, use search + AI filtering to create a clean, high-intent lead pipeline.",
    system: {
      sections: [
        "Discovery Layer: Google Custom Search API integration",
        "Filtering Layer: Keyword-based pre-filtering",
        "Qualification Layer: AI-based Buyer vs Seller classification",
        "Storage Layer: Automated Google Sheets populating"
      ],
      stack: ["n8n", "OpenAI API", "Google Search API", "Google Sheets"]
    },
    workflow: [
      "Trigger search on LinkedIn/Google for intent keywords",
      "Extract profile data and intent signals",
      "Filter out noise via automated keyword matching",
      "Classify leads via AI Qualification Agent",
      "Summarize requirements and push to lead ledger"
    ],
    agents: [
      { role: "Discovery Agent", description: "Scans platforms for high-intent signals and potential leads." },
      { role: "Qualification Agent", description: "Classifies leads and summarizes buyer requirements." }
    ],
    features: [
      "Autonomous lead discovery",
      "AI-driven buyer qualification",
      "Daily automated lead delivery",
      "Structured intent summaries"
    ],
    impact: "A lead intelligence system that replaces manual scraping with autonomous discovery."
  },
  "marketing-report-engine": {
    slug: "marketing-report-engine",
    title: "Automated Marketing Report Engine",
    tagline: "AI-Powered Weekly Performance Intelligence System",
    description: "Eliminates manual reporting by turning raw marketing data into executive-ready insights—automatically.",
    githubUrl: "https://github.com/nandinikhandelwal120603/Marketing-Report-Engine",
    demo: {
      video: "v_marketing_demo",
      description: "Weekly report auto-delivered via Email with real-time Telegram summaries and AI-generated executive insights."
    },
    problem: "Marketing teams waste hours switching between GA4, Google Ads, and Meta Ads, manually comparing metrics and writing repetitive reports.",
    insight: "Reporting is not analysis—it's a pipeline problem. By automating collection, comparison, and insight generation, we eliminate 90% of the manual effort.",
    system: {
      sections: [
        "Trigger Layer: Scheduled CRON workflows (Monday 7:00 AM)",
        "Aggregation Layer: GA4, Google Ads, and Meta Ads API integration",
        "Processing Layer: JavaScript comparison logic for WoW/YoY normalization",
        "Delivery Layer: HTML Email dispatch & Telegram Bot summaries"
      ],
      stack: ["n8n", "OpenAI / LLM APIs", "GA4 API", "Meta Ads API", "Telegram Bot API"]
    },
    workflow: [
      "Trigger scheduled weekly fetch of platform-wise metrics",
      "Normalize raw JSON data into structured comparative objects",
      "Inject performance data into LLM context for insight generation",
      "Format executive summary into high-fidelity HTML templates",
      "Dispatch multi-channel reports via Email and Telegram"
    ],
    agents: [
      { role: "Aggregation Agent", description: "Orchestrates API calls to GA4, Google Ads, and Meta Ads per domain." },
      { role: "Insight Agent", description: "Processes structured data to generate human-readable narratives." },
      { role: "Log Agent", description: "Tracks success/failure states across the reporting pipeline." }
    ],
    features: [
      "Multi-platform data aggregation",
      "Year-over-Year comparison logic",
      "AI-generated executive summaries",
      "Multi-channel delivery (Email + Telegram)",
      "Business-ready modular design"
    ],
    impact: "A self-operating intelligence system that provides consistent, error-free reporting at scale."
  }
};
