import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, Search, ClipboardCheck, AlertTriangle, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloAuditoriaIA() {
  return (
    <BlogArticleLayout
      title="Cómo hacer una auditoría de visibilidad en IA para tu empresa"
      category="GEO"
      author="Equipo GEO Marketing IA"
      date="9 de Marzo, 2026"
      readTime="15 min"
      image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* Meta Description */}
      <div className="hidden">
        Guía paso a paso para auditar la visibilidad de tu marca en ChatGPT, Perplexity y Gemini. Incluye checklist y herramientas.
      </div>

      {/* Tabla de Contenidos */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8 border border-blue-200">
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
          📋 Tabla de Contenidos
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <a href="#por-que-auditoria" className="hover:text-blue-600">Por qué necesitas una auditoría de IA</a></li>
          <li>• <a href="#fase-1" className="hover:text-blue-600">Fase 1: Preparación y configuración</a></li>
          <li>• <a href="#fase-2" className="hover:text-blue-600">Fase 2: Ejecución de consultas</a></li>
          <li>• <a href="#fase-3" className="hover:text-blue-600">Fase 3: Análisis y documentación</a></li>
          <li>• <a href="#fase-4" className="hover:text-blue-600">Fase 4: Benchmarking competitivo</a></li>
          <li>• <a href="#herramientas" className="hover:text-blue-600">Herramientas y recursos</a></li>
          <li>• <a href="#faq" className="hover:text-blue-600">Preguntas frecuentes</a></li>
        </ul>
      </div>

      {/* Introducción */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          No puedes mejorar lo que no mides. Si no sabes <strong>cómo, cuándo y dónde las IAs mencionan (o ignoran) 
          tu marca</strong>, estás volando a ciegas en el nuevo ecosistema de búsqueda generativa impulsado por <a href="https://openai.com/chatgpt" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ChatGPT</a>, <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Perplexity</a> y Gemini.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Una auditoría de visibilidad en IA es el punto de partida obligatorio para cualquier estrategia de <Link to="/blog/que-es-geo" className="text-blue-600 hover:underline font-semibold">GEO (Generative Engine Optimization)</Link>. 
          Te permite entender tu posición actual, identificar oportunidades críticas y establecer una línea base 
          para medir resultados.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          En esta guía completa, te mostramos <strong>exactamente cómo realizar una auditoría profesional de visibilidad 
          en IA</strong> para tu empresa, paso a paso. Si prefieres que lo hagamos por ti, conoce nuestro <Link to="/servicios/geo" className="text-blue-600 hover:underline font-semibold">servicio de auditoría GEO profesional</Link>.
        </p>

        {/* Sección 1: Por qué necesitas una auditoría */}
        <h2 id="por-que-auditoria" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Por qué una auditoría de visibilidad en IA es crítica
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8">
          <p className="font-bold text-lg mb-3 text-red-900">
            El problema invisible del marketing B2B moderno:
          </p>
          <p className="text-red-800 leading-relaxed mb-3">
            El 58% de los tomadores de decisión B2B consultan a IAs durante su proceso de compra. Si tu marca 
            no aparece en esas conversaciones, <strong>estás perdiendo más del 50% de tu mercado potencial antes 
            de que siquiera lleguen a Google</strong>.
          </p>
          <p className="text-red-800 leading-relaxed">
            Peor aún: no tienes forma de saberlo sin una auditoría sistemática.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Qué descubrirás con una auditoría profesional:
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <CheckCircle size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>Tu posición actual</p>
            <p className="text-gray-700">
              ¿Te mencionan las IAs? ¿Con qué frecuencia? ¿En qué contexto? ¿Como líder o como alternativa?
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Target size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>Gaps competitivos</p>
            <p className="text-gray-700">
              Identifica competidores que dominan respuestas de IA y analiza qué hacen diferente
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <AlertTriangle size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>Puntos ciegos</p>
            <p className="text-gray-700">
              Descubre consultas importantes donde deberías aparecer pero no lo haces
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <TrendingUp size={28} className="mb-3" style={{ color: 'var(--brand-cyan)' }} />
            <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>Oportunidades rápidas</p>
            <p className="text-gray-700">
              Identifica victorias fáciles donde pequeños cambios generan grandes resultados
            </p>
          </div>
        </div>

        {/* Sección 2: Preparación */}
        <h2 id="fase-1" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Fase 1: Preparación y configuración
        </h2>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Herramientas que necesitarás
        </h3>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <p className="font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>Stack básico para auditoría de IA:</p>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold mb-2">1. Acceso a motores de IA principales:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>ChatGPT (OpenAI) - versión Plus recomendada para búsqueda web</li>
                <li>Perplexity AI - ideal para análisis de citaciones</li>
                <li>Google Gemini - integración con ecosistema Google</li>
                <li>Microsoft Copilot - perspectiva empresarial</li>
                <li>Claude (Anthropic) - análisis complementario</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold mb-2">2. Herramientas de tracking:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Google Sheets o Excel - para documentar resultados</li>
                <li>Screenshot tool - para capturar respuestas de IA</li>
                <li>Ahrefs / SEMrush - análisis de autoridad de dominio</li>
                <li>Google Search Console - baseline de rendimiento SEO</li>
              </ul>
            </div>

            <div className="bg-white p-4 rounded-lg">
              <p className="font-bold mb-2">3. Navegadores preparados:</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
                <li>Modo incógnito - para evitar personalización</li>
                <li>Diferentes ubicaciones geográficas (VPN opcional)</li>
                <li>Sesiones limpias sin historial previo</li>
              </ul>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Define tu conjunto de consultas de prueba
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Crea una lista de 20-50 preguntas que tu audiencia objetivo realmente haría. Organízalas por categorías:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead style={{ backgroundColor: 'var(--brand-navy)' }}>
              <tr>
                <th className="p-4 text-left text-white font-bold">Categoría</th>
                <th className="p-4 text-left text-white font-bold">Ejemplos de Consultas</th>
                <th className="p-4 text-left text-white font-bold">Importancia</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Branded</td>
                <td className="p-4">"¿Qué es [tu marca]?", "Review de [tu producto]"</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Alta</span></td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Comparativas</td>
                <td className="p-4">"[Tu marca] vs [competidor]", "Alternativas a [competidor]"</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Alta</span></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Categoría amplia</td>
                <td className="p-4">"Mejor [tipo de producto] para [caso de uso]"</td>
                <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">Media</span></td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Problemática</td>
                <td className="p-4">"¿Cómo solucionar [problema que resuelves]?"</td>
                <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">Media</span></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Long-tail nicho</td>
                <td className="p-4">"[Producto] para [industria específica] con [requerimiento]"</td>
                <td className="p-4"><span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-bold">Alta</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
          <p className="font-bold mb-2 text-yellow-900">💡 Pro Tip:</p>
          <p className="text-yellow-800 leading-relaxed">
            Pregunta a tu equipo de ventas: "¿Qué preguntas hacen los leads antes de agendar una demo?" 
            Esas son tus consultas más valiosas para auditar.
          </p>
        </div>

        {/* Sección 3: Ejecución */}
        <h2 id="fase-2" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Fase 2: Ejecución de la auditoría
        </h2>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Paso 1: Test sistemático en cada motor de IA
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Para cada una de tus consultas de prueba, sigue este proceso:
        </p>

        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              1
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Haz la consulta en modo incógnito
              </p>
              <p className="text-gray-700">
                Asegúrate de no estar logueado o usa un nuevo perfil para evitar personalización basada en historial.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              2
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Documenta la respuesta completa
              </p>
              <p className="text-gray-700">
                Guarda screenshot y copia el texto. Anota: ¿Mencionan tu marca? ¿En qué posición? ¿Qué dicen exactamente?
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              3
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Identifica competidores mencionados
              </p>
              <p className="text-gray-700">
                ¿Qué otras marcas aparecen? ¿Con qué frecuencia? ¿En qué orden? Esto es tu benchmark competitivo.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              4
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Revisa las fuentes citadas (Perplexity)
              </p>
              <p className="text-gray-700">
                Perplexity muestra las fuentes de sus respuestas. ¿Qué sitios cita? ¿Son tuyos? ¿De competidores? 
                ¿Medios de terceros?
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-5 bg-white rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              5
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Repite en todos los motores
              </p>
              <p className="text-gray-700">
                ChatGPT, Perplexity, Gemini y Copilot pueden dar respuestas diferentes. Testea en los 4 principales.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Paso 2: Sistema de scoring de visibilidad
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Para cada consulta, asigna un puntaje de visibilidad:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8 border border-blue-200">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-blue-200">
                <td className="py-3 font-bold" style={{ color: 'var(--brand-navy)' }}>✅ Mencionado primero</td>
                <td className="py-3 text-right font-bold text-green-600">10 puntos</td>
              </tr>
              <tr className="border-b border-blue-200">
                <td className="py-3 font-bold" style={{ color: 'var(--brand-navy)' }}>✅ Mencionado en top 3</td>
                <td className="py-3 text-right font-bold text-green-600">7 puntos</td>
              </tr>
              <tr className="border-b border-blue-200">
                <td className="py-3 font-bold" style={{ color: 'var(--brand-navy)' }}>⚠️ Mencionado después</td>
                <td className="py-3 text-right font-bold text-yellow-600">4 puntos</td>
              </tr>
              <tr className="border-b border-blue-200">
                <td className="py-3 font-bold" style={{ color: 'var(--brand-navy)' }}>⚠️ Mencionado solo si pregunto específicamente</td>
                <td className="py-3 text-right font-bold text-orange-600">2 puntos</td>
              </tr>
              <tr>
                <td className="py-3 font-bold" style={{ color: 'var(--brand-navy)' }}>❌ No mencionado</td>
                <td className="py-3 text-right font-bold text-red-600">0 puntos</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          <strong>Score total ideal:</strong> Si auditas 30 consultas en 4 motores (120 tests totales), 
          un score de 600+ puntos indica visibilidad excelente. Menos de 200 puntos = necesitas intervención urgente.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Paso 3: Análisis competitivo detallado
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Para cada competidor que aparece consistentemente:
        </p>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border border-gray-200">
          <p className="font-bold text-lg mb-4" style={{ color: 'var(--brand-navy)' }}>
            Checklist de análisis competitivo:
          </p>
          <div className="space-y-3">
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Qué tipo de contenido publican? (blogs, guías, whitepapers, case studies)
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Cuál es su Domain Authority (Ahrefs/SEMrush)?
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Tienen schema markup implementado? (usa validador de Google)
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Dónde están siendo mencionados? (medios, directorios, blogs)
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Tienen presencia en plataformas de review? (G2, Capterra, Trustpilot)
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Cómo estructuran su sitio web? (información de productos, FAQs, recursos)
              </span>
            </label>
            <label className="flex items-start space-x-3">
              <input type="checkbox" className="mt-1" />
              <span className="text-gray-700">
                ¿Qué palabras clave y temas cubren en su contenido?
              </span>
            </label>
          </div>
        </div>

        {/* Sección 4: Análisis */}
        <h2 id="fase-3" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Fase 3: Análisis y generación de insights
        </h2>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Crea tu matriz de oportunidades
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Clasifica todas las consultas auditadas en esta matriz:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead style={{ backgroundColor: 'var(--brand-navy)' }}>
              <tr>
                <th className="p-4 text-left text-white font-bold">Categoría</th>
                <th className="p-4 text-left text-white font-bold">Situación</th>
                <th className="p-4 text-left text-white font-bold">Acción Recomendada</th>
                <th className="p-4 text-left text-white font-bold">Prioridad</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Victoria fácil</td>
                <td className="p-4">Apareces en posición 4-6</td>
                <td className="p-4">Optimizar contenido existente</td>
                <td className="p-4"><span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold">Alta</span></td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Gap crítico</td>
                <td className="p-4">No apareces, competencia sí</td>
                <td className="p-4">Crear contenido nuevo profundo</td>
                <td className="p-4"><span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-bold">Urgente</span></td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Tierra virgen</td>
                <td className="p-4">Nadie aparece consistentemente</td>
                <td className="p-4">Oportunidad de dominar nicho</td>
                <td className="p-4"><span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-bold">Media</span></td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Fortaleza</td>
                <td className="p-4">Apareces en top 3 consistentemente</td>
                <td className="p-4">Mantener y actualizar</td>
                <td className="p-4"><span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-bold">Baja</span></td>
              </tr>
              <tr>
                <td className="p-4 font-semibold">Océano rojo</td>
                <td className="p-4">Mercado saturado, difícil entrar</td>
                <td className="p-4">Buscar ángulo diferenciado</td>
                <td className="p-4"><span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-bold">Baja</span></td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Identifica patrones en las respuestas
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          Busca tendencias en tus resultados:
        </p>

        <div className="space-y-4 mb-8">
          <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>
              🔍 ¿Qué tipos de preguntas generan menciones?
            </p>
            <p className="text-gray-700">
              ¿Apareces más en consultas técnicas? ¿En comparativas? ¿En búsquedas de nicho? Esto indica 
              dónde está tu fortaleza actual.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>
              🏆 ¿Qué competidores dominan consistentemente?
            </p>
            <p className="text-gray-700">
              Si 1-2 competidores aparecen en el 80% de respuestas, estudia profundamente su estrategia. 
              Son tu benchmark a superar.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>
              📊 ¿Qué fuentes externas citan las IAs?
            </p>
            <p className="text-gray-700">
              Si Perplexity cita consistentemente TechCrunch, Forbes o G2, necesitas presencia en esas plataformas.
            </p>
          </div>

          <div className="bg-white p-5 rounded-lg shadow-md border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>
              ⚡ ¿Hay diferencias entre motores de IA?
            </p>
            <p className="text-gray-700">
              Si ChatGPT te menciona pero Perplexity no, puede indicar problemas de SEO técnico o falta de 
              menciones en fuentes web recientes.
            </p>
          </div>
        </div>

        {/* Sección 5: Plan de acción */}
        <h2 id="fase-4" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Fase 4: De auditoría a plan de acción
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Una auditoría sin plan de acción es un documento inútil. Convierte tus hallazgos en un roadmap ejecutable:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-200">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Template de plan de acción post-auditoría:
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                🚨 Prioridad 1: Gaps Críticos (semanas 1-2)
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Identificar las 5 consultas más importantes donde no apareces</li>
                <li>Crear contenido profundo (2000+ palabras) para cada una</li>
                <li>Implementar schema markup relevante</li>
                <li>Publicar y promocionar en redes/comunidades</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                ⚡ Prioridad 2: Victorias Fáciles (semanas 3-4)
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Optimizar contenido donde ya apareces en posición 4-10</li>
                <li>Añadir más datos, ejemplos y casos de uso</li>
                <li>Actualizar fechas y estadísticas</li>
                <li>Mejorar estructura con H2/H3 claros</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                🎯 Prioridad 3: Autoridad Externa (semanas 5-8)
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Generar 10+ menciones en medios de autoridad</li>
                <li>Optimizar perfiles en G2, Capterra, Trustpilot</li>
                <li>Publicar guest posts en blogs de industria</li>
                <li>Participar en podcasts y webinars</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                📈 Prioridad 4: Monitoreo Continuo (ongoing)
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                <li>Re-auditar cada 30 días las consultas principales</li>
                <li>Trackear cambios en menciones y posiciones</li>
                <li>Ajustar estrategia según resultados</li>
                <li>Documentar qué tácticas funcionan mejor</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Plantilla descargable */}
        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Plantilla de auditoría (Checklist completa)
        </h3>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-8 border-2" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-bold text-lg mb-4" style={{ color: 'var(--brand-navy)' }}>
            ✅ Checklist de auditoría completa de visibilidad en IA:
          </p>
          <div className="space-y-3">
            <div className="border-b border-gray-200 pb-3">
              <p className="font-bold mb-2">📋 Preparación</p>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Acceso configurado a ChatGPT, Perplexity, Gemini, Copilot</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Lista de 30+ consultas de prueba categorizada</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Spreadsheet de tracking creado</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Navegadores en modo incógnito listos</span>
              </label>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <p className="font-bold mb-2">🔍 Ejecución</p>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Tests completados en los 4 motores principales</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Screenshots y texto de respuestas guardados</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Score de visibilidad calculado</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Competidores identificados y documentados</span>
              </label>
            </div>

            <div className="border-b border-gray-200 pb-3">
              <p className="font-bold mb-2">📊 Análisis</p>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Matriz de oportunidades completada</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Análisis competitivo detallado realizado</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Patrones y tendencias identificados</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Fuentes externas citadas documentadas</span>
              </label>
            </div>

            <div>
              <p className="font-bold mb-2">🎯 Plan de Acción</p>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Top 5 gaps críticos priorizados</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Roadmap de contenido de 90 días creado</span>
              </label>
              <label className="flex items-start space-x-3 mb-2">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Plan de generación de menciones externas</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Calendario de re-auditorías programado</span>
              </label>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 id="faq" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes sobre auditorías de IA
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Con qué frecuencia debo hacer una auditoría completa?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Auditoría completa cada 3 meses. Auditoría parcial (consultas principales) cada 30 días. 
              El ecosistema de IA evoluciona rápido, y tu competencia también está optimizando.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Puedo automatizar parte del proceso?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Parcialmente. Hay herramientas emergentes que trackean menciones en IAs, pero aún es necesario 
              análisis manual para contexto y calidad. Automatiza el tracking, pero no el análisis estratégico.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué hago si mi score es muy bajo (menos de 100)?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No entres en pánico. Es el punto de partida de la mayoría de empresas. Enfócate en wins rápidas: 
              schema markup, optimizar 3-5 páginas clave, y generar 10 menciones en fuentes autorizadas. 
              Verás mejoras en 60-90 días.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Vale la pena contratar una agencia para la auditoría?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sí, si quieres resultados profesionales y análisis competitivo profundo. Una agencia especializada 
              tiene herramientas, experiencia y puede ejecutar en 1 semana lo que te tomaría 1 mes hacerlo internamente. 
              La inversión se recupera rápido con insights accionables.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: La auditoría es solo el principio
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Una auditoría de visibilidad en IA te da el mapa, pero <strong>tú tienes que recorrer el camino</strong>. 
          Los insights más valiosos no vienen de los números, sino de lo que haces con ellos.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Empresas que auditan, implementan y re-auditan sistemáticamente ven mejoras de 200-400% en visibilidad 
          en 6 meses. Las que solo auditan una vez y archivan el documento... no ven ningún cambio.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          <strong>No dejes que tu auditoría sea un PDF olvidado en una carpeta</strong>. Conviértela en tu 
          roadmap ejecutable para dominar la búsqueda generativa.
        </p>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-10 rounded-2xl text-white text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">¿Quieres una auditoría profesional lista para ejecutar?</h3>
          <p className="text-xl mb-8 text-white/90">
            Nuestro equipo realiza auditorías completas de visibilidad en IA con análisis competitivo, 
            matriz de oportunidades y roadmap de 90 días incluido.
          </p>
          <Link to="/contacto">
            <button className="px-10 py-4 bg-white rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105" style={{ color: 'var(--brand-navy)' }}>
              Solicitar Auditoría Profesional Gratuita
            </button>
          </Link>
        </div>
      </div>
    </BlogArticleLayout>
  );
}