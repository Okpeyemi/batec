"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    name: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Titre */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-black">
          Ecrivez nous :
        </h2>

        {/* Formulaire */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email et Téléphone */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Votre mail"
                required
                className="w-full px-6 py-4 bg-gray-100 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              {!formData.email && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E22027] text-sm pointer-events-none">
                  *
                </span>
              )}
            </div>

            <div className="relative">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Téléphone"
                required
                className="w-full px-6 py-4 bg-gray-100 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
              />
              {!formData.phone && (
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E22027] text-sm pointer-events-none">
                  *
                </span>
              )}
            </div>
          </div>

          {/* Nom et prénoms */}
          <div className="relative">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nom et prénoms"
              required
              className="w-full px-6 py-4 bg-gray-100 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            {!formData.name && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E22027] text-sm pointer-events-none">
                *
              </span>
            )}
          </div>

          {/* Objet de la demande */}
          <div className="relative">
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Objet de votre demande"
              required
              className="w-full px-6 py-4 bg-gray-100 rounded-full text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            {!formData.subject && (
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-[#E22027] text-sm pointer-events-none">
                *
              </span>
            )}
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              required
              rows={5}
              className="w-full px-6 py-4 bg-gray-100 rounded-3xl text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-[#FFD700] resize-none"
            />
            {!formData.message && (
              <span className="absolute right-4 top-4 text-[#E22027] text-sm pointer-events-none">
                *
              </span>
            )}
          </div>

          {/* Bouton Envoyer */}
          <button
            type="submit"
            className="w-full bg-[#FFD700] text-black font-bold text-xl py-4 rounded-full hover:bg-[#FFC700] transition-colors"
          >
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
