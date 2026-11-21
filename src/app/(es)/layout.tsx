import type { Metadata } from "next";
import SiteLayout from "../site-layout";

export const metadata: Metadata = {
  title: "Ana | Psicología en español e inglés",
  description: "Un espacio cercano y colaborativo de apoyo psicológico en español e inglés. Conoce la experiencia y el enfoque de Ana.",
  robots: { index: false, follow: false },
};

export default function SpanishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="es">{children}</SiteLayout>;
}
