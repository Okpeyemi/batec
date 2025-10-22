"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="bg-gradient-to-b from-[#3DB5FF] to-[#2393D9] text-white">
      {/* Section CTA */}
      <div className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 px-4"
          >
            {ctaTitle}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed px-4"
          >
            {ctaDescription}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition-colors"
            >
              {ctaButtonText}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Section Informations */}
      <div className="bg-[#2393D9] py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Colonne 1 - À propos */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">À Propos</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/apropos" className="hover:underline">Notre Histoire</Link></li>
                <li><Link href="/apropos" className="hover:underline">Notre Mission</Link></li>
                <li><Link href="/services" className="hover:underline">Nos Expertises</Link></li>
                <li><Link href="/contact" className="hover:underline">Nous Contacter</Link></li>
              </ul>
            </div>

            {/* Colonne 2 - Services */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Nos Services</h3>
              <ul className="space-y-2 text-sm">
                <li><Link href="/services" className="hover:underline">Construction Bâtiment Public</Link></li>
                <li><Link href="/services" className="hover:underline">Construction Privée</Link></li>
                <li><Link href="/services" className="hover:underline">Rénovation Complète</Link></li>
                <li><Link href="/services" className="hover:underline">Tous Corps d'État</Link></li>
                <li><Link href="/contact" className="hover:underline">Devis Gratuit</Link></li>
              </ul>
            </div>

            {/* Colonne 3 - Contact */}
            <div className="text-center md:text-left">
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/contact" className="hover:underline">
                    1 Lot Immeuble Sud Jarry<br />
                    ZAC de Houelbourg<br />
                    97122 BAIE-MAHAULT
                  </Link>
                </li>
                <li>
                  <a href="tel:+590690326666" className="hover:underline">
                    Tél : 0590 69 32 66
                  </a>
                </li>
                <li>
                  <a href="mailto:commercial@batec-guadeloupe.com" className="hover:underline break-all">
                    commercial@batec-guadeloupe.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Logo et Copyright */}
          <div className="text-center border-t border-white/20 pt-6">
            <div className="flex justify-center mb-4">
              <Link href="/">
                <Image
                  src="/batec-logo-white.png"
                  alt="Batec Guadeloupe Logo"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
            <p className="text-xs sm:text-sm mb-2">
              <strong>BATEC Guadeloupe</strong> - Expert BTP Construction et Rénovation
            </p>
            <p className="text-xs sm:text-sm">
              © 2025 BATEC Guadeloupe. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
