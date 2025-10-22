export default function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "BATEC Guadeloupe",
    "image": "https://batec-guadeloupe.com/batec-logo-default.png",
    "logo": "https://batec-guadeloupe.com/batec-logo-default.png",
    "@id": "https://batec-guadeloupe.com",
    "url": "https://batec-guadeloupe.com",
    "telephone": "+590690326666",
    "email": "commercial@batec-guadeloupe.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Lot Immeuble Sud Jarry, ZAC de Houelbourg",
      "addressLocality": "Baie-Mahault",
      "postalCode": "97122",
      "addressRegion": "Guadeloupe",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.2667,
      "longitude": -61.5833
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/batecguadeloupe",
      "https://www.instagram.com/batecguadeloupe"
    ],
    "priceRange": "€€",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 16.2667,
        "longitude": -61.5833
      },
      "geoRadius": "50000"
    },
    "serviceType": [
      "Construction de bâtiments",
      "Rénovation",
      "Tous corps d'état",
      "Construction publique",
      "Construction privée"
    ],
    "description": "BATEC Guadeloupe est une entreprise BTP spécialisée en construction et rénovation avec garantie décennale. Expert en tous corps d'état pour projets publics et privés."
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "BATEC Guadeloupe",
    "image": "https://batec-guadeloupe.com/batec-logo-default.png",
    "telephone": "+590690326666",
    "email": "commercial@batec-guadeloupe.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "1 Lot Immeuble Sud Jarry, ZAC de Houelbourg",
      "addressLocality": "Baie-Mahault",
      "postalCode": "97122",
      "addressRegion": "Guadeloupe",
      "addressCountry": "FR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 16.2667,
      "longitude": -61.5833
    },
    "url": "https://batec-guadeloupe.com",
    "priceRange": "€€"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
