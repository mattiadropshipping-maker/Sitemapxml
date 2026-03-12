import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, BarChart3, TrendingUp, Target, Activity } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloMetricasGEO() {
  return (
    <BlogArticleLayout
      title="Métricas clave para medir el éxito de tu estrategia GEO"
      category="GEO"
      author="Equipo GEO Marketing IA"
      date="20 de Enero, 2026"
      readTime="6 min"
      image="https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzI4MDgzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <div className="hidden">
        KPIs esenciales que debes trackear para evaluar tu desempeño en motores de búsqueda generativos.
      </div>

      {/* Tabla de Contenidos */}
      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl mb-8 border border-blue-200">
        <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
          📋 Tabla de Contenidos
        </h3>
        <ul className="space-y-2 text-gray-700">
          <li>• <a href="#metricas-criticas" className="hover:text-blue-600">Las 7 métricas críticas de GEO</a></li>
          <li>• <a href="#framework" className="hover:text-blue-600">Framework de medición mensual</a></li>
          <li>• <a href="#herramientas" className="hover:text-blue-600">Herramientas de tracking</a></li>
          <li>• <a href="#dashboards" className="hover:text-blue-600">Dashboards y reportes</a></li>
          <li>• <a href="#errores" className="hover:text-blue-600">Errores comunes al medir GEO</a></li>
          <li>• <a href="#faq" className="hover:text-blue-600">Preguntas frecuentes</a></li>
        </ul>
      </div>

      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          No puedes optimizar lo que no mides. Pero las métricas tradicionales de <a href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SEO</a> <strong>(rankings, tráfico orgánico, 
          backlinks) no capturan el verdadero impacto de <Link to="/blog/que-es-geo" className="text-blue-600 hover:underline font-semibold">GEO</Link></strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Esta guía define los <strong>7 KPIs esenciales para trackear tu estrategia GEO</strong> y cómo medirlos 
          efectivamente en 2026. Si necesitas ayuda implementando un sistema de medición, conoce nuestro <Link to="/servicios/geo" className="text-blue-600 hover:underline font-semibold">servicio de consultoría GEO</Link> que incluye <Link to="/blog/auditoria-ia" className="text-blue-600 hover:underline font-semibold">auditoría profesional de visibilidad en IA</Link>.
        </p>

        <h2 id="metricas-criticas" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Las 7 métricas críticas de GEO
        </h2>

        {/* Métrica 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              1
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Frecuencia de Citación (Citation Rate)
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> En cuántas respuestas generativas aparece tu marca cuando haces consultas relevantes.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Cómo medirlo:</p>
            <ol className="space-y-2 text-gray-700">
              <li>1. Define 20-30 consultas clave relacionadas con tu negocio</li>
              <li>2. Pregunta cada consulta en ChatGPT, Perplexity, Gemini, Claude</li>
              <li>3. Registra si tu marca aparece (sí/no) y en qué posición (1ª, 2ª, 3ª mención)</li>
              <li>4. Calcula: (Veces mencionado / Total consultas) x 100 = Citation Rate %</li>
            </ol>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold mb-2 text-green-900">🎯 Objetivo:</p>
            <p className="text-green-800">
              <strong>Citation Rate de 30%+</strong> es excelente. Menos de 10% indica que necesitas urgentemente 
              optimizar para GEO.
            </p>
          </div>
        </div>

        {/* Métrica 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              2
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Posición de Mención (Mention Position)
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> Si eres la 1ª, 2ª o 3ª marca mencionada cuando aparecer en respuestas de IA.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Por qué importa:</p>
            <p className="text-gray-700 mb-3">
              En promedio, la 1ª marca mencionada recibe <strong>60% del engagement</strong>, la 2ª recibe 25%, 
              y la 3ª solo 15%. Ser mencionado es bueno, pero ser mencionado <em>primero</em> es lo que genera resultados.
            </p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-bold mb-2" style={{ color: 'var(--brand-navy)' }}>Cómo mejorar tu posición:</p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Aumenta autoridad de dominio (DA 50+)</li>
              <li>• Publica contenido más profundo que competidores</li>
              <li>• Genera más menciones en fuentes autorizadas</li>
            </ul>
          </div>
        </div>

        {/* Métrica 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              3
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Share of Voice en IAs (AI SOV)
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> Tu visibilidad en IAs comparada con tus competidores directos.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Fórmula:</p>
            <div className="bg-white p-3 rounded font-mono text-sm">
              AI SOV = (Tus menciones / Total menciones del sector) x 100
            </div>
            <p className="text-sm text-gray-600 mt-3">
              Ejemplo: Si en 30 consultas relevantes tu marca aparece 8 veces y tus 3 competidores principales 
              aparecen 12, 10 y 6 veces respectivamente, tu AI SOV = 8/(8+12+10+6) = 22%
            </p>
          </div>
        </div>

        {/* Métrica 4 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              4
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Tráfico Referral desde IAs
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> Visitas a tu sitio provenientes directamente de plataformas de IA.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Cómo trackearlo:</p>
            <p className="text-gray-700 mb-3">
              En Google Analytics 4, filtra por fuentes de tráfico:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><code>perplexity.ai</code> - Tráfico de Perplexity</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><code>chat.openai.com</code> - Tráfico de ChatGPT</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><code>gemini.google.com</code> - Tráfico de Gemini</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Métrica 5 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              5
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Branded Search Lift
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> Incremento en búsquedas de tu marca en Google después de mejorar visibilidad en IAs.
          </p>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold mb-2 text-yellow-900">📈 Insight clave:</p>
            <p className="text-yellow-800">
              Muchos usuarios ven tu mención en Perplexity/ChatGPT, pero luego buscan tu marca directamente en Google 
              antes de visitar tu sitio. Este comportamiento es difícil de atribuir directamente, pero puedes medirlo 
              con <strong>aumento en branded searches</strong>.
            </p>
          </div>
        </div>

        {/* Métrica 6 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              6
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Calidad de Contexto (Context Quality)
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> Si eres mencionado en contexto positivo, neutral o negativo, y con qué nivel de detalle.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Sistema de scoring:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Mención básica (1 punto):</strong> Solo nombre de marca</li>
              <li>• <strong>Mención con descripción (2 puntos):</strong> Marca + breve explicación</li>
              <li>• <strong>Recomendación explícita (3 puntos):</strong> "X es una excelente opción para..."</li>
              <li>• <strong>Análisis detallado (5 puntos):</strong> Párrafo completo sobre tu solución</li>
            </ul>
          </div>
        </div>

        {/* Métrica 7 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              7
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Cobertura de Keywords Conversacionales
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            <strong>Qué mide:</strong> En qué porcentaje de tus queries objetivo estás siendo citado.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Cómo implementarlo:</p>
            <ol className="space-y-2 text-gray-700">
              <li>1. Crea lista de 50-100 preguntas conversacionales que tu audiencia hace</li>
              <li>2. Testea mensualmente qué % de esas preguntas generan una mención de tu marca</li>
              <li>3. Objetivo: aumentar cobertura 5-10% mensualmente</li>
            </ol>
          </div>
        </div>

        {/* Framework de medición mensual */}
        <h2 id="framework" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Framework de medición mensual
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Template de reporte mensual (Google Sheets / Excel)
          </p>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <table className="w-full text-sm">
              <thead className="border-b-2" style={{ borderColor: 'var(--brand-navy)' }}>
                <tr>
                  <th className="text-left p-2">Métrica</th>
                  <th className="text-right p-2">Este mes</th>
                  <th className="text-right p-2">Mes anterior</th>
                  <th className="text-right p-2">Cambio</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-2">Citation Rate</td>
                  <td className="text-right p-2 font-bold">28%</td>
                  <td className="text-right p-2">22%</td>
                  <td className="text-right p-2 text-green-600">+6%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">AI SOV</td>
                  <td className="text-right p-2 font-bold">18%</td>
                  <td className="text-right p-2">15%</td>
                  <td className="text-right p-2 text-green-600">+3%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Tráfico desde IAs</td>
                  <td className="text-right p-2 font-bold">1,240 visitas</td>
                  <td className="text-right p-2">890</td>
                  <td className="text-right p-2 text-green-600">+39%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Branded Searches</td>
                  <td className="text-right p-2 font-bold">3,800</td>
                  <td className="text-right p-2">3,200</td>
                  <td className="text-right p-2 text-green-600">+19%</td>
                </tr>
                <tr>
                  <td className="p-2">Cobertura Keywords</td>
                  <td className="text-right p-2 font-bold">42%</td>
                  <td className="text-right p-2">35%</td>
                  <td className="text-right p-2 text-green-600">+7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            💡 Trackea estas métricas el mismo día cada mes (ej: día 1) para mantener consistencia en mediciones.
          </p>
        </div>

        {/* Herramientas de tracking */}
        <h2 id="herramientas" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Herramientas de tracking
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Herramientas emergentes para trackear GEO
          </p>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <ul className="space-y-4 text-gray-700">
              <li>• <strong>BrightEdge AI Impact:</strong> Herramienta que analiza menciones en IAs y su impacto en tráfico.</li>
              <li>• <strong>Semrush AI Visibility (beta):</strong> Herramienta que mide visibilidad en IAs y su impacto en búsquedas.</li>
              <li>• <strong>Google Analytics 4:</strong> Para trackear tráfico referral desde IAs.</li>
              <li>• <strong>Google Search Console:</strong> Para trackear branded searches.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            💡 Aunque hay herramientas emergentes, el tracking manual sigue siendo más preciso y flexible.
          </p>
        </div>

        {/* Dashboards y reportes */}
        <h2 id="dashboards" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Dashboards y reportes
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Ejemplo de dashboard mensual
          </p>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <table className="w-full text-sm">
              <thead className="border-b-2" style={{ borderColor: 'var(--brand-navy)' }}>
                <tr>
                  <th className="text-left p-2">Métrica</th>
                  <th className="text-right p-2">Este mes</th>
                  <th className="text-right p-2">Mes anterior</th>
                  <th className="text-right p-2">Cambio</th>
                </tr>
              </thead>
              <tbody className="text-gray-700">
                <tr className="border-b">
                  <td className="p-2">Citation Rate</td>
                  <td className="text-right p-2 font-bold">28%</td>
                  <td className="text-right p-2">22%</td>
                  <td className="text-right p-2 text-green-600">+6%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">AI SOV</td>
                  <td className="text-right p-2 font-bold">18%</td>
                  <td className="text-right p-2">15%</td>
                  <td className="text-right p-2 text-green-600">+3%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Tráfico desde IAs</td>
                  <td className="text-right p-2 font-bold">1,240 visitas</td>
                  <td className="text-right p-2">890</td>
                  <td className="text-right p-2 text-green-600">+39%</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Branded Searches</td>
                  <td className="text-right p-2 font-bold">3,800</td>
                  <td className="text-right p-2">3,200</td>
                  <td className="text-right p-2 text-green-600">+19%</td>
                </tr>
                <tr>
                  <td className="p-2">Cobertura Keywords</td>
                  <td className="text-right p-2 font-bold">42%</td>
                  <td className="text-right p-2">35%</td>
                  <td className="text-right p-2 text-green-600">+7%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-gray-600">
            💡 Trackea estas métricas el mismo día cada mes (ej: día 1) para mantener consistencia en mediciones.
          </p>
        </div>

        {/* Errores comunes al medir GEO */}
        <h2 id="errores" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Errores comunes al medir GEO
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Errores comunes al medir GEO
          </p>
          
          <div className="bg-white p-6 rounded-lg mb-6">
            <ul className="space-y-4 text-gray-700">
              <li>• <strong>Medir solo rankings de Google:</strong> Los rankings en motores de búsqueda generativos son diferentes y más importantes.</li>
              <li>• <strong>No trackear tráfico referral:</strong> El tráfico proveniente de IAs es crucial para medir el impacto de GEO.</li>
              <li>• <strong>No medir branded searches:</strong> Las búsquedas de marca después de menciones en IAs son indicativas de éxito.</li>
              <li>• <strong>No implementar un sistema de scoring:</strong> Un sistema de scoring para la calidad de contexto ayuda a entender mejor el impacto de las menciones.</li>
            </ul>
          </div>

          <p className="text-sm text-gray-600">
            💡 Evita estos errores para obtener una medición precisa y efectiva de tu estrategia GEO.
          </p>
        </div>

        {/* FAQ */}
        <h2 id="faq" className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Con qué frecuencia debo medir estas métricas?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              <strong>Mensualmente</strong> es ideal. GEO es estrategia de medio-largo plazo, mediciones semanales 
              generan ruido sin insights accionables.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Existen herramientas automatizadas para trackear GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              En 2026, hay herramientas emergentes como BrightEdge AI Impact y Semrush AI Visibility (beta), 
              pero el tracking manual sigue siendo más preciso. La industria está construyendo soluciones 
              automatizadas que llegarán en 2026-2027.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: Métricas nuevas para una era nueva
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          GEO requiere un nuevo framework de medición. <strong>Las empresas que empiecen a trackear estas métricas ahora 
          tendrán datos históricos valiosos</strong> mientras su competencia sigue midiendo solo rankings de Google.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-xl text-white text-center">
          <p className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda configurando tu dashboard GEO?
          </p>
          <p className="text-lg mb-6">
            Te ayudamos a establecer KPIs y tracking mensual
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