"use client";

import { useState } from "react";
import { AlertTriangle, Info, Zap, ChevronDown, ChevronUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { CORPORATE_TRUTHS, TRUTH_CATEGORIES } from "@/lib/data/corporateTruths";
import { cn } from "@/lib/utils";

const SEVERITY_CONFIG = {
  High: {
    icon: AlertTriangle,
    color: "text-rose-600",
    bg: "bg-rose-50",
    border: "border-rose-200",
    badge: "text-rose-600 bg-rose-50 border-rose-200",
  },
  Medium: {
    icon: Zap,
    color: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "text-amber-600 bg-amber-50 border-amber-200",
  },
  Info: {
    icon: Info,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
    badge: "text-blue-600 bg-blue-50 border-blue-200",
  },
};

function TruthCard({ truth }: { truth: (typeof CORPORATE_TRUTHS)[0] }) {
  const [expanded, setExpanded] = useState(false);
  const config = SEVERITY_CONFIG[truth.severity];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "rounded-2xl border bg-card overflow-hidden transition-all",
        expanded ? "shadow-md" : "hover:shadow-sm"
      )}
    >
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left"
      >
        <div className="p-5">
          <div className="flex items-start gap-4">
            <div className={cn("flex h-10 w-10 items-center justify-center rounded-xl flex-shrink-0", config.bg)}>
              <span className="text-xl">{truth.icon}</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">{truth.title}</h3>
                <Badge variant="outline" className={cn("text-[10px] px-1.5 h-4", config.badge)}>
                  <Icon className="h-2.5 w-2.5 mr-0.5" />
                  {truth.severity === "Info" ? "Good to know" : truth.severity + " impact"}
                </Badge>
                <Badge variant="secondary" className="text-[10px] px-1.5 h-4">
                  {truth.category}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{truth.summary}</p>
            </div>
            <div className="flex-shrink-0 ml-2">
              {expanded ? (
                <ChevronUp className="h-4 w-4 text-muted-foreground" />
              ) : (
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              )}
            </div>
          </div>
        </div>
      </button>

      {expanded && (
        <div className="border-t border-border px-5 pb-5 pt-4">
          <ul className="space-y-3 mb-4">
            {truth.details.map((detail, i) => (
              <li key={i} className="text-sm text-muted-foreground flex gap-2.5 leading-relaxed">
                <span className={cn("mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0", config.color)} />
                {detail}
              </li>
            ))}
          </ul>
          {truth.example && (
            <div className={cn("rounded-xl border p-4 mt-4", config.border, config.bg)}>
              <p className="text-xs font-semibold uppercase tracking-wide mb-1.5" style={{ color: "inherit" }}>
                Real Example
              </p>
              <p className="text-sm text-foreground/80 leading-relaxed">{truth.example}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function TruthsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSeverity, setSelectedSeverity] = useState<string | null>(null);

  const filtered = CORPORATE_TRUTHS.filter((t) => {
    const matchesCat = !selectedCategory || t.category === selectedCategory;
    const matchesSev = !selectedSeverity || t.severity === selectedSeverity;
    return matchesCat && matchesSev;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold mb-4">
            <AlertTriangle className="h-3.5 w-3.5" />
            Honest, unfiltered career intelligence
          </div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Corporate Truths</h1>
          <p className="text-muted-foreground max-w-2xl">
            The things placement prep, campus recruiters, and job descriptions won't tell you.
            Read this before making any major career decision.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory(null)}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                !selectedCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "border-border text-muted-foreground hover:border-primary/40"
              )}
            >
              All Topics
            </button>
            {TRUTH_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={cn(
                  "rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                  selectedCategory === cat
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:border-primary/40"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="flex gap-2 ml-auto">
            {(["High", "Medium", "Info"] as const).map((sev) => {
              const config = SEVERITY_CONFIG[sev];
              return (
                <button
                  key={sev}
                  onClick={() => setSelectedSeverity(selectedSeverity === sev ? null : sev)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                    selectedSeverity === sev
                      ? cn(config.bg, config.color, config.border)
                      : "border-border text-muted-foreground hover:border-primary/40"
                  )}
                >
                  {sev === "High" ? "⚠ Critical" : sev === "Medium" ? "⚡ Important" : "ℹ Info"}
                </button>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {(["High", "Medium", "Info"] as const).map((sev) => {
            const count = filtered.filter((t) => t.severity === sev).length;
            const config = SEVERITY_CONFIG[sev];
            return (
              <div key={sev} className={cn("rounded-xl border p-3 text-center", config.border, config.bg)}>
                <div className={cn("text-xl font-bold", config.color)}>{count}</div>
                <div className={cn("text-xs font-medium", config.color)}>
                  {sev === "High" ? "Critical Insights" : sev === "Medium" ? "Important Truths" : "Good to Know"}
                </div>
              </div>
            );
          })}
        </div>

        {/* Truths */}
        <div className="space-y-4">
          {filtered.map((truth) => (
            <TruthCard key={truth.id} truth={truth} />
          ))}
          {filtered.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              No truths match the selected filters.
            </div>
          )}
        </div>
      </PageWrapper>
    </div>
  );
}
