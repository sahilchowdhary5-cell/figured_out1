"use client";

import Link from "next/link";
import { ArrowRight, Compass, BarChart3, Brain, FileSearch, Map, ChevronRight, CheckCircle2, Star, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";

const FEATURES = [
  {
    icon: Brain,
    title: "Psychometric Assessment",
    desc: "50 research-backed questions across 8 dimensions. Get a full personality and aptitude profile in 20 minutes.",
    color: "text-violet-500",
    bg: "bg-violet-50",
  },
  {
    icon: Star,
    title: "Top 5 Role Matches",
    desc: "AI-powered matching returns your top 5 career paths with confidence scores, match rationale, and caution areas.",
    color: "text-amber-500",
    bg: "bg-amber-50",
  },
  {
    icon: Zap,
    title: "Day in the Life Explorer",
    desc: "Rich role cards showing what a typical day looks like, tools used, pressure profiles, myths vs reality.",
    color: "text-emerald-500",
    bg: "bg-emerald-50",
  },
  {
    icon: BarChart3,
    title: "Market Intelligence",
    desc: "Interactive heatmap of demand, salary bands, AI resilience, city-wise variation, and future viability.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Shield,
    title: "Corporate Truths",
    desc: "Honest explainers on what job descriptions hide, CTC vs in-hand, startup vs MNC reality, and more.",
    color: "text-rose-500",
    bg: "bg-rose-50",
  },
  {
    icon: FileSearch,
    title: "Resume Gap Analysis",
    desc: "Upload your resume, get it compared against your top 5 roles. Must-have vs good-to-have skill gaps identified.",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
  },
  {
    icon: Map,
    title: "Action Roadmap",
    desc: "30-day and 90-day plans with learning resources, portfolio projects, and internship strategy.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: Compass,
    title: "Decision Clarity",
    desc: "Leave with a clear, honest view of your best-fit careers — not vague suggestions.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
];

const ROLE_EXAMPLES = [
  { title: "Product Manager", match: 92, color: "bg-violet-500" },
  { title: "Data Scientist", match: 87, color: "bg-blue-500" },
  { title: "UX Designer", match: 79, color: "bg-pink-500" },
  { title: "Growth Marketer", match: 71, color: "bg-orange-500" },
  { title: "Management Consultant", match: 65, color: "bg-slate-500" },
];

const TESTIMONIALS = [
  {
    quote:
      "I was stuck between PM and consulting. CareerCompass gave me the clarity and language to understand why PM is actually the right fit for how I think.",
    name: "Arjun S.",
    role: "Final Year, IIT Bombay",
  },
  {
    quote:
      "The market intelligence section alone was worth it. I had no idea data science salaries in Hyderabad vs Bengaluru were that different.",
    name: "Rhea K.",
    role: "CS Grad, BITS Pilani",
  },
  {
    quote:
      "The corporate truths section hit different. Nobody in placement prep talks about CTC vs actual take-home. This should be mandatory reading.",
    name: "Vikram P.",
    role: "Fresher, NIT Trichy",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-primary/5 blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <Badge variant="secondary" className="mb-4 gap-1.5 text-xs font-medium">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 inline-block" />
              Career Intelligence for India
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight">
              Find your best-fit career.
              <br />
              <span className="text-primary">Know exactly why.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              CareerCompass is a career intelligence platform for students and early
              professionals. Take a 20-minute psychometric assessment, discover your
              top 5 role matches with detailed rationale, and get a concrete plan to
              get there.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/onboarding">
                <Button size="lg" className="gap-2 rounded-xl h-11">
                  Start Assessment
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/roles">
                <Button size="lg" variant="outline" className="gap-2 rounded-xl h-11">
                  Explore Careers
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                20 minutes to complete
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                No account required
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
                18 career paths analyzed
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Results Preview */}
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-6">
            Sample Match Output
          </p>
          <div className="flex flex-wrap gap-3">
            {ROLE_EXAMPLES.map((role) => (
              <div
                key={role.title}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm"
              >
                <div className={`h-2 w-2 rounded-full ${role.color}`} />
                <span className="text-sm font-medium text-foreground">{role.title}</span>
                <span className="text-xs font-semibold text-primary">
                  {role.match}% match
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            Everything you need to decide clearly
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
            Not a quiz. A full career intelligence platform — built around the
            questions students actually need answered.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-border bg-card p-5 hover:border-primary/30 hover:shadow-md transition-all"
            >
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${feature.bg} mb-4`}>
                <feature.icon className={`h-5 w-5 ${feature.color}`} />
              </div>
              <h3 className="font-semibold text-foreground text-sm mb-1.5">
                {feature.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/60 bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground">
              How it works
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              { step: "01", title: "Build your profile", desc: "Tell us about your background, stage, and priorities in 2 minutes." },
              { step: "02", title: "Take the assessment", desc: "50 questions across personality, aptitude, risk, and values dimensions." },
              { step: "03", title: "Get your top 5 matches", desc: "See your best-fit roles with scores, rationale, and market reality." },
              { step: "04", title: "Get your roadmap", desc: "Upload your resume, see skill gaps, and get a 90-day action plan." },
            ].map((item, i) => (
              <div key={i} className="relative flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-bold text-primary/20 leading-none">
                    {item.step}
                  </span>
                  {i < 3 && (
                    <ChevronRight className="h-5 w-5 text-border hidden md:block absolute -right-4 top-2" />
                  )}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-foreground">
            What students say
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <blockquote className="text-sm text-foreground leading-relaxed mb-4">
                "{t.quote}"
              </blockquote>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground mb-3">
            Ready to find your direction?
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-md mx-auto">
            20 minutes now. Clarity for years.
          </p>
          <Link href="/onboarding">
            <Button
              size="lg"
              variant="secondary"
              className="gap-2 rounded-xl h-12 text-primary font-semibold"
            >
              Start Free Assessment
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary">
                <Compass className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="text-sm font-semibold">CareerCompass</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Built for students and early professionals navigating their career paths.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
