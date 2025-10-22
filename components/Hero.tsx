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
    <section className="relative w-full h-[700px] overflow-hidden">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex flex-col justify-center items-center">
        <div className="max-w-4xl flex flex-col justify-between gap-10">
          <div>
            {/* Titre */}
          <h1 className="text-5xl max-w-2xl mx-auto md:text-6xl font-bold text-[#0099CC] text-center mb-6 leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-black text-center mb-8 leading-relaxed">
            {description}
          </p>
          </div>

          {/* Bouton avec cursor personnalisé */}
          <div className="relative group w-full flex justify-center items-center">
            <a
              href={buttonLink}
              onClick={onButtonClick}
              className="inline-flex items-center bg-[#0099CC] text-white rounded-full hover:bg-[#007aa3] transition-all duration-300 pl-10 pr-30 py-4"
            >
              <span className="text-xl font-normal w-[200px] text-center">
                {buttonText}
              </span>
            </a>
            {/* Cercle jaune avec icône cursor */}
            <div className="absolute right-64 bg-[#FFD700] w-28 h-28 rounded-full flex items-center justify-center transition-transform group-hover:scale-105 pointer-events-none">
              <div className="relative w-10 h-10">
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
