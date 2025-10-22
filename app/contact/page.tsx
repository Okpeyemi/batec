import ContactHero from "@/components/contact/ContactHero";
import Divider from "@/components/contact/Divider";
import ContactForm from "@/components/contact/ContactForm";
import Footer from "@/components/Footer";

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
