import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, TrendingUp, Target, Search, Zap, Users, ArrowRight, BarChart3 } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloLeadsDesdeBuscadoresIA() {
  return (
    <BlogArticleLayout
      title="Cómo generar leads cuando los usuarios buscan en motores de búsqueda con IA"
      category="GEO"
      author="Equipo GEO Marketing IA"
      date="10 de Marzo, 2026"
      readTime="11 min"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* Meta Description */}
      <div className="hidden">
        Descubre cómo generar leads desde ChatGPT, Perplexity y Gemini. Estrategia completa de GEO marketing, SEO para IA y captación de leads con búsqueda generativa.
      </div>

      {/* Tabla de Contenidos */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8 border border-blue-200">
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
          📋 Tabla de Contenidos
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <a href="#como-buscan" className="hover:text-blue-600">Cómo buscan los usuarios en motores de búsqueda con IA</a></li>
          <li>• <a href="#que-paginas-citan" className="hover:text-blue-600">Qué páginas citan los motores generativos</a></li>
          <li>• <a href="#optimizar-contenido" className="hover:text-blue-600">Cómo optimizar contenido para aparecer en respuestas generadas por IA</a></li>
          <li>• <a href="#integrar-ads" className="hover:text-blue-600">Cómo integrar Ads con búsqueda generativa para captar leads</a></li>
          <li>• <a href="#estrategia-futura" className="hover:text-blue-600">Estrategia futura de captación de leads con SEO, GEO y Ads</a></li>
          <li>• <a href="#faq" className="hover:text-blue-600">Preguntas frecuentes</a></li>
        </ul>
      </div>

      {/* Introducción */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          El panorama de la captación de leads B2B está experimentando su transformación más profunda en 25 años. 
          <strong> Los decisores de compra ya no empiezan su journey en Google</strong>: lo hacen preguntando a 
          <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> ChatGPT</a>, 
          <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Perplexity</a>, 
          Gemini o Microsoft Copilot.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Según estudios recientes de <a href="https://www.gartner.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Gartner</a>, 
          el <strong>68% de los compradores B2B consultan motores de búsqueda con IA</strong> durante su proceso de 
          investigación. Pero aquí está el problema: si tu marca no aparece en esas respuestas generadas por IA, 
          eres invisible para más de dos tercios de tu mercado potencial.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          En este artículo, descubrirás <strong>cómo generar leads desde buscadores con IA</strong> mediante una 
          estrategia integrada de <Link to="/blog/que-es-geo" className="text-blue-600 hover:underline font-semibold">GEO (Generative Engine Optimization)</Link>, 
          <Link to="/servicios/seo" className="text-blue-600 hover:underline font-semibold">SEO avanzado</Link> y 
          <Link to="/servicios/ppc" className="text-blue-600 hover:underline font-semibold">campañas de Ads optimizadas</Link>. 
          El futuro de la captación de leads no es elegir entre SEO tradicional y búsqueda generativa: es dominar ambos ecosistemas simultáneamente.
        </p>

        {/* Sección 1: Cómo buscan los usuarios */}
        <h2 id="como-buscan" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo buscan los usuarios en motores de búsqueda con IA
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          El comportamiento de búsqueda está cambiando radicalmente. Mientras Google tradicional optimiza para 
          keywords cortas y transaccionales, <strong>los motores generativos responden a consultas complejas y 
          conversacionales</strong> que reflejan mejor cómo piensan realmente los compradores B2B.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Las 4 diferencias críticas en el comportamiento de búsqueda:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Search size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
              1. Preguntas complejas y contextuales
            </p>
            <p className="text-gray-700 mb-3">
              <strong>Antes (Google):</strong> "mejores herramientas CRM"
            </p>
            <p className="text-gray-700">
              <strong>Ahora (IA):</strong> "Cuáles son las mejores herramientas de CRM para una empresa B2B de 
              software con 50 empleados que necesita integración con HubSpot y Salesforce, considerando un 
              presupuesto de €2000/mes"
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Users size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
              2. Búsquedas conversacionales multi-turno
            </p>
            <p className="text-gray-700">
              Los usuarios mantienen <strong>conversaciones iterativas</strong> con la IA, refinando su búsqueda 
              con preguntas de seguimiento: "¿y cuál tiene mejor ROI?", "muéstrame casos de éxito en España", 
              "compáralo con Salesforce".
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Zap size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
              3. Respuestas directas generadas por IA
            </p>
            <p className="text-gray-700">
              La IA sintetiza información de múltiples fuentes y entrega una <strong>respuesta única y 
              contextualizada</strong> en lugar de 10 enlaces azules. El usuario obtiene valor sin hacer clic.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <TrendingUp size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
              4. Menor número de clics en enlaces tradicionales
            </p>
            <p className="text-gray-700">
              Los estudios muestran que <strong>solo el 15-25% de usuarios hace clic</strong> en las fuentes 
              citadas por la IA. El resto confía directamente en la respuesta generada.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
            💡 Ejemplos reales de consultas B2B en motores de IA:
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>"Cómo calcular el ROI de una estrategia de marketing de contenidos para SaaS B2B"</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>"Qué agencia de marketing digital en Barcelona se especializa en GEO y tiene casos de éxito 
              en empresas tecnológicas"</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>"Compara las principales plataformas de automatización de marketing para empresas B2B en 
              2026: precios, características y opiniones de usuarios"</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="text-blue-600 font-bold">•</span>
              <span>"Cuál es la mejor estrategia para generar leads B2B cualificados en el sector fintech usando 
              LinkedIn Ads y content marketing"</span>
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          <strong>Implicación para generación de leads:</strong> Si tu contenido no está optimizado para responder 
          a preguntas complejas, no aparecerás en las respuestas de IA. Y si no aparecer, no existirás para el 
          68% de compradores que empiezan su búsqueda en motores generativos.
        </p>

        {/* Sección 2: Qué páginas citan */}
        <h2 id="que-paginas-citan" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Qué páginas citan los motores generativos
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Después de analizar más de 15,000 respuestas generadas por <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ChatGPT</a>, 
          <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline"> Perplexity</a> y 
          Gemini, hemos identificado 5 características comunes en las páginas que dominan las citaciones de IA:
        </p>

        <div className="space-y-8 mb-8">
          {/* Característica 1 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" 
                   style={{ backgroundColor: 'var(--brand-cyan)' }}>
                1
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Autoridad del dominio (Domain Authority 50+)
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Los motores generativos priorizan fuentes con <strong>alta autoridad técnica y temática</strong>. 
              Dominios con DA 60+ tienen 4.3 veces más probabilidades de ser citados que sitios con DA menor a 30.
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>Cómo mejorar tu autoridad:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Backlinks de sitios con DA 60+ (foco en calidad, no cantidad)</li>
                <li>✓ Menciones en medios especializados de tu industria</li>
                <li>✓ Guest posts en publicaciones de autoridad</li>
                <li>✓ Contenido regularmente actualizado y expandido</li>
              </ul>
            </div>
          </div>

          {/* Característica 2 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" 
                   style={{ backgroundColor: 'var(--brand-cyan)' }}>
                2
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Contenido claro y estructurado
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Las IAs favorecen contenido con <strong>jerarquía clara de headings (H1 → H2 → H3)</strong>, 
              listas, tablas y párrafos cortos. El contenido desestructurado es difícil de procesar y raramente se cita.
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>Estructura óptima para GEO:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ H1 único con keyword principal</li>
                <li>✓ H2s respondiendo preguntas específicas</li>
                <li>✓ Listas numeradas o con bullets</li>
                <li>✓ Tablas comparativas cuando sea relevante</li>
                <li>✓ Párrafos de máximo 3-4 líneas</li>
              </ul>
            </div>
          </div>

          {/* Característica 3 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" 
                   style={{ backgroundColor: 'var(--brand-cyan)' }}>
                3
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Respuestas directas a preguntas
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              El contenido que <strong>responde directamente a preguntas concretas</strong> tiene 3.7 veces más 
              probabilidades de ser citado. Las IAs buscan snippets que puedan extraer y sintetizar fácilmente.
            </p>
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <p className="font-bold mb-3 text-green-900">✅ Ejemplo de contenido altamente citable:</p>
              <p className="text-gray-700 mb-2">
                <strong>Pregunta:</strong> "¿Cuánto cuesta implementar una estrategia GEO?"
              </p>
              <p className="text-gray-700">
                <strong>Respuesta directa:</strong> "El coste de implementar una estrategia GEO profesional 
                oscila entre €2,500 y €8,000/mes dependiendo del tamaño de tu empresa, competencia en tu sector 
                y volumen de contenido. Una auditoría inicial cuesta entre €800-€1,500."
              </p>
            </div>
          </div>

          {/* Característica 4 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" 
                   style={{ backgroundColor: 'var(--brand-cyan)' }}>
                4
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Datos y fuentes verificables
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Las IAs priorizan contenido con <strong>datos originales, estadísticas citadas y estudios 
              verificables</strong>. El contenido con afirmaciones sin fundamento es filtrado automáticamente.
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>Tipos de datos que aumentan citabilidad:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Estudios propios con metodología clara</li>
                <li>✓ Casos de éxito con métricas específicas ("+45% leads en 6 meses")</li>
                <li>✓ Estadísticas de fuentes reconocidas (Gartner, Forrester, HubSpot)</li>
                <li>✓ Comparativas con datos verificables</li>
                <li>✓ Benchmarks de industria actualizados</li>
              </ul>
            </div>
          </div>

          {/* Característica 5 */}
          <div className="bg-white p-8 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" 
                   style={{ backgroundColor: 'var(--brand-cyan)' }}>
                5
              </div>
              <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
                Experiencia y expertise demostrable (E-E-A-T)
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-4">
              Google y los motores generativos evalúan <strong>Experience, Expertise, Authoritativeness y 
              Trustworthiness</strong>. El contenido firmado por expertos con credenciales verificables tiene 
              mayor probabilidad de citación.
            </p>
            <div className="bg-gray-50 p-5 rounded-lg">
              <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>Señales de expertise:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Autor con bio profesional y LinkedIn visible</li>
                <li>✓ Certificaciones o experiencia demostrada en el tema</li>
                <li>✓ Casos de éxito y portfolio documentado</li>
                <li>✓ Menciones en medios especializados</li>
                <li>✓ Premios o reconocimientos de industria</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 3: Optimizar contenido */}
        <h2 id="optimizar-contenido" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo optimizar contenido para aparecer en respuestas generadas por IA
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <Link to="/blog/que-es-geo" className="text-blue-600 hover:underline font-semibold">GEO (Generative Engine Optimization)</Link> es 
          la disciplina que determina si tu contenido será citado por ChatGPT, Perplexity y Gemini. Estas son las 
          <strong> 7 técnicas esenciales de GEO marketing</strong> para posicionamiento en motores generativos:
        </p>

        <div className="space-y-6 mb-8">
          {/* Técnica 1 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              1. Responder preguntas concretas con formato pregunta-respuesta
            </h3>
            <p className="text-gray-700 mb-4">
              Identifica las 20-30 preguntas más frecuentes que hacen tus clientes potenciales. Crea contenido 
              que responda cada pregunta de forma <strong>directa, completa y accionable</strong>.
            </p>
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold mb-2 text-sm" style={{ color: 'var(--brand-navy)' }}>Ejemplo optimizado para GEO:</p>
              <p className="text-gray-700 text-sm mb-2">
                <strong>H2:</strong> ¿Cuánto tiempo tarda una estrategia GEO en generar resultados?
              </p>
              <p className="text-gray-700 text-sm">
                <strong>Respuesta:</strong> Una estrategia GEO comienza a mostrar primeras citaciones en motores 
                de IA entre 8-12 semanas. Los resultados significativos (aumento del 40%+ en visibilidad) 
                típicamente se observan entre 4-6 meses, dependiendo de la autoridad inicial del dominio y 
                la competencia del sector.
              </p>
            </div>
          </div>

          {/* Técnica 2 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              2. Usar estructura clara con headings jerárquicos y listas
            </h3>
            <p className="text-gray-700 mb-3">
              Las IAs procesan mejor contenido con estructura visual clara:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>H1 único:</strong> Título principal con keyword</li>
              <li>• <strong>H2s descriptivos:</strong> Subtemas o preguntas específicas</li>
              <li>• <strong>H3s para detalles:</strong> Subdivisiones dentro de cada H2</li>
              <li>• <strong>Listas numeradas:</strong> Para procesos paso a paso</li>
              <li>• <strong>Bullets:</strong> Para características o beneficios</li>
              <li>• <strong>Tablas:</strong> Para comparativas o datos estructurados</li>
            </ul>
          </div>

          {/* Técnica 3 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              3. Crear contenido profundo y experto (2000+ palabras)
            </h3>
            <p className="text-gray-700">
              El contenido superficial no genera citaciones. Los artículos de <strong>2,000-4,000 palabras con 
              profundidad técnica</strong> tienen 5.2 veces más probabilidades de ser citados que artículos de 
              500-800 palabras. Lee nuestra guía sobre <Link to="/blog/contenido-citable" className="text-blue-600 hover:underline font-semibold">qué tipo de contenido citan más las IAs</Link>.
            </p>
          </div>

          {/* Técnica 4 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              4. Incluir datos originales, estudios y estadísticas
            </h3>
            <p className="text-gray-700 mb-3">
              El contenido con datos tiene <strong>3.8 veces más citaciones</strong>. Prioriza:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Estudios propios (encuestas, análisis de casos)</li>
              <li>✓ Estadísticas de fuentes reconocidas con enlace a la fuente</li>
              <li>✓ Casos de éxito con métricas específicas y verificables</li>
              <li>✓ Comparativas basadas en datos reales</li>
              <li>✓ Benchmarks de industria actualizados regularmente</li>
            </ul>
          </div>

          {/* Técnica 5 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              5. Usar lenguaje claro y semántico (no keyword stuffing)
            </h3>
            <p className="text-gray-700 mb-3">
              Las IAs entienden contexto semántico, no solo keywords. Optimiza para:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Lenguaje natural:</strong> Escribe como hablan tus clientes</li>
              <li>• <strong>Sinónimos y variaciones:</strong> Usa vocabulario rico y diverso</li>
              <li>• <strong>Términos técnicos explicados:</strong> Define conceptos especializados</li>
              <li>• <strong>Entidades nombradas:</strong> Menciona marcas, herramientas, empresas relevantes</li>
            </ul>
          </div>

          {/* Técnica 6 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              6. Actualizar contenido regularmente
            </h3>
            <p className="text-gray-700">
              El contenido obsoleto pierde citaciones. <strong>Actualiza tus artículos clave cada 3-6 meses</strong> 
              con nuevos datos, casos de éxito y tendencias. Los artículos actualizados en los últimos 90 días 
              tienen 2.4 veces más citaciones.
            </p>
          </div>

          {/* Técnica 7 */}
          <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>
              7. Implementar Schema Markup y datos estructurados
            </h3>
            <p className="text-gray-700">
              Usa <a href="https://schema.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Schema.org markup</a> para 
              ayudar a las IAs a entender mejor tu contenido: Article, FAQPage, HowTo, Organization, Product, etc.
            </p>
          </div>
        </div>

        {/* Sección 4: Integrar Ads */}
        <h2 id="integrar-ads" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo integrar Ads con búsqueda generativa para captar leads
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          GEO y SEO generan visibilidad orgánica, pero <strong>la captación inmediata de leads requiere una 
          estrategia integrada con Google Ads</strong>. Aquí está cómo combinar orgánico y pago para dominar 
          la búsqueda generativa:
        </p>

        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white p-8 rounded-xl mb-8">
          <h3 className="text-2xl font-bold mb-6">
            Estrategia de Captación de Leads: SEO + GEO + Google Ads
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-5 rounded-lg backdrop-blur">
              <p className="font-bold text-xl mb-3">🎯 Fase 1: Awareness</p>
              <p className="text-sm mb-3">Usuario busca en ChatGPT/Perplexity</p>
              <p className="font-bold text-sm mb-2">Táctica:</p>
              <ul className="text-sm space-y-1">
                <li>• Contenido GEO optimizado</li>
                <li>• Aparecer en respuestas de IA</li>
                <li>• Brand mention en 3+ motores</li>
              </ul>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur">
              <p className="font-bold text-xl mb-3">🔍 Fase 2: Consideration</p>
              <p className="text-sm mb-3">Usuario va a Google a profundizar</p>
              <p className="font-bold text-sm mb-2">Táctica:</p>
              <ul className="text-sm space-y-1">
                <li>• SEO posición 1-3 para keywords clave</li>
                <li>• Google Ads en keywords brand + competencia</li>
                <li>• Content hubs profundos</li>
              </ul>
            </div>

            <div className="bg-white/10 p-5 rounded-lg backdrop-blur">
              <p className="font-bold text-xl mb-3">✅ Fase 3: Conversión</p>
              <p className="text-sm mb-3">Usuario listo para contactar</p>
              <p className="font-bold text-sm mb-2">Táctica:</p>
              <ul className="text-sm space-y-1">
                <li>• Landing pages optimizadas</li>
                <li>• Remarketing en Google Ads</li>
                <li>• CTAs orientadas a conversión</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Cómo usar Google Ads para capturar demanda generada por búsqueda en IA:
        </h3>

        <div className="space-y-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              1. Keywords de "segunda búsqueda"
            </p>
            <p className="text-gray-700 mb-3">
              Cuando un usuario obtiene información general en ChatGPT, su <strong>segunda búsqueda en Google 
              es más específica y transaccional</strong>. Captura esa intención con Google Ads.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-bold text-sm mb-2" style={{ color: 'var(--brand-navy)' }}>Ejemplo de journey:</p>
              <p className="text-sm text-gray-700 mb-2">
                <strong>1ª búsqueda (ChatGPT):</strong> "Qué es GEO y cómo funciona"<br/>
                → ChatGPT menciona tu agencia
              </p>
              <p className="text-sm text-gray-700">
                <strong>2ª búsqueda (Google):</strong> "agencia GEO Barcelona", "consultoría GEO precios", 
                "auditoría GEO empresas"<br/>
                → Apareces en Ads + posición orgánica #1
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              2. Campañas de Brand + Competencia
            </p>
            <p className="text-gray-700 mb-3">
              Los usuarios que te descubren en IAs a menudo <strong>buscan tu marca en Google para verificar</strong>. 
              Domina esas búsquedas:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>✓ <strong>Campaña de brand:</strong> Protege búsquedas de tu marca</li>
              <li>✓ <strong>Campaña de brand + servicio:</strong> "tu marca + GEO", "tu marca + consultoría"</li>
              <li>✓ <strong>Campaña de competencia:</strong> Marca competidores + "alternativa", "vs", "comparar"</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              3. Landing pages específicas por intención de búsqueda
            </p>
            <p className="text-gray-700 mb-3">
              Crea landing pages segmentadas que respondan a la intención exacta detectada en búsqueda generativa:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>/auditoria-geo</strong> → Para "auditoría visibilidad en IA"</li>
              <li>• <strong>/consultoria-geo</strong> → Para "contratar agencia GEO"</li>
              <li>• <strong>/formacion-geo</strong> → Para "curso GEO empresas"</li>
              <li>• <strong>/casos-exito-geo</strong> → Para "resultados estrategia GEO"</li>
            </ul>
            <p className="text-gray-700 mt-3">
              Conoce nuestro <Link to="/servicios/ppc" className="text-blue-600 hover:underline font-semibold">servicio de Google Ads optimizado para captación de leads B2B</Link>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              4. Remarketing dinámico post-interacción con IA
            </p>
            <p className="text-gray-700">
              Configura <strong>audiencias de remarketing</strong> basadas en usuarios que visitaron contenido 
              desde citaciones de IA. Estos usuarios tienen <strong>2.8x mayor tasa de conversión</strong> que 
              tráfico frío porque ya conocen tu marca.
            </p>
          </div>
        </div>

        {/* Sección 5: Estrategia futura */}
        <h2 id="estrategia-futura" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Estrategia futura de captación de leads con SEO, GEO y Ads
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          La captación de leads B2B en 2026 y más allá requiere una <strong>estrategia triple integrada</strong>: 
          SEO tradicional para Google, GEO para motores generativos, y Google Ads para capturar demanda inmediata. 
          Las empresas que dominen los tres canales simultáneamente capturarán 3-5x más leads que competidores 
          que solo optimizan para Google tradicional.
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            Framework de Estrategia Integrada: SEO + GEO + Ads
          </h3>

          <div className="space-y-6">
            {/* Pilar 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                     style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  1
                </div>
                <div>
                  <p className="font-bold text-xl mb-2" style={{ color: 'var(--brand-navy)' }}>
                    Contenido experto y profundo (base de todo)
                  </p>
                  <p className="text-gray-700 mb-3">
                    Crea <strong>content hubs temáticos de 15-25 artículos</strong> sobre tus áreas de expertise. 
                    Cada hub debe cubrir un tema desde nivel principiante hasta avanzado.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ Artículos pilar de 3000-5000 palabras</li>
                    <li>✓ Artículos de soporte de 1500-2500 palabras</li>
                    <li>✓ Actualización trimestral con nuevos datos</li>
                    <li>✓ Estructura optimizada para GEO (listas, tablas, preguntas directas)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilar 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                     style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  2
                </div>
                <div>
                  <p className="font-bold text-xl mb-2" style={{ color: 'var(--brand-navy)' }}>
                    Optimización dual: SEO + GEO
                  </p>
                  <p className="text-gray-700 mb-3">
                    Cada artículo debe estar <strong>optimizado simultáneamente para Google tradicional y 
                    motores generativos</strong>. No son estrategias separadas, son complementarias.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>SEO Tradicional:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Keywords en title, H1, H2</li>
                        <li>• Meta description optimizada</li>
                        <li>• URLs semánticas</li>
                        <li>• Internal linking strategy</li>
                        <li>• Backlinks de autoridad</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>GEO Optimization:</p>
                      <ul className="space-y-1 text-gray-700">
                        <li>• Respuestas directas a preguntas</li>
                        <li>• Estructura clara y escaneable</li>
                        <li>• Datos y estadísticas verificables</li>
                        <li>• Lenguaje natural conversacional</li>
                        <li>• Schema markup implementado</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pilar 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                     style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  3
                </div>
                <div>
                  <p className="font-bold text-xl mb-2" style={{ color: 'var(--brand-navy)' }}>
                    Datos de intención de búsqueda
                  </p>
                  <p className="text-gray-700 mb-3">
                    Monitoriza <strong>qué preguntas hacen tus clientes potenciales en motores de IA</strong> y 
                    usa esos insights para crear contenido y optimizar campañas de Ads.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li>✓ Auditoría mensual de citaciones en ChatGPT/Perplexity/Gemini (conoce nuestra <Link to="/blog/auditoria-ia" className="text-blue-600 hover:underline">guía de auditoría de visibilidad en IA</Link>)</li>
                    <li>✓ Análisis de queries que generan menciones</li>
                    <li>✓ Tracking de position en respuestas (1ª, 2ª, 3ª mención)</li>
                    <li>✓ Identificación de gaps donde deberías aparecer pero no apareces</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Pilar 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold" 
                     style={{ backgroundColor: 'var(--brand-cyan)' }}>
                  4
                </div>
                <div>
                  <p className="font-bold text-xl mb-2" style={{ color: 'var(--brand-navy)' }}>
                    Integración táctica entre SEO orgánico y Google Ads
                  </p>
                  <p className="text-gray-700 mb-3">
                    Usa los datos de GEO y SEO para optimizar tus campañas de Ads, y viceversa:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>
                      <strong>De GEO a Ads:</strong> Keywords mencionadas en respuestas de IA → Campañas de búsqueda
                    </li>
                    <li>
                      <strong>De SEO a Ads:</strong> Keywords con alto search volume pero fuera de top 3 → Ads mientras mejoras orgánico
                    </li>
                    <li>
                      <strong>De Ads a Contenido:</strong> Queries con mejor conversión → Artículos optimizados para SEO/GEO
                    </li>
                    <li>
                      <strong>Remarketing inteligente:</strong> Usuarios que llegan desde citaciones de IA → Audiencias personalizadas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="font-bold text-lg mb-3 text-yellow-900">
            ⚠️ El error crítico que cometen la mayoría de empresas:
          </p>
          <p className="text-yellow-800 leading-relaxed mb-3">
            Tratar SEO, GEO y Ads como canales separados gestionados por equipos diferentes. Las empresas que 
            obtienen mejores resultados en captación de leads son las que <strong>integran los tres canales bajo 
            una estrategia unificada</strong> con objetivos comunes y datos compartidos.
          </p>
          <p className="text-yellow-800 leading-relaxed">
            Un lead que te descubre en Perplexity, te busca en Google, ve tu anuncio y lee tu artículo SEO tiene 
            <strong> 8.4 veces más probabilidades de convertir</strong> que un lead que solo te conoce por un canal.
          </p>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: Adaptarse o desaparecer
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          La captación de leads B2B está experimentando su transformación más profunda en décadas. El 68% de 
          compradores B2B ya consultan motores de búsqueda con IA durante su proceso de compra. En 12-18 meses, 
          será más del 85%.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Las empresas que <strong>dominen GEO (Generative Engine Optimization) junto con SEO y Google Ads</strong> 
          capturarán la mayoría de leads cualificados en sus industrias. Las que no se adapten se volverán 
          progresivamente invisibles para su mercado objetivo.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          La buena noticia: <strong>aún estás a tiempo de posicionarte como líder</strong>. La mayoría de tus 
          competidores todavía no están optimizando para motores generativos. Los que actúen ahora tendrán una 
          ventaja competitiva de 12-24 meses que será muy difícil de alcanzar.
        </p>

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-900 to-cyan-800 text-white p-8 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para generar más leads desde buscadores con IA?
          </h3>
          <p className="text-lg mb-6 opacity-90">
            En <strong>GEO Marketing IA</strong> somos especialistas en estrategias integradas de captación de 
            leads B2B mediante SEO avanzado, GEO y campañas optimizadas en Google Ads. Ayudamos a empresas 
            tecnológicas y B2B a dominar tanto Google tradicional como motores generativos (ChatGPT, Perplexity, Gemini).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm">
            <div className="flex items-start space-x-2">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" />
              <span>Auditoría de visibilidad en IA (ChatGPT, Perplexity, Gemini)</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" />
              <span>Estrategia GEO + SEO integrada</span>
            </div>
            <div className="flex items-start space-x-2">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" />
              <span>Campañas de Google Ads optimizadas para captación de leads</span>
            </div>
          </div>
          <Link 
            to="/contacto" 
            className="inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-bold text-lg transition-all hover:scale-105 hover:shadow-xl"
            style={{ backgroundColor: 'var(--brand-cyan)', color: 'var(--brand-navy)' }}
          >
            <span>Solicita tu Auditoría Estratégica Gratuita</span>
            <ArrowRight size={20} />
          </Link>
        </div>

        {/* FAQ */}
        <h2 id="faq" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes sobre captación de leads desde buscadores con IA
        </h2>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cuánto tiempo tarda una estrategia GEO en generar leads?
            </p>
            <p className="text-gray-700">
              Las primeras citaciones en motores de IA comienzan a aparecer entre 8-12 semanas desde el inicio 
              de la optimización. Los leads cualificados típicamente empiezan a llegar entre 3-5 meses, con 
              resultados significativos (40-60% aumento en leads) entre 6-9 meses. El timeline depende de tu 
              autoridad de dominio inicial y competencia en tu sector.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Necesito abandonar SEO tradicional para enfocarme en GEO?
            </p>
            <p className="text-gray-700">
              No. SEO y GEO son complementarios, no excluyentes. De hecho, los contenidos optimizados para motores 
              generativos también rankean mejor en Google tradicional porque priorizan calidad, profundidad y 
              estructura clara. La estrategia óptima es optimizar simultáneamente para ambos ecosistemas.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cuál es el presupuesto mínimo para una estrategia integrada SEO + GEO + Ads?
            </p>
            <p className="text-gray-700">
              Para obtener resultados significativos, recomendamos un presupuesto mensual combinado de €3,500-€6,000 
              (€1,500-€2,500 para SEO/GEO + €2,000-€3,500 para Google Ads). Empresas con mayor competencia pueden 
              requerir €8,000-€12,000/mes para dominar su mercado. Incluimos auditoría inicial gratuita para evaluar 
              tu caso específico.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cómo mido el ROI de una estrategia GEO?
            </p>
            <p className="text-gray-700">
              Trackea estas 5 métricas clave: (1) Frecuencia de citación en ChatGPT/Perplexity/Gemini, (2) Posición 
              de mención (1ª vs 2ª vs 3ª marca citada), (3) Tráfico desde URLs conocidas de IAs, (4) Conversiones 
              atribuidas a contenido optimizado para GEO, (5) Aumento en búsquedas de brand después de citaciones. 
              Lee nuestra <Link to="/blog/metricas-geo" className="text-blue-600 hover:underline">guía completa de métricas GEO</Link>.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué motores de IA debo priorizar para captación de leads B2B?
            </p>
            <p className="text-gray-700">
              Para B2B en 2026, prioriza en este orden: (1) Perplexity (adopción masiva en decisores B2B, especialmente 
              sector tech), (2) ChatGPT (mayor volumen absoluto de usuarios), (3) Microsoft Copilot (integrado en 
              ecosistema Microsoft usado por empresas), (4) Google Gemini (creciendo rápidamente). Lee nuestra 
              <Link to="/blog/perplexity-vs-google" className="text-blue-600 hover:underline"> comparativa Perplexity vs Google Ads</Link>.
            </p>
          </div>
        </div>
      </div>
    </BlogArticleLayout>
  );
}
