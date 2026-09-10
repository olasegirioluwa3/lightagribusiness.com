import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Light Agribusiness',
    short_name: 'LightAgri',
    description: 'Africa\'s Agribusiness Knowledge, Advisory & Technology Institution',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf7f2',
    theme_color: '#2d5a27',
    icons: [
      {
        src: '/favicon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  }
}
