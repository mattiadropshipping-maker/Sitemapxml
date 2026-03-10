import { CheckCircle, Globe, Zap, Smartphone, Code, Layers, Award, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../../components/figma/ImageWithFallback';
import { Link } from 'react-router';

export function ServicioDisenoWeb() {
  const benefits = [
    {
      icon: Globe,
      title: 'Optimizado para IA',
      description: 'Arquitectura diseñada para ser comprendida por motores generativos',
    },
    {
      icon: Zap,
      title: 'Alto Rendimiento',
      description: 'Velocidad de carga optimizada para mejor conversión y SEO',
    },
    {
      icon: Smartphone,
      title: 'Responsive Design',
      description: 'Experiencia perfecta en todos los dispositivos y pantallas',
    },
    {
      icon: Award,
      title: 'UX Centrado en Conversión',
      description: 'Diseño estratégico que guía al usuario hacia la acción',
    },
  ];

  const features = [
    {
      title: 'Arquitectura Semántica',
      items: [
        'HTML5 semántico optimizado',
        'Schema markup estructurado',
        'Datos estructurados JSON-LD',
        'Jerarquía de contenido clara',
        'Metadatos enriquecidos',
      ],
    },
    {
      title: 'Diseño y Experiencia',
      items: [
        'UI/UX moderno y profesional',
        'Diseño responsive mobile-first',
        'Animaciones y microinteracciones',
        'Accesibilidad WCAG 2.1',
        'A/B testing de elementos clave',
      ],
    },
    {
      title: 'Performance Técnico',
      items: [
        'Core Web Vitals optimizados',
        'Carga asíncrona de recursos',
        'Lazy loading de imágenes',
        'CDN y caché optimizado',
        'Compresión y minificación',
      ],
    },
    {
      title: 'SEO y Conversión',
      items: [
        'On-page SEO completo',
        'CTAs estratégicamente ubicados',
        'Forms optimizados',
        'Integración con Analytics y CRM',
        'Tracking de conversiones',
      ],
    },
  ];

  const technologies = [
    {
      category: 'Frontend',
      tools: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Motion'],
    },
    {
      category: 'Backend',
      tools: ['Node.js', 'Python', 'API REST', 'GraphQL', 'Serverless'],
    },
    {
      category: 'CMS',
      tools: ['WordPress', 'Webflow', 'Contentful', 'Strapi', 'Custom'],
    },
    {
      category: 'Tools',
      tools: ['Figma', 'Google Analytics', 'Hotjar', 'Lighthouse', 'GTM'],
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Descubrimiento',
      description: 'Análisis de objetivos, audiencia, competencia y requisitos técnicos',
      deliverable: 'Brief y propuesta estratégica',
    },
    {
      step: '02',
      title: 'Diseño UX/UI',
      description: 'Wireframes, prototipos interactivos y diseño visual final',
      deliverable: 'Diseños en Figma para aprobación',
    },
    {
      step: '03',
      title: 'Desarrollo',
      description: 'Implementación frontend/backend con best practices y optimizaciones',
      deliverable: 'Sitio web funcional en staging',
    },
    {
      step: '04',
      title: 'Testing y Launch',
      description: 'QA exhaustivo, optimizaciones finales y lanzamiento',
      deliverable: 'Sitio web en producción',
    },
    {
      step: '05',
      title: 'Soporte',
      description: 'Monitoreo, mantenimiento y optimizaciones continuas',
      deliverable: 'Reportes y actualizaciones',
    },
  ];

  const faqs = [
    {
      q: '¿Qué hace que un sitio web esté "optimizado para IA"?',
      a: 'Un sitio optimizado para IA tiene estructura semántica clara, datos estructurados completos, contenido bien organizado, y metadatos enriquecidos que permiten a los motores generativos comprender y citar tu contenido fácilmente.',
    },
    {
      q: '¿Incluyen el contenido y las imágenes?',
      a: 'Podemos incluir redacción de contenido y banco de imágenes profesionales como servicios adicionales. También trabajamos con tu equipo si prefieren crear el contenido internamente.',
    },
    {
      q: '¿El sitio será fácil de actualizar?',
      a: 'Sí, implementamos CMS intuitivos (WordPress, Webflow, etc.) o paneles de administración custom que permiten actualizaciones fáciles sin conocimientos técnicos.',
    },
    {
      q: '¿Ofrecen mantenimiento después del lanzamiento?',
      a: 'Sí, ofrecemos planes de mantenimiento mensuales que incluyen actualizaciones de seguridad, optimizaciones de rendimiento, backups, y soporte técnico.',
    },
    {
      q: '¿Pueden integrar el sitio con nuestras herramientas actuales?',
      a: 'Absolutamente. Integramos con CRMs (Salesforce, HubSpot), Analytics, herramientas de email marketing, sistemas de pago, y cualquier API que necesites.',
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
                <Globe size={40} style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-cyan-400 font-semibold text-lg">Web Design</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Diseño Web Optimizado para IA
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Sitios web de alto rendimiento diseñados para ser comprendidos por motores de búsqueda tradicionales 
                y generativos. Arquitectura semántica que convierte visitantes en clientes.
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
                    Ver Proyectos
                  </button>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1748871359045-e54e27c0f5e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ24lMjBwcm9mZXNzaW9uYWwlMjB1aSUyMHV4fGVufDF8fHx8MTczMDg5ODgzMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Diseño Web"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 opacity-20" style={{ backgroundColor: 'var(--brand-cyan)' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Por qué elegir nuestro servicio de diseño web?
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

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué Incluye Nuestro Servicio?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-lg p-8 shadow-lg border border-gray-100">
                <h3 className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
                  {feature.title}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item) => (
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

      {/* Technologies */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Tecnologías Modernas
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Trabajamos con el stack tecnológico más avanzado del mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {technologies.map((tech) => (
              <div key={tech.category} className="bg-white rounded-lg p-8 shadow-lg text-center">
                <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                  {tech.category}
                </h3>
                <div className="space-y-2">
                  {tech.tools.map((tool) => (
                    <div key={tool} className="px-3 py-2 rounded-lg" style={{ backgroundColor: 'rgba(0, 174, 239, 0.05)' }}>
                      <span className="font-semibold text-sm" style={{ color: 'var(--brand-cyan)' }}>{tool}</span>
                    </div>
                  ))}
                </div>
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
                  <div>
                    <div className="flex items-center space-x-3">
                      <Layers size={20} style={{ color: 'var(--brand-cyan)' }} />
                      <span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>
                        {item.deliverable}
                      </span>
                    </div>
                  </div>
                </div>
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
              Preguntas Frecuentes sobre Diseño Web
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
            ¿Listo para crear un sitio web de alto impacto?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Solicita una consulta gratuita y descubre cómo podemos transformar tu presencia digital
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto">
              <button
                className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Solicitar Consulta Gratuita
              </button>
            </Link>
            <Link to="/casos-exito">
              <button className="px-10 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity border-2 border-white text-white">
                Ver Proyectos
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
