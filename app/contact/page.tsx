import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import Divider from "@/components/contact/Divider";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact - Devis Gratuit BTP",
  description: "Contactez BATEC Guadeloupe pour votre projet BTP. Devis gratuit, réponse rapide. ☎ 0590 69 32 66 | 📍 Baie-Mahault | ✉ commercial@batec-guadeloupe.com",
  alternates: {
    canonical: 'https://batec-guadeloupe.com/contact',
  },
  keywords: [
    "contact BTP Guadeloupe",
    "devis gratuit construction",
    "devis rénovation Guadeloupe",
    "entreprise BTP Baie-Mahault",
    "contact BATEC"
  ],
  openGraph: {
    title: "Contactez BATEC Guadeloupe - Devis Gratuit",
    description: "Obtenez votre devis gratuit pour vos travaux BTP en Guadeloupe. Réponse rapide garantie.",
    url: "https://batec-guadeloupe.com/contact",
  },
};

export default function Contact() {
  return (
    <>
      <ContactHero />
      <Divider />
      <ContactForm />
            <Footer
              ctaTitle="Prêt à Lancer Votre Projet BTP ?"
              ctaDescription="Faites confiance à Batec Guadeloupe pour un résultat qui dépasse vos attentes. Contactez-nous pour un devis personnalisé et gratuit !"
              ctaButtonText="Demandez un Devis"
            />
    </>
  );
}
