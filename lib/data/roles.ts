import type { RoleDetail } from "@/lib/types";
import { ALL_EXTENDED_ROLES } from "@/lib/data/roles/index";

const ORIGINAL_ROLES: RoleDetail[] = [
  {
    id: "product-manager",
    title: "Product Manager",
    family: "Business",
    tagline: "Build products people love by sitting at the intersection of business, tech, and design.",
    emoji: "🧭",
    color: "violet",
    summary:
      "Product Managers define what gets built and why. You own the product vision, work closely with engineering and design teams, obsess over user problems, and translate business goals into a shipped roadmap. PMs don't write code — they write strategy, facilitate decisions, and take accountability for outcomes.",
    dayInLife: {
      morning:
        "Arrive to a backlog full of Slack messages. Triage bugs from yesterday's release, sync with engineering on blockers, and spend 45 minutes writing a PRD (Product Requirements Document) for the new checkout flow. Your 10am standup is 15 minutes of quick status updates.",
      afternoon:
        "A 90-minute deep-dive session with design on three user flows. You push back on one screen — it's intuitive for power users but confusing for new ones. You pull up a Hotjar heatmap to back your argument. Post-lunch, you prepare a feature spec for a VP review tomorrow.",
      evening:
        "Quick review of A/B test results from last week's experiment. Metrics are inconclusive. You write up your analysis and recommendation to run it longer. Check data dashboards, update the roadmap, and finally close 12 browser tabs.",
    },
    firstTwoYears:
      "Year 1 is mostly about listening, shipping small things, and learning the codebase and users deeply. You'll make spec mistakes, face pushback from engineers, and realize that your roadmap will change constantly. Year 2, you start driving larger initiatives and gain the confidence to push back on stakeholders. Expect to be uncomfortable — that's the job.",
    commonTasks: [
      "Writing PRDs and feature specs",
      "Running sprint planning and backlog grooming",
      "Analyzing user research and usage data",
      "Coordinating with engineering, design, QA",
      "Presenting roadmaps to leadership",
      "Defining success metrics for each feature",
      "Conducting user interviews",
      "Prioritization using frameworks like RICE or MoSCoW",
    ],
    keyTools: [
      "Jira / Linear",
      "Figma",
      "Mixpanel / Amplitude",
      "Notion / Confluence",
      "Slack",
      "Looker / Tableau (for data)",
      "Google Analytics",
      "Miro (for workshops)",
    ],
    stakeholders: [
      "Engineering Leads",
      "Design Team",
      "Data/Analytics",
      "Marketing",
      "Sales (for B2B products)",
      "Customer Support",
      "C-Suite / VPs",
      "End Users",
    ],
    pressureProfile: {
      level: "High",
      description:
        "PMs are accountable for product outcomes without direct authority over the people who build it. This combination of high responsibility and low control creates a unique pressure. Deadlines are real, stakeholder expectations are high, and user complaints land directly.",
      peakPeriods: [
        "Before major product launches",
        "Annual planning cycles",
        "When features miss targets",
        "During funding rounds (at startups)",
      ],
    },
    learningCurve: {
      steepness: "Steep",
      description:
        "PM is one of the hardest roles to break into and develop in. There is no formal curriculum — you learn by shipping. Mastering the technical, analytical, design, and communication dimensions simultaneously takes 2–3 years.",
      firstYearFocus: [
        "Understanding your users deeply",
        "Learning to write clear specifications",
        "Building relationships with engineering",
        "Developing product intuition through data",
      ],
    },
    expectedDeliverables: [
      "Product roadmap (quarterly + annual)",
      "Feature PRDs and user stories",
      "Release notes and launch plans",
      "Post-launch retrospectives",
      "OKR tracking dashboards",
    ],
    myths: [
      {
        myth: "PMs are 'the CEO of the product'",
        reality:
          "PMs have influence, not authority. You don't manage engineers — you convince them. Your success depends entirely on collaboration.",
      },
      {
        myth: "You need to know how to code",
        reality:
          "Technical literacy helps, but deep coding skills are not required. What matters is understanding technical constraints and trade-offs.",
      },
      {
        myth: "PMs just attend meetings and make PowerPoints",
        reality:
          "The best PMs are the ones closest to user data, the most rigorous about specs, and the most trusted by their engineering team.",
      },
    ],
    whoShouldAvoid:
      "If you need direct control over execution, dislike ambiguity, or struggle with influencing without authority, the PM role will be frustrating. Also avoid if you expect a clean, structured workday.",
    thriveProfile:
      "You thrive here if you love solving user problems, are comfortable with ambiguity, enjoy working across functions, and can drive decisions with data and conviction.",
    riskFactors: [
      "High burnout rate in early-stage startups",
      "Role scope varies wildly by company — title means different things",
      "Difficult to measure individual impact clearly",
      "Requires political navigation at large companies",
    ],
    adjacentRoles: [
      "Growth PM",
      "TPM (Technical Program Manager)",
      "UX Researcher",
      "Strategy Analyst",
      "Business Analyst",
    ],
    idealIndustries: [
      "SaaS",
      "Consumer Tech",
      "Fintech",
      "Edtech",
      "E-commerce",
      "B2B Software",
    ],
    startupVsMnc: {
      startup:
        "Broad ownership, direct user access, faster shipping cycles. You may own the full product with minimal process. High learning velocity but also high pressure and ambiguity.",
      mnc:
        "Narrow scope per PM, heavy process, longer release cycles. More stakeholders to manage. Compensation is strong, but impact on the product is often limited.",
      gcc:
        "GCCs (like Google, Microsoft, Amazon India centers) offer structured PM roles that often function more like program management — fewer strategic decisions, more coordination.",
    },
    dimensionRequirements: {
      analytical: 80,
      creative: 60,
      social: 85,
      structured: 65,
      autonomous: 55,
      riskTolerant: 65,
      leadership: 80,
      technical: 50,
      communication: 90,
      commercial: 75,
      detailOriented: 70,
      pressureTolerant: 80,
    },
  },

  {
    id: "data-analyst",
    title: "Data Analyst",
    family: "Technology",
    tagline: "Turn messy data into decisions that drive real business outcomes.",
    emoji: "📊",
    color: "blue",
    summary:
      "Data Analysts help organizations make sense of their data. You build dashboards, run queries, identify trends, and present findings to business stakeholders. It's equal parts technical skill and storytelling — the insights don't matter unless decision-makers understand and trust them.",
    dayInLife: {
      morning:
        "Pull the overnight data pipeline logs. Something broke — a field renamed upstream. Fix the query, update the dashboard. Morning standup with the marketing team to review yesterday's campaign metrics.",
      afternoon:
        "Work on an ad-hoc analysis requested by the CMO: 'why did our conversion drop last week?' You run 6 different SQL queries, build a funnel chart in Tableau, and find the issue: a landing page variant accidentally served to 40% of traffic. Write up findings.",
      evening:
        "Clean a messy dataset for next week's churn analysis. Document your queries in Notion. Update the data dictionary. Review a junior analyst's dashboard before it goes live.",
    },
    firstTwoYears:
      "Year 1 is about building SQL and Excel/Python fluency, learning the business domain deeply, and developing stakeholder communication skills. Year 2 shifts toward more ownership — designing analytical frameworks, mentoring, and stepping into data strategy. Strong analysts get pulled into product and strategy conversations early.",
    commonTasks: [
      "Writing and optimizing SQL queries",
      "Building and maintaining dashboards",
      "Conducting exploratory data analysis (EDA)",
      "Stakeholder reporting and presentations",
      "A/B test design and statistical analysis",
      "Data cleaning and quality validation",
      "Documenting data models",
    ],
    keyTools: [
      "SQL (BigQuery, Snowflake, PostgreSQL)",
      "Python (Pandas, Matplotlib)",
      "Tableau / Power BI / Looker",
      "Excel / Google Sheets",
      "dbt (data transformation)",
      "Airflow (pipelines)",
      "Jupyter Notebooks",
    ],
    stakeholders: [
      "Marketing",
      "Product Managers",
      "Finance",
      "Operations",
      "C-Suite for reporting",
      "Data Engineers",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Moderate pressure, with spikes during reporting cycles, fiscal quarter-ends, or when business-critical decisions need data fast. Generally a more stable environment than PM or IB.",
      peakPeriods: [
        "Monthly/quarterly business reviews",
        "Campaign performance reviews",
        "Product launch analysis",
        "Board reporting cycles",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "SQL and basic Python can be picked up in 3–6 months. The harder part is developing business acumen, statistical intuition, and the ability to tell compelling data stories.",
      firstYearFocus: [
        "SQL mastery",
        "Visualization best practices",
        "Understanding the business domain",
        "Statistical fundamentals",
      ],
    },
    expectedDeliverables: [
      "Weekly/monthly business dashboards",
      "Ad-hoc analysis reports",
      "A/B test results and recommendations",
      "Data quality monitoring",
      "Stakeholder presentations",
    ],
    myths: [
      {
        myth: "Data analysts just pull numbers from spreadsheets",
        reality:
          "Modern analysts work with complex data pipelines, write production SQL, and are expected to drive business decisions — not just report them.",
      },
      {
        myth: "It's a purely technical role",
        reality:
          "Communication and business understanding are as important as SQL. If stakeholders don't act on your insights, the analysis was wasted.",
      },
    ],
    whoShouldAvoid:
      "Avoid this role if you strongly dislike working with numbers, have no interest in statistics, or prefer roles with more creative latitude. Also be aware that without progression into data science or analytics leadership, the ceiling can feel limited at some companies.",
    thriveProfile:
      "You thrive here if you're naturally curious about 'why', love pattern-spotting, enjoy the satisfaction of finding an answer in data, and can explain complex findings simply.",
    riskFactors: [
      "Commoditization risk as more tools automate basic analysis",
      "Impact can be invisible if leadership doesn't act on insights",
      "Role scope varies — some analysts are glorified report-pullers",
      "Requires constant upskilling to stay relevant",
    ],
    adjacentRoles: [
      "Data Scientist",
      "Business Intelligence Engineer",
      "Analytics Engineer",
      "Product Analyst",
      "Growth Analyst",
    ],
    idealIndustries: [
      "E-commerce",
      "Fintech",
      "SaaS",
      "Consulting",
      "FMCG",
      "Healthcare",
      "Media",
    ],
    startupVsMnc: {
      startup:
        "Wear many hats — you may own the entire data stack. Faster learning, direct business impact, but less mentorship and infrastructure.",
      mnc:
        "Specialized teams, strong tooling, structured career progression. Risk of being siloed into narrow reporting functions.",
      gcc:
        "Strong data teams at GCCs (Google, Amazon, Microsoft India). Often work on global products with good exposure but less strategic agency.",
    },
    dimensionRequirements: {
      analytical: 95,
      creative: 40,
      social: 55,
      structured: 80,
      autonomous: 60,
      riskTolerant: 40,
      leadership: 40,
      technical: 80,
      communication: 70,
      commercial: 65,
      detailOriented: 85,
      pressureTolerant: 55,
    },
  },

  {
    id: "software-engineer",
    title: "Software Engineer",
    family: "Technology",
    tagline: "Design and build the systems that power modern digital products.",
    emoji: "💻",
    color: "emerald",
    summary:
      "Software Engineers design, build, and maintain software systems. It's a broad field — you might be building web apps, backend APIs, mobile products, infrastructure, or ML systems. The core of the role is problem-solving: breaking complex challenges into elegant, working code.",
    dayInLife: {
      morning:
        "Review overnight CI/CD pipeline failures. One test broke due to a dependency update. Fix it, push the patch. Standup at 9:30 — sprint is on track. Review two PRs from teammates and leave detailed comments.",
      afternoon:
        "4 hours of focused coding on a new authentication module. Hit an unexpected edge case with session management. Spend 45 minutes debugging, another 30 reading the OAuth 2.0 spec. The solution is elegant — 12 lines of code.",
      evening:
        "Write documentation for the auth module. Respond to Slack questions from the frontend team. Review product spec for next sprint. Commit, push, create PR.",
    },
    firstTwoYears:
      "Year 1 is about understanding the codebase, shipping features under guidance, and developing debugging instincts. Year 2, you start leading features end-to-end, mentoring interns, and contributing to architecture discussions. The growth is fast if you're proactive about tackling harder problems.",
    commonTasks: [
      "Writing clean, tested, reviewed code",
      "Debugging and fixing production issues",
      "Participating in code reviews",
      "Designing APIs and data models",
      "Writing unit and integration tests",
      "Documenting technical decisions",
      "Collaborating with product and design",
    ],
    keyTools: [
      "Git / GitHub / GitLab",
      "VS Code / JetBrains IDEs",
      "Docker / Kubernetes",
      "AWS / GCP / Azure",
      "PostgreSQL / MongoDB",
      "CI/CD pipelines (GitHub Actions, Jenkins)",
      "Postman / REST clients",
    ],
    stakeholders: [
      "Product Managers",
      "Other Engineers",
      "Tech Leads / Architects",
      "QA Engineers",
      "DevOps Teams",
      "Design (for frontend)",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Pressure spikes around sprint deadlines, production incidents, and major release windows. Most engineers develop good work-life habits once they're past the junior phase. On-call rotations add periodic stress.",
      peakPeriods: [
        "Sprint end / release cycles",
        "Production incidents",
        "High-priority bug periods",
        "On-call rotations",
      ],
    },
    learningCurve: {
      steepness: "Steep",
      description:
        "The fundamentals take 6–12 months. True proficiency — understanding distributed systems, performance optimization, secure design — takes years. But the learning is deeply satisfying.",
      firstYearFocus: [
        "Codebase familiarity",
        "Writing testable, clean code",
        "Understanding the deployment pipeline",
        "Debugging systematically",
      ],
    },
    expectedDeliverables: [
      "Shipped features with test coverage",
      "Technical documentation",
      "Code reviews and feedback",
      "Incident post-mortems",
      "Architecture decision records (ADRs)",
    ],
    myths: [
      {
        myth: "Software engineering is mostly about memorizing syntax",
        reality:
          "Syntax is Google-able. The hard part is designing clean systems, reasoning about edge cases, and debugging complex interactions.",
      },
      {
        myth: "You'll spend all day coding",
        reality:
          "Most senior engineers spend 30–50% of their time in meetings, code reviews, documentation, and mentorship. Pure coding time decreases as you grow.",
      },
    ],
    whoShouldAvoid:
      "Avoid this role if you dislike deep, focused problem-solving, are frustrated by debugging, or prefer externally-facing work with lots of variety. The repetitive nature of certain codebases can feel monotonous without the right projects.",
    thriveProfile:
      "You thrive here if you enjoy solving complex puzzles, care deeply about code quality, and take satisfaction in building things that work reliably at scale.",
    riskFactors: [
      "High AI disruption risk for routine coding tasks",
      "Burnout from always-on culture at some companies",
      "Career ceiling without moving into management or architecture",
      "Rapidly evolving tech stack requires constant re-learning",
    ],
    adjacentRoles: [
      "Tech Lead",
      "Software Architect",
      "DevOps / Platform Engineer",
      "ML Engineer",
      "Product Manager (for technical PMs)",
    ],
    idealIndustries: [
      "Product Tech",
      "Fintech",
      "Deeptech",
      "Gaming",
      "Infrastructure",
      "Cybersecurity",
    ],
    startupVsMnc: {
      startup:
        "High ownership, full-stack exposure, ship fast and break things. You'll likely touch infra, backend, frontend, and data. Learning velocity is unmatched but so is ambiguity.",
      mnc:
        "Specialized teams, well-defined scope, strong engineering practices. FAANG companies are the gold standard for systems engineering learning but have heavy process overhead.",
      gcc:
        "GCCs like Microsoft, Google, Amazon India offer interesting product work on global platforms. Compensation is strong, work-life balance is often better than Indian product startups.",
    },
    dimensionRequirements: {
      analytical: 85,
      creative: 55,
      social: 40,
      structured: 80,
      autonomous: 70,
      riskTolerant: 45,
      leadership: 40,
      technical: 95,
      communication: 50,
      commercial: 35,
      detailOriented: 90,
      pressureTolerant: 60,
    },
  },

  {
    id: "ux-designer",
    title: "UX Designer",
    family: "Design",
    tagline: "Design experiences that feel obvious — and are anything but.",
    emoji: "🎨",
    color: "pink",
    summary:
      "UX Designers bridge user needs and product capabilities. You research what users actually want, design flows and interfaces, prototype ideas, test them with users, and iterate. A great UX designer makes complex systems feel simple. A bad one makes simple things feel confusing.",
    dayInLife: {
      morning:
        "Review feedback from yesterday's user testing session on the new onboarding flow. 6 of 8 participants were confused by step 3. Sketch alternatives. Morning sync with PM — they want the redesign by Thursday.",
      afternoon:
        "4 hours in Figma redesigning the onboarding. Build two variants: one linear, one progressive. Write annotations explaining the reasoning for each decision. Share in the design review channel.",
      evening:
        "Join a handoff call with the frontend team. Walk them through the specs. Answer questions about hover states and responsive breakpoints. Update Figma components based on developer feedback.",
    },
    firstTwoYears:
      "Year 1 is about learning the tools, developing a portfolio, and understanding how to work within product processes. Year 2 is about developing your design judgment — knowing when to push back, when to simplify, and how to balance business constraints with user needs.",
    commonTasks: [
      "User research and usability testing",
      "Creating wireframes and high-fidelity mockups",
      "Building and maintaining design systems",
      "Prototyping interactive flows",
      "Writing UX copy and microcopy",
      "Collaborating on design reviews",
      "Conducting competitor analysis",
    ],
    keyTools: [
      "Figma",
      "FigJam (for workshops)",
      "Maze / UserTesting (for research)",
      "Principle / ProtoPie (for prototyping)",
      "Hotjar / FullStory (for behavior data)",
      "Notion (documentation)",
      "Zeplin / Storybook (handoff)",
    ],
    stakeholders: [
      "Product Managers",
      "Engineering Teams",
      "Brand / Marketing",
      "Customer Research",
      "C-Suite (for major design decisions)",
      "End Users",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Design can be a high-feedback, high-iteration environment. Criticism of your work is inevitable and frequent. Balancing user needs, engineering constraints, and business goals creates constant tension.",
      peakPeriods: [
        "Before major product releases",
        "Rebrands or design system overhauls",
        "User research synthesis cycles",
        "Tight sprint deadlines",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Tool proficiency is achievable in 6 months. Developing design taste, research rigor, and the ability to defend design decisions takes 2–3 years of real-world practice.",
      firstYearFocus: [
        "Figma fluency",
        "Understanding basic UI principles",
        "Learning to conduct user interviews",
        "Building your first design portfolio",
      ],
    },
    expectedDeliverables: [
      "Wireframes and high-fidelity mockups",
      "Prototype flows for testing",
      "Design system components",
      "User research synthesis documents",
      "Annotated design specs for handoff",
    ],
    myths: [
      {
        myth: "UX is about making things look pretty",
        reality:
          "UX is about making things work correctly for users. Aesthetics matter, but the primary concern is usability, clarity, and reducing friction.",
      },
      {
        myth: "You need to be artistic to be a UX designer",
        reality:
          "Visual design is a related but distinct skill. Many great UX designers are more analytical than artistic — they test hypotheses about user behavior, not just create visuals.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you struggle with ambiguity, dislike receiving criticism of your work, or prefer roles with more objective, measurable outputs. Design decisions are often subjective and contested.",
    thriveProfile:
      "You thrive here if you're deeply curious about people, find satisfaction in simplifying complex systems, and can hold your design decisions with conviction while remaining open to feedback.",
    riskFactors: [
      "Portfolio gatekeeping makes entry difficult without side projects",
      "Undervalued at many companies without design-mature culture",
      "Risk of becoming a 'pixel pusher' if you don't advocate for users",
      "AI tools are automating low-level design tasks",
    ],
    adjacentRoles: [
      "Product Designer",
      "UX Researcher",
      "UI Designer",
      "Design Lead",
      "Content Designer",
    ],
    idealIndustries: [
      "Consumer Apps",
      "SaaS",
      "Fintech",
      "Healthtech",
      "Edtech",
      "Gaming",
    ],
    startupVsMnc: {
      startup:
        "Broad scope — you may be the only designer. You'll own end-to-end design for the product. Fast-moving, high learning, but often under-resourced.",
      mnc:
        "Specialized — you may own only one feature area. Strong design systems, mentorship, and process. Slower iteration but higher polish.",
      gcc:
        "GCCs like Google, Microsoft, and Adobe India have strong design practices. Often working on globally-distributed design systems and products.",
    },
    dimensionRequirements: {
      analytical: 60,
      creative: 90,
      social: 75,
      structured: 55,
      autonomous: 65,
      riskTolerant: 55,
      leadership: 50,
      technical: 45,
      communication: 80,
      commercial: 45,
      detailOriented: 80,
      pressureTolerant: 60,
    },
  },

  {
    id: "management-consultant",
    title: "Management Consultant",
    family: "Strategy",
    tagline: "Solve the toughest problems in business — on deadline, under scrutiny.",
    emoji: "📋",
    color: "slate",
    summary:
      "Management Consultants are hired guns for strategic and operational problems. You work with large organizations to diagnose issues, design solutions, and present recommendations. The work is intellectually demanding, fast-paced, and involves heavy client interaction. You'll become a generalist expert quickly.",
    dayInLife: {
      morning:
        "Flight from Delhi to Mumbai at 7am (yes, on a Monday). Client site by 9. Workshop with C-suite executives on organizational restructuring. You're the youngest person in the room by 15 years. Present findings from last week's analysis with confidence.",
      afternoon:
        "Stakeholder interviews — 4 back-to-back sessions. Take detailed notes. Spot inconsistencies in what different people are telling you. Update the hypothesis board in your notebook.",
      evening:
        "Back at the hotel by 8pm. 3 hours of slide work. Your manager sends back 40 comments. Work until 1am. This is a Tuesday.",
    },
    firstTwoYears:
      "Year 1 as an Analyst is a training ground — you'll build Excel models, conduct research, and support deck building. Year 2 you get more client exposure and start framing parts of the problem yourself. The learning is extraordinary; the hours are brutal. Most analysts either love it or leave after 2 years.",
    commonTasks: [
      "Structuring business problems using frameworks (MECE, McKinsey 7S)",
      "Financial modeling in Excel",
      "Client interviews and stakeholder workshops",
      "Slide presentation design and narrative",
      "Benchmarking and competitive research",
      "Process mapping and gap analysis",
      "Synthesizing complex findings into clear recommendations",
    ],
    keyTools: [
      "Excel / Financial modeling",
      "PowerPoint",
      "Miro (for frameworks)",
      "Research databases (Gartner, Euromonitor)",
      "SQL (for data projects)",
      "Python (at analytics-focused firms)",
    ],
    stakeholders: [
      "C-Suite Executives",
      "Board Members",
      "Division Heads",
      "Project Managers",
      "Firm Partners / Principals",
    ],
    pressureProfile: {
      level: "Very High",
      description:
        "Consulting is famously intense. Client expectations are high, deadlines are unforgiving, and the margin for error on a client presentation is near zero. Travel can be 3–4 days a week for project periods.",
      peakPeriods: [
        "Delivery deadlines / final presentations",
        "Proposal writing periods",
        "New client onboarding",
        "Year-end review periods",
      ],
    },
    learningCurve: {
      steepness: "Very Steep",
      description:
        "Consulting is a structured learning environment — most firms have extensive training. But the real learning happens on project, where you're expected to get up to speed on a new industry and problem in days.",
      firstYearFocus: [
        "Structured problem-solving (MECE)",
        "Excel and PowerPoint at professional speed",
        "Business communication with executives",
        "Industry-specific knowledge depth",
      ],
    },
    expectedDeliverables: [
      "Client presentations (20–100 slides)",
      "Excel-based financial models",
      "Diagnostic and recommendation reports",
      "Implementation roadmaps",
      "Proposal documents for new engagements",
    ],
    myths: [
      {
        myth: "Consultants have all the answers",
        reality:
          "Consultants are hired to structure the question and synthesize the options. Most recommendations are built on data provided by the client — the value is in the clarity of thinking.",
      },
      {
        myth: "Consulting = glamour travel",
        reality:
          "The travel is mostly airports, hotel rooms, and client offices. Monday 6am flights and Friday red-eyes are part of the deal.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you need work-life balance, prefer deep technical specialization, or struggle with public speaking and pressure. Also avoid if you want to own implementation — consultants advise, they rarely execute.",
    thriveProfile:
      "You thrive here if you love fast learning across industries, enjoy pressure, are excellent at structuring problems, and can present confidently to senior audiences.",
    riskFactors: [
      "Extremely high burnout rate",
      "Limited technical depth in any single domain",
      "Travel-heavy lifestyle is unsustainable long-term for many",
      "Post-consulting pivot can be challenging to direct roles",
    ],
    adjacentRoles: [
      "Strategy Manager (in-house)",
      "Business Analyst",
      "Product Manager",
      "Chief of Staff",
      "Investment Analyst",
    ],
    idealIndustries: [
      "Financial Services",
      "Healthcare",
      "Government / Policy",
      "Technology",
      "FMCG / Retail",
      "Manufacturing",
    ],
    startupVsMnc: {
      startup:
        "Boutique consulting firms offer niche expertise and less hierarchy. Less prestigious brand, but often more interesting work and better hours.",
      mnc:
        "MBB (McKinsey, BCG, Bain) and Big Four firms are the gold standard. Rigorous training, global network, and an exit brand that opens every door.",
      gcc:
        "Not directly applicable — GCC centers for consulting firms like Accenture or Deloitte in India are more delivery/execution-oriented than strategy.",
    },
    dimensionRequirements: {
      analytical: 90,
      creative: 65,
      social: 85,
      structured: 85,
      autonomous: 55,
      riskTolerant: 60,
      leadership: 75,
      technical: 45,
      communication: 95,
      commercial: 85,
      detailOriented: 75,
      pressureTolerant: 90,
    },
  },

  {
    id: "data-scientist",
    title: "Data Scientist",
    family: "Technology",
    tagline: "Build the models that make products smarter and decisions sharper.",
    emoji: "🔬",
    color: "cyan",
    summary:
      "Data Scientists build predictive models, design experiments, and extract deep intelligence from large datasets. You're at the intersection of statistics, programming, and business problems. The role requires more mathematical depth than data analysis and more domain application than pure ML research.",
    dayInLife: {
      morning:
        "Review model performance metrics overnight. Churn prediction model's accuracy dropped 2%. Pull the feature importance scores — a recent data schema change broke the tenure calculation. Fix it, retrain.",
      afternoon:
        "Work on a new recommendation engine for the product team. Experiment design, data preparation, baseline model in Python. Share results in a Jupyter notebook with clear narrative.",
      evening:
        "Present A/B test results from last month's pricing experiment to the product team. Walk through statistical significance, confidence intervals, and practical significance. Recommend shipping the new pricing tier.",
    },
    firstTwoYears:
      "Year 1 is about developing the statistical toolkit, learning to work with messy real-world data, and understanding how models connect to business decisions. Year 2 shifts to deploying models in production, owning end-to-end ML projects, and communicating complex findings clearly.",
    commonTasks: [
      "Feature engineering and data preparation",
      "Building and evaluating ML models",
      "A/B test design and statistical analysis",
      "Exploratory data analysis",
      "Model deployment and monitoring",
      "Research and proof-of-concept work",
      "Business stakeholder communication",
    ],
    keyTools: [
      "Python (scikit-learn, PyTorch, XGBoost)",
      "Jupyter Notebooks",
      "SQL + BigQuery",
      "MLflow / Weights & Biases",
      "Spark (for large datasets)",
      "Docker",
      "Airflow",
    ],
    stakeholders: [
      "Product Managers",
      "Data Engineers",
      "ML Engineers (for production deployment)",
      "Business stakeholders",
      "Research leads",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Research phases are exploratory and relatively low-pressure. Production model failures or high-stakes business experiments can create significant pressure. Generally more balanced than consulting or banking.",
      peakPeriods: [
        "Model deployment windows",
        "High-stakes A/B test readouts",
        "Annual business review cycles",
        "When production models degrade",
      ],
    },
    learningCurve: {
      steepness: "Very Steep",
      description:
        "Statistics, programming, domain knowledge, and communication must all come together. The mathematical depth required — probability theory, linear algebra, optimization — takes real investment.",
      firstYearFocus: [
        "Python and statistics fundamentals",
        "SQL and data manipulation",
        "Understanding ML algorithms deeply",
        "Communicating model outputs to non-technical stakeholders",
      ],
    },
    expectedDeliverables: [
      "Trained and evaluated ML models",
      "Experiment design and analysis reports",
      "Model cards and documentation",
      "Data science project notebooks",
      "Business impact assessments",
    ],
    myths: [
      {
        myth: "Data scientists spend most time building models",
        reality:
          "Studies consistently show 60–80% of a data scientist's time is spent on data cleaning, preprocessing, and pipeline work — not modelling.",
      },
      {
        myth: "You need a PhD to be a data scientist",
        reality:
          "A strong master's degree or even a self-taught background with a great portfolio can get you into solid roles. PhDs matter more for research-focused positions.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you dislike mathematics and statistics, expect quick results (model training is slow and iterative), or struggle with the ambiguity of research-heavy work with no guaranteed outcome.",
    thriveProfile:
      "You thrive here if you're methodical, love statistical reasoning, find satisfaction in understanding 'why' behind patterns in data, and enjoy connecting technical models to business decisions.",
    riskFactors: [
      "Role increasingly merging with ML Engineering",
      "High skill bar and competitive hiring market",
      "Business value can be hard to demonstrate directly",
      "Risk of becoming 'data janitor' without strong team culture",
    ],
    adjacentRoles: [
      "ML Engineer",
      "Research Scientist",
      "Analytics Engineer",
      "Data Analyst",
      "AI Product Manager",
    ],
    idealIndustries: [
      "Fintech",
      "E-commerce",
      "Healthtech",
      "Adtech",
      "Autonomous Systems",
      "Climate Tech",
    ],
    startupVsMnc: {
      startup:
        "Broad impact, full-stack data work from collection to deployment. High learning if the team is strong, but risk of isolated, tooling-poor environments.",
      mnc:
        "Strong infrastructure, data teams, and research culture. Google, Microsoft, Amazon, Meta offer world-class environments. The impact per individual is lower but the learning is significant.",
      gcc:
        "GCCs for companies like Google, Microsoft, Adobe offer real data science work on global products — not just support roles. Competitive compensation.",
    },
    dimensionRequirements: {
      analytical: 95,
      creative: 55,
      social: 45,
      structured: 70,
      autonomous: 75,
      riskTolerant: 55,
      leadership: 35,
      technical: 90,
      communication: 60,
      commercial: 55,
      detailOriented: 85,
      pressureTolerant: 55,
    },
  },

  {
    id: "investment-banking-analyst",
    title: "Investment Banking Analyst",
    family: "Finance",
    tagline: "Work on the highest-stakes financial transactions in the world. The grind is real.",
    emoji: "🏦",
    color: "amber",
    summary:
      "IB Analysts support deal execution — M&A transactions, IPOs, fundraising — by building financial models, preparing pitch decks, conducting due diligence, and supporting senior bankers in client interactions. The hours are notorious (80–100 hours/week), the learning is extraordinary, and the compensation is the highest for fresh graduates anywhere.",
    dayInLife: {
      morning:
        "Arrive at 9am — late by IB standards. Senior associate sent a model back with 20 comments at 3am. Fix the DCF assumptions and rebuild the merger analysis. Send to MD by 11.",
      afternoon:
        "Company visit for due diligence on a potential acquisition target. Take notes in every meeting. Process 200 pages of data room documents before tomorrow.",
      evening:
        "Start the pitch deck. 60 slides by morning. Work from 6pm to 4am. This is a normal week.",
    },
    firstTwoYears:
      "The Analyst program (typically 2–3 years) is one of the best financial training programs in the world. You'll build deep skills in financial modeling, valuation, and corporate finance. Year 1 is about survival and skill-building. Year 2 you start taking more ownership of deals and developing client instincts.",
    commonTasks: [
      "Building DCF, LBO, and merger models in Excel",
      "Preparing pitch presentations and CIMs",
      "Conducting industry and company research",
      "Supporting due diligence processes",
      "Creating financial summaries and board presentations",
      "Coordinating with legal and advisory teams",
    ],
    keyTools: [
      "Excel (advanced financial modeling)",
      "PowerPoint",
      "Bloomberg Terminal",
      "Capital IQ / PitchBook",
      "FactSet",
      "Dataroom platforms (Merrill DataSite, Intralinks)",
    ],
    stakeholders: [
      "Managing Directors",
      "Corporate Finance teams of clients",
      "Legal advisors",
      "Private Equity firms",
      "CFOs and CEOs",
    ],
    pressureProfile: {
      level: "Very High",
      description:
        "IB is the gold standard of high-pressure professional environments. Deal deadlines are real, errors in financial models can derail transactions, and senior bankers' expectations are extremely high. Lifestyle is largely unsustainable long-term.",
      peakPeriods: [
        "Deal signing / closing periods",
        "Pitch preparation",
        "Earnings seasons",
        "Live deal transaction periods",
      ],
    },
    learningCurve: {
      steepness: "Very Steep",
      description:
        "Nothing teaches finance faster than IB. You'll build 5 years of financial modeling skills in 12 months. The pace of learning is matched only by the pace of the work.",
      firstYearFocus: [
        "Financial modeling (DCF, comps, LBO)",
        "Business valuation fundamentals",
        "Industry deep dives",
        "Presentation and communication under pressure",
      ],
    },
    expectedDeliverables: [
      "Pitch books and CIM documents",
      "Financial models and valuation analyses",
      "Due diligence trackers",
      "Deal execution timelines",
      "Board presentations",
    ],
    myths: [
      {
        myth: "IB analysts are sophisticated finance strategists",
        reality:
          "Junior analysts spend most time formatting slides and building models. Strategy and client interaction come later, at associate and VP levels.",
      },
      {
        myth: "The pay makes it worth it",
        reality:
          "Compensation is high, but so is the effective hourly rate when you account for the hours. Many analysts burn out and leave within 2 years.",
      },
    ],
    whoShouldAvoid:
      "Avoid if work-life balance matters to you, if you aren't extremely numbers-oriented, or if you don't have a clear goal for where IB will take you. The lifestyle cost is high — the exit payoff must be worth it.",
    thriveProfile:
      "You thrive here if you're intensely driven, love finance and markets, can perform at a high level under sleep deprivation, and have a clear 2–3 year vision (PE, hedge fund, corp dev, MBA).",
    riskFactors: [
      "Severe burnout and attrition rates",
      "High AI risk for model-building tasks",
      "Limited post-IB options outside finance",
      "Personal life is severely impacted",
    ],
    adjacentRoles: [
      "Private Equity Associate",
      "Venture Capital Analyst",
      "Corporate Finance Manager",
      "Strategy Analyst",
      "Hedge Fund Analyst",
    ],
    idealIndustries: [
      "Financial Services",
      "Private Equity",
      "Venture Capital",
      "Corporate Development",
      "Sovereign Wealth Funds",
    ],
    startupVsMnc: {
      startup:
        "Boutique investment banks offer more deal exposure and less hierarchy, but no brand name. Good for niche sector expertise.",
      mnc:
        "Bulge bracket banks (Goldman, JP Morgan, Morgan Stanley) are the best training grounds. Exit opportunities are globally recognized.",
      gcc:
        "GCC centers for global banks in India (like JP Morgan's Mumbai office) offer high-quality work on global transactions with better hours than Wall Street.",
    },
    dimensionRequirements: {
      analytical: 90,
      creative: 35,
      social: 70,
      structured: 85,
      autonomous: 40,
      riskTolerant: 55,
      leadership: 50,
      technical: 60,
      communication: 85,
      commercial: 95,
      detailOriented: 95,
      pressureTolerant: 95,
    },
  },

  {
    id: "marketing-manager",
    title: "Marketing Manager",
    family: "Marketing",
    tagline: "Make people care about products — through story, strategy, and smart channels.",
    emoji: "📣",
    color: "orange",
    summary:
      "Marketing Managers plan and execute campaigns that drive awareness, acquisition, and retention for products or services. The role spans brand strategy, content, performance marketing, and analytics. It's creative and commercial at the same time — you need to make something that resonates emotionally and converts commercially.",
    dayInLife: {
      morning:
        "Review campaign dashboards — last week's paid social campaigns have a CPA of ₹420, above target. Dig into the data, identify the ad set with the lowest conversion rate, and pause it. Brief the content team on replacement creatives.",
      afternoon:
        "Quarterly brand planning meeting — present your Q3 marketing strategy to the CMO. 45-minute session, lots of questions about ROI. Adjust the plan based on feedback.",
      evening:
        "Review email campaign draft from the copy team. Make 15 edits to tone and calls-to-action. Approve the schedule. Quick review of competitor campaign that launched today — what are they testing?",
    },
    firstTwoYears:
      "Year 1 is about learning execution — campaign management, channel mechanics, reporting. Year 2 you start thinking strategically, owning campaigns end-to-end, and building a sense of what makes messaging resonate. The best marketers combine data fluency with creative taste.",
    commonTasks: [
      "Campaign planning and execution",
      "Performance analysis and optimization",
      "Brief writing for creative teams",
      "Budget management and ROI reporting",
      "Email and CRM campaign management",
      "Brand and messaging strategy",
      "Competitor and market research",
    ],
    keyTools: [
      "Google Analytics / GA4",
      "Meta Ads Manager / Google Ads",
      "HubSpot / Salesforce CRM",
      "Mailchimp / Klaviyo",
      "Canva / Adobe (for creative review)",
      "Hotjar",
      "Notion / Monday.com",
    ],
    stakeholders: [
      "CMO / VP Marketing",
      "Product Teams",
      "Sales Teams",
      "Creative/Design",
      "Agencies (media, creative)",
      "Data / Analytics",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Campaign deadlines, seasonal events, and metric misses create spikes of pressure. Generally more balanced than finance or consulting. However, the role's accountability for revenue is increasing as attribution tools improve.",
      peakPeriods: [
        "Product launches",
        "Seasonal campaigns (Diwali, New Year, etc.)",
        "End of quarter reporting",
        "Campaign performance reviews",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Basic execution skills can be learned in 6–12 months. Developing deep strategic thinking, creative instinct, and data fluency simultaneously takes 2–3 years.",
      firstYearFocus: [
        "Performance marketing fundamentals",
        "Analytics and attribution basics",
        "Campaign execution and tools",
        "Understanding your customer",
      ],
    },
    expectedDeliverables: [
      "Campaign plans and briefs",
      "Monthly performance reports",
      "Marketing budget trackers",
      "Content calendars",
      "Brand guidelines and messaging docs",
    ],
    myths: [
      {
        myth: "Marketing is just about being creative",
        reality:
          "Modern marketing is as much data and analytics as it is creative. Performance marketers live in spreadsheets.",
      },
      {
        myth: "Marketing impact is hard to measure",
        reality:
          "Good marketers obsess over attribution, conversion rates, LTV, and CAC. The measurement challenge is real but solvable.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you dislike fast-changing priorities, are uncomfortable with subjective feedback on your creative work, or prefer roles with more technical depth and stability.",
    thriveProfile:
      "You thrive here if you're creative and data-driven in equal measure, love understanding what makes people tick, and enjoy the variety of creative, analytical, and strategic work.",
    riskFactors: [
      "Heavy AI disruption for content and copy roles",
      "Attribution is increasingly complex",
      "ROI pressure is constant",
      "Role dilution — many companies under-invest in marketing strategy",
    ],
    adjacentRoles: [
      "Growth Marketer",
      "Brand Manager",
      "Content Strategist",
      "Product Marketing Manager",
      "CMO (long-term)",
    ],
    idealIndustries: [
      "FMCG",
      "D2C / E-commerce",
      "SaaS",
      "Consumer Apps",
      "Media",
      "Healthcare",
    ],
    startupVsMnc: {
      startup:
        "Full-stack marketing — you'll run ads, write copy, manage agencies, and own the entire funnel. Steep learning, high ownership.",
      mnc:
        "Specialized roles (brand manager, media planner, etc.). Rigorous processes, larger budgets, more structure. FMCG companies like HUL and P&G are the gold standard for marketing training.",
      gcc:
        "GCC marketing roles are often regional marketing support — less strategic, more execution-focused.",
    },
    dimensionRequirements: {
      analytical: 65,
      creative: 85,
      social: 75,
      structured: 60,
      autonomous: 60,
      riskTolerant: 60,
      leadership: 65,
      technical: 45,
      communication: 85,
      commercial: 80,
      detailOriented: 60,
      pressureTolerant: 65,
    },
  },

  {
    id: "financial-analyst",
    title: "Financial Analyst",
    family: "Finance",
    tagline: "Understand the numbers that drive businesses — and shape strategic decisions.",
    emoji: "📈",
    color: "green",
    summary:
      "Financial Analysts analyze financial data to support business decisions. You might work in FP&A (Financial Planning & Analysis), equity research, credit analysis, or corporate finance. The common thread is translating financial data into insights that guide resource allocation, investment, and strategy.",
    dayInLife: {
      morning:
        "Pull updated P&L from the ERP system. Revenue is 3% ahead of target but margins are compressed — opex grew faster than plan. Flag the discrepancy for the weekly CFO review.",
      afternoon:
        "Build the revised 3-year financial model based on new assumptions from the CEO. Sensitivity analysis on 4 scenarios. Update the monthly dashboard and prepare commentary.",
      evening:
        "Review next month's budget submissions from all business units. Flag two that are inconsistent with historical run-rates. Follow up with department heads for clarification.",
    },
    firstTwoYears:
      "Year 1 is heavy on financial model-building, Excel, and understanding the company's P&L structure. Year 2 you start owning forecasting processes, presenting to senior leadership, and developing the business judgment to challenge assumptions.",
    commonTasks: [
      "Monthly/quarterly financial reporting",
      "Budget planning and variance analysis",
      "Financial modeling and forecasting",
      "Business unit performance analysis",
      "Investment case analysis",
      "Management presentations",
      "Cost optimization analysis",
    ],
    keyTools: [
      "Excel (advanced)",
      "SAP / Oracle (ERP)",
      "Power BI / Tableau",
      "Bloomberg (for equity research)",
      "Python (for automation)",
      "Adaptive Insights / Anaplan (FP&A tools)",
    ],
    stakeholders: [
      "CFO / Finance Director",
      "Business Unit Heads",
      "Strategy Team",
      "External auditors and investors",
      "Banks and credit rating agencies",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Month-end and quarter-end closing periods are intense. Audit seasons and fundraising events add pressure. Day-to-day is generally structured and predictable.",
      peakPeriods: [
        "Month-end / quarter-end close",
        "Annual budget cycle",
        "Fundraising or board presentations",
        "Audit season",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Financial fundamentals can be solidified in 12 months. Deep business acumen and judgment develop over 2–3 years through exposure to different business cycles and decisions.",
      firstYearFocus: [
        "Financial statement analysis",
        "Excel modeling",
        "Budget and forecast mechanics",
        "Accounting fundamentals",
      ],
    },
    expectedDeliverables: [
      "Monthly financial reports",
      "Annual budget and multi-year forecasts",
      "Investment case analyses",
      "Variance commentary reports",
      "Board-level financial presentations",
    ],
    myths: [
      {
        myth: "Financial analysts are just accountants",
        reality:
          "Accounting records history; financial analysis shapes the future. FP&A roles particularly focus on forecasting, planning, and strategic decision support.",
      },
      {
        myth: "Finance is only for commerce students",
        reality:
          "Strong analytical thinking matters more than academic background. Engineers and math graduates often make excellent financial analysts.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you dislike working with numbers for extended periods, have no interest in business strategy, or expect creative latitude in your day-to-day work.",
    thriveProfile:
      "You thrive here if you're meticulous with numbers, enjoy understanding how businesses make and spend money, and find satisfaction in the precision of financial modeling.",
    riskFactors: [
      "High automation risk for standard reporting tasks",
      "Can become siloed without cross-functional exposure",
      "Career progression in finance can be slow in large companies",
    ],
    adjacentRoles: [
      "FP&A Manager",
      "Controller",
      "Corporate Finance Director",
      "Investment Analyst",
      "Business Analyst",
    ],
    idealIndustries: [
      "Banking",
      "Private Equity",
      "FMCG",
      "Infrastructure",
      "Telecom",
      "Retail",
    ],
    startupVsMnc: {
      startup:
        "Startups need generalist finance — you'll own modeling, fundraising support, and operations finance together. Fast learning, high impact.",
      mnc:
        "Large companies have specialized finance functions. Strong process and mentorship, but narrower scope per analyst.",
      gcc:
        "GCC finance roles are often shared services centers — standardized reporting and compliance functions. Less strategic, more execution.",
    },
    dimensionRequirements: {
      analytical: 90,
      creative: 30,
      social: 50,
      structured: 90,
      autonomous: 55,
      riskTolerant: 35,
      leadership: 40,
      technical: 65,
      communication: 65,
      commercial: 85,
      detailOriented: 95,
      pressureTolerant: 65,
    },
  },

  {
    id: "growth-marketer",
    title: "Growth Marketer",
    family: "Marketing",
    tagline: "Engineer acquisition and retention with data, experiments, and creative hustle.",
    emoji: "🚀",
    color: "rose",
    summary:
      "Growth Marketers drive user acquisition, activation, and retention through systematic experimentation. You sit at the intersection of product, data, and marketing. It's a highly analytical role with creative elements — you design and run experiments, optimize conversion funnels, and find the channels and messages that drive efficient growth.",
    dayInLife: {
      morning:
        "Check growth dashboard — referral program launched yesterday, K-factor is 1.3, ahead of projections. 30-minute growth stand-up: review last week's experiments, plan this week's queue.",
      afternoon:
        "Design a new onboarding experiment: two variants of the activation email sequence. Write the hypothesis, sample size calculation, and success metrics. Kick it off for A/B test.",
      evening:
        "Audit the landing page funnel with Hotjar data. Found a friction point on the sign-up form. Propose a simplified version. Push the change with the frontend team for next sprint.",
    },
    firstTwoYears:
      "Year 1 is about building experimentation rigor — learning to design valid tests, understand statistical significance, and not ship bad ideas just because they worked once. Year 2 you start owning full-funnel growth and building scalable playbooks.",
    commonTasks: [
      "Designing and running A/B and multivariate experiments",
      "Conversion rate optimization (CRO)",
      "SEO and content distribution strategy",
      "Referral and viral loop design",
      "Paid acquisition channel optimization",
      "Email and lifecycle marketing",
      "Growth metric dashboard management",
    ],
    keyTools: [
      "Mixpanel / Amplitude",
      "Optimizely / VWO (A/B testing)",
      "Google Analytics",
      "Google Ads / Meta Ads",
      "Hotjar / FullStory",
      "Braze / Customer.io",
      "SQL",
    ],
    stakeholders: [
      "Product Managers",
      "Engineering Teams",
      "Content / Creative Teams",
      "Data Teams",
      "CMO / Growth Lead",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Growth roles can feel relentlessly metric-driven. If experiments aren't moving numbers, the pressure to ship is constant. Startups especially have unrealistic growth expectations that create stress.",
      peakPeriods: [
        "New product launches",
        "Investor reporting periods",
        "Slow growth quarters",
        "Competitive pressure events",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Basic digital marketing can be learned in months. Developing true growth instinct — understanding why users behave as they do and what makes experiments valid — takes years of practice.",
      firstYearFocus: [
        "Experimentation methodology",
        "Funnel analytics",
        "Channel economics (CAC, LTV, payback period)",
        "Data analysis and SQL basics",
      ],
    },
    expectedDeliverables: [
      "Experiment logs and learnings documentation",
      "Growth metric dashboards",
      "Funnel analysis reports",
      "Campaign performance reports",
      "Growth playbooks and channel strategies",
    ],
    myths: [
      {
        myth: "Growth hacking = tricks and viral gimmicks",
        reality:
          "Sustainable growth comes from understanding user psychology, rigorous experimentation, and optimizing the full acquisition-retention funnel. Gimmicks don't compound.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you're uncomfortable with uncertainty (most experiments fail), dislike data-heavy work, or need a clearly defined creative brief to do your best work.",
    thriveProfile:
      "You thrive here if you love the scientific method, have genuine curiosity about user psychology, and find deep satisfaction in finding non-obvious growth levers.",
    riskFactors: [
      "Increasing privacy regulations constrain data-driven growth",
      "Role requires constant upskilling as channels evolve",
      "Easy to confuse correlation with causation in experiments",
    ],
    adjacentRoles: [
      "Growth PM",
      "Product Analyst",
      "Performance Marketer",
      "Marketing Manager",
      "Demand Generation Manager",
    ],
    idealIndustries: ["SaaS", "Consumer Apps", "E-commerce", "Fintech", "Edtech"],
    startupVsMnc: {
      startup:
        "Growth roles are most authentic at startups — high ownership, direct access to users, direct contribution to the business outcome.",
      mnc:
        "Growth at large companies can be bureaucratic. Most real growth work happens in startups or scale-ups.",
      gcc:
        "Less common — most GCCs don't have real growth functions; they rely on global headquarters for growth strategy.",
    },
    dimensionRequirements: {
      analytical: 80,
      creative: 65,
      social: 60,
      structured: 65,
      autonomous: 70,
      riskTolerant: 75,
      leadership: 50,
      technical: 60,
      communication: 70,
      commercial: 85,
      detailOriented: 65,
      pressureTolerant: 70,
    },
  },

  {
    id: "hr-specialist",
    title: "HR Specialist",
    family: "People",
    tagline: "Build the people systems that make great organizations work.",
    emoji: "🤝",
    color: "teal",
    summary:
      "HR Specialists manage the talent processes that power organizations — recruiting, onboarding, performance, compensation, and culture. It's a people-first role that requires empathy, process discipline, and the ability to influence without authority. Modern HR is increasingly data-driven and strategic.",
    dayInLife: {
      morning:
        "Review 40 applications for two open positions. Schedule 8 first-round interviews. Respond to a manager's question about a performance improvement plan. Check in on a new joiner's onboarding status.",
      afternoon:
        "Run a one-on-one with an employee who flagged concerns about their team environment. Listen carefully, document, and escalate appropriately. Prepare for next week's compensation review cycle.",
      evening:
        "Finalize the offer letter for a senior engineering hire. Coordinate with finance on budget approvals. Update the HRIS with three new joiner details.",
    },
    firstTwoYears:
      "Year 1 is about understanding the business and its people challenges, mastering the operational side of HR (payroll, compliance, onboarding), and building trust. Year 2 you develop strategic instincts — designing programs, influencing culture, and advising managers.",
    commonTasks: [
      "Recruitment coordination and candidate assessment",
      "Onboarding program management",
      "Performance review facilitation",
      "HR policy implementation",
      "Employee relations and conflict resolution",
      "Compensation benchmarking",
      "HRIS management and reporting",
    ],
    keyTools: [
      "Darwinbox / BambooHR / Keka (HRIS)",
      "LinkedIn Recruiter",
      "Lever / Greenhouse (ATS)",
      "Google Workspace",
      "Compensation benchmarking tools",
      "Survey tools (CultureAmp, SurveyMonkey)",
    ],
    stakeholders: [
      "Business Leaders and Managers",
      "Employees at all levels",
      "Finance (for comp & budget)",
      "Legal (for compliance)",
      "Leadership team",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "HR sits at the human center of organizations. Sensitive employee situations, hiring pressure, and compliance deadlines create stress. The emotional labor is often underestimated.",
      peakPeriods: [
        "Annual compensation and performance review cycles",
        "Mass hiring phases",
        "Layoff periods",
        "Compliance and audit seasons",
      ],
    },
    learningCurve: {
      steepness: "Gentle",
      description:
        "Core HR operations are learnable in 6–12 months. Strategic HR — culture design, org design, talent strategy — develops over years and requires significant business exposure.",
      firstYearFocus: [
        "HR operations and compliance fundamentals",
        "Recruitment process management",
        "HRIS proficiency",
        "Employment law basics",
      ],
    },
    expectedDeliverables: [
      "Recruitment pipeline reports",
      "Onboarding completion rates",
      "Performance review completion",
      "HR policy documentation",
      "Employee engagement survey results",
    ],
    myths: [
      {
        myth: "HR is just about hiring and firing",
        reality:
          "Strategic HR is about organizational design, talent development, culture engineering, and building the systems that help businesses scale sustainably.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you're uncomfortable with ambiguity in interpersonal situations, dislike repetitive administrative work, or struggle with maintaining confidentiality in sensitive situations.",
    thriveProfile:
      "You thrive here if you genuinely care about people, have strong process orientation, handle sensitive conversations with empathy, and see organizational health as a strategic lever.",
    riskFactors: [
      "Often undervalued at companies without strong people culture",
      "HR automation is eliminating administrative functions",
      "Emotionally taxing, especially during layoffs or conflict",
    ],
    adjacentRoles: [
      "Talent Acquisition Specialist",
      "HRBP (HR Business Partner)",
      "Compensation & Benefits Manager",
      "L&D Specialist",
      "Chief People Officer",
    ],
    idealIndustries: [
      "Technology",
      "Consulting",
      "FMCG",
      "Financial Services",
      "Healthcare",
    ],
    startupVsMnc: {
      startup:
        "Generalist HR — you own everything from sourcing to culture. High impact, fast learning, but often under-resourced.",
      mnc:
        "Specialized teams — talent acquisition, HRBPs, L&D, compensation, etc. Strong structure and process, but narrower scope.",
      gcc:
        "GCC HR roles often manage the local India people operations for a global company — a blend of local and global perspectives.",
    },
    dimensionRequirements: {
      analytical: 55,
      creative: 50,
      social: 90,
      structured: 70,
      autonomous: 50,
      riskTolerant: 45,
      leadership: 65,
      technical: 35,
      communication: 90,
      commercial: 50,
      detailOriented: 70,
      pressureTolerant: 60,
    },
  },

  {
    id: "operations-manager",
    title: "Operations Manager",
    family: "Operations",
    tagline: "Make sure everything that should work actually works — efficiently and reliably.",
    emoji: "⚙️",
    color: "gray",
    summary:
      "Operations Managers are the backbone of organizations — designing and managing processes that keep the business running. You might work in supply chain, logistics, customer operations, business operations, or central operations. The role demands systematic thinking, problem-solving under pressure, and clear-headed process optimization.",
    dayInLife: {
      morning:
        "Review last night's order fulfillment data — SLA breach in Tier 2 cities. Escalate to logistics team. Morning ops review: surface three critical blockers across teams.",
      afternoon:
        "Run a process redesign workshop for the customer support team. Current handle time is 18 minutes; target is 12. Identify 4 friction points in the tool workflow. Design the new process.",
      evening:
        "Track the pilot rollout for the new vendor management system. Two vendors onboarded, two haven't logged in yet. Follow up. Update KPI dashboard for Monday's leadership review.",
    },
    firstTwoYears:
      "Year 1 is about learning the business deeply — understanding flows, metrics, and stakeholders. Year 2 you start owning end-to-end process improvements and vendor/partner relationships.",
    commonTasks: [
      "Process design and documentation",
      "KPI monitoring and operational reporting",
      "Vendor and partner management",
      "Cross-functional coordination",
      "Root cause analysis and problem-solving",
      "Resource planning and allocation",
      "Technology tool implementation",
    ],
    keyTools: [
      "Tableau / Power BI",
      "Excel / Google Sheets",
      "Jira / Asana / Monday.com",
      "ERP systems (SAP, Oracle)",
      "Process mapping tools (Lucidchart, Miro)",
      "SQL (for operational data)",
    ],
    stakeholders: [
      "COO / VP Operations",
      "Finance",
      "Technology Teams",
      "Vendors and Partners",
      "Customer Success",
      "Sales and Marketing",
    ],
    pressureProfile: {
      level: "High",
      description:
        "Operations is often the team that has to fix what others break. Service disruptions, vendor failures, and scaling challenges can create intense pressure. You're often measured by what doesn't go wrong.",
      peakPeriods: [
        "Seasonal peaks (Diwali, New Year, etc.)",
        "System migrations or launches",
        "Rapid scale-up periods",
        "Crisis and outage situations",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "The learning is domain-specific — ops at a logistics company is very different from ops at a SaaS company. The thinking frameworks (process mapping, root cause analysis, metrics design) apply broadly but take time to develop.",
      firstYearFocus: [
        "Business domain and process understanding",
        "Metrics and reporting",
        "Stakeholder management",
        "Problem-solving frameworks",
      ],
    },
    expectedDeliverables: [
      "Process documentation and SOPs",
      "Weekly operational dashboards",
      "Vendor performance reports",
      "Process improvement analyses",
      "Resource plans and cost models",
    ],
    myths: [
      {
        myth: "Operations is just execution — not strategic",
        reality:
          "The best operations leaders are deeply strategic. Designing scalable systems, optimizing cost structures, and building resilient organizations are strategic challenges.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you dislike repetitive process work, need creative latitude, or struggle with the reactive nature of operations roles where priorities shift constantly.",
    thriveProfile:
      "You thrive here if you're systematic, love efficiency, find satisfaction in making messy things work smoothly, and can stay calm under operational pressure.",
    riskFactors: [
      "Automation is replacing operational tasks rapidly",
      "Hard to differentiate — strong ops talent is undervalued at some companies",
      "Role can become repetitive without growth into strategy",
    ],
    adjacentRoles: [
      "Business Operations Lead",
      "Supply Chain Manager",
      "Strategy & Operations",
      "Chief of Staff",
      "COO (long-term)",
    ],
    idealIndustries: [
      "E-commerce / Logistics",
      "Manufacturing",
      "Healthcare",
      "Fintech",
      "Hospitality",
    ],
    startupVsMnc: {
      startup:
        "Operations at startups is fast, high-pressure, and highly varied. You'll build systems from scratch with limited resources.",
      mnc:
        "Structured ops with defined processes and large teams. Strong learning environment for specialized ops domains.",
      gcc:
        "GCCs often house significant operations functions — shared services, back-office ops, and process centers.",
    },
    dimensionRequirements: {
      analytical: 75,
      creative: 40,
      social: 65,
      structured: 90,
      autonomous: 60,
      riskTolerant: 40,
      leadership: 75,
      technical: 55,
      communication: 70,
      commercial: 70,
      detailOriented: 85,
      pressureTolerant: 80,
    },
  },

  {
    id: "business-development-manager",
    title: "Business Development Manager",
    family: "Sales",
    tagline: "Create and close deals that drive the company's strategic growth.",
    emoji: "🤜",
    color: "indigo",
    summary:
      "Business Development Managers build partnerships, open new markets, and close deals that expand the business. Unlike traditional sales, BD focuses on strategic relationships — partnerships, alliances, channel strategies, and entering new verticals. It requires commercial instinct, relationship-building, and the tenacity to drive long sales cycles.",
    dayInLife: {
      morning:
        "Prepare deck for a partnership meeting with a fintech aggregator. Review the partnership model — revenue share terms, integration requirements, exclusivity clause. Practice the pitch.",
      afternoon:
        "Call with a potential enterprise partner. 45 minutes of qualifying: are they the right fit? Do they have budget and authority? Build rapport — this deal will take 4 months.",
      evening:
        "Update CRM with 8 deal entries. Follow up on 3 stalled deals. Send a coffee meeting request to a warm contact at a target company. Review the pipeline: 12 deals, ₹4.2 Cr total value.",
    },
    firstTwoYears:
      "Year 1 is about learning to prospect, qualify, and build relationships. Year 2 you start closing complex deals and developing your own BD playbook. BD rewards people who are patient, persistent, and strategic — not just those who talk fast.",
    commonTasks: [
      "Prospecting and lead qualification",
      "Partnership and deal structuring",
      "Commercial proposal writing",
      "Stakeholder relationship management",
      "CRM management",
      "Revenue forecasting and pipeline management",
      "Contract negotiation support",
    ],
    keyTools: [
      "Salesforce / HubSpot CRM",
      "LinkedIn Sales Navigator",
      "Apollo.io / ZoomInfo",
      "Google Slides / PowerPoint",
      "DocuSign (contracts)",
      "Slack (partner communication)",
    ],
    stakeholders: [
      "External partners and prospects",
      "Internal product teams (for integration requirements)",
      "Legal (for contracts)",
      "Finance (for deal economics)",
      "CEO / CSO (for large strategic deals)",
    ],
    pressureProfile: {
      level: "High",
      description:
        "BD has quarterly targets and deals that can take months to close. The pressure to hit numbers while building long-term relationships creates tension. Rejection is a daily occurrence.",
      peakPeriods: [
        "Quarter-end closing pressure",
        "New market entry phases",
        "Contract renewal seasons",
        "Company fundraising periods",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "The mechanics of BD are learnable in a year. Developing genuine relationship instinct, knowing when to push and when to wait, and building commercial intuition takes 2–3 years of real deal experience.",
      firstYearFocus: [
        "Sales fundamentals and prospecting",
        "Product and market knowledge",
        "CRM discipline",
        "Relationship building techniques",
      ],
    },
    expectedDeliverables: [
      "Signed partnership agreements",
      "Qualified pipeline reports",
      "Partnership proposals and decks",
      "Revenue contribution from BD channels",
      "Market entry assessments",
    ],
    myths: [
      {
        myth: "BD is just sales with a fancier name",
        reality:
          "BD focuses on strategic partnerships, not transactional selling. BD deals are longer, more complex, and often involve product integration and revenue sharing.",
      },
    ],
    whoShouldAvoid:
      "Avoid if rejection demotivates you deeply, you need immediate feedback on your work, or you dislike the variability of commission-based success.",
    thriveProfile:
      "You thrive here if you're patient, genuinely enjoy building relationships, have natural commercial curiosity, and can hold conviction through long deal cycles.",
    riskFactors: [
      "Variable compensation creates income uncertainty",
      "Long deal cycles mean delayed feedback",
      "BD skills can be undervalued at companies without commercial culture",
    ],
    adjacentRoles: [
      "Sales Manager",
      "Partnerships Manager",
      "Product Manager",
      "Strategy Analyst",
      "Chief Revenue Officer (long-term)",
    ],
    idealIndustries: [
      "SaaS",
      "Fintech",
      "Edtech",
      "Logistics",
      "Healthcare",
      "Real Estate",
    ],
    startupVsMnc: {
      startup:
        "High ownership, building BD from scratch, direct access to founders. Highest learning velocity, but also most uncertain.",
      mnc:
        "Structured BD with defined playbooks and larger deal sizes. More process, less autonomy.",
      gcc:
        "GCC BD roles often focus on internal cross-functional collaboration rather than external deal-making.",
    },
    dimensionRequirements: {
      analytical: 60,
      creative: 55,
      social: 90,
      structured: 60,
      autonomous: 65,
      riskTolerant: 70,
      leadership: 65,
      technical: 40,
      communication: 90,
      commercial: 90,
      detailOriented: 55,
      pressureTolerant: 75,
    },
  },

  {
    id: "content-strategist",
    title: "Content Strategist",
    family: "Communications",
    tagline: "Build the content ecosystem that attracts, educates, and converts audiences.",
    emoji: "✍️",
    color: "yellow",
    summary:
      "Content Strategists design the content systems that drive organic growth, brand authority, and audience engagement. You're not just writing — you're thinking about the full content machine: what to create, for whom, at what stage of the funnel, in what format, and with what measurable outcome. It requires equal parts creative, analytical, and strategic thinking.",
    dayInLife: {
      morning:
        "Review this month's blog performance — two articles are driving 60% of organic traffic. Understand why and replicate the pattern. Update the content calendar with 4 new topics based on keyword research.",
      afternoon:
        "Review drafts from two freelance writers. Edit tone, structure, and SEO optimization. Write LinkedIn post for the CEO — needs to feel authentic while driving awareness of the new product feature.",
      evening:
        "Quarterly content strategy review: present to the marketing head. Show organic traffic growth, lead attribution, and content ROI. Propose restructuring the blog taxonomy.",
    },
    firstTwoYears:
      "Year 1 is about developing your writing voice, SEO fundamentals, and content production discipline. Year 2 shifts toward strategy — planning content programs, managing a content calendar, and connecting content performance to business outcomes.",
    commonTasks: [
      "Content strategy development and planning",
      "SEO keyword research and optimization",
      "Writing, editing, and content production",
      "Content calendar management",
      "Freelancer and agency coordination",
      "Content performance analysis",
      "Brand voice and tone guidelines",
    ],
    keyTools: [
      "Ahrefs / Semrush (SEO)",
      "Google Analytics",
      "Notion / Contentful (CMS)",
      "WordPress",
      "Canva / Figma (for visuals)",
      "Buffer / Hootsuite (social scheduling)",
      "Grammarly / Hemingway",
    ],
    stakeholders: [
      "Marketing Head / CMO",
      "SEO Team",
      "Product Team",
      "Design Team",
      "Social Media Team",
      "PR Team",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Deadlines, consistent production schedules, and performance pressure are part of the role. Generally more balanced than marketing or sales, but content production is relentlessly ongoing.",
      peakPeriods: [
        "Product launches requiring content campaigns",
        "Major seasonal campaigns",
        "Annual content strategy planning",
        "Algorithm updates that affect organic traffic",
      ],
    },
    learningCurve: {
      steepness: "Gentle",
      description:
        "Writing and basic SEO can be developed in 6–12 months. Content strategy — understanding funnel dynamics, content operations, and measurement — develops over 2–3 years.",
      firstYearFocus: [
        "SEO fundamentals",
        "Writing for web (clarity, structure, headlines)",
        "Content performance measurement",
        "Understanding the target audience",
      ],
    },
    expectedDeliverables: [
      "Monthly content calendar",
      "Blog articles and long-form content",
      "Content performance reports",
      "Brand voice guidelines",
      "SEO strategy documents",
    ],
    myths: [
      {
        myth: "Content strategy is just blogging",
        reality:
          "Content strategy covers the entire content ecosystem — video, social, email, SEO, podcasts, documentation, and interactive formats — all tied to business goals.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you struggle with consistent production schedules, dislike writing, or expect quick quantitative feedback on your work. Content ROI takes time to materialize.",
    thriveProfile:
      "You thrive here if you love ideas, can write clearly and persuasively, enjoy the intersection of creativity and analytics, and have genuine curiosity about your audience.",
    riskFactors: [
      "AI is massively disrupting content production at the commodity level",
      "Content ROI is hard to attribute directly",
      "Risk of role being deprioritized during budget cuts",
    ],
    adjacentRoles: [
      "SEO Manager",
      "Brand Manager",
      "Marketing Manager",
      "Social Media Manager",
      "Head of Content",
    ],
    idealIndustries: ["SaaS", "D2C", "Media", "Edtech", "Healthcare", "Finance"],
    startupVsMnc: {
      startup:
        "High ownership, build the content function from scratch. Fast learning, but often limited resources and editing support.",
      mnc:
        "Specialized content roles with larger budgets and teams. More structure, better tooling, but slower processes.",
      gcc:
        "GCC content roles often support global brand or regional marketing. Less strategic, more execution-focused.",
    },
    dimensionRequirements: {
      analytical: 60,
      creative: 90,
      social: 60,
      structured: 65,
      autonomous: 70,
      riskTolerant: 50,
      leadership: 45,
      technical: 40,
      communication: 95,
      commercial: 60,
      detailOriented: 65,
      pressureTolerant: 50,
    },
  },

  {
    id: "supply-chain-analyst",
    title: "Supply Chain Analyst",
    family: "Operations",
    tagline: "Optimize the complex networks that get products from factory to customer.",
    emoji: "🔄",
    color: "lime",
    summary:
      "Supply Chain Analysts optimize the flow of goods, information, and money across the supply chain. You work on forecasting, inventory management, vendor relationships, and logistics efficiency. It's a data-heavy, operationally critical role that combines analytical rigor with strong cross-functional coordination.",
    dayInLife: {
      morning:
        "Review inventory health dashboard — two SKUs are 15 days from stockout. Trigger emergency purchase orders and notify the logistics team. Morning standup with the supply chain lead.",
      afternoon:
        "Run demand forecast for Q3 based on seasonality models and sales pipeline data. Build the output in Excel, validate with historical accuracy. Present to the merchandising team.",
      evening:
        "Vendor performance review — three suppliers have SLA breaches this month. Prepare summary for the vendor escalation meeting tomorrow. Update the scorecard.",
    },
    firstTwoYears:
      "Year 1 is about learning the supply chain deeply — vendor networks, lead times, inventory mechanics. Year 2 you start building analytical models and identifying optimization opportunities.",
    commonTasks: [
      "Demand forecasting and planning",
      "Inventory analysis and management",
      "Vendor and supplier coordination",
      "Logistics performance tracking",
      "Cost analysis and optimization",
      "Supply chain risk monitoring",
      "Cross-functional reporting",
    ],
    keyTools: [
      "Excel / Google Sheets",
      "SAP SCM / Oracle SCM",
      "Power BI / Tableau",
      "SQL",
      "Python (for forecasting models)",
      "Warehouse Management Systems",
    ],
    stakeholders: [
      "Procurement",
      "Warehouse / Logistics",
      "Finance",
      "Sales and Demand Planning",
      "Vendors and Suppliers",
    ],
    pressureProfile: {
      level: "Medium",
      description:
        "Supply chain disruptions — stockouts, delays, quality issues — create real business impact and corresponding pressure. Seasonal peaks and new product launches amplify operational stress.",
      peakPeriods: [
        "Festive seasons (high demand)",
        "New product launches",
        "Supply disruptions (weather, geopolitical)",
        "Year-end planning cycles",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Domain knowledge is deep and takes time. Logistics, procurement, inventory management, and forecasting each have significant complexity.",
      firstYearFocus: [
        "Supply chain fundamentals",
        "Inventory mechanics and metrics",
        "Demand forecasting basics",
        "Vendor management",
      ],
    },
    expectedDeliverables: [
      "Weekly inventory health reports",
      "Demand forecasts",
      "Vendor performance scorecards",
      "Cost optimization analyses",
      "Supply chain risk reports",
    ],
    myths: [
      {
        myth: "Supply chain is just logistics — trucks and warehouses",
        reality:
          "Modern supply chain management is deeply analytical, involving statistical forecasting, optimization algorithms, and strategic vendor relationships.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you dislike operational detail work, can't handle the reactive nature of supply disruptions, or are not comfortable with Excel and quantitative analysis.",
    thriveProfile:
      "You thrive here if you're systematic, enjoy solving complex logistical puzzles, and find satisfaction in knowing that your analysis directly prevents stockouts and reduces costs.",
    riskFactors: [
      "Automation is transforming supply chain operations",
      "Role can be reactive and unglamorous",
      "Domain expertise can be siloed without cross-functional mobility",
    ],
    adjacentRoles: [
      "Demand Planner",
      "Procurement Manager",
      "Logistics Manager",
      "Operations Manager",
      "SCM Director",
    ],
    idealIndustries: [
      "FMCG",
      "E-commerce",
      "Retail",
      "Manufacturing",
      "Pharma",
      "Automotive",
    ],
    startupVsMnc: {
      startup:
        "Fast-moving, build supply chain processes from scratch. High learning, but often inadequate systems and tools.",
      mnc:
        "Mature supply chains, strong systems, deep specialization. Companies like Nestlé, P&G, Maersk are gold standards for supply chain careers.",
      gcc:
        "GCC supply chain roles for global companies provide exposure to global supply chain systems and analytics platforms.",
    },
    dimensionRequirements: {
      analytical: 85,
      creative: 30,
      social: 55,
      structured: 90,
      autonomous: 55,
      riskTolerant: 40,
      leadership: 50,
      technical: 70,
      communication: 60,
      commercial: 70,
      detailOriented: 90,
      pressureTolerant: 65,
    },
  },

  {
    id: "sales-executive",
    title: "Sales Executive",
    family: "Sales",
    tagline: "Create value, build trust, and consistently close — the role that directly funds the company.",
    emoji: "💼",
    color: "orange",
    summary:
      "Sales Executives drive revenue by identifying and closing new customers or expanding existing ones. It's a high-accountability role with clear metrics: quota, pipeline, and conversion rates. Done well, sales is a sophisticated, consultative process of understanding customer problems and connecting them to solutions.",
    dayInLife: {
      morning:
        "Review CRM — 4 deals in negotiation, 2 proposals to send today. Morning call with a warm lead: discovery call to understand their pain points. Qualify thoroughly — is this deal winnable?",
      afternoon:
        "Demo call with an SME prospect. Walk through the product, answer objections, handle the pricing concern. End with a clear next step and a commitment to a proposal by Friday.",
      evening:
        "Update CRM. Strategize with manager on a stalling enterprise deal. Send a creative follow-up to a prospect who went quiet. Review pipeline for the week.",
    },
    firstTwoYears:
      "Year 1 is about learning the product deeply, developing your sales process, and hitting your first quota. Year 2 you start refining your approach — handling complex objections, closing larger deals, and building a predictable pipeline.",
    commonTasks: [
      "Prospecting and outreach",
      "Discovery calls and qualification",
      "Product demonstrations",
      "Proposal writing and commercial negotiation",
      "CRM management and pipeline hygiene",
      "Account expansion and upselling",
      "Forecasting and quota tracking",
    ],
    keyTools: [
      "Salesforce / HubSpot",
      "LinkedIn Sales Navigator",
      "Apollo / Outreach (sequencing)",
      "Zoom / Google Meet",
      "Gong / Chorus (call recording)",
      "DocuSign",
    ],
    stakeholders: [
      "Prospects and customers",
      "Sales Manager / VP Sales",
      "Solutions Engineers",
      "Marketing (for leads and content)",
      "Customer Success",
    ],
    pressureProfile: {
      level: "Very High",
      description:
        "Sales is the most transparent performance role in any company. Your number is public. Month-end and quarter-end pressure is intense. Rejection is a constant. The role demands emotional resilience.",
      peakPeriods: [
        "Month-end / quarter-end closing",
        "Annual contract renewal cycles",
        "Competitive threats to key accounts",
        "Quota setting season",
      ],
    },
    learningCurve: {
      steepness: "Moderate",
      description:
        "Basic sales techniques are learnable quickly. True sales mastery — reading rooms, handling complex objections, building deep trust — takes 2–3 years and thousands of calls.",
      firstYearFocus: [
        "Product knowledge",
        "Sales methodology (SPIN, MEDDIC, etc.)",
        "Objection handling",
        "CRM discipline and pipeline management",
      ],
    },
    expectedDeliverables: [
      "Monthly quota attainment",
      "Pipeline health (coverage ratio)",
      "Win rate by stage",
      "Deal velocity metrics",
      "Customer acquisition numbers",
    ],
    myths: [
      {
        myth: "Good salespeople are born, not made",
        reality:
          "The best salespeople are disciplined, methodical, and deeply customer-focused. These are learned skills. Natural charisma helps, but it's not the core variable.",
      },
      {
        myth: "Sales is manipulative",
        reality:
          "Consultative selling is about genuinely understanding and solving customer problems. Pushy sales loses deals and destroys relationships.",
      },
    ],
    whoShouldAvoid:
      "Avoid if you take rejection personally, dislike variable income, need creative latitude in your daily work, or aren't comfortable with public performance accountability.",
    thriveProfile:
      "You thrive here if you're resilient, genuinely curious about customer problems, competitive in a healthy way, and motivated by the direct connection between your effort and your income.",
    riskFactors: [
      "AI is automating outreach and qualification at the top of funnel",
      "Variable income creates financial uncertainty early-career",
      "Burnout from constant pressure and rejection",
    ],
    adjacentRoles: [
      "Account Executive",
      "Sales Manager",
      "Customer Success Manager",
      "Business Development Manager",
      "VP Sales",
    ],
    idealIndustries: ["SaaS", "Fintech", "Real Estate", "FMCG", "Pharma", "Edtech"],
    startupVsMnc: {
      startup:
        "Build the sales playbook from scratch. Direct access to founders. High ownership, high variability.",
      mnc:
        "Defined territories, strong lead generation support, training programs. Slower progression but more stable.",
      gcc:
        "GCC sales roles often cover inbound lead handling or renewal management — less outbound, more operational.",
    },
    dimensionRequirements: {
      analytical: 55,
      creative: 50,
      social: 95,
      structured: 60,
      autonomous: 65,
      riskTolerant: 75,
      leadership: 60,
      technical: 35,
      communication: 95,
      commercial: 90,
      detailOriented: 50,
      pressureTolerant: 90,
    },
  },
];

export const ROLES: RoleDetail[] = [...ORIGINAL_ROLES, ...ALL_EXTENDED_ROLES];

export const getRoleById = (id: string): RoleDetail | undefined =>
  ROLES.find((r) => r.id === id);

export const getRolesByFamily = (family: string): RoleDetail[] =>
  ROLES.filter((r) => r.family === family);

export const ROLE_FAMILIES = [
  "Technology",
  "Business",
  "Design",
  "Finance",
  "Marketing",
  "Operations",
  "People",
  "Strategy",
  "Sales",
  "Communications",
  "Healthcare",
  "Legal",
  "Engineering",
  "Government",
  "Education",
  "Entrepreneurship",
] as const;
