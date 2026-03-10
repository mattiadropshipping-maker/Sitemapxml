import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ backgroundColor: 'var(--brand-cyan)' }}>
              <span className="text-white font-bold text-xl">GEO</span>
            </div>
            <span className="font-bold text-xl" style={{ color: 'var(--brand-navy)' }}>
              Marketing IA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/servicios" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-gray-dark)' }}>
              Servicios
            </Link>
            <Link to="/casos-exito" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-gray-dark)' }}>
              Casos de Éxito
            </Link>
            <Link to="/nosotros" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-gray-dark)' }}>
              Nosotros
            </Link>
            <Link to="/blog" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-gray-dark)' }}>
              Blog
            </Link>
            <Link to="/contacto" className="hover:opacity-70 transition-opacity" style={{ color: 'var(--brand-gray-dark)' }}>
              Contacto
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link to="/contacto">
              <button
                className="px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Contáctanos
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ color: 'var(--brand-navy)' }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link
              to="/servicios"
              className="block hover:opacity-70 transition-opacity"
              style={{ color: 'var(--brand-gray-dark)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Servicios
            </Link>
            <Link
              to="/casos-exito"
              className="block hover:opacity-70 transition-opacity"
              style={{ color: 'var(--brand-gray-dark)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Casos de Éxito
            </Link>
            <Link
              to="/nosotros"
              className="block hover:opacity-70 transition-opacity"
              style={{ color: 'var(--brand-gray-dark)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Nosotros
            </Link>
            <Link
              to="/blog"
              className="block hover:opacity-70 transition-opacity"
              style={{ color: 'var(--brand-gray-dark)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contacto"
              className="block hover:opacity-70 transition-opacity"
              style={{ color: 'var(--brand-gray-dark)' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contacto
            </Link>
            <Link to="/contacto" onClick={() => setMobileMenuOpen(false)}>
              <button
                className="w-full px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
                style={{ backgroundColor: 'var(--brand-cyan)' }}
              >
                Contáctanos
              </button>
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}