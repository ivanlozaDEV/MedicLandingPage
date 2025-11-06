export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-4">
              <span className="bg-medical/10 text-medical px-4 py-2 rounded-full text-sm font-semibold">
                Oftalmología Profesional
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Cuidamos Tu{' '}
              <span className="text-medical">Visión</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Especialista en salud visual con más de 15 años de experiencia. 
              Tecnología de última generación para el cuidado integral de tus ojos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-medical hover:bg-medical-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Agendar Consulta
              </button>
              <button className="bg-white hover:bg-gray-50 text-medical px-8 py-4 rounded-lg font-semibold border-2 border-medical transition-all">
                Ver Especialidades
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 max-w-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-medical">15+</p>
                <p className="text-sm text-gray-600 mt-1">Años de experiencia</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-medical">5000+</p>
                <p className="text-sm text-gray-600 mt-1">Pacientes atendidos</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-medical">98%</p>
                <p className="text-sm text-gray-600 mt-1">Satisfacción</p>
              </div>
            </div>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="flex-1 relative">
            <div className="w-full aspect-square bg-gradient-to-br from-medical/20 to-blue-200 rounded-3xl shadow-2xl flex items-center justify-center">
              <div className="text-center">
                <svg 
                  className="w-48 h-48 mx-auto text-medical opacity-50" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" 
                  />
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={1.5} 
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
                  />
                </svg>
                <p className="text-gray-500 mt-4">Foto del Dr. David Dañin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
