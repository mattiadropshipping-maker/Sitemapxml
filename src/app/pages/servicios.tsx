import { Sparkles, Target, Globe, TrendingUp, CheckCircle, ArrowRight, Users, BarChart, Zap } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function Servicios() {
  const services = [
    {
      icon: Sparkles,
      title: 'GEO (Optimización para Motores Generativos)',
      description:
        'Posiciona tu marca como la respuesta preferida de ChatGPT, Perplexity, Gemini y otros motores generativos.',
      features: [
        'Análisis de presencia en motores generativos',
        'Optimización de contenido para IA',
        'Estrategia de citación y fuentes',
        'Monitoreo de recomendaciones de IA',
      ],
      link: '/servicios/geo',
    },
    {
      icon: Target,
      title: 'Ads en Buscadores de IA y PPC',
      description: 'Campañas publicitarias estratégicas en plataformas emergentes y tradicionales.',
      features: [
        'Anuncios en plataformas de IA',
        'Google Ads & Bing Ads avanzados',
        'Optimización de conversión',
        'A/B testing continuo',
      ],
      link: '/servicios/ppc',
    },
    {
      icon: Globe,
      title: 'Diseño Web Optimizado para IA',
      description: 'Sitios web diseñados para ser comprendidos por motores de búsqueda generativos.',
      features: [
        'Arquitectura semántica avanzada',
        'Schema markup optimizado',
        'UX orientada a conversión',
        'Performance y velocidad',
      ],
      link: '/servicios/diseno-web',
    },
    {
      icon: TrendingUp,
      title: 'SEO Avanzado y Gestión de Reputación',
      description: 'Estrategias SEO técnicas combinadas con gestión de reputación online.',
      features: [
        'SEO técnico y on-page',
        'Link building de autoridad',
        'Gestión de reseñas y menciones',
        'Monitoreo de reputación digital',
      ],
      link: '/servicios/seo',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Auditoría y Análisis',
      description: 'Evaluación completa de tu presencia digital actual en motores tradicionales y generativos.',
    },
    {
      number: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseño de plan de acción adaptado a tus objetivos de negocio y sector.',
    },
    {
      number: '03',
      title: 'Implementación',
      description: 'Ejecución de optimizaciones técnicas, contenido y campañas publicitarias.',
    },
    {
      number: '04',
      title: 'Monitoreo y Optimización',
      description: 'Seguimiento continuo de métricas y ajustes para maximizar resultados.',
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Mayor Visibilidad',
      description: 'Aparece en las recomendaciones de los principales motores de IA',
    },
    {
      icon: BarChart,
      title: 'ROI Comprobado',
      description: 'Resultados medibles que impactan directamente en tu negocio',
    },
    {
      icon: Zap,
      title: 'Ventaja Competitiva',
      description: 'Adelántate a la competencia en la nueva era de búsqueda',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Servicios Especializados en GEO y Marketing de IA
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Soluciones completas para dominar la nueva era de búsqueda impulsada por inteligencia artificial
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div
                    className="w-16 h-16 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={32} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h2 className="text-3xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                    {service.title}
                  </h2>
                  <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <button
                      className="px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: 'var(--brand-cyan)' }}
                    >
                      Saber más
                    </button>
                  </Link>
                </div>
                <div className={`bg-white rounded-lg p-8 shadow-lg border border-gray-100 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
                    ¿Qué incluye?
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-start space-x-3">
                        <CheckCircle size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                        <span className="text-lg" style={{ color: 'var(--brand-gray-dark)' }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Metodología probada que garantiza resultados medibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.number} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div
                    className="text-5xl font-bold mb-4 opacity-20"
                    style={{ color: 'var(--brand-cyan)' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                    {step.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {step.description}
                  </p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight size={32} style={{ color: 'var(--brand-cyan)' }} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Beneficios tangibles que transforman tu presencia digital
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={32} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                    {benefit.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Section with Overlay */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736545-5c33b6255dca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0cmF0ZWd5JTIwbWVldGluZyUyMHByZXNlbnRhdGlvbnxlbnwxfHx8fDE3NzI4MzAxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Estrategia de negocio"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              ></div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                ¿Listo para liderar la búsqueda generativa?
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Nuestro equipo de expertos en GEO y marketing de IA está listo para ayudarte a alcanzar tus objetivos.
                Con años de experiencia y resultados comprobados, transformamos tu visibilidad digital.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: 'var(--brand-cyan)' }} />
                  <span style={{ color: 'var(--brand-gray-dark)' }}>Consultoría estratégica personalizada</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: 'var(--brand-cyan)' }} />
                  <span style={{ color: 'var(--brand-gray-dark)' }}>Tecnología y herramientas de vanguardia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle size={20} style={{ color: 'var(--brand-cyan)' }} />
                  <span style={{ color: 'var(--brand-gray-dark)' }}>Soporte continuo y reportes detallados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para dominar la búsqueda generativa?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Agenda una consulta estratégica gratuita y descubre cómo podemos transformar tu visibilidad digital
          </p>
          <Link to="/contacto">
            <button
              className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              Agendar Consulta Gratuita
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}