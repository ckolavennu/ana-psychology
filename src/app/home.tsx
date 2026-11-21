import Image from "next/image";
import Link from "next/link";
import { content, type Locale } from "./content";

const imageBase = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/ana`;

export default function Home({ locale }: { locale: Locale }) {
  const t = content[locale];
  const home = locale === "en" ? "/" : "/es/";

  return (
    <main id="main-content">
      <section id="home" className="site-container grid items-center gap-12 pb-20 pt-12 md:grid-cols-[1.06fr_0.94fr] md:gap-16 md:pb-28 md:pt-20">
        <div className="max-w-xl">
          <p className="eyebrow">{t.hero.eyebrow}</p>
          <h1 className="display mt-6 text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
            {t.hero.title} <em className="font-normal text-[var(--sage)]">{t.hero.accent}</em>
          </h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[var(--muted)]">{t.hero.text}</p>
          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link href={`${home}#contact`} className="button-primary">{t.hero.cta}<span aria-hidden="true">↗</span></Link>
            <Link href={`${home}#about`} className="text-link">{t.hero.secondary}<span aria-hidden="true">→</span></Link>
          </div>
          <div className="mt-16 flex items-center gap-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            <span className="h-px w-10 bg-[var(--sage)]" aria-hidden="true" />
            {t.hero.caption}
          </div>
        </div>
        <figure className="relative mx-auto w-full max-w-[31rem]">
          <div className="aspect-[4/5] overflow-hidden rounded-t-[48%] rounded-b-[0.5rem] bg-[var(--sand)]">
            <Image src={`${imageBase}/ana-coastal-portrait.jpeg`} alt={t.hero.imageAlt} width={1200} height={1600} sizes="(max-width: 768px) 100vw, 42vw" fetchPriority="high" className="h-full w-full object-cover object-[center_35%]" />
          </div>
          <div className="absolute -bottom-5 -left-5 hidden h-36 w-28 border-b border-l border-[var(--sage)] md:block" aria-hidden="true" />
        </figure>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--mist)]/45">
        <div className="site-container grid gap-5 py-12 md:grid-cols-[11rem_1fr] md:items-center md:py-16">
          <p className="eyebrow">{t.intro.label}</p>
          <p className="display max-w-3xl text-2xl leading-snug text-[var(--ink)] sm:text-3xl">{t.intro.text}</p>
        </div>
      </section>

      <section id="about" className="site-container grid items-center gap-14 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <figure className="relative max-w-[34rem]">
          <div className="aspect-[4/5] overflow-hidden rounded-[0.5rem] bg-[var(--sand)]">
            <Image src={`${imageBase}/ana-seaside-portait.jpeg`} alt={t.about.imageAlt} width={1536} height={2048} sizes="(max-width: 768px) 100vw, 45vw" className="h-full w-full object-cover object-[center_40%]" />
          </div>
          <figcaption className="mt-4 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">{t.about.imageCaption}</figcaption>
        </figure>
        <div className="max-w-xl">
          <p className="eyebrow">{t.about.eyebrow}</p>
          <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{t.about.title}</h2>
          <p className="mt-7 text-xl leading-8 text-[var(--sage)]">{t.about.lead}</p>
          <div className="prose-copy mt-7 space-y-5">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[var(--sand)]/45 py-24 md:py-28">
        <div className="site-container">
          <div className="max-w-3xl">
            <p className="eyebrow">{t.services.eyebrow}</p>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{t.services.title}</h2>
            <p className="prose-copy mt-6">{t.services.intro}</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {t.services.items.map((item) => (
              <article key={item.number} className="border border-[var(--line)] bg-[var(--cream)] p-7 sm:p-8">
                <p className="text-xs tracking-[0.2em] text-[var(--sage)]">{item.number}</p>
                <h3 className="display mt-8 text-2xl">{item.title}</h3>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-sm leading-6 text-[var(--muted)]">{t.services.note}</p>
        </div>
      </section>

      <section id="benefits" className="site-container py-24 md:py-32">
        <div className="grid gap-10 border border-[var(--line)] bg-[var(--mist)]/60 p-8 sm:p-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:p-16">
          <div>
            <p className="eyebrow">{t.benefits.eyebrow}</p>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{t.benefits.title}</h2>
          </div>
          <div>
            <p className="prose-copy">{t.benefits.text}</p>
            <ul className="mt-7 space-y-3 border-l-2 border-[var(--sage)] pl-5 leading-7">
              <li>{t.benefits.dla}</li>
              <li>{t.benefits.pip}</li>
            </ul>
            <p className="mt-6 text-sm leading-6 text-[var(--muted)]">{t.benefits.note}</p>
            <Link href={`${home}#contact`} className="text-link mt-8 inline-flex">{t.benefits.cta}<span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--cream)] py-24 md:py-28">
        <div className="site-container">
          <div className="max-w-2xl">
            <p className="eyebrow">{t.gallery.eyebrow}</p>
            <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{t.gallery.title}</h2>
            <p className="prose-copy mt-6">{t.gallery.text}</p>
          </div>
          <div className="mt-11 grid gap-6 sm:grid-cols-3">
            <figure>
              <div className="aspect-[4/5] overflow-hidden bg-[var(--sand)]"><Image src={`${imageBase}/ana-courtyard-portrait.jpeg`} alt={t.gallery.images[0].alt} width={1536} height={2048} sizes="(max-width: 640px) 100vw, 31vw" className="h-full w-full object-cover" /></div>
              <figcaption className="mt-3 text-sm text-[var(--muted)]">{t.gallery.images[0].caption}</figcaption>
            </figure>
            <figure>
              <div className="aspect-[4/5] overflow-hidden bg-[var(--sand)]"><Image src={`${imageBase}/ana-dog-cafe.jpeg`} alt={t.gallery.images[1].alt} width={750} height={937} sizes="(max-width: 640px) 100vw, 31vw" className="h-full w-full object-cover" /></div>
              <figcaption className="mt-3 text-sm text-[var(--muted)]">{t.gallery.images[1].caption}</figcaption>
            </figure>
            <figure>
              <div className="aspect-[4/5] overflow-hidden bg-[var(--sand)]"><Image src={`${imageBase}/ana-dog-beach-bw.jpeg`} alt={t.gallery.images[2].alt} width={1169} height={757} sizes="(max-width: 640px) 100vw, 31vw" className="h-full w-full object-cover" /></div>
              <figcaption className="mt-3 text-sm text-[var(--muted)]">{t.gallery.images[2].caption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="contact" className="site-container grid gap-12 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <div>
          <p className="eyebrow">{t.contact.eyebrow}</p>
          <h2 className="display mt-5 text-4xl leading-tight sm:text-5xl">{t.contact.title}</h2>
          <p className="prose-copy mt-6">{t.contact.text}</p>
        </div>
        <div className="self-center border-t border-[var(--line)]">
          <div className="border-b border-[var(--line)] py-6">
            <h3 className="eyebrow">{t.contact.detailLabel}</h3>
            <p className="mt-3 text-lg">{t.contact.detail}</p>
          </div>
          <div className="border-b border-[var(--line)] py-6">
            <h3 className="eyebrow">{t.contact.availabilityLabel}</h3>
            <p className="mt-3 text-lg">{t.contact.availability}</p>
          </div>
          <p className="mt-5 text-sm text-[var(--muted)]">{t.contact.draft}</p>
        </div>
      </section>
    </main>
  );
}
