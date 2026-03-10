import { CheckCircle, Target, TrendingUp, Zap, BarChart, DollarSign, Users, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function ServicioPPC() {
  const benefits = [
    {
      icon: Target,
      title: 'Campañas de Alto Rendimiento',
      description: 'Optimización continua para maximizar ROI y reducir costo por adquisición',
    },
    {
      icon: TrendingUp,
      title: 'Crecimiento Escalable',
      description: 'Estrategias diseñadas para escalar sin comprometer la rentabilidad',
    },
    {
      icon: DollarSign,
      title: 'ROI Transparente',
      description: 'Métricas claras y reportes detallados de cada euro invertido',
    },
    {
      icon: BarChart,
      title: 'Data-Driven',
      description: 'Decisiones basadas en análisis profundo de datos y comportamiento de usuario',
    },
  ];

  const platforms = [
    {
      name: 'Google Ads',
      description: 'Campañas de búsqueda, display, shopping y video optimizadas para conversión',
      features: ['Search Ads', 'Display Network', 'Shopping Ads', 'YouTube Ads', 'Performance Max'],
    },
    {
      name: 'Microsoft Advertising',
      description: 'Alcance en Bing con audiencias de alto valor y menor competencia',
      features: ['Search Ads', 'Audience Network', 'LinkedIn Integration', 'Lower CPC'],
    },
    {
      name: 'Plataformas de IA',
      description: 'Publicidad emergente en motores generativos y asistentes de IA',
      features: ['Perplexity Ads', 'ChatGPT Sponsored', 'AI Search Placements', 'Early Adopter Advantage'],
    },
    {
      name: 'Social Ads (B2B)',
      description: 'LinkedIn, Twitter/X enfocados en decisores y profesionales B2B',
      features: ['LinkedIn Ads', 'Twitter/X Ads', 'Account-Based Marketing', 'Lead Gen Forms'],
    },
  ];

  const services = [
    {
      title: 'Auditoría y Estrategia',
      items: [
        'Análisis de cuentas existentes',
        'Evaluación de competencia',
        'Investigación de palabras clave',
        'Diseño de estrategia multicanal',
        'Definición de KPIs y objetivos',
      ],
    },
    {
      title: 'Gestión de Campañas',
      items: [
        'Configuración y lanzamiento',
        'Optimización diaria de pujas',
        'A/B testing de anuncios y landing pages',
        'Gestión de presupuesto',
        'Ajustes basados en rendimiento',
      ],
    },
    {
      title: 'Creatividad y Copy',
      items: [
        'Redacción de anuncios persuasivos',
        'Diseño de creatividades visuales',
        'Landing pages optimizadas',
        'Extensiones y formatos avanzados',
        'Adaptación por plataforma',
      ],
    },
    {
      title: 'Analytics y Reporting',
      items: [
        'Configuración de tracking avanzado',
        'Dashboards en tiempo real',
        'Reportes mensuales detallados',
        'Análisis de conversión y embudo',
        'Recomendaciones estratégicas',
      ],
    },
  ];

  const results = [
    {
      metric: '-35%',
      label: 'Reducción promedio en CPA',
    },
    {
      metric: '+180%',
      label: 'Aumento en conversiones',
    },
    {
      metric: '€15M+',
      label: 'Inversión publicitaria gestionada',
    },
    {
      metric: '450%',
      label: 'ROI promedio en clientes B2B',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Descubrimiento',
      description: 'Entendemos tu negocio, audiencia, competencia y objetivos',
    },
    {
      step: '02',
      title: 'Planificación',
      description: 'Diseñamos estrategia multicanal con presupuesto y timeline',
    },
    {
      step: '03',
      title: 'Ejecución',
      description: 'Lanzamos campañas con copy, creatividades y tracking optimizado',
    },
    {
      step: '04',
      title: 'Optimización',
      description: 'Mejora continua basada en datos y resultados reales',
    },
  ];

  const faqs = [
    {
      q: '¿Cuánto tiempo toma ver resultados?',
      a: 'Las primeras señales aparecen en 2-4 semanas. Resultados optimizados y consistentes típicamente se ven después de 2-3 meses de optimización continua.',
    },
    {
      q: '¿Puedo pausar las campañas en cualquier momento?',
      a: 'Sí, tienes control total. Recomendamos un mínimo de 3 meses para permitir optimización, pero puedes pausar sin penalizaciones con 30 días de aviso.',
    },
    {
      q: '¿Qué diferencia a su enfoque de otras agencias?',
      a: 'Nos especializamos en B2B y combinamos PPC tradicional con estrategias emergentes en IA. Además, nuestro enfoque data-driven y transparencia total en métricas y gastos.',
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
                <Target size={40} style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-cyan-400 font-semibold text-lg">PPC & Ads</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ads en Buscadores de IA y PPC Avanzado
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Campañas publicitarias de alto rendimiento en Google, Microsoft y plataformas emergentes de IA. 
                Maximiza tu ROI con estrategias data-driven y optimización continua.
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
                    Ver Resultados
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759215524600-7971d6a4dac0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYWR2ZXJ0aXNpbmclMjBjYW1wYWlnbiUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI4MzQyNjB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="PPC Campaigns"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: 'var(--brand-cyan)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {results.map((result) => (
              <div key={result.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--brand-cyan)' }}>
                  {result.metric}
                </div>
                <p style={{ color: 'var(--brand-gray-dark)' }}>{result.label}</p>
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
              ¿Por qué confiar tus campañas PPC con nosotros?
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

      {/* Platforms */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Plataformas Publicitarias
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Presencia estratégica en todos los canales relevantes para tu audiencia B2B
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {platforms.map((platform) => (
              <div key={platform.name} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-2xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                  {platform.name}
                </h3>
                <p className="mb-6 leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                  {platform.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {platform.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 rounded-full text-sm font-semibold"
                      style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)', color: 'var(--brand-cyan)' }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué Incluye el Servicio?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div key={service.title} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
                  {service.title}
                </h3>
                <ul className="space-y-4">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                      <span style={{ color: 'var(--brand-gray-dark)' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestro Proceso
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={item.step} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-lg border-t-4 border-cyan-500 h-full">
                  <div className="text-5xl font-bold mb-4 opacity-20" style={{ color: 'var(--brand-cyan)' }}>
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                    {item.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {item.description}
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

      {/* FAQs */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Preguntas Frecuentes sobre PPC
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
            ¿Listo para maximizar tu ROI publicitario?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Obtén una auditoría gratuita de tus campañas actuales y descubre oportunidades de mejora
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
