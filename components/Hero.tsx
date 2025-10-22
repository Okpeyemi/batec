import Image from "next/image";

interface HeroProps {
  backgroundImage: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink?: string;
  onButtonClick?: () => void;
}

export default function Hero({
  backgroundImage,
  title,
  description,
  buttonText,
  buttonLink = "#",
  onButtonClick,
}: HeroProps) {
  return (
    <section className="relative w-full h-[500px] sm:h-[600px] md:h-[700px] overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Hero background"
          fill
          className="object-cover object-[25%_55%]"
          priority
        />
        {/* Overlay pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Gradient en haut */}
        <div className="absolute top-0 left-0 right-0 h-100 bg-gradient-to-b from-white to-transparent"></div>
        
        {/* Gradient en bas */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl flex flex-col justify-between gap-6 sm:gap-10">
          <div>
            {/* Titre */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl mx-auto font-bold text-[#0099CC] text-center mb-4 sm:mb-6 leading-tight px-4">
            {title}
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg md:text-xl text-black text-center mb-6 sm:mb-8 leading-relaxed px-4">
            {description}
          </p>
          </div>

          {/* Bouton avec cursor personnalisé */}
          <div className="relative group w-full flex justify-center items-center px-4">
            <a
              href={buttonLink}
              onClick={onButtonClick}
              className="inline-flex items-center bg-[#0099CC] text-white rounded-full hover:bg-[#007aa3] transition-all duration-300 p-6 sm:pl-10 sm:pr-30 py-3 sm:py-4"
            >
              <span className="text-base sm:text-xl font-normal w-[150px] sm:w-[200px] text-center">
                {buttonText}
              </span>
            </a>
            {/* Cercle jaune avec icône cursor - Caché sur mobile */}
            <div className="hidden sm:flex absolute right-48 md:right-40 lg:right-60 bg-[#FFD700] w-20 h-20 sm:w-28 sm:h-28 rounded-full items-center justify-center transition-transform group-hover:scale-105 pointer-events-none">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10">
                <Image
                  src="/cursor.png"
                  alt="Cursor icon"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
