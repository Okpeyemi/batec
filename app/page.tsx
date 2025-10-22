import Hero from "@/components/Hero";
import ExpertisesSection from "@/components/acceuil/ExpertisesSection";

export default function Home() {
  return (
    <>
      <Hero
        backgroundImage="/hero-acceuil.png"
        title="Construisez votre avenir avec Batec Guadeloupe"
        description="Votre partenaire BTP de confiance pour des constructions et rénovations d'exception en Guadeloupe, avec une garantie décennale pour une sérénité totale."
        buttonText="Commencez votre projet maintenant"
        buttonLink="#contact"
      />
      <ExpertisesSection />
    </>
  );
}
