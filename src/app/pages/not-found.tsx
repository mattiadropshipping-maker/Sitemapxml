export function NotFound() {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-8xl font-bold mb-4" style={{ color: 'var(--brand-cyan)' }}>
            404
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: 'var(--brand-navy)' }}>
            Página no encontrada
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--brand-gray-dark)' }}>
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
        </div>
        <a
          href="/"
          className="inline-block px-8 py-4 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
          style={{ backgroundColor: 'var(--brand-cyan)' }}
        >
          Volver al Inicio
        </a>
      </div>
    </section>
  );
}
