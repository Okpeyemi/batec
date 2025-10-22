"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ContactHero() {
  return (
    <section className="relative w-full min-h-[400px] sm:min-h-[500px] md:h-[600px] overflow-hidden bg-white py-8 sm:py-12 md:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center w-full">
          {/* Image à gauche */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
            <Image
              src="/hero-contact.png"
              alt="Contact Batec Guadeloupe"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient en haut */}
            <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-white to-transparent"></div>
            
            {/* Gradient en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Coordonnées à droite */}
          <div className="px-4 sm:px-0">
            <motion.h1 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#0099CC] mb-6 sm:mb-8"
            >
              Coordonnées
            </motion.h1>

            <div className="space-y-4 sm:space-y-6 text-black">
              {/* Adresse */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2">Adresse :</h3>
                <p className="text-base sm:text-lg">
                  1 Lot Immeuble Sud Jarry, ZAC de Houelbourg 97122 BAIE-MAHAULT
                </p>
              </motion.div>

              {/* Téléphone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2">Téléphone :</h3>
                <a 
                  href="tel:+590690326666" 
                  className="text-base sm:text-lg hover:text-[#0099CC] transition-colors"
                >
                  0590 69 32 66
                </a>
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h3 className="font-bold text-base sm:text-lg mb-2">Email :</h3>
                <a 
                  href="mailto:commercial@batecguadeloupe.com" 
                  className="text-base sm:text-lg hover:text-[#0099CC] transition-colors underline break-all"
                >
                  commercial@batecguadeloupe.com
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
