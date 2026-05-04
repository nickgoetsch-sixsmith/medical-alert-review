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
        <a href="/" className="text-xl font-bold tracking-tight hover:opacity-90">
          MedicalAlertReview.com
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
