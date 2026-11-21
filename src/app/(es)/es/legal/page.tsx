import type { Metadata } from "next";
import PolicyPage from "../../../policy-page";

export const metadata: Metadata = { title: "Aviso legal | Ana", robots: { index: false } };

export default function Page() {
  return <PolicyPage locale="es" kind="legal" />;
}
