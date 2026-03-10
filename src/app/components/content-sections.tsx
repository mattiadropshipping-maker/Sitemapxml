import { Sparkles, Search, TrendingUp } from 'lucide-react';

export function ContentSections() {
  return (
    <>
    <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight" style={{ color: 'var(--brand-navy)' }}>
            Sé la respuesta que la Inteligencia Artificial recomienda
          </h2>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
            Así es como tu marca puede aparecer cuando alguien consulta a ChatGPT, Perplexity o cualquier motor generativo
          </p>
        </div>

        {/* ChatGPT Search Example */}
        <div className="max-w-5xl mx-auto">
          {/* Search Query - ChatGPT Style */}
          <div className="rounded-t-2xl p-6 shadow-lg" style={{ backgroundColor: '#343541' }}>
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#19c37d' }}>
                <span className="text-white font-bold text-sm">👤</span>
              </div>
              <p className="text-lg leading-relaxed text-white pt-1">
                ¿Me puedes recomendar una clínica dental en Madrid que tenga buenas reseñas y ofrezca tratamientos de estética dental como carillas y blanqueamiento?
              </p>
            </div>
          </div>

          {/* AI Response Container - ChatGPT Style */}
          <div className="bg-white shadow-xl rounded-b-2xl">
            {/* AI Avatar and Response */}
            <div className="p-8" style={{ backgroundColor: '#f7f7f8' }}>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#19c37d' }}>
                  <Sparkles size={18} className="text-white" />
                </div>
                <div className="flex-1">
                  {/* Organic Response */}
                  <div>
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#353740' }}>
                      Te recomiendo <span className="font-bold">Clínica Dental Sonríe Plus</span>, ubicada en Calle Serrano 45 (barrio de Salamanca, Madrid). Es una clínica especializada en estética dental con excelente reputación.
                    </p>

                    <ul className="space-y-3 mb-6 ml-1">
                      <li className="flex items-start gap-2">
                        <span style={{ color: 'var(--brand-cyan)' }}>•</span>
                        <span style={{ color: '#353740' }}>
                          <strong>Carillas de porcelana:</strong> Usan cerámica de última generación y te muestran una simulación 3D del resultado antes de empezar
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: 'var(--brand-cyan)' }}>•</span>
                        <span style={{ color: '#353740' }}>
                          <strong>Blanqueamiento láser:</strong> Tratamiento profesional de grado médico con mantenimiento gratuito a los 6 meses
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: 'var(--brand-cyan)' }}>•</span>
                        <span style={{ color: '#353740' }}>
                          <strong>4.9 estrellas en Google</strong> con más de 350 opiniones que destacan resultados naturales y trato personalizado
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span style={{ color: 'var(--brand-cyan)' }}>•</span>
                        <span style={{ color: '#353740' }}>
                          <strong>Primera consulta gratis</strong> + financiación hasta 24 meses sin intereses
                        </span>
                      </li>
                    </ul>

                    <p className="text-base leading-relaxed" style={{ color: '#353740' }}>
                      Puedes contactarlos al <strong>91 123 45 67</strong>. Durante la consulta inicial, el equipo te explicará todas las opciones y te mostrará casos reales de antes y después.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-xl mb-6 font-semibold" style={{ color: 'var(--brand-navy)' }}>
              ¿Quieres que tu marca aparezca así?
            </p>
            <a href="/contacto">
              <button
                className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl transform hover:scale-105 transition-transform duration-200"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Solicita tu Auditoría Gratuita
              </button>
            </a>
          </div>
        </div>

        {/* Value Props Grid */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}>
              <Sparkles size={32} style={{ color: 'var(--brand-cyan)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              Visibilidad Orgánica
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
              Optimizamos tu contenido para que los motores de IA te recomienden naturalmente como fuente autorizada
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}>
              <TrendingUp size={32} style={{ color: 'var(--brand-cyan)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              Anuncios Estratégicos
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
              Campañas patrocinadas en Perplexity y otros buscadores de IA para captar intención de compra inmediata
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}>
              <Search size={32} style={{ color: 'var(--brand-cyan)' }} />
            </div>
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              Dominio Completo
            </h3>
            <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
              Combinamos ambas estrategias para que tu marca capture el 100% de las oportunidades en búsqueda generativa
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* ChatGPT Ads USA Section */}
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Alert Banner */}
          <div className="mb-12 p-6 rounded-lg border-l-4" style={{ backgroundColor: '#FFF8E1', borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--brand-cyan)' }}>
                <Sparkles size={24} className="text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2" style={{ color: 'var(--brand-navy)' }}>
                  🚀 ChatGPT lanza oficialmente su programa de publicidad en Estados Unidos
                </h3>
                <p className="text-base leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                  OpenAI ha comenzado a monetizar ChatGPT con anuncios patrocinados para empresas seleccionadas
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
              La Revolución Ya Comenzó en Estados Unidos
            </h2>
            <p className="text-xl leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
              ChatGPT procesa más de <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>1.000 millones de consultas mensuales</span>. Las marcas estadounidenses ya están comprando visibilidad en estas conversaciones.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
              <div className="text-5xl font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>
                1B+
              </div>
              <p className="font-semibold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Consultas Mensuales
              </p>
              <p className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>
                en ChatGPT a nivel global
              </p>
            </div>

            <div className="text-center p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
              <div className="text-5xl font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>
                300M
              </div>
              <p className="font-semibold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Usuarios Activos
              </p>
              <p className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>
                semanalmente en todo el mundo
              </p>
            </div>

            <div className="text-center p-8 rounded-lg shadow-lg" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
              <div className="text-5xl font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>
                Q2 2025
              </div>
              <p className="font-semibold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Lanzamiento Europa
              </p>
              <p className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>
                estimado para anuncios en la UE
              </p>
            </div>
          </div>

          {/* Urgency Message */}
          <div className="rounded-xl p-10 shadow-2xl" style={{ backgroundColor: 'var(--brand-navy)' }}>
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Europa es el Siguiente Mercado
              </h3>
              <p className="text-lg text-white/90 leading-relaxed max-w-3xl mx-auto">
                Cuando ChatGPT Ads y otros programas de publicidad en motores generativos lleguen a Europa, las empresas que ya estén optimizadas con <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>GEO</span> tendrán una ventaja competitiva decisiva.
              </p>
            </div>

            <div className="bg-white/10 rounded-lg p-8 mb-8">
              <h4 className="font-bold text-xl text-white mb-4 text-center">
                ¿Por qué prepararse ahora?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-white">
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">⚡</span>
                  <div>
                    <p className="font-semibold mb-1">Primera posición ventajosa</p>
                    <p className="text-sm text-white/80">Las marcas que construyan autoridad en GEO ahora dominarán las recomendaciones orgánicas cuando llegue la publicidad</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="font-semibold mb-1">Costos más bajos</p>
                    <p className="text-sm text-white/80">Los anuncios en plataformas nuevas son más económicos al inicio. Los early adopters obtienen mejor ROI</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">📊</span>
                  <div>
                    <p className="font-semibold mb-1">Datos de competencia</p>
                    <p className="text-sm text-white/80">Aprende de casos de éxito en USA y replica estrategias probadas en el mercado europeo</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl flex-shrink-0">🎯</span>
                  <div>
                    <p className="font-semibold mb-1">Infraestructura lista</p>
                    <p className="text-sm text-white/80">Tu sitio web, contenido y presencia digital estarán optimizados desde el día uno del lanzamiento</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-white/90 mb-6 text-lg">
                Estamos preparando a nuestros clientes hoy para liderar mañana
              </p>
              <a href="/contacto">
                <button
                  className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl transform hover:scale-105 transition-transform duration-200"
                  style={{ backgroundColor: 'var(--brand-cyan)' }}
                >
                  Quiero Prepararme Ahora
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}