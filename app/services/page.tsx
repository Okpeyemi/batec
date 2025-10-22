import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";

export default function Services() {
  return (
    <>
      <Hero
        backgroundImage="/hero-services.png"
        title="Vos Projets BTP réalisés avec Excellence"
        description="De la construction d'infrastructures publiques à la rénovation de votre maison, Batec Guadeloupe vous offre des solutions sur mesure, soutenues par une expertise complète et une garantie décennale de 10 ans."
        buttonText="Obtenez votre devis aujourd'hui"
        buttonLink="/contact"
      />
      <ServicesSection />
    </>
  );
}
