export function Stats() {
  const stats = [
    { value: '250%', label: 'ROI Promedio' },
    { value: '15+', label: 'Motores de IA Optimizados' },
    { value: '1M+', label: 'Leads Generados' },
    { value: '98%', label: 'Satisfacción del Cliente' },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: 'var(--brand-navy)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Resultados que Hablan por Sí Mismos
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Nuestro enfoque data-driven genera resultados medibles y sostenibles
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-5xl md:text-6xl font-bold mb-3"
                style={{ color: 'var(--brand-cyan)' }}
              >
                {stat.value}
              </div>
              <div className="text-lg md:text-xl text-white/90 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}