import botManagementMockup from '../assets/images/bot_management_platform_mockup_1786485139815.jpg';
import trustPay24TestingMockup from '../assets/images/trustpay24_testing_dashboard_mockup_1786485401174.jpg';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'web' | 'mobile' | 'saas' | 'ecommerce' | 'dashboard';
  year: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  statusTag?: string;
  isCurrentProject?: boolean;
  client?: string;
  role?: string;
  metrics?: { label: string; value: string }[];
  accentColor?: string;
  problem?: string;
  solution?: string;
  botWorkflowSteps?: string[];
  dataPipelineInputs?: { current: string[]; future: string[] };
  developmentAreas?: { area: string; status: 'Active' | 'In Progress' | 'Planned' }[];
  liveProcessLogs?: { task: string; completed: boolean; current?: boolean }[];

  // QA & Testing fields for TrustPay24
  testingRoleContribution?: string;
  testingCoverageCategories?: { number: string; title: string; description: string }[];
  automationWorkflowSteps?: string[];
  apiTestingCoverage?: string[];
  uiTestingCoverage?: string[];
  intentTestingStates?: { title: string; flow: string; result: 'SUCCESS' | 'FAILED' }[];
  testingStrategyLayers?: string[];
  testingMatrix?: { category: string; label: string; status: string; passed: boolean }[];
  qaChallenges?: string;
  qaOutcome?: string;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  iconName: string;
  technologies: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  details: string[];
  iconName: string;
}

export interface Experience {
  number: string;
  role: string;
  company: string;
  description: string;
  period: string;
  current?: boolean;
  achievements?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  highlights: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  period: string;
  skillsLearned: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  avatar?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface PortfolioData {
  personal: {
    name: string;
    monogram: string;
    title: string;
    tagline: string;
    location: string;
    status: string;
    hourlyRate: string;
    badge: string;
    bio: string;
    mission: string;
    email: string;
    phone: string;
    cvUrl: string;
    portraitImage: string;
    workspaceImage: string;
    languages: string[];
    hobbies: string[];
  };
  stats: {
    projectsCount: string;
    clientSatisfaction: string;
    yearsExperience: string;
    commitsCount?: string;
    supportAvailability?: string;
  };
  socialLinks: {
    linkedin: string;
    github: string;
  };
  companies: {
    name: string;
    logoText: string;
  }[];
  skills: string[];
  skillCategories: SkillCategory[];
  projects: Project[];
  services: Service[];
  process: ProcessStep[];
  experience: Experience[];
  education: EducationItem[];
  certifications: CertificationItem[];
  testimonials: Testimonial[];
  faqs: { question: string; answer: string }[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Jay Gupta",
    monogram: "JG",
    title: "Full Stack Developer | Automation Engineer | API & QA Specialist",
    tagline: "Full Stack Developer\nAutomation Engineer\nAPI & QA Specialist",
    location: "Ahmedabad, Gujarat, India",
    status: "AVAILABLE FOR WORK",
    hourlyRate: "$35 - $50/HR",
    badge: "FULL STACK & AUTOMATION SPECIALIST",
    bio: "I build scalable web applications, automation solutions, payment systems, and intelligent software with modern technologies.",
    mission: "My mission is to architect high-performance full-stack applications, automated data processing engines, resilient payment integrations, and bulletproof QA pipelines using modern web and backend technologies.",
    email: "jayg3229@gmail.com",
    phone: "+91 9157569030",
    cvUrl: "#",
    portraitImage: "https://i.ibb.co/rRtckbWq/Whats-App-Image-2026-07-18-at-12-31-39-AM.jpg",
    workspaceImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    languages: ["English", "Hindi", "Gujarati"],
    hobbies: [
      "Algorithmic Trading & Bot Automation",
      "Playing Cricket & Football",
      "Chess Strategy & Logic Puzzles",
      "Exploring Cyber Tech & AI Innovations"
    ]
  },
  stats: {
    projectsCount: "10+",
    clientSatisfaction: "95%",
    yearsExperience: "4+",
    commitsCount: "100+",
    supportAvailability: "24/7"
  },
  socialLinks: {
    linkedin: "https://www.linkedin.com/public-profile/settings",
    github: "https://github.com/jaygupta32"
  },
  companies: [
    { name: "trust-pays24", logoText: "TRUST-PAYS24 (DUBAI)" },
    { name: "Cosmos Castle", logoText: "COSMOS CASTLE SCHOOL" },
    { name: "TOPS Technologies", logoText: "TOPS TECHNOLOGIES" },
    { name: "Alpha Engineering", logoText: "ALPHA ENG. COLLEGE" },
    { name: "Pristine InfoSolutions", logoText: "PRISTINE INFOSOLUTIONS" }
  ],
  skills: [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Material UI",
    "Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "GraphQL", "Socket.io",
    "Firebase", "AWS", "Vercel", "Netlify", "Cloudinary", "Docker",
    "Git", "GitHub", "VS Code", "Figma", "Postman", "Cypress", "ESLint", "Python", "FastAPI"
  ],
  skillCategories: [
    {
      category: "Frontend",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind", "Material UI"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express", "MongoDB", "MySQL", "REST APIs", "GraphQL", "Socket.io", "Python", "FastAPI"]
    },
    {
      category: "Cloud & Database",
      skills: ["Firebase", "AWS", "Vercel", "Netlify", "Cloudinary", "Docker"]
    },
    {
      category: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma", "Postman", "Cypress", "ESLint"]
    }
  ],
  projects: [
    {
      id: "project-flagship-bot",
      title: "Bot Management & Data Automation Platform",
      subtitle: "Windows-Based Bot Orchestration, Script Engine & Multi-Source Data Automation Engine",
      category: "dashboard",
      year: "2026",
      featured: true,
      statusTag: "CURRENTLY BUILDING",
      isCurrentProject: true,
      description: "Windows-based automation platform for managing bots, scripts, multi-format data processing, browser extension extraction, and real-time backend execution.",
      longDescription: "I’m currently developing a centralized bot management platform that allows users to configure which bot should run, which script it should execute, and which source or platform it should process. The system supports multiple data formats (PDF, CSV, TXT, XLSX), browser-extension-based data extraction, Windows application workflows, and real-time backend process monitoring.",
      image: botManagementMockup,
      technologies: ["WINDOWS", "AUTOMATION", "BOT MANAGEMENT", "BACKEND", "BROWSER EXTENSION", "PDF", "CSV", "XLSX", "DATA PROCESSING"],
      client: "Proprietary Automation Platform (In Build)",
      role: "Lead System Architect & Core Automation Engineer",
      accentColor: "#0A8FFF",
      metrics: [
        { label: "STATUS", value: "IN BUILD" },
        { label: "EXECUTION", value: "REAL-TIME" },
        { label: "FORMATS", value: "PDF/CSV/XLSX" }
      ],
      problem: "Managing multiple automation bots, scripts, data sources, and execution workflows can become difficult when everything is handled separately in disconnected tools. Without a unified control center, configuring script execution, handling diverse file formats, and managing browser-based extraction creates operational friction.",
      solution: "I’m building a centralized automation management platform where users can control bots, assign scripts, process different data sources, interact with browser-based extraction workflows, and monitor backend execution in real time from one intuitive operational interface.",
      botWorkflowSteps: ["BOT SELECTION", "SCRIPT ASSIGNMENT", "TARGET / SOURCE SELECTION", "DATA INGESTION", "BACKEND PROCESSING", "LIVE RESULT"],
      dataPipelineInputs: {
        current: ["PDF", "CSV", "TXT", "XLSX / Excel"],
        future: ["JSON", "XML", "API Endpoints"]
      },
      developmentAreas: [
        { area: "Bot Management Engine", status: "Active" },
        { area: "Script Management System", status: "Active" },
        { area: "Multi-Format Data Processing", status: "Active" },
        { area: "Windows Application Interface", status: "Active" },
        { area: "Browser Extension Integration", status: "Active" },
        { area: "Live Process Monitoring Console", status: "Active" }
      ],
      liveProcessLogs: [
        { task: "Bot initialized & environment verified", completed: true },
        { task: "Script configuration loaded (DataExtractor_v2.py)", completed: true },
        { task: "Input file detected (Financial_Report_Q3.pdf)", completed: true },
        { task: "PDF text & table structure parsed", completed: true },
        { task: "Data extracted & schema validated", completed: true },
        { task: "Processing records & executing bot tasks...", completed: false, current: true },
        { task: "Sending formatted output to backend storage", completed: false },
        { task: "Execution completed successfully", completed: false }
      ]
    },
    {
      id: "project-01",
      title: "TrustPay24 Payment Gateway",
      subtitle: "Payment Gateway Testing & Automation",
      category: "saas",
      year: "2026",
      featured: true,
      description: "Worked on TrustPay24 as an API, UI, Automation, and Intent Tester, covering payment workflows, API validation, UI testing, automated regression scenarios, and end-to-end testing.",
      longDescription: "TrustPay24 is a payment gateway platform where I worked extensively on testing the platform and its payment-related workflows. My work covered multiple layers of the application including API testing, UI testing, full automation testing, payment workflow testing, intent testing, regression testing, functional testing, integration testing, and end-to-end testing.",
      image: trustPay24TestingMockup,
      technologies: ["API TESTING", "UI TESTING", "AUTOMATION", "INTENT TESTING", "E2E TESTING"],
      client: "TrustPay24 Payment Platform",
      role: "API, UI, Automation & Intent Tester",
      accentColor: "#0A8FFF",
      metrics: [
        { label: "TEST COVERAGE", value: "FULL LAYERED" },
        { label: "AUTOMATION", value: "EXTENSIVE" },
        { label: "VALIDATION", value: "E2E + INTENT" }
      ],
      testingRoleContribution: "I worked on TrustPay24 as an API, UI, Automation, and Intent Tester, covering multiple layers of the payment platform. My work included API validation, UI testing, automated test development, payment-flow validation, regression testing, and end-to-end workflow testing. My engineering responsibility was focused strictly on quality assurance, test automation, API validation, UI validation, and intent/workflow testing across the platform.",
      testingCoverageCategories: [
        {
          number: "01",
          title: "API TESTING",
          description: "Test and validate payment gateway APIs, request/response behavior, status codes, payloads, error handling, authentication, and integration workflows."
        },
        {
          number: "02",
          title: "UI TESTING",
          description: "Validate the user-facing payment interfaces, forms, payment flows, validation behavior, error states, and overall functionality."
        },
        {
          number: "03",
          title: "AUTOMATION TESTING",
          description: "Develop and execute automated test scenarios to reduce repetitive manual testing and improve regression coverage."
        },
        {
          number: "04",
          title: "INTENT TESTING",
          description: "Test different payment intents and associated workflows to ensure that the expected behavior occurs across different payment scenarios."
        },
        {
          number: "05",
          title: "END-TO-END TESTING",
          description: "Validate complete workflows from the initial user interaction through API/backend processing and the final expected result."
        },
        {
          number: "06",
          title: "REGRESSION TESTING",
          description: "Run automated and manual regression scenarios after changes to ensure existing payment functionality continues to work correctly."
        }
      ],
      automationWorkflowSteps: [
        "TEST SCENARIO",
        "AUTOMATED TEST",
        "API / UI INTERACTION",
        "VALIDATION",
        "ASSERTIONS",
        "TEST RESULT",
        "REPORT"
      ],
      apiTestingCoverage: [
        "Request payload structure & parameter schema validation",
        "Response validation & HTTP status codes (200 OK, 400 Bad Request, 401 Unauthorized, 422 Unprocessable, 500 Internal)",
        "JSON/XML payload structure, key type checking & required fields",
        "Error response handling & localized failure message formatting",
        "Authentication & authorization token headers (Bearer/API key validation)",
        "Positive, negative, and edge-case boundary testing scenarios",
        "Payment workflow execution & webhook payload callback verification",
        "Third-party payment provider API integration verification"
      ],
      uiTestingCoverage: [
        "User-facing payment forms, credit card fields, and checkout UI elements",
        "Real-time client-side input validation, field formatting, and masking",
        "Error toast notifications, field highlight states, and recovery guidance",
        "Success state verification & instant digital receipt rendering",
        "Navigation flows, multi-step checkout modals, and browser back-button behavior",
        "Cross-browser payment layout fidelity and responsive touch target sizing"
      ],
      intentTestingStates: [
        {
          title: "SUCCESSFUL PAYMENT INTENT FLOW",
          flow: "CREATED → PROCESSING → SUCCESS",
          result: "SUCCESS"
        },
        {
          title: "FAILED / DECLINED PAYMENT INTENT FLOW",
          flow: "CREATED → PROCESSING → FAILED",
          result: "FAILED"
        }
      ],
      testingStrategyLayers: [
        "API LAYER",
        "UI LAYER",
        "INTENT LAYER",
        "AUTOMATION PIPELINE",
        "E2E INTEGRATION",
        "REGRESSION ENGINE",
        "RESULT VALIDATION"
      ],
      testingMatrix: [
        { category: "API TESTS", label: "Request/Response & Status Codes", status: "PASSED", passed: true },
        { category: "UI TESTS", label: "Payment Forms & Error Handling", status: "PASSED", passed: true },
        { category: "AUTOMATION", label: "Automated Suite & Regression Pipeline", status: "COVERED", passed: true },
        { category: "INTENT TESTS", label: "Created → Processing → Success/Failed", status: "PASSED", passed: true },
        { category: "E2E TESTS", label: "Full Interaction to Backend Verification", status: "PASSED", passed: true },
        { category: "REGRESSION", label: "Continuous Scenario Execution Engine", status: "ACTIVE", passed: true }
      ],
      qaChallenges: "Validating complex asynchronous payment state transitions, handling mock payment provider sandbox responses, and preventing false-positive test flakiness across multi-browser automated UI regression scripts.",
      qaOutcome: "Established a robust, multi-layered quality assurance framework that verified API endpoints, payment interface integrity, intent state transitions, and automated regression suites—ensuring bulletproof payment processing."
    },
    {
      id: "project-02",
      title: "E-Service Government Digital Portal",
      subtitle: "Citizen Citizen Service Request & Workflow Management System",
      category: "web",
      year: "2023",
      featured: true,
      description: "Full-stack web application designed for processing public service requests with role-based authentication, status tracking, and MySQL data optimization.",
      longDescription: "Designed database schemas in MySQL and PostgreSQL, implemented Django ORM models and REST APIs, and integrated frontend UI components. Optimized SQL queries to ensure quick retrieval of service application records and secure citizen identity verification.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      technologies: ["PYTHON", "DJANGO", "MYSQL", "REST API"],
      client: "TOPS Technologies Project",
      role: "Full Stack Python Developer",
      accentColor: "#1683E8",
      metrics: [
        { label: "Queries Opt.", value: "40% Faster" },
        { label: "Auth Security", value: "RBAC" },
        { label: "Database", value: "MySQL" }
      ]
    },
    {
      id: "project-03",
      title: "Digital Society Management System",
      subtitle: "Residential Housing Association Billing & Resident Operations",
      category: "dashboard",
      year: "2023",
      featured: true,
      description: "All-in-one residential community platform managing maintenance billing, visitor access logs, notice boards, and complaint ticket lifecycle.",
      longDescription: "Engineered using Django REST Framework and PostgreSQL. Features automated monthly maintenance bill generation, instant payment receipt logging, visitor QR code verification, and analytical reporting dashboards for society managers.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80",
      technologies: ["PYTHON", "DJANGO REST", "POSTGRESQL", "JAVASCRIPT"],
      client: "TOPS Technologies",
      role: "Full Stack Developer Trainee",
      accentColor: "#08243B",
      metrics: [
        { label: "Billing Automation", value: "100%" },
        { label: "DB Engine", value: "PostgreSQL" },
        { label: "User Rating", value: "4.9/5" }
      ]
    },
    {
      id: "project-04",
      title: "BeeChat Real-time Messaging Platform",
      subtitle: "Scalable Web Messaging Engine with Channel Workspaces",
      category: "saas",
      year: "2022",
      featured: true,
      description: "Interactive messaging web application featuring channel group chats, direct messaging, user presence indicators, and file attachments.",
      longDescription: "Developed using Python, Django, and WebSockets. Implemented secure token-based user authentication, asynchronous message broadcasts, and clean frontend UI integration for responsive communication across desktop and mobile devices.",
      image: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?auto=format&fit=crop&w=1200&q=80",
      technologies: ["PYTHON", "DJANGO", "WEBSOCKETS", "JAVASCRIPT"],
      client: "Full-Stack Project",
      role: "Python Backend Developer",
      accentColor: "#0A8FFF",
      metrics: [
        { label: "Realtime Sync", value: "WebSocket" },
        { label: "Latency", value: "<50ms" }
      ]
    },
    {
      id: "project-05",
      title: "Jobs Finder & Web Automation Scraper",
      subtitle: "Automated Job Aggregation & Resume Matching Engine",
      category: "web",
      year: "2022",
      featured: false,
      description: "Automated scraping and job indexing system using Selenium, Python, and Pandas to gather open listings across multiple job portals.",
      longDescription: "Created custom Python automation scripts that scrape, clean, and categorize job postings into a normalized database. Built a candidate portal where job seekers receive instant email notifications matching their skill tags.",
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
      technologies: ["PYTHON", "SELENIUM", "PANDAS", "DJANGO"],
      client: "Automation Project",
      role: "Python Automation Lead",
      accentColor: "#111111",
      metrics: [
        { label: "Jobs Parsed", value: "50K+/mo" },
        { label: "Data Pipeline", value: "Pandas" }
      ]
    },
    {
      id: "project-06",
      title: "IoT & Microcontroller Robotics Curriculum",
      subtitle: "Hardware & Sensor Electronics Training Suite for Grades 1-6",
      category: "mobile",
      year: "2024",
      featured: false,
      description: "Hands-on robotics and sensor programming modules built for primary students utilizing Arduino, C/C++, and Python microcontrollers.",
      longDescription: "Designed lab projects for over 500 students covering circuit design, logic gates, microcontrollers, and sensor telemetry. Organized competitive STEM demonstrations and student project exhibitions.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      technologies: ["PYTHON", "C / C++", "IOT", "MICROCONTROLLERS"],
      client: "Cosmos Castle International School",
      role: "IoT Lead Trainer",
      accentColor: "#1683E8",
      metrics: [
        { label: "Students Trained", value: "500+" },
        { label: "Curriculum Grades", value: "1 - 6" }
      ]
    }
  ],
  services: [
    {
      number: "01",
      title: "Backend Service & API Engineering",
      description: "Building scalable, high-speed RESTful APIs and backend microservices using Python (FastAPI & Django REST framework) with optimized database layers.",
      iconName: "Server",
      technologies: ["Python", "FastAPI", "Django REST", "PostgreSQL", "MySQL"],
      deliverables: ["High-Throughput REST APIs", "Database Schema Optimization", "JWT & OAuth Security", "Background Async Task Queues"]
    },
    {
      number: "02",
      title: "Data Pipelines & AI/ML Integration",
      description: "Designing end-to-end data manipulation and analytics pipelines utilizing Pandas, NumPy, Matplotlib, and Scikit-Learn for data insights and AI models.",
      iconName: "Zap",
      technologies: ["Pandas", "NumPy", "Matplotlib", "SciPy", "SkLearn"],
      deliverables: ["Data Cleaning & Analytics Pipelines", "Machine Learning Model Integration", "Predictive Analytics Engine", "Automated Excel & Chart Dashboards"]
    },
    {
      number: "03",
      title: "Web Automation & Testing Scripts",
      description: "Developing robust automation scrapers and Node.js/Python testing suites to streamline business portal workflows and continuous integration.",
      iconName: "Code",
      technologies: ["Selenium", "Python Automation", "Node Automation", "CI/CD"],
      deliverables: ["Portal Web Scrapers & Automation", "Node.js Automated Test Suites", "CI/CD Pipeline Verification", "Bug Tracking & Regression Reports"]
    },
    {
      number: "04",
      title: "Full Stack Web Application Development",
      description: "Delivering end-to-end production web applications combining responsive frontend components with resilient Python backends.",
      iconName: "Monitor",
      technologies: ["Django", "FastAPI", "JavaScript", "Docker", "REST APIs"],
      deliverables: ["Complete Web Application MVP", "Role-Based Access Control", "Cloud Environment Setup", "Deployment & Monitoring Support"]
    },
    {
      number: "05",
      title: "Docker Containerization & DevOps",
      description: "Containerizing web microservices using Docker for consistent, portable cloud deployment and streamlined production release cycles.",
      iconName: "Api",
      technologies: ["Docker", "Git", "PostgreSQL", "Linux", "CI Workflows"],
      deliverables: ["Dockerfile & Docker Compose Setup", "Cloud Infrastructure Deployment", "Environment Variable Management", "Production Stability Audits"]
    },
    {
      number: "06",
      title: "IoT & Embedded Hardware Systems",
      description: "Designing electronic logic, microcontroller programming (C/C++), and IoT hardware telemetry for interactive sensor projects.",
      iconName: "Lightbulb",
      technologies: ["IoT", "Microcontrollers", "C / C++", "Circuit Design"],
      deliverables: ["Microcontroller Firmware Development", "Sensor Data Logging", "Hands-on Workshop Curriculums", "Prototyping & Telemetry"]
    }
  ],
  process: [
    {
      number: "01",
      title: "REQUIREMENT ANALYSIS",
      description: "Analyze the core business objective, data flow, API endpoints, and database schema needs prior to development.",
      details: [
        "In-depth technical consultation",
        "API contract & database schema planning",
        "Data pipeline input/output specification",
        "Milestone definition & deliverable roadmap"
      ],
      iconName: "Search"
    },
    {
      number: "02",
      title: "ARCHITECTURE & SCHEMA",
      description: "Design relational database tables (Postgres/MySQL), Django ORM models, and FastAPI endpoint structures.",
      details: [
        "Normalized database ERD design",
        "RESTful API route architecture",
        "Data structure optimization with Pandas/NumPy",
        "Security, authentication & role mapping"
      ],
      iconName: "FileText"
    },
    {
      number: "03",
      title: "CLEAN CODE DEVELOPMENT",
      description: "Write modular, readable, reusable, and testable Python code adhering to strict PEP-8 standards.",
      details: [
        "FastAPI & Django REST implementation",
        "Data pipeline & analytics construction",
        "Frontend component & UI integration",
        "Unit testing & automated regression checks"
      ],
      iconName: "Code"
    },
    {
      number: "04",
      title: "CONTAINERIZATION & TESTING",
      description: "Package the application using Docker containers and run Node/Python automation test suites.",
      details: [
        "Docker container builds & environment setup",
        "Automated portal testing & bug fixes",
        "Database query execution speed profiling",
        "CI workflow integration"
      ],
      iconName: "Layout"
    },
    {
      number: "05",
      title: "DEPLOYMENT & STABILITY",
      description: "Deploy to cloud environments, verify production API stability, and hand over clean documentation.",
      details: [
        "Cloud production deployment",
        "Monitoring & log monitoring setup",
        "Code documentation & API handoff",
        "Post-launch technical support warranty"
      ],
      iconName: "Rocket"
    }
  ],
  experience: [
    {
      number: "01",
      role: "Core Python Developer",
      company: "at trust-pays24 (Dubai)",
      description: "Building and maintaining backend services and APIs using Python (FastAPI/Django) for payment and finance-related features. Developing data pipelines with Pandas and NumPy for reporting.",
      period: "NOV 2024 – PRESENT",
      current: true,
      achievements: [
        "Engineered low-latency payment processing APIs using FastAPI and Django REST framework",
        "Constructed automated data processing pipelines with Pandas and NumPy for analytics and reporting",
        "Containerized application services using Docker and collaborated on cloud deployment and troubleshooting"
      ]
    },
    {
      number: "02",
      role: "IoT Trainer",
      company: "at Cosmos Castle International School (Ahmedabad)",
      description: "Designed and delivered hands-on IoT and robotics curriculum for grades 1–6 combining electronics, microcontrollers, and programming fundamentals.",
      period: "APR 2023 – OCT 2024",
      current: false,
      achievements: [
        "Created practical lab exercises and guided over 500 students through end-to-end robotics projects",
        "Taught electronics, microcontrollers, logic gates, and C/C++ programming basics",
        "Organized classroom demonstrations and small robotics competitions to track learning outcomes"
      ]
    },
    {
      number: "03",
      role: "Full-Stack Internship Trainee",
      company: "at TOPS Technologies Pvt. Ltd (Ahmedabad)",
      description: "Developed full-stack web applications using Python and Django, delivering projects such as E-Service, Digital Society, BeeChat, and Jobs Finder.",
      period: "JUN 2021 – SEP 2023",
      current: false,
      achievements: [
        "Designed relational database schemas in MySQL and PostgreSQL with Django ORM models",
        "Built RESTful APIs and integrated responsive frontend UI components for seamless UX",
        "Optimized SQL queries, wrote unit tests, containerized apps with Docker, and implemented CI workflows"
      ]
    }
  ],
  education: [
    {
      degree: "Computer Engineering (Diploma)",
      institution: "Alpha Computer Engineering and Technology, Ahmedabad, India",
      period: "Jul 2019 - May 2023",
      highlights: [
        "Digital electronics, logic gates, microprocessors, and circuit design",
        "C & C++ programming for embedded systems and software applications",
        "Networking concepts, protocols, and network security fundamentals"
      ]
    }
  ],
  certifications: [
    {
      title: "Certified Python Developer with Django and Data Science",
      issuer: "TOPS Technologies Pvt. Ltd, Ahmedabad, India",
      period: "Aug 2021 - Jul 2023",
      skillsLearned: [
        "Clean Python development & Django framework",
        "RESTful APIs with Django REST Framework",
        "Data analysis using Pandas, NumPy, and Matplotlib",
        "Machine learning algorithms for predictive modeling"
      ]
    },
    {
      title: "Certified Counterespionage & Information Security Manager (CCISM)",
      issuer: "Pristine InfoSolutions Pvt. Ltd., Ahmedabad, India",
      period: "Aug 2022 - May 2023",
      skillsLearned: [
        "Risk assessment, vulnerability analysis, and mitigation planning",
        "Regulatory compliance frameworks (ISO 27001, NIST)",
        "Secure communication protocols, encryption, and access control"
      ]
    }
  ],
  testimonials: [
    {
      id: "test-01",
      quote: "Jay built our financial data processing microservice on FastAPI and Docker flawlessly. His understanding of backend stability and data pipelines with Pandas is top tier.",
      author: "Engineering Lead",
      role: "Payment Systems Director",
      company: "trust-pays24 (Dubai)",
      rating: 5
    },
    {
      id: "test-02",
      quote: "Jay demonstrated incredible versatility on full-stack Django projects. From MySQL query optimization to clean REST APIs, his code is reliable and clean.",
      author: "Senior Mentor",
      role: "Technical Supervisor",
      company: "TOPS Technologies",
      rating: 5
    },
    {
      id: "test-03",
      quote: "Jay's hands-on approach with IoT microcontrollers and robotics was inspiring. He communicated complex concepts effortlessly and built amazing practical projects.",
      author: "School Management",
      role: "Academic Coordinator",
      company: "Cosmos Castle Green Campus",
      rating: 5
    }
  ],
  faqs: [
    {
      question: "What Python frameworks and databases do you specialize in?",
      answer: "I specialize in Django, FastAPI, and Django REST Framework for backend APIs. For database design and optimization, I work extensively with PostgreSQL and MySQL."
    },
    {
      question: "What data science and machine learning tools do you use?",
      answer: "I use Pandas, NumPy, Matplotlib, SciPy, and Scikit-Learn (SkLearn) to build data processing pipelines, analytics dashboards, and predictive ML models."
    },
    {
      question: "Are you available for remote full-time or contract work?",
      answer: "Yes, I am actively available for remote full-time positions, backend development contracts, and consulting projects."
    },
    {
      question: "How can I download your complete resume/CV?",
      answer: "You can click any 'Download CV' button on this site to immediately download my complete, up-to-date resume document."
    }
  ]
};
