import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, AlertCircle } from 'lucide-react';

export function Articulo5Errores() {
  return (
    <BlogArticleLayout
      title="5 errores que impiden que la IA recomiende tu marca"
      category="GEO"
      readTime="5 min"
      date="5 Feb 2026"
      author="Carlos Méndez"
      authorRole="GEO Specialist"
      image="https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI4MTk5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <div>
        <p className="text-xl leading-relaxed mb-8" style={{ color: 'var(--brand-gray-dark)' }}>
          Los motores generativos como ChatGPT, Perplexity y Gemini están cambiando radicalmente cómo los usuarios
          descubren marcas y toman decisiones de compra. A diferencia de Google, donde aparecer en los primeros
          resultados es suficiente, los motores de IA deben <strong>elegir activamente recomendar tu marca</strong>{' '}
          entre miles de opciones.
        </p>

        <p className="leading-relaxed mb-8">
          Muchas empresas B2B cometen errores críticos que les hacen invisibles para estos sistemas. Aquí están los 5
          más comunes y, lo más importante, cómo corregirlos.
        </p>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Error #1: Contenido Genérico Sin Diferenciación
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1 text-red-500" />
            <div>
              <p className="font-semibold text-red-900 mb-2">El Problema:</p>
              <p className="text-red-800">
                Tu sitio web describe tus servicios con frases vagas como "soluciones innovadoras" o "líder del
                sector" sin especificar qué te hace único.
              </p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          Los motores de IA necesitan <strong>diferenciadores concretos</strong> para recomendarte. Si tu contenido
          podría aplicarse a cualquier competidor, la IA no tiene motivo para citarte específicamente.
        </p>

        <div className="bg-green-50 border-l-4 p-6 my-8" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--brand-navy)' }}>
            La Solución:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Especifica tu metodología única con nombre propio</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Detalla casos de uso específicos de tu industria</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Incluye datos cuantitativos de resultados reales</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Comunica claramente para quién NO eres (define tu nicho)</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Error #2: Falta de Prueba Social Verificable
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1 text-red-500" />
            <div>
              <p className="font-semibold text-red-900 mb-2">El Problema:</p>
              <p className="text-red-800">
                Tienes testimonios genéricos sin nombres reales, casos de éxito sin datos específicos, o peor aún, sin
                prueba social en absoluto.
              </p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          Los modelos de IA evalúan la <strong>credibilidad</strong> antes de recomendar. Testimonios anónimos o vagas
          afirmaciones de éxito no pasan esta evaluación.
        </p>

        <div className="bg-green-50 border-l-4 p-6 my-8" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--brand-navy)' }}>
            La Solución:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Publica estudios de caso detallados con métricas específicas</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Incluye testimonios con nombre completo, cargo y empresa</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Enlaza a menciones en publicaciones de la industria</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Muestra logos de clientes reales con permiso</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Error #3: Arquitectura de Información Confusa
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1 text-red-500" />
            <div>
              <p className="font-semibold text-red-900 mb-2">El Problema:</p>
              <p className="text-red-800">
                Tu sitio tiene múltiples páginas con información duplicada, jerarquías confusas, o no está claro qué
                haces realmente hasta que el usuario hace varios clics.
              </p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          Los motores de IA necesitan <strong>comprender rápidamente</strong> tu propuesta de valor y servicios. Una
          arquitectura confusa hace que abandonen tu sitio sin extraer información útil.
        </p>

        <div className="bg-green-50 border-l-4 p-6 my-8" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--brand-navy)' }}>
            La Solución:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Crea una página de servicios clara con un servicio = una página</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Usa breadcrumbs y navegación jerárquica lógica</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Implementa un sitemap XML completo y actualizado</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Elimina contenido duplicado consolidando páginas similares</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Error #4: Ausencia de Datos Estructurados
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1 text-red-500" />
            <div>
              <p className="font-semibold text-red-900 mb-2">El Problema:</p>
              <p className="text-red-800">
                Tu sitio no utiliza Schema markup, o solo lo usa mínimamente en páginas de productos.
              </p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          Sin datos estructurados, los motores de IA tienen que <strong>"adivinar"</strong> qué significa tu contenido.
          Esto reduce dramáticamente tus probabilidades de ser citado correctamente, o citado en absoluto.
        </p>

        <div className="bg-green-50 border-l-4 p-6 my-8" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--brand-navy)' }}>
            La Solución:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Implementa Organization schema en tu homepage</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Usa Article schema en posts de blog</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Agrega FAQPage schema a páginas de servicio</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Implementa HowTo schema para guías y tutoriales</span>
            </div>
          </div>
        </div>

        <div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-lg my-8"
          style={{ borderLeft: '4px solid var(--brand-cyan)' }}
        >
          <p className="font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>
            Herramienta Recomendada:
          </p>
          <p className="leading-relaxed">
            Usa el{' '}
            <a
              href="https://validator.schema.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold hover:underline"
              style={{ color: 'var(--brand-cyan)' }}
            >
              Schema Markup Validator
            </a>{' '}
            de Google para verificar tu implementación y detectar errores.
          </p>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Error #5: Contenido Desactualizado o Superficial
        </h2>

        <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
          <div className="flex items-start space-x-3">
            <AlertCircle size={24} className="flex-shrink-0 mt-1 text-red-500" />
            <div>
              <p className="font-semibold text-red-900 mb-2">El Problema:</p>
              <p className="text-red-800">
                Tu blog tiene artículos de hace 3 años sin actualizar, o peor, artículos de 400 palabras que apenas
                rozan la superficie de temas complejos.
              </p>
            </div>
          </div>
        </div>

        <p className="leading-relaxed mb-6">
          Los modelos de IA priorizan <strong>contenido fresco y profundo</strong>. Si tu contenido más reciente es de
          2022, asumen que no eres una fuente actualizada. Si tus artículos son superficiales, asumen que no tienes
          expertise real.
        </p>

        <div className="bg-green-50 border-l-4 p-6 my-8" style={{ borderColor: 'var(--brand-cyan)' }}>
          <p className="font-semibold mb-3" style={{ color: 'var(--brand-navy)' }}>
            La Solución:
          </p>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Actualiza artículos antiguos cada 6-12 meses con información nueva</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Apunta a artículos de 2,000-3,000 palabras que cubran temas en profundidad</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Incluye fechas de publicación Y última actualización visibles</span>
            </div>
            <div className="flex items-start space-x-3">
              <CheckCircle size={20} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
              <span>Publica contenido nuevo al menos 2 veces al mes</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Test de Auto-Evaluación
        </h2>

        <p className="leading-relaxed mb-6">
          Evalúa tu sitio con estas preguntas. Si respondes "NO" a más de 2, tienes trabajo por delante:
        </p>

        <div className="bg-gray-50 p-8 rounded-lg my-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>
                1.
              </span>
              <span>¿Tu homepage explica claramente qué te diferencia de competidores en los primeros 100 palabras?</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>
                2.
              </span>
              <span>
                ¿Tienes al menos 3 casos de éxito detallados con métricas específicas y clientes identificados?
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>
                3.
              </span>
              <span>¿Tu sitio usa Schema markup en al menos el 70% de las páginas clave?</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>
                4.
              </span>
              <span>¿Puedes navegar de homepage a cualquier servicio en máximo 2 clics?</span>
            </div>
            <div className="flex items-start space-x-3">
              <span className="font-bold" style={{ color: 'var(--brand-cyan)' }}>
                5.
              </span>
              <span>¿Has publicado o actualizado contenido en los últimos 30 días?</span>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-6 mt-12" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: Pequeños Cambios, Gran Impacto
        </h2>

        <p className="leading-relaxed mb-6">
          La buena noticia es que estos errores son <strong>corregibles</strong>. No necesitas reconstruir tu sitio
          desde cero. Con cambios estratégicos enfocados, puedes pasar de invisible a citado regularmente por motores
          de IA en 2-3 meses.
        </p>

        <p className="leading-relaxed mb-8">
          La clave es priorizar: empieza por el error que más afecta tu caso específico. Si no estás seguro cuál es,
          solicita una auditoría profesional que identifique tus mayores oportunidades de mejora.
        </p>

        <div
          className="bg-gradient-to-r from-blue-50 to-cyan-50 border-2 p-8 rounded-lg my-12"
          style={{ borderColor: 'var(--brand-cyan)' }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
            ¿Necesitas Ayuda para Corregir Estos Errores?
          </h3>
          <p className="leading-relaxed mb-6">
            Nuestro equipo de especialistas en GEO puede auditar tu sitio, identificar exactamente qué errores estás
            cometiendo, y proporcionarte un plan de acción priorizado para corregirlos.
          </p>
          <p className="leading-relaxed font-semibold">
            Solicita tu <span style={{ color: 'var(--brand-cyan)' }}>Auditoría Estratégica Gratuita</span> y descubre
            cómo hacerte visible para la IA.
          </p>
        </div>

        <p className="leading-relaxed text-lg mt-12">
          Recuerda: los motores generativos ya están influyendo en decisiones de compra B2B. Cuanto antes corrijas
          estos errores, más ventaja competitiva ganarás sobre competidores que aún no han despertado a esta nueva
          realidad.
        </p>
      </div>
    </BlogArticleLayout>
  );
}
