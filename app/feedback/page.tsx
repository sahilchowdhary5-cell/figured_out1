"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Star, Check, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/layout/Navbar";
import PageWrapper from "@/components/layout/PageWrapper";
import { useAppStore } from "@/lib/store/appStore";
import { cn } from "@/lib/utils";
import type { FeedbackData, RoleRelevance, WillingnessToPay } from "@/lib/types";

const FEATURES = [
  "Psychometric Assessment",
  "Role Match Results",
  "Day in the Life Explorer",
  "Market Intelligence",
  "Corporate Truths",
  "Resume Gap Analysis",
  "Action Roadmap",
];

const ROLE_RELEVANCE: RoleRelevance[] = ["Very Relevant", "Relevant", "Somewhat", "Not Relevant"];
const WTP: WillingnessToPay[] = ["Under ₹500", "₹500–1000", "₹1000–2000", "₹2000+", "No"];

export default function FeedbackPage() {
  const router = useRouter();
  const { setFeedback, userProfile } = useAppStore();
  const [submitted, setSubmitted] = useState(false);

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [relevance, setRelevance] = useState<RoleRelevance | null>(null);
  const [premium, setPremium] = useState<boolean | null>(null);
  const [wtp, setWtp] = useState<WillingnessToPay | null>(null);
  const [feature, setFeature] = useState("");
  const [wantEmail, setWantEmail] = useState(false);
  const [email, setEmail] = useState(userProfile?.email ?? "");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [comments, setComments] = useState("");

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim());
  const canSubmit =
    rating > 0 &&
    relevance &&
    premium !== null &&
    (!wantEmail || isEmailValid);

  const handleSubmit = () => {
    if (!canSubmit || !relevance) return;
    if (wantEmail && !isEmailValid) {
      setEmailError("Enter a valid email address.");
      return;
    }
    setFeedback({
      rating,
      roleRelevance: relevance,
      interestInPremium: premium ?? false,
      willingnessToPay: wtp ?? "No",
      mostUsefulFeature: feature,
      wantReportEmail: wantEmail,
      comments,
      email: wantEmail ? email.trim() : undefined,
    } as FeedbackData);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Navbar />
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto mb-6">
              <Sparkles className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Thank you!</h1>
            <p className="text-muted-foreground mb-8">
              Your feedback helps us build CareerCompass into the product that students actually need.
              Share this with a friend who's figuring out their career.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={() => router.push("/")} className="gap-2">
                Back to Home
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" onClick={() => router.push("/results")}>
                View My Results
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <PageWrapper narrow>
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-2">Quick Feedback</h1>
          <p className="text-muted-foreground">
            3 minutes. Helps us keep this free and make it better.
          </p>
        </div>

        <div className="space-y-8">
          {/* Rating */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <Label className="text-base font-semibold mb-4 block">
              Overall, how helpful was CareerCompass?
            </Label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  onClick={() => setRating(star)}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={cn(
                      "h-8 w-8 transition-colors",
                      (hoverRating || rating) >= star
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/30"
                    )}
                  />
                </button>
              ))}
            </div>
            {rating > 0 && (
              <p className="text-sm text-muted-foreground mt-2">
                {rating === 5 ? "Excellent! 🎉" : rating === 4 ? "Really good!" : rating === 3 ? "Pretty useful" : rating === 2 ? "Room to improve" : "Sorry to hear that"}
              </p>
            )}
          </div>

          {/* Role Relevance */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <Label className="text-base font-semibold mb-4 block">
              How relevant were the role recommendations to you?
            </Label>
            <div className="grid grid-cols-2 gap-2">
              {ROLE_RELEVANCE.map((r) => (
                <button
                  key={r}
                  onClick={() => setRelevance(r)}
                  className={cn(
                    "rounded-xl border p-3 text-sm font-medium transition-all text-left",
                    relevance === r
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  {relevance === r && <Check className="inline h-3.5 w-3.5 mr-1" />}
                  {r}
                </button>
              ))}
            </div>
          </div>

          {/* Premium Interest */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <Label className="text-base font-semibold mb-2 block">
              Would you pay for a premium version?
            </Label>
            <p className="text-sm text-muted-foreground mb-4">
              Premium could include: AI-powered personalized advice, 1:1 mentor matches, live market data, deeper resume analysis, and interview prep.
            </p>
            <div className="flex gap-3">
              {[true, false].map((v) => (
                <button
                  key={String(v)}
                  onClick={() => setPremium(v)}
                  className={cn(
                    "flex-1 rounded-xl border p-3 text-sm font-medium transition-all",
                    premium === v
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/30"
                  )}
                >
                  {v ? "Yes, I'd pay for this" : "No, keep it free"}
                </button>
              ))}
            </div>

            {premium && (
              <div className="mt-4">
                <Label className="text-sm font-medium mb-3 block">
                  How much would you pay per month?
                </Label>
                <div className="flex flex-wrap gap-2">
                  {WTP.map((w) => (
                    <button
                      key={w}
                      onClick={() => setWtp(w)}
                      className={cn(
                        "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                        wtp === w
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border text-muted-foreground hover:border-primary/40"
                      )}
                    >
                      {w}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Most Useful Feature */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <Label className="text-base font-semibold mb-4 block">
              Which feature was most valuable? (Optional)
            </Label>
            <div className="flex flex-wrap gap-2">
              {FEATURES.map((f) => (
                <button
                  key={f}
                  onClick={() => setFeature(feature === f ? "" : f)}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-xs font-medium border transition-all",
                    feature === f
                      ? "bg-primary text-primary-foreground border-primary"
                      : "border-border text-muted-foreground hover:border-primary/40"
                  )}
                >
                  {feature === f && <Check className="inline h-3 w-3 mr-1" />}
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Comments */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <Label className="text-base font-semibold mb-3 block">
              Any other feedback? (Optional)
            </Label>
            <Textarea
              placeholder="What would make this more useful for you? What's missing?"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              className="resize-none"
              rows={3}
            />
          </div>

          {/* Email */}
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <div
                onClick={() => setWantEmail(!wantEmail)}
                className={cn(
                  "flex h-5 w-5 items-center justify-center rounded border-2 cursor-pointer mt-0.5 transition-colors flex-shrink-0",
                  wantEmail ? "border-primary bg-primary" : "border-muted-foreground/40"
                )}
              >
                {wantEmail && <Check className="h-3 w-3 text-white" />}
              </div>
              <div>
                <p className="text-sm font-semibold">Email me my full results report</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  We&apos;ll send a one-time PDF summary to this address. We will not use it for marketing
                  or share it with third parties. See our{" "}
                  <a href="/privacy" className="underline underline-offset-2 hover:text-primary">Privacy Policy</a>.
                </p>
              </div>
            </div>
            {wantEmail && (
              <div className="mt-4 space-y-1.5">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setEmailError(null);
                  }}
                  aria-invalid={emailError ? "true" : undefined}
                  className={emailError ? "border-destructive" : ""}
                />
                {emailError && (
                  <p className="text-xs text-destructive">{emailError}</p>
                )}
              </div>
            )}
          </div>

          {/* Submit */}
          <Button
            size="lg"
            className="w-full gap-2"
            disabled={!canSubmit}
            onClick={handleSubmit}
          >
            Submit Feedback
            <ArrowRight className="h-4 w-4" />
          </Button>
          <p className="text-center text-xs text-muted-foreground">
            We read every response. Thank you for helping us build this for students.
          </p>
        </div>
      </PageWrapper>
    </div>
  );
}
