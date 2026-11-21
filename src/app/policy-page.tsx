import Link from "next/link";
import { content, type Locale } from "./content";

export default function PolicyPage({ locale, kind }: { locale: Locale; kind: "legal" | "privacy" }) {
  const t = content[locale][kind];
  const home = locale === "en" ? "/" : "/es/";

  return (
    <main id="main-content" className="site-container min-h-[60vh] py-20 md:py-28">
      <p className="eyebrow">Ana · {content[locale].brand}</p>
      <h1 className="display mt-5 text-4xl sm:text-5xl">{t.title}</h1>
      <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">{t.intro}</p>
      <ul className="mt-9 max-w-2xl list-disc space-y-4 pl-6 leading-7 text-[var(--muted)]">
        {t.items.map((item) => <li key={item}>{item}</li>)}
      </ul>
      <Link href={home} className="text-link mt-12 inline-flex">{content[locale].nav.home}<span aria-hidden="true">→</span></Link>
    </main>
  );
}
