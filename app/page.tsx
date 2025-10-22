import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero
        backgroundImage="/hero-acceuil.png"
        title="Construisez votre avenir avec Batec Guadeloupe"
        description="Votre partenaire BTP de confiance pour des constructions et rénovations d'exception en Guadeloupe, avec une garantie décennale pour une sérénité totale."
        buttonText="Commencez votre projet maintenant"
        buttonLink="#contact"
      />
      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Contenu de la page à venir */}
      </main>
      <Footer />
    </div>
  );
}
