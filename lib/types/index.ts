// ─── User Profile ───────────────────────────────────────────────────────────

export type UserStage =
  | "school_student"
  | "college_student"
  | "fresher"
  | "working_professional";

export interface UserProfile {
  name: string;
  email: string;
  college: string;
  degree: string;
  graduationYear: string;
  stage: UserStage;
  interests: string[];
  workStyle: string;
  priorities: string[];
  currentCity: string;
  targetCity: string;
  willingToRelocate: boolean;
  resumeFileName?: string;
}

// ─── Assessment ─────────────────────────────────────────────────────────────

export type QuestionType = "likert" | "mcq";

export interface QuestionDimensionMapping {
  dimension: DimensionKey;
  weight: number; // positive = agrees → higher score; negative = agrees → lower score
}

export interface AssessmentQuestion {
  id: string;
  sectionId: string;
  text: string;
  type: QuestionType;
  options?: string[];
  reversed?: boolean; // if true, scale is flipped
  dimensionMapping: QuestionDimensionMapping[];
}

export interface AssessmentSection {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  questionIds: string[];
}

export interface AssessmentResponse {
  questionId: string;
  value: number; // 1–5 for likert
}

// ─── Dimensions ─────────────────────────────────────────────────────────────

export type DimensionKey =
  | "analytical"
  | "creative"
  | "social"
  | "structured"
  | "autonomous"
  | "riskTolerant"
  | "leadership"
  | "technical"
  | "communication"
  | "commercial"
  | "detailOriented"
  | "pressureTolerant";

export interface DimensionScore {
  dimension: DimensionKey;
  score: number; // 0–100
  label: string;
  description: string;
  icon: string;
}

// ─── Recommendations ────────────────────────────────────────────────────────

export interface DimensionFit {
  dimension: DimensionKey;
  fit: "Strong" | "Good" | "Partial" | "Weak";
  note: string;
}

export interface RoleRecommendation {
  roleId: string;
  matchScore: number; // 0–100
  confidenceLevel: "High" | "Medium" | "Low";
  matchReasons: string[];
  cautionAreas: string[];
  dimensionFits: DimensionFit[];
}

export interface AssessmentResults {
  dimensionScores: DimensionScore[];
  recommendations: RoleRecommendation[]; // top 5
  strengthProfile: string[];
  growthAreas: string[];
  completedAt: string;
}

// ─── Role Detail ────────────────────────────────────────────────────────────

export type RoleFamily =
  | "Technology"
  | "Business"
  | "Design"
  | "Finance"
  | "Marketing"
  | "Operations"
  | "People"
  | "Strategy"
  | "Sales"
  | "Communications"
  | "Healthcare"
  | "Legal"
  | "Engineering"
  | "Government"
  | "Education"
  | "Entrepreneurship";

export interface DayInLife {
  morning: string;
  afternoon: string;
  evening: string;
}

export interface PressureProfile {
  level: "Low" | "Medium" | "High" | "Very High";
  description: string;
  peakPeriods: string[];
}

export interface LearningCurve {
  steepness: "Gentle" | "Moderate" | "Steep" | "Very Steep";
  description: string;
  firstYearFocus: string[];
}

export interface RoleMyth {
  myth: string;
  reality: string;
}

export interface StartupMncComparison {
  startup: string;
  mnc: string;
  gcc: string;
}

export interface RoleDetail {
  id: string;
  title: string;
  family: RoleFamily;
  tagline: string;
  summary: string;
  emoji: string;
  color: string; // tailwind color class for accent
  dayInLife: DayInLife;
  firstTwoYears: string;
  commonTasks: string[];
  keyTools: string[];
  stakeholders: string[];
  pressureProfile: PressureProfile;
  learningCurve: LearningCurve;
  expectedDeliverables: string[];
  myths: RoleMyth[];
  whoShouldAvoid: string;
  thriveProfile: string;
  riskFactors: string[];
  adjacentRoles: string[];
  idealIndustries: string[];
  startupVsMnc: StartupMncComparison;
  dimensionRequirements: Record<DimensionKey, number>; // 0–100
}

// ─── Market Intelligence ─────────────────────────────────────────────────────

export type GrowthTrajectory =
  | "Explosive"
  | "Strong"
  | "Steady"
  | "Flat"
  | "Declining";

export type SkillSaturation = "Very High" | "High" | "Medium" | "Low";
export type Opportunities = "Very High" | "High" | "Medium" | "Low";

export interface SalaryBand {
  stage: "entry" | "mid" | "senior" | "lead";
  label: string;
  minLPA: number;
  maxLPA: number;
  note?: string;
}

export interface CityVariation {
  city: string;
  demandIndex: number; // 0–10
  salaryMultiplier: number;
  opportunities: Opportunities;
}

export interface MarketIntelligence {
  roleId: string;
  demandScore: number; // 0–10
  futureViability: number; // 0–10
  aiResilienceScore: number; // 0–10
  competitionScore: number; // 0–10 (higher = more competition)
  barrierToEntry: number; // 0–10
  remoteFriendly: number; // 0–10
  salaryBands: SalaryBand[];
  cityVariation: CityVariation[];
  growthTrajectory: GrowthTrajectory;
  topHiringCompanies: string[];
  skillSaturation: SkillSaturation;
  trendNote: string;
  aiImpact: string;
}

// ─── Corporate Truths ────────────────────────────────────────────────────────

export type TruthSeverity = "High" | "Medium" | "Info";

export interface CorporateTruth {
  id: string;
  category: string;
  title: string;
  summary: string;
  details: string[];
  example?: string;
  applicableRoles?: string[];
  severity: TruthSeverity;
  icon: string;
}

// ─── Resume Analysis ─────────────────────────────────────────────────────────

export type SkillPriority = "Must Have" | "Good to Have";

export interface MissingSkill {
  skill: string;
  priority: SkillPriority;
  timeToLearn: string;
  resources: string[];
}

export interface RoleGap {
  roleId: string;
  currentFitScore: number; // 0–100
  missingSkills: MissingSkill[];
  upskillTimeline: string;
}

export interface ResumeAnalysis {
  skills: string[];
  tools: string[];
  experience: string[];
  projects: string[];
  education: string;
  strengthAreas: string[];
  estimatedProfile: string;
  roleGaps: RoleGap[];
  closestFitRole: string;
  bestLongTermRole: string;
}

// ─── Roadmap ─────────────────────────────────────────────────────────────────

export interface WeekPlan {
  week: string;
  focus: string;
  actions: string[];
}

export interface MonthPlan {
  month: string;
  focus: string;
  actions: string[];
}

export interface PortfolioProject {
  title: string;
  description: string;
  skills: string[];
  difficulty: "Easy" | "Medium" | "Hard";
}

export type ResourceType =
  | "Course"
  | "Certification"
  | "Book"
  | "Project"
  | "Community";

export interface LearningResource {
  resource: string;
  type: ResourceType;
  priority: "High" | "Medium" | "Low";
  estimatedTime: string;
}

export interface RoadmapItem {
  roleId: string;
  thirtyDayPlan: WeekPlan[];
  ninetyDayPlan: MonthPlan[];
  portfolioProjects: PortfolioProject[];
  learningPriority: LearningResource[];
  internshipStrategy: string;
  networkingStrategy: string;
  interviewPrepThemes: string[];
}

// ─── Feedback ────────────────────────────────────────────────────────────────

export type RoleRelevance =
  | "Very Relevant"
  | "Relevant"
  | "Somewhat"
  | "Not Relevant";

export type WillingnessToPay =
  | "Under ₹500"
  | "₹500–1000"
  | "₹1000–2000"
  | "₹2000+"
  | "No";

export interface FeedbackData {
  rating: number; // 1–5
  roleRelevance: RoleRelevance;
  interestInPremium: boolean;
  willingnessToPay: WillingnessToPay;
  mostUsefulFeature: string;
  wantReportEmail: boolean;
  comments?: string;
  email?: string;
}
