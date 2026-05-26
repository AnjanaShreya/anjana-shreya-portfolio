import { Project, Service, Internship, Insight, ProcessStep } from "./types";
import cert1 from "./assets/cert 1.png";
import cert2 from "./assets/cert-2.png";
import cert3 from "./assets/cert-3.png";
import proj1 from "./assets/proj1.png";
import proj2 from "./assets/proj2.png";
import proj3 from "./assets/proj3.png";
import proj4 from "./assets/proj4.png";
import proj5 from "./assets/proj5.png";


export const PROJECTS: Project[] = [
  {
    id: "interactive-globe",
    title: "WebGL Geographic Data Engine",
    category: "WebGL / Three.js",
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1200&auto=format&fit=crop",
    client: "Aether Solutions",
    year: "2025",
    description: "A fun and quirky interactive 3D globe visualization supporting high-speed geographical telemetry queries, customized shader overlays, and realistic depth models.",
    tags: ["Three.js", "React Three Fiber", "WebGL", "Tailwind CSS"],
    demoUrl: "#"
  },
  {
    id: "audio-synthesizer",
    title: "Web Audio Synthesizer Interface",
    category: "Sound API / UI Motion",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1200&auto=format&fit=crop",
    client: "KINETIX Technical",
    year: "2026",
    description: "Sleek synthesizer control panel utilizing the Web Audio API with customizable wave generators, tactile knobs, and a real-time reactive canvas equalizer.",
    tags: ["Web Audio API", "Framer Motion", "Canvas API", "JetBrains Mono"],
    demoUrl: "#"
  },
  {
    id: "analytics-builder",
    title: "D3 High-Contrast Dashboard",
    category: "D3 / Data Visuals",
    image: "https://images.unsplash.com/photo-1473116763269-255415695f6b?q=80&w=1200&auto=format&fit=crop",
    client: "Sands Estate Corp",
    year: "2025",
    description: "Responsive dashboard environment utilizing black and white fine-art aesthetics, rendering high-speed telemetry lines, scatter plots, and interactive tooltips.",
    tags: ["D3.js", "TypeScript", "Recharts", "SVG Grids"],
    demoUrl: "#"
  },
  {
    id: "terminal-shell",
    title: "React Terminal Sandbox",
    category: "DevTools / System Visuals",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    client: "Fluidic Sound",
    year: "2026",
    description: "A functional, lightning-fast in-browser terminal interpreter supporting mock command scripts, visual performance logs, and responsive layout styling.",
    tags: ["TypeScript", "Terminal Parsing", "Performance Profiling", "Figma Design"],
    demoUrl: "#"
  }
];

export const SERVICES: Service[] = [
  {
    id: "serv-brand",
    num: "01",
    title: "Component Systems & State",
    description: "Architecting decoupled, highly reusable component APIs with strict type definitions and optimal React state flow.",
    details: ["React Hooks & Memoization Structures", "Custom Context State Management", "Tailwind CSS Design Systems", "High-Speed Modular Forms"]
  },
  {
    id: "serv-creative",
    num: "02",
    title: "Fluid Motion & Interaction",
    description: "Bringing flat interfaces to life using physics-based transitions, interactive gestural handlers, and keyframe sequences.",
    details: ["Framer Motion Layout Animations", "Micro-Interactions & Hover Dynamics", "Bezier Curve Custom Transitions", "GSAP Scroll Integrations"]
  },
  {
    id: "serv-interactive",
    num: "03",
    title: "D3 & WebGL Data Rendering",
    description: "Transforming vast dynamic data lists into crisp, high-impact vector graphics, custom responsive charts, and 3D scenes.",
    details: ["D3.js Custom SVG Renderers", "Three.js React-Three-Fiber Integrations", "Interactive WebGL Shaders", "Performance Grid Visualizers"]
  },
  {
    id: "serv-dev",
    num: "04",
    title: "Performance & CI Auditing",
    description: "Optimizing bundle sizes, minimizing layout thrashing, and ensuring maximum frame rate consistency for low-end mobile systems.",
    details: ["Tree Shaking & Lazy Importing", "Bundle Analyser Profiling", "Lighthouse & SEO Best Practices", "Cross-Browser Layout Calibration"]
  }
];

export const INTERNSHIPS: Internship[] = [
  {
    id: "hivel-fulltim",
    num: "01",
    company: "Hivel",
    role: "Frontend Developer",
    duration: "Jun 2025 - Mar 2026",
    details: [
      "Built real-time, data-driven dashboards handling dynamic and streaming data in production environments using Material Icons.",
      "Implemented efficient state management using Redux Toolkit (RTK Query) for scalable application flows.",
      "Integrated GraphQL APIs, REST APIs, and WebSockets for real-time data synchronization.",
      "Designed and optimized interactive data visualizations for performance and usability.",
      "Wrote and maintained test cases to ensure application reliability and stability.",
      "Debugged and resolved complex issues in production systems.",
      "Contributed to complex, real-time interactive features including chatbot workflows and configuration-driven systems impacting overall application behavior."
    ],
    tags: ["React", "TypeScript", "NodeJS", "SCSS", "Redux Toolkit", "RTK Query", "GraphQL", "WebSockets", "Material UI", "HighCharts", "Rsuite", "Jest and RTL"]
  },
  {
    id: "intern-edgeforce-sem",
    num: "02",
    company: "Edgeforce Solutions",
    role: "Frontend Developer Intern",
    duration: "Jan 2025 - May 2025",
    details: [
      "Built responsive and high-performance frontend applications using React, focusing on usability and smooth user experience.",
      "Developed and visualized real-time sensor data systems, processing live data from AWS-based systems.",
      "Implemented data processing and event-detection logic for wearable-based tracking systems (timing, activity detection, user-device mapping).",
      "Integrated frontend with backend services using REST APIs, with exposure to Node.js, MongoDB, and AWS serverless (Lambda, DynamoDB, S3)."
    ],
    tags: ["React", "ViteJS", "NodeJS", "MongoDB", "AWS Serverless", "REST APIs", "AWS S3"]
  },
  {
    id: "intern-edgeforce",
    num: "03",
    company: "Edgeforce Solutions",
    role: "Frontend Developer Intern",
    duration: "Jun 2024 - Sept 2024",
    details: [
      "Engineered dynamic analytics dashboards and robust administrator interfaces to manage sensor telemetry data, facilitating real-time tracking, retrieval, and trend analysis.",
      "Developed a comprehensive military vehicle management and fleet status system featuring component-level lifespan, manufacturing date, and usage condition analysis.",
      "Designed and implemented intelligent, priority-based automated alert systems to trigger immediate notifications for critical repairs, maintenance schedules, and fuel replenishment.",
      "Built secure operational modules allowing administrators to seamlessly register new fleet units and log inspection details, maintenance logs, and parts replacement records."
    ],
    tags: ["React", "TypeScript", "ViteJS", "Recharts", "Tailwind CSS", "REST APIs", "Dynamic Dashboards"]
  }
];

export const INSIGHTS: Insight[] = [
  {
    id: "ins-workshop",
    title: "Internshala Web Developer",
    image: cert1
  },
  {
    id: "ins-future",
    title: "Aviatrix Multicloud Network",
    image: cert3
  },
  {
    id: "ins-create",
    title: "Mathworks Onramp",
    image: cert2
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "proj-blog",
    num: "01",
    title: "BlogPage Website",
    description: "A full-stack publishing and editorial workflow platform where users can submit articles, receive feedback, revise content, and publish through a structured admin moderation system. Features include JWT authentication, review workflows, email notifications, categorized content management, protected admin dashboards, and a fully responsive modern UI.",
    details: ["React", "TypeScript", "SCSS", "NodeJs", "MongoDB"],
    image: proj1,
  },
  {
    id: "proj-employee",
    num: "02",
    title: "Employee Management and Monitering Portal",
    description: "Developed an employee monitoring website which aims to provide a centralized platform to small organizations which saves time and provides user friendly approach",
    details: ["NodeJS", "MongoDB", "ReactJS", "TypeScript", "REST APIs"],
    image: proj3,
  },
  {
    id: "proj-chatbot",
    num: "03",
    title: "Chatbot",
    description: "Designed and implemented a user friendly chatbot interface with a sleek, responsive layout, enhancing user interaction and engagement.",
    details: ["React", "JavaScript", "REST APIs"],
    image: proj2,
  },
  {
    id: "proj-personal",
    num: "04",
    title: "Personalized Website",
    description: "Developed a personal website for a professor which showcases the professor's research work and provides information about their academic background. It also includes the couses, course structure and the course materials taught by the professor.",
    details: ["HTML", "CSS", "JavaScript"],
    image: proj4,
    liveUrl: "https://anjanashreya.github.io/Personal-Website/"
  },
  {
    id: "proj-iks",
    num: "05",
    title: "Website for Organisation of Researched Information",
    description: "Developed a centralized website to organize and present all the information collected for the IKS project. The platform ensures structured data management and provides easy accessibility for users to explore resources.",
    details: ["HTML", "CSS", "JavaScript"],
    image: proj5,
    liveUrl: "https://anjanashreya.github.io/webpage-iks/"
  }
];

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/ch-s-anjana-shreya-68a74628a" },
  { name: "GitHub", url: "https://github.com/AnjanaShreya" },
  { name: "E-Mail", url: "mailto:chitturianjana@gmail.com"}
];

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details?: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    institution: "Computer Science & Engineering",
    period: "2021 - 2025",
    grade: "7.0 CGPA",
    details: [
      "Specialized in Software Engineering and Modern Web Architectures.",
      "Hands-on coursework in Data Structures, Algorithms and DBMS.",
    ]
  }
];

export const ACADEMIC_FOCUS = [
  {
    title: "Software Engineering & Architecture",
    desc: "Object-oriented design patterns, software testing, systems analysis, and modular application development."
  },
  {
    title: "Advanced Web Technologies",
    desc: "Full-stack development ecosystems, single-page application architectures, and client-side performance engineering."
  },
  {
    title: "Algorithmic Problem Solving",
    desc: "Analyzing algorithm complexities, optimizing runtime efficiency, and structured data structure design."
  }
];

export const COURSEWORK_TAGS = [
  "Data Structures",
  "Algorithms",
  "DBMS",
  "OOPs",
  "Software Eng.",
  "Web Technologies",
  "Computer Networks",
  "Operating Systems"
];
