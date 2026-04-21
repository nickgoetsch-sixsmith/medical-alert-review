import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

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
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

        <header className="bg-[#1a5f7a] text-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <a href="/" className="text-xl font-bold tracking-tight hover:opacity-90">
              MedicalAlertReview.com
            </a>
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="/best-medical-alert-systems" className="hover:underline">Best Systems</a>
              <a href="/medical-guardian-review" className="hover:underline">Medical Guardian</a>
              <a href="/bay-alarm-medical-review" className="hover:underline">Bay Alarm</a>
              <a href="/life-alert-cost" className="hover:underline">Life Alert Cost</a>
              <a href="/no-monthly-fee-medical-alert" className="hover:underline">No Monthly Fee</a>
            </nav>
          </div>
        </header>

        <main className="flex-1">{children}</main>

        <footer className="bg-gray-900 text-gray-400 text-sm mt-16">
          <div className="max-w-5xl mx-auto px-4 py-10 grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="font-semibold text-white mb-2">MedicalAlertReview.com</p>
              <p>Independent, unbiased reviews of medical alert systems for seniors and their families.</p>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Reviews</p>
              <ul className="space-y-1">
                <li><a href="/medical-guardian-review" className="hover:text-white">Medical Guardian Review</a></li>
                <li><a href="/bay-alarm-medical-review" className="hover:text-white">Bay Alarm Medical Review</a></li>
                <li><a href="/life-alert-cost" className="hover:text-white">Life Alert Cost</a></li>
                <li><a href="/best-medical-alert-systems" className="hover:text-white">Best Medical Alert Systems</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Topics</p>
              <ul className="space-y-1">
                <li><a href="/no-monthly-fee-medical-alert" className="hover:text-white">No Monthly Fee Options</a></li>
                <li><a href="/fall-detection-medical-alert" className="hover:text-white">Fall Detection Devices</a></li>
                <li><a href="/medical-alert-system-for-elderly" className="hover:text-white">Systems for Elderly</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-white mb-2">Sister Sites</p>
              <ul className="space-y-2">
                <li>
                  <a href="https://bestphonesforseniors.com" className="hover:text-white font-medium">Best Phones for Seniors</a>
                  <p className="text-xs mt-0.5">Senior-friendly phone reviews &amp; buying guides</p>
                </li>
                <li className="mt-2">
                  <a href="https://agingparenttech.com" className="hover:text-white font-medium">Aging Parent Tech</a>
                  <p className="text-xs mt-0.5">Safety &amp; daily-living products for aging parents</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-5xl mx-auto px-4 pb-6 text-xs text-gray-500">
            <p>© 2026 MedicalAlertReview.com. We may earn a commission from links on this page. This does not affect our editorial independence.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
