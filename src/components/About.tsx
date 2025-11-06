const features = [
  {
    id: 1,
    title: '15+ Años de Experiencia',
    description: 'Más de una década brindando atención médica de calidad.',
  },
  {
    id: 2,
    title: 'Tecnología de Punta',
    description: 'Equipamiento médico de última generación para diagnósticos precisos.',
  },
  {
    id: 3,
    title: 'Personal Certificado',
    description: 'Médicos y especialistas con certificaciones nacionales e internacionales.',
  },
  {
    id: 4,
    title: 'Atención Personalizada',
    description: 'Cada paciente recibe un plan de tratamiento adaptado a sus necesidades.',
  },
]

export default function About() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="nosotros">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <div className="w-full aspect-square bg-gradient-to-br from-medical/30 to-blue-300 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <svg 
                  className="w-64 h-64 mx-auto text-medical opacity-40" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
                <p className="text-gray-600 mt-4">Imagen de instalaciones médicas</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por Qué Elegirnos?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Somos un centro médico comprometido con la salud y el bienestar de nuestros 
              pacientes, ofreciendo servicios de calidad con calidez humana.
            </p>

            <div className="space-y-6">
              {features.map((feature) => (
                <div 
                  key={feature.id}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
