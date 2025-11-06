'use client'



export default function Location() {
  // Clinica Kennedy Samborondón
  // Coordenadas: -2.1381777, -79.8645207
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0656855820657!2d-79.86710892347616!3d-2.1381777378086444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x902d6ce59dd546b9%3A0xa45c90d30bdf469d!2sKennedy%20Clinic%20Hospital%20Samborond%C3%B3n!5e0!3m2!1ses-419!2sec!4v1699200000000!5m2!1ses-419!2sec"

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="ubicacion">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Visítanos en
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Clínica Kennedy Samborondón
          </p>
        </div>

        {/* Map - Centered */}
        <div className="max-w-5xl mx-auto">
          <div className="rounded-2xl overflow-hidden shadow-2xl h-[500px] border-4 border-white">
            <iframe
              src={mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación del consultorio - Kennedy Clinic Hospital Samborondón"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
