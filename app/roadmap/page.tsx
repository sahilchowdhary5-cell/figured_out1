"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Map, Calendar, ArrowRight, BookOpen, Users, Briefcase, Target,
  ChevronDown, ChevronUp, Lightbulb,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { getRoleById } from "@/lib/data/roles";
import { getRoadmapByRoleId, ROADMAPS } from "@/lib/data/roadmaps";
import { cn } from "@/lib/utils";

const DIFFICULTY_COLOR = {
  Easy: "text-emerald-600 bg-emerald-50 border-emerald-200",
  Medium: "text-amber-600 bg-amber-50 border-amber-200",
  Hard: "text-rose-600 bg-rose-50 border-rose-200",
};

const RESOURCE_ICON: Record<string, string> = {
  Course: "🎓",
  Certification: "🏆",
  Book: "📚",
  Project: "⚡",
  Community: "🌐",
};

const PRIORITY_COLOR = {
  High: "text-primary",
  Medium: "text-amber-600",
  Low: "text-muted-foreground",
};

export default function RoadmapPage() {
  const { assessmentResults } = useAppStore();

  const topRoleIds = assessmentResults?.recommendations.slice(0, 3).map((r) => r.roleId) ?? [];
  const availableRoleIds = topRoleIds.filter((id) => !!getRoadmapByRoleId(id));
  const defaultId =
    availableRoleIds[0] ?? ROADMAPS[0]?.roleId ?? "software-engineer";

  const [activeRoleId, setActiveRoleId] = useState(defaultId);
  const roadmap = getRoadmapByRoleId(activeRoleId);
  const role = getRoleById(activeRoleId);

  const allRolesWithRoadmap = ROADMAPS.map((r) => r.roleId).filter((id) => !!getRoleById(id));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
            <Map className="h-3.5 w-3.5" />
            Your personalized action plan
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Action Roadmap</h1>
          <p className="text-muted-foreground">
            Step-by-step plans, portfolio projects, and learning priorities for your target roles.
          </p>
        </div>

        {/* Role selector */}
        <div className="flex flex-wrap gap-2 mb-6">
          {allRolesWithRoadmap.map((id) => {
            const r = getRoleById(id);
            if (!r) return null;
            const isRec = topRoleIds.includes(id);
            return (
              <button
                key={id}
                onClick={() => setActiveRoleId(id)}
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-3 py-2 text-sm font-medium transition-all",
                  activeRoleId === id
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/30"
                )}
              >
                <span>{r.emoji}</span>
                <span>{r.title}</span>
                {isRec && <span className="text-[10px] text-primary">★ rec</span>}
              </button>
            );
          })}
        </div>

        {!roadmap || !role ? (
          <div className="rounded-2xl border border-dashed border-border p-12 text-center">
            <Map className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              No roadmap available for this role yet. Choose from the options above.
            </p>
            <Link href="/assessment">
              <Button variant="outline">Take Assessment to Get Recommendations</Button>
            </Link>
          </div>
        ) : (
          <div>
            {/* Role header */}
            <div className="rounded-2xl border border-border bg-card p-6 mb-6">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{role.emoji}</span>
                <div>
                  <h2 className="text-xl font-bold">{role.title} — Your Roadmap</h2>
                  <p className="text-sm text-muted-foreground">{role.tagline}</p>
                </div>
              </div>
            </div>

            <Tabs defaultValue="30days">
              <TabsList className="mb-6">
                <TabsTrigger value="30days">30-Day Plan</TabsTrigger>
                <TabsTrigger value="90days">90-Day Plan</TabsTrigger>
                <TabsTrigger value="projects">Portfolio Projects</TabsTrigger>
                <TabsTrigger value="learning">Learning Stack</TabsTrigger>
                <TabsTrigger value="strategy">Career Strategy</TabsTrigger>
              </TabsList>

              {/* 30-Day */}
              <TabsContent value="30days">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4" />
                    Week-by-week priorities for your first month of preparation
                  </div>
                  {roadmap.thirtyDayPlan.map((week, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </div>
                        <div>
                          <span className="font-semibold text-sm">{week.week}</span>
                          <span className="text-muted-foreground text-sm"> — {week.focus}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {week.actions.map((action, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* 90-Day */}
              <TabsContent value="90days">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Target className="h-4 w-4" />
                    Monthly milestones for your first quarter of career preparation
                  </div>
                  {roadmap.ninetyDayPlan.map((month, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-100 text-violet-700 font-bold text-sm flex-shrink-0">
                          M{i + 2}
                        </div>
                        <div>
                          <span className="font-semibold text-sm">{month.month}</span>
                          <span className="text-muted-foreground text-sm"> — {month.focus}</span>
                        </div>
                      </div>
                      <ul className="space-y-2 ml-11">
                        {month.actions.map((action, j) => (
                          <li key={j} className="flex gap-2 text-sm text-muted-foreground">
                            <ArrowRight className="h-3.5 w-3.5 text-violet-500 mt-0.5 flex-shrink-0" />
                            {action}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Portfolio Projects */}
              <TabsContent value="projects">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    Concrete projects that demonstrate your skills and differentiate you from other candidates.
                  </p>
                  {roadmap.portfolioProjects.map((project, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-5">
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="font-semibold">{project.title}</h3>
                          <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={cn("text-xs flex-shrink-0", DIFFICULTY_COLOR[project.difficulty])}
                        >
                          {project.difficulty}
                        </Badge>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                          Skills Demonstrated
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {project.skills.map((s) => (
                            <Badge key={s} variant="secondary" className="text-xs">{s}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Learning Stack */}
              <TabsContent value="learning">
                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground mb-4">
                    Prioritized learning resources — focus on High priority items first.
                  </p>
                  {roadmap.learningPriority.map((resource, i) => (
                    <div key={i} className="rounded-xl border border-border bg-card p-4 flex items-start gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted flex-shrink-0 text-xl">
                        {RESOURCE_ICON[resource.type] ?? "📖"}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="font-semibold text-sm">{resource.resource}</span>
                          <Badge variant="secondary" className="text-[10px]">{resource.type}</Badge>
                          <span className={cn("text-xs font-semibold", PRIORITY_COLOR[resource.priority])}>
                            {resource.priority} priority
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          Estimated time: {resource.estimatedTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              {/* Career Strategy */}
              <TabsContent value="strategy">
                <div className="space-y-4">
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-primary" />
                      Internship Strategy
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {roadmap.internshipStrategy}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4 text-primary" />
                      Networking Strategy
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {roadmap.networkingStrategy}
                    </p>
                  </div>

                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-primary" />
                      Interview Preparation Themes
                    </h3>
                    <ul className="space-y-2">
                      {roadmap.interviewPrepThemes.map((theme, i) => (
                        <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="h-3.5 w-3.5 text-primary mt-0.5 flex-shrink-0" />
                          {theme}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            {/* Bottom CTA */}
            <div className="mt-8 flex gap-3">
              <Link href="/feedback" className="flex-1">
                <Button className="w-full gap-2">
                  I'm Done — Give Feedback
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/market">
                <Button variant="outline" className="gap-2">
                  Check Market Intel
                </Button>
              </Link>
            </div>
          </div>
        )}
      </PageWrapper>
    </div>
  );
}
