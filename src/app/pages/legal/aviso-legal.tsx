import { Scale } from 'lucide-react';

export function AvisoLegal() {
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
              <Scale size={40} className="text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Aviso Legal</h1>
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
                1. Información General
              </h2>
              <p className="mb-4 leading-relaxed">
                En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información
                y de Comercio Electrónico (LSSI-CE), se informa de los siguientes datos:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Titular:</strong> GEO Marketing IA
                </li>
                <li>
                  <strong>Domicilio social:</strong> Barcelona, España
                </li>
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
                  <strong>Actividad:</strong> Servicios de consultoría y gestión en marketing digital, especializada
                  en GEO (Generative Engine Optimization) y optimización para motores de inteligencia artificial.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                2. Objeto del Sitio Web
              </h2>
              <p className="mb-4 leading-relaxed">
                El sitio web{' '}
                <span className="font-semibold" style={{ color: 'var(--brand-cyan)' }}>
                  www.geomarketingia.com
                </span>{' '}
                tiene como objetivo proporcionar información sobre los servicios profesionales de marketing
                digital que ofrece GEO Marketing IA, así como facilitar el contacto con potenciales clientes y
                compartir contenido de valor relacionado con GEO, SEO, publicidad en IA y tendencias del sector.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                3. Condiciones de Uso
              </h2>
              <p className="mb-4 leading-relaxed">
                El acceso y uso de este sitio web implica la aceptación expresa de las presentes condiciones de
                uso. El usuario se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-3">
                <li>Hacer un uso correcto del sitio web conforme a la legislación vigente.</li>
                <li>
                  No utilizar el sitio con fines ilícitos o que puedan dañar, inutilizar o sobrecargar el sitio
                  web o impedir su normal utilización.
                </li>
                <li>
                  No introducir, almacenar o difundir programas, virus, códigos maliciosos o cualquier otro
                  sistema que pueda causar daños en los sistemas informáticos.
                </li>
                <li>
                  No intentar acceder, utilizar o manipular datos de otros usuarios, áreas restringidas del
                  sistema o cualquier otra medida de seguridad.
                </li>
                <li>No realizar actividades publicitarias o de explotación comercial no autorizadas.</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                4. Propiedad Intelectual e Industrial
              </h2>
              <p className="mb-4 leading-relaxed">
                Todos los contenidos del sitio web, incluyendo pero no limitado a textos, diseños, gráficos,
                logotipos, iconos, imágenes, código fuente, software y cualquier otro material, son propiedad de
                GEO Marketing IA o de terceros que han autorizado su uso, y están protegidos por las leyes
                españolas e internacionales de propiedad intelectual e industrial.
              </p>
              <p className="mb-4 leading-relaxed">
                Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación
                o cualquier otra forma de explotación de los contenidos sin la autorización expresa y por escrito
                del titular de los derechos.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>Marca y Logo:</strong> "GEO Marketing IA", así como el logotipo y otros signos
                distintivos, son marcas registradas. Su uso no autorizado constituye una infracción de los
                derechos de propiedad industrial.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                5. Exclusión de Garantías y Responsabilidad
              </h2>
              <p className="mb-4 leading-relaxed">
                <strong>5.1 Contenido:</strong> GEO Marketing IA se esfuerza por mantener la información del
                sitio web actualizada y precisa, pero no garantiza la exactitud, completitud o actualidad de los
                contenidos. El usuario es responsable del uso que haga de la información.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>5.2 Disponibilidad:</strong> No garantizamos la disponibilidad continua e ininterrumpida
                del sitio web. Nos reservamos el derecho a suspender, interrumpir o dejar de operar el sitio web
                en cualquier momento por motivos técnicos, de mantenimiento o de cualquier otra índole.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>5.3 Enlaces Externos:</strong> Este sitio web puede contener enlaces a sitios externos.
                No nos hacemos responsables del contenido, políticas de privacidad o prácticas de sitios web de
                terceros. El acceso a estos enlaces es bajo la exclusiva responsabilidad del usuario.
              </p>
              <p className="mb-4 leading-relaxed">
                <strong>5.4 Virus y Seguridad:</strong> Aunque aplicamos medidas de seguridad, no podemos
                garantizar la ausencia de virus u otros elementos dañinos. Es responsabilidad del usuario
                disponer de herramientas adecuadas para la detección y desinfección de programas informáticos
                dañinos.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                6. Enlaces desde Sitios Externos
              </h2>
              <p className="mb-4 leading-relaxed">
                Si desea establecer un enlace desde su sitio web al nuestro, deberá cumplir las siguientes
                condiciones:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>El enlace únicamente vinculará con la página principal (home).</li>
                <li>
                  No se realizarán manifestaciones o indicaciones falsas, inexactas o incorrectas sobre GEO
                  Marketing IA.
                </li>
                <li>
                  No se declarará ni dará a entender que hemos autorizado el enlace o supervisado o asumido de
                  cualquier forma los servicios ofrecidos o puestos a disposición en la página web desde la que
                  se establece el enlace.
                </li>
                <li>
                  El sitio web desde el que se realice el enlace no contendrá información ilícita, contraria a la
                  moral o las buenas costumbres.
                </li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                7. Protección de Datos Personales
              </h2>
              <p className="mb-4 leading-relaxed">
                El tratamiento de datos personales se rige por nuestra{' '}
                <a
                  href="/politica-privacidad"
                  className="font-semibold hover:opacity-70 transition-opacity"
                  style={{ color: 'var(--brand-cyan)' }}
                >
                  Política de Privacidad
                </a>
                , donde se informa detalladamente sobre la recopilación, uso y protección de sus datos conforme
                al RGPD y la LOPDGDD.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                8. Cookies
              </h2>
              <p className="mb-4 leading-relaxed">
                Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación,
                realizar análisis de uso y mostrar publicidad relacionada con sus preferencias. Al navegar por el
                sitio, usted acepta el uso de cookies de acuerdo con nuestra política de cookies.
              </p>
              <p className="mb-4 leading-relaxed">
                Puede configurar su navegador para rechazar cookies o ser notificado cuando se envíen. Sin
                embargo, esto puede afectar a la funcionalidad del sitio web.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                9. Modificaciones
              </h2>
              <p className="mb-4 leading-relaxed">
                GEO Marketing IA se reserva el derecho de modificar el presente Aviso Legal en cualquier momento.
                Los cambios entrarán en vigor desde su publicación en el sitio web. Le recomendamos revisar
                periódicamente esta página para estar al tanto de posibles actualizaciones.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                10. Legislación Aplicable y Jurisdicción
              </h2>
              <p className="mb-4 leading-relaxed">
                Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
                controversia derivada del acceso o uso del sitio web, las partes se someten expresamente a los
                Juzgados y Tribunales de Barcelona, España, renunciando a cualquier otro fuero que pudiera
                corresponderles.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                11. Nulidad Parcial
              </h2>
              <p className="mb-4 leading-relaxed">
                Si cualquier cláusula del presente Aviso Legal fuese declarada nula o inaplicable por resolución
                judicial o administrativa, dicha nulidad o inaplicación no afectará a la validez del resto de
                cláusulas, que mantendrán su plena vigencia y efectos.
              </p>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                12. Reclamaciones
              </h2>
              <p className="mb-4 leading-relaxed">
                Si considera que existe algún contenido en este sitio web que pudiera resultar inadecuado o que
                vulnere derechos de terceros, por favor póngase en contacto con nosotros inmediatamente:
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
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
                13. Contacto
              </h2>
              <p className="mb-4 leading-relaxed">
                Para cualquier cuestión relacionada con este Aviso Legal, puede contactarnos a través de:
              </p>
              <ul className="list-none space-y-2">
                <li>
                  <strong>Correo electrónico:</strong>{' '}
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
                  <strong>Dirección:</strong> Barcelona, España
                </li>
              </ul>
            </div>

            <div
              className="mt-12 p-6 rounded-lg"
              style={{ backgroundColor: 'var(--brand-gray-light)' }}
            >
              <p className="font-semibold mb-2" style={{ color: 'var(--brand-navy)' }}>
                ¿Necesita más información sobre nuestro aviso legal?
              </p>
              <p className="leading-relaxed">
                Estaremos encantados de atenderle en{' '}
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
