"use client";

import Link from "next/link";
import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppStore } from "@/lib/store/appStore";

export default function ConsentBanner() {
  const { dataConsentGiven, giveConsent, withdrawConsent } = useAppStore();

  if (dataConsentGiven) return null;

  return (
    <div
      role="dialog"
      aria-label="Data consent notice"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-card shadow-xl"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1 min-w-0">
          <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm font-semibold text-foreground">Your data, your control</p>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
              CareerCompass stores your profile and assessment results in your browser (localStorage)
              to personalise your experience. We do not send this data to any server. Data auto-deletes
              after 90 days. By clicking{" "}
              <span className="font-medium">Accept</span>, you consent under the{" "}
              <span className="font-medium">DPDP Act 2023</span>.{" "}
              <Link href="/privacy" className="underline underline-offset-2 hover:text-primary">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
        <div className="flex gap-2 flex-shrink-0 self-end sm:self-auto">
          <Button
            size="sm"
            variant="outline"
            onClick={withdrawConsent}
            className="text-xs"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={giveConsent}
            className="text-xs"
          >
            Accept & Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
