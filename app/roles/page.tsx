"use client";

import { useState } from "react";
import Link from "next/link";
import { Search, ChevronRight, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { ROLES, ROLE_FAMILIES } from "@/lib/data/roles";
import { cn } from "@/lib/utils";

const FAMILY_COLORS: Record<string, string> = {
  Technology: "bg-blue-50 text-blue-700 border-blue-200",
  Business: "bg-violet-50 text-violet-700 border-violet-200",
  Design: "bg-pink-50 text-pink-700 border-pink-200",
  Finance: "bg-amber-50 text-amber-700 border-amber-200",
  Marketing: "bg-orange-50 text-orange-700 border-orange-200",
  Operations: "bg-slate-50 text-slate-700 border-slate-200",
  People: "bg-teal-50 text-teal-700 border-teal-200",
  Strategy: "bg-indigo-50 text-indigo-700 border-indigo-200",
  Sales: "bg-red-50 text-red-700 border-red-200",
  Communications: "bg-yellow-50 text-yellow-700 border-yellow-200",
};

export default function RolesPage() {
  const { assessmentResults } = useAppStore();
  const [search, setSearch] = useState("");
  const [selectedFamily, setSelectedFamily] = useState<string | null>(null);

  const recommendations = assessmentResults?.recommendations ?? [];
  const recommendedIds = new Set(recommendations.map((r) => r.roleId));

  const filtered = ROLES.filter((role) => {
    const matchesSearch =
      !search ||
      role.title.toLowerCase().includes(search.toLowerCase()) ||
      role.family.toLowerCase().includes(search.toLowerCase()) ||
      role.tagline.toLowerCase().includes(search.toLowerCase());
    const matchesFamily = !selectedFamily || role.family === selectedFamily;
    return matchesSearch && matchesFamily;
  });

  // Sort: recommended first, then alphabetically
  const sorted = [...filtered].sort((a, b) => {
    const aRec = recommendations.find((r) => r.roleId === a.id);
    const bRec = recommendations.find((r) => r.roleId === b.id);
    if (aRec && bRec) return bRec.matchScore - aRec.matchScore;
    if (aRec) return -1;
    if (bRec) return 1;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Career Explorer</h1>
          <p className="text-muted-foreground">
            Deep-dive into any career path. Your recommended roles are highlighted.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search roles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 flex-shrink-0">
            <button
              onClick={() => setSelectedFamily(null)}
              className={cn(
                "flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                !selectedFamily
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40"
              )}
            >
              All
            </button>
            {ROLE_FAMILIES.map((f) => (
              <button
                key={f}
                onClick={() => setSelectedFamily(selectedFamily === f ? null : f)}
                className={cn(
                  "flex-shrink-0 rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                  selectedFamily === f
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Roles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {sorted.map((role) => {
            const rec = recommendations.find((r) => r.roleId === role.id);
            const isRecommended = recommendedIds.has(role.id);
            return (
              <Link key={role.id} href={`/roles/${role.id}`}>
                <div
                  className={cn(
                    "rounded-2xl border bg-card p-5 h-full cursor-pointer transition-all hover:shadow-md hover:border-primary/30 group",
                    isRecommended ? "border-primary/30 ring-1 ring-primary/10" : "border-border"
                  )}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{role.emoji}</span>
                      <div>
                        <div className="flex flex-wrap items-center gap-1.5 mb-0.5">
                          <h3 className="font-semibold text-foreground">{role.title}</h3>
                          {isRecommended && rec && (
                            <Badge
                              variant="secondary"
                              className="text-[10px] gap-0.5 h-4 px-1.5 bg-primary/10 text-primary border-primary/20"
                            >
                              <Star className="h-2.5 w-2.5" />
                              {rec.matchScore}%
                            </Badge>
                          )}
                        </div>
                        <Badge
                          variant="outline"
                          className={cn(
                            "text-[10px] px-1.5 h-4",
                            FAMILY_COLORS[role.family]
                          )}
                        >
                          {role.family}
                        </Badge>
                      </div>
                    </div>
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {role.tagline}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-1">
                    {role.keyTools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                    {role.keyTools.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                        +{role.keyTools.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className={cn(
                      "px-2 py-0.5 rounded-full font-medium",
                      role.pressureProfile.level === "Very High" ? "bg-rose-50 text-rose-600" :
                      role.pressureProfile.level === "High" ? "bg-orange-50 text-orange-600" :
                      role.pressureProfile.level === "Medium" ? "bg-amber-50 text-amber-600" :
                      "bg-emerald-50 text-emerald-600"
                    )}>
                      {role.pressureProfile.level} pressure
                    </span>
                    <span className="text-muted-foreground/60">
                      {role.learningCurve.steepness} curve
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {sorted.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No roles match your search. Try a different keyword.</p>
            <Button variant="ghost" className="mt-4" onClick={() => { setSearch(""); setSelectedFamily(null); }}>
              Clear filters
            </Button>
          </div>
        )}
      </PageWrapper>
    </div>
  );
}
