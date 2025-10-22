import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  ctaTitle?: string;
  ctaDescription?: string;
  ctaButtonText?: string;
}

export default function Footer({
  ctaTitle = "Lancez Votre Projet avec un Partenaire de Confiance",
  ctaDescription = "Faites confiance à une réalité avec Batec Guadeloupe. Contactez-nous pour un devis gratuit et découvrez comment nous pouvons transformer vos idées en succès !",
  ctaButtonText = "Obtenir un Devis",
}: FooterProps) {
  return (
    <footer className="bg-gradient-to-b from-[#3DB5FF] to-[#2393D9] text-white">
      {/* Section CTA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4">
            {ctaTitle}
          </h2>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-4">
            {ctaDescription}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors"
          >
            {ctaButtonText}
          </Link>
        </div>
      </div>

      {/* Section Informations */}
      <div className="bg-[#2393D9] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Nom de l'entreprise */}
          <h3 className="text-lg sm:text-xl font-bold mb-4">BATEC Guadeloupe</h3>
          
          {/* Adresse */}
          <p className="mb-2 text-sm sm:text-base px-4">
            1 Lot Immeuble Sud Jarry, ZAC de Houelbourg à 7122 BAIE-MAHAULT
          </p>
          
          {/* Téléphone */}
          <p className="mb-2 text-sm sm:text-base">
            Tél : <a href="tel:+590690326" className="hover:underline">0590 69 32 66</a>
          </p>
          
          {/* Email */}
          <p className="mb-6 text-sm sm:text-base break-all px-4">
            Email : <a href="mailto:commercial@batec-guadeloupe.com" className="hover:underline">commercial@batec-guadeloupe.com</a>
          </p>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/batec-logo-white.png"
              alt="Batec Guadeloupe Logo"
              width={80}
              height={80}
            />
          </div>

          {/* Copyright */}
          <p className="text-xs sm:text-sm">
            © 2025 BATEC Guadeloupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
