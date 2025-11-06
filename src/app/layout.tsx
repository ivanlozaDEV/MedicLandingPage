import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Medic Landing Page - Servicios Médicos Profesionales',
  description: 'Encuentra los mejores servicios médicos profesionales. Atención de calidad, tecnología de punta y personal altamente capacitado.',
  keywords: ['medicina', 'salud', 'servicios médicos', 'atención médica', 'doctor'],
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
