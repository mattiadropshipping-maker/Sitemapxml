import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function SchemaOrg() {
  const location = useLocation();

  useEffect(() => {
    // Organization Schema - Always present
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "GEO Marketing IA",
      "description": "Agencia especializada en GEO (Generative Engine Optimization) y Marketing de IA. Posicionamos marcas en ChatGPT, Perplexity y Gemini.",
      "url": "https://geomarketingia.com",
      "logo": "https://geomarketingia.com/logo.png",
      "image": "https://geomarketingia.com/og-image.png",
      "telephone": "+34642881418",
      "email": "info@geomarketingia.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Barcelona",
        "addressCountry": "ES"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "addressCountry": "ES"
      },
      "areaServed": {
        "@type": "Country",
        "name": "España"
      },
      "priceRange": "€€€",
      "sameAs": [
        "https://www.linkedin.com/company/geomarketingia",
        "https://twitter.com/geomarketingia"
      ],
      "serviceType": [
        "GEO - Generative Engine Optimization",
        "Marketing de Inteligencia Artificial",
        "Optimización para ChatGPT",
        "Optimización para Perplexity",
        "Optimización para Gemini",
        "SEO Avanzado",
        "Diseño Web",
        "PPC en Plataformas de IA"
      ]
    };

    // WebSite Schema
    const websiteSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "GEO Marketing IA",
      "url": "https://geomarketingia.com",
      "description": "Agencia líder en GEO y Marketing de IA",
      "publisher": {
        "@type": "Organization",
        "name": "GEO Marketing IA",
        "logo": {
          "@type": "ImageObject",
          "url": "https://geomarketingia.com/logo.png"
        }
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://geomarketingia.com/blog?search={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    };

    // Remove existing schema scripts
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(schema => schema.remove());

    // Add Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // Add WebSite Schema
    const websiteScript = document.createElement('script');
    websiteScript.type = 'application/ld+json';
    websiteScript.text = JSON.stringify(websiteSchema);
    document.head.appendChild(websiteScript);

    // Page-specific schemas
    if (location.pathname.startsWith('/blog/') && location.pathname !== '/blog') {
      // Article Schema for blog posts
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": document.title,
        "description": document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
        "author": {
          "@type": "Organization",
          "name": "Equipo GEO Marketing IA"
        },
        "publisher": {
          "@type": "Organization",
          "name": "GEO Marketing IA",
          "logo": {
            "@type": "ImageObject",
            "url": "https://geomarketingia.com/logo.png"
          }
        },
        "datePublished": "2026-03-09",
        "dateModified": "2026-03-10",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://geomarketingia.com${location.pathname}`
        },
        "image": "https://geomarketingia.com/og-image.png"
      };

      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.text = JSON.stringify(articleSchema);
      document.head.appendChild(articleScript);
    }

    if (location.pathname === '/contacto') {
      // ContactPage Schema
      const contactSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contacto - GEO Marketing IA",
        "description": "Contacta con GEO Marketing IA para solicitar una auditoría gratuita de visibilidad en IA",
        "url": "https://geomarketingia.com/contacto",
        "mainEntity": {
          "@type": "Organization",
          "name": "GEO Marketing IA",
          "telephone": "+34642881418",
          "email": "info@geomarketingia.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Barcelona",
            "addressCountry": "ES"
          }
        }
      };

      const contactScript = document.createElement('script');
      contactScript.type = 'application/ld+json';
      contactScript.text = JSON.stringify(contactSchema);
      document.head.appendChild(contactScript);
    }

    if (location.pathname.startsWith('/servicios/')) {
      // Service Schema
      const serviceName = location.pathname.split('/').pop();
      const serviceNames: Record<string, string> = {
        'geo': 'GEO - Generative Engine Optimization',
        'ppc': 'PPC en Plataformas de IA',
        'diseno-web': 'Diseño Web Optimizado para GEO',
        'seo': 'SEO Avanzado + GEO'
      };

      const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": serviceNames[serviceName || ''] || 'Servicios de GEO Marketing',
        "provider": {
          "@type": "Organization",
          "name": "GEO Marketing IA"
        },
        "areaServed": {
          "@type": "Country",
          "name": "España"
        },
        "availableChannel": {
          "@type": "ServiceChannel",
          "serviceUrl": `https://geomarketingia.com${location.pathname}`
        }
      };

      const serviceScript = document.createElement('script');
      serviceScript.type = 'application/ld+json';
      serviceScript.text = JSON.stringify(serviceSchema);
      document.head.appendChild(serviceScript);
    }

    // BreadcrumbList Schema for all pages except home
    if (location.pathname !== '/') {
      const pathSegments = location.pathname.split('/').filter(Boolean);
      const breadcrumbItems = [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Inicio",
          "item": "https://geomarketingia.com"
        }
      ];

      let currentPath = '';
      pathSegments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        breadcrumbItems.push({
          "@type": "ListItem",
          "position": index + 2,
          "name": segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
          "item": `https://geomarketingia.com${currentPath}`
        });
      });

      const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbItems
      };

      const breadcrumbScript = document.createElement('script');
      breadcrumbScript.type = 'application/ld+json';
      breadcrumbScript.text = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(breadcrumbScript);
    }

  }, [location.pathname]);

  return null; // This component doesn't render anything
}
