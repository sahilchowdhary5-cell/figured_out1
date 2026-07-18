"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import { useAppStore } from "@/lib/store/appStore";
import { ASSESSMENT_SECTIONS, ASSESSMENT_QUESTIONS, TOTAL_QUESTIONS } from "@/lib/data/questions";
import { runAssessment } from "@/lib/scoring/engine";
import { cn } from "@/lib/utils";

const LIKERT_OPTIONS = [
  { value: 1, label: "Strongly Disagree" },
  { value: 2, label: "Disagree" },
  { value: 3, label: "Neutral" },
  { value: 4, label: "Agree" },
  { value: 5, label: "Strongly Agree" },
];

export default function AssessmentPage() {
  const router = useRouter();
  const { assessmentResponses, setResponse, setAssessmentResults } = useAppStore();
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [currentQuestionInSection, setCurrentQuestionInSection] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentSection = ASSESSMENT_SECTIONS[currentSectionIndex];
  const sectionQuestions = ASSESSMENT_QUESTIONS.filter(
    (q) => q.sectionId === currentSection.id
  );
  const currentQuestion = sectionQuestions[currentQuestionInSection];

  const answeredCount = Object.keys(assessmentResponses).length;
  const progressPercent = Math.round((answeredCount / TOTAL_QUESTIONS) * 100);

  const globalQuestionIndex = ASSESSMENT_SECTIONS.slice(0, currentSectionIndex).reduce(
    (sum, s) => sum + ASSESSMENT_QUESTIONS.filter((q) => q.sectionId === s.id).length,
    0
  ) + currentQuestionInSection;

  const handleAnswer = useCallback(
    (value: number) => {
      setResponse(currentQuestion.id, value);

      const isLastInSection = currentQuestionInSection === sectionQuestions.length - 1;
      const isLastSection = currentSectionIndex === ASSESSMENT_SECTIONS.length - 1;

      if (isLastInSection && isLastSection) {
        return;
      }

      if (isLastInSection) {
        setCurrentSectionIndex((s) => s + 1);
        setCurrentQuestionInSection(0);
      } else {
        setCurrentQuestionInSection((q) => q + 1);
      }
    },
    [currentQuestion.id, currentQuestionInSection, currentSectionIndex, sectionQuestions.length, setResponse]
  );

  const handleBack = () => {
    if (currentQuestionInSection > 0) {
      setCurrentQuestionInSection((q) => q - 1);
    } else if (currentSectionIndex > 0) {
      const prevSection = ASSESSMENT_SECTIONS[currentSectionIndex - 1];
      const prevSectionQs = ASSESSMENT_QUESTIONS.filter((q) => q.sectionId === prevSection.id);
      setCurrentSectionIndex((s) => s - 1);
      setCurrentQuestionInSection(prevSectionQs.length - 1);
    }
  };

  const isLastQuestion =
    currentSectionIndex === ASSESSMENT_SECTIONS.length - 1 &&
    currentQuestionInSection === sectionQuestions.length - 1;

  const isAssessmentComplete = answeredCount === TOTAL_QUESTIONS;

  const handleSubmit = () => {
    if (!isAssessmentComplete) return;
    setIsSubmitting(true);
    setTimeout(() => {
      const results = runAssessment(assessmentResponses);
      setAssessmentResults(results);
      router.push("/results");
    }, 800);
  };

  const currentResponse = assessmentResponses[currentQuestion.id];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* Progress bar */}
      <div className="sticky top-14 z-40 border-b border-border/60 bg-background/95 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-3 flex items-center gap-4">
            <Progress value={progressPercent} className="flex-1 h-1.5" />
            <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
              {answeredCount}/{TOTAL_QUESTIONS}
            </span>
          </div>
          {/* Section pills */}
          <div className="flex gap-1 pb-2 overflow-x-auto scrollbar-hide">
            {ASSESSMENT_SECTIONS.map((section, i) => {
              const sectionQs = ASSESSMENT_QUESTIONS.filter((q) => q.sectionId === section.id);
              const answeredInSection = sectionQs.filter((q) => assessmentResponses[q.id] !== undefined).length;
              const isComplete = answeredInSection === sectionQs.length;
              const isCurrent = i === currentSectionIndex;
              return (
                <div
                  key={section.id}
                  className={cn(
                    "flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium whitespace-nowrap transition-colors flex-shrink-0",
                    isCurrent
                      ? "bg-primary text-primary-foreground"
                      : isComplete
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {isComplete && <CheckCircle2 className="h-3 w-3" />}
                  <span>{section.icon}</span>
                  <span>{section.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Section header */}
          <div className="mb-8 text-center">
            <span className="text-3xl mb-2 block">{currentSection.icon}</span>
            <Badge variant="secondary" className="mb-2">
              Section {currentSectionIndex + 1} of {ASSESSMENT_SECTIONS.length}
            </Badge>
            <h2 className="text-xl font-bold text-foreground">{currentSection.title}</h2>
            <p className="text-sm text-muted-foreground mt-1">{currentSection.subtitle}</p>
          </div>

          {/* Question */}
          <div className="rounded-2xl border border-border bg-card shadow-sm p-8">
            <div className="mb-2 flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-medium">
                Question {currentQuestionInSection + 1} of {sectionQuestions.length}
              </span>
              <span className="text-xs text-muted-foreground">
                #{globalQuestionIndex + 1} overall
              </span>
            </div>

            <p className="text-lg font-medium text-foreground leading-relaxed mb-8">
              {currentQuestion.text}
            </p>

            {/* Likert scale */}
            <div className="space-y-2">
              {LIKERT_OPTIONS.map((option) => {
                const isSelected = currentResponse === option.value;
                return (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className={cn(
                      "w-full flex items-center gap-4 rounded-xl border p-4 text-left transition-all hover:border-primary/40",
                      isSelected
                        ? "border-primary bg-primary/5 ring-1 ring-primary/20"
                        : "border-border hover:bg-muted/30"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 items-center justify-center rounded-full border-2 text-sm font-semibold flex-shrink-0 transition-colors",
                        isSelected
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted-foreground/30 text-muted-foreground"
                      )}
                    >
                      {option.value}
                    </div>
                    <span
                      className={cn(
                        "text-sm font-medium",
                        isSelected ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {option.label}
                    </span>
                    {isSelected && (
                      <CheckCircle2 className="ml-auto h-4 w-4 text-primary flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={currentSectionIndex === 0 && currentQuestionInSection === 0}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>

            {isLastQuestion && currentResponse !== undefined ? (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || !isAssessmentComplete}
                className="gap-2"
              >
                {isSubmitting ? "Calculating..." : "See My Results"}
                {!isSubmitting && <ArrowRight className="h-4 w-4" />}
              </Button>
            ) : (
              <Button
                onClick={() => currentResponse !== undefined && handleAnswer(currentResponse)}
                disabled={currentResponse === undefined}
                variant="outline"
                className="gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            )}
          </div>

          {/* Help text */}
          <p className="text-center text-xs text-muted-foreground mt-4">
            Answer honestly — there are no right or wrong answers.
            Selecting a response automatically advances to the next question.
          </p>
        </div>
      </div>
    </div>
  );
}
