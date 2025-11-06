import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dr. David Dañin - Oftalmólogo Especialista | Cirugía LASIK, Cataratas',
  description: 'Dr. David Dañin, oftalmólogo con más de 15 años de experiencia. Especialista en cirugía de cataratas, LASIK, glaucoma y enfermedades de la retina. Tecnología de última generación.',
  keywords: ['Dr. David Dañin', 'oftalmólogo', 'oculista', 'cirugía lasik', 'cataratas', 'glaucoma', 'retina', 'salud visual', 'cirugía refractiva', 'lentes', 'vista'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  )
}
