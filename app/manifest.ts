import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'BATEC Guadeloupe - Construction et Rénovation BTP',
    short_name: 'BATEC',
    description: 'Expert BTP en Guadeloupe. Construction, rénovation avec garantie décennale.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0099CC',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
