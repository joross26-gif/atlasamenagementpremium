import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Atlas Aménagement | Paysagement & Déneigement Montréal Est",
  description: "Atlas Aménagement — Paysagement & Déneigement à Tétreaultville (Montréal-Est) et alentours. Forfaits annuels premium.",
  openGraph: {
    title: "Atlas Aménagement",
    description: "Service premium à l'année — noir & or. Montréal Est.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
