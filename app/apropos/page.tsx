import Hero from "@/components/Hero";
import AboutSection from "@/components/apropos/AboutSection";
import Footer from "@/components/Footer";

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
