export const portfolioData = {
  developer: {
    name: "Ayaz Khan",
    firstName: "Ayaz",
    role: "MERN Developer",
    subRole: "Python & AI Tools • WordPress • Data Analytics",
    availability: "Available for freelance & full-time roles",
    bio: "Passionate about engineering scalable full-stack applications, intelligent AI workflows, and data-driven digital solutions.",
    location: "India & Working Globally",
    experienceYears: "4+",
    shippedProjects: "11+",
    satisfactionRate: "99.4%",
    databaseRecords: "10M+",
    email: "ayazkhan.dev@gmail.com",
    phone: "+91 6392151138",
    whatsapp: "https://wa.me/916392151138?text=Hi%20Ayaz,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!",
    github: "https://github.com/khanayaz625",
    linkedin: "https://www.linkedin.com/in/ayaz-khan-6545b222b/",
    instagram: "https://www.instagram.com/__a.y.a.z___/"
  },
  skills: [
    { name: "MERN Stack", x: -25, y: -40 },
    { name: "Python & AI Tools", x: 30, y: -45 },
    { name: "React & Next.js", x: -38, y: 10 },
    { name: "Node.js & Express", x: 35, y: 15 },
    { name: "WordPress / CMS", x: -20, y: 55 },
    { name: "Data Analytics", x: 28, y: 50 }
  ],
  techStack: {
    mern: [
      { name: "MongoDB", icon: "🍃", level: "Advanced", desc: "Aggregations, indexing, Mongoose schemas, Atlas" },
      { name: "Express.js", icon: "⚡", level: "Advanced", desc: "RESTful APIs, middleware, authentication, rate-limiting" },
      { name: "React.js", icon: "⚛️", level: "Expert", desc: "Hooks, Context, Redux Toolkit, performance optimization" },
      { name: "Node.js", icon: "🟢", level: "Advanced", desc: "Event loop, asynchronous architecture, microservices" },
      { name: "Next.js", icon: "▲", level: "Proficient", desc: "SSR, SSG, Server Actions, App Router" },
      { name: "TailwindCSS", icon: "🎨", level: "Expert", desc: "Responsive utility styling, custom themes, animations" }
    ],
    aiAndPython: [
      { name: "Python 3", icon: "🐍", level: "Advanced", desc: "Object-oriented scripting, backend logic, data processing" },
      { name: "LangChain / LlamaIndex", icon: "🦜", level: "Proficient", desc: "RAG architectures, prompt chains, document Q&A" },
      { name: "OpenAI & Gemini APIs", icon: "🤖", level: "Advanced", desc: "Tool-calling agents, function calling, fine-tuning" },
      { name: "FastAPI", icon: "⚡", level: "Advanced", desc: "Asynchronous high-throughput ML/AI serving endpoints" },
      { name: "Vector Databases", icon: "🔍", level: "Proficient", desc: "ChromaDB, Pinecone, semantic similarity search" }
    ],
    wordpress: [
      { name: "Custom WordPress", icon: "🌐", level: "Expert", desc: "Custom themes, child themes, PHP templates, hooks" },
      { name: "Headless WordPress", icon: "🔗", level: "Advanced", desc: "WP REST API / GraphQL + Next.js frontend" },
      { name: "WooCommerce", icon: "🛒", level: "Advanced", desc: "Payment gateways, customized checkout, inventory sync" },
      { name: "Speed & SEO Optimization", icon: "🚀", level: "Expert", desc: "Core Web Vitals, caching, CDN, database cleanup" }
    ],
    dataAnalytics: [
      { name: "Pandas & NumPy", icon: "📊", level: "Advanced", desc: "Data cleaning, transformation, statistical analysis" },
      { name: "SQL & PostgreSQL", icon: "🗄️", level: "Advanced", desc: "Complex joins, window functions, query optimization" },
      { name: "Matplotlib & Seaborn", icon: "📈", level: "Proficient", desc: "Visual storytelling, exploratory data analysis" },
      { name: "Power BI & Excel", icon: "📉", level: "Proficient", desc: "Interactive dashboards, business intelligence reporting" }
    ]
  },
  processSteps: [
    {
      step: "01",
      title: "Architecture & Discovery",
      description: "Thoroughly planning technical requirements, data schemas, API contracts, and selecting the optimal technology stack.",
      deliverables: ["Database Schema Design", "REST/GraphQL API Spec", "System Architecture Plan"]
    },
    {
      step: "02",
      title: "Full-Stack Development & AI",
      description: "Writing clean, modular, and maintainable code with modern MERN architecture, AI agent pipelines, and responsive interfaces.",
      deliverables: ["Modular React Components", "Secure Express/Node Endpoints", "AI LLM Integrations"]
    },
    {
      step: "03",
      title: "QA, Analytics & Deployment",
      description: "Stress testing, SEO optimization, continuous deployment (CI/CD), and integrating real-time telemetry and data analytics.",
      deliverables: ["Cloud Deployment (Vercel/AWS)", "Performance 95+ Lighthouse", "Post-Launch Monitoring"]
    }
  ],
  projects: [
    {
      id: "finpulse-mern",
      title: "FinPulse Analytics SaaS",
      category: "MERN Stack",
      tags: ["React.js", "Node.js", "MongoDB", "Express", "TailwindCSS"],
      image: "/assets/project_fintech.jpg",
      year: "2025",
      summary: "Full-stack enterprise financial analytics platform featuring real-time liquidity tracking, multi-account syncing, and predictive cash flow charts.",
      challenge: "Finance teams needed a unified, lightning-fast dashboard that could aggregate millions of raw transaction records with sub-second latency.",
      solution: "Engineered a high-performance MERN application utilizing MongoDB aggregation pipelines, Redis caching layer, and reactive React dashboard widgets.",
      impact: "+48.4% daily user engagement, processed $40M+ in simulated transaction volume, 99.98% uptime.",
      metrics: [
        { label: "Daily Active Users", value: "12.4K" },
        { label: "Query Speedup", value: "3.4x" },
        { label: "API Response Time", value: "48ms" }
      ],
      role: "Lead Full-Stack Developer",
      timeline: "3 Months"
    },
    {
      id: "omniagent-ai",
      title: "Aether AI & Health Suite",
      category: "Python & AI",
      tags: ["Python", "FastAPI", "OpenAI API", "LangChain", "React"],
      image: "/assets/project_mobile.jpg",
      year: "2025",
      summary: "Intelligent health companion combining Python-powered NLP agents with intuitive mobile-responsive interfaces for personalized lifestyle insights.",
      challenge: "Users were overwhelmed by generic health advice without contextual understanding of their daily habits and personal biomarkers.",
      solution: "Built an autonomous RAG agent pipeline with FastAPI and LangChain that synthesizes daily wellness logs and generates hyper-personalized action plans.",
      impact: "140K+ active downloads, featured in tech showcases, and praised for ultra-responsive AI latency.",
      metrics: [
        { label: "Active Mobile Users", value: "140K+" },
        { label: "Agent Precision", value: "97.6%" },
        { label: "Avg Latency", value: "320ms" }
      ],
      role: "AI & Full-Stack Engineer",
      timeline: "4 Months"
    },
    {
      id: "heavenly-wp-next",
      title: "Heavenly Real Estate Portal",
      category: "WordPress & CMS",
      tags: ["Headless WordPress", "Next.js", "WP REST API", "TailwindCSS"],
      image: "/assets/project_realestate.jpg",
      year: "2024",
      summary: "Architectural real estate portal engineered with Headless WordPress as a decoupled content management system paired with high-performance Next.js.",
      challenge: "Traditional monolithic WordPress sites suffered from slow page loads, bloated plugin overhead, and poor mobile Core Web Vitals.",
      solution: "Decoupled the CMS using Headless WordPress REST API, serving static pre-rendered Next.js pages with dynamic property filtering and instant search.",
      impact: "Lighthouse performance score boosted from 42 to 98/100, resulting in +210% organic search inquiry conversion.",
      metrics: [
        { label: "Lighthouse Score", value: "98/100" },
        { label: "Inquiry Conversion", value: "+210%" },
        { label: "Page Load Time", value: "0.8s" }
      ],
      role: "Full-Stack WordPress Developer",
      timeline: "2.5 Months"
    }
  ],
  codeSnippet: {
    filename: "ai_pipeline_controller.js",
    language: "javascript",
    code: `// Express.js + LangChain AI Agent Stream Controller
import { ChatOpenAI } from "@langchain/openai";
import { RetrievalQAChain } from "langchain/chains";
import { MongoDBAtlasVectorSearch } from "@langchain/community/vectorstores/mongodb_atlas";

export const streamAIAnalysis = async (req, res) => {
  const { userQuery, datasetId } = req.body;

  // Set streaming headers for low-latency response
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");

  try {
    const vectorStore = new MongoDBAtlasVectorSearch(embeddings, {
      collection: db.collection("analytics_vectors"),
      indexName: "vector_index"
    });

    const model = new ChatOpenAI({
      modelName: "gpt-4o-mini",
      temperature: 0.2,
      streaming: true
    });

    // Execute semantic retrieval + streaming agent
    const chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());
    await chain.call({ query: userQuery }, [
      { handleLLMNewToken: (token) => res.write(\`data: \${token}\\n\\n\`) }
    ]);

    res.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};`
  },
  testimonials: [
    {
      quote: "Ayaz built our complete MERN stack MVP in record time. His deep grasp of Node.js backend architecture and responsive React interfaces made the entire launch effortless.",
      author: "Daniel Reid",
      role: "Founder & CEO",
      company: "FocalPoint Tech",
      avatarIndex: 0
    },
    {
      quote: "Ayaz integrated a custom Python AI agent into our platform that automated hours of manual client data analysis. Extremely skilled, reliable, and communicative.",
      author: "Sarah Nguyen",
      role: "Product Lead",
      company: "FinPulse Labs",
      avatarIndex: 1
    },
    {
      quote: "Our WordPress portal was slow and bloated. Ayaz transformed it into a headless architecture that loads in under a second and boosted our leads by over 200%.",
      author: "Marcus Vance",
      role: "Managing Director",
      company: "Aeterna Real Estate",
      avatarIndex: 2
    },
    {
      quote: "The combination of full-stack MERN proficiency with practical Python data analytics makes Ayaz an exceptional engineering asset for any modern web team.",
      author: "Elena Rostova",
      role: "CTO & Co-Founder",
      company: "AlphaMetrics",
      avatarIndex: 3
    }
  ],
  experience: [
    {
      id: "digicoders-kanpur",
      role: "Training Head",
      company: "DigiCoders Technologies",
      location: "Kanpur, India",
      type: "Full-Time",
      workMode: "In-Office / On-Site",
      period: "Present",
      status: "Currently Working",
      icon: "🎓",
      accentColor: "#C5FA35",
      description: "Leading tech curriculum architecture and software engineering training. Mentoring developers and aspiring engineers across full-stack MERN development, Python programming, database schemas, and enterprise software deployment.",
      responsibilities: [
        "Heading full-stack web development curricula covering MongoDB, Express.js, React.js, and Node.js.",
        "Mentoring and training 500+ student engineers on clean architecture, design patterns, and Git collaboration.",
        "Delivering advanced workshops in Python scripting, API design, and asynchronous server-side workflows.",
        "Supervising capstone industry-grade applications and evaluating code quality through structured peer reviews."
      ],
      skills: ["MERN Stack", "React.js", "Node.js", "Python", "Technical Training & Leadership"]
    },
    {
      id: "zakara-international",
      role: "WordPress Manager",
      company: "Zakara International Company",
      location: "Kanpur, India",
      type: "Remote",
      workMode: "Work From Home (WFH)",
      period: "Present",
      status: "Currently Working",
      icon: "🌐",
      accentColor: "#25D366",
      description: "Overseeing and managing end-to-end WordPress web infrastructure in a dedicated remote Work From Home capacity. Managing eCommerce operations, custom PHP themes, plugin customizations, and performance optimization.",
      responsibilities: [
        "Managing enterprise WordPress & WooCommerce online portal with 99.9% uptime and reliable performance.",
        "Custom theme engineering, template hierarchy modifications, and bespoke PHP/MySQL customizations.",
        "Boosting Core Web Vitals, speed caching strategies, CDN assets, and mobile responsive execution.",
        "Handling security auditing, database tuning, automated disaster recovery backups, and payment gateway health."
      ],
      skills: ["WordPress Management", "WooCommerce", "PHP Customization", "Speed & Core Web Vitals", "Remote WFH Execution"]
    }
  ]
};
