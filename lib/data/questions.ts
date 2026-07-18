import type { AssessmentQuestion, AssessmentSection } from "@/lib/types";

export const ASSESSMENT_SECTIONS: AssessmentSection[] = [
  {
    id: "work-style",
    title: "Work Style & Environment",
    subtitle: "How you prefer to work and what environments bring out your best",
    icon: "🏢",
    questionIds: [
      "ws-1", "ws-2", "ws-3", "ws-4", "ws-5", "ws-6", "ws-7", "ws-8",
    ],
  },
  {
    id: "problem-solving",
    title: "Problem-Solving Orientation",
    subtitle: "How you approach challenges, complexity, and decision-making",
    icon: "🧩",
    questionIds: [
      "ps-1", "ps-2", "ps-3", "ps-4", "ps-5", "ps-6", "ps-7", "ps-8",
    ],
  },
  {
    id: "communication",
    title: "Communication & Social Energy",
    subtitle: "How you engage with people and express ideas",
    icon: "💬",
    questionIds: [
      "cs-1", "cs-2", "cs-3", "cs-4", "cs-5", "cs-6", "cs-7", "cs-8",
    ],
  },
  {
    id: "technical",
    title: "Technical Comfort & Tools",
    subtitle: "Your relationship with technology, data, and systems",
    icon: "⚡",
    questionIds: [
      "tc-1", "tc-2", "tc-3", "tc-4", "tc-5", "tc-6",
    ],
  },
  {
    id: "risk-ambiguity",
    title: "Risk Appetite & Ambiguity",
    subtitle: "How comfortable you are with uncertainty and calculated risk",
    icon: "🎯",
    questionIds: [
      "ra-1", "ra-2", "ra-3", "ra-4", "ra-5", "ra-6",
    ],
  },
  {
    id: "leadership",
    title: "Leadership & Autonomy",
    subtitle: "Your preference for leading, following, and working independently",
    icon: "🌟",
    questionIds: [
      "la-1", "la-2", "la-3", "la-4", "la-5", "la-6",
    ],
  },
  {
    id: "values",
    title: "Values & Priorities",
    subtitle: "What matters most to you in work and career",
    icon: "💎",
    questionIds: [
      "vp-1", "vp-2", "vp-3", "vp-4", "vp-5", "vp-6",
    ],
  },
  {
    id: "pressure",
    title: "Pressure & Pace",
    subtitle: "How you perform under deadlines, high stakes, and intensity",
    icon: "🔥",
    questionIds: [
      "pp-1", "pp-2", "pp-3", "pp-4", "pp-5", "pp-6",
    ],
  },
];

export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  // ─── Work Style ───────────────────────────────────────────────────────────
  {
    id: "ws-1",
    sectionId: "work-style",
    text: "I prefer having a clear structure and defined processes over figuring things out as I go.",
    type: "likert",
    dimensionMapping: [
      { dimension: "structured", weight: 1.0 },
      { dimension: "autonomous", weight: -0.3 },
    ],
  },
  {
    id: "ws-2",
    sectionId: "work-style",
    text: "I enjoy working closely with a team every day more than working independently on my own projects.",
    type: "likert",
    dimensionMapping: [
      { dimension: "social", weight: 0.8 },
      { dimension: "autonomous", weight: -0.5 },
    ],
  },
  {
    id: "ws-3",
    sectionId: "work-style",
    text: "I find repetitive, process-driven tasks satisfying if they lead to reliable outcomes.",
    type: "likert",
    dimensionMapping: [
      { dimension: "structured", weight: 0.8 },
      { dimension: "detailOriented", weight: 0.6 },
      { dimension: "creative", weight: -0.3 },
    ],
  },
  {
    id: "ws-4",
    sectionId: "work-style",
    text: "I thrive in fast-moving environments where priorities change frequently.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.7 },
      { dimension: "pressureTolerant", weight: 0.5 },
      { dimension: "structured", weight: -0.4 },
    ],
  },
  {
    id: "ws-5",
    sectionId: "work-style",
    text: "I prefer creative, open-ended work over work with a correct answer.",
    type: "likert",
    dimensionMapping: [
      { dimension: "creative", weight: 1.0 },
      { dimension: "structured", weight: -0.5 },
      { dimension: "analytical", weight: -0.2 },
    ],
  },
  {
    id: "ws-6",
    sectionId: "work-style",
    text: "I enjoy deep-dive focus on one complex problem for hours at a time.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 0.7 },
      { dimension: "technical", weight: 0.5 },
      { dimension: "autonomous", weight: 0.4 },
    ],
  },
  {
    id: "ws-7",
    sectionId: "work-style",
    text: "The quality and accuracy of my output matters more to me than how fast I deliver.",
    type: "likert",
    dimensionMapping: [
      { dimension: "detailOriented", weight: 0.9 },
      { dimension: "structured", weight: 0.4 },
    ],
  },
  {
    id: "ws-8",
    sectionId: "work-style",
    text: "I feel energized after long meetings with multiple stakeholders.",
    type: "likert",
    dimensionMapping: [
      { dimension: "social", weight: 0.9 },
      { dimension: "communication", weight: 0.5 },
      { dimension: "leadership", weight: 0.3 },
    ],
  },

  // ─── Problem Solving ──────────────────────────────────────────────────────
  {
    id: "ps-1",
    sectionId: "problem-solving",
    text: "When facing a problem, I first look for data and evidence before forming an opinion.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 1.0 },
      { dimension: "detailOriented", weight: 0.5 },
      { dimension: "creative", weight: -0.2 },
    ],
  },
  {
    id: "ps-2",
    sectionId: "problem-solving",
    text: "I enjoy problems that don't have a single right answer and require creative thinking.",
    type: "likert",
    dimensionMapping: [
      { dimension: "creative", weight: 0.9 },
      { dimension: "riskTolerant", weight: 0.4 },
      { dimension: "structured", weight: -0.4 },
    ],
  },
  {
    id: "ps-3",
    sectionId: "problem-solving",
    text: "I'm comfortable making decisions with incomplete information.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.8 },
      { dimension: "leadership", weight: 0.4 },
      { dimension: "detailOriented", weight: -0.3 },
    ],
  },
  {
    id: "ps-4",
    sectionId: "problem-solving",
    text: "I naturally break complex problems into structured frameworks and steps.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 0.8 },
      { dimension: "structured", weight: 0.7 },
      { dimension: "commercial", weight: 0.3 },
    ],
  },
  {
    id: "ps-5",
    sectionId: "problem-solving",
    text: "I find satisfaction in optimizing existing systems rather than building new ones from scratch.",
    type: "likert",
    dimensionMapping: [
      { dimension: "structured", weight: 0.7 },
      { dimension: "detailOriented", weight: 0.6 },
      { dimension: "creative", weight: -0.2 },
    ],
  },
  {
    id: "ps-6",
    sectionId: "problem-solving",
    text: "I prefer solving problems that have a clear financial or commercial impact.",
    type: "likert",
    dimensionMapping: [
      { dimension: "commercial", weight: 1.0 },
      { dimension: "analytical", weight: 0.4 },
    ],
  },
  {
    id: "ps-7",
    sectionId: "problem-solving",
    text: "I enjoy research and synthesizing large amounts of information.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 0.8 },
      { dimension: "detailOriented", weight: 0.6 },
      { dimension: "technical", weight: 0.3 },
    ],
  },
  {
    id: "ps-8",
    sectionId: "problem-solving",
    text: "I trust my instincts and gut feel when the data is unclear.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.6 },
      { dimension: "creative", weight: 0.4 },
      { dimension: "analytical", weight: -0.4 },
    ],
  },

  // ─── Communication & Social ───────────────────────────────────────────────
  {
    id: "cs-1",
    sectionId: "communication",
    text: "I find it energizing to explain complex ideas clearly to different types of audiences.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 1.0 },
      { dimension: "social", weight: 0.5 },
      { dimension: "leadership", weight: 0.3 },
    ],
  },
  {
    id: "cs-2",
    sectionId: "communication",
    text: "I enjoy persuading people and building consensus around ideas I believe in.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 0.8 },
      { dimension: "leadership", weight: 0.7 },
      { dimension: "social", weight: 0.5 },
    ],
  },
  {
    id: "cs-3",
    sectionId: "communication",
    text: "I prefer written communication over verbal communication.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 0.5 },
      { dimension: "social", weight: -0.4 },
      { dimension: "autonomous", weight: 0.3 },
    ],
  },
  {
    id: "cs-4",
    sectionId: "communication",
    text: "I'm comfortable presenting my ideas to a large group of senior stakeholders.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 0.9 },
      { dimension: "pressureTolerant", weight: 0.5 },
      { dimension: "leadership", weight: 0.4 },
    ],
  },
  {
    id: "cs-5",
    sectionId: "communication",
    text: "I enjoy building new relationships and networking with people I've never met.",
    type: "likert",
    dimensionMapping: [
      { dimension: "social", weight: 1.0 },
      { dimension: "commercial", weight: 0.4 },
      { dimension: "communication", weight: 0.4 },
    ],
  },
  {
    id: "cs-6",
    sectionId: "communication",
    text: "I'm comfortable managing expectations and delivering difficult messages.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 0.8 },
      { dimension: "leadership", weight: 0.6 },
      { dimension: "pressureTolerant", weight: 0.4 },
    ],
  },
  {
    id: "cs-7",
    sectionId: "communication",
    text: "I prefer collaborating in small groups rather than working alone.",
    type: "likert",
    dimensionMapping: [
      { dimension: "social", weight: 0.8 },
      { dimension: "autonomous", weight: -0.6 },
    ],
  },
  {
    id: "cs-8",
    sectionId: "communication",
    text: "I find deep satisfaction in mentoring or teaching others what I know.",
    type: "likert",
    dimensionMapping: [
      { dimension: "communication", weight: 0.7 },
      { dimension: "social", weight: 0.6 },
      { dimension: "leadership", weight: 0.5 },
    ],
  },

  // ─── Technical ────────────────────────────────────────────────────────────
  {
    id: "tc-1",
    sectionId: "technical",
    text: "I enjoy learning new technical tools and software — it comes naturally to me.",
    type: "likert",
    dimensionMapping: [
      { dimension: "technical", weight: 1.0 },
      { dimension: "analytical", weight: 0.3 },
    ],
  },
  {
    id: "tc-2",
    sectionId: "technical",
    text: "I find programming or data analysis to be interesting and enjoyable.",
    type: "likert",
    dimensionMapping: [
      { dimension: "technical", weight: 1.0 },
      { dimension: "analytical", weight: 0.6 },
    ],
  },
  {
    id: "tc-3",
    sectionId: "technical",
    text: "I get energized by understanding how complex systems work under the hood.",
    type: "likert",
    dimensionMapping: [
      { dimension: "technical", weight: 0.9 },
      { dimension: "analytical", weight: 0.5 },
      { dimension: "detailOriented", weight: 0.3 },
    ],
  },
  {
    id: "tc-4",
    sectionId: "technical",
    text: "I'm more comfortable with qualitative work (writing, strategy) than quantitative analysis.",
    type: "likert",
    reversed: true,
    dimensionMapping: [
      { dimension: "technical", weight: -0.7 },
      { dimension: "analytical", weight: -0.5 },
      { dimension: "creative", weight: 0.5 },
      { dimension: "communication", weight: 0.3 },
    ],
  },
  {
    id: "tc-5",
    sectionId: "technical",
    text: "I enjoy working with data to find patterns and insights that aren't immediately obvious.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 0.9 },
      { dimension: "technical", weight: 0.6 },
      { dimension: "detailOriented", weight: 0.4 },
    ],
  },
  {
    id: "tc-6",
    sectionId: "technical",
    text: "I would enjoy building tools or systems that other people use.",
    type: "likert",
    dimensionMapping: [
      { dimension: "technical", weight: 0.8 },
      { dimension: "creative", weight: 0.4 },
      { dimension: "social", weight: 0.3 },
    ],
  },

  // ─── Risk & Ambiguity ─────────────────────────────────────────────────────
  {
    id: "ra-1",
    sectionId: "risk-ambiguity",
    text: "I'm comfortable starting a project where the requirements are unclear.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.9 },
      { dimension: "autonomous", weight: 0.5 },
      { dimension: "structured", weight: -0.4 },
    ],
  },
  {
    id: "ra-2",
    sectionId: "risk-ambiguity",
    text: "I would consider joining or starting a startup, despite the risk of failure.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 1.0 },
      { dimension: "commercial", weight: 0.5 },
      { dimension: "leadership", weight: 0.4 },
    ],
  },
  {
    id: "ra-3",
    sectionId: "risk-ambiguity",
    text: "I prefer taking a higher-risk, higher-reward career path over a stable, predictable one.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.9 },
      { dimension: "commercial", weight: 0.4 },
    ],
  },
  {
    id: "ra-4",
    sectionId: "risk-ambiguity",
    text: "I feel anxious when I don't know exactly what's expected of me at work.",
    type: "likert",
    reversed: true,
    dimensionMapping: [
      { dimension: "riskTolerant", weight: -0.9 },
      { dimension: "structured", weight: 0.5 },
    ],
  },
  {
    id: "ra-5",
    sectionId: "risk-ambiguity",
    text: "I'm excited by new, unproven ideas even when the path to success is unclear.",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.8 },
      { dimension: "creative", weight: 0.5 },
      { dimension: "analytical", weight: -0.2 },
    ],
  },
  {
    id: "ra-6",
    sectionId: "risk-ambiguity",
    text: "I find it more comfortable to work within established guidelines than to create new ones.",
    type: "likert",
    reversed: true,
    dimensionMapping: [
      { dimension: "riskTolerant", weight: -0.7 },
      { dimension: "structured", weight: 0.7 },
      { dimension: "creative", weight: -0.3 },
    ],
  },

  // ─── Leadership & Autonomy ────────────────────────────────────────────────
  {
    id: "la-1",
    sectionId: "leadership",
    text: "I enjoy being the person who drives decisions and coordinates a group.",
    type: "likert",
    dimensionMapping: [
      { dimension: "leadership", weight: 1.0 },
      { dimension: "social", weight: 0.4 },
      { dimension: "communication", weight: 0.4 },
    ],
  },
  {
    id: "la-2",
    sectionId: "leadership",
    text: "I prefer being a deep technical specialist over becoming a generalist manager.",
    type: "likert",
    dimensionMapping: [
      { dimension: "technical", weight: 0.6 },
      { dimension: "autonomous", weight: 0.5 },
      { dimension: "leadership", weight: -0.5 },
    ],
  },
  {
    id: "la-3",
    sectionId: "leadership",
    text: "I'm comfortable taking ownership of outcomes even when I don't have direct control.",
    type: "likert",
    dimensionMapping: [
      { dimension: "leadership", weight: 0.8 },
      { dimension: "riskTolerant", weight: 0.5 },
      { dimension: "pressureTolerant", weight: 0.4 },
    ],
  },
  {
    id: "la-4",
    sectionId: "leadership",
    text: "I work best when I have significant autonomy and minimal micromanagement.",
    type: "likert",
    dimensionMapping: [
      { dimension: "autonomous", weight: 1.0 },
      { dimension: "riskTolerant", weight: 0.3 },
    ],
  },
  {
    id: "la-5",
    sectionId: "leadership",
    text: "I would enjoy building and managing a team more than contributing individually.",
    type: "likert",
    dimensionMapping: [
      { dimension: "leadership", weight: 1.0 },
      { dimension: "social", weight: 0.5 },
      { dimension: "communication", weight: 0.4 },
    ],
  },
  {
    id: "la-6",
    sectionId: "leadership",
    text: "I feel comfortable challenging authority or pushing back when I disagree.",
    type: "likert",
    dimensionMapping: [
      { dimension: "autonomous", weight: 0.6 },
      { dimension: "leadership", weight: 0.5 },
      { dimension: "riskTolerant", weight: 0.4 },
    ],
  },

  // ─── Values & Priorities ──────────────────────────────────────────────────
  {
    id: "vp-1",
    sectionId: "values",
    text: "Earning a high salary is one of my primary motivations for career choices.",
    type: "likert",
    dimensionMapping: [
      { dimension: "commercial", weight: 0.8 },
      { dimension: "pressureTolerant", weight: 0.3 },
    ],
  },
  {
    id: "vp-2",
    sectionId: "values",
    text: "Making a tangible impact on society or people's lives matters more to me than compensation.",
    type: "likert",
    dimensionMapping: [
      { dimension: "social", weight: 0.6 },
      { dimension: "commercial", weight: -0.3 },
    ],
  },
  {
    id: "vp-3",
    sectionId: "values",
    text: "I want my work to involve solving problems that require real intellectual depth.",
    type: "likert",
    dimensionMapping: [
      { dimension: "analytical", weight: 0.7 },
      { dimension: "technical", weight: 0.4 },
      { dimension: "autonomous", weight: 0.3 },
    ],
  },
  {
    id: "vp-4",
    sectionId: "values",
    text: "I value work-life balance above career progression speed.",
    type: "likert",
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: -0.6 },
      { dimension: "riskTolerant", weight: -0.3 },
    ],
  },
  {
    id: "vp-5",
    sectionId: "values",
    text: "I'm motivated by building things — products, systems, teams — from the ground up.",
    type: "likert",
    dimensionMapping: [
      { dimension: "creative", weight: 0.5 },
      { dimension: "riskTolerant", weight: 0.5 },
      { dimension: "leadership", weight: 0.4 },
      { dimension: "technical", weight: 0.3 },
    ],
  },
  {
    id: "vp-6",
    sectionId: "values",
    text: "I care about being recognized as an expert in my field, not just as a high performer.",
    type: "likert",
    dimensionMapping: [
      { dimension: "autonomous", weight: 0.6 },
      { dimension: "technical", weight: 0.4 },
      { dimension: "leadership", weight: -0.2 },
    ],
  },

  // ─── Pressure & Pace ──────────────────────────────────────────────────────
  {
    id: "pp-1",
    sectionId: "pressure",
    text: "I perform well under tight deadlines — pressure motivates rather than paralyses me.",
    type: "likert",
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: 1.0 },
      { dimension: "riskTolerant", weight: 0.3 },
    ],
  },
  {
    id: "pp-2",
    sectionId: "pressure",
    text: "I'm comfortable with roles where my performance is highly visible and measured.",
    type: "likert",
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: 0.8 },
      { dimension: "commercial", weight: 0.4 },
      { dimension: "leadership", weight: 0.3 },
    ],
  },
  {
    id: "pp-3",
    sectionId: "pressure",
    text: "I'd rather have a more stable, predictable work environment than a fast, chaotic one.",
    type: "likert",
    reversed: true,
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: -0.8 },
      { dimension: "riskTolerant", weight: -0.5 },
      { dimension: "structured", weight: 0.5 },
    ],
  },
  {
    id: "pp-4",
    sectionId: "pressure",
    text: "I'm willing to work significantly more than 8 hours a day to advance my career.",
    type: "likert",
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: 0.7 },
      { dimension: "commercial", weight: 0.3 },
    ],
  },
  {
    id: "pp-5",
    sectionId: "pressure",
    text: "I stay calm and focused when things go wrong in high-stakes situations.",
    type: "likert",
    dimensionMapping: [
      { dimension: "pressureTolerant", weight: 0.9 },
      { dimension: "leadership", weight: 0.4 },
    ],
  },
  {
    id: "pp-6",
    sectionId: "pressure",
    text: "I'm comfortable with roles that have variable income (commissions, bonuses, equity).",
    type: "likert",
    dimensionMapping: [
      { dimension: "riskTolerant", weight: 0.7 },
      { dimension: "commercial", weight: 0.6 },
      { dimension: "pressureTolerant", weight: 0.4 },
    ],
  },
];

export const getQuestionsBySection = (sectionId: string): AssessmentQuestion[] =>
  ASSESSMENT_QUESTIONS.filter((q) => q.sectionId === sectionId);

export const getQuestionById = (id: string): AssessmentQuestion | undefined =>
  ASSESSMENT_QUESTIONS.find((q) => q.id === id);

export const TOTAL_QUESTIONS = ASSESSMENT_QUESTIONS.length;
