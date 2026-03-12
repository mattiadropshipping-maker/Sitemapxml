import { Link } from 'react-router';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-16 text-white" style={{ backgroundColor: '#001a33' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Columna 1: Sobre Nosotros */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-cyan)' }}>
                <span className="text-white font-bold text-lg">GEO</span>
              </div>
              <span className="font-bold text-xl">Marketing IA</span>
            </div>
            <p className="text-white/80 leading-relaxed mb-4">
              Pioneros en Optimización para Motores Generativos y marketing digital impulsado por IA.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/geo-marketing-ia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
                aria-label="Síguenos en LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/geomarketingia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
                aria-label="Síguenos en Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.tiktok.com/@geomarketingia?lang=en-GB"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
                aria-label="Síguenos en TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Columna 2: Mapa del Sitio */}
          <div>
            <h4 className="font-bold text-lg mb-4">Mapa del Sitio</h4>
            <nav className="space-y-3">
              <Link to="/" className="block text-white/80 hover:text-white transition-colors">
                Inicio
              </Link>
              <Link to="/servicios" className="block text-white/80 hover:text-white transition-colors">
                Servicios
              </Link>
              <Link to="/casos-exito" className="block text-white/80 hover:text-white transition-colors">
                Casos de Éxito
              </Link>
              <Link to="/nosotros" className="block text-white/80 hover:text-white transition-colors">
                Nosotros
              </Link>
              <Link to="/blog" className="block text-white/80 hover:text-white transition-colors">
                Blog
              </Link>
              <Link to="/contacto" className="block text-white/80 hover:text-white transition-colors">
                Contacto
              </Link>
            </nav>
          </div>

          {/* Columna 3: Servicios */}
          <div>
            <h4 className="font-bold text-lg mb-4">Servicios</h4>
            <nav className="space-y-3">
              <Link to="/servicios/geo" className="block text-white/80 hover:text-white transition-colors">
                GEO - Optimización Generativa
              </Link>
              <Link to="/servicios/ppc" className="block text-white/80 hover:text-white transition-colors">
                Ads en Buscadores de IA
              </Link>
              <Link to="/servicios/ppc" className="block text-white/80 hover:text-white transition-colors">
                PPC Avanzado
              </Link>
              <Link to="/servicios/diseno-web" className="block text-white/80 hover:text-white transition-colors">
                Diseño Web para IA
              </Link>
              <Link to="/servicios/seo" className="block text-white/80 hover:text-white transition-colors">
                SEO Avanzado
              </Link>
            </nav>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">info@geomarketingia.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">+34 642 881 418</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <div>
                  <p className="text-white/80">Barcelona, España</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2026 GEO Marketing IA. Todos los derechos reservados.</p>
            <div className="flex space-x-6">
              <Link to="/politica-privacidad" className="text-white/60 hover:text-white text-sm transition-colors">
                Política de Privacidad
              </Link>
              <Link to="/terminos-servicio" className="text-white/60 hover:text-white text-sm transition-colors">
                Términos de Servicio
              </Link>
              <Link to="/aviso-legal" className="text-white/60 hover:text-white text-sm transition-colors">
                Aviso Legal
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}