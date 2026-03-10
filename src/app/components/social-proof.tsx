import { Award, CheckCircle, Shield } from 'lucide-react';

export function SocialProof() {
  const certifications = [
    { name: 'Google Partner', icon: Award },
    { name: 'Meta Business Partner', icon: CheckCircle },
    { name: 'Certificados en IA', icon: Shield },
  ];

  return (
    <section className="py-12" style={{ backgroundColor: 'var(--brand-gray-light)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center mb-8 text-sm uppercase tracking-wider" style={{ color: 'var(--brand-gray-dark)' }}>
          Certificados y Partners de Confianza
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <div key={cert.name} className="flex items-center space-x-3 opacity-70 hover:opacity-100 transition-opacity">
                <Icon size={32} style={{ color: 'var(--brand-cyan)' }} />
                <span className="font-semibold" style={{ color: 'var(--brand-gray-dark)' }}>
                  {cert.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
