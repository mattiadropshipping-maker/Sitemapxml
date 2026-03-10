import { Shield } from 'lucide-react';

export function PoliticaPrivacidad() {
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
              <Shield size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Política de Privacidad</h1>
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
                1. Identificación del Responsable
              </h2>
              <p className="mb-4 leading-relaxed">
                En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril
                de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de
                datos personales (RGPD), y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD), le informamos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Responsable:</strong> GEO Marketing IA
                </li>
                <li>
                  <strong>Domicilio:</strong> Barcelona, España
                </li>
                <li>
                  <strong>Email:</strong> info@geomarketingia.com
                </li>
                <li>
                  <strong>Teléfono:</strong> +34 642 881 418
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                2. Datos que Recopilamos
              </h2>
              <p className="mb-4 leading-relaxed">Recopilamos los siguientes tipos de información:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Datos de contacto:</strong> nombre, apellidos, dirección de correo electrónico,
                  número de teléfono y empresa.
                </li>
                <li>
                  <strong>Datos de navegación:</strong> dirección IP, tipo de navegador, páginas visitadas,
                  tiempo de permanencia y cookies.
                </li>
                <li>
                  <strong>Datos profesionales:</strong> cargo, sector de actividad e información sobre su
                  empresa cuando nos la proporciona voluntariamente.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                3. Finalidad del Tratamiento
              </h2>
              <p className="mb-4 leading-relaxed">
                Los datos personales que nos proporciona se utilizarán para las siguientes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Gestionar y responder a sus consultas y solicitudes de información.</li>
                <li>Enviarle información comercial sobre nuestros servicios de GEO y Marketing de IA.</li>
                <li>Realizar auditorías estratégicas y análisis de su presencia digital.</li>
                <li>Elaborar presupuestos personalizados.</li>
                <li>Cumplir con obligaciones legales y fiscales.</li>
                <li>Mejorar nuestros servicios mediante análisis estadísticos.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                4. Legitimación del Tratamiento
              </h2>
              <p className="mb-4 leading-relaxed">La base legal para el tratamiento de sus datos es:</p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Consentimiento:</strong> Al completar nuestros formularios de contacto o suscribirse
                  a nuestro newsletter.
                </li>
                <li>
                  <strong>Ejecución de contrato:</strong> Para prestarle los servicios solicitados.
                </li>
                <li>
                  <strong>Interés legítimo:</strong> Para enviarle comunicaciones comerciales relacionadas con
                  servicios similares a los contratados.
                </li>
                <li>
                  <strong>Obligación legal:</strong> Para cumplir con las obligaciones fiscales y contables.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                5. Conservación de los Datos
              </h2>
              <p className="mb-4 leading-relaxed">
                Sus datos personales serán conservados mientras se mantenga la relación comercial o durante los
                años necesarios para cumplir con las obligaciones legales. Los datos de navegación se
                conservarán durante el plazo legalmente establecido.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                6. Destinatarios de los Datos
              </h2>
              <p className="mb-4 leading-relaxed">
                No comunicamos sus datos personales a terceros, salvo obligación legal. Podemos utilizar
                proveedores de servicios para operaciones como hosting, email marketing y análisis web, que
                actuarán como encargados del tratamiento y estarán sujetos a acuerdos de confidencialidad.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                7. Sus Derechos
              </h2>
              <p className="mb-4 leading-relaxed">
                De acuerdo con el RGPD y la LOPDGDD, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>
                  <strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted.
                </li>
                <li>
                  <strong>Rectificación:</strong> Solicitar la corrección de datos inexactos.
                </li>
                <li>
                  <strong>Supresión:</strong> Solicitar la eliminación de sus datos cuando ya no sean
                  necesarios.
                </li>
                <li>
                  <strong>Oposición:</strong> Oponerse al tratamiento de sus datos personales.
                </li>
                <li>
                  <strong>Limitación:</strong> Solicitar la limitación del tratamiento de sus datos.
                </li>
                <li>
                  <strong>Portabilidad:</strong> Recibir sus datos en formato estructurado y de uso común.
                </li>
              </ul>
              <p className="mt-4 leading-relaxed">
                Para ejercer estos derechos, puede contactarnos en{' '}
                <a
                  href="mailto:info@geomarketingia.com"
                  className="font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--brand-cyan)' }}
                >
                  info@geomarketingia.com
                </a>{' '}
                o en el teléfono +34 642 881 418.
              </p>
              <p className="mt-4 leading-relaxed">
                También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de
                Datos (www.aepd.es) si considera que el tratamiento no se ajusta a la normativa vigente.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                8. Cookies
              </h2>
              <p className="mb-4 leading-relaxed">
                Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación
                y realizar análisis estadísticos. Puede consultar más información en nuestra política de
                cookies o configurar sus preferencias en cualquier momento.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                9. Seguridad de los Datos
              </h2>
              <p className="mb-4 leading-relaxed">
                GEO Marketing IA adopta las medidas técnicas y organizativas necesarias para garantizar la
                seguridad de sus datos personales y evitar su alteración, pérdida, tratamiento o acceso no
                autorizado.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                10. Actualización de la Política
              </h2>
              <p className="mb-4 leading-relaxed">
                Nos reservamos el derecho de modificar la presente política de privacidad para adaptarla a
                cambios legislativos o jurisprudenciales. Le recomendamos revisar esta página periódicamente.
              </p>
            </div>

            <div
              className="mt-12 p-6 rounded-lg"
              style={{ backgroundColor: 'var(--brand-gray-light)' }}
            >
              <p className="font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>
                ¿Tiene alguna pregunta sobre nuestra política de privacidad?
              </p>
              <p className="leading-relaxed">
                No dude en contactarnos en{' '}
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
