import { CheckCircle, Sparkles, Target, Zap, Shield, TrendingUp, Users, BarChart, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Link } from 'react-router';
import { useState } from 'react';

export function ServicioGEO() {
  const [showCalculator, setShowCalculator] = useState(false);

  const benefits = [
    {
      icon: Target,
      title: 'Visibilidad en Motores de IA',
      description: 'Aumenta tu presencia en ChatGPT, Perplexity, Gemini y otros motores generativos',
    },
    {
      icon: Users,
      title: 'Tráfico Cualificado',
      description: 'Atrae usuarios con alta intención de compra directamente desde respuestas de IA',
    },
    {
      icon: TrendingUp,
      title: 'Ventaja Competitiva',
      description: 'Posiciónate antes que tu competencia en la nueva era de búsqueda',
    },
    {
      icon: Shield,
      title: 'Autoridad de Marca',
      description: 'Conviértete en la fuente confiable que los motores de IA recomiendan',
    },
  ];

  const features = [
    {
      title: 'Auditoría de Presencia en IA',
      items: [
        'Análisis de menciones en ChatGPT, Perplexity, Gemini',
        'Evaluación de competidores en respuestas generativas',
        'Identificación de oportunidades de citación',
        'Reporte detallado con benchmarks del sector',
      ],
    },
    {
      title: 'Optimización de Contenido',
      items: [
        'Reestructuración de contenido para IA',
        'Implementación de schema markup avanzado',
        'Optimización de autoridad y citaciones',
        'Creación de contenido orientado a consultas de IA',
      ],
    },
    {
      title: 'Estrategia de Fuentes',
      items: [
        'Desarrollo de perfil de backlinks de autoridad',
        'Relaciones con medios y publicaciones especializadas',
        'Estrategia de PR digital para citaciones',
        'Construcción de presencia en bases de conocimiento',
      ],
    },
    {
      title: 'Monitoreo Continuo',
      items: [
        'Tracking de menciones en motores generativos',
        'Análisis de sentimiento en respuestas de IA',
        'Reportes mensuales con métricas clave',
        'Ajustes y optimizaciones basadas en datos',
      ],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Análisis Inicial',
      description: 'Evaluamos tu presencia actual en motores generativos y establecemos KPIs',
      duration: '1-2 semanas',
    },
    {
      step: '02',
      title: 'Estrategia Personalizada',
      description: 'Diseñamos un plan de acción específico para tu industria y objetivos',
      duration: '1 semana',
    },
    {
      step: '03',
      title: 'Implementación',
      description: 'Ejecutamos optimizaciones técnicas, contenido y estrategia de citaciones',
      duration: '4-8 semanas',
    },
    {
      step: '04',
      title: 'Monitoreo y Optimización',
      description: 'Seguimiento continuo y ajustes para maximizar tu presencia en IA',
      duration: 'Continuo',
    },
  ];

  const caseStudies = [
    {
      industry: 'SaaS B2B',
      challenge: 'Baja visibilidad en búsquedas de IA',
      result: '15x menciones en ChatGPT en 4 meses',
    },
    {
      industry: 'E-commerce',
      challenge: 'Ausencia en recomendaciones de productos',
      result: '4x tráfico desde motores generativos',
    },
  ];

  const faqs = [
    {
      q: '¿Qué es exactamente GEO (Generative Engine Optimization)?',
      a: 'GEO es el proceso de optimizar tu presencia digital para aparecer en las respuestas de motores de búsqueda generativos como ChatGPT, Perplexity y Gemini. A diferencia del SEO tradicional, GEO se enfoca en cómo los modelos de IA comprenden y citan tu contenido.',
    },
    {
      q: '¿Cuánto tiempo toma ver resultados con GEO?',
      a: 'Típicamente comenzamos a ver las primeras menciones entre 2-3 meses. Resultados significativos y sostenibles suelen aparecer entre 4-6 meses, dependiendo de tu industria y competencia.',
    },
    {
      q: '¿GEO reemplaza al SEO tradicional?',
      a: 'No, GEO complementa al SEO. Mientras el SEO tradicional sigue siendo crucial para Google, GEO te prepara para el futuro de la búsqueda impulsada por IA. Recomendamos una estrategia híbrida.',
    },
    {
      q: '¿Cómo miden el éxito en GEO?',
      a: 'Medimos métricas como frecuencia de menciones en motores de IA, posición en respuestas, sentimiento de las citaciones, tráfico referido desde IA, y conversiones generadas por estas fuentes.',
    },
    {
      q: '¿Funciona GEO para mi industria?',
      a: 'GEO funciona para prácticamente todas las industrias B2B. Es especialmente efectivo en tecnología, servicios profesionales, salud, finanzas y educación, donde las búsquedas informativas son frecuentes.',
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
                <Sparkles size={40} style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-cyan-400 font-semibold text-lg">GEO</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Optimización para Motores Generativos
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Posiciona tu marca como la respuesta preferida de ChatGPT, Perplexity, Gemini y otros motores 
                generativos. Domina la nueva era de búsqueda impulsada por IA.
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
                src="https://images.unsplash.com/photo-1737505599159-5ffc1dcbc08f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV1cmFsJTIwbmV0d29ya3xlbnwxfHx8fDE3NzI4MTkzNzJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="GEO Optimization"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: 'var(--brand-cyan)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Por qué invertir en GEO?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Los beneficios tangibles de optimizar tu presencia en motores generativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
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

      {/* Features */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué Incluye Nuestro Servicio de GEO?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Solución integral para dominar los motores de búsqueda generativos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
                  {feature.title}
                </h3>
                <ul className="space-y-4">
                  {feature.items.map((item) => (
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
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Metodología probada para resultados consistentes
            </p>
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
                  <p className="mb-4 leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {item.description}
                  </p>
                  <div className="flex items-center space-x-2">
                    <Zap size={16} style={{ color: 'var(--brand-cyan)' }} />
                    <span className="text-sm font-semibold" style={{ color: 'var(--brand-cyan)' }}>
                      {item.duration}
                    </span>
                  </div>
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

      {/* Use Cases */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Resultados Reales por Industria
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Casos de éxito en diferentes sectores
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((useCase) => (
              <div key={useCase.industry} className="bg-white rounded-lg p-8 shadow-lg">
                <div
                  className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                  style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)', color: 'var(--brand-cyan)' }}
                >
                  {useCase.industry}
                </div>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                  Desafío
                </h3>
                <p className="mb-4" style={{ color: 'var(--brand-gray-dark)' }}>
                  {useCase.challenge}
                </p>
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                  Resultado
                </h3>
                <p className="text-xl font-bold" style={{ color: 'var(--brand-cyan)' }}>
                  {useCase.result}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Preguntas Frecuentes sobre GEO
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
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
            ¿Listo para dominar los motores generativos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Agenda una consulta estratégica gratuita y descubre tu potencial en GEO
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <button
                className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Agendar Consulta Gratuita
              </button>
            </Link>
            <Link to="/casos-exito">
              <button className="px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity border-2 border-white text-white">
                Ver Más Casos de Éxito
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}