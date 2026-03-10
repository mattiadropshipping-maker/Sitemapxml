import { Mail, Phone, MapPin, Send, MessageSquare, Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useState } from 'react';
import { projectId, publicAnonKey } from '/utils/supabase/info';

export function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
    servicio: '',
    mensaje: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    console.log('📤 Enviando formulario de contacto...');
    console.log('📝 Datos del formulario:', formData);

    try {
      const url = `https://${projectId}.supabase.co/functions/v1/make-server-8b62266e/contact`;
      console.log('🌐 URL del endpoint:', url);

      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      console.log('📡 Response status:', response.status);
      console.log('📡 Response ok:', response.ok);

      const data = await response.json();
      console.log('📨 Response data:', data);

      if (response.ok && data.success) {
        console.log('✅ Mensaje enviado exitosamente');
        setSubmitStatus({
          type: 'success',
          message: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.',
        });
        // Limpiar el formulario
        setFormData({
          nombre: '',
          email: '',
          empresa: '',
          telefono: '',
          servicio: '',
          mensaje: '',
        });
      } else {
        console.error('❌ Error en la respuesta:', data);
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Hubo un error al enviar el mensaje. Por favor, intenta de nuevo.',
        });
      }
    } catch (error) {
      console.error('❌ Error al enviar el formulario:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Error de conexión. Por favor, verifica tu conexión a internet e intenta de nuevo.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'info@geomarketingia.com',
      description: 'Respuesta en menos de 24 horas',
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+34 642 881 418',
      description: 'Lun - Vie, 9:00 - 18:00',
    },
    {
      icon: MapPin,
      title: 'Oficina',
      value: 'Barcelona, España',
      description: 'Paseo de Gracia, 123',
    },
  ];

  const services = [
    'GEO - Optimización Generativa',
    'Ads en Buscadores de IA',
    'Diseño Web para IA',
    'SEO Avanzado',
    'Consultoría Estratégica',
    'Otro',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Contacta con Nosotros</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            ¿Listo para dominar la búsqueda generativa? Hablemos de tu proyecto
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.title}
                  className="bg-white rounded-lg p-8 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6"
                    style={{ backgroundColor: 'rgba(0, 174, 239, 0.1)' }}
                  >
                    <Icon size={32} style={{ color: 'var(--brand-cyan)' }} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: 'var(--brand-navy)' }}>
                    {info.title}
                  </h3>
                  <p className="text-lg mb-2 font-semibold" style={{ color: 'var(--brand-cyan)' }}>
                    {info.value}
                  </p>
                  <p className="text-sm" style={{ color: 'var(--brand-gray-dark)' }}>
                    {info.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg p-8 shadow-xl">
              <div className="mb-8">
                <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
                  Envíanos un Mensaje
                </h2>
                <p className="text-lg" style={{ color: 'var(--brand-gray-dark)' }}>
                  Completa el formulario y nos pondremos en contacto contigo lo antes posible
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                      Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                      Empresa
                    </label>
                    <input
                      type="text"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                      placeholder="Nombre de tu empresa"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                      placeholder="+34 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                    Servicio de Interés *
                  </label>
                  <select
                    required
                    value={formData.servicio}
                    onChange={(e) => setFormData({ ...formData, servicio: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                  >
                    <option value="">Selecciona un servicio</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block mb-2 font-semibold" style={{ color: 'var(--brand-navy)' }}>
                    Mensaje *
                  </label>
                  <textarea
                    required
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:border-cyan-500"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                {submitStatus.type === 'success' && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{submitStatus.message}</span>
                  </div>
                )}
                {submitStatus.type === 'error' && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <span className="block sm:inline">{submitStatus.message}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-lg flex items-center justify-center space-x-3"
                  style={{ backgroundColor: 'var(--brand-cyan)' }}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.928l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    <Send size={20} />
                  )}
                  <span>Enviar Mensaje</span>
                </button>
              </form>
            </div>

            {/* Image & CTA */}
            <div className="space-y-8">
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1765366417030-16d9765d920a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb3Jwb3JhdGUlMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcyODMzNDQ2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Oficina"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 opacity-20" style={{ backgroundColor: 'var(--brand-cyan)' }}></div>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <MessageSquare size={40} className="mb-4" style={{ color: 'var(--brand-cyan)' }} />
                <h3 className="font-bold text-2xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                  Prefiere hablar por teléfono?
                </h3>
                <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                  Nuestro equipo está disponible para una consulta telefónica gratuita de 30 minutos.
                </p>
                <button
                  onClick={() => {
                    const phoneNumber = '34642881418';
                    const message = 'Hola, me gustaría agendar una llamada de 30 minutos para hablar sobre los servicios de GEO y marketing de IA. ¿Cuándo tienen disponibilidad?';
                    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className="w-full px-8 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity flex items-center justify-center space-x-3"
                  style={{ backgroundColor: 'var(--brand-navy)' }}
                >
                  <Calendar size={20} />
                  <span>Agendar Llamada</span>
                </button>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-lg">
                <h3 className="font-bold text-xl mb-4" style={{ color: 'var(--brand-navy)' }}>
                  Horario de Atención
                </h3>
                <div className="space-y-3" style={{ color: 'var(--brand-gray-dark)' }}>
                  <div className="flex justify-between">
                    <span>Lunes - Viernes</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado</span>
                    <span className="font-semibold">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo</span>
                    <span className="font-semibold">Cerrado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--brand-navy)' }}>
              Preguntas Frecuentes
            </h2>
            <p className="text-lg" style={{ color: 'var(--brand-gray-dark)' }}>
              Respuestas rápidas a consultas comunes
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: '¿Cuánto tiempo toma ver resultados con GEO?',
                a: 'Generalmente comenzamos a ver resultados iniciales entre 2-3 meses, con mejoras significativas a los 6 meses.',
              },
              {
                q: '¿Trabajan con empresas de cualquier tamaño?',
                a: 'Nos especializamos en empresas B2B de todos los tamaños, desde startups hasta Fortune 500.',
              },
              {
                q: '¿Ofrecen auditorías gratuitas?',
                a: 'Sí, ofrecemos una auditoría inicial gratuita para evaluar tu presencia digital actual.',
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md border border-gray-100">
                <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--brand-navy)' }}>
                  {faq.q}
                </h3>
                <p className="leading-relaxed" style={{ color: 'var(--brand-gray-dark)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
