"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight, TrendingUp, AlertTriangle, CheckCircle2, Star,
  BarChart3, ChevronRight, Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer, Tooltip,
} from "recharts";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { getRoleById } from "@/lib/data/roles";
import { DIMENSION_META } from "@/lib/scoring/dimensions";
import { cn } from "@/lib/utils";

const CONFIDENCE_COLOR = {
  High: "text-emerald-600 bg-emerald-50 border-emerald-200",
  Medium: "text-amber-600 bg-amber-50 border-amber-200",
  Low: "text-slate-600 bg-slate-50 border-slate-200",
};

const FIT_COLOR = {
  Strong: "text-emerald-600",
  Good: "text-blue-600",
  Partial: "text-amber-600",
  Weak: "text-rose-600",
};

export default function ResultsPage() {
  const router = useRouter();
  const { assessmentResults, userProfile } = useAppStore();

  useEffect(() => {
    if (!assessmentResults) {
      router.replace("/assessment");
    }
  }, [assessmentResults, router]);

  if (!assessmentResults) return null;

  const { dimensionScores, recommendations, strengthProfile, growthAreas } = assessmentResults;

  const radarData = dimensionScores.map((ds) => ({
    dimension: DIMENSION_META[ds.dimension].label,
    score: ds.score,
    fullMark: 100,
  }));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-10">
          <Badge variant="secondary" className="mb-3 gap-1.5">
            <Sparkles className="h-3 w-3" />
            Assessment Complete
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {userProfile?.name ? `${userProfile.name.split(" ")[0]}'s` : "Your"} Career Profile
          </h1>
          <p className="text-muted-foreground">
            Based on your responses, here are your top 5 career matches and a full profile breakdown.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Matches */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-lg font-semibold flex items-center gap-2">
              <Star className="h-5 w-5 text-amber-500" />
              Top 5 Role Matches
            </h2>

            {recommendations.map((rec, index) => {
              const role = getRoleById(rec.roleId);
              if (!role) return null;
              return (
                <div
                  key={rec.roleId}
                  className={cn(
                    "rounded-2xl border bg-card shadow-sm overflow-hidden transition-all hover:shadow-md",
                    index === 0 ? "border-primary/40 ring-1 ring-primary/10" : "border-border"
                  )}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">{role.emoji}</span>
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <h3 className="font-bold text-lg">{role.title}</h3>
                            {index === 0 && (
                              <Badge className="text-xs bg-amber-500 hover:bg-amber-500">
                                #1 Match
                              </Badge>
                            )}
                            <Badge
                              variant="outline"
                              className={cn("text-xs", CONFIDENCE_COLOR[rec.confidenceLevel])}
                            >
                              {rec.confidenceLevel} Confidence
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-0.5">{role.tagline}</p>
                        </div>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <div className="text-3xl font-bold text-primary">{rec.matchScore}%</div>
                        <div className="text-xs text-muted-foreground">match</div>
                      </div>
                    </div>

                    <Progress value={rec.matchScore} className="h-1.5 mb-4" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {rec.matchReasons.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3" />
                            Why it fits
                          </p>
                          <ul className="space-y-1">
                            {rec.matchReasons.slice(0, 3).map((reason, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                {reason}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {rec.cautionAreas.length > 0 && (
                        <div>
                          <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                            <AlertTriangle className="h-3 w-3" />
                            Watch out for
                          </p>
                          <ul className="space-y-1">
                            {rec.cautionAreas.slice(0, 2).map((caution, i) => (
                              <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                                <span className="text-amber-500 mt-0.5">•</span>
                                {caution}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    <Separator className="my-4" />

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {rec.dimensionFits
                          .filter((df) => df.fit === "Strong" || df.fit === "Good")
                          .slice(0, 3)
                          .map((df) => (
                            <span
                              key={df.dimension}
                              className={cn(
                                "text-xs font-medium px-2 py-0.5 rounded-full bg-muted",
                                FIT_COLOR[df.fit]
                              )}
                            >
                              {DIMENSION_META[df.dimension].label}: {df.fit}
                            </span>
                          ))}
                      </div>
                      <Link href={`/roles/${role.id}`}>
                        <Button size="sm" variant="ghost" className="gap-1 text-xs">
                          Explore Role
                          <ChevronRight className="h-3 w-3" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Next Steps */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <ArrowRight className="h-5 w-5 text-primary" />
                Explore further
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { href: "/roles", label: "Day in the Life Explorer", desc: "See what each role actually looks like day-to-day", icon: "🧭" },
                  { href: "/market", label: "Market Intelligence", desc: "Salary bands, demand, and future viability", icon: "📊" },
                  { href: "/truths", label: "Corporate Truths", desc: "What job descriptions won't tell you", icon: "💡" },
                  { href: "/resume", label: "Resume Gap Analysis", desc: "Upload your resume, see the gaps", icon: "📄" },
                ].map((item) => (
                  <Link key={item.href} href={item.href}>
                    <div className="flex items-start gap-3 rounded-xl border border-border p-3.5 hover:border-primary/30 hover:bg-muted/30 transition-all cursor-pointer">
                      <span className="text-xl">{item.icon}</span>
                      <div>
                        <p className="text-sm font-semibold">{item.label}</p>
                        <p className="text-xs text-muted-foreground">{item.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Profile */}
          <div className="space-y-6">
            {/* Radar chart */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Your Dimension Profile
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart data={radarData}>
                    <PolarGrid stroke="var(--border)" />
                    <PolarAngleAxis
                      dataKey="dimension"
                      tick={{ fontSize: 9, fill: "var(--muted-foreground)" }}
                    />
                    <Radar
                      name="Score"
                      dataKey="score"
                      stroke="var(--primary)"
                      fill="var(--primary)"
                      fillOpacity={0.15}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "var(--card)",
                        border: "1px solid var(--border)",
                        borderRadius: "8px",
                        fontSize: "12px",
                      }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Dimension scores */}
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-semibold mb-4">Dimension Scores</h3>
              <div className="space-y-3">
                {[...dimensionScores]
                  .sort((a, b) => b.score - a.score)
                  .map((ds) => (
                    <div key={ds.dimension}>
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-medium text-foreground flex items-center gap-1">
                          <span>{ds.icon}</span>
                          {ds.label}
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground">{ds.score}</span>
                      </div>
                      <Progress value={ds.score} className="h-1.5" />
                    </div>
                  ))}
              </div>
            </div>

            {/* Strengths & Growth */}
            {(strengthProfile.length > 0 || growthAreas.length > 0) && (
              <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
                {strengthProfile.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <TrendingUp className="h-3 w-3" />
                      Your Strengths
                    </p>
                    <ul className="space-y-1.5">
                      {strengthProfile.map((s, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                          <span className="text-emerald-500">✓</span>
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {growthAreas.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold text-amber-600 uppercase tracking-wide mb-2">
                      Growth Areas
                    </p>
                    <ul className="space-y-1.5">
                      {growthAreas.map((g, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex gap-1.5">
                          <span className="text-amber-500">→</span>
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {/* CTA */}
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-sm font-semibold mb-2">Get your full roadmap</p>
              <p className="text-xs text-muted-foreground mb-4">
                Upload your resume for skill gap analysis and a personalized 90-day plan.
              </p>
              <Link href="/resume">
                <Button size="sm" className="w-full gap-2">
                  Upload Resume
                  <ArrowRight className="h-3.5 w-3.5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}
