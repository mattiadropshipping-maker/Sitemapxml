import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, ArrowRight, Search, Zap, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloPerplexityVsGoogle() {
  return (
    <BlogArticleLayout
      title="Perplexity vs Google: ¿Cómo optimizar para ambos?"
      category="SEO"
      author="Equipo GEO Marketing IA"
      date="1 de Febrero, 2026"
      readTime="10 min"
      image="https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyNzA5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      {/* Meta Description */}
      <div className="hidden">
        Análisis comparativo de estrategias de optimización para motores de búsqueda tradicionales y generativos.
      </div>

      {/* Introducción */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Perplexity ha crecido de 0 a 100 millones de búsquedas mensuales en menos de 18 meses. <strong>No es un 
          "Google killer", pero está capturando un segmento crítico de búsquedas profesionales y complejas</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          La pregunta ya no es "¿Perplexity va a reemplazar a Google?" sino <strong>"¿Cómo optimizo mi presencia para 
          capturar tráfico en ambas plataformas simultáneamente?"</strong>
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Esta guía te muestra exactamente cómo crear una estrategia dual que maximiza visibilidad en Google tradicional 
          y Perplexity (y otros motores generativos) al mismo tiempo.
        </p>

        {/* Sección 1: Diferencias fundamentales */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Diferencias fundamentales entre Google y Perplexity
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead style={{ backgroundColor: 'var(--brand-navy)' }}>
              <tr>
                <th className="p-4 text-left text-white font-bold">Aspecto</th>
                <th className="p-4 text-left text-white font-bold">Google</th>
                <th className="p-4 text-left text-white font-bold">Perplexity</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Tipo de consulta</td>
                <td className="p-4">Keywords cortas: "crm software"</td>
                <td className="p-4">Preguntas completas: "¿Cuál es el mejor CRM para equipos remotos?"</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Formato de resultado</td>
                <td className="p-4">Lista de 10 links orgánicos + featured snippet</td>
                <td className="p-4">Respuesta conversacional + 2-5 fuentes citadas</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Métrica de éxito</td>
                <td className="p-4">Posición en SERP (#1-10)</td>
                <td className="p-4">Ser citado en la respuesta generada</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">User journey</td>
                <td className="p-4">Comparar múltiples resultados</td>
                <td className="p-4">Leer respuesta + profundizar en 1-2 fuentes específicas</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Algoritmo principal</td>
                <td className="p-4">PageRank + RankBrain + BERT</td>
                <td className="p-4">LLM (GPT-4) + algoritmo de citación propietario</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">CTR típico</td>
                <td className="p-4">Posición #1: 27-35%</td>
                <td className="p-4">Fuente citada: 40-60% (datos preliminares)</td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Audiencia predominante</td>
                <td className="p-4">General (todas las edades, todos los usos)</td>
                <td className="p-4">Profesionales, investigadores, early adopters tech</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sección 2: Estrategia dual */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          La estrategia dual: optimizar para ambos simultáneamente
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          La buena noticia: <strong>las tácticas que funcionan para Perplexity también mejoran tu SEO en Google</strong>. 
          No necesitas crear contenido separado, solo estructurarlo inteligentemente.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            Framework de optimización dual
          </h3>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  1
                </div>
                <p className="font-bold text-xl" style={{ color: 'var(--brand-navy)' }}>
                  Estructura de contenido híbrida
                </p>
              </div>
              <p className="text-gray-700 mb-3">
                Crea contenido que funcione como artículo tradicional (para Google) y como fuente citable (para Perplexity).
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold mb-2 text-sm">Anatomía ideal:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>H1 optimizado:</strong> Incluye keyword principal (Google) + pregunta completa (Perplexity)</li>
                  <li>• <strong>Intro 200-300 palabras:</strong> Respuesta directa primero (Perplexity), luego contexto (Google)</li>
                  <li>• <strong>Secciones H2-H3:</strong> Organizadas como Q&A para facilitar extracción de IAs</li>
                  <li>• <strong>Listas y tablas:</strong> Formatos favoritos de ambas plataformas</li>
                  <li>• <strong>Longitud:</strong> 2000+ palabras para satisfacer depth de Google y citabilidad de Perplexity</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  2
                </div>
                <p className="font-bold text-xl" style={{ color: 'var(--brand-navy)' }}>
                  Keyword research ampliado
                </p>
              </div>
              <p className="text-gray-700 mb-3">
                Combina keyword research tradicional con question research para capturar ambas audiencias.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold mb-2 text-sm">Proceso híbrido:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Paso 1:</strong> Keywords principales con Ahrefs/SEMrush (Google focus)</li>
                  <li>• <strong>Paso 2:</strong> Preguntas long-tail con AnswerThePublic (Perplexity focus)</li>
                  <li>• <strong>Paso 3:</strong> Combina ambas en un mapa de contenido dual</li>
                  <li>• <strong>Paso 4:</strong> Prioriza keywords con alto volumen (Google) + alta complejidad (Perplexity)</li>
                </ul>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  3
                </div>
                <p className="font-bold text-xl" style={{ color: 'var(--brand-navy)' }}>
                  SEO técnico + Schema markup
                </p>
              </div>
              <p className="text-gray-700 mb-3">
                Google valora SEO técnico tradicional. Perplexity valora estructura semántica clara.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-bold mb-2 text-sm">Implementaciones críticas:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Meta tags:</strong> Optimizados para Google (title, description, keywords)</li>
                  <li>• <strong>Schema markup:</strong> Article, FAQPage, HowTo para ambas plataformas</li>
                  <li>• <strong>Core Web Vitals:</strong> Velocidad importa para Google ranking</li>
                  <li>• <strong>Structured data:</strong> JSON-LD bien implementado ayuda a Perplexity extraer info</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sección 3: Tácticas específicas */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Tácticas específicas para cada plataforma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Google */}
          <div className="bg-blue-50 p-6 rounded-xl border-2 border-blue-200">
            <div className="flex items-center space-x-3 mb-4">
              <Search size={28} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="text-xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Exclusivo para Google
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Internal linking:</strong> Estructura de silos temáticos para distribuir PageRank
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Featured snippets:</strong> Optimiza primeros 50-70 palabras para snippet position
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Link building tradicional:</strong> Backlinks desde DAs altos siguen siendo críticos
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Optimización mobile:</strong> Google es mobile-first index, prioriza UX móvil
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Keywords en URLs:</strong> URLs descriptivas con keyword principal
                </span>
              </li>
            </ul>
          </div>

          {/* Perplexity */}
          <div className="bg-cyan-50 p-6 rounded-xl border-2" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <Zap size={28} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="text-xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Exclusivo para Perplexity
              </h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Respuestas directas:</strong> Primera sección debe responder la pregunta en 2-3 párrafos
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Datos verificables:</strong> Estadísticas, fechas, números concretos aumentan citabilidad
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Autoridad de fuente:</strong> Menciones en sites que Perplexity considera autorizados
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Contenido actualizado:</strong> Fechas recientes (2025-2026) priorizadas sobre contenido viejo
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span className="text-gray-700">
                  <strong>Formato conversacional:</strong> Tono natural, evita keyword stuffing
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección 4: Plan de 90 días */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Plan de acción de 90 días para optimización dual
        </h2>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              Días 1-30: Auditoría y fundamentos
            </p>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Audita posición actual en Google (top 10 keywords)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Testea visibilidad en Perplexity (20 consultas clave)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Implementa schema markup en top 5 páginas</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Identifica gaps: ¿dónde rankeas en Google pero no en Perplexity?</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Crea mapa de contenido dual (keywords + preguntas)</span>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              Días 31-60: Optimización de contenido existente
            </p>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Actualiza top 10 artículos con estructura dual</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Añade secciones de "respuesta directa" al inicio de cada artículo</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Incluye 3-5 datos verificables por artículo</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Implementa FAQPage schema en artículos con Q&A</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Actualiza fechas a 2026 en todo contenido relevante</span>
              </label>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              Días 61-90: Contenido nuevo + escala
            </p>
            <div className="space-y-2 text-gray-700">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Publica 3 guías definitivas optimizadas para ambas plataformas</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Crea 1 comparativa exhaustiva (formato tabla + narrativa)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Re-audita: mide mejoras en Google rankings</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Re-audita: mide mejoras en citaciones de Perplexity</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span>Ajusta estrategia basada en datos: doble down en lo que funciona</span>
              </label>
            </div>
          </div>
        </div>

        {/* Sección 5: Métricas */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Métricas clave para trackear en cada plataforma
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--brand-navy)' }}>
              📊 Google Analytics
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Posición promedio en SERP</li>
              <li>• Tráfico orgánico mensual</li>
              <li>• CTR por keyword</li>
              <li>• Featured snippets capturados</li>
              <li>• Bounce rate (objetivo: &lt;45%)</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--brand-navy)' }}>
              📊 Perplexity / GEO Tracking
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Frecuencia de citación (manual)</li>
              <li>• Posición de mención (1ª, 2ª, 3ª fuente)</li>
              <li>• Brand mentions en respuestas</li>
              <li>• Tráfico referral desde Perplexity</li>
              <li>• Branded searches post-exposure</li>
            </ul>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Debo crear contenido separado para Google y Perplexity?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No. El contenido optimizado correctamente funciona para ambos. La clave es estructura híbrida: respuesta 
              directa primero (Perplexity), luego profundidad y contexto (Google).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué porcentaje de mi tráfico puede venir de Perplexity en 2026?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Depende de tu industria. En sectores tech y profesionales B2B, estamos viendo 8-15% del tráfico orgánico 
              proveniente de Perplexity y otros motores generativos. Este porcentaje está creciendo 3-5% mensualmente.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Mi DA (Domain Authority) importa en Perplexity?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sí, pero de forma diferente. Perplexity no usa DA directamente, pero prioriza fuentes que considera autorizadas 
              (generalmente correlacionado con DA alto). Un DA de 50+ te da ventaja significativa.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: No es Google vs Perplexity, es Google + Perplexity
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          La mentalidad correcta no es elegir entre Google o Perplexity, sino <strong>optimizar para capturar tráfico 
          en ambos ecosistemas simultáneamente</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Empresas que adoptan estrategia dual ahora tendrán ventaja competitiva duradera mientras otros siguen enfocados 
          exclusivamente en Google tradicional.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-xl text-white text-center">
          <p className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda implementando una estrategia dual?
          </p>
          <p className="text-lg mb-6">
            Te auditamos tu visibilidad en Google y Perplexity, gratis
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
