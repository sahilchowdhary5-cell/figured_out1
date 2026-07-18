"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Upload, FileText, CheckCircle2, AlertCircle, ChevronRight,
  TrendingUp, Clock, BookOpen, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { generateMockResumeAnalysis } from "@/lib/data/resumeMock";
import { getRoleById } from "@/lib/data/roles";
import { cn } from "@/lib/utils";

export default function ResumePage() {
  const { assessmentResults, resumeAnalysis, setResumeAnalysis } = useAppStore();
  const [file, setFile] = useState<File | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [activeRoleId, setActiveRoleId] = useState<string | null>(null);

  const topRoleIds = assessmentResults?.recommendations.map((r) => r.roleId) ?? [
    "software-engineer",
    "product-manager",
    "data-analyst",
    "data-scientist",
    "management-consultant",
  ];

  const handleUpload = (f: File) => {
    setFile(f);
  };

  const handleAnalyze = () => {
    if (!file && !resumeAnalysis) {
      const mockAnalysis = generateMockResumeAnalysis(topRoleIds, "sample-resume.pdf");
      setResumeAnalysis(mockAnalysis);
      setActiveRoleId(topRoleIds[0] ?? null);
      return;
    }
    setIsAnalyzing(true);
    setTimeout(() => {
      const analysis = generateMockResumeAnalysis(topRoleIds, file?.name ?? "resume.pdf");
      setResumeAnalysis(analysis);
      setActiveRoleId(topRoleIds[0] ?? null);
      setIsAnalyzing(false);
    }, 1500);
  };

  const activeGap = resumeAnalysis?.roleGaps.find((g) => g.roleId === activeRoleId);
  const activeRole = activeRoleId ? getRoleById(activeRoleId) : null;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Resume Gap Analysis</h1>
          <p className="text-muted-foreground">
            Upload your resume to see how it stacks up against your top career matches.
          </p>
        </div>

        {/* Upload zone */}
        {!resumeAnalysis && (
          <div className="max-w-2xl mx-auto">
            <label
              className={cn(
                "flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed p-12 cursor-pointer text-center transition-all",
                file ? "border-primary/60 bg-primary/5" : "border-border hover:border-primary/40 hover:bg-muted/30"
              )}
            >
              {file ? (
                <>
                  <FileText className="h-12 w-12 text-primary" />
                  <div>
                    <p className="font-semibold text-foreground">{file.name}</p>
                    <p className="text-sm text-muted-foreground">{(file.size / 1024).toFixed(0)} KB</p>
                  </div>
                </>
              ) : (
                <>
                  <Upload className="h-12 w-12 text-muted-foreground" />
                  <div>
                    <p className="font-semibold text-foreground text-lg">Drop your resume here</p>
                    <p className="text-sm text-muted-foreground mt-1">PDF or DOCX, max 5MB</p>
                  </div>
                </>
              )}
              <input
                type="file"
                accept=".pdf,.docx"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleUpload(e.target.files[0])}
              />
            </label>

            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="gap-2"
              >
                {isAnalyzing ? (
                  <>
                    <Sparkles className="h-4 w-4 animate-spin" />
                    Analyzing Resume...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    {file ? "Analyze My Resume" : "Try Demo Analysis"}
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground self-center">
                No file? Try our demo analysis on a sample profile.
              </p>
            </div>
          </div>
        )}

        {/* Analysis Results */}
        {resumeAnalysis && (
          <div className="space-y-8">
            {/* Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                  Profile Snapshot
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {resumeAnalysis.estimatedProfile}
                </p>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
                <p className="text-xs font-semibold text-emerald-700 uppercase tracking-wide mb-3">
                  Detected Skills
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.skills.map((s) => (
                    <Badge key={s} variant="secondary" className="text-xs bg-emerald-100 text-emerald-700">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-5">
                <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-3">
                  Detected Tools
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {resumeAnalysis.tools.map((t) => (
                    <Badge key={t} variant="secondary" className="text-xs bg-blue-100 text-blue-700">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* Best fit highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-primary/30 bg-primary/5 p-5">
                <p className="text-xs font-semibold text-primary uppercase tracking-wide mb-2">
                  Closest Fit Today
                </p>
                {(() => {
                  const role = getRoleById(resumeAnalysis.closestFitRole);
                  return role ? (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{role.emoji}</span>
                      <div>
                        <p className="font-semibold">{role.title}</p>
                        <p className="text-xs text-muted-foreground">{role.tagline}</p>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
              <div className="rounded-xl border border-violet-200 bg-violet-50 p-5">
                <p className="text-xs font-semibold text-violet-700 uppercase tracking-wide mb-2">
                  Best Long-Term Fit (After Upskilling)
                </p>
                {(() => {
                  const role = getRoleById(resumeAnalysis.bestLongTermRole);
                  return role ? (
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{role.emoji}</span>
                      <div>
                        <p className="font-semibold">{role.title}</p>
                        <p className="text-xs text-muted-foreground">{role.tagline}</p>
                      </div>
                    </div>
                  ) : null;
                })()}
              </div>
            </div>

            {/* Role gap tabs */}
            <div>
              <h2 className="text-lg font-semibold mb-4">Role-Specific Gap Analysis</h2>
              <div className="flex gap-2 flex-wrap mb-4">
                {resumeAnalysis.roleGaps.map((gap) => {
                  const role = getRoleById(gap.roleId);
                  if (!role) return null;
                  return (
                    <button
                      key={gap.roleId}
                      onClick={() => setActiveRoleId(gap.roleId)}
                      className={cn(
                        "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all",
                        activeRoleId === gap.roleId
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/30"
                      )}
                    >
                      <span>{role.emoji}</span>
                      <span>{role.title}</span>
                      <span
                        className={cn(
                          "text-xs font-bold",
                          gap.currentFitScore >= 70 ? "text-emerald-600" :
                          gap.currentFitScore >= 55 ? "text-amber-600" : "text-rose-600"
                        )}
                      >
                        {gap.currentFitScore}%
                      </span>
                    </button>
                  );
                })}
              </div>

              {activeRole && activeGap && (
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{activeRole.emoji}</span>
                    <div className="flex-1">
                      <h3 className="font-bold text-lg">{activeRole.title}</h3>
                      <p className="text-sm text-muted-foreground">{activeRole.tagline}</p>
                    </div>
                    <div className="text-right">
                      <div
                        className={cn(
                          "text-3xl font-bold",
                          activeGap.currentFitScore >= 70 ? "text-emerald-600" :
                          activeGap.currentFitScore >= 55 ? "text-amber-600" : "text-rose-600"
                        )}
                      >
                        {activeGap.currentFitScore}%
                      </div>
                      <div className="text-xs text-muted-foreground">current fit</div>
                    </div>
                  </div>

                  <Progress value={activeGap.currentFitScore} className="h-2 mb-6" />

                  <div className="flex items-center gap-2 mb-4">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      Estimated time to interview-ready:{" "}
                      <span className="font-semibold text-foreground">{activeGap.upskillTimeline}</span>
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Missing Skills</h4>
                    {activeGap.missingSkills.map((skill, i) => (
                      <div
                        key={i}
                        className={cn(
                          "rounded-xl border p-4",
                          skill.priority === "Must Have"
                            ? "border-rose-200 bg-rose-50"
                            : "border-amber-200 bg-amber-50"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3 mb-2">
                          <div className="flex items-center gap-2">
                            {skill.priority === "Must Have" ? (
                              <AlertCircle className="h-4 w-4 text-rose-600 flex-shrink-0" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0" />
                            )}
                            <span className="font-semibold text-sm">{skill.skill}</span>
                          </div>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px] flex-shrink-0",
                              skill.priority === "Must Have"
                                ? "text-rose-600 border-rose-300 bg-rose-100"
                                : "text-amber-600 border-amber-300 bg-amber-100"
                            )}
                          >
                            {skill.priority}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mb-2">
                          Time to learn: <span className="font-medium">{skill.timeToLearn}</span>
                        </p>
                        <div>
                          <p className="text-xs font-medium text-muted-foreground mb-1">Resources:</p>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.resources.map((r) => (
                              <Badge key={r} variant="secondary" className="text-[10px]">{r}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Strength Areas */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-emerald-500" />
                Your Strengths (from resume)
              </h3>
              <div className="flex flex-wrap gap-2">
                {resumeAnalysis.strengthAreas.map((s) => (
                  <Badge key={s} variant="secondary" className="text-xs">
                    ✓ {s}
                  </Badge>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-3">
              <Link href="/roadmap" className="flex-1">
                <Button className="w-full gap-2">
                  Build My Action Roadmap
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => setResumeAnalysis(null)}
              >
                Re-analyze
              </Button>
            </div>
          </div>
        )}
      </PageWrapper>
    </div>
  );
}
