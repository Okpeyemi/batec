"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ExpertisesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 pb-20 lg:pb-40 md:px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        {/* Titre de la section */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
        >
          Nos Expertises BTP
        </motion.h2>

        {/* Grille des expertises */}
        <div className="space-y-20">
          {/* Expertise 1 - Construction d'Exception */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Image */}
            <div className="hidden lg:block relative h-[400px] md:h-[500px] max-w-[800px] rounded-4xl overflow-hidden">
              <Image
                src="/acceuil-section-image1.png"
                alt="Construction d'Exception"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 w-full lg:w-[500px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-4xl p-8 max-md:p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                    {/* Icône */}
                <div className="hidden md:flex bg-[#E22027] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/grue.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-black mb-4 flex-1">
                  Construction d&apos;Exception : Public & Privé
                </h3>
                </div>

                {/* Description */}
                <p className="text-black mb-6 leading-relaxed text-justify">
                  Imaginez un bâtiment qui allie solidité, esthétique et fonctionnalité. Nous le réalisons pour vous ! De la construction d&apos;écoles modernes pour les collectivités aux villas de rêve pour les particuliers, nous transformons vos idées en réalité avec une expertise tous corps d&apos;état.
                </p>

                {/* Badge garantie */}
                <div className="flex items-center gap-3 mb-6 md:bg-black/10 rounded-full md:px-4 md:py-2 w-fit">
                  <div className="hidden md:flex bg-[#FFD700] w-10 h-10 rounded-full flex items-center justify-center">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/warranty.png"
                        alt="Garantie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-black font-bold flex-1">
                    Garantie 10 ans : une sécurité totale pour votre projet.
                  </span>
                </div>

                <div className="flex lg:flex-row flex-col items-center gap-4">
                    {/* Sous-texte */}
                <p className="text-black text-sm flex-1 text-justify">
                  Votre tranquillité : Un chantier bien géré, des délais respectés, et un résultat qui vous rend fier.
                </p>

                {/* Bouton */}
                <Link
                  href="/contact"
                  className="inline-block bg-[#E22027] w-full lg:w-auto text-center text-white px-8 py-3 rounded-full font-bold hover:bg-[#ff5252] transition-colors"
                >
                  En savoir plus
                </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Expertise 2 - Rénovation Sur Mesure */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Image */}
            <div className="hidden lg:block relative h-[400px] md:h-[500px] max-w-[800px] rounded-4xl overflow-hidden">
              <Image
                src="/acceuil-section-image2.png"
                alt="Rénovation Sur Mesure"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée - À gauche cette fois */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 w-full lg:w-[500px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#33B5E5] to-[#0099CC] rounded-4xl p-8 max-md:p-6 shadow-2xl">
                <div className="flex items-center gap-4">
                    {/* Icône */}
                <div className="hidden md:flex bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center mb-4">
                  <div className="relative w-8 h-8">
                    <Image
                      src="/grue.png"
                      alt="Icon"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Titre */}
                <h3 className="text-2xl font-bold text-white mb-4 flex-1">
                  Rénovation Sur Mesure : Du Simple au Spectaculaire
                </h3>
                </div>

                {/* Description */}
                <p className="text-white mb-6 leading-relaxed text-justify">
                  Donnez une nouvelle âme à votre espace ! Que ce soit pour moderniser une cuisine, réparer une toiture, ou transformer entièrement votre maison, nous vous accompagnons avec professionnalisme et créativité, avec une garantie décennale pour votre tranquillité.
                </p>

                {/* Badge garantie */}
                <div className="flex items-center gap-3 mb-6 md:bg-white/20 rounded-full md:p-2 w-fit">
                  <div className="hidden md:flex bg-[#FFD700] w-10 h-10 rounded-full flex items-center justify-center">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/warranty.png"
                        alt="Garantie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-white font-bold">
                    Garantie 10 ans : une qualité qui dure.
                  </span>
                </div>

                <div className="flex lg:flex-row flex-col items-center gap-4">
                    {/* Sous-texte */}
                <p className="text-white text-sm flex-1 text-justify">
                  Votre engagement : Des travaux maîtrisés qui valorisent votre bien et réalisent votre quotidien.
                </p>

                {/* Bouton */}
                <Link
                  href="/contact"
                  className="inline-block bg-white w-full lg:w-auto text-center text-[#0099CC] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                >
                  En savoir plus
                </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
