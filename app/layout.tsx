import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Source_Sans_3, Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import Header from "./components/Header";
import { NAV_GROUPS } from "@/lib/nav";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans-body",
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif-display",
  display: "swap",
});

// Mono is used only for the uppercase eyebrow kickers and ledger metadata —
// the "review desk" motif. Kept to a couple of weights for payload.
const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono-eyebrow",
  display: "swap",
});

// GA4: set NEXT_PUBLIC_GA_ID in the environment (e.g. "G-XXXXXXXXXX").
// When present, gtag is loaded and outbound affiliate clicks are tracked via
// lib/analytics.ts. See .env.example and the PR notes — Nick must create a GA4
// property and provide the Measurement ID; we never invent one.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const viewport: Viewport = {
  themeColor: "#1a5f7a",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://medicalalertreview.com"),
  other: {
    "impact-site-verification": "2db8d06e-f1e5-4fd4-9823-4ef65bd858ab",
  },
  title: {
    default: "Medical Alert Review | Expert Reviews & Comparisons 2026",
    template: "%s | Medical Alert Review",
  },
  description:
    "Independent reviews of the best medical alert systems for seniors. Compare Life Alert, Medical Guardian, Bay Alarm Medical, and more.",
  openGraph: {
    siteName: "Medical Alert Review",
    type: "website",
    images: [{ url: "https://medicalalertreview.com/og/home.png", width: 1200, height: 630, alt: "Medical Alert Review — Independent Comparisons for Seniors" }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable} ${plexMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="gtag-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}

        <Header />

        <main className="flex-1">{children}</main>

        <footer className="bg-brand-dark text-white/70 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-12">
            <div className="mb-10 max-w-md">
              <p className="eyebrow mb-3 text-white/60 before:bg-white/40">The Independent Review Desk</p>
              <p className="font-serif font-semibold text-white text-base mb-2">MedicalAlertReview.com</p>
              <p>Independent, unbiased reviews of medical alert systems for seniors and their families.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {NAV_GROUPS.map((group) => (
                <div key={group.title}>
                  <p className="eyebrow mb-3 text-white/60 before:bg-white/40">{group.title}</p>
                  <ul className="space-y-1">
                    {group.items.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="inline-block py-1 hover:text-white">{item.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 pb-8 text-xs text-white/50 border-t border-white/10 pt-6">
            <p className="mb-1">© 2026 MedicalAlertReview.com. We may earn a commission from links on this page. This does not affect our editorial independence.</p>
            <p>This site provides general information for comparing products and is not medical advice. For guidance about a specific health condition or fall risk, consult a qualified healthcare professional.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
