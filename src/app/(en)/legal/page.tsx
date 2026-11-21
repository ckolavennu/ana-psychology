import type { Metadata } from "next";
import PolicyPage from "../../policy-page";

export const metadata: Metadata = { title: "Legal notice | Ana", robots: { index: false } };

export default function Page() {
  return <PolicyPage locale="en" kind="legal" />;
}
