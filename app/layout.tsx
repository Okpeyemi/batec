import type { Metadata } from "next";
import { Protest_Strike, Play } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import JsonLd from "@/components/JsonLd";
import Breadcrumb from "@/components/Breadcrumb";

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
  metadataBase: new URL('https://batec-guadeloupe.com'),
  title: {
    default: "BATEC Guadeloupe - Construction et Rénovation BTP | Entreprise de Bâtiment",
    template: "%s | BATEC Guadeloupe"
  },
  description: "Expert BTP en Guadeloupe depuis 3 ans. Construction, rénovation, tous corps d'état avec garantie décennale. Devis gratuit. ☎ 0590 69 32 66",
  keywords: [
    "BTP Guadeloupe",
    "construction Guadeloupe",
    "rénovation Guadeloupe",
    "entreprise bâtiment Guadeloupe",
    "travaux construction Baie-Mahault",
    "rénovation maison Guadeloupe",
    "construction bâtiment public",
    "garantie décennale",
    "tous corps d'état",
    "BATEC",
    "travaux BTP Antilles",
    "entreprise construction 971"
  ],
  authors: [{ name: "BATEC Guadeloupe" }],
  creator: "BATEC Guadeloupe",
  publisher: "BATEC Guadeloupe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://batec-guadeloupe.com',
    siteName: 'BATEC Guadeloupe',
    title: 'BATEC Guadeloupe - Construction et Rénovation BTP',
    description: 'Expert BTP en Guadeloupe. Construction, rénovation, tous corps d\'état avec garantie décennale. Devis gratuit.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BATEC Guadeloupe - Entreprise BTP',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BATEC Guadeloupe - Construction et Rénovation BTP',
    description: 'Expert BTP en Guadeloupe. Construction, rénovation avec garantie décennale.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'votre-code-google-search-console',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <JsonLd />
      </head>
      <body
        className={`${protestStrike.variable} ${play.variable} antialiased font-play`}
      >
        <Header />
        <Breadcrumb />
        {children}
      </body>
    </html>
  );
}
