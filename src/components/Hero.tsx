export default function Hero() {
  return (
    <section id="inicio" className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Tu Salud es Nuestra{' '}
              <span className="text-medical">Prioridad</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Atención médica de calidad con tecnología de punta y profesionales 
              altamente capacitados para cuidar de ti y tu familia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-medical hover:bg-medical-dark text-white px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
                Agendar Cita
              </button>
              <button className="bg-white hover:bg-gray-50 text-medical px-8 py-4 rounded-lg font-semibold border-2 border-medical transition-all">
                Conocer Más
              </button>
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
                  />
                </svg>
                <p className="text-gray-500 mt-4">Imagen del doctor o instalaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
