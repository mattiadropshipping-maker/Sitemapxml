import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, TrendingUp, Sparkles, Target, BookOpen } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloQueEsGEO() {
  return (
    <BlogArticleLayout
      title="Qué es GEO (Generative Engine Optimization) y por qué será el nuevo SEO"
      category="GEO"
      author="Equipo GEO Marketing IA"
      date="9 de Marzo, 2026"
      readTime="12 min"
      image="https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
    >
      {/* Meta Description */}
      <div className="hidden">
        Descubre qué es GEO (Generative Engine Optimization), cómo funciona y por qué reemplazará al SEO tradicional en la era de ChatGPT, Perplexity y Gemini.
      </div>

      {/* Introducción */}
      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Durante más de 25 años, el SEO (Search Engine Optimization) ha sido la piedra angular del marketing digital. 
          Pero algo fundamental está cambiando: <strong>las personas ya no están usando Google de la misma manera</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          En lugar de hacer clic en 10 enlaces azules, millones de usuarios ahora hacen preguntas a ChatGPT, Perplexity, 
          Gemini o Claude y reciben respuestas directas, conversacionales y contextuales. Este cambio no es temporal: 
          <strong> es el inicio de una nueva era en la búsqueda de información</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Bienvenido a la era del <strong>GEO (Generative Engine Optimization)</strong>: la disciplina que determina 
          si tu marca será citada, recomendada e ignorada por los motores de inteligencia artificial.
        </p>

        {/* Sección 1: ¿Qué es GEO? */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          ¿Qué es GEO (Generative Engine Optimization)?
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          <strong>GEO (Generative Engine Optimization)</strong> es el conjunto de estrategias y técnicas diseñadas 
          para optimizar tu contenido, marca y presencia digital para que sea citada, recomendada y priorizada por 
          motores de inteligencia artificial generativa como:
        </p>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>ChatGPT</strong> (OpenAI)</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>Perplexity AI</strong></span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>Google Gemini</strong></span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>Microsoft Copilot</strong></span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>Claude</strong> (Anthropic)</span>
            </li>
            <li className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>SearchGPT</strong> (próximamente integrado en navegadores)</span>
            </li>
          </ul>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          A diferencia del SEO tradicional, que optimiza para aparecer en los primeros resultados de búsqueda orgánica, 
          <strong> el GEO optimiza para ser la fuente que la IA cita en sus respuestas</strong>. Ya no se trata solo 
          de rankear en la posición #1 de Google, sino de ser la respuesta que ChatGPT genera cuando alguien pregunta 
          sobre tu industria.
        </p>

        {/* Sección 2: La diferencia fundamental */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          La diferencia fundamental entre SEO y GEO
        </h2>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white shadow-lg rounded-lg overflow-hidden">
            <thead style={{ backgroundColor: 'var(--brand-navy)' }}>
              <tr>
                <th className="p-4 text-left text-white font-bold">Aspecto</th>
                <th className="p-4 text-left text-white font-bold">SEO Tradicional</th>
                <th className="p-4 text-left text-white font-bold">GEO (Nueva Era)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Objetivo</td>
                <td className="p-4">Aparecer en resultados de búsqueda</td>
                <td className="p-4 font-semibold" style={{ color: 'var(--brand-cyan)' }}>Ser citado en respuestas generativas</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Métrica clave</td>
                <td className="p-4">Posición en SERP (1-10)</td>
                <td className="p-4 font-semibold" style={{ color: 'var(--brand-cyan)' }}>Frecuencia de citación por IAs</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Formato de contenido</td>
                <td className="p-4">Orientado a palabras clave</td>
                <td className="p-4 font-semibold" style={{ color: 'var(--brand-cyan)' }}>Orientado a contexto y autoridad</td>
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                <td className="p-4 font-semibold">Experiencia del usuario</td>
                <td className="p-4">Usuario hace clic en tu enlace</td>
                <td className="p-4 font-semibold" style={{ color: 'var(--brand-cyan)' }}>IA menciona tu marca directamente</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 font-semibold">Señales de ranking</td>
                <td className="p-4">Backlinks, keywords, velocidad</td>
                <td className="p-4 font-semibold" style={{ color: 'var(--brand-cyan)' }}>Autoridad temática, estructura semántica</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Sección 3: Por qué GEO es el futuro */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Por qué GEO será el nuevo estándar del marketing digital
        </h2>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          1. Cambio masivo en el comportamiento de búsqueda
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los datos son contundentes:
        </p>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-100">
          <ul className="space-y-4 text-lg">
            <li className="flex items-start space-x-3">
              <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>58% de los profesionales</strong> usan IA para investigación de productos o servicios (Gartner, 2025)</span>
            </li>
            <li className="flex items-start space-x-3">
              <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>ChatGPT recibe más de 100 millones de consultas diarias</strong></span>
            </li>
            <li className="flex items-start space-x-3">
              <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>El 67% de la Gen Z</strong> prefiere preguntar a IAs en lugar de buscar en Google</span>
            </li>
            <li className="flex items-start space-x-3">
              <TrendingUp size={24} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span><strong>Perplexity AI ha crecido 400% en 12 meses</strong></span>
            </li>
          </ul>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          2. Zero-click searches: el nuevo paradigma
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Los motores de IA generan respuestas completas sin necesidad de que el usuario haga clic en enlaces externos. 
          Esto significa que <strong>si tu marca no es mencionada en la respuesta generativa, simplemente no existes</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Imagina que alguien pregunta: <em>"¿Cuál es el mejor CRM para startups B2B?"</em>. Si ChatGPT menciona a 
          HubSpot, Salesforce y Pipedrive pero no a tu producto, has perdido esa oportunidad de conversión antes 
          de que existiera.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          3. Integración con plataformas empresariales
        </h3>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Microsoft Copilot está integrado en Office 365. Google Gemini en Workspace. Los motores de IA están 
          <strong> donde las decisiones empresariales se toman</strong>. Un ejecutivo puede preguntar: <em>"Dame 
          un benchmark de proveedores de ciberseguridad"</em> directamente en su email, y la IA le responderá 
          sin salir de la aplicación.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          ¿Tu marca estará en esa respuesta?
        </p>

        {/* Sección 4: Cómo funciona GEO */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo funciona GEO: Los pilares de la optimización generativa
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Sparkles size={32} className="mb-4" style={{ color: 'var(--brand-cyan)' }} />
            <h4 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              1. Autoridad Temática
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Los modelos de IA priorizan fuentes que demuestran expertise profundo y consistente en un tema específico. 
              No basta con un artículo: necesitas un ecosistema de contenido autoridad.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <BookOpen size={32} className="mb-4" style={{ color: 'var(--brand-cyan)' }} />
            <h4 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              2. Estructura Semántica
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Las IAs entienden contexto, relaciones entre conceptos y jerarquías de información. Schema.org, 
              entities y knowledge graphs son fundamentales.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <Target size={32} className="mb-4" style={{ color: 'var(--brand-cyan)' }} />
            <h4 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              3. Citabilidad
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Tu contenido debe estar estructurado de manera que sea fácil para una IA extraer, citar y atribuir. 
              Formato, claridad y datos verificables son clave.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
            <CheckCircle size={32} className="mb-4" style={{ color: 'var(--brand-cyan)' }} />
            <h4 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              4. Reputación Digital
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Las IAs evalúan menciones en medios, validación de terceros, premios, certificaciones y social proof. 
              Tu reputación digital es tu credibilidad para la IA.
            </p>
          </div>
        </div>

        {/* Sección 5: Estrategias GEO accionables */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Estrategias GEO accionables para tu empresa
        </h2>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ color: 'var(--brand-navy)' }}>
          Para empezar hoy mismo:
        </h3>

        <div className="space-y-4 mb-8">
          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              1
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Realiza una auditoría de visibilidad en IA
              </p>
              <p className="text-gray-700">
                Pregunta a ChatGPT, Perplexity y Gemini sobre temas relacionados con tu industria. 
                ¿Te mencionan? ¿Mencionan a tu competencia?
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              2
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Crea contenido estructurado y profundo
              </p>
              <p className="text-gray-700">
                Artículos de 2000+ palabras con listas, comparativas, datos verificables y esquemas claros. 
                Las IAs aman el contenido denso y bien organizado.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              3
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Implementa schema markup avanzado
              </p>
              <p className="text-gray-700">
                Usa Organization, FAQPage, HowTo, Product y Article schemas para que las IAs entiendan 
                tu contenido a nivel estructural.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              4
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Genera menciones en fuentes autorizadas
              </p>
              <p className="text-gray-700">
                Busca aparecer en medios de autoridad, directorios especializados, Wikipedia (si aplica) 
                y plataformas B2B reconocidas.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 p-4 bg-blue-50 rounded-lg">
            <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              5
            </div>
            <div>
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                Optimiza para consultas conversacionales
              </p>
              <p className="text-gray-700">
                Las personas preguntan a IAs como hablarían con un experto. Optimiza para preguntas 
                naturales: "¿Cómo puedo...?", "¿Cuál es la mejor forma de...?", "¿Qué necesito para...?"
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes sobre GEO
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿GEO reemplazará completamente al SEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No inmediatamente, pero sí gradualmente. El SEO tradicional seguirá siendo relevante, pero el GEO 
              se convertirá en la prioridad para marcas que quieren capturar audiencias que usan IA. Piensa en 
              GEO como SEO 2.0: no lo reemplaza, lo evoluciona.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cuánto tiempo toma ver resultados con GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Entre 2-4 meses para empezar a aparecer en citaciones de IA, y 6-12 meses para convertirte en 
              una referencia consistente. GEO es una estrategia de medio-largo plazo que construye autoridad sostenible.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Necesito contratar una agencia especializada en GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Depende de tu capacidad interna. GEO requiere expertise en SEO técnico, content marketing, 
              data structuring y comprensión de cómo funcionan los modelos de lenguaje. Si no tienes ese 
              expertise in-house, una agencia especializada puede acelerar significativamente tus resultados.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Funciona GEO para empresas B2B pequeñas?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Absolutamente. De hecho, las empresas B2B pequeñas tienen una ventaja: pueden especializarse 
              profundamente en nichos específicos y convertirse en la autoridad que las IAs citan para esos 
              temas. GEO recompensa la profundidad sobre la amplitud.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Qué métricas debo monitorear en GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Las métricas clave son: frecuencia de citación en respuestas de IA (manual o via herramientas 
              especializadas), brand mentions en contextos generativos, tráfico referido desde plataformas de IA, 
              y posicionamiento en comparativas generadas por IA.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: El futuro del marketing digital ya está aquí
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          GEO no es una tendencia pasajera ni un buzzword vacío. Es la evolución natural del marketing digital 
          en un mundo donde <strong>la inteligencia artificial media cada vez más las decisiones de compra</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Las empresas que adopten GEO ahora tendrán una ventaja competitiva masiva sobre aquellas que esperen. 
          Cada día que pasa sin optimizar para motores de IA es un día donde tu competencia puede estar construyendo 
          la autoridad que te dejará fuera de las recomendaciones generativas.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          La pregunta no es si debes implementar GEO, sino <strong>cuánto tiempo puedes permitirte esperar</strong>.
        </p>

        {/* CTA Final */}
        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-10 rounded-2xl text-white text-center mt-12">
          <h3 className="text-3xl font-bold mb-4">¿Tu marca aparece cuando las IAs hablan de tu industria?</h3>
          <p className="text-xl mb-8 text-white/90">
            Solicita una auditoría gratuita de visibilidad en IA y descubre cómo posicionarte 
            en ChatGPT, Perplexity y Gemini.
          </p>
          <Link to="/contacto">
            <button className="px-10 py-4 bg-white rounded-lg font-bold text-lg hover:bg-gray-100 transition-all shadow-xl transform hover:scale-105" style={{ color: 'var(--brand-navy)' }}>
              Solicitar Auditoría GEO Gratuita
            </button>
          </Link>
        </div>
      </div>
    </BlogArticleLayout>
  );
}
