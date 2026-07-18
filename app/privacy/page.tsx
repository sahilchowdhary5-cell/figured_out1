import Link from "next/link";
import { Shield, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/layout/Navbar";

export const metadata = {
  title: "Privacy Policy — CareerCompass",
  description: "How CareerCompass collects, uses, and protects your personal data under the DPDP Act 2023.",
};

const LAST_UPDATED = "21 April 2026";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
          <ArrowLeft className="h-4 w-4" />
          Back to CareerCompass
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-3xl font-bold tracking-tight">Privacy Policy</h1>
        </div>
        <p className="text-sm text-muted-foreground mb-10">
          Last updated: {LAST_UPDATED} · Compliant with the Digital Personal Data Protection (DPDP) Act, 2023
        </p>

        <div className="prose prose-sm max-w-none space-y-8 text-foreground">

          {/* 1. Overview */}
          <section>
            <h2 className="text-lg font-bold mb-3">1. About This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              CareerCompass ("we", "us", "our") is a career intelligence platform for students and early
              professionals in India. This Privacy Policy explains how we collect, use, store, and protect
              your Personal Data in accordance with the Digital Personal Data Protection Act, 2023 (DPDP Act)
              and other applicable Indian laws.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              <strong className="text-foreground">Important:</strong> CareerCompass currently operates as a
              client-side application. All personal data you enter is processed and stored exclusively in
              your own browser (localStorage). We do not transmit your personal data to any external server
              unless you explicitly opt in to receive an email report.
            </p>
          </section>

          {/* 2. Data we collect */}
          <section>
            <h2 className="text-lg font-bold mb-3">2. Personal Data We Collect</h2>
            <div className="rounded-xl border border-border overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    <th className="text-left p-3 font-semibold">Data</th>
                    <th className="text-left p-3 font-semibold">Purpose</th>
                    <th className="text-left p-3 font-semibold">Stored Where</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {[
                    ["Name", "Personalise your results display", "Browser only"],
                    ["Email address", "Send PDF report (only if you opt in)", "Browser only; transmitted only on opt-in"],
                    ["College, degree, graduation year", "Calibrate career recommendations", "Browser only"],
                    ["Current and target city", "Show localised market data", "Browser only"],
                    ["Assessment responses (50 questions)", "Compute psychometric dimension scores", "Browser only"],
                    ["Resume file name (not the file)", "Display upload status", "Browser only"],
                    ["Career preferences and interests", "Weight role recommendations", "Browser only"],
                  ].map(([data, purpose, where]) => (
                    <tr key={data} className="text-muted-foreground">
                      <td className="p-3 font-medium text-foreground">{data}</td>
                      <td className="p-3">{purpose}</td>
                      <td className="p-3 text-xs">{where}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-muted-foreground text-xs mt-3">
              We do not collect payment information, Aadhaar numbers, or any Government-issued identifiers.
            </p>
          </section>

          {/* 3. Legal basis / Consent */}
          <section>
            <h2 className="text-lg font-bold mb-3">3. Legal Basis for Processing (DPDP Act §4, §6)</h2>
            <p className="text-muted-foreground leading-relaxed">
              We process your Personal Data solely on the basis of your{" "}
              <strong className="text-foreground">free, specific, informed, and unambiguous consent</strong>{" "}
              as required under Section 6 of the DPDP Act, 2023. You provided this consent by clicking
              "Accept &amp; Continue" on the consent banner shown at your first visit.
            </p>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground mt-3 ml-2">
              <li>You may withdraw consent at any time — see Section 7 (Your Rights).</li>
              <li>Withdrawal does not affect the lawfulness of processing before withdrawal.</li>
              <li>No goods or services are denied if you choose not to consent.</li>
            </ul>
          </section>

          {/* 4. How we use data */}
          <section>
            <h2 className="text-lg font-bold mb-3">4. How We Use Your Data</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-2">
              <li>To compute your psychometric dimension profile across 12 dimensions.</li>
              <li>To recommend the top career roles that best match your profile.</li>
              <li>To personalise market intelligence and salary data to your target city.</li>
              <li>To perform resume gap analysis and generate an action roadmap.</li>
              <li>
                To send you a PDF summary report via email —{" "}
                <strong className="text-foreground">only if you explicitly opt in</strong> on the Feedback page.
              </li>
            </ul>
            <p className="text-muted-foreground mt-3">
              We do not use your data for advertising, profiling for third parties, automated decision-making
              with legal effects, or any purpose beyond those listed above (Purpose Limitation — DPDP Act §4).
            </p>
          </section>

          {/* 5. Data retention */}
          <section>
            <h2 className="text-lg font-bold mb-3">5. Data Retention &amp; Storage Limitation</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your data is stored in your browser's localStorage. It is automatically deleted after{" "}
              <strong className="text-foreground">90 days</strong> from the date of your last profile save,
              in line with the Storage Limitation principle (DPDP Act §8(7)).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              You can delete all stored data immediately at any time using the{" "}
              <strong className="text-foreground">Delete My Data</strong> option in the navigation menu.
              Clearing your browser's site data for careercompass.app also removes all stored information.
            </p>
          </section>

          {/* 6. Data sharing */}
          <section>
            <h2 className="text-lg font-bold mb-3">6. Data Sharing &amp; Third Parties</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong className="text-foreground">We do not share, sell, rent, or disclose</strong> your
              Personal Data to any third party, data broker, advertiser, or analytics service.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-2">
              The only third-party service involved is Google Fonts (for typography), which loads font
              files from <code className="text-xs bg-muted px-1 py-0.5 rounded">fonts.gstatic.com</code>.
              This request does not include any of your Personal Data.
            </p>
          </section>

          {/* 7. Your rights */}
          <section>
            <h2 className="text-lg font-bold mb-3">7. Your Rights Under the DPDP Act 2023</h2>
            <div className="space-y-3">
              {[
                ["Right to Access (§11)", "You can view all data stored by CareerCompass in your browser's DevTools → Application → Local Storage → careercompass-store."],
                ["Right to Correction (§12)", "Update your profile at any time by returning to /onboarding."],
                ["Right to Erasure (§13)", "Click 'Delete My Data' in the navigation menu to permanently delete all locally stored data."],
                ["Right to Withdraw Consent (§6(4))", "Click 'Withdraw Consent' in the navigation menu. This immediately clears all your stored data."],
                ["Right to Grievance Redressal (§13)", "Contact us at privacy@careercompass.app for any data-related concerns. We respond within 72 hours."],
              ].map(([right, desc]) => (
                <div key={String(right)} className="rounded-xl border border-border p-4">
                  <p className="font-semibold text-sm text-foreground">{right}</p>
                  <p className="text-sm text-muted-foreground mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* 8. Children */}
          <section>
            <h2 className="text-lg font-bold mb-3">8. Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              CareerCompass is designed for students aged 15 and above. In line with the DPDP Act 2023
              (Section 9), processing of personal data of a child (under 18) requires verifiable parental
              consent. If you are under 18, please have a parent or guardian review and accept this policy
              on your behalf.
            </p>
          </section>

          {/* 9. Security */}
          <section>
            <h2 className="text-lg font-bold mb-3">9. Security Measures</h2>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-2">
              <li>All pages are served over HTTPS with HSTS enabled (2-year max-age).</li>
              <li>Content Security Policy (CSP) headers prevent cross-site scripting attacks.</li>
              <li>X-Frame-Options DENY prevents clickjacking.</li>
              <li>No data is transmitted to our servers; there is no server-side attack surface for your personal data.</li>
              <li>Data is automatically expired from localStorage after 90 days.</li>
            </ul>
          </section>

          {/* 10. Changes */}
          <section>
            <h2 className="text-lg font-bold mb-3">10. Changes to This Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update this Privacy Policy when our practices change. We will update the "Last updated"
              date above. If changes materially affect your rights, we will show a new consent banner on
              your next visit. Continued use of CareerCompass after the effective date constitutes acceptance
              of the revised policy.
            </p>
          </section>

          {/* 11. Contact */}
          <section>
            <h2 className="text-lg font-bold mb-3">11. Contact &amp; Grievance Officer</h2>
            <div className="rounded-xl bg-muted/50 border border-border p-4 text-sm text-muted-foreground space-y-1">
              <p><strong className="text-foreground">Data Fiduciary:</strong> CareerCompass</p>
              <p><strong className="text-foreground">Grievance Officer:</strong> Available at privacy@careercompass.app</p>
              <p><strong className="text-foreground">Response Time:</strong> Within 72 hours for grievances; 30 days for formal requests</p>
              <p><strong className="text-foreground">Jurisdiction:</strong> Courts of competent jurisdiction in India</p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex gap-3">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
