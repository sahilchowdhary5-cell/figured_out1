import { create } from "zustand";
import { persist } from "zustand/middleware";
import type {
  UserProfile,
  AssessmentResults,
  ResumeAnalysis,
  FeedbackData,
} from "@/lib/types";

const DATA_EXPIRY_DAYS = 90;

interface AppState {
  // Data
  userProfile: UserProfile | null;
  assessmentResponses: Record<string, number>;
  assessmentResults: AssessmentResults | null;
  resumeAnalysis: ResumeAnalysis | null;
  feedback: FeedbackData | null;
  selectedRoleId: string | null;
  compareRoleIds: string[];

  // Consent & retention
  dataConsentGiven: boolean;
  consentTimestamp: string | null;
  dataStoredAt: string | null;

  // Session isolation — prevents data leaking between different accounts
  currentUserId: string | null;

  // Actions
  setUserProfile: (profile: UserProfile) => void;
  setResponse: (questionId: string, value: number) => void;
  setAssessmentResults: (results: AssessmentResults) => void;
  setResumeAnalysis: (analysis: ResumeAnalysis | null) => void;
  setFeedback: (data: FeedbackData) => void;
  setSelectedRole: (roleId: string) => void;
  toggleCompareRole: (roleId: string) => void;
  clearCompare: () => void;
  resetAssessment: () => void;
  giveConsent: () => void;
  withdrawConsent: () => void;
  clearAllData: () => void;
  setCurrentUser: (userId: string) => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      userProfile: null,
      assessmentResponses: {},
      assessmentResults: null,
      resumeAnalysis: null,
      feedback: null,
      selectedRoleId: null,
      compareRoleIds: [],
      dataConsentGiven: false,
      consentTimestamp: null,
      dataStoredAt: null,
      currentUserId: null,

      setUserProfile: (profile) =>
        set({ userProfile: profile, dataStoredAt: new Date().toISOString() }),

      setResponse: (questionId, value) =>
        set((state) => ({
          assessmentResponses: {
            ...state.assessmentResponses,
            [questionId]: value,
          },
        })),

      setAssessmentResults: (results) => set({ assessmentResults: results }),

      setResumeAnalysis: (analysis) => set({ resumeAnalysis: analysis }),

      setFeedback: (data) => set({ feedback: data }),

      setSelectedRole: (roleId) => set({ selectedRoleId: roleId }),

      toggleCompareRole: (roleId) =>
        set((state) => {
          const current = state.compareRoleIds;
          if (current.includes(roleId)) {
            return { compareRoleIds: current.filter((id) => id !== roleId) };
          }
          if (current.length >= 3) {
            return { compareRoleIds: [...current.slice(1), roleId] };
          }
          return { compareRoleIds: [...current, roleId] };
        }),

      clearCompare: () => set({ compareRoleIds: [] }),

      resetAssessment: () =>
        set({ assessmentResponses: {}, assessmentResults: null }),

      giveConsent: () =>
        set({
          dataConsentGiven: true,
          consentTimestamp: new Date().toISOString(),
        }),

      withdrawConsent: () =>
        set({
          dataConsentGiven: false,
          consentTimestamp: null,
          userProfile: null,
          assessmentResponses: {},
          assessmentResults: null,
          resumeAnalysis: null,
          feedback: null,
          selectedRoleId: null,
          dataStoredAt: null,
        }),

      clearAllData: () =>
        set({
          userProfile: null,
          assessmentResponses: {},
          assessmentResults: null,
          resumeAnalysis: null,
          feedback: null,
          selectedRoleId: null,
          compareRoleIds: [],
          dataConsentGiven: false,
          consentTimestamp: null,
          dataStoredAt: null,
          currentUserId: null,
        }),

      setCurrentUser: (userId) => set({ currentUserId: userId }),
    }),
    {
      name: "careercompass-store",
      partialize: (state) => ({
        userProfile: state.userProfile,
        assessmentResponses: state.assessmentResponses,
        assessmentResults: state.assessmentResults,
        resumeAnalysis: state.resumeAnalysis,
        selectedRoleId: state.selectedRoleId,
        dataConsentGiven: state.dataConsentGiven,
        consentTimestamp: state.consentTimestamp,
        dataStoredAt: state.dataStoredAt,
        currentUserId: state.currentUserId,
      }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        // Expire personal data after DATA_EXPIRY_DAYS days
        if (state.dataStoredAt) {
          const storedAt = new Date(state.dataStoredAt).getTime();
          const expiryMs = DATA_EXPIRY_DAYS * 24 * 60 * 60 * 1000;
          if (Date.now() - storedAt > expiryMs) {
            state.userProfile = null;
            state.assessmentResponses = {};
            state.assessmentResults = null;
            state.resumeAnalysis = null;
            state.dataStoredAt = null;
          }
        }
      },
    }
  )
);
