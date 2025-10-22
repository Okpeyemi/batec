import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/batec-logo-default.png"
              alt="Batec Guadeloupe Logo"
              width={150}
              height={50}
              className="h-auto"
              priority
            />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 font-black">
          <Link 
            href="/" 
            className="text-black hover:text-gray-600 transition-colors"
          >
            Accueil
          </Link>
          <Link 
            href="/services" 
            className="text-black hover:text-gray-600 transition-colors"
          >
            Services
          </Link>
          <Link 
            href="/apropos" 
            className="text-black hover:text-gray-600 transition-colors"
          >
            A propos
          </Link>
          <Link 
            href="/contact" 
            className="bg-[#BDBBBB] text-white px-6 py-2 rounded-full hover:bg-[#a8a6a6] transition-colors"
          >
            Contactez-nous
          </Link>
        </nav>
      </div>
    </header>
  );
}
