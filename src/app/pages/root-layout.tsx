import { Outlet, useLocation } from 'react-router';
import { Header } from '../components/header';
import { Footer } from '../components/footer';
import { WhatsAppButton } from '../components/whatsapp-button';
import { SchemaOrg } from '../components/schema-org';
import { useLayoutEffect, useEffect } from 'react';

export function RootLayout() {
  const location = useLocation();

  // Scroll to top instantly on route change
  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  // Update page metadata based on route
  useEffect(() => {
    const routeMetadata: Record<string, { title: string; description: string }> = {
      '/': {
        title: 'GEO Marketing IA - Agencia Especializada en Optimización para Motores de IA | Barcelona',
        description: 'Agencia líder en GEO (Generative Engine Optimization). Hacemos que tu marca aparezca en ChatGPT, Perplexity y Gemini. Auditoría gratuita.',
      },
      '/servicios': {
        title: 'Servicios de GEO y Marketing de IA | GEO Marketing IA',
        description: 'Servicios especializados: GEO, Ads en IA, Diseño Web y SEO Avanzado. Dominamos la nueva era de búsqueda impulsada por inteligencia artificial.',
      },
      '/servicios/geo': {
        title: 'Servicio GEO - Optimización para Motores Generativos | GEO Marketing IA',
        description: 'Posiciona tu marca en ChatGPT, Perplexity y Gemini. Estrategia GEO completa para aparecer en respuestas de IA. Auditoría gratuita.',
      },
      '/servicios/ppc': {
        title: 'PPC en Plataformas de IA - Publicidad en Motores Generativos | GEO Marketing IA',
        description: 'Anuncios en ChatGPT, Perplexity y futuras plataformas de IA. Adelántate a la competencia con ads en motores generativos.',
      },
      '/servicios/diseno-web': {
        title: 'Diseño Web Optimizado para GEO | GEO Marketing IA',
        description: 'Sitios web optimizados para SEO tradicional y motores de IA. Diseño moderno, schema markup y estructura citable.',
      },
      '/servicios/seo': {
        title: 'SEO Avanzado + GEO - Posicionamiento Dual | GEO Marketing IA',
        description: 'Estrategia SEO tradicional + optimización para IA. Domina Google y los motores generativos simultáneamente.',
      },
      '/blog': {
        title: 'Blog de GEO Marketing IA - Insights, Guías y Tendencias',
        description: 'Artículos sobre GEO, optimización para IA, ChatGPT, Perplexity y tendencias de marketing digital impulsado por IA.',
      },
      '/blog/que-es-geo': {
        title: 'Qué es GEO (Generative Engine Optimization) y por qué será el nuevo SEO',
        description: 'Descubre qué es GEO (Generative Engine Optimization), cómo funciona y por qué reemplazará al SEO tradicional en la era de ChatGPT, Perplexity y Gemini.',
      },
      '/blog/marca-en-ia': {
        title: 'Cómo hacer que tu marca aparezca en respuestas de inteligencia artificial',
        description: 'Guía completa para hacer que ChatGPT, Perplexity y Gemini recomienden tu marca. Estrategias probadas de GEO para B2B.',
      },
      '/blog/auditoria-ia': {
        title: 'Cómo hacer una auditoría de visibilidad en IA para tu empresa',
        description: 'Guía paso a paso para auditar la visibilidad de tu marca en ChatGPT, Perplexity y Gemini. Incluye checklist y herramientas.',
      },
      '/blog/contenido-citable': {
        title: 'Qué tipo de contenido citan más los modelos de IA',
        description: 'Descubre qué formatos y tipos de contenido citan más ChatGPT, Perplexity y Gemini. Guía completa con ejemplos y plantillas.',
      },
      '/blog/seo-vs-geo': {
        title: 'SEO vs GEO: cómo cambiará el posicionamiento en la era de la IA',
        description: 'Comparativa completa entre SEO tradicional y GEO. Descubre cómo adaptarte al cambio de Google a ChatGPT, Perplexity y Gemini.',
      },
      '/contacto': {
        title: 'Contacto - Solicita tu Auditoría GEO Gratuita | GEO Marketing IA',
        description: 'Contacta con GEO Marketing IA. Solicita auditoría gratuita de visibilidad en IA. Barcelona | +34 642 881 418 | info@geomarketingia.com',
      },
      '/casos-exito': {
        title: 'Casos de Éxito GEO - Resultados Reales | GEO Marketing IA',
        description: 'Casos de éxito de empresas que mejoraron su visibilidad en ChatGPT, Perplexity y Gemini con nuestras estrategias GEO.',
      },
      '/nosotros': {
        title: 'Sobre Nosotros - Agencia GEO Líder en España | GEO Marketing IA',
        description: 'Somos la agencia líder en GEO y Marketing de IA en España. Especializados en posicionar marcas en motores generativos.',
      },
    };

    const metadata = routeMetadata[location.pathname] || {
      title: 'GEO Marketing IA - Agencia de Optimización para Motores de IA',
      description: 'Agencia especializada en GEO (Generative Engine Optimization). Posicionamos tu marca en ChatGPT, Perplexity y Gemini.',
    };

    document.title = metadata.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metadata.description);

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', metadata.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (!ogDescription) {
      ogDescription = document.createElement('meta');
      ogDescription.setAttribute('property', 'og:description');
      document.head.appendChild(ogDescription);
    }
    ogDescription.setAttribute('content', metadata.description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', `https://geomarketingia.com${location.pathname}`);

    // Update Twitter Card tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
    twitterTitle.setAttribute('content', metadata.title);

    let twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDescription) {
      twitterDescription = document.createElement('meta');
      twitterDescription.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDescription);
    }
    twitterDescription.setAttribute('content', metadata.description);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://geomarketingia.com${location.pathname}`);

  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <SchemaOrg />
    </div>
  );
}