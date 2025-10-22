import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Grille des sections */}
        <div className="space-y-24">
          {/* Notre Histoire */}
          <div className="relative">
            {/* Image à droite */}
            <div className="hidden lg:block relative z-50 h-[300px] w-[300px] rounded-3xl overflow-hidden ml-auto">
              <Image
                src="/apropos-section-image1.png"
                alt="Notre Histoire"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 left-0 w-full lg:max-w-[900px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#FFD700] to-[#FFA500] rounded-4xl p-10 max-md:p-6 lg:pr-20 shadow-2xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 border-b-4 border-white pb-2 inline-block">
                  Notre Histoire
                </h2>

                {/* Contenu */}
                <div className="text-black leading-relaxed text-justify space-y-4">
                  <p>
                    Batec Guadeloupe a vu le jour il y a 3 ans, avec une vision claire : devenir le partenaire incontournable pour tous les projets de construction et de rénovation en Guadeloupe. Guidée par des passionnés du BTP, notre entreprise s&apos;est forgé une réputation d&apos;excellence grâce à notre engagement envers la qualité et notre profonde connaissance des spécificités locales.
                  </p>
                  <p>
                    Depuis nos débuts, nous avons accompagné des dizaines de clients, des collectivités publiques aux particuliers, en transformant leurs idées en projets concrets. Chaque chantier est une nouvelle opportunité de mettre en avant notre savoir-faire et de contribuer au développement de notre belle île.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Notre Mission */}
          <div className="relative">
            {/* Image à gauche */}
            <div className="hidden lg:block relative z-50 h-[300px] w-[300px] rounded-3xl overflow-hidden">
              <Image
                src="/apropos-section-image2.png"
                alt="Notre Mission"
                fill
                className="object-cover"
              />
            </div>

            {/* Carte d'information superposée */}
            <div className="lg:absolute top-1/2 lg:-translate-y-1/2 right-0 w-full lg:max-w-[900px] px-6 md:px-0">
              <div className="bg-gradient-to-br from-[#33B5E5] to-[#0099CC] rounded-4xl p-10 max-md:p-6 lg:pl-20 shadow-2xl">
                {/* Titre */}
                <h2 className="text-3xl md:text-4xl font-bold text-[#FFD700] mb-6 border-b-4 border-[#FFD700] pb-2 inline-block">
                  Notre Mission
                </h2>

                {/* Contenu */}
                <div className="text-white leading-relaxed text-justify space-y-4">
                  <p>
                    Chez Batec Guadeloupe, notre mission va au-delà de la simple construction : nous voulons bâtir un avenir meilleur pour la Guadeloupe. Chaque projet est une occasion de créer des espaces qui améliorent la vie des habitants, qu&apos;il s&apos;agisse d&apos;écoles modernes pour les enfants, de bâtiments collectifs pour les communautés, ou de maisons qui deviennent des foyers chaleureux pour les familles.
                  </p>
                  <p>
                    Nous combinons innovation, durabilité et un profond respect des délais pour offrir des résultats qui non seulement répondent à vos attentes, mais les dépassent. Avec Batec Guadeloupe, vous choisissez un partenaire qui partage vos ambitions et valorise votre vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
