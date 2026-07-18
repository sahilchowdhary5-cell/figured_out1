import type { DimensionKey } from "@/lib/types";

interface DimensionMeta {
  label: string;
  description: string;
  icon: string;
  highLabel: string;
  lowLabel: string;
  color: string;
}

export const DIMENSION_META: Record<DimensionKey, DimensionMeta> = {
  analytical: {
    label: "Analytical",
    description: "Comfort with data, logic, and evidence-based reasoning",
    icon: "🔍",
    highLabel: "Evidence-driven & data-oriented",
    lowLabel: "Instinct-driven & intuitive",
    color: "blue",
  },
  creative: {
    label: "Creative",
    description: "Affinity for open-ended problems, ideation, and innovation",
    icon: "✨",
    highLabel: "Creative & ideation-forward",
    lowLabel: "Structured & solution-focused",
    color: "purple",
  },
  social: {
    label: "Social Energy",
    description: "Preference for collaboration, people interaction, and empathy",
    icon: "🤝",
    highLabel: "Collaborative & people-centric",
    lowLabel: "Independent & task-focused",
    color: "pink",
  },
  structured: {
    label: "Structure",
    description: "Preference for processes, clarity, and defined frameworks",
    icon: "📐",
    highLabel: "Process & structure-oriented",
    lowLabel: "Flexible & improvisation-ready",
    color: "slate",
  },
  autonomous: {
    label: "Autonomy Drive",
    description: "Preference for working independently with minimal direction",
    icon: "🦅",
    highLabel: "Independent & self-directed",
    lowLabel: "Collaborative & team-reliant",
    color: "amber",
  },
  riskTolerant: {
    label: "Risk Appetite",
    description: "Comfort with uncertainty, ambiguity, and high-stakes decisions",
    icon: "🎲",
    highLabel: "Risk-embracing & bold",
    lowLabel: "Risk-averse & cautious",
    color: "orange",
  },
  leadership: {
    label: "Leadership Drive",
    description: "Desire to guide, influence, and take ownership of outcomes",
    icon: "🌟",
    highLabel: "Leader & ownership-driven",
    lowLabel: "Specialist & contributor-focused",
    color: "yellow",
  },
  technical: {
    label: "Technical Affinity",
    description: "Comfort with technology, data tools, and systems thinking",
    icon: "⚡",
    highLabel: "Technical & systems-oriented",
    lowLabel: "Non-technical & people-oriented",
    color: "cyan",
  },
  communication: {
    label: "Communication",
    description: "Skill and comfort with verbal, written, and presentation contexts",
    icon: "💬",
    highLabel: "Persuasive & articulate communicator",
    lowLabel: "Precise & written-focused",
    color: "indigo",
  },
  commercial: {
    label: "Commercial Instinct",
    description: "Interest in business models, markets, revenue, and growth",
    icon: "📈",
    highLabel: "Business-driven & market-aware",
    lowLabel: "Mission-driven & impact-focused",
    color: "emerald",
  },
  detailOriented: {
    label: "Detail Orientation",
    description: "Attention to precision, accuracy, and thoroughness",
    icon: "🎯",
    highLabel: "Precise & quality-obsessed",
    lowLabel: "Big-picture & macro-focused",
    color: "rose",
  },
  pressureTolerant: {
    label: "Pressure Tolerance",
    description: "Ability to perform under deadlines, stakes, and intensity",
    icon: "🔥",
    highLabel: "High-pressure resilient",
    lowLabel: "Balance & calm-environment seeker",
    color: "red",
  },
};
