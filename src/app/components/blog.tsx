import { Clock, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';

export function Blog() {
  const articles = [
    {
      title: 'Qué es GEO (Generative Engine Optimization) y por qué será el nuevo SEO',
      excerpt:
        'Descubre qué es GEO, cómo funciona y por qué reemplazará al SEO tradicional en la era de ChatGPT, Perplexity y Gemini.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '12 min',
      category: 'GEO',
      slug: 'que-es-geo',
    },
    {
      title: 'Cómo hacer que tu marca aparezca en respuestas de inteligencia artificial',
      excerpt:
        'Guía completa para hacer que ChatGPT, Perplexity y Gemini recomienden tu marca. Estrategias probadas de GEO para B2B.',
      image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '14 min',
      category: 'GEO',
      slug: 'marca-en-ia',
    },
    {
      title: 'SEO vs GEO: cómo cambiará el posicionamiento en la era de la IA',
      excerpt:
        'Comparativa completa entre SEO tradicional y GEO. Descubre cómo adaptarte al cambio de Google a ChatGPT, Perplexity y Gemini.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      readTime: '16 min',
      category: 'GEO',
      slug: 'seo-vs-geo',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
            Insights y Tendencias
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: 'var(--brand-gray-dark)' }}>
            Mantente al día con las últimas novedades en GEO, IA y marketing digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((article) => (
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
                <div className="flex items-center space-x-2 mb-4" style={{ color: 'var(--brand-gray-dark)' }}>
                  <Clock size={16} />
                  <span className="text-sm">{article.readTime} de lectura</span>
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
      </div>
    </section>
  );
}