import Header from "./header";
import Footer from "./footer";
import { content, type Locale } from "./content";
import "./globals.css";

export default function SiteLayout({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} className="scroll-smooth">
      <body>
        <a className="skip-link" href="#main-content">{content[locale].skip}</a>
        <p className="border-b border-[var(--line)] bg-[var(--sand)] px-5 py-2 text-center text-sm text-[var(--ink)]">{content[locale].preview}</p>
        <Header locale={locale} copy={{ brand: content[locale].brand, nav: content[locale].nav }} />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
