import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axel Lazo — Confidence Is Engineered",
  description: "Ingeniero Industrial especializado en Business Intelligence, análisis y transformación digital.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
