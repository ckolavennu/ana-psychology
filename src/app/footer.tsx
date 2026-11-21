import Link from "next/link";
import { content, type Locale } from "./content";

export default function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer;
  const home = locale === "en" ? "/" : "/es/";

  return (
    <footer className="border-t border-[var(--line)] bg-[var(--cream)]">
      <div className="site-container grid gap-8 py-12 md:grid-cols-2 md:items-end">
        <div>
          <Link href={home} className="font-serif text-3xl">Ana<span className="text-[var(--sage)]">.</span></Link>
          <p className="mt-2 text-sm text-[var(--muted)]">{t.line}</p>
        </div>
        <div className="md:text-right">
          <nav aria-label={locale === "en" ? "Footer" : "Pie de página"} className="flex gap-6 text-sm md:justify-end">
            <Link href={`${home}legal/`} className="hover:text-[var(--sage)]">{t.legal}</Link>
            <Link href={`${home}privacy/`} className="hover:text-[var(--sage)]">{t.privacy}</Link>
          </nav>
          <p className="mt-3 text-xs text-[var(--muted)]">{t.draft}</p>
        </div>
      </div>
    </footer>
  );
}
