import { FileText } from 'lucide-react';

export function TerminosServicio() {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'var(--brand-cyan)' }}
            >
              <FileText size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Términos de Servicio</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Última actualización: 7 de marzo de 2026
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none" style={{ color: 'var(--brand-gray-dark)' }}>
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                1. Aceptación de los Términos
              </h2>
              <p className="mb-4 leading-relaxed">
                Al acceder y utilizar los servicios de GEO Marketing IA, usted acepta estar legalmente vinculado
                por estos Términos de Servicio. Si no está de acuerdo con alguna parte de estos términos, no
                debe utilizar nuestros servicios.
              </p>
              <p className="mb-4 leading-relaxed">
                Estos términos constituyen un acuerdo legal entre usted (el "Cliente") y GEO Marketing IA (el
                "Proveedor") con domicilio en Barcelona, España.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                2. Descripción de Servicios
              </h2>
              <p className="mb-4 leading-relaxed">
                GEO Marketing IA ofrece servicios profesionales de marketing digital especializados en:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>GEO (Generative Engine Optimization):</strong> Optimización para motores de búsqueda
                  generativos como SearchGPT, Perplexity y Gemini.
                </li>
                <li>
                  <strong>Publicidad en Plataformas de IA:</strong> Gestión de campañas publicitarias en
                  buscadores de inteligencia artificial.
                </li>
                <li>
                  <strong>Diseño Web para IA:</strong> Desarrollo de sitios web optimizados para ser
                  interpretados por motores generativos.
                </li>
                <li>
                  <strong>SEO Avanzado:</strong> Estrategias de optimización para motores de búsqueda
                  tradicionales y generativos.
                </li>
                <li>
                  <strong>Consultoría Estratégica:</strong> Auditorías y asesoramiento en marketing digital
                  impulsado por IA.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                3. Contratación de Servicios
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>3.1 Proceso de Contratación:</strong> La contratación de nuestros servicios se
                formaliza mediante:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Solicitud de auditoría estratégica o consulta inicial.</li>
                <li>Propuesta comercial detallada con alcance, plazos y presupuesto.</li>
                <li>Aceptación formal por parte del Cliente (firma de contrato o email de confirmación).</li>
                <li>Pago inicial según las condiciones acordadas.</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                <strong>3.2 Presupuestos:</strong> Los presupuestos tienen una validez de 30 días naturales
                desde su emisión, salvo indicación contraria. Los precios incluyen IVA cuando sea aplicable.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                4. Obligaciones del Cliente
              </h2>
              <p className="mb-4 leading-relaxed">El Cliente se compromete a:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  Proporcionar información veraz, completa y actualizada sobre su empresa, productos y objetivos
                  comerciales.
                </li>
                <li>
                  Facilitar acceso a plataformas, cuentas y herramientas necesarias para la prestación del
                  servicio (Analytics, Search Console, CMS, etc.).
                </li>
                <li>Revisar y aprobar entregas en los plazos acordados.</li>
                <li>Realizar los pagos según las condiciones pactadas.</li>
                <li>
                  Comunicar cualquier cambio relevante en su actividad que pueda afectar a la estrategia
                  acordada.
                </li>
                <li>
                  Respetar la propiedad intelectual de GEO Marketing IA sobre metodologías, estrategias y
                  materiales desarrollados.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                5. Obligaciones del Proveedor
              </h2>
              <p className="mb-4 leading-relaxed">GEO Marketing IA se compromete a:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Prestar los servicios con diligencia profesional y siguiendo las mejores prácticas.</li>
                <li>Cumplir con los plazos de entrega acordados, salvo causa de fuerza mayor.</li>
                <li>Mantener la confidencialidad de la información del Cliente.</li>
                <li>Informar periódicamente sobre el progreso y resultados de las acciones implementadas.</li>
                <li>Utilizar herramientas y metodologías actualizadas y éticamente responsables.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                6. Condiciones Económicas y Pago
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>6.1 Tarifas:</strong> Las tarifas se establecen en cada propuesta comercial y pueden
                variar según el alcance, complejidad y duración del proyecto.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>6.2 Forma de Pago:</strong> Los pagos se realizarán mediante transferencia bancaria a
                la cuenta indicada en la factura. Se aceptan las siguientes modalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Pago único anticipado para proyectos de corta duración.</li>
                <li>Pago inicial + hitos para proyectos de media duración.</li>
                <li>Cuotas mensuales para servicios recurrentes (retainers).</li>
              </ul>
              <p className="mb-4 leading-relaxed">
                <strong>6.3 Retrasos en el Pago:</strong> El retraso en el pago puede resultar en la suspensión
                temporal de los servicios. Los pagos vencidos devengarán intereses de demora conforme a la Ley
                3/2004.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>6.4 Gastos Adicionales:</strong> Costes externos (publicidad, herramientas premium,
                compra de backlinks, etc.) serán facturados por separado previa aprobación del Cliente.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                7. Propiedad Intelectual
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>7.1 Del Cliente:</strong> El Cliente conserva todos los derechos sobre su marca,
                contenidos originales y materiales proporcionados.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>7.2 Del Proveedor:</strong> GEO Marketing IA conserva los derechos sobre sus
                metodologías, procesos, herramientas propietarias y know-how. Los entregables específicos
                (diseños, contenidos, estrategias) son propiedad del Cliente una vez abonados completamente.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>7.3 Portfolio y Referencias:</strong> El Proveedor podrá incluir el proyecto en su
                portfolio y mencionar al Cliente como referencia, salvo que se acuerde lo contrario por escrito.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                8. Confidencialidad
              </h2>
              <p className="mb-4 leading-relaxed">
                Ambas partes se comprometen a mantener la confidencialidad de toda información sensible
                intercambiada durante la relación comercial. Esta obligación permanecerá vigente incluso después
                de la finalización del servicio.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                9. Resultados y Garantías
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>9.1 Obligación de Medios:</strong> Nuestros servicios constituyen una obligación de
                medios, no de resultados. Nos comprometemos a aplicar las mejores prácticas y estrategias
                actualizadas, pero no podemos garantizar resultados específicos debido a factores externos
                (algoritmos de buscadores, competencia, cambios de mercado, etc.).
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>9.2 Plazos:</strong> Los resultados en marketing digital requieren tiempo. El Cliente
                reconoce que mejoras significativas en posicionamiento, tráfico y conversiones pueden requerir
                entre 3 y 6 meses.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>9.3 Factores Externos:</strong> No nos responsabilizamos de penalizaciones o pérdidas de
                posicionamiento derivadas de cambios algorítmicos de terceros, acciones de la competencia o
                problemas técnicos ajenos a nuestro control.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                10. Duración y Rescisión
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>10.1 Duración:</strong> La duración del servicio se establece en cada contrato
                específico. Los servicios recurrentes se renuevan automáticamente salvo cancelación con 30 días
                de antelación.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>10.2 Rescisión por el Cliente:</strong> El Cliente puede cancelar el servicio con 30
                días de preaviso. Los importes abonados por servicios no prestados serán reembolsados
                proporcionalmente, descontando los trabajos ya realizados.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>10.3 Rescisión por el Proveedor:</strong> GEO Marketing IA puede rescindir el contrato
                inmediatamente en caso de impago, incumplimiento grave o conducta inapropiada del Cliente.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                11. Limitación de Responsabilidad
              </h2>
              <p className="mb-4 leading-relaxed">
                En ningún caso GEO Marketing IA será responsable de daños indirectos, pérdida de beneficios o
                daños consecuenciales derivados del uso de nuestros servicios. La responsabilidad máxima se
                limita al importe total pagado por el Cliente en los últimos 12 meses.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                12. Modificaciones
              </h2>
              <p className="mb-4 leading-relaxed">
                Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los
                cambios entrarán en vigor tras su publicación en nuestro sitio web. El uso continuado de
                nuestros servicios implica la aceptación de los términos actualizados.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                13. Ley Aplicable y Jurisdicción
              </h2>
              <p className="mb-4 leading-relaxed">
                Estos Términos de Servicio se rigen por la legislación española. Para la resolución de cualquier
                controversia, las partes se someten a los juzgados y tribunales de Barcelona, España, renunciando
                expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                14. Contacto
              </h2>
              <p className="mb-4 leading-relaxed">
                Para cualquier consulta sobre estos Términos de Servicio, puede contactarnos:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Email:</strong>{' '}
                  <a
                    href="mailto:info@geomarketingia.com"
                    className="font-semibold hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--brand-cyan)' }}
                  >
                    info@geomarketingia.com
                  </a>
                </li>
                <li>
                  <strong>Teléfono:</strong> +34 642 881 418
                </li>
                <li>
                  <strong>Ubicación:</strong> Barcelona, España
                </li>
              </ul>
            </div>

            <div
              className="mt-12 p-6 rounded-lg"
              style={{ backgroundColor: 'var(--brand-gray-light)' }}
            >
              <p className="font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>
                ¿Necesita aclarar algún punto de nuestros términos?
              </p>
              <p className="leading-relaxed">
                Nuestro equipo está disponible para responder cualquier pregunta en{' '}
                <a
                  href="mailto:info@geomarketingia.com"
                  className="font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--brand-cyan)' }}
                >
                  info@geomarketingia.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
