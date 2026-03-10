import { Clock, ArrowRight, Search, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { Link } from 'react-router';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['Todos', 'GEO', 'PPC', 'SEO', 'IA', 'Tendencias'];

  const articles = [
    {
      title: 'SEO vs GEO: cómo cambiará el posicionamiento en la era de la IA',
      excerpt:
        'Comparativa completa entre SEO tradicional y GEO. Descubre cómo adaptarte al cambio de Google a ChatGPT, Perplexity y Gemini.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '16 min',
      category: 'GEO',
      date: '9 Mar 2026',
      slug: 'seo-vs-geo',
    },
    {
      title: 'Qué tipo de contenido citan más los modelos de IA',
      excerpt:
        'Descubre qué formatos y tipos de contenido citan más ChatGPT, Perplexity y Gemini. Guía completa con ejemplos y plantillas.',
      image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '13 min',
      category: 'GEO',
      date: '9 Mar 2026',
      slug: 'contenido-citable',
    },
    {
      title: 'Cómo hacer una auditoría de visibilidad en IA para tu empresa',
      excerpt:
        'Guía paso a paso para auditar la visibilidad de tu marca en ChatGPT, Perplexity y Gemini. Incluye checklist y herramientas.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '15 min',
      category: 'GEO',
      date: '9 Mar 2026',
      slug: 'auditoria-ia',
    },
    {
      title: 'Cómo hacer que tu marca aparezca en respuestas de inteligencia artificial',
      excerpt:
        'Guía completa para hacer que ChatGPT, Perplexity y Gemini recomienden tu marca. Estrategias probadas de GEO para B2B.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '14 min',
      category: 'GEO',
      date: '9 Mar 2026',
      slug: 'marca-en-ia',
    },
    {
      title: 'Qué es GEO (Generative Engine Optimization) y por qué será el nuevo SEO',
      excerpt:
        'Descubre qué es GEO, cómo funciona y por qué reemplazará al SEO tradicional en la era de ChatGPT, Perplexity y Gemini.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '12 min',
      category: 'GEO',
      date: '9 Mar 2026',
      slug: 'que-es-geo',
    },
    {
      title: 'Cómo preparar tu sitio web para SearchGPT',
      excerpt:
        'Guía completa para optimizar tu presencia digital ante la llegada de SearchGPT y otros motores de búsqueda generativos.',
      image: 'https://images.unsplash.com/photo-1749006590639-e749e6b7d84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc3Mjc4MDU5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min',
      category: 'GEO',
      date: '15 Feb 2026',
      slug: 'searchgpt',
    },
    {
      title: 'El futuro del PPC: Anuncios en plataformas de IA',
      excerpt:
        'Exploramos las nuevas oportunidades publicitarias en motores generativos y cómo aprovecharlas antes que tu competencia.',
      image: 'https://images.unsplash.com/photo-1709281847981-73a69aa6f770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwc3RyYXRlZ3klMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyNzUyNTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min',
      category: 'PPC',
      date: '10 Feb 2026',
      slug: 'futuro-ppc',
    },
    {
      title: '5 errores que impiden que la IA recomiende tu marca',
      excerpt:
        'Evita estos fallos comunes que hacen que los motores generativos pasen por alto tu contenido y descubre cómo corregirlos.',
      image: 'https://images.unsplash.com/photo-1762341116897-921e2a52f7ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHdvbWFuJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI4MTk5ODF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '5 min',
      category: 'GEO',
      date: '5 Feb 2026',
      slug: '5-errores',
    },
    {
      title: 'Perplexity vs Google: ¿Cómo optimizar para ambos?',
      excerpt:
        'Análisis comparativo de estrategias de optimización para motores de búsqueda tradicionales y generativos.',
      image: 'https://images.unsplash.com/photo-1631006732121-a6da2f4864d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhbmFseXRpY3MlMjBkYXNoYm9hcmQlMjBzY3JlZW58ZW58MXx8fHwxNzcyNzA5MTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '10 min',
      category: 'SEO',
      date: '1 Feb 2026',
      slug: 'perplexity-vs-google',
    },
    {
      title: 'IA Generativa: Cambiando el juego del contenido SEO',
      excerpt:
        'Cómo usar herramientas de IA para crear contenido que resuene tanto con humanos como con motores generativos.',
      image: 'https://images.unsplash.com/photo-1758691736424-4b4273948341?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBjb2xsYWJvcmF0aW9uJTIwZGF0YSUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NzI4MzMwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '7 min',
      category: 'IA',
      date: '28 Ene 2026',
      slug: 'ia-generativa',
    },
    {
      title: 'Métricas clave para medir el éxito de tu estrategia GEO',
      excerpt:
        'KPIs esenciales que debes trackear para evaluar tu desempeño en motores de búsqueda generativos.',
      image: 'https://images.unsplash.com/photo-1769740333462-9a63bfa914bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBvZmZpY2UlMjBtZWV0aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzI4MDgzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '6 min',
      category: 'GEO',
      date: '20 Ene 2026',
      slug: 'metricas-geo',
    },
    {
      title: 'Tendencias de marketing digital para 2026',
      excerpt:
        'Las predicciones más importantes sobre el futuro del marketing digital y cómo prepararte para ellas.',
      image: 'https://images.unsplash.com/photo-1506399441630-774ef431470f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NzI3NzY3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '9 min',
      category: 'Tendencias',
      date: '15 Ene 2026',
      slug: 'tendencias-2026',
    },
    {
      title: 'ROI en campañas de IA: Cómo justificar la inversión',
      excerpt:
        'Estrategias para demostrar el retorno de inversión en campañas publicitarias con motores de IA.',
      image: 'https://images.unsplash.com/photo-1657812160299-6b656decd5b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFyY2glMjBlbmdpbmUlMjBvcHRpbWl6YXRpb24lMjBjb25jZXB0fGVufDF8fHx8MTc3MjgzMzY0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '8 min',
      category: 'PPC',
      date: '10 Ene 2026',
      slug: 'roi-campanas-ia',
    },
    {
      title: 'Arquitectura web para motores generativos',
      excerpt:
        'Diseña tu sitio web pensando en cómo los motores de IA comprenden y procesan la información.',
      image: 'https://images.unsplash.com/photo-1726607424583-d1a2d1ff71df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdHJhbnNmb3JtYXRpb24lMjBidXNpbmVzc3xlbnwxfHx8fDE3NzI3MzY2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      readTime: '11 min',
      category: 'SEO',
      date: '5 Ene 2026',
      slug: 'arquitectura-web',
    },
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesCategory = selectedCategory === 'Todos' || article.category === selectedCategory;
    const matchesSearch =
      searchQuery === '' ||
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredArticle = articles[0];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog & Recursos</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-10">
            Insights, guías y tendencias sobre GEO, IA y marketing digital
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Buscar artículos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                style={{ color: 'var(--brand-gray-dark)' }}
              />
              <Search
                size={24}
                className="absolute right-4 top-1/2 transform -translate-y-1/2"
                style={{ color: 'var(--brand-cyan)' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center space-x-3 mb-8">
            <TrendingUp size={24} style={{ color: 'var(--brand-cyan)' }} />
            <h2 className="text-2xl font-bold" style={{ color: 'var(--brand-navy)' }}>
              Artículo Destacado
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
            <div className="relative h-96 lg:h-full">
              <ImageWithFallback
                src={featuredArticle.image}
                alt={featuredArticle.title}
                className="w-full h-full object-cover"
              />
              <div
                className="absolute top-4 left-4 px-4 py-2 rounded-full font-semibold text-white"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                {featuredArticle.category}
              </div>
            </div>

            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-4 mb-4" style={{ color: 'var(--brand-gray-dark)' }}>
                <div className="flex items-center space-x-2">
                  <Clock size={16} />
                  <span className="text-sm">{featuredArticle.readTime}</span>
                </div>
                <span className="text-sm">{featuredArticle.date}</span>
              </div>
              <h3 className="font-bold text-3xl mb-4 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                {featuredArticle.title}
              </h3>
              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                {featuredArticle.excerpt}
              </p>
              <Link to={`/blog/${featuredArticle.slug}`}>
                <button
                  className="flex items-center space-x-3 px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: 'var(--brand-cyan)' }}
                >
                  <span>Leer Artículo Completo</span>
                  <ArrowRight size={18} />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-200 ${
                  selectedCategory === category
                    ? 'text-white shadow-lg'
                    : 'bg-white hover:shadow-md'
                }`}
                style={
                  selectedCategory === category
                    ? { backgroundColor: 'var(--brand-cyan)' }
                    : { color: 'var(--brand-gray-dark)' }
                }
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl" style={{ color: 'var(--brand-gray-dark)' }}>
                No se encontraron artículos que coincidan con tu búsqueda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.slice(1).map((article) => (
                <article
                  key={article.title}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div
                      className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold text-white"
                      style={{ backgroundColor: 'var(--brand-cyan)' }}
                    >
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4" style={{ color: 'var(--brand-gray-dark)' }}>
                      <div className="flex items-center space-x-2">
                        <Clock size={16} />
                        <span className="text-sm">{article.readTime}</span>
                      </div>
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <h3 className="font-bold text-xl mb-3 leading-tight" style={{ color: 'var(--brand-navy)' }}>
                      {article.title}
                    </h3>
                    <p className="mb-4 leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                      {article.excerpt}
                    </p>
                    <Link to={`/blog/${article.slug}`}>
                      <button
                        className="flex items-center space-x-2 font-semibold hover:opacity-70 transition-opacity"
                        style={{ color: 'var(--brand-cyan)' }}
                      >
                        <span>Leer más</span>
                        <ArrowRight size={18} />
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Suscríbete a nuestro Newsletter</h2>
          <p className="text-xl mb-8 text-white/90">
            Recibe las últimas tendencias en GEO y Marketing de IA directamente en tu inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Tu email"
              className="flex-grow px-6 py-4 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
              style={{ color: 'var(--brand-gray-dark)' }}
            />
            <button
              className="px-8 py-4 rounded-lg text-white font-bold hover:opacity-90 transition-opacity shadow-xl whitespace-nowrap"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              Suscribirse
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}