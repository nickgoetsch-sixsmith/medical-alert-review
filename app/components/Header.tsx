'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_GROUPS } from '@/lib/nav';
import { ChevronIcon } from './Icon';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  return (
    <header className="bg-brand text-white relative z-40">
      <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center gap-3 hover:opacity-90 transition-opacity"
          onClick={() => setMobileOpen(false)}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-card bg-white/20">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3L4 6.5V12c0 5.25 3.36 8.4 8 10 4.64-1.6 8-4.75 8-10V6.5L12 3Z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h2l1.5-3 2 6 1.5-3H17" />
            </svg>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight">MedicalAlertReview.com</span>
        </Link>

        {/* Desktop mega-menu — grouped so all 11 pages are one click away. */}
        <nav
          className="hidden lg:flex items-stretch gap-1 text-sm font-medium"
          onMouseLeave={() => setOpenGroup(null)}
        >
          {NAV_GROUPS.map((group) => {
            const isOpen = openGroup === group.title;
            return (
              <div
                key={group.title}
                className="relative"
                onMouseEnter={() => setOpenGroup(group.title)}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 whitespace-nowrap px-3 py-2.5 min-h-11 rounded hover:bg-white/10 transition-colors"
                  aria-expanded={isOpen}
                  aria-haspopup="true"
                  onClick={() => setOpenGroup(isOpen ? null : group.title)}
                  onFocus={() => setOpenGroup(group.title)}
                >
                  {group.title}
                  <ChevronIcon className={`w-3.5 h-3.5 rotate-90 transition-transform ${isOpen ? '-rotate-90' : ''}`} />
                </button>
                {isOpen && (
                  <div className="absolute left-0 top-full pt-2">
                    <ul className="w-72 rounded-panel border border-rule bg-paper-raised text-ink shadow-lift p-2">
                      {group.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="block rounded-card px-3 py-2 hover:bg-brand-tint transition-colors"
                            onClick={() => setOpenGroup(null)}
                          >
                            <span className="block font-semibold text-brand">{item.label}</span>
                            {item.blurb && (
                              <span className="block text-xs text-ink-mute mt-0.5">{item.blurb}</span>
                            )}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-3 min-h-11 min-w-11 rounded hover:bg-white/10 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={"block h-0.5 w-6 bg-white rounded transition-transform " + (mobileOpen ? 'rotate-45 translate-y-2' : '')} />
          <span className={"block h-0.5 w-6 bg-white rounded transition-opacity " + (mobileOpen ? 'opacity-0' : '')} />
          <span className={"block h-0.5 w-6 bg-white rounded transition-transform " + (mobileOpen ? '-rotate-45 -translate-y-2' : '')} />
        </button>
      </div>

      {/* Mobile dropdown — full grouped IA. */}
      {mobileOpen && (
        <div className="lg:hidden bg-brand-dark border-t border-white/20 max-h-[75vh] overflow-y-auto">
          <nav className="max-w-5xl mx-auto px-4 py-4 space-y-5">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="eyebrow mb-2 text-white/70 before:bg-white/40">{group.title}</p>
                <ul>
                  {group.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="block py-2.5 min-h-11 text-sm font-medium border-b border-white/10 hover:text-brand-tint transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
