import type { Metadata } from "next";
import { Protest_Strike, Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const protestStrike = Protest_Strike({
  variable: "--font-protest-strike",
  subsets: ["latin"],
  weight: "400",
});

const play = Play({
  variable: "--font-play",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "BATEC Guadeloupe - Construction et Rénovation BTP",
  description: "Votre partenaire BTP de confiance pour des constructions et rénovations d'exception en Guadeloupe, avec une garantie décennale pour une sérénité totale.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${protestStrike.variable} ${play.variable} antialiased font-play`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
