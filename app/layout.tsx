import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import AuthProvider from "@/components/AuthProvider";
import ConsentBanner from "@/components/ConsentBanner";
import SessionSync from "@/components/SessionSync";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerCompass — AI-Powered Career Intelligence",
  description:
    "Discover your best-fit career paths with psychometric assessment, market intelligence, and actionable roadmaps built for students and early professionals.",
  keywords: ["career", "assessment", "students", "career guidance", "psychometric"],
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  metadataBase: new URL("https://careercompass.app"),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#4f46e5",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background">
        <AuthProvider>
          <SessionSync />
          {children}
          <ConsentBanner />
        </AuthProvider>
      </body>
    </html>
  );
}
