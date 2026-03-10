import { Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Link } from 'react-router';
import { ReactNode } from 'react';

interface BlogArticleLayoutProps {
  title: string;
  category: string;
  readTime: string;
  date: string;
  author: string;
  authorRole: string;
  image: string;
  children: ReactNode;
}

export function BlogArticleLayout({
  title,
  category,
  readTime,
  date,
  author,
  authorRole,
  image,
  children,
}: BlogArticleLayoutProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-12" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6">
          <Link
            to="/blog"
            className="inline-flex items-center space-x-2 text-white/90 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Volver al Blog</span>
          </Link>

          <div className="mb-6">
            <span
              className="inline-block px-4 py-2 rounded-full font-semibold text-white"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              {category}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">{title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-white/90">
            <div className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{readTime}</span>
            </div>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <div>
              <div className="font-semibold">{author}</div>
              <div className="text-sm">{authorRole}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-0 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="relative h-96 md:h-[500px] overflow-hidden">
            <ImageWithFallback src={image} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--brand-gray-dark)' }}>
            {children}
          </div>
        </div>
      </article>

      {/* Share Section */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Share2 size={20} style={{ color: 'var(--brand-cyan)' }} />
              <span className="font-semibold" style={{ color: 'var(--brand-navy)' }}>
                Compartir artículo:
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                <Twitter size={18} className="text-white" />
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                <Linkedin size={18} className="text-white" />
              </button>
              <button
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                <Facebook size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para dominar los motores generativos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Solicita una auditoría estratégica gratuita y descubre cómo optimizar tu presencia en IA
          </p>
          <Link to="/contacto">
            <button
              className="px-10 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              Solicitar Auditoría Gratuita
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
