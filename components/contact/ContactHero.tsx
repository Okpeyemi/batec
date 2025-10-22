import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative w-full h-[600px] overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          {/* Image à gauche */}
          <div className="relative h-[500px] overflow-hidden">
            <Image
              src="/hero-contact.png"
              alt="Contact Batec Guadeloupe"
              fill
              className="object-cover"
              priority
            />
            {/* Gradient en haut */}
            <div className="absolute top-0 left-0 right-0 h-30 bg-gradient-to-b from-white to-transparent"></div>
            
            {/* Gradient en bas */}
            <div className="absolute bottom-0 left-0 right-0 h-30 bg-gradient-to-t from-white to-transparent"></div>
          </div>

          {/* Coordonnées à droite */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0099CC] mb-8">
              Coordonnées
            </h1>

            <div className="space-y-6 text-black">
              {/* Adresse */}
              <div>
                <h3 className="font-bold text-lg mb-2">Adresse :</h3>
                <p className="text-lg">
                  1 Lot Immeuble Sud Jarry, ZAC de Houelbourg 97122 BAIE-MAHAULT
                </p>
              </div>

              {/* Téléphone */}
              <div>
                <h3 className="font-bold text-lg mb-2">Téléphone :</h3>
                <a 
                  href="tel:+590690326666" 
                  className="text-lg hover:text-[#0099CC] transition-colors"
                >
                  0590 69 32 66
                </a>
              </div>

              {/* Email */}
              <div>
                <h3 className="font-bold text-lg mb-2">Email :</h3>
                <a 
                  href="mailto:commercial@batecguadeloupe.com" 
                  className="text-lg hover:text-[#0099CC] transition-colors underline"
                >
                  commercial@batecguadeloupe.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
