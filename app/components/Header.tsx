'use client';

import { useState } from 'react';

const navLinks = [
  { href: '/best-medical-alert-systems', label: 'Best Systems' },
  { href: '/medical-guardian-review', label: 'Medical Guardian' },
  { href: '/bay-alarm-medical-review', label: 'Bay Alarm' },
  { href: '/fall-detection-medical-alert', label: 'Fall Detection' },
  { href: '/life-alert-cost', label: 'Life Alert Cost' },
  { href: '/no-monthly-fee-medical-alert', label: 'No Monthly Fee' },
  { href: '/medical-alert-system-for-elderly', label: 'For Elderly' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-[#1a5f7a] text-white">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L4 6.5V12c0 5.25 3.36 8.4 8 10 4.64-1.6 8-4.75 8-10V6.5L12 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h2l1.5-3 2 6 1.5-3H17" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight">MedicalAlertReview.com</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-5 text-sm font-medium flex-wrap">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:underline whitespace-nowrap">
              {l.label}
            </a>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-white/10 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={"block h-0.5 w-6 bg-white rounded transition-transform " + (open ? 'rotate-45 translate-y-2' : '')} />
          <span className={"block h-0.5 w-6 bg-white rounded transition-opacity " + (open ? 'opacity-0' : '')} />
          <span className={"block h-0.5 w-6 bg-white rounded transition-transform " + (open ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-[#134a61] border-t border-white/20">
          <nav className="max-w-5xl mx-auto px-4 py-3 flex flex-col">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-sm font-medium border-b border-white/10 last:border-0 hover:text-blue-200 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
