import { Star, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendoza',
      position: 'CEO',
      company: 'TechVision Solutions',
      image: 'https://images.unsplash.com/photo-1589458223095-03eee50f0054?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMG1hbiUyMGV4ZWN1dGl2ZXxlbnwxfHx8fDE3NzI4ODQzNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'Desde que implementamos GEO, nuestra marca aparece consistentemente en las respuestas de ChatGPT y Perplexity. El ROI ha superado nuestras expectativas en un 340%.',
    },
    {
      name: 'María Rodríguez',
      position: 'Directora de Marketing',
      company: 'InnovateCorp',
      image: 'https://images.unsplash.com/photo-1567849859756-79bf6a9d62f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwZXhlY3V0aXZlfGVufDF8fHx8MTc3MjgyMTM2MXww&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'La estrategia de anuncios en motores de IA generó leads de altísima calidad. En 3 meses triplicamos nuestras conversiones con un CPA 60% menor que en canales tradicionales.',
    },
    {
      name: 'Javier Torres',
      position: 'VP de Ventas',
      company: 'Enterprise Global',
      image: 'https://images.unsplash.com/photo-1640531005390-38bd92755d6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHN1aXQlMjBjb3Jwb3JhdGV8ZW58MXx8fHwxNzcyODg0MzUzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'El equipo no solo optimizó nuestro sitio, sino que nos posicionó como autoridad en nuestro sector. Ahora somos la referencia que los motores generativos recomiendan.',
    },
    {
      name: 'Ana Martínez',
      position: 'Fundadora',
      company: 'StartupLab',
      image: 'https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcyNzk2NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      rating: 5,
      text: 'Profesionalismo excepcional. Nos ayudaron a adaptarnos a la nueva era de búsqueda antes que nuestra competencia. Los resultados hablan por sí solos: +250% en tráfico orgánico.',
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--background-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas líderes confían en nosotros para dominar la búsqueda generativa y transformar su presencia digital
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote size={60} style={{ color: 'var(--brand-cyan)' }} />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill="var(--brand-cyan)"
                    style={{ color: 'var(--brand-cyan)' }}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                  <ImageWithFallback
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.position}</div>
                  <div className="text-sm" style={{ color: 'var(--brand-cyan)' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            <span className="font-bold" style={{ color: 'var(--brand-navy)' }}>500+ empresas</span> han transformado su presencia digital con nosotros
          </p>
        </div>
      </div>
    </section>
  );
}