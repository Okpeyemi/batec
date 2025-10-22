import Hero from "@/components/Hero";
import ServicesSection from "@/components/services/ServicesSection";
import Footer from "@/components/Footer";

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
            <Footer
              ctaTitle="Prêt à Lancer Votre Projet BTP ?"
              ctaDescription="Faites confiance à Batec Guadeloupe pour un résultat qui dépasse vos attentes. Contactez-nous pour un devis personnalisé et gratuit !"
              ctaButtonText="Demandez un Devis"
            />
    </>
  );
}