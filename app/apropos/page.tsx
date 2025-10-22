import Hero from "@/components/Hero";
import AboutSection from "@/components/apropos/AboutSection";

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
    </>
  );
}
