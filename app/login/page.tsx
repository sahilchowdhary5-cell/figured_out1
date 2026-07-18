"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { Compass, Loader2, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/onboarding";
  const error = searchParams.get("error");

  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingDemo, setLoadingDemo] = useState(false);

  const handleGoogleSignIn = async () => {
    setLoadingGoogle(true);
    await signIn("google", { callbackUrl });
  };

  const handleDemoSignIn = async () => {
    setLoadingDemo(false);
    setLoadingDemo(true);
    await signIn("demo", { callbackUrl });
  };

  const errorMessages: Record<string, string> = {
    OAuthSignin: "Error starting Google Sign-In. Try again.",
    OAuthCallback: "Error completing Google Sign-In. Try again.",
    OAuthCreateAccount: "Could not create account. Try again.",
    EmailCreateAccount: "Could not create account. Try again.",
    Callback: "An authentication error occurred.",
    Default: "Something went wrong. Please try again.",
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Minimal header */}
      <header className="border-b border-border/60 bg-background/90 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary shadow-sm">
              <Compass className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold tracking-tight">CareerCompass</span>
          </Link>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-sm">
          {/* Card */}
          <div className="rounded-2xl border border-border bg-card shadow-lg p-8">
            {/* Icon */}
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 mx-auto mb-6">
              <Compass className="h-7 w-7 text-primary" />
            </div>

            <h1 className="text-2xl font-bold text-center tracking-tight mb-1">
              Welcome back
            </h1>
            <p className="text-sm text-muted-foreground text-center mb-8">
              Sign in to access your career profile, assessment results, and personalised roadmap.
            </p>

            {/* Error */}
            {error && (
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-3 mb-6">
                <p className="text-xs text-destructive text-center">
                  {errorMessages[error] ?? errorMessages.Default}
                </p>
              </div>
            )}

            {/* Google Sign-In */}
            <Button
              className="w-full gap-3 h-11 font-medium"
              onClick={handleGoogleSignIn}
              disabled={loadingGoogle || loadingDemo}
            >
              {loadingGoogle ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <GoogleIcon />
              )}
              {loadingGoogle ? "Redirecting…" : "Continue with Google"}
            </Button>

            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border" />
              </div>
              <div className="relative flex justify-center">
                <span className="bg-card px-3 text-xs text-muted-foreground">or</span>
              </div>
            </div>

            {/* Demo login */}
            <Button
              variant="outline"
              className="w-full gap-2 h-11 font-medium"
              onClick={handleDemoSignIn}
              disabled={loadingGoogle || loadingDemo}
            >
              {loadingDemo ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <span className="text-base">🧪</span>
              )}
              {loadingDemo ? "Signing in…" : "Try Demo Account"}
            </Button>

            <p className="text-[11px] text-muted-foreground text-center mt-3">
              Demo account is shared — do not enter real personal information.
            </p>
          </div>

          {/* Security notice */}
          <div className="mt-5 flex items-start gap-2 px-1">
            <Shield className="h-3.5 w-3.5 text-muted-foreground flex-shrink-0 mt-0.5" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Your assessment data is stored only in your browser — never on our servers.
              Each account is completely isolated.{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-foreground">
                Privacy Policy
              </Link>
            </p>
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Don&apos;t have an account?{" "}
            <button
              onClick={handleGoogleSignIn}
              className="underline underline-offset-2 hover:text-foreground"
            >
              Sign up with Google
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      <path
        d="M17.64 9.20455C17.64 8.56636 17.5827 7.95273 17.4764 7.36364H9V10.845H13.8436C13.635 11.97 13.0009 12.9232 12.0477 13.5614V15.8195H14.9564C16.6582 14.2527 17.64 11.9455 17.64 9.20455Z"
        fill="#4285F4"
      />
      <path
        d="M9 18C11.43 18 13.4673 17.1941 14.9564 15.8195L12.0477 13.5614C11.2418 14.1014 10.2109 14.4204 9 14.4204C6.65591 14.4204 4.67182 12.8373 3.96409 10.71H0.957275V13.0418C2.43818 15.9832 5.48182 18 9 18Z"
        fill="#34A853"
      />
      <path
        d="M3.96409 10.71C3.78409 10.17 3.68182 9.59318 3.68182 9C3.68182 8.40682 3.78409 7.83 3.96409 7.29V4.95818H0.957275C0.347727 6.17318 0 7.54773 0 9C0 10.4523 0.347727 11.8268 0.957275 13.0418L3.96409 10.71Z"
        fill="#FBBC05"
      />
      <path
        d="M9 3.57955C10.3214 3.57955 11.5077 4.03364 12.4405 4.92545L15.0218 2.34409C13.4632 0.891818 11.4259 0 9 0C5.48182 0 2.43818 2.01682 0.957275 4.95818L3.96409 7.29C4.67182 5.16273 6.65591 3.57955 9 3.57955Z"
        fill="#EA4335"
      />
    </svg>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
