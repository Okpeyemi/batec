"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" onClick={closeMenu}>
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

        {/* Burger Menu Button - Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col gap-1.5 z-50"
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-opacity ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-transform ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>

        {/* Navigation Desktop */}
        <nav className="hidden lg:flex items-center gap-8 font-black">
          <Link 
            href="/" 
            className={`transition-colors ${
              isActive("/") 
                ? "text-[#0099CC] font-bold" 
                : "text-black hover:text-gray-600"
            }`}
          >
            Accueil
          </Link>
          <Link 
            href="/services" 
            className={`transition-colors ${
              isActive("/services") 
                ? "text-[#0099CC] font-bold" 
                : "text-black hover:text-gray-600"
            }`}
          >
            Services
          </Link>
          <Link 
            href="/apropos" 
            className={`transition-colors ${
              isActive("/apropos") 
                ? "text-[#0099CC] font-bold" 
                : "text-black hover:text-gray-600"
            }`}
          >
            A propos
          </Link>
          <Link 
            href="/contact" 
            className={`px-6 py-2 rounded-full transition-colors ${
              isActive("/contact")
                ? "bg-[#0099CC] text-white hover:bg-[#007aa3]"
                : "bg-[#BDBBBB] text-white hover:bg-[#a8a6a6]"
            }`}
          >
            Contactez-nous
          </Link>
        </nav>

        {/* Navigation Mobile */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out lg:hidden z-40 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-6 p-8 mt-20 font-black">
            <Link 
              href="/" 
              onClick={closeMenu}
              className={`transition-colors text-lg ${
                isActive("/") 
                  ? "text-[#0099CC] font-bold" 
                  : "text-black hover:text-gray-600"
              }`}
            >
              Accueil
            </Link>
            <Link 
              href="/services" 
              onClick={closeMenu}
              className={`transition-colors text-lg ${
                isActive("/services") 
                  ? "text-[#0099CC] font-bold" 
                  : "text-black hover:text-gray-600"
              }`}
            >
              Services
            </Link>
            <Link 
              href="/apropos" 
              onClick={closeMenu}
              className={`transition-colors text-lg ${
                isActive("/apropos") 
                  ? "text-[#0099CC] font-bold" 
                  : "text-black hover:text-gray-600"
              }`}
            >
              A propos
            </Link>
            <Link 
              href="/contact" 
              onClick={closeMenu}
              className={`px-6 py-3 rounded-full transition-colors text-center text-lg ${
                isActive("/contact")
                  ? "bg-[#0099CC] text-white hover:bg-[#007aa3]"
                  : "bg-[#BDBBBB] text-white hover:bg-[#a8a6a6]"
              }`}
            >
              Contactez-nous
            </Link>
          </div>
        </nav>

        {/* Overlay pour fermer le menu mobile */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-30 lg:hidden"
            onClick={closeMenu}
          ></div>
        )}
      </div>
    </header>
  );
}
