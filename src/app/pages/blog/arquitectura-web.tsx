import { BlogArticleLayout } from '../../components/blog-article-layout';
import { CheckCircle, Code, Database, Zap, Layout, FileCode } from 'lucide-react';
import { Link } from 'react-router';

export function ArticuloArquitecturaWeb() {
  return (
    <BlogArticleLayout
      title="Arquitectura web para motores generativos"
      category="SEO"
      author="Equipo GEO Marketing IA"
      date="5 de Enero, 2026"
      readTime="11 min"
      image="https://images.unsplash.com/photo-1726607424583-d1a2d1ff71df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI3MzY2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <div className="hidden">
        Diseña tu sitio web pensando en cómo los motores de IA comprenden y procesan la información.
      </div>

      <div className="prose max-w-none">
        <p className="text-xl leading-relaxed text-gray-700 mb-6">
          Los motores de IA "leen" tu sitio web de forma radicalmente diferente a como lo hace Google tradicional. 
          <strong> Una arquitectura web optimizada para GEO puede triplicar tus probabilidades de ser citado</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Esta guía técnica te muestra cómo diseñar y estructurar tu sitio web para maximizar visibilidad en 
          ChatGPT, Perplexity, Gemini y futuros motores generativos.
        </p>

        {/* Sección 1: Diferencias fundamentales */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Cómo procesan información los motores generativos
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl mb-8 border border-blue-200">
          <h3 className="text-2xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            Google tradicional vs Motores de IA
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Google tradicional busca:</p>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• Keywords en lugares estratégicos (title, H1, URLs)</li>
                <li>• Backlinks y señales de autoridad</li>
                <li>• Core Web Vitals y UX metrics</li>
                <li>• Estructura de links internos</li>
                <li>• Freshness y actualización de contenido</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg border-2" style={{ borderColor: 'var(--brand-cyan)' }}>
              <p className="font-bold mb-3" style={{ color: 'var(--brand-cyan)' }}>Motores de IA buscan:</p>
              <ul className="space-y-2 text-sm text-gray-700 font-semibold">
                <li>• Estructura semántica clara (schema markup)</li>
                <li>• Jerarquía lógica de información</li>
                <li>• Datos estructurados extraíbles</li>
                <li>• Respuestas directas a preguntas específicas</li>
                <li>• Autoridad de fuente (domain + menciones externas)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sección 2: Los 7 pilares */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Los 7 pilares de arquitectura web GEO-optimizada
        </h2>

        {/* Pilar 1 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              1
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Estructura de información jerárquica
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Las IAs priorizan sitios con <strong>jerarquía clara y predecible</strong>. Tu estructura debe ser 
            lógica para un modelo de lenguaje, no solo para humanos.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Estructura ideal:</p>
            <div className="bg-white p-4 rounded font-mono text-xs overflow-x-auto">
              {`Homepage (nivel 1)
├── Servicios (nivel 2)
│   ├── GEO Marketing (nivel 3)
│   │   ├── Qué es GEO (nivel 4)
│   │   ├── Cómo funciona (nivel 4)
│   │   └── Casos de uso (nivel 4)
│   ├── PPC en IA (nivel 3)
│   └── SEO Avanzado (nivel 3)
├── Recursos (nivel 2)
│   ├── Blog (nivel 3)
│   └── Guías (nivel 3)
└── Empresa (nivel 2)`}
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <p className="font-bold mb-2">🎯 Regla de oro:</p>
            <p className="text-gray-800 text-sm">
              Cualquier página debe ser accesible en <strong>máximo 3 clics desde homepage</strong>. IAs 
              raramente exploran más allá de 3 niveles de profundidad.
            </p>
          </div>
        </div>

        {/* Pilar 2 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              2
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Schema Markup comprehensivo
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Schema markup es el <strong>"idioma nativo" de las IAs</strong>. Es como darles un mapa estructurado 
            de tu contenido en lugar de pedirles que lo interpreten.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Schema types esenciales para B2B:</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Organization Schema:</p>
                <p className="text-xs text-gray-700 mb-2">Define quién eres como empresa</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs overflow-x-auto">
                  {`{
  "@type": "Organization",
  "name": "GEO Marketing IA",
  "description": "Agencia especializada en GEO...",
  "url": "https://geomarketingia.com",
  "logo": "https://geomarketingia.com/logo.png",
  "sameAs": ["linkedin.com/...", "twitter.com/..."]
}`}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Service Schema:</p>
                <p className="text-xs text-gray-700 mb-2">Define tus servicios/productos</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs overflow-x-auto">
                  {`{
  "@type": "Service",
  "name": "Consultoría GEO",
  "description": "Optimización para motores generativos",
  "provider": {"@type": "Organization", "name": "..."},
  "areaServed": "España"
}`}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Article Schema (para blog posts):</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs overflow-x-auto">
                  {`{
  "@type": "Article",
  "headline": "Qué es GEO...",
  "author": {"@type": "Person", "name": "..."},
  "datePublished": "2026-03-10",
  "image": "...",
  "articleBody": "..."
}`}
                </div>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">FAQPage Schema:</p>
                <p className="text-xs text-gray-700 mb-2">Crítico para citabilidad en IAs</p>
                <div className="bg-gray-50 p-3 rounded font-mono text-xs overflow-x-auto">
                  {`{
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "¿Qué es GEO?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "GEO es..."
    }
  }]
}`}
                </div>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <p className="font-bold mb-2 text-green-900">✅ Herramientas recomendadas:</p>
            <ul className="text-green-800 text-sm space-y-1">
              <li>• Google's Structured Data Testing Tool (verificar implementation)</li>
              <li>• Schema.org documentation (referencia completa)</li>
              <li>• JSON-LD Generator (crear schema rápidamente)</li>
            </ul>
          </div>
        </div>

        {/* Pilar 3 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              3
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              HTML semántico y accesibilidad
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Las IAs "leen" tu HTML como un lector de pantalla. <strong>HTML semántico correcto facilita 
            enormemente la extracción de información</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Mejores prácticas:</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <div>
                  <p className="font-semibold text-sm">Usa tags semánticos apropiados</p>
                  <p className="text-xs text-gray-600">
                    <code>&lt;article&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;nav&gt;</code>, 
                    <code>&lt;aside&gt;</code> en lugar de solo <code>&lt;div&gt;</code>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <div>
                  <p className="font-semibold text-sm">Jerarquía de headings estricta</p>
                  <p className="text-xs text-gray-600">
                    Un solo H1 por página, H2 para secciones principales, H3 para subsecciones. Nunca saltar niveles.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <div>
                  <p className="font-semibold text-sm">Alt text descriptivo en imágenes</p>
                  <p className="text-xs text-gray-600">
                    IAs usan alt text para entender contexto visual. Sé descriptivo pero conciso.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <div>
                  <p className="font-semibold text-sm">Landmarks ARIA cuando sea necesario</p>
                  <p className="text-xs text-gray-600">
                    <code>role="main"</code>, <code>role="navigation"</code>, etc. ayudan a IAs identificar secciones clave
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 4 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              4
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Internal linking estratégico
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Links internos ayudan a IAs entender <strong>relaciones entre conceptos y jerarquía de importancia</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Estrategia de linking para GEO:</p>
            <div className="space-y-3">
              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Hub & Spoke (Topic Clusters)</p>
                <p className="text-xs text-gray-700 mb-2">
                  Página pilar sobre "GEO Marketing" → links bidireccionales a artículos específicos 
                  ("Qué es GEO", "GEO vs SEO", "Auditoría GEO")
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Anchor text descriptivo</p>
                <p className="text-xs text-gray-700">
                  Usa anchor text que describa el contenido destino: "nuestra guía completa de GEO" en lugar 
                  de "haz clic aquí"
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <p className="font-bold text-sm mb-2">Contextual relevance</p>
                <p className="text-xs text-gray-700">
                  Links internos deben estar contextualmente relacionados. No linkees aleatoriamente desde 
                  sidebar, integra links naturalmente en contenido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Pilar 5 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              5
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Velocidad y rendering
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Aunque IAs no "ven" tu sitio como usuarios, <strong>sí necesitan poder crawlear y parsear tu contenido 
            eficientemente</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Optimizaciones críticas:</p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><strong>Server-Side Rendering (SSR) o Static Generation:</strong> Asegura que contenido esté 
                disponible sin ejecutar JavaScript</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><strong>Time to First Byte (TTFB) &lt; 600ms:</strong> Respuesta rápida del servidor</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><strong>Lazy loading inteligente:</strong> Contenido crítico debe cargar inmediatamente</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle size={18} className="flex-shrink-0 mt-1" style={{ color: 'var(--brand-cyan)' }} />
                <span><strong>CDN para assets estáticos:</strong> Distribuye contenido globalmente</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Pilar 6 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-6 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              6
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Robots.txt y sitemap optimizados para IAs
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            Guía a crawlers de IA hacia tu contenido más valioso y <strong>bloquea contenido duplicado o de bajo valor</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg mb-4">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Robots.txt optimizado:</p>
            <div className="bg-white p-4 rounded font-mono text-xs overflow-x-auto">
              {`# Bots de IA conocidos
User-agent: GPTBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: CCBot
User-agent: anthropic-ai
User-agent: Claude-Web

# Permite acceso a contenido valioso
Allow: /servicios/
Allow: /blog/
Allow: /recursos/

# Bloquea contenido duplicado o low-value
Disallow: /admin/
Disallow: /search/
Disallow: /*?
Disallow: /tag/

Sitemap: https://geomarketingia.com/sitemap.xml`}
            </div>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="font-bold mb-2 text-yellow-900">⚠️ Decisión importante:</p>
            <p className="text-yellow-800 text-sm">
              Algunos sites bloquean completamente bots de IA (GPTBot, CCBot) para evitar que su contenido 
              entrene modelos. <strong>Para GEO, esto es contraproducente</strong>. Permite acceso a bots 
              de IA si quieres visibilidad en motores generativos.
            </p>
          </div>
        </div>

        {/* Pilar 7 */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-8 border-l-4" style={{ borderColor: 'var(--brand-cyan)' }}>
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              7
            </div>
            <h3 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Mobile-first y multi-device
            </h3>
          </div>

          <p className="text-lg text-gray-700 mb-4">
            IAs indexan versión mobile de tu sitio primero. <strong>Tu arquitectura debe ser impecable en todos 
            los dispositivos</strong>.
          </p>

          <div className="bg-gray-50 p-5 rounded-lg">
            <p className="font-bold mb-3" style={{ color: 'var(--brand-navy)' }}>Checklist mobile-first:</p>
            <div className="space-y-2">
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Responsive design (no separate mobile site)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Touch-friendly navigation (44x44px minimum tap targets)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Readable text sin zoom (16px font size minimum)</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">No pop-ups intrusivos en mobile</span>
              </label>
              <label className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1" />
                <span className="text-gray-700">Mobile Core Web Vitals optimizados</span>
              </label>
            </div>
          </div>
        </div>

        {/* Checklist de implementación */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Checklist de implementación paso a paso
        </h2>

        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-8 rounded-xl border border-blue-200 mb-8">
          <p className="font-bold text-xl mb-6" style={{ color: 'var(--brand-navy)' }}>
            Plan de 90 días para refactorizar arquitectura
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                Fase 1: Auditoría (Días 1-15)
              </p>
              <div className="space-y-2">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Crawl completo con Screaming Frog o Sitebulb</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Analiza estructura actual de URLs y profundidad de páginas</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Verifica schema markup con Google Rich Results Test</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Testea HTML semántico con WAVE o aXe DevTools</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                Fase 2: Quick Wins (Días 16-45)
              </p>
              <div className="space-y-2">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Implementa Organization, Service y Product schema</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Añade FAQPage schema a páginas principales</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Optimiza robots.txt para permitir bots de IA</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Actualiza sitemap.xml con prioridades correctas</span>
                </label>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <p className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                Fase 3: Refactoring Profundo (Días 46-90)
              </p>
              <div className="space-y-2">
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Rediseña información architecture (si es necesario)</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Implementa topic clusters para contenido principal</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Refactoriza HTML a tags semánticos apropiados</span>
                </label>
                <label className="flex items-start space-x-3">
                  <input type="checkbox" className="mt-1" />
                  <span className="text-gray-700">Optimiza Core Web Vitals (LCP, FID, CLS)</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Herramientas */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Herramientas esenciales para auditoría técnica
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Code size={24} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="font-bold text-lg" style={{ color: 'var(--brand-navy)' }}>
                Crawling y análisis
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>Screaming Frog:</strong> Crawl completo de arquitectura</li>
              <li>• <strong>Sitebulb:</strong> Auditoría visual de site structure</li>
              <li>• <strong>Google Search Console:</strong> Errores de indexación</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <FileCode size={24} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="font-bold text-lg" style={{ color: 'var(--brand-navy)' }}>
                Schema y structured data
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>Google Rich Results Test:</strong> Validar schema</li>
              <li>• <strong>Schema.org validator:</strong> Verificar sintaxis</li>
              <li>• <strong>JSON-LD Generator:</strong> Crear schema markup</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Layout size={24} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="font-bold text-lg" style={{ color: 'var(--brand-navy)' }}>
                Accesibilidad y semántica
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>WAVE:</strong> Evaluar accesibilidad web</li>
              <li>• <strong>aXe DevTools:</strong> Auditoría ARIA y HTML</li>
              <li>• <strong>Lighthouse:</strong> Performance y best practices</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center space-x-3 mb-4">
              <Zap size={24} style={{ color: 'var(--brand-cyan)' }} />
              <h3 className="font-bold text-lg" style={{ color: 'var(--brand-navy)' }}>
                Performance
              </h3>
            </div>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>• <strong>PageSpeed Insights:</strong> Core Web Vitals</li>
              <li>• <strong>WebPageTest:</strong> Análisis profundo de carga</li>
              <li>• <strong>GTmetrix:</strong> Performance monitoring</li>
            </ul>
          </div>
        </div>

        {/* FAQ */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Preguntas frecuentes
        </h2>

        <div className="space-y-6 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Necesito rediseñar completamente mi sitio para GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              No necesariamente. El 80% de optimizaciones GEO son <strong>mejoras incrementales</strong> (schema markup, 
              HTML semántico, internal linking) que puedes implementar sin rediseño. Solo considera refactoring completo 
              si tu arquitectura actual es fundamentalmente problemática (páginas a 5+ clics de profundidad, JavaScript 
              framework sin SSR, etc.).
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Single Page Applications (SPAs) funcionan para GEO?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              SPAs puras (React/Vue sin SSR) son <strong>problemáticas para GEO</strong>. IAs necesitan contenido 
              renderizado en HTML. Soluciones: (1) Next.js con SSR/SSG, (2) Nuxt.js para Vue, (3) Pre-rendering, 
              o (4) migrar a arquitectura tradicional multi-page.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="font-bold text-xl mb-3" style={{ color: 'var(--brand-navy)' }}>
              ¿Cuánto tiempo toma ver resultados después de optimizar arquitectura?
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Schema markup y mejoras técnicas pueden mostrar impacto en <strong>30-60 días</strong>. Cambios 
              estructurales profundos (refactoring de IA) tardan 90-120 días. Mide con auditorías mensuales de 
              visibilidad en ChatGPT/Perplexity.
            </p>
          </div>
        </div>

        {/* Conclusión */}
        <h2 className="text-3xl font-bold mt-12 mb-6" style={{ color: 'var(--brand-navy)' }}>
          Conclusión: Arquitectura es fundamento de GEO
        </h2>

        <p className="text-lg leading-relaxed text-gray-700 mb-6">
          Puedes crear el mejor contenido del mundo, pero si tu arquitectura web no permite que IAs lo procesen 
          eficientemente, <strong>nunca serás citado consistentemente</strong>.
        </p>

        <p className="text-lg leading-relaxed text-gray-700 mb-8">
          Invierte tiempo en fundamentos técnicos ahora. Es trabajo que solo haces una vez y que beneficia SEO 
          tradicional, GEO y experiencia de usuario simultáneamente.
        </p>

        <div className="bg-gradient-to-r from-blue-600 to-cyan-500 p-8 rounded-xl text-white text-center">
          <p className="text-2xl font-bold mb-4">
            ¿Necesitas ayuda auditando y optimizando tu arquitectura?
          </p>
          <p className="text-lg mb-6">
            Realizamos auditoría técnica completa y roadmap de implementación
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
