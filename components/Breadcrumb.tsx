"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  
  // Ne pas afficher sur la page d'accueil
  if (pathname === "/") return null;

  const pathSegments = pathname.split("/").filter(Boolean);
  
  const breadcrumbItems = [
    { name: "Accueil", path: "/" },
    ...pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const name = segment.charAt(0).toUpperCase() + segment.slice(1);
      return { name, path };
    }),
  ];

  // Schema JSON-LD pour les breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://batec-guadeloupe.com${item.path}`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-50 py-3 px-6 border-b border-gray-200">
        <ol className="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
          {breadcrumbItems.map((item, index) => (
            <li key={item.path} className="flex items-center">
              {index > 0 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="text-gray-600 font-semibold">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="text-[#0099CC] hover:underline"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
