"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import type { content, Locale } from "./content";

export default function Header({ locale, copy }: { locale: Locale; copy: Pick<(typeof content)[Locale], "brand" | "nav"> }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const t = copy.nav;
  const home = locale === "en" ? "/" : "/es/";
  const currentPath = pathname.replace(/\/$/, "");
  const suffix = currentPath.endsWith("/legal") ? "legal/" : currentPath.endsWith("/privacy") ? "privacy/" : "";
  const links = [
    [home, t.home],
    [`${home}#about`, t.about],
    [`${home}#services`, t.services],
    [`${home}#contact`, t.contact],
  ];

  return (
    <header className="site-header sticky top-0 z-50 border-b border-[var(--line)] bg-[var(--cream)]/95 backdrop-blur-sm">
      <div className="site-container flex min-h-20 flex-wrap items-center justify-between gap-x-6 py-3">
        <Link href={home} className="flex flex-col leading-none" onClick={() => setMenuOpen(false)} aria-label={`Ana · ${copy.brand}`}>
          <span className="font-serif text-[2rem] tracking-tight">Ana<span className="text-[var(--sage)]">.</span></span>
          <span className="mt-1 text-[0.58rem] font-medium uppercase tracking-[0.22em] text-[var(--muted)]">{copy.brand}</span>
        </Link>

        <nav id="primary-navigation" aria-label={t.label} className={`${menuOpen ? "flex" : "hidden"} order-3 w-full flex-col gap-1 border-t border-[var(--line)] py-3 md:order-none md:flex md:w-auto md:flex-row md:items-center md:gap-7 md:border-0 md:py-0`}>
          {links.map(([href, label]) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} className="py-2 text-sm font-medium transition-colors hover:text-[var(--sage)]">
              {label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-3 md:ml-0">
          <div role="group" aria-label={t.language} className="flex items-center gap-1 text-xs font-semibold tracking-widest">
            <Link href={`/${suffix}`} hrefLang="en" lang="en" aria-label="English" aria-current={locale === "en" ? "true" : undefined} className={locale === "en" ? "border-b border-current px-1 py-2" : "px-1 py-2 text-[var(--muted)] hover:text-[var(--ink)]"}>EN</Link>
            <span aria-hidden="true" className="text-[var(--line)]">/</span>
            <Link href={`/es/${suffix}`} hrefLang="es" lang="es" aria-label="Español" aria-current={locale === "es" ? "true" : undefined} className={locale === "es" ? "border-b border-current px-1 py-2" : "px-1 py-2 text-[var(--muted)] hover:text-[var(--ink)]"}>ES</Link>
          </div>
          <button type="button" aria-controls="primary-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="rounded-sm px-2 py-2 text-sm font-medium md:hidden">
            {menuOpen ? t.close : t.menu}
          </button>
        </div>
      </div>
    </header>
  );
}
