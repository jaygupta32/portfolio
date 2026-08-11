import { PortfolioData } from '../data/portfolioData';

export const downloadJayGuptaCV = (data?: PortfolioData) => {
  const name = data?.personal?.name || "Jay Gupta";
  const title = data?.personal?.title || "Senior Full-Stack Python & Application Developer";
  const email = data?.personal?.email || "jayg3229@gmail.com";
  const phone = data?.personal?.phone || "9157569030";
  const location = data?.personal?.location || "Ahmedabad, Gujarat, India";
  const linkedin = data?.socialLinks?.linkedin || "https://www.linkedin.com/public-profile/settings";

  const cvContent = `================================================================================
${name.toUpperCase()}
${title.toUpperCase()}
================================================================================

CONTACT INFORMATION:
--------------------
Email: ${email}
Phone: ${phone}
Location: ${location}
LinkedIn: ${linkedin}

PROFILE SUMMARY:
----------------
Results-driven Python developer skilled at writing efficient, reusable, testable, 
and scalable code for web and desktop applications. Proficient with Django and 
FastAPI, experienced in Postgres and MySQL database design and optimization, and 
fluent with data tools (Pandas, NumPy, Matplotlib) for ML/AI model development 
and deployment. Built automation scripts for web portals, developed Node.js 
automation tests, and created Windows desktop applications; delivered multiple 
production web projects and trained students in IoT/robotics. Quick learner with 
strong communication and problem-solving skills.

TECHNICAL SKILLS:
-----------------
• Core Languages: Python, JavaScript, C, C++
• Backend Frameworks: Django Framework, FastAPI, Node.js
• Databases: MySQL, PostgreSQL, Database Management & Optimization, Django ORM
• Data Science & ML: Pandas, NumPy, Matplotlib, SciPy, SkLearn, Predictive Modeling
• Web Automation & QA: Web Automation with Python (Selenium), Node Automation Testing
• Infrastructure & Tools: Docker, CI/CD Workflows, RESTful APIs, Git
• IoT & Hardware: IoT Programming, Microcontrollers, Robotics, Electronics
• Desktop & Office: Windows App Design, Excel Dashboard Analytics

EMPLOYMENT HISTORY:
-------------------
1. CORE PYTHON DEVELOPER | trust-pays24, Dubai
   Period: Nov 2024 - Present
   • Build and maintain backend services and APIs using Python (FastAPI/Django) for 
     payment and finance-related features.
   • Develop data processing pipelines with Pandas and NumPy for analytics and reporting, 
     and implement unit tests and CI workflows to ensure reliability.
   • Containerized applications with Docker, collaborated with cross-functional teams to 
     deploy to cloud environments, and troubleshoot production issues to improve stability.

2. IOT TRAINER | Cosmos Castle International School - Green Campus, Ahmedabad, India
   Period: Apr 2023 - Oct 2024
   • Designed and delivered hands-on IoT and robotics curriculum for grades 1-6, 
     combining electronics, microcontrollers, and programming fundamentals.
   • Created practical lab exercises and guided students through end-to-end projects 
     to reinforce problem-solving and build portfolio pieces.
   • Organized classroom demonstrations and small competitions to increase engagement 
     and track learning outcomes.

3. INTERNSHIP TRAINEE | TOPS Technologies Pvt. Ltd, Ahmedabad, India
   Period: Jun 2021 - Sep 2023
   • Developed full-stack web applications using Python and Django, delivering projects 
     such as E-service, Digital Society, Beechat, and Jobs Finder.
   • Designed database schemas (MySQL/Postgres), implemented Django ORM models and 
     RESTful APIs, and integrated frontend components for seamless UX.
   • Optimized SQL queries, wrote unit tests, and collaborated on deployments.
   • Containerized applications with Docker and deployed to cloud environments.

EDUCATION:
----------
• Computer Engineering (Diploma) | Jul 2019 - May 2023
  Alpha Computer Engineering and Technology, Ahmedabad, India
  - Digital electronics, microprocessors, C/C++ embedded systems, networking security.

CERTIFICATIONS:
---------------
• Certified Python Developer with Django and Data Science | Aug 2021 - Jul 2023
  TOPS Technologies Pvt. Ltd, Ahmedabad, India
  - Clean Python code, RESTful APIs, data analysis (Pandas, NumPy, Matplotlib), ML models.

• Certified Counterespionage and Information Security Manager (CCISM) | Aug 2022 - May 2023
  Pristine InfoSolutions Pvt. Ltd., Ahmedabad, India
  - Risk assessment, vulnerability analysis, ISO 27001/NIST standards, security programs.

LANGUAGES:
----------
• English
• Hindi

HOBBIES & INTERESTS:
--------------------
• Cryptocurrency trading
• Playing cricket and football
• Engaging in chess
• Learning about new technologies in free time

================================================================================
Generated from ${name}'s Professional Portfolio Website
================================================================================
`.trim();

  const blob = new Blob([cvContent], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${name.replace(/\s+/g, '_')}_CV_Senior_Python_Developer.txt`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
