import type { RoadmapItem } from "@/lib/types";

export const ROADMAPS: RoadmapItem[] = [
  {
    roleId: "software-engineer",
    thirtyDayPlan: [
      {
        week: "Week 1",
        focus: "Foundations & Gap Assessment",
        actions: [
          "Complete the 'LeetCode Blind 75' problem list — start with Easy, build momentum",
          "Set up your GitHub profile and push at least one project",
          "Identify 3 target companies and review their engineering blogs",
        ],
      },
      {
        week: "Week 2",
        focus: "Core Data Structures",
        actions: [
          "Study arrays, strings, hashmaps, and linked lists deeply",
          "Build a small CRUD API in your preferred language",
          "Read and summarize one engineering blog post from a top company",
        ],
      },
      {
        week: "Week 3",
        focus: "Projects & Portfolio",
        actions: [
          "Start your capstone project (see projects below)",
          "Study trees, graphs, and basic recursion",
          "Connect with 5 engineers at target companies on LinkedIn",
        ],
      },
      {
        week: "Week 4",
        focus: "System Design Intro",
        actions: [
          "Read Chapters 1–5 of 'Designing Data-Intensive Applications'",
          "Practice explaining your project clearly in 2 minutes",
          "Apply to 10 target companies — use referrals where possible",
        ],
      },
    ],
    ninetyDayPlan: [
      {
        month: "Month 2",
        focus: "Deep Technical Skill Building",
        actions: [
          "Complete a focused course in your target stack (React, Spring Boot, FastAPI, etc.)",
          "Contribute to one open-source project on GitHub",
          "Complete 50 medium-difficulty LeetCode problems",
          "Build and deploy your capstone project to a public URL",
        ],
      },
      {
        month: "Month 3",
        focus: "Interview Preparation & Job Campaign",
        actions: [
          "Run 10+ mock technical interviews with peers or platforms like Pramp/interviewing.io",
          "Study system design: design URL shortener, news feed, rate limiter",
          "Apply to 30+ companies with personalized cover notes",
          "Follow up on all applications — research the recruiter and team",
        ],
      },
    ],
    portfolioProjects: [
      {
        title: "Full-Stack Web App",
        description:
          "Build a complete application with user auth, database, and a deployed frontend. Ideas: expense tracker, job application tracker, event management tool.",
        skills: ["React/Next.js", "Node.js or FastAPI", "PostgreSQL", "Auth (JWT)", "Docker"],
        difficulty: "Medium",
      },
      {
        title: "Real-Time Feature",
        description:
          "Add a real-time feature to your app (notifications, live chat, live dashboard) using WebSockets or Server-Sent Events.",
        skills: ["WebSockets", "Redis", "Event-driven architecture"],
        difficulty: "Hard",
      },
      {
        title: "Open Source Contribution",
        description:
          "Find a well-maintained open-source project in your stack and submit 2–3 meaningful pull requests (bug fixes or feature additions, not just typos).",
        skills: ["Git", "Code Review", "Documentation"],
        difficulty: "Medium",
      },
    ],
    learningPriority: [
      { resource: "LeetCode — Blind 75 list", type: "Project", priority: "High", estimatedTime: "8–12 weeks" },
      { resource: "Designing Data-Intensive Applications (Kleppmann)", type: "Book", priority: "High", estimatedTime: "6–8 weeks" },
      { resource: "The Odin Project or Full Stack Open", type: "Course", priority: "High", estimatedTime: "4–6 weeks" },
      { resource: "AWS Cloud Practitioner", type: "Certification", priority: "Medium", estimatedTime: "2–3 weeks" },
    ],
    internshipStrategy:
      "Apply early — most top companies open internship applications 6–9 months in advance. Build your GitHub and LinkedIn first. Target product-first startups for better learning; target MNCs or GCCs for the brand name. Apply for off-campus hackathons — they often have direct hiring pipelines.",
    networkingStrategy:
      "Join developer communities: IIT alumni networks, HasGeek, local meetups, and Discord communities for your tech stack. Comment on engineering blogs. Share your learnings on LinkedIn or a personal blog — it builds visibility. Find mentors by genuinely engaging with their content before asking for their time.",
    interviewPrepThemes: [
      "Data structures & algorithms (LeetCode)",
      "System design (scalability, databases, APIs)",
      "Behavioral questions (STAR format)",
      "Resume walk-through and project deep-dive",
      "Language-specific nuances (memory management, async, etc.)",
    ],
  },

  {
    roleId: "product-manager",
    thirtyDayPlan: [
      {
        week: "Week 1",
        focus: "Product Fundamentals",
        actions: [
          "Read 'Inspired' by Marty Cagan — understand the PM role deeply",
          "Tear down 3 products you use daily: what works, what doesn't, why",
          "Pick one product and write your first product critique document (2–3 pages)",
        ],
      },
      {
        week: "Week 2",
        focus: "Data & Metrics Literacy",
        actions: [
          "Complete Mode Analytics SQL tutorial (free)",
          "Study funnel analysis, retention metrics, NPS, and activation metrics",
          "Build a mock dashboard for a product in Notion or Google Sheets",
        ],
      },
      {
        week: "Week 3",
        focus: "User Research Basics",
        actions: [
          "Conduct 5 user interviews with friends/family about a product they use",
          "Write a synthesis document: what you heard, patterns, insights",
          "Learn user story mapping and create one for a simple feature",
        ],
      },
      {
        week: "Week 4",
        focus: "PRD Writing & Portfolio",
        actions: [
          "Write a full PRD for a feature you'd add to any existing product",
          "Apply to APM programs (Google APM, Microsoft PM Accelerate, etc.)",
          "Connect with 10 PMs on LinkedIn — send genuine, specific messages",
        ],
      },
    ],
    ninetyDayPlan: [
      {
        month: "Month 2",
        focus: "Deep Product Skills",
        actions: [
          "Complete a PM course (Reforge or Product School — pick one focused area)",
          "Write 3 more PRDs across different problem types (consumer, B2B, growth)",
          "Do 5 case study mock interviews with other aspiring PMs",
          "Get one person to review your work who is a working PM",
        ],
      },
      {
        month: "Month 3",
        focus: "Positioning & Applications",
        actions: [
          "Build a PM portfolio doc (Google Doc or Notion) — case studies, PRDs, data work",
          "Apply to 20+ PM roles with tailored applications",
          "Target internship roles at fast-growing startups for direct PM exposure",
          "Prepare for PM interviews: product sense, analytical, behavioral, estimation",
        ],
      },
    ],
    portfolioProjects: [
      {
        title: "Product Case Study",
        description:
          "Choose an existing product and do a comprehensive teardown: user problems, current solution, opportunities, and a proposed feature with success metrics.",
        skills: ["Product Thinking", "User Research", "Data Analysis", "PRD Writing"],
        difficulty: "Medium",
      },
      {
        title: "Zero-to-One Product Concept",
        description:
          "Identify a real problem you've experienced and design a product solution: user personas, core features, MVP scope, go-to-market approach, and success metrics.",
        skills: ["Market Research", "Product Strategy", "UX Thinking", "Business Model"],
        difficulty: "Hard",
      },
      {
        title: "A/B Test Design",
        description:
          "Design a hypothetical A/B test for an existing product: hypothesis, variants, metrics, sample size calculation, and decision framework.",
        skills: ["Statistics", "Experimentation", "Analytics", "Decision Making"],
        difficulty: "Medium",
      },
    ],
    learningPriority: [
      { resource: "Inspired by Marty Cagan", type: "Book", priority: "High", estimatedTime: "1 week" },
      { resource: "Reforge Growth Series or Product Strategy", type: "Course", priority: "High", estimatedTime: "4–6 weeks" },
      { resource: "SQL — Mode Analytics Tutorial", type: "Course", priority: "High", estimatedTime: "2 weeks" },
      { resource: "Product Management Certificate (PMC)", type: "Certification", priority: "Medium", estimatedTime: "4 weeks" },
    ],
    internshipStrategy:
      "Target APM (Associate Product Manager) programs at tech companies — these are structured entry points. For other companies, look for 'product ops', 'growth analyst', or 'business analyst' roles that are adjacent to PM. Build a relationship with PMs at target companies before applying — they are often the hiring manager.",
    networkingStrategy:
      "Join PM communities: GrowthX (India), Slack groups like Lenny's community, and local PM meetups. Write about product on LinkedIn or a blog — it signals genuine interest. Ask for 20-minute 'advice calls' with PMs at companies you admire — most will say yes to specific, genuine requests.",
    interviewPrepThemes: [
      "Product sense: design a product for X",
      "Analytical: measure success of Y feature",
      "Estimation: how many Xs in India?",
      "Strategy: if you were PM of Z, what would you prioritize?",
      "Behavioral: tell me about a time you influenced without authority",
    ],
  },

  {
    roleId: "data-analyst",
    thirtyDayPlan: [
      {
        week: "Week 1",
        focus: "SQL Mastery",
        actions: [
          "Complete Mode Analytics SQL Tutorial (all levels)",
          "Practice 30 SQL challenges on Hackerrank or StrataScratch",
          "Build a mock analysis in a public dataset using SQL",
        ],
      },
      {
        week: "Week 2",
        focus: "Visualization & Storytelling",
        actions: [
          "Learn Tableau Public (free) or Google Looker Studio basics",
          "Create 3 dashboards on public datasets",
          "Study data storytelling principles: structure, context, insight",
        ],
      },
      {
        week: "Week 3",
        focus: "Python for Analysis",
        actions: [
          "Complete Pandas + Matplotlib basics on Kaggle Learn",
          "Do one exploratory data analysis (EDA) on a Kaggle dataset",
          "Document your analysis clearly with narrative commentary",
        ],
      },
      {
        week: "Week 4",
        focus: "Business Framing",
        actions: [
          "Study key business metrics: CAC, LTV, churn, NPS, MoM growth",
          "Write an analysis case study on a public business problem",
          "Build your analytical portfolio on GitHub or Notion",
        ],
      },
    ],
    ninetyDayPlan: [
      {
        month: "Month 2",
        focus: "Advanced Analytics Skills",
        actions: [
          "Learn A/B testing: design, statistical significance, interpretation",
          "Complete a statistics refresher (Khan Academy or StatQuest)",
          "Build a comprehensive dashboard project for your portfolio",
        ],
      },
      {
        month: "Month 3",
        focus: "Job Search & Positioning",
        actions: [
          "Apply to 25+ analyst roles — target e-commerce, fintech, SaaS",
          "Run 5 mock SQL interviews and 5 case study interviews",
          "Reach out to 10 analysts at target companies for advice calls",
        ],
      },
    ],
    portfolioProjects: [
      {
        title: "Business Intelligence Dashboard",
        description:
          "Create a multi-page dashboard on a real dataset (e.g., e-commerce sales, marketing spend) with key business KPIs, trends, and insights.",
        skills: ["SQL", "Tableau/Power BI", "Data Modeling", "Storytelling"],
        difficulty: "Medium",
      },
      {
        title: "End-to-End Analysis Case Study",
        description:
          "Take a business question (e.g., 'What is causing our churn to increase?'), analyze data, and present a structured 5-page written report with recommendations.",
        skills: ["Python/Pandas", "Statistics", "Business Analysis", "Communication"],
        difficulty: "Medium",
      },
    ],
    learningPriority: [
      { resource: "Mode Analytics SQL Tutorial", type: "Course", priority: "High", estimatedTime: "1–2 weeks" },
      { resource: "Kaggle Learn — Pandas + Visualization", type: "Course", priority: "High", estimatedTime: "1–2 weeks" },
      { resource: "StatQuest (YouTube)", type: "Community", priority: "Medium", estimatedTime: "Ongoing" },
      { resource: "Storytelling with Data (Cole Nussbaumer Knaflic)", type: "Book", priority: "Medium", estimatedTime: "1 week" },
    ],
    internshipStrategy:
      "Target companies with strong data cultures: e-commerce, fintech, SaaS. Even a 2-month analytics internship at a mid-sized company is valuable. Look for internships through LinkedIn and AngelList — smaller companies are more accessible. Demonstrate your skills with a portfolio before applying.",
    networkingStrategy:
      "Follow data analytics leaders on LinkedIn. Engage in data communities (DataTalks.club, Kaggle discussions). Share your analysis projects with clear business framing — it attracts recruiters naturally.",
    interviewPrepThemes: [
      "SQL: JOINs, aggregations, window functions, CTEs",
      "Case study: analyze this dataset and tell me what you find",
      "Metric design: how would you measure the success of X?",
      "Business acumen: what would you prioritize to improve retention?",
      "Behavioral: tell me about a time your analysis changed a decision",
    ],
  },

  {
    roleId: "management-consultant",
    thirtyDayPlan: [
      {
        week: "Week 1",
        focus: "Frameworks & Case Methodology",
        actions: [
          "Read 'Case in Point' by Marc Cosentino — understand the framework",
          "Learn profitability, market entry, and M&A case frameworks",
          "Do your first 5 practice cases using the Victor Cheng method",
        ],
      },
      {
        week: "Week 2",
        focus: "Excel & Financial Modeling",
        actions: [
          "Complete a financial modeling tutorial (Wall Street Prep or Corporate Finance Institute free courses)",
          "Build a simple 3-statement model from scratch",
          "Practice reading and synthesizing annual reports",
        ],
      },
      {
        week: "Week 3",
        focus: "Communication & Slide Work",
        actions: [
          "Study the Pyramid Principle (Minto) for structured communication",
          "Rebuild 3 existing presentations using MECE principles",
          "Practice verbal case walking for 30 minutes daily",
        ],
      },
      {
        week: "Week 4",
        focus: "Networking with Consultants",
        actions: [
          "Reach out to 10 consultants at target firms through LinkedIn/alumni network",
          "Prepare 5 smart questions for informational interviews",
          "Apply to consulting clubs, competitions, and pre-placement opportunities",
        ],
      },
    ],
    ninetyDayPlan: [
      {
        month: "Month 2",
        focus: "Interview Simulation",
        actions: [
          "Complete 30+ case interviews with a practice partner",
          "Do 5 mock interviews with current consultants via Exponent or RocketBlocks",
          "Study 3 industry deep-dives (healthcare, FMCG, fintech)",
        ],
      },
      {
        month: "Month 3",
        focus: "Applications & Final Prep",
        actions: [
          "Apply to MBB and Big Four internship/analyst programs",
          "Finalize your 3 core behavioral stories (STAR format)",
          "Run personal fit interview prep: 'Why consulting?' must be specific and genuine",
        ],
      },
    ],
    portfolioProjects: [
      {
        title: "Business Case Competition Entry",
        description:
          "Enter a national business case competition (IIMA, XLRI, Tata Crucible, etc.). The preparation process itself builds skills; a win or finals appearance significantly differentiates your resume.",
        skills: ["Problem Structuring", "Financial Analysis", "Presentation", "Teamwork"],
        difficulty: "Hard",
      },
      {
        title: "Consulting Club Project",
        description:
          "Take a live project through your college consulting club — preferably pro-bono work for an NGO or small business. Real client exposure is a differentiator.",
        skills: ["Client Management", "Analysis", "Slide Creation", "Storytelling"],
        difficulty: "Medium",
      },
    ],
    learningPriority: [
      { resource: "Case In Point (Cosentino)", type: "Book", priority: "High", estimatedTime: "1 week" },
      { resource: "Victor Cheng's Case Interview Secrets", type: "Course", priority: "High", estimatedTime: "2 weeks" },
      { resource: "Wall Street Prep — Financial Modeling", type: "Course", priority: "Medium", estimatedTime: "4 weeks" },
      { resource: "The Pyramid Principle (Minto)", type: "Book", priority: "High", estimatedTime: "1 week" },
    ],
    internshipStrategy:
      "Consulting internships are the golden ticket — firms hire 60–80% of full-time analysts from their intern cohort. Apply 9–12 months in advance. If you can't get an MBB internship, a Big Four or boutique consulting internship is valuable. Supplement with a business case competition win to signal consulting aptitude.",
    networkingStrategy:
      "Alumni connections at target firms are your best resource. Coffee chats with consultants (ask genuinely, not just for referrals) build awareness of the role and sometimes lead to referrals. Be specific about why you want to work at that firm specifically.",
    interviewPrepThemes: [
      "Case interviews: profitability, market sizing, strategy",
      "Personal fit: why consulting, why this firm, your biggest failure",
      "STAR behavioral stories: leadership, teamwork, impact",
      "Industry knowledge: be prepared to discuss 2–3 sectors deeply",
    ],
  },
];

export const getRoadmapByRoleId = (roleId: string): RoadmapItem | undefined =>
  ROADMAPS.find((r) => r.roleId === roleId);
