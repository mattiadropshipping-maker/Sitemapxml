import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, TrendingUp, DollarSign, Target, Zap, AlertCircle } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloFuturoPPC() {
  return (
    <BlogArticleLayout
      title="El futuro del PPC: Anuncios en plataformas de IA"
      category="PPC"
      author="Equipo GEO Marketing IA"
      date="10 de Febrero, 2026"
      readTime="6 min"
      image="https://images.unsplash.com/photo-1709281847981-73a69aa6f770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNzUyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Meta Description */}
      <div className="hidden">
        Exploramos las nuevas oportunidades publicitarias en motores generativos y cómo aprovecharlas antes que tu competencia.
      </div>

      {/* Introducción */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          El PPC tal como lo conocemos está a punto de cambiar radicalmente. <strong>Los motores de búsqueda generativos 
          están abriendo un nuevo ecosistema publicitario</strong> con reglas, formatos y oportunidades completamente diferentes.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Perplexity ya lanzó su programa de anuncios, OpenAI está explorando monetización en ChatGPT, y Google está 
          integrando ads en SGE (Search Generative Experience). <strong>Los early adopters están viendo CPCs 60-70% más 
          bajos que Google Ads tradicional</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Esta guía te muestra exactamente qué esperar del futuro del PPC y cómo posicionarte ahora para aprovechar 
          la ventaja de primer movimiento.
        </p>

        {/* Sección 1: Cómo funcionan los ads en IAs */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo funcionan los anuncios en motores generativos
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los anuncios en plataformas de IA son fundamentalmente diferentes a los anuncios en buscadores tradicionales:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            Google Ads tradicional vs Ads en IA
          </h3>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Google Ads tradicional</p>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li>• Usuario busca → ve lista de 10 links orgánicos + 3-4 ads</li>
                  <li>• Anuncio compite por clics</li>
                  <li>• Formato: título + descripción + URL</li>
                  <li>• Pago por clic (PPC)</li>
                  <li>• CTR promedio: 3-5%</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg border-2" style={{ borderColor: 'var(--brand-cyan)' }}>
                <p className="font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>Ads en motores de IA</p>
                <ul className="space-y-2 text-gray-700 text-sm font-semibold">
                  <li>• Usuario pregunta → IA responde + menciona 1-3 sponsors</li>
                  <li>• Anuncio integrado contextualmente en respuesta</li>
                  <li>• Formato: mención nativa dentro de la respuesta generativa</li>
                  <li>• Pago por mención o engagement</li>
                  <li>• Engagement promedio: 15-25% (early data)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 2: Plataformas disponibles */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Plataformas que ya ofrecen publicidad en IA
        </h2>

        <div className="space-y-6 mb-8">
          {/* Perplexity */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Target size={28} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Perplexity Ads (Disponible ahora)
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              Perplexity lanzó su programa publicitario en enero 2026. Los anuncios aparecen como "Respuestas patrocinadas" 
              integradas en los resultados conversacionales.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-4">
              <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Características clave:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Targeting por intención:</strong> Basado en el contexto de la pregunta del usuario</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>CPC promedio:</strong> $0.40-$1.20 (vs $2-$5 en Google Ads para B2B)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Formato:</strong> Texto nativo + enlace + badge "Sponsored"</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Mínimo:</strong> $500/mes presupuesto inicial</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <p className="font-bold mb-2 text-green-900">💡 Oportunidad actual:</p>
              <p className="text-green-800">
                Competencia aún muy baja. Empresas B2B están viendo CPAs 40-50% menores que en Google Ads en Q1 2026.
              </p>
            </div>
          </div>

          {/* Google SGE */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Target size={28} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Google SGE Ads (Beta limitado)
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              Google está probando anuncios integrados en Search Generative Experience (SGE). Disponible para cuentas 
              seleccionadas con gasto mínimo de $10K/mes.
            </p>

            <div className="bg-gray-50 p-5 rounded-lg mb-4">
              <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Características esperadas:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Formato híbrido:</strong> Ads tradicionales + menciones en AI Overview</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Targeting:</strong> Keywords + intención conversacional</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Pricing:</strong> Modelo híbrido CPC + CPM</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                  <span><strong>Disponibilidad:</strong> Expansión gradual en 2026</span>
                </li>
              </ul>
            </div>
          </div>

          {/* ChatGPT */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4 border-gray-300">
            <div className="flex items-center space-x-3 mb-4">
              <AlertCircle size={28} className="text-gray-500" />
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                ChatGPT Ads (Rumoreado para Q3 2026)
              </h3>
            </div>

            <p className="text-lg text-gray-700 mb-4">
              OpenAI está explorando modelos de monetización publicitaria. Se espera lanzamiento en segunda mitad de 2026.
            </p>

            <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-500">
              <p className="font-bold mb-2 text-yellow-900">⏳ En desarrollo:</p>
              <p className="text-yellow-800">
                Aún no disponible, pero se rumorea modelo de "Sponsored Suggestions" similar a Amazon's Choice.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 3: Estrategias ganadoras */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          5 estrategias para dominar PPC en motores de IA
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              1. Optimiza para intención conversacional, no keywords
            </p>
            <p className="text-gray-700 mb-3">
              En lugar de pujar por "crm software", optimiza para intenciones como "necesito un CRM para equipo de 15 personas 
              en sector inmobiliario".
            </p>
            <p className="text-sm text-gray-600">
              <strong>Táctica:</strong> Crea categorías de intención basadas en preguntas completas, no términos aislados.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              2. Usa landing pages conversacionales
            </p>
            <p className="text-gray-700 mb-3">
              Los usuarios vienen de una conversación con IA. Tu landing page debe continuar ese tono conversacional, 
              no ser un muro de features.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Ejemplo:</strong> En lugar de "Software CRM #1 del mercado", usa "¿Necesitas un CRM fácil de usar? 
              Aquí está cómo podemos ayudarte..."
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              3. Testea agresivamente mensajes nativos
            </p>
            <p className="text-gray-700 mb-3">
              Los anuncios que suenan como parte natural de la respuesta de IA tienen 3x mejor rendimiento que los que 
              parecen ads tradicionales.
            </p>
            <p className="text-sm text-gray-600">
              <strong>A/B Test:</strong> "Sponsored: Prueba HubSpot gratis" vs "Para equipos como el tuyo, HubSpot ofrece..."
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              4. Combina GEO orgánico + PPC en IA
            </p>
            <p className="text-gray-700 mb-3">
              Marcas que aparecen orgánicamente + tienen presencia publicitaria en IAs ven 85% más conversiones que 
              las que solo hacen uno de los dos.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Estrategia dual:</strong> Invierte en contenido GEO para autoridad + ads para keywords de alta intención.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              5. Trackea métricas más allá del clic
            </p>
            <p className="text-gray-700 mb-3">
              En ads de IA, el engagement no siempre es un clic inmediato. Usuarios pueden ver tu mención y buscarte 
              directamente después.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Métricas clave:</strong> Brand searches post-exposure, búsquedas directas, menciones de marca en conversaciones.
            </p>
          </div>
        </div>

        {/* Sección 4: Presupuesto recomendado */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Presupuesto recomendado para experimentar
        </h2>

        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <DollarSign size={40} className="mx-auto mb-3" style={{ color: 'var(--brand-cyan)' }} />
              <p className="font-bold text-2xl mb-2" style={{ color: 'var(--brand-navy)' }}>$500-1K/mes</p>
              <p className="text-gray-700 font-bold mb-2">Startup / SMB</p>
              <p className="text-sm text-gray-600">
                Suficiente para testear Perplexity Ads con 2-3 campañas de intención específica.
              </p>
            </div>

            <div className="text-center border-2 rounded-lg p-4" style={{ borderColor: 'var(--brand-cyan)' }}>
              <DollarSign size={40} className="mx-auto mb-3" style={{ color: 'var(--brand-cyan)' }} />
              <p className="font-bold text-2xl mb-2" style={{ color: 'var(--brand-navy)' }}>$2K-5K/mes</p>
              <p className="text-gray-700 font-bold mb-2">Mid-market B2B</p>
              <p className="text-sm text-gray-600">
                Permite testear múltiples plataformas y optimizar basado en datos.
              </p>
            </div>

            <div className="text-center">
              <DollarSign size={40} className="mx-auto mb-3" style={{ color: 'var(--brand-cyan)' }} />
              <p className="font-bold text-2xl mb-2" style={{ color: 'var(--brand-navy)' }}>$10K+/mes</p>
              <p className="text-gray-700 font-bold mb-2">Enterprise</p>
              <p className="text-sm text-gray-600">
                Acceso a betas exclusivos (Google SGE) y capacidad de escalar rápidamente winners.
              </p>
            </div>
          </div>
        </div>

        {/* Sección 5: Casos de éxito */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Casos de éxito tempranos
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-4" style={{ color: 'var(--brand-navy)' }}>
            📊 SaaS de project management (anónimo)
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div>
              <p className="font-bold mb-2 text-gray-700">Antes (solo Google Ads):</p>
              <ul className="space-y-1 text-gray-700 text-sm">
                <li>• CPC promedio: $4.20</li>
                <li>• CPA: $320</li>
                <li>• CTR: 3.2%</li>
              </ul>
            </div>
            <div>
              <p className="font-bold mb-2 text-green-700">Después (Google Ads + Perplexity):</p>
              <ul className="space-y-1 text-gray-700 text-sm font-semibold">
                <li>• CPC Perplexity: $0.85 (-80%)</li>
                <li>• CPA blended: $180 (-44%)</li>
                <li>• Engagement rate: 18%</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-700 text-sm bg-white p-4 rounded-lg">
            <strong>Clave del éxito:</strong> Reasignaron 30% del presupuesto de Google Ads a Perplexity, enfocándose 
            en long-tail conversational queries que en Google eran muy caras.
          </p>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes sobre PPC en IA
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Debo abandonar Google Ads para enfocarme en ads de IA?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutamente no. Google Ads sigue generando el 85% del tráfico PPC en 2026. La estrategia es complementar, 
              no reemplazar. Empieza con 10-15% de presupuesto en ads de IA y escala según resultados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Los ads en IA funcionan para B2C o solo B2B?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Funcionan para ambos, pero el early traction está en B2B. Usuarios B2B tienden a hacer preguntas más complejas 
              a IAs, lo que genera más oportunidades de targeting contextual. B2C llegará masivamente cuando ChatGPT lance ads.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cómo mido el ROI si los usuarios no siempre hacen clic?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Usa view-through attribution y trackea branded searches post-exposure. Muchos usuarios ven tu mención en IA, 
              luego buscan tu marca directamente en Google. Herramientas como Google Analytics 4 permiten modelar este comportamiento.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: La ventana de oportunidad es ahora
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          El PPC en motores de IA está donde Google Ads estaba en 2003: <strong>CPCs ridículamente baratos, competencia 
          casi nula, y una curva de aprendizaje que te da ventaja competitiva duradera</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Empresas que empiezan a experimentar en Q1-Q2 2026 tendrán 18-24 meses de ventaja antes de que el mercado 
          se sature. No esperes a que Perplexity y ChatGPT ads sean mainstream.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-xl text-white text-center">
          <p className="text-2xl font-bold mb-4">
            ¿Listo para empezar con PPC en motores de IA?
          </p>
          <p className="text-lg mb-6">
            Te ayudamos a configurar tus primeras campañas en Perplexity y SGE
          </p>
          <Link to="/contacto">
            <button
              className="px-8 py-4 bg-white rounded-lg font-bold hover:opacity-90 transition-opacity"
              style={{ color: 'var(--brand-navy)' }}
            >
              Auditoría Estratégica Gratuita
            </button>
          </Link>
        </div>
      </div>
    </BlogArticleLayout>
  );
}
