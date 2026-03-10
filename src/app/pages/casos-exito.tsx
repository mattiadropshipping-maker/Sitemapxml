import { TrendingUp, Users, DollarSign, Target, Star, Quote } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CasosExito() {
  const cases = [
    {
      company: 'TechStartup SaaS',
      industry: 'Software B2B',
      challenge: 'Baja visibilidad en búsquedas generativas y costo elevado por lead en Google Ads',
      solution:
        'Implementamos una estrategia integral de GEO y optimización de anuncios basada en datos de comportamiento de IA',
      results: [
        { icon: TrendingUp, metric: '+320%', description: 'Incremento en recomendaciones de IA' },
        { icon: Users, metric: '2.5x', description: 'Aumento de tráfico cualificado' },
        { icon: DollarSign, metric: '-45%', description: 'Reducción del costo por lead' },
        { icon: Target, metric: '180%', description: 'ROI sobre inversión publicitaria' },
      ],
      image: 'https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyODMzNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'Gracias a su estrategia GEO, ahora somos la primera recomendación en ChatGPT para nuestro sector. Los resultados superaron todas nuestras expectativas.',
      author: 'María González',
      position: 'CEO de TechStartup',
    },
    {
      company: 'E-commerce de Moda',
      industry: 'Retail Online',
      challenge: 'Competencia intensa y dificultad para diferenciarse en resultados de búsqueda tradicionales',
      solution:
        'Diseño web optimizado para IA y campaña PPC multi-plataforma con foco en motores generativos emergentes',
      results: [
        { icon: TrendingUp, metric: '+250%', description: 'Crecimiento en ventas online' },
        { icon: Users, metric: '4x', description: 'Tráfico desde Perplexity y ChatGPT' },
        { icon: DollarSign, metric: '€500k', description: 'Ingresos adicionales en 6 meses' },
        { icon: Target, metric: '95%', description: 'Satisfacción del cliente' },
      ],
      image: 'https://images.unsplash.com/photo-1686061594225-3e92c0cd51b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzJTIwZGFzaGJvYXJkfGVufDF8fHx8MTc3MjgyMjMwNnww&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'El equipo transformó completamente nuestra presencia online. Las ventas se dispararon y ahora competimos con las marcas más grandes.',
      author: 'Carlos Ramírez',
      position: 'Director de Marketing',
    },
    {
      company: 'Consultoría Legal',
      industry: 'Servicios Profesionales',
      challenge: 'Reputación online fragmentada y ausencia en respuestas de motores generativos',
      solution:
        'Gestión integral de reputación digital, SEO avanzado y estrategia GEO enfocada en autoridad y confianza',
      results: [
        { icon: TrendingUp, metric: '+400%', description: 'Menciones positivas en IA' },
        { icon: Users, metric: '3x', description: 'Consultas cualificadas mensuales' },
        { icon: DollarSign, metric: '€250k', description: 'Nuevos contratos cerrados' },
        { icon: Target, metric: '100%', description: 'Cobertura en motores de IA' },
      ],
      image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MjgzMzQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      testimonial: 'Ahora los motores de IA nos recomiendan como la firma legal líder. La inversión se pagó sola en los primeros tres meses.',
      author: 'Laura Fernández',
      position: 'Socia Fundadora',
    },
  ];

  const stats = [
    { number: '150+', label: 'Proyectos Exitosos' },
    { number: '95%', label: 'Tasa de Satisfacción' },
    { number: '€10M+', label: 'Ingresos Generados para Clientes' },
    { number: '4.8/5', label: 'Rating Promedio' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Casos de Éxito</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Resultados reales de empresas que confiaron en nuestra experiencia en GEO y Marketing de IA
          </p>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-white border-b">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: 'var(--brand-cyan)' }}>
                  {stat.number}
                </div>
                <p className="text-sm md:text-base" style={{ color: 'var(--brand-gray-dark)' }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 space-y-24">
          {cases.map((caseStudy, index) => (
            <div key={caseStudy.company} className="space-y-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className={`relative h-80 lg:h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <ImageWithFallback
                    src={caseStudy.image}
                    alt={caseStudy.company}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{ backgroundColor: 'var(--brand-cyan)' }}
                  ></div>
                </div>

                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <span
                      className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-4"
                      style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)', color: 'var(--brand-cyan)' }}
                    >
                      {caseStudy.industry}
                    </span>
                    <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
                      {caseStudy.company}
                    </h2>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                      Desafío
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                      Solución
                    </h3>
                    <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                      {caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>

              {/* Results Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {caseStudy.results.map((result) => {
                  const Icon = result.icon;
                  return (
                    <div
                      key={result.description}
                      className="bg-white rounded-lg p-6 shadow-md border border-gray-100 text-center hover:shadow-xl transition-shadow"
                    >
                      <Icon size={32} className="mx-auto mb-4" style={{ color: 'var(--brand-cyan)' }} />
                      <div className="text-3xl font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>
                        {result.metric}
                      </div>
                      <p className="text-sm leading-tight" style={{ color: 'var(--brand-gray-dark)' }}>
                        {result.description}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Testimonial */}
              <div className="bg-white rounded-lg p-8 shadow-lg border-l-4 border-cyan-500">
                <Quote size={32} className="mb-4 opacity-30" style={{ color: 'var(--brand-cyan)' }} />
                <p className="text-lg leading-relaxed mb-6 italic" style={{ color: 'var(--brand-gray-dark)' }}>
                  "{caseStudy.testimonial}"
                </p>
                <div className="flex items-center space-x-4">
                  <div>
                    <p className="font-bold" style={{ color: 'var(--brand-navy)' }}>
                      {caseStudy.author}
                    </p>
                    <p className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>
                      {caseStudy.position}
                    </p>
                  </div>
                  <div className="ml-auto flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={20} fill="var(--brand-cyan)" style={{ color: 'var(--brand-cyan)' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Industrias con las que Trabajamos
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Experiencia comprobada en múltiples sectores
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['SaaS B2B', 'E-commerce', 'Servicios Profesionales', 'Tecnología', 'Educación', 'Salud', 'Finanzas', 'Real Estate', 'Manufacturing', 'Retail'].map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-xl transition-shadow cursor-pointer"
              >
                <p className="font-semibold" style={{ color: 'var(--brand-navy)' }}>
                  {industry}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--brand-gray-dark)' }}>
            Descubre cómo podemos transformar tu visibilidad digital con estrategias probadas en GEO y Marketing de IA
          </p>
          <button
            className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: 'var(--brand-cyan)' }}
          >
            Hablemos de tu Proyecto
          </button>
        </div>
      </section>
    </div>
  );
}