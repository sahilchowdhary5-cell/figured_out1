import type { ResumeAnalysis } from "@/lib/types";

export function generateMockResumeAnalysis(
  topRoleIds: string[],
  fileName: string
): ResumeAnalysis {
  const primaryRole = topRoleIds[0] ?? "software-engineer";

  const roleGapData: Record<
    string,
    {
      currentFitScore: number;
      missingSkills: { skill: string; priority: "Must Have" | "Good to Have"; timeToLearn: string; resources: string[] }[];
      upskillTimeline: string;
    }
  > = {
    "software-engineer": {
      currentFitScore: 68,
      missingSkills: [
        {
          skill: "System Design fundamentals",
          priority: "Must Have",
          timeToLearn: "6–8 weeks",
          resources: ["Designing Data-Intensive Applications", "Grokking System Design (Educative.io)"],
        },
        {
          skill: "LeetCode / DSA problem solving",
          priority: "Must Have",
          timeToLearn: "8–12 weeks",
          resources: ["LeetCode (Blind 75 list)", "NeetCode.io YouTube"],
        },
        {
          skill: "Docker & basic DevOps",
          priority: "Good to Have",
          timeToLearn: "2–3 weeks",
          resources: ["Docker official tutorials", "TechWorld with Nana YouTube"],
        },
      ],
      upskillTimeline: "3–4 months for strong junior readiness",
    },
    "product-manager": {
      currentFitScore: 55,
      missingSkills: [
        {
          skill: "Product Requirements Document (PRD) writing",
          priority: "Must Have",
          timeToLearn: "2–3 weeks",
          resources: ["Marty Cagan — Inspired", "Lenny's Newsletter (PM case studies)"],
        },
        {
          skill: "SQL for product analytics",
          priority: "Must Have",
          timeToLearn: "4–6 weeks",
          resources: ["Mode Analytics SQL Tutorial", "StrataScratch practice"],
        },
        {
          skill: "A/B testing fundamentals",
          priority: "Good to Have",
          timeToLearn: "2–3 weeks",
          resources: ["Reforge Experimentation article series"],
        },
      ],
      upskillTimeline: "4–5 months to be a competitive APM candidate",
    },
    "data-analyst": {
      currentFitScore: 72,
      missingSkills: [
        {
          skill: "Advanced SQL (window functions, CTEs, optimization)",
          priority: "Must Have",
          timeToLearn: "3–4 weeks",
          resources: ["StrataScratch", "Mode Analytics Tutorial — Advanced"],
        },
        {
          skill: "Business Intelligence tool (Tableau or Power BI)",
          priority: "Must Have",
          timeToLearn: "3–4 weeks",
          resources: ["Tableau Public tutorials", "Udemy Power BI course"],
        },
        {
          skill: "Statistical testing (A/B tests, hypothesis testing)",
          priority: "Good to Have",
          timeToLearn: "2–3 weeks",
          resources: ["StatQuest with Josh Starmer (YouTube)"],
        },
      ],
      upskillTimeline: "2–3 months to be interview-ready",
    },
    "data-scientist": {
      currentFitScore: 48,
      missingSkills: [
        {
          skill: "Machine Learning with scikit-learn",
          priority: "Must Have",
          timeToLearn: "6–8 weeks",
          resources: ["Fast.ai Practical Deep Learning", "Hands-on ML (Aurélien Géron)"],
        },
        {
          skill: "Feature engineering and model evaluation",
          priority: "Must Have",
          timeToLearn: "4 weeks",
          resources: ["Kaggle Learn — ML courses", "Kaggle competition participation"],
        },
        {
          skill: "Python (Pandas, NumPy, Matplotlib)",
          priority: "Must Have",
          timeToLearn: "4 weeks",
          resources: ["Kaggle Python course", "Wes McKinney — Python for Data Analysis"],
        },
      ],
      upskillTimeline: "5–7 months for a strong entry-level DS portfolio",
    },
    "management-consultant": {
      currentFitScore: 52,
      missingSkills: [
        {
          skill: "Case interview methodology (MECE, frameworks)",
          priority: "Must Have",
          timeToLearn: "4–6 weeks",
          resources: ["Case In Point (Cosentino)", "Victor Cheng's Case Interview Secrets"],
        },
        {
          skill: "Excel financial modeling",
          priority: "Must Have",
          timeToLearn: "3–4 weeks",
          resources: ["Wall Street Prep — free Excel crash course", "Corporate Finance Institute"],
        },
        {
          skill: "Structured slide creation (Pyramid Principle)",
          priority: "Good to Have",
          timeToLearn: "2 weeks",
          resources: ["The Pyramid Principle (Minto)", "McKinsey-style slide examples online"],
        },
      ],
      upskillTimeline: "3–4 months for case interview readiness",
    },
    "ux-designer": {
      currentFitScore: 62,
      missingSkills: [
        {
          skill: "Figma — advanced component and variant system",
          priority: "Must Have",
          timeToLearn: "3–4 weeks",
          resources: ["Figma YouTube channel", "DesignCode.io"],
        },
        {
          skill: "User research methods (interviews, usability testing)",
          priority: "Must Have",
          timeToLearn: "3 weeks",
          resources: ["Nielsen Norman Group articles (free)", "Just Enough Research (Leah Buley)"],
        },
        {
          skill: "Portfolio with 2–3 end-to-end case studies",
          priority: "Must Have",
          timeToLearn: "6–8 weeks",
          resources: ["Bestfolios.com for inspiration", "UX collective case study templates"],
        },
      ],
      upskillTimeline: "3–4 months for a competitive entry-level UX portfolio",
    },
    "marketing-manager": {
      currentFitScore: 60,
      missingSkills: [
        {
          skill: "Google Analytics 4 and performance marketing metrics",
          priority: "Must Have",
          timeToLearn: "3 weeks",
          resources: ["Google Analytics Academy (free)", "Coursera — Meta Marketing Analytics"],
        },
        {
          skill: "Campaign execution (Meta Ads, Google Ads)",
          priority: "Must Have",
          timeToLearn: "4 weeks",
          resources: ["Meta Blueprint Certification", "Google Skillshop"],
        },
        {
          skill: "Email marketing and CRM fundamentals",
          priority: "Good to Have",
          timeToLearn: "2 weeks",
          resources: ["HubSpot Academy — Email Marketing (free)"],
        },
      ],
      upskillTimeline: "2–3 months for entry-level digital marketing roles",
    },
    "financial-analyst": {
      currentFitScore: 64,
      missingSkills: [
        {
          skill: "Financial modeling (3-statement model, DCF basics)",
          priority: "Must Have",
          timeToLearn: "4–6 weeks",
          resources: ["Wall Street Prep", "Corporate Finance Institute (CFI) — free tier"],
        },
        {
          skill: "Excel — advanced functions, pivot tables, scenario analysis",
          priority: "Must Have",
          timeToLearn: "2–3 weeks",
          resources: ["Excel Jet (free tutorials)", "Chandoo.org"],
        },
        {
          skill: "Accounting fundamentals",
          priority: "Good to Have",
          timeToLearn: "4 weeks",
          resources: ["Introduction to Financial Accounting (Coursera — UPenn)"],
        },
      ],
      upskillTimeline: "3–4 months to be competitive for finance analyst roles",
    },
  };

  const gaps = topRoleIds
    .slice(0, 5)
    .map((roleId) => {
      const data = roleGapData[roleId] ?? {
        currentFitScore: 55,
        missingSkills: [
          {
            skill: "Role-specific technical skills",
            priority: "Must Have" as const,
            timeToLearn: "4–6 weeks",
            resources: ["Online courses and documentation"],
          },
        ],
        upskillTimeline: "3–5 months",
      };
      return {
        roleId,
        ...data,
      };
    });

  const closestFit = topRoleIds[0] ?? "data-analyst";
  const bestLongTerm = topRoleIds[1] ?? topRoleIds[0] ?? "product-manager";

  return {
    skills: [
      "Communication",
      "Critical thinking",
      "Project coordination",
      "Microsoft Office / G Suite",
      "Research and synthesis",
      "Presentation skills",
    ],
    tools: ["Excel", "PowerPoint", "Google Analytics (basic)", "LinkedIn"],
    experience: [
      "Academic projects in groups",
      "Internship in a business/technical role",
      "Part-time or freelance work",
    ],
    projects: [
      "College final year project",
      "Hackathon participation",
      "Personal blog or side project",
    ],
    education: "Currently pursuing or completed undergraduate degree",
    strengthAreas: [
      "Foundational communication and writing ability",
      "Academic analytical training",
      "Awareness of business and technology domains",
    ],
    estimatedProfile: `Based on your profile and the file "${fileName}", your current background shows potential for analytical and business-facing roles. You have foundational skills but need targeted upskilling to be job-ready for most specialized roles.`,
    roleGaps: gaps,
    closestFitRole: closestFit,
    bestLongTermRole: bestLongTerm,
  };
}
