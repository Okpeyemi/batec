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
