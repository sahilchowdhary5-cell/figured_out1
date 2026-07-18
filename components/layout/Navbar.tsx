"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
import { Compass, ChevronRight, Menu, X, Trash2, LogOut } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/appStore";
import { cn } from "@/lib/utils";

const NAV_STEPS = [
  { href: "/onboarding", label: "Profile", short: "1" },
  { href: "/assessment", label: "Assessment", short: "2" },
  { href: "/results", label: "Results", short: "3" },
  { href: "/roles", label: "Explore", short: "4" },
  { href: "/market", label: "Market", short: "5" },
  { href: "/truths", label: "Truths", short: "6" },
  { href: "/resume", label: "Resume", short: "7" },
  { href: "/roadmap", label: "Roadmap", short: "8" },
  { href: "/videos", label: "Videos", short: "9" },
];

const FLOW_ORDER = [
  "/",
  "/onboarding",
  "/assessment",
  "/results",
  "/roles",
  "/market",
  "/truths",
  "/resume",
  "/roadmap",
  "/feedback",
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { data: session } = useSession();
  const clearAllData = useAppStore((s) => s.clearAllData);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const currentFlowIndex = FLOW_ORDER.findIndex(
    (p) => p === pathname || pathname.startsWith(p + "/")
  );
  const isOnFlow = currentFlowIndex > 0;

  const handleDeleteData = () => {
    if (!showDeleteConfirm) {
      setShowDeleteConfirm(true);
      setTimeout(() => setShowDeleteConfirm(false), 4000);
      return;
    }
    clearAllData();
    setShowDeleteConfirm(false);
    router.push("/");
  };

  const handleSignOut = async () => {
    clearAllData();
    await signOut({ callbackUrl: "/" });
  };

  const user = session?.user;

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary shadow-sm">
              <Compass className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="text-sm font-semibold tracking-tight text-foreground">
              CareerCompass
            </span>
          </Link>

          {/* Flow Progress — desktop */}
          {isOnFlow && (
            <nav className="hidden lg:flex items-center gap-0.5">
              {NAV_STEPS.map((step, i) => {
                const stepFlowIndex = FLOW_ORDER.indexOf(step.href);
                const isActive =
                  pathname === step.href || pathname.startsWith(step.href + "/");
                const isCompleted = currentFlowIndex > stepFlowIndex;
                return (
                  <div key={step.href} className="flex items-center">
                    <Link
                      href={step.href}
                      className={cn(
                        "relative flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium transition-colors",
                        isActive
                          ? "bg-primary/10 text-primary"
                          : isCompleted
                          ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                          : "text-muted-foreground/50 cursor-default pointer-events-none"
                      )}
                    >
                      <span
                        className={cn(
                          "flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold",
                          isActive
                            ? "bg-primary text-primary-foreground"
                            : isCompleted
                            ? "bg-primary/20 text-primary"
                            : "bg-muted text-muted-foreground/50"
                        )}
                      >
                        {step.short}
                      </span>
                      {step.label}
                    </Link>
                    {i < NAV_STEPS.length - 1 && (
                      <ChevronRight className="h-3 w-3 text-border mx-0.5" />
                    )}
                  </div>
                );
              })}
            </nav>
          )}

          {/* Right side */}
          <div className="flex items-center gap-1.5">
            {!isOnFlow && !user && (
              <Link href="/onboarding">
                <Button size="sm" className="h-7 text-xs rounded-lg">
                  Get Started
                </Button>
              </Link>
            )}

            {isOnFlow && pathname !== "/results" && (
              <Link href="/results">
                <Button size="sm" variant="ghost" className="h-7 text-xs hidden sm:flex">
                  My Results
                </Button>
              </Link>
            )}

            {/* Delete data */}
            <button
              onClick={handleDeleteData}
              title={showDeleteConfirm ? "Click again to confirm" : "Delete all my data"}
              className={cn(
                "hidden sm:flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium transition-colors",
                showDeleteConfirm
                  ? "bg-destructive/10 text-destructive hover:bg-destructive/20"
                  : "text-muted-foreground/40 hover:text-muted-foreground hover:bg-muted"
              )}
            >
              <Trash2 className="h-3 w-3" />
              {showDeleteConfirm ? "Confirm?" : ""}
            </button>

            {/* User avatar / menu */}
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setShowUserMenu((v) => !v)}
                  className="flex items-center gap-2 rounded-full border border-border/60 pl-1 pr-2.5 py-0.5 hover:bg-muted transition-colors"
                >
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name ?? "User"}
                      width={24}
                      height={24}
                      className="rounded-full"
                    />
                  ) : (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                      {(user.name ?? "U")[0].toUpperCase()}
                    </div>
                  )}
                  <span className="text-xs font-medium hidden sm:block max-w-24 truncate">
                    {user.name?.split(" ")[0] ?? "Account"}
                  </span>
                </button>

                {showUserMenu && (
                  <>
                    {/* Backdrop */}
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setShowUserMenu(false)}
                    />
                    {/* Dropdown */}
                    <div className="absolute right-0 top-9 z-50 w-52 rounded-xl border border-border bg-card shadow-xl py-1.5">
                      <div className="px-3 py-2 border-b border-border mb-1">
                        <p className="text-xs font-semibold truncate">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                      <button
                        onClick={() => { setShowUserMenu(false); handleSignOut(); }}
                        className="w-full flex items-center gap-2 px-3 py-2 text-xs text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                      >
                        <LogOut className="h-3.5 w-3.5" />
                        Sign out
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button size="sm" variant="outline" className="h-7 text-xs">
                  Sign in
                </Button>
              </Link>
            )}

            {/* Mobile menu button */}
            {isOnFlow && (
              <button
                className="lg:hidden p-1 rounded-md hover:bg-muted"
                onClick={() => setMobileOpen(!mobileOpen)}
              >
                {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && isOnFlow && (
          <div className="lg:hidden border-t border-border/60 pb-3 pt-2">
            <div className="flex flex-wrap gap-1 pt-1">
              {NAV_STEPS.map((step) => {
                const stepFlowIndex = FLOW_ORDER.indexOf(step.href);
                const isActive =
                  pathname === step.href || pathname.startsWith(step.href + "/");
                const isCompleted = currentFlowIndex > stepFlowIndex;
                return (
                  <Link
                    key={step.href}
                    href={isCompleted || isActive ? step.href : "#"}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : isCompleted
                        ? "text-muted-foreground hover:text-foreground hover:bg-muted"
                        : "text-muted-foreground/40 pointer-events-none"
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold",
                        isActive
                          ? "bg-primary text-primary-foreground"
                          : isCompleted
                          ? "bg-primary/20 text-primary"
                          : "bg-muted text-muted-foreground/40"
                      )}
                    >
                      {step.short}
                    </span>
                    {step.label}
                  </Link>
                );
              })}
            </div>
            {user && (
              <button
                onClick={handleSignOut}
                className="flex items-center gap-2 mt-2 px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground"
              >
                <LogOut className="h-3.5 w-3.5" />
                Sign out ({user.email})
              </button>
            )}
          </div>
        )}
      </div>
    </header>
  );
}
