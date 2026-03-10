import { CheckCircle, TrendingUp, Search, Shield, Star, Users, BarChart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function ServicioSEO() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Crecimiento Orgánico',
      description: 'Aumenta tu visibilidad en Google sin depender solo de publicidad pagada',
    },
    {
      icon: Shield,
      title: 'Autoridad de Marca',
      description: 'Construye reputación digital sólida y confiable en tu industria',
    },
    {
      icon: Users,
      title: 'Tráfico Cualificado',
      description: 'Atrae visitantes con alta intención de compra y mayor probabilidad de conversión',
    },
    {
      icon: BarChart,
      title: 'Resultados Sostenibles',
      description: 'Inversión que genera retornos a largo plazo con efecto compuesto',
    },
  ];

  const services = [
    {
      title: 'SEO Técnico',
      items: [
        'Auditoría técnica completa',
        'Optimización de Core Web Vitals',
        'Estructura de URLs y arquitectura',
        'Velocidad de carga y rendimiento',
        'Mobile-first y responsive',
        'Schema markup y datos estructurados',
      ],
    },
    {
      title: 'SEO On-Page',
      items: [
        'Research de palabras clave',
        'Optimización de contenido existente',
        'Meta títulos y descripciones',
        'Jerarquía de encabezados',
        'Optimización de imágenes',
        'Internal linking estratégico',
      ],
    },
    {
      title: 'Link Building',
      items: [
        'Estrategia de backlinks de autoridad',
        'Outreach a sitios relevantes',
        'Guest posting en medios del sector',
        'Digital PR y menciones',
        'Análisis de perfil de enlaces',
        'Monitoreo de backlinks tóxicos',
      ],
    },
    {
      title: 'Gestión de Reputación',
      items: [
        'Monitoreo de menciones online',
        'Gestión de reseñas en Google',
        'Respuesta a feedback negativo',
        'Estrategia de review generation',
        'Análisis de sentimiento',
        'Reporte mensual de reputación',
      ],
    },
    {
      title: 'Local SEO',
      items: [
        'Optimización de Google Business Profile',
        'Gestión de listados locales',
        'Estrategia de reseñas locales',
        'Optimización para búsquedas "cerca de mí"',
        'Local citations y NAP consistency',
      ],
    },
    {
      title: 'Content Strategy',
      items: [
        'Estrategia de contenido SEO',
        'Calendar editorial',
        'Optimización de blog posts',
        'Actualización de contenido legacy',
        'Topic clusters y pillar pages',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Auditoría Integral',
      description: 'Análisis técnico, on-page, off-page y competencia',
      duration: '2 semanas',
    },
    {
      step: '02',
      title: 'Estrategia SEO',
      description: 'Plan de acción priorizado con roadmap trimestral',
      duration: '1 semana',
    },
    {
      step: '03',
      title: 'Optimizaciones',
      description: 'Implementación de mejoras técnicas y on-page',
      duration: '4-6 semanas',
    },
    {
      step: '04',
      title: 'Link Building',
      description: 'Construcción progresiva de perfil de backlinks',
      duration: 'Continuo',
    },
    {
      step: '05',
      title: 'Monitoreo',
      description: 'Tracking de rankings, tráfico y ajustes mensuales',
      duration: 'Continuo',
    },
  ];

  const metrics = [
    {
      metric: '+250%',
      label: 'Aumento promedio en tráfico orgánico',
    },
    {
      metric: '3-6 meses',
      label: 'Para ver resultados significativos',
    },
    {
      metric: '85%',
      label: 'Clientes con ROI positivo en primer año',
    },
    {
      metric: 'Top 3',
      label: 'Posiciones para keywords principales',
    },
  ];

  const industries = [
    'SaaS B2B',
    'Servicios Profesionales',
    'E-commerce',
    'Tecnología',
    'Salud y Wellness',
    'Finanzas',
    'Educación',
    'Real Estate',
    'Manufacturing',
    'Consulting',
  ];

  const faqs = [
    {
      q: '¿Cuánto tiempo toma ver resultados con SEO?',
      a: 'SEO es una estrategia a medio-largo plazo. Típicamente comenzamos a ver mejoras en rankings entre 3-4 meses, con resultados significativos entre 6-12 meses. Sin embargo, los beneficios son sostenibles y acumulativos.',
    },
    {
      q: '¿Garantizan la primera posición en Google?',
      a: 'No ofrecemos garantías de posiciones específicas, ya que Google controla los rankings. Sin embargo, garantizamos mejoras medibles en tráfico orgánico, rankings y visibilidad basadas en metodología probada.',
    },
    {
      q: '¿Qué diferencia hay entre SEO y GEO?',
      a: 'SEO optimiza para motores de búsqueda tradicionales como Google. GEO optimiza para motores generativos como ChatGPT. Recomendamos una estrategia híbrida que cubra ambos canales.',
    },
    {
      q: '¿Incluyen creación de contenido?',
      a: 'Nuestro servicio incluye optimización de contenido existente. La creación de contenido nuevo es un servicio adicional que podemos cotizar según tus necesidades.',
    },
    {
      q: '¿Cómo miden el éxito del SEO?',
      a: 'Medimos rankings para keywords objetivo, tráfico orgánico, conversiones desde orgánico, autoridad de dominio, y ROI. Proporcionamos reportes mensuales detallados con todas estas métricas.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Search size={40} style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-cyan-400 font-semibold text-lg">SEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                SEO Avanzado y Gestión de Reputación
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Estrategias SEO técnicas y de contenido combinadas con gestión profesional de reputación online. 
                Domina Google y construye autoridad digital sostenible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto">
                  <button
                    className="px-8 py-4 rounded-lg text-white font-bold hover:opacity-90 transition-opacity shadow-xl"
                    style={{ backgroundColor: 'var(--brand-cyan)' }}
                  >
                    Auditoría Estratégica Gratuita
                  </button>
                </Link>
                <Link to="/casos-exito">
                  <button
                    className="px-8 py-4 rounded-lg font-bold hover:opacity-90 transition-opacity border-2 border-white text-white"
                  >
                    Ver Casos de Éxito
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1709281847780-2b34c28853c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb24lMjBzdHJhdGVneXxlbnwxfHx8fDE3NzI4MzQyNjF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="SEO Strategy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: 'var(--brand-cyan)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((item) => (
              <div key={item.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--brand-cyan)' }}>
                  {item.metric}
                </div>
                <p style={{ color: 'var(--brand-gray-dark)' }}>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Beneficios del SEO para tu Negocio B2B
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={28} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
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

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Servicios SEO Completos
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Cobertura integral de todos los aspectos del SEO moderno
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                      <span className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestro Proceso SEO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-cyan-500 h-full">
                  <div className="text-5xl font-bold mb-4 opacity-20" style={{ color: 'var(--brand-cyan)' }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                    {item.title}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Star size={16} style={{ color: 'var(--brand-cyan)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--brand-cyan)' }}>
                      {item.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Industrias en las que Tenemos Experiencia
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer border border-gray-100"
              >
                <p className="font-semibold" style={{ color: 'var(--brand-navy)' }}>
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Preguntas Frecuentes sobre SEO
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para dominar Google y construir autoridad?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Solicita una auditoría SEO gratuita y descubre tu potencial de crecimiento orgánico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <button
                className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Solicitar Auditoría Gratuita
              </button>
            </Link>
            <Link to="/casos-exito">
              <button className="px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity border-2 border-white text-white">
                Ver Casos de Éxito
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}