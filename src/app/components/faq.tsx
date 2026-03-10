import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: '¿Qué es GEO (Generative Engine Optimization)?',
      answer: 'GEO es la evolución del SEO para la era de la inteligencia artificial. Se trata de optimizar tu contenido y presencia digital para que motores generativos como ChatGPT, Perplexity, Gemini y SearchGPT recomienden tu marca cuando los usuarios hagan consultas relevantes. A diferencia del SEO tradicional que busca posicionarte en listados de resultados, GEO te posiciona como la respuesta directa y la fuente autorizada.',
    },
    {
      question: '¿Por qué necesito GEO si ya tengo buen posicionamiento SEO?',
      answer: 'El comportamiento de búsqueda está cambiando radicalmente. Los usuarios, especialmente en B2B, están consultando directamente a motores de IA en lugar de hacer búsquedas tradicionales en Google. Si tu marca no aparece en esas respuestas generativas, estás perdiendo una parte creciente del mercado. GEO complementa tu SEO preparándote para el futuro de la búsqueda, donde las IA actúan como consejeros de confianza.',
    },
    {
      question: '¿Cuánto tiempo toma ver resultados con GEO?',
      answer: 'Los primeros indicadores de presencia en motores generativos suelen aparecer entre 4-8 semanas tras implementar las optimizaciones. Sin embargo, construir autoridad consistente y convertirse en una fuente citada regularmente requiere un enfoque estratégico de 3-6 meses. A diferencia del SEO tradicional, GEO se basa en señales de autoridad y calidad que los modelos de IA priorizan.',
    },
    {
      question: '¿Cómo funcionan los anuncios en motores de IA?',
      answer: 'Los anuncios en plataformas como Perplexity Ads permiten aparecer en respuestas patrocinadas cuando usuarios hacen consultas relevantes. A diferencia de los anuncios tradicionales, estos se integran nativamente en conversaciones de IA, llegando a usuarios en el momento exacto de investigación y toma de decisión. Ofrecen tasas de conversión superiores porque captan intención altamente calificada.',
    },
    {
      question: '¿Qué diferencia su agencia de otras agencias digitales?',
      answer: 'Somos pioneros especializados en la intersección de IA y marketing digital. Mientras otras agencias aún se enfocan en canales tradicionales, nosotros dominamos GEO, anuncios en motores generativos, y optimización avanzada con IA. Nuestro equipo combina expertise técnico en modelos de lenguaje con estrategia de marketing B2B, permitiéndonos posicionar marcas donde la competencia aún no mira.',
    },
    {
      question: '¿Trabajan con empresas de todos los tamaños?',
      answer: 'Nos especializamos en empresas B2B medianas y grandes que buscan liderar su sector en la nueva era de búsqueda. Trabajamos con organizaciones que comprenden la importancia de la innovación temprana y buscan ventaja competitiva sostenible. Si tu empresa está lista para invertir estratégicamente en dominar motores generativos, somos tu partner ideal.',
    },
    {
      question: '¿Cómo miden el éxito de las campañas de GEO?',
      answer: 'Medimos múltiples KPIs específicos: frecuencia de menciones en respuestas generativas, tasa de citación como fuente autorizada, volumen de tráfico desde motores de IA, calidad de leads generados, y posicionamiento relativo vs competidores. También monitoreamos métricas tradicionales como tráfico orgánico, conversiones y ROI para ofrecer una visión completa del impacto.',
    },
    {
      question: '¿Necesito cambiar todo mi sitio web para implementar GEO?',
      answer: 'No necesariamente. Iniciamos con una auditoría completa para identificar oportunidades de optimización. En muchos casos, los cambios son estratégicos y enfocados: reestructuración de contenido, implementación de markup avanzado, y optimización de señales de autoridad. El objetivo es maximizar resultados con intervenciones inteligentes, no rehacer todo desde cero.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-white/90">
            Todo lo que necesitas saber sobre GEO y Marketing de IA
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-lg pr-8" style={{ color: 'var(--brand-navy)' }}>
                  {faq.question}
                </span>
                <span className="flex-shrink-0" style={{ color: 'var(--brand-cyan)' }}>
                  {openIndex === index ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-8 pb-6 pt-2 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-white/90 text-lg mb-6">
            ¿Tienes más preguntas? Estamos aquí para ayudarte
          </p>
          <a href="/contacto">
            <button
              className="px-8 py-4 rounded-lg text-white font-bold text-lg hover:opacity-90 transition-opacity shadow-xl"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              Hablar con un Experto
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
