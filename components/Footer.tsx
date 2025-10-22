import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#33B5E5] to-[#0099CC] text-white">
      {/* Section CTA */}
      <div className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lancez Votre Projet avec un Partenaire de Confiance
          </h2>
          <p className="text-lg mb-8 leading-relaxed">
            Faites confiance à une réalité avec Batec Guadeloupe. Contactez-nous pour un devis gratuit et découvrez comment nous pouvons transformer vos idées en succès !
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-[#0099CC] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            Obtenir un Devis
          </Link>
        </div>
      </div>

      {/* Section Informations */}
      <div className="bg-[#0099CC] py-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          {/* Nom de l'entreprise */}
          <h3 className="text-xl font-bold mb-4">BATEC Guadeloupe</h3>
          
          {/* Adresse */}
          <p className="mb-2">
            1 Lot Immeuble Sud Jarry, ZAC de Houelbourg à 7122 BAIE-MAHAULT
          </p>
          
          {/* Téléphone */}
          <p className="mb-2">
            Tél : <a href="tel:+590690326" className="hover:underline">0590 69 32 66</a>
          </p>
          
          {/* Email */}
          <p className="mb-6">
            Email : <a href="mailto:commercial@batec-guadeloupe.com" className="hover:underline">commercial@batec-guadeloupe.com</a>
          </p>

          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/batec-logo-white.png"
              alt="Batec Guadeloupe Logo"
              width={80}
              height={80}
              className="h-auto"
            />
          </div>

          {/* Copyright */}
          <p className="text-sm">
            © 2025 BATEC Guadeloupe. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
