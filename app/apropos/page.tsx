import type { Metadata } from "next";
import Hero from "@/components/Hero";
import AboutSection from "@/components/apropos/AboutSection";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "À Propos - Notre Histoire & Mission",
  description: "BATEC Guadeloupe : 3 ans d'expertise BTP. Découvrez notre histoire, notre mission et notre engagement pour la construction en Guadeloupe.",
  alternates: {
    canonical: 'https://batec-guadeloupe.com/apropos',
  },
  keywords: [
    "entreprise BTP Guadeloupe",
    "histoire BATEC",
    "entreprise construction Baie-Mahault",
    "BTP Antilles",
    "partenaire construction Guadeloupe"
  ],
  openGraph: {
    title: "À Propos de BATEC Guadeloupe - Notre Histoire",
    description: "3 ans d'expertise BTP en Guadeloupe. Découvrez notre engagement pour l'excellence.",
    url: "https://batec-guadeloupe.com/apropos",
  },
};

export default function APropos() {
  return (
    <>
      <Hero
        backgroundImage="/hero-apropos.png"
        title="À Propos de Batec Guadeloupe"
        description="Votre partenaire de confiance pour bâtir l'avenir de la Guadeloupe, avec expertise et passion."
        buttonText="Contactez nous dès maintenant"
        buttonLink="/contact"
      />
      <AboutSection />
            <Footer
              ctaTitle="Prêt à Lancer Votre Projet BTP ?"
              ctaDescription="Faites confiance à Batec Guadeloupe pour un résultat qui dépasse vos attentes. Contactez-nous pour un devis personnalisé et gratuit !"
              ctaButtonText="Demandez un Devis"
            />
    </>
  );
}
