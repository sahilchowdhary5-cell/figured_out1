import type {
  AssessmentResults,
  AssessmentQuestion,
  DimensionScore,
  DimensionKey,
  RoleRecommendation,
  DimensionFit,
} from "@/lib/types";
import { ASSESSMENT_QUESTIONS } from "@/lib/data/questions";
import { ROLES } from "@/lib/data/roles";
import { DIMENSION_META } from "@/lib/scoring/dimensions";

// ─── Core Scoring ────────────────────────────────────────────────────────────

export function computeDimensionScores(
  responses: Record<string, number>
): DimensionScore[] {
  const dimensionTotals: Record<DimensionKey, { weighted: number; totalWeight: number }> =
    {} as Record<DimensionKey, { weighted: number; totalWeight: number }>;

  // Initialize all dimensions
  (Object.keys(DIMENSION_META) as DimensionKey[]).forEach((d) => {
    dimensionTotals[d] = { weighted: 0, totalWeight: 0 };
  });

  ASSESSMENT_QUESTIONS.forEach((question: AssessmentQuestion) => {
    const rawValue = responses[question.id];
    if (rawValue === undefined) return;

    // Normalize to 0–1 range (1→0, 5→1)
    const normalizedValue = (rawValue - 1) / 4;

    question.dimensionMapping.forEach(({ dimension, weight }) => {
      const effectiveWeight = Math.abs(weight);
      const contribution =
        weight > 0
          ? normalizedValue * effectiveWeight
          : (1 - normalizedValue) * effectiveWeight;

      dimensionTotals[dimension].weighted += contribution;
      dimensionTotals[dimension].totalWeight += effectiveWeight;
    });
  });

  return (Object.keys(DIMENSION_META) as DimensionKey[]).map((d) => {
    const meta = DIMENSION_META[d];
    const { weighted, totalWeight } = dimensionTotals[d];
    const score =
      totalWeight > 0 ? Math.round((weighted / totalWeight) * 100) : 50;
    return {
      dimension: d,
      score: Math.min(100, Math.max(0, score)),
      label: meta.label,
      description: meta.description,
      icon: meta.icon,
    };
  });
}

// ─── Role Matching ───────────────────────────────────────────────────────────

export function computeRoleRecommendations(
  dimensionScores: DimensionScore[]
): RoleRecommendation[] {
  const scoreMap = Object.fromEntries(
    dimensionScores.map((ds) => [ds.dimension, ds.score])
  ) as Record<DimensionKey, number>;

  const roleScores = ROLES.map((role) => {
    const { matchScore, dimensionFits } = computeRoleMatchScore(
      scoreMap,
      role.dimensionRequirements
    );

    const { matchReasons, cautionAreas } = generateRoleNarrative(
      role.id,
      scoreMap,
      role.dimensionRequirements
    );

    const confidenceLevel =
      matchScore >= 75 ? "High" : matchScore >= 55 ? "Medium" : "Low";

    return {
      roleId: role.id,
      matchScore,
      confidenceLevel: confidenceLevel as "High" | "Medium" | "Low",
      matchReasons,
      cautionAreas,
      dimensionFits,
    } satisfies RoleRecommendation;
  });

  // Sort by match score, return top 5
  return roleScores
    .sort((a, b) => b.matchScore - a.matchScore)
    .slice(0, 5);
}

function computeRoleMatchScore(
  userScores: Record<DimensionKey, number>,
  requirements: Record<DimensionKey, number>
): { matchScore: number; dimensionFits: DimensionFit[] } {
  const dimensions = Object.keys(requirements) as DimensionKey[];
  let totalWeight = 0;
  let totalScore = 0;
  const fits: DimensionFit[] = [];

  dimensions.forEach((dim) => {
    const required = requirements[dim];
    const userScore = userScores[dim] ?? 50;

    // Weight by importance — dimensions required at 70+ are critical
    const importanceWeight = required >= 70 ? 2.0 : required >= 50 ? 1.5 : 0.8;

    // Closeness formula: penalize gaps more than surpluses
    const gap = required - userScore;
    let alignmentScore: number;
    if (gap <= 0) {
      // User meets or exceeds requirement — small bonus for close match
      alignmentScore = 100 - Math.min(15, Math.abs(gap) * 0.3);
    } else if (gap <= 15) {
      alignmentScore = 85 - gap * 1.5;
    } else if (gap <= 30) {
      alignmentScore = 62 - (gap - 15) * 1.0;
    } else {
      alignmentScore = Math.max(10, 47 - (gap - 30) * 0.8);
    }

    const fit: "Strong" | "Good" | "Partial" | "Weak" =
      gap <= 5
        ? "Strong"
        : gap <= 15
        ? "Good"
        : gap <= 30
        ? "Partial"
        : "Weak";

    const dimMeta = DIMENSION_META[dim];
    fits.push({
      dimension: dim,
      fit,
      note: generateFitNote(dim, userScore, required, fit),
    });

    totalScore += alignmentScore * importanceWeight;
    totalWeight += 100 * importanceWeight;
  });

  const rawScore = (totalScore / totalWeight) * 100;
  const matchScore = Math.round(Math.min(99, Math.max(20, rawScore)));

  return { matchScore, dimensionFits: fits };
}

function generateFitNote(
  dim: DimensionKey,
  userScore: number,
  required: number,
  fit: "Strong" | "Good" | "Partial" | "Weak"
): string {
  const meta = DIMENSION_META[dim];
  const gap = required - userScore;
  if (fit === "Strong") return `Your ${meta.label.toLowerCase()} score is well-aligned.`;
  if (fit === "Good") return `Your ${meta.label.toLowerCase()} is a good match for this role.`;
  if (fit === "Partial") return `${meta.label} is somewhat below what this role typically needs.`;
  return `${meta.label} is a potential gap — this role demands significantly more of this quality.`;
}

function generateRoleNarrative(
  roleId: string,
  userScores: Record<DimensionKey, number>,
  requirements: Record<DimensionKey, number>
): { matchReasons: string[]; cautionAreas: string[] } {
  const matchReasons: string[] = [];
  const cautionAreas: string[] = [];

  const roleNarrativeMap: Record<
    string,
    {
      reasons: Array<{ dim: DimensionKey; threshold: number; text: string }>;
      cautions: Array<{ dim: DimensionKey; threshold: number; text: string }>;
    }
  > = {
    "product-manager": {
      reasons: [
        { dim: "social", threshold: 60, text: "Strong collaboration instinct — PMs are team connectors" },
        { dim: "analytical", threshold: 65, text: "Data-driven mindset matches PM decision-making" },
        { dim: "communication", threshold: 70, text: "Communication strength is core to influencing without authority" },
        { dim: "commercial", threshold: 55, text: "Business awareness aligns well with product-market thinking" },
      ],
      cautions: [
        { dim: "structured", threshold: 40, text: "PMs deal with heavy ambiguity — strong structure preference may cause friction" },
        { dim: "autonomous", threshold: 70, text: "PM work is deeply interdependent — high autonomy preference may feel limiting" },
      ],
    },
    "software-engineer": {
      reasons: [
        { dim: "technical", threshold: 70, text: "Strong technical affinity — the foundation of engineering" },
        { dim: "analytical", threshold: 70, text: "Problem-solving mindset matches the debugging and design demands" },
        { dim: "detailOriented", threshold: 65, text: "Attention to detail is critical for writing reliable, production-grade code" },
      ],
      cautions: [
        { dim: "technical", threshold: 50, text: "Technical comfort score is lower than this role typically needs" },
        { dim: "social", threshold: 70, text: "Engineering can be isolating — high social energy may feel underused" },
      ],
    },
    "data-analyst": {
      reasons: [
        { dim: "analytical", threshold: 75, text: "Strong analytical orientation is at the core of this role" },
        { dim: "detailOriented", threshold: 65, text: "Precision mindset suits data work well" },
        { dim: "technical", threshold: 65, text: "Technical comfort facilitates SQL and tools mastery" },
      ],
      cautions: [
        { dim: "creative", threshold: 70, text: "The creative dimension is underutilized in most analytics roles" },
      ],
    },
    "management-consultant": {
      reasons: [
        { dim: "communication", threshold: 70, text: "Executive-level communication is essential in consulting" },
        { dim: "analytical", threshold: 75, text: "Structured problem-solving is the core consulting skill" },
        { dim: "pressureTolerant", threshold: 65, text: "High pressure tolerance matches the intensity of consulting life" },
        { dim: "commercial", threshold: 70, text: "Business acumen aligns with client-facing strategy work" },
      ],
      cautions: [
        { dim: "pressureTolerant", threshold: 60, text: "Consulting is grueling — low pressure tolerance is a significant risk factor" },
        { dim: "structured", threshold: 80, text: "Consulting requires both structure AND creative insight — strong rigidity can limit impact" },
      ],
    },
    "investment-banking-analyst": {
      reasons: [
        { dim: "pressureTolerant", threshold: 75, text: "IB demands exceptional resilience under extreme conditions" },
        { dim: "detailOriented", threshold: 80, text: "Precision in financial models is non-negotiable in banking" },
        { dim: "commercial", threshold: 80, text: "Deep commercial drive aligns with IB's deal-focused culture" },
      ],
      cautions: [
        { dim: "pressureTolerant", threshold: 65, text: "IB hours and pressure are notorious — low tolerance is a serious red flag" },
        { dim: "creative", threshold: 75, text: "IB is highly structured and process-driven — strong creative needs may go unmet" },
      ],
    },
    "ux-designer": {
      reasons: [
        { dim: "creative", threshold: 70, text: "Creative orientation is fundamental to design work" },
        { dim: "social", threshold: 60, text: "User empathy and collaboration are central to UX" },
        { dim: "communication", threshold: 65, text: "Presenting and defending design decisions requires strong communication" },
      ],
      cautions: [
        { dim: "analytical", threshold: 80, text: "Strong analytical orientation may find UX less quantitatively satisfying" },
      ],
    },
  };

  const roleNarrative = roleNarrativeMap[roleId];
  if (roleNarrative) {
    roleNarrative.reasons.forEach(({ dim, threshold, text }) => {
      if ((userScores[dim] ?? 50) >= threshold) {
        matchReasons.push(text);
      }
    });
    roleNarrative.cautions.forEach(({ dim, threshold, text }) => {
      const condition =
        threshold > 60
          ? (userScores[dim] ?? 50) >= threshold
          : (userScores[dim] ?? 50) < threshold;
      if (condition) {
        cautionAreas.push(text);
      }
    });
  }

  // Add generic reasons if needed
  if (matchReasons.length === 0) {
    const topFit = (Object.keys(requirements) as DimensionKey[])
      .filter((d) => requirements[d] >= 70 && (userScores[d] ?? 50) >= 65)
      .slice(0, 2);
    topFit.forEach((d) =>
      matchReasons.push(
        `Your ${DIMENSION_META[d].label.toLowerCase()} profile aligns with key role requirements`
      )
    );
    if (matchReasons.length === 0) {
      matchReasons.push("Your profile shows meaningful alignment with this career path");
    }
  }

  return { matchReasons, cautionAreas };
}

// ─── Strength Profile ─────────────────────────────────────────────────────────

export function generateStrengthProfile(
  dimensionScores: DimensionScore[]
): { strengthProfile: string[]; growthAreas: string[] } {
  const sorted = [...dimensionScores].sort((a, b) => b.score - a.score);
  const top = sorted.slice(0, 4).filter((d) => d.score >= 60);
  const low = sorted.slice(-3).filter((d) => d.score < 50);

  const strengthMap: Record<DimensionKey, string> = {
    analytical: "Analytical & evidence-driven thinker",
    creative: "Creative & ideation-forward",
    social: "Strong collaboration and empathy",
    structured: "Process-oriented and organized",
    autonomous: "Independent and self-directed",
    riskTolerant: "Comfort with uncertainty and risk",
    leadership: "Natural leadership and ownership drive",
    technical: "Technical aptitude and systems thinking",
    communication: "Exceptional communicator",
    commercial: "Business and commercial instinct",
    detailOriented: "Precision and quality focus",
    pressureTolerant: "Performs well under pressure",
  };

  const growthMap: Record<DimensionKey, string> = {
    analytical: "Building data and evidence-based thinking",
    creative: "Developing creative and lateral thinking",
    social: "Growing collaborative and interpersonal skills",
    structured: "Strengthening process and organizational skills",
    autonomous: "Developing independence and initiative",
    riskTolerant: "Building comfort with ambiguity",
    leadership: "Developing leadership and ownership mindset",
    technical: "Building technical and systems literacy",
    communication: "Strengthening communication and influence",
    commercial: "Developing business and commercial thinking",
    detailOriented: "Building precision and quality discipline",
    pressureTolerant: "Growing resilience in high-pressure situations",
  };

  return {
    strengthProfile: top.map((d) => strengthMap[d.dimension]),
    growthAreas: low.map((d) => growthMap[d.dimension]),
  };
}

// ─── Main Entry Point ─────────────────────────────────────────────────────────

export function runAssessment(
  responses: Record<string, number>
): AssessmentResults {
  const dimensionScores = computeDimensionScores(responses);
  const recommendations = computeRoleRecommendations(dimensionScores);
  const { strengthProfile, growthAreas } =
    generateStrengthProfile(dimensionScores);

  return {
    dimensionScores,
    recommendations,
    strengthProfile,
    growthAreas,
    completedAt: new Date().toISOString(),
  };
}
