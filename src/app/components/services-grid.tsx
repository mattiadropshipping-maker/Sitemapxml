import { Sparkles, Target, Globe, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export function ServicesGrid() {
  const services = [
    {
      icon: Sparkles,
      title: 'GEO (Optimización para Motores Generativos)',
      description:
        'Optimiza tu presencia para que ChatGPT, Perplexity, Gemini y otros motores generativos recomienden tu marca como primera opción.',
      link: '/servicios/geo',
    },
    {
      icon: Target,
      title: 'Ads en Buscadores de IA y PPC',
      description:
        'Anuncios estratégicos en plataformas de IA y campañas PPC de alto rendimiento en Google, Bing y búsquedas generativas.',
      link: '/servicios/ppc',
    },
    {
      icon: Globe,
      title: 'Diseño Web Optimizado para IA',
      description:
        'Sitios web diseñados para ser indexados y comprendidos por motores de búsqueda tradicionales y generativos.',
      link: '/servicios/diseno-web',
    },
    {
      icon: TrendingUp,
      title: 'SEO Avanzado y Gestión de Reputación',
      description:
        'Estrategias SEO técnicas y de contenido, combinadas con gestión de reputación online para máxima visibilidad y confianza.',
      link: '/servicios/seo',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
            Servicios que Transforman tu Visibilidad Digital
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
            Soluciones especializadas para dominar la nueva era de búsqueda impulsada por inteligencia artificial
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div
                  className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                  style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                >
                  <Icon size={28} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold mb-4 text-lg leading-tight" style={{ color: 'var(--brand-navy)' }}>
                  {service.title}
                </h3>
                <p className="leading-relaxed mb-6" style={{ color: 'var(--brand-gray-dark)' }}>
                  {service.description}
                </p>
                <Link to={service.link}>
                  <button
                    className="flex items-center space-x-2 font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brand-cyan)' }}
                  >
                    <span>Ver detalles</span>
                    <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}