import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ExpertisesSection from "@/components/acceuil/ExpertisesSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BATEC Guadeloupe - Construction BTP et Rénovation",
  description: "BATEC Guadeloupe : entreprise BTP spécialisée en construction et rénovation. Garantie décennale, tous corps d'état. Devis gratuit à Baie-Mahault.",
  alternates: {
    canonical: "https://batec-guadeloupe.com",
  },
  openGraph: {
    title: "BATEC Guadeloupe - Expert BTP Construction & Rénovation",
    description: "Entreprise BTP en Guadeloupe. Construction, rénovation avec garantie décennale.",
    url: "https://batec-guadeloupe.com",
  },
};

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="/hero-acceuil.png"
        title="Construisez votre avenir avec Batec Guadeloupe"
        description="Votre partenaire BTP de confiance pour des constructions et rénovations d'exception en Guadeloupe, avec une garantie décennale pour une sérénité totale."
        buttonText="Commencez votre projet maintenant"
        buttonLink="/contact"
      />
      <ExpertisesSection />
      <Footer />
    </>
  );
}
