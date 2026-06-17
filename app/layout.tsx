import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import Header from "./components/Header";
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
    <html lang="en" className={`${sourceSans.variable} ${sourceSerif.variable}`}>
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

        <footer className="bg-gray-900 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-white mb-2">MedicalAlertReview.com</p>
              <p className="mb-3">Independent, unbiased reviews of medical alert systems for seniors and their families.</p>
              <ul className="space-y-1">
                <li><a href="/about" className="inline-block py-1 hover:text-white">About Us</a></li>
                <li><a href="/methodology" className="inline-block py-1 hover:text-white">How We Evaluate</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Reviews</p>
              <ul className="space-y-1">
                <li><a href="/medical-guardian-review" className="inline-block py-1 hover:text-white">Medical Guardian Review</a></li>
                <li><a href="/bay-alarm-medical-review" className="inline-block py-1 hover:text-white">Bay Alarm Medical Review</a></li>
                <li><a href="/life-alert-cost" className="inline-block py-1 hover:text-white">Life Alert Cost</a></li>
                <li><a href="/best-medical-alert-systems" className="inline-block py-1 hover:text-white">Best Medical Alert Systems</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Topics</p>
              <ul className="space-y-1">
                <li><a href="/no-monthly-fee-medical-alert" className="inline-block py-1 hover:text-white">No Monthly Fee Options</a></li>
                <li><a href="/fall-detection-medical-alert" className="inline-block py-1 hover:text-white">Fall Detection Devices</a></li>
                <li><a href="/medical-alert-system-for-elderly" className="inline-block py-1 hover:text-white">Systems for Elderly</a></li>
                <li><a href="/best-medical-alert-watches" className="inline-block py-1 hover:text-white">Medical Alert Watches</a></li>
                <li><a href="/does-medicare-cover-medical-alert-systems" className="inline-block py-1 hover:text-white">Does Medicare Cover It?</a></li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 pb-6 text-xs text-gray-500">
            <p className="mb-1">© 2026 MedicalAlertReview.com. We may earn a commission from links on this page. This does not affect our editorial independence.</p>
            <p>This site provides general information for comparing products and is not medical advice. For guidance about a specific health condition or fall risk, consult a qualified healthcare professional.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
