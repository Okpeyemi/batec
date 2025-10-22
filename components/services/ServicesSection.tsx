"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="pt-20 pb-20 lg:pb-60 xl:pb-40 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Titre de la section */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-black"
        >
          Explorez Nos Services BTP
        </motion.h2>

        {/* Grille des services */}
        <div className="space-y-20 lg:space-y-100 xl:space-y-80 lg:mt-54 xl:mt-44">
          {/* Service 1 - Construction d'Exception */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {/* Image à droite */}
            <div className="hidden lg:flex relative z-50 h-[400px] w-[400px] rounded-4xl overflow-hidden ml-auto">
              <Image
                src="/services-section-image1.png"
                alt="Construction d'Exception"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full lg:max-w-[700px] xl:max-w-[900px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-4xl p-10 max-md:p-6 lg:pr-44 shadow-2xl">
                {/* En-tête avec icône et titre */}
                <div className="flex items-center gap-4">
                  <div className="hidden lg:flex bg-[#FF6B6B] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/warranty.png"
                        alt="Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-black">
                    Construction d&apos;Exception : Public & Privé
                  </h3>
                </div>

                {/* Description principale */}
                <p className="text-black mb-6 leading-relaxed text-justify">
                  Réalisez vos rêves architecturaux avec Batec Guadeloupe ! Nous excellons dans la construction de bâtiments publics et privés, en mettant à profit notre maîtrise complète des métiers du BTP. Que vous soyez une collectivité, une entreprise ou un particulier, comptez sur un partenaire fiable et une expertise tous corps d&apos;état.
                </p>

                {/* Pourquoi choisir */}
                <div className="mb-6 text-justify">
                  <h4 className="font-bold text-black mb-3">Pourquoi choisir notre service de construction ?</h4>
                  <ul className="space-y-2 text-black text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Projets Publics :</strong> Nous construisons des bâtiments qui servent la communauté, comme des écoles (ex. : une école primaire à Pointe-à-Pitre avec des salles de classe équipées), des centres administratifs ou des centres administratifs modernes.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Projets Privés :</strong> Nous réalisons des villas contemporaines, des résidences de luxe, des immeubles résidentiels ou des locaux commerciaux adaptés à vos besoins.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Maîtrise Totale :</strong> Nos équipes couvrent tous les aspects du chantier : fondations solides, installations électriques décennales, finitions haut de gamme, aux intempéries, brutales, et respect des normes locales.</span>
                    </li>
                  </ul>
                </div>

                {/* Badge garantie */}
                <div className="flex items-center gap-3 mb-6 md:bg-black/10 rounded-full md:px-4 md:py-3 w-fit">
                  <div className="bg-[#FFD700] max-md:hidden w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/warranty.png"
                        alt="Garantie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-black font-bold text-sm">
                    Garantie 10 ans : votre projet est protégé contre tout défaut structurel grâce à notre assurance décennale.
                  </span>
                </div>

                {/* Boutons */}
                <div className="flex lg:flex-row flex-col items-center gap-4">
                  <div className="text-black text-sm flex-1 items-center text-justify">
                    <span>Notre promesse : Un chantier bien géré, des délais respectés, et un résultat qui vous rend fier.</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-[#FF6B6B] w-full lg:w-auto text-center text-white px-8 py-3 rounded-full font-bold hover:bg-[#ff5252] transition-colors"
                  >
                    Planifiez votre projet
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service 2 - Rénovation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Image à gauche */}
            <div className="hidden lg:flex relative z-50 h-[400px] w-[400px] rounded-4xl overflow-hidden">
              <Image
                src="/services-section-image2.png"
                alt="Rénovation"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 w-full lg:max-w-[700px] xl:max-w-[900px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#33B5E5] to-[#0099CC] rounded-4xl p-10 max-md:p-6 lg:pl-44 shadow-2xl">
                {/* En-tête avec icône et titre */}
                <div className="flex items-start gap-4 mb-6">
                  <div className="hidden lg:flex bg-[#FFD700] w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="relative w-8 h-8">
                      <Image
                        src="/warranty.png"
                        alt="Icon"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    Rénovation : Des Petites Réparations aux Transformations Complètes
                  </h3>
                </div>

                {/* Description principale */}
                <p className="text-white mb-6 leading-relaxed text-justify">
                  Donnez un coup de neuf à votre propriété avec Batec Guadeloupe ! Nous transformons vos espaces pour qu&apos;ils répondent non seulement à vos besoins actuels, mais aussi à vos rêves de rénovation. Que ce soit une simple mise à jour ou une transformation complète, nous sommes là pour vous. Nos services de rénovation incluent :
                </p>

                {/* Liste des services */}
                <div className="mb-6 text-justify">
                  <ul className="space-y-2 text-white text-sm">
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Mises à Jour Rapides :</strong> Modernisation de cuisines (nouveaux plans de travail, carrelage, électroménagers), réparation de toitures endommagées par les intempéries, ou remplacement de fenêtres pour améliorer l&apos;isolation.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Transformations Majeures :</strong> Réhabilitation complète de maisons anciennes (isolation, plomberie, électricité), extension d&apos;espaces professionnels (ex. : ajout d&apos;un étage à Saint-François pour un hôtel), ou aménagement intérieur sur mesure.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="font-bold">•</span>
                      <span><strong>Projets Récents :</strong> Modernisation d&apos;une maison à Sainte-Anne avec une nouvelle façade extérieure aux intempéries et une cuisine couverte pour profiter du climat tropical.</span>
                    </li>
                  </ul>
                </div>

                {/* Badge garantie */}
                <div className="flex items-center gap-3 mb-6 md:bg-white/20 rounded-full md:px-4 md:py-3 w-fit">
                  <div className="bg-[#FFD700] max-md:hidden w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="relative w-6 h-6">
                      <Image
                        src="/warranty.png"
                        alt="Garantie"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <span className="text-white font-bold text-sm">
                    Garantie 10 ans : vos rénovations sont sécurisées contre tout défaut structurel.
                  </span>
                </div>

                {/* Boutons */}
                <div className="flex lg:flex-row flex-col items-center gap-4">
                  <div className="text-white text-sm flex-1 items-center text-justify">
                    <span>Laissez-nous moderniser votre bien et augmenter sa valeur dès aujourd&apos;hui !</span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-block bg-white w-full lg:w-auto text-center text-[#0099CC] px-8 py-3 rounded-full font-bold hover:bg-gray-100 transition-colors"
                  >
                    Démarrez votre rénovation
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
