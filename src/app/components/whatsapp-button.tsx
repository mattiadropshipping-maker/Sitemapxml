import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Número de teléfono en formato internacional (sin + ni espacios)
  // 34642881418 para España
  const phoneNumber = '34642881418';
  
  // Mensaje predefinido
  const message = '¡Hola! Me gustaría solicitar una Auditoría Estratégica Gratuita para mi empresa.';
  
  // Crear URL de WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  const handleClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      <div
        className={`absolute bottom-full right-0 mb-3 px-4 py-2 bg-white rounded-lg shadow-xl transition-all duration-300 whitespace-nowrap ${
          isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
        style={{ 
          border: '1px solid #e5e7eb',
          color: 'var(--brand-gray-dark)'
        }}
      >
        <span className="font-medium">¿Necesitas ayuda?</span>
        <div 
          className="absolute -bottom-1 right-6 w-2 h-2 bg-white transform rotate-45"
          style={{ border: '1px solid #e5e7eb', borderTop: 'none', borderLeft: 'none' }}
        ></div>
      </div>

      {/* Botón de WhatsApp */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl"
        style={{ backgroundColor: '#25D366' }}
        aria-label="Contactar por WhatsApp"
      >
        {/* Efecto de pulso */}
        <span 
          className="absolute inset-0 rounded-full animate-ping opacity-75"
          style={{ backgroundColor: '#25D366', animationDuration: '2s' }}
        ></span>
        
        {/* Ícono de WhatsApp */}
        <MessageCircle 
          size={32} 
          className="relative z-10 text-white transition-transform duration-300 group-hover:scale-110" 
          strokeWidth={2}
        />
      </button>
    </div>
  );
}