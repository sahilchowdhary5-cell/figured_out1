"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, ArrowLeft, Upload, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { cn } from "@/lib/utils";
import type { UserStage } from "@/lib/types";

const currentYear = new Date().getFullYear();

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(60, "Name too long").trim(),
  email: z.string().email("Enter a valid email address").max(100).trim(),
  college: z.string().min(2, "College name required").max(100, "College name too long").trim(),
  degree: z.string().min(2, "Degree required").max(80, "Degree name too long").trim(),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a valid 4-digit year")
    .refine(
      (y) => {
        const year = parseInt(y, 10);
        return year >= currentYear - 2 && year <= currentYear + 8;
      },
      { message: `Year must be between ${currentYear - 2} and ${currentYear + 8}` }
    ),
  currentCity: z.string().min(2, "Current city required").max(60, "City name too long").trim(),
  targetCity: z.string().min(2, "Target city required").max(60, "City name too long").trim(),
});

type FormData = z.infer<typeof schema>;

const STAGES: { value: UserStage; label: string; desc: string }[] = [
  { value: "school_student", label: "School Student", desc: "Class 11–12, exploring options" },
  { value: "college_student", label: "College Student", desc: "Undergrad, 1–3 years left" },
  { value: "fresher", label: "Fresher", desc: "Recently graduated, job searching" },
  { value: "working_professional", label: "Working Professional", desc: "Employed, considering a pivot" },
];

const INTERESTS = [
  "Technology", "Business", "Design", "Finance", "Marketing",
  "Data & Analytics", "Healthcare", "Education", "Media", "Law",
  "Environment", "Social Impact", "Gaming", "E-commerce",
];

const WORK_STYLES = [
  { value: "structured", label: "Structured & Process-driven" },
  { value: "creative", label: "Creative & Open-ended" },
  { value: "collaborative", label: "Collaborative & Team-based" },
  { value: "independent", label: "Independent & Self-directed" },
  { value: "varied", label: "Varied — I like diversity" },
];

const PRIORITIES = [
  "High Salary", "Job Stability", "Creative Freedom", "Prestige",
  "Social Impact", "Work-Life Balance", "Fast Growth", "Learning",
  "Remote Flexibility", "AI-Resilient Career",
];

const STEPS = ["Basic Info", "About You", "Work Preferences", "Complete"];

const MAX_FILE_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
const ALLOWED_MIME_TYPES = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

export default function OnboardingPage() {
  const router = useRouter();
  const { setUserProfile, dataConsentGiven } = useAppStore();
  const [step, setStep] = useState(0);
  const [stage, setStage] = useState<UserStage>("college_student");
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [workStyle, setWorkStyle] = useState("");
  const [selectedPriorities, setSelectedPriorities] = useState<string[]>([]);
  const [willingToRelocate, setWillingToRelocate] = useState(true);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const toggleInterest = (i: string) => {
    setSelectedInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : prev.length < 5 ? [...prev, i] : prev
    );
  };

  const togglePriority = (p: string) => {
    setSelectedPriorities((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : prev.length < 4 ? [...prev, p] : prev
    );
  };

  const handleFileUpload = (file: File) => {
    setFileError(null);
    if (!ALLOWED_MIME_TYPES.includes(file.type)) {
      setFileError("Only PDF or DOCX files are allowed.");
      return;
    }
    if (file.size > MAX_FILE_SIZE_BYTES) {
      setFileError("File must be under 5 MB.");
      return;
    }
    setResumeFile(file);
  };

  const handleNext = async () => {
    if (step === 0) {
      const ok = await trigger(["name", "email", "college", "degree", "graduationYear", "currentCity", "targetCity"]);
      if (!ok) return;
    }
    if (step === 1) {
      if (!stage) return;
    }
    if (step < STEPS.length - 2) setStep((s) => s + 1);
  };

  const onSubmit = (data: FormData) => {
    setUserProfile({
      ...data,
      stage,
      interests: selectedInterests,
      workStyle,
      priorities: selectedPriorities,
      willingToRelocate,
      resumeFileName: resumeFile?.name,
    });
    router.push("/assessment");
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  if (!dataConsentGiven) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h1 className="text-2xl font-bold mb-3">Consent Required</h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Before we can personalise your experience, you need to accept our data policy.
              Please click <strong>Accept &amp; Continue</strong> on the banner at the bottom of this page.
            </p>
            <p className="text-xs text-muted-foreground">
              Your data is stored only in your browser — never on our servers.{" "}
              <a href="/privacy" className="underline underline-offset-2 hover:text-primary">Privacy Policy</a>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper narrow>
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-widest">
              Step {step + 1} of {STEPS.length}
            </p>
            <p className="text-xs text-muted-foreground">{STEPS[step]}</p>
          </div>
          <Progress value={progress} className="h-1.5" />
          <div className="flex gap-2 mt-3">
            {STEPS.map((s, i) => (
              <span
                key={s}
                className={cn(
                  "text-xs",
                  i === step ? "text-primary font-semibold" : i < step ? "text-muted-foreground" : "text-muted-foreground/40"
                )}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 0: Basic Info */}
          {step === 0 && (
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-1">Welcome. Let's start with the basics.</h2>
                <p className="text-muted-foreground text-sm">This helps us personalize your experience and results.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Arjun Sharma" {...register("name")} />
                  {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" {...register("email")} />
                  {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="college">College / University</Label>
                  <Input id="college" placeholder="IIT Bombay" {...register("college")} />
                  {errors.college && <p className="text-xs text-destructive">{errors.college.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="degree">Degree</Label>
                  <Input id="degree" placeholder="B.Tech Computer Science" {...register("degree")} />
                  {errors.degree && <p className="text-xs text-destructive">{errors.degree.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="graduationYear">Graduation Year</Label>
                  <Input id="graduationYear" placeholder="2025" {...register("graduationYear")} />
                  {errors.graduationYear && <p className="text-xs text-destructive">{errors.graduationYear.message}</p>}
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="currentCity">Current City</Label>
                  <Input id="currentCity" placeholder="Bengaluru" {...register("currentCity")} />
                  {errors.currentCity && <p className="text-xs text-destructive">{errors.currentCity.message}</p>}
                </div>
                <div className="sm:col-span-2 space-y-1.5">
                  <Label htmlFor="targetCity">Target City (where you want to work)</Label>
                  <Input id="targetCity" placeholder="Mumbai, Bengaluru, or Open" {...register("targetCity")} />
                  {errors.targetCity && <p className="text-xs text-destructive">{errors.targetCity.message}</p>}
                </div>
              </div>
              <div className="rounded-xl bg-muted/50 border border-border p-3 mt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🔒 <strong className="text-foreground">Data notice:</strong> This information is stored only in your browser. It is never sent to any server, used for advertising, or shared with third parties. You can delete it anytime.{" "}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-primary">Privacy Policy</a>
                </p>
              </div>
            </div>
          )}

          {/* Step 1: About You */}
          {step === 1 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-1">Tell us about your situation.</h2>
                <p className="text-muted-foreground text-sm">This helps us calibrate the right context for your results.</p>
              </div>

              <div className="space-y-3">
                <Label>Where are you right now?</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STAGES.map((s) => (
                    <button
                      key={s.value}
                      type="button"
                      onClick={() => setStage(s.value)}
                      className={cn(
                        "flex flex-col gap-0.5 rounded-xl border p-4 text-left transition-all",
                        stage === s.value
                          ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                          : "border-border hover:border-primary/40 hover:bg-muted/50"
                      )}
                    >
                      <span className="font-medium text-sm">{s.label}</span>
                      <span className="text-xs text-muted-foreground">{s.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Broad interests (pick up to 5)</Label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => toggleInterest(i)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                        selectedInterests.includes(i)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      )}
                    >
                      {selectedInterests.includes(i) && <Check className="inline h-3 w-3 mr-1" />}
                      {i}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">
                  {selectedInterests.length}/5 selected
                </p>
              </div>
            </div>
          )}

          {/* Step 2: Work Preferences */}
          {step === 2 && (
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold tracking-tight mb-1">What do you care about most?</h2>
                <p className="text-muted-foreground text-sm">This shapes how we weight your results and recommendations.</p>
              </div>

              <div className="space-y-3">
                <Label>Preferred work style</Label>
                <div className="space-y-2">
                  {WORK_STYLES.map((w) => (
                    <button
                      key={w.value}
                      type="button"
                      onClick={() => setWorkStyle(w.value)}
                      className={cn(
                        "w-full flex items-center gap-3 rounded-xl border p-3.5 text-left transition-all",
                        workStyle === w.value
                          ? "border-primary bg-primary/5 ring-1 ring-primary/30"
                          : "border-border hover:border-primary/40 hover:bg-muted/50"
                      )}
                    >
                      <div className={cn(
                        "h-4 w-4 rounded-full border-2 flex-shrink-0 transition-colors",
                        workStyle === w.value ? "border-primary bg-primary" : "border-muted-foreground/30"
                      )} />
                      <span className="text-sm font-medium">{w.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Career priorities (pick up to 4)</Label>
                <div className="flex flex-wrap gap-2">
                  {PRIORITIES.map((p) => (
                    <button
                      key={p}
                      type="button"
                      onClick={() => togglePriority(p)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                        selectedPriorities.includes(p)
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                      )}
                    >
                      {selectedPriorities.includes(p) && <Check className="inline h-3 w-3 mr-1" />}
                      {p}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">{selectedPriorities.length}/4 selected</p>
              </div>

              <div className="space-y-3">
                <Label>Willing to relocate for work?</Label>
                <div className="flex gap-3">
                  {[true, false].map((v) => (
                    <button
                      key={String(v)}
                      type="button"
                      onClick={() => setWillingToRelocate(v)}
                      className={cn(
                        "flex-1 rounded-xl border p-3 text-sm font-medium transition-all",
                        willingToRelocate === v
                          ? "border-primary bg-primary/5 text-primary"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      )}
                    >
                      {v ? "Yes, open to relocation" : "Prefer to stay in my city"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <Label>Resume upload (optional)</Label>
                <label className={cn(
                  "flex flex-col items-center gap-2 rounded-xl border-2 border-dashed p-6 cursor-pointer transition-colors hover:border-primary/40 hover:bg-muted/30",
                  resumeFile ? "border-primary/40 bg-primary/5" : "border-border"
                )}>
                  <Upload className={cn("h-6 w-6", resumeFile ? "text-primary" : "text-muted-foreground")} />
                  <div className="text-center">
                    <p className="text-sm font-medium">
                      {resumeFile ? resumeFile.name : "Click to upload resume"}
                    </p>
                    <p className="text-xs text-muted-foreground">PDF or DOCX, max 5MB</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf,.docx"
                    className="hidden"
                    onChange={(e) => {
                      const f = e.target.files?.[0];
                      if (f) handleFileUpload(f);
                    }}
                  />
                </label>
                {fileError && (
                  <p className="text-xs text-destructive">{fileError}</p>
                )}
                <p className="text-xs text-muted-foreground">
                  You can also upload later in the Resume section. It enables skill gap analysis.
                </p>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-10 pt-6 border-t border-border">
            {step > 0 ? (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep((s) => s - 1)}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            ) : (
              <div />
            )}
            {step < STEPS.length - 2 ? (
              <Button type="button" onClick={handleNext} className="gap-2">
                Continue
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : step === STEPS.length - 2 ? (
              <Button type="submit" className="gap-2">
                Start Assessment
                <ArrowRight className="h-4 w-4" />
              </Button>
            ) : null}
          </div>
        </form>
      </PageWrapper>
    </div>
  );
}
