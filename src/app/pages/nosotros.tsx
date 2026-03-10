import { Users, Target, Award, Heart, Lightbulb, Shield, Rocket } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Nosotros() {
  const values = [
    {
      icon: Target,
      title: 'Innovación Constante',
      description:
        'Nos mantenemos a la vanguardia de las tecnologías de IA y búsqueda generativa para ofrecer las mejores soluciones.',
    },
    {
      icon: Award,
      title: 'Resultados Medibles',
      description:
        'Cada estrategia está respaldada por datos y métricas claras que demuestran el impacto en tu negocio.',
    },
    {
      icon: Users,
      title: 'Compromiso con el Cliente',
      description:
        'Tu éxito es nuestro éxito. Trabajamos como una extensión de tu equipo para alcanzar objetivos comunes.',
    },
    {
      icon: Heart,
      title: 'Transparencia Total',
      description:
        'Comunicación clara, informes detallados y acceso completo a las métricas de tus campañas en todo momento.',
    },
  ];

  const milestones = [
    { year: '2024', event: 'Fundación de la agencia', description: 'Inicio de operaciones con visión GEO' },
    { year: '2024', event: 'Primer cliente Fortune 500', description: 'Expansión a grandes empresas' },
    { year: '2025', event: '50+ proyectos exitosos', description: 'Consolidación en el mercado B2B' },
    { year: '2026', event: 'Líder en GEO', description: 'Reconocidos como pioneros en España' },
  ];

  const differentiators = [
    {
      icon: Lightbulb,
      title: 'Metodología Propia',
      description: 'Framework exclusivo de GEO basado en análisis de millones de consultas de IA',
    },
    {
      icon: Shield,
      title: 'Garantía de Resultados',
      description: 'Compromisos medibles en cada proyecto con KPIs claros desde el día uno',
    },
    {
      icon: Rocket,
      title: 'Tecnología Avanzada',
      description: 'Herramientas propias de monitoreo de IA y análisis predictivo',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Sobre Nosotros</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Pioneros en GEO y Marketing de IA, ayudando a empresas B2B a liderar la nueva era de búsqueda generativa
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Nuestra Historia
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Fundada en 2024, nacimos con una visión clara: preparar a las empresas para el futuro de la búsqueda.
                Mientras otros se enfocaban únicamente en SEO tradicional, nosotros anticipamos el impacto de la
                inteligencia artificial generativa en el comportamiento de búsqueda.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Hoy somos referentes en GEO (Generative Engine Optimization), ayudando a marcas líderes a ser
                recomendadas por ChatGPT, Perplexity, Gemini y otros motores generativos, mientras optimizamos sus
                campañas PPC y SEO con tecnología de vanguardia.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Nuestro equipo combina expertise en marketing digital tradicional con profundo conocimiento en IA,
                machine learning y análisis de datos, ofreciendo soluciones que realmente funcionan en la nueva
                realidad digital.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMGJyYWluc3Rvcm1pbmclMjBvZmZpY2V8ZW58MXx8fHwxNzcyODMzNDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Oficina moderna"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
                Nuestra Misión
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Empoderar a las empresas B2B para que dominen la nueva era de búsqueda impulsada por IA, 
                transformando su visibilidad digital en resultados de negocio tangibles y sostenibles.
              </p>
            </div>
            <div className="bg-white rounded-lg p-10 shadow-lg">
              <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
                Nuestra Visión
              </h3>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                Ser la agencia líder en Europa en GEO y marketing de IA, reconocidos por transformar cómo 
                las marcas interactúan con los motores de búsqueda generativos del futuro.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestros Valores
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Principios que guían cada proyecto y decisión estratégica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-6"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={28} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold mb-3 text-lg" style={{ color: 'var(--brand-navy)' }}>
                    {value.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué nos hace diferentes?
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Ventajas competitivas que nos distinguen en el mercado
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {differentiators.map((diff) => {
              const Icon = diff.icon;
              return (
                <div
                  key={diff.title}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={32} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
                    {diff.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Nuestra Trayectoria
            </h2>
            <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
              Hitos clave en nuestro crecimiento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <div key={milestone.event} className="relative">
                <div className="bg-white rounded-lg p-8 shadow-md border-t-4 border-cyan-500 h-full">
                  <div className="text-3xl font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>
                    {milestone.year}
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                    {milestone.event}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">¿Listo para trabajar juntos?</h2>
          <p className="text-xl mb-8 text-white/90">
            Descubre cómo nuestro equipo puede ayudarte a dominar la búsqueda generativa
          </p>
          <button
            className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
            style={{ backgroundColor: 'var(--brand-cyan)' }}
          >
            Contáctanos
          </button>
        </div>
      </section>
    </div>
  );
}