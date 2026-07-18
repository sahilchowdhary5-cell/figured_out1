"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
} from "recharts";
import { ChevronRight, Filter, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { MARKET_DATA } from "@/lib/data/marketData";
import { getRoleById } from "@/lib/data/roles";
import { useAppStore } from "@/lib/store/appStore";
import { cn } from "@/lib/utils";

type SortKey = "demandScore" | "futureViability" | "aiResilienceScore" | "competitionScore" | "remoteFriendly";
type SortDir = "asc" | "desc";

const TRAJECTORY_COLOR = {
  Explosive: "text-emerald-600 bg-emerald-50 border-emerald-200",
  Strong: "text-blue-600 bg-blue-50 border-blue-200",
  Steady: "text-violet-600 bg-violet-50 border-violet-200",
  Flat: "text-amber-600 bg-amber-50 border-amber-200",
  Declining: "text-rose-600 bg-rose-50 border-rose-200",
};

const SATURATION_COLOR = {
  "Very High": "text-rose-600",
  High: "text-amber-600",
  Medium: "text-blue-600",
  Low: "text-emerald-600",
};

const SCORE_COLORS = (val: number) =>
  val >= 8 ? "bg-emerald-500" : val >= 6 ? "bg-blue-500" : val >= 4 ? "bg-amber-500" : "bg-rose-500";

const SCORE_TEXT = (val: number) =>
  val >= 8 ? "text-emerald-600" : val >= 6 ? "text-blue-600" : val >= 4 ? "text-amber-600" : "text-rose-600";

export default function MarketPage() {
  const { assessmentResults, compareRoleIds, toggleCompareRole, clearCompare } = useAppStore();
  const [sortKey, setSortKey] = useState<SortKey>("demandScore");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const recommendations = assessmentResults?.recommendations ?? [];
  const recommendedIds = new Set(recommendations.map((r) => r.roleId));

  const handleSort = (key: SortKey) => {
    if (sortKey === key) {
      setSortDir((d) => (d === "desc" ? "asc" : "desc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  };

  const sorted = [...MARKET_DATA].sort((a, b) => {
    const aVal = a[sortKey];
    const bVal = b[sortKey];
    return sortDir === "desc" ? bVal - aVal : aVal - bVal;
  });

  const compareData = compareRoleIds
    .map((id) => {
      const market = MARKET_DATA.find((m) => m.roleId === id);
      const role = getRoleById(id);
      if (!market || !role) return null;
      return { market, role };
    })
    .filter(Boolean) as { market: (typeof MARKET_DATA)[0]; role: ReturnType<typeof getRoleById> & {} }[];

  const compareRadarData = compareData.length > 0
    ? [
        { metric: "Demand", ...Object.fromEntries(compareData.map((d) => [d.role.title, d.market.demandScore])) },
        { metric: "Viability", ...Object.fromEntries(compareData.map((d) => [d.role.title, d.market.futureViability])) },
        { metric: "AI Safety", ...Object.fromEntries(compareData.map((d) => [d.role.title, d.market.aiResilienceScore])) },
        { metric: "Remote", ...Object.fromEntries(compareData.map((d) => [d.role.title, d.market.remoteFriendly])) },
        { metric: "Low Barrier", ...Object.fromEntries(compareData.map((d) => [d.role.title, 10 - d.market.barrierToEntry])) },
      ]
    : [];

  const COMPARE_COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper>
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Career Market Intelligence</h1>
          <p className="text-muted-foreground">
            Demand trends, salary benchmarks, AI impact, and city-level insights for 15+ roles.
          </p>
        </div>

        <Tabs defaultValue="heatmap">
          <TabsList className="mb-6">
            <TabsTrigger value="heatmap">Market Heatmap</TabsTrigger>
            <TabsTrigger value="salary">Salary Benchmarks</TabsTrigger>
            <TabsTrigger value="compare">Compare Roles</TabsTrigger>
            <TabsTrigger value="city">By City</TabsTrigger>
          </TabsList>

          {/* Heatmap */}
          <TabsContent value="heatmap">
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium text-muted-foreground">Sort by:</span>
              {(["demandScore", "futureViability", "aiResilienceScore", "remoteFriendly", "competitionScore"] as SortKey[]).map(
                (key) => (
                  <button
                    key={key}
                    onClick={() => handleSort(key)}
                    className={cn(
                      "flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium border transition-colors",
                      sortKey === key
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/40"
                    )}
                  >
                    {key === "demandScore" ? "Demand"
                      : key === "futureViability" ? "Future Viability"
                      : key === "aiResilienceScore" ? "AI Resilience"
                      : key === "remoteFriendly" ? "Remote"
                      : "Competition"}
                    {sortKey === key && <ArrowUpDown className="h-3 w-3" />}
                  </button>
                )
              )}
            </div>

            {/* Heatmap table */}
            <div className="rounded-xl border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50">
                      <th className="text-left px-4 py-3 font-semibold text-xs text-muted-foreground w-52">Role</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">Demand</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">Viability</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">AI Safety</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">Remote</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">Competition</th>
                      <th className="text-center px-3 py-3 font-semibold text-xs text-muted-foreground">Growth</th>
                      <th className="text-left px-3 py-3 font-semibold text-xs text-muted-foreground">Entry Salary</th>
                      <th className="px-3 py-3"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {sorted.map((market, i) => {
                      const role = getRoleById(market.roleId);
                      if (!role) return null;
                      const isRec = recommendedIds.has(market.roleId);
                      const entryBand = market.salaryBands[0];
                      const isInCompare = compareRoleIds.includes(market.roleId);
                      return (
                        <tr
                          key={market.roleId}
                          className={cn(
                            "border-b border-border/60 transition-colors hover:bg-muted/30",
                            isRec && "bg-primary/3"
                          )}
                        >
                          <td className="px-4 py-3">
                            <div className="flex items-center gap-2">
                              <span>{role.emoji}</span>
                              <div>
                                <div className="flex items-center gap-1.5">
                                  <span className="font-medium text-xs">{role.title}</span>
                                  {isRec && (
                                    <span className="text-[10px] text-primary font-semibold">★</span>
                                  )}
                                </div>
                              </div>
                            </div>
                          </td>
                          {[market.demandScore, market.futureViability, market.aiResilienceScore, market.remoteFriendly, market.competitionScore].map(
                            (val, j) => (
                              <td key={j} className="px-3 py-3 text-center">
                                <div className="flex items-center justify-center gap-1">
                                  <div
                                    className={cn("h-2 w-2 rounded-full flex-shrink-0", SCORE_COLORS(val))}
                                  />
                                  <span className={cn("text-xs font-semibold", SCORE_TEXT(val))}>
                                    {val}
                                  </span>
                                </div>
                              </td>
                            )
                          )}
                          <td className="px-3 py-3 text-center">
                            <Badge
                              variant="outline"
                              className={cn("text-[10px] px-1.5 h-4", TRAJECTORY_COLOR[market.growthTrajectory])}
                            >
                              {market.growthTrajectory}
                            </Badge>
                          </td>
                          <td className="px-3 py-3">
                            <span className="text-xs font-medium text-foreground">
                              ₹{entryBand.minLPA}–{entryBand.maxLPA}L
                            </span>
                          </td>
                          <td className="px-3 py-3">
                            <div className="flex gap-1">
                              <Link href={`/roles/${role.id}`}>
                                <Button size="sm" variant="ghost" className="h-6 px-2 text-[10px]">
                                  View
                                </Button>
                              </Link>
                              <Button
                                size="sm"
                                variant={isInCompare ? "default" : "outline"}
                                className="h-6 px-2 text-[10px]"
                                onClick={() => toggleCompareRole(market.roleId)}
                              >
                                {isInCompare ? "✓" : "+"}
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-emerald-500" /> 8–10: Excellent</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-blue-500" /> 6–7.9: Good</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-amber-500" /> 4–5.9: Moderate</span>
              <span className="flex items-center gap-1"><span className="h-2 w-2 rounded-full bg-rose-500" /> Below 4: Low</span>
              <span className="ml-2 text-primary">★ = Your recommendation</span>
            </div>
          </TabsContent>

          {/* Salary Benchmarks */}
          <TabsContent value="salary">
            <div className="space-y-6">
              {["entry", "mid"].map((stage) => {
                const data = MARKET_DATA.map((m) => {
                  const role = getRoleById(m.roleId);
                  const band = m.salaryBands.find((b) => b.stage === stage);
                  return {
                    role: role?.title ?? m.roleId,
                    emoji: role?.emoji ?? "",
                    min: band?.minLPA ?? 0,
                    max: band?.maxLPA ?? 0,
                    mid: Math.round(((band?.minLPA ?? 0) + (band?.maxLPA ?? 0)) / 2),
                  };
                }).sort((a, b) => b.mid - a.mid);

                return (
                  <div key={stage} className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-4">
                      {stage === "entry" ? "Entry Level (0–2 years)" : "Mid Level (3–5 years)"} — Annual LPA
                    </h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data} layout="vertical" margin={{ left: 100, right: 20 }}>
                          <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="var(--border)" />
                          <XAxis
                            type="number"
                            tick={{ fontSize: 10, fill: "var(--muted-foreground)" }}
                            tickFormatter={(v) => `₹${v}L`}
                          />
                          <YAxis
                            type="category"
                            dataKey="role"
                            tick={{ fontSize: 10, fill: "var(--foreground)" }}
                            width={95}
                          />
                          <Tooltip
                            formatter={(v) => [`₹${v}L`, ""]}
                            contentStyle={{
                              background: "var(--card)",
                              border: "1px solid var(--border)",
                              borderRadius: "8px",
                              fontSize: "12px",
                            }}
                          />
                          <Bar dataKey="min" name="Min" fill="var(--primary)" fillOpacity={0.3} radius={[0, 2, 2, 0]} />
                          <Bar dataKey="max" name="Max" fill="var(--primary)" fillOpacity={0.7} radius={[0, 2, 2, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </div>
                );
              })}
            </div>
          </TabsContent>

          {/* Compare Roles */}
          <TabsContent value="compare">
            {compareRoleIds.length === 0 ? (
              <div className="rounded-xl border border-dashed border-border p-12 text-center">
                <p className="text-muted-foreground mb-2">No roles selected for comparison.</p>
                <p className="text-sm text-muted-foreground">
                  Go to the Heatmap tab and click "+" on up to 3 roles to compare them.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex gap-2 flex-wrap">
                    {compareData.map((d, i) => (
                      <Badge
                        key={d.role.id}
                        variant="secondary"
                        className="text-xs gap-1.5"
                        style={{ borderLeft: `3px solid ${COMPARE_COLORS[i]}` }}
                      >
                        {d.role.emoji} {d.role.title}
                        <button
                          className="ml-1 text-muted-foreground hover:text-foreground"
                          onClick={() => toggleCompareRole(d.role.id)}
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" onClick={clearCompare} className="text-xs">
                    Clear All
                  </Button>
                </div>

                {compareRadarData.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-6">
                    <h3 className="font-semibold mb-4">Multi-Metric Comparison</h3>
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <RadarChart data={compareRadarData}>
                          <PolarGrid stroke="var(--border)" />
                          <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11, fill: "var(--muted-foreground)" }} />
                          {compareData.map((d, i) => (
                            <Radar
                              key={d.role.id}
                              name={d.role.title}
                              dataKey={d.role.title}
                              stroke={COMPARE_COLORS[i]}
                              fill={COMPARE_COLORS[i]}
                              fillOpacity={0.1}
                            />
                          ))}
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
                )}

                {/* Side-by-side table */}
                <div className="rounded-xl border border-border overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/50">
                        <th className="text-left px-4 py-3 font-semibold text-xs text-muted-foreground">Metric</th>
                        {compareData.map((d) => (
                          <th key={d.role.id} className="text-center px-4 py-3 font-semibold text-xs text-muted-foreground">
                            {d.role.emoji} {d.role.title}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { label: "Demand", key: "demandScore" as const },
                        { label: "Future Viability", key: "futureViability" as const },
                        { label: "AI Resilience", key: "aiResilienceScore" as const },
                        { label: "Remote Friendly", key: "remoteFriendly" as const },
                        { label: "Competition", key: "competitionScore" as const },
                        { label: "Barrier to Entry", key: "barrierToEntry" as const },
                      ].map((row) => (
                        <tr key={row.label} className="border-b border-border/60 hover:bg-muted/20">
                          <td className="px-4 py-3 text-xs font-medium text-muted-foreground">{row.label}</td>
                          {compareData.map((d) => {
                            const val = d.market[row.key];
                            const best = Math.max(...compareData.map((x) => x.market[row.key]));
                            return (
                              <td key={d.role.id} className="px-4 py-3 text-center">
                                <span
                                  className={cn(
                                    "text-xs font-bold",
                                    val === best ? "text-emerald-600" : "text-muted-foreground"
                                  )}
                                >
                                  {val}
                                </span>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                      <tr className="border-b border-border/60 hover:bg-muted/20">
                        <td className="px-4 py-3 text-xs font-medium text-muted-foreground">Entry Salary</td>
                        {compareData.map((d) => {
                          const band = d.market.salaryBands[0];
                          return (
                            <td key={d.role.id} className="px-4 py-3 text-center text-xs font-medium">
                              ₹{band.minLPA}–{band.maxLPA}L
                            </td>
                          );
                        })}
                      </tr>
                      <tr className="hover:bg-muted/20">
                        <td className="px-4 py-3 text-xs font-medium text-muted-foreground">Growth</td>
                        {compareData.map((d) => (
                          <td key={d.role.id} className="px-4 py-3 text-center">
                            <Badge
                              variant="outline"
                              className={cn("text-[10px]", TRAJECTORY_COLOR[d.market.growthTrajectory])}
                            >
                              {d.market.growthTrajectory}
                            </Badge>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </TabsContent>

          {/* By City */}
          <TabsContent value="city">
            <div className="mb-4 flex flex-wrap gap-2">
              {["Bengaluru", "Mumbai", "Delhi NCR", "Hyderabad", "Pune", "Chennai"].map((city) => (
                <button
                  key={city}
                  onClick={() => setSelectedCity(selectedCity === city ? null : city)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium border transition-colors",
                    selectedCity === city
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  )}
                >
                  {city}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {MARKET_DATA.map((market) => {
                const role = getRoleById(market.roleId);
                if (!role) return null;
                const cityData = selectedCity
                  ? market.cityVariation.find((c) => c.city === selectedCity)
                  : null;

                return (
                  <div
                    key={market.roleId}
                    className="rounded-xl border border-border bg-card p-4"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span>{role.emoji}</span>
                      <span className="font-medium text-sm">{role.title}</span>
                    </div>
                    {cityData ? (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Demand Index</span>
                          <span className={cn("font-semibold", SCORE_TEXT(cityData.demandIndex))}>
                            {cityData.demandIndex}/10
                          </span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Opportunities</span>
                          <Badge
                            variant="outline"
                            className={cn(
                              "text-[10px]",
                              cityData.opportunities === "Very High" ? "text-emerald-600 border-emerald-200 bg-emerald-50" :
                              cityData.opportunities === "High" ? "text-blue-600 border-blue-200 bg-blue-50" :
                              cityData.opportunities === "Medium" ? "text-amber-600 border-amber-200 bg-amber-50" :
                              "text-slate-600 border-slate-200 bg-slate-50"
                            )}
                          >
                            {cityData.opportunities}
                          </Badge>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="text-muted-foreground">Salary Multiplier</span>
                          <span className="font-semibold">{cityData.salaryMultiplier}x</span>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1">
                        {market.cityVariation.slice(0, 3).map((cv) => (
                          <div key={cv.city} className="flex items-center justify-between text-xs">
                            <span className="text-muted-foreground">{cv.city}</span>
                            <span className={cn("font-medium", SCORE_TEXT(cv.demandIndex))}>
                              {cv.demandIndex}/10
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </TabsContent>
        </Tabs>
      </PageWrapper>
    </div>
  );
}
