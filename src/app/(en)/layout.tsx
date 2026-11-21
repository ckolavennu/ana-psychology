import type { Metadata } from "next";
import SiteLayout from "../site-layout";

export const metadata: Metadata = {
  title: "Ana | Psychology in English & Spanish",
  description: "A warm, collaborative space for psychological support in English and Spanish. Learn about Ana's approach and experience.",
  robots: { index: false, follow: false },
};

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <SiteLayout locale="en">{children}</SiteLayout>;
}
