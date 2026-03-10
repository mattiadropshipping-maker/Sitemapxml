# 🗺️ Configuración de Sitemap.xml y Robots.txt

## ✅ Estado Actual

El sitemap.xml y robots.txt están **completamente configurados** para funcionar correctamente con MIME types apropiados en todos los entornos de deployment.

---

## 📁 Archivos Configurados

### 1. Sitemap.xml (`/public/sitemap.xml`)
- ✅ **20 URLs** incluidas (todas las páginas del sitio)
- ✅ Prioridades optimizadas según importancia
- ✅ Fechas de última modificación actualizadas
- ✅ Frecuencia de cambio definida
- ✅ XML válido según estándar sitemaps.org

### 2. Robots.txt (`/public/robots.txt`)
- ✅ Optimizado para **bots de IA** (ChatGPT, Perplexity, Gemini, etc.)
- ✅ Permite acceso a **todos los motores generativos**
- ✅ Incluye referencia a sitemap.xml
- ✅ User-agents específicos para GEO

---

## 🔧 Configuraciones de Servidor

### Para **Vercel** (`/vercel.json`)
```json
{
  "headers": [
    {
      "source": "/sitemap.xml",
      "headers": [
        { "key": "Content-Type", "value": "application/xml; charset=utf-8" }
      ]
    }
  ],
  "rewrites": [
    { "source": "/sitemap.xml", "destination": "/sitemap.xml" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Para **Netlify** (`/netlify.toml` y `/public/_headers`)
- Headers configurados para MIME types correctos
- Redirects que excluyen archivos estáticos
- Configuración en dos lugares para máxima compatibilidad

### Para **Apache** (`/public/.htaccess`)
- RewriteRules para servir archivos estáticos directamente
- Headers personalizados con mod_headers
- MIME types configurados con mod_mime

### Para **Desarrollo Local** (`/vite-plugin-mime-types.ts`)
- Plugin de Vite personalizado
- Fuerza MIME types correctos en dev server
- Middleware para sitemap.xml y robots.txt

---

## 🎯 URLs Incluidas en Sitemap (20 páginas)

### Páginas Principales (Priority: 0.7-1.0)
1. `/` - Homepage (1.0)
2. `/servicios` - Servicios (0.9)
3. `/servicios/geo` - GEO (0.9)
4. `/servicios/ppc` - PPC en IA (0.9)
5. `/servicios/diseno-web` - Diseño Web (0.9)
6. `/servicios/seo` - SEO Avanzado (0.9)
7. `/blog` - Blog (0.8)
8. `/casos-exito` - Casos de Éxito (0.7)
9. `/nosotros` - Nosotros (0.7)
10. `/contacto` - Contacto (0.7)

### Artículos de Blog (Priority: 0.8)
11. `/blog/que-es-geo`
12. `/blog/marca-en-ia`
13. `/blog/auditoria-ia`
14. `/blog/contenido-citable`
15. `/blog/seo-vs-geo`
16. `/blog/searchgpt`
17. `/blog/5-errores`

### Páginas Legales (Priority: 0.3)
18. `/aviso-legal`
19. `/politica-privacidad`
20. `/terminos-servicio`

---

## 🧪 Verificación

### Opción 1: Script automático
```bash
chmod +x verify-sitemap.sh
./verify-sitemap.sh http://localhost:5173
# O en producción:
./verify-sitemap.sh https://geomarketingia.com
```

### Opción 2: Manual con curl
```bash
# Verificar MIME type de sitemap.xml
curl -I http://localhost:5173/sitemap.xml | grep -i content-type
# Debe mostrar: application/xml

# Verificar contenido
curl http://localhost:5173/sitemap.xml

# Verificar robots.txt
curl http://localhost:5173/robots.txt
```

### Opción 3: Validadores online
- **Google Search Console**: https://search.google.com/search-console
- **XML Sitemap Validator**: https://www.xml-sitemaps.com/validate-xml-sitemap.html
- **Robots.txt Tester**: https://support.google.com/webmasters/answer/6062598

---

## 🤖 Bots de IA Permitidos (GEO)

El robots.txt permite explícitamente estos user-agents:

- ✅ **ChatGPT-User** / **GPTBot** (OpenAI)
- ✅ **Google-Extended** (Bard/Gemini)
- ✅ **CCBot** (Common Crawl - usado por muchos LLMs)
- ✅ **anthropic-ai** / **Claude-Web** (Anthropic)
- ✅ **PerplexityBot** (Perplexity AI)
- ✅ **Applebot-Extended** (Apple Intelligence)
- ✅ **Omgilibot** (Omgili - agregador de contenido)

---

## ⚠️ IMPORTANTE: React Router vs Archivos Estáticos

### ❌ Problema Anterior
React Router interceptaba `/sitemap.xml` y `/robots.txt`, sirviendo la SPA en lugar del archivo estático.

### ✅ Solución Implementada
1. **Eliminadas** rutas de emergencia de `/src/app/routes.ts`
2. **Configurados** rewrites/redirects en todos los servidores
3. **Plugin de Vite** para desarrollo local
4. **Archivos en `/public`** se sirven directamente

---

## 📝 Checklist de Deployment

Antes de deployar, asegúrate de:

- [ ] Archivos `/public/sitemap.xml` y `/public/robots.txt` existen
- [ ] Configuración del servidor apropiada está presente:
  - [ ] Vercel: `vercel.json`
  - [ ] Netlify: `netlify.toml` + `public/_headers` + `public/_redirects`
  - [ ] Apache: `public/.htaccess`
- [ ] No hay rutas de React Router para `/sitemap.xml` o `/robots.txt`
- [ ] Build incluye la carpeta `public` (verificar `vite.config.ts`)
- [ ] Ejecutar verificación post-deployment

---

## 🎓 Referencias

- [Sitemaps Protocol](https://www.sitemaps.org/protocol.html)
- [Google Sitemap Guidelines](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)
- [Robots.txt Specification](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [GEO Best Practices](https://geomarketingia.com/blog/que-es-geo)

---

**Última actualización:** 10 de marzo de 2026  
**Sitio:** https://geomarketingia.com  
**Contacto:** info@geomarketingia.com
