import { Link } from 'react-router';
import heroBackground from 'figma:asset/4baadbf8730bf384561521d7b61776b97bb3f4c8.png';

export function Hero() {
  return (
    <section
      className="py-20 md:py-32 relative overflow-hidden"
      style={{ backgroundColor: 'var(--brand-navy)' }}
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
          opacity: 0.5,
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 51, 102, 0.65)' }} />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            No esperes a que te busquen. Haz que la IA te recomiende
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Pioneros en GEO, Anuncios de IA y optimización avanzada para que tu marca lidere las respuestas generativas
          </p>
          <Link to="/contacto">
            <button
              className="px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-2xl transform hover:scale-105 transition-transform duration-200"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              Auditoría Estratégica Gratuita
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}