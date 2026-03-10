# Configuración de Sitemap.xml y Robots.txt

## 📁 Arquitectura de Archivos Estáticos

Este proyecto utiliza **Vite + React Router**, donde los archivos en `/public` se sirven como **archivos estáticos** directamente en la raíz del dominio.

```
/public
├── sitemap.xml    → https://geomarketingia.com/sitemap.xml
└── robots.txt     → https://geomarketingia.com/robots.txt
```

### ⚙️ Cómo Funciona Vite

1. **Vite copia automáticamente** todos los archivos de `/public` a la raíz del dominio en producción
2. **NO requiere configuración adicional** en React Router
3. **Los archivos se sirven directamente** sin pasar por JavaScript
4. **Acceso directo:** `domain.com/sitemap.xml` y `domain.com/robots.txt`

---

## 🗺️ Sitemap.xml - Estructura Completa

### URLs Incluidas (20 páginas totales):

#### 🏠 Página Principal (1)
- `/` - Priority 1.0, Weekly

#### 🛠️ Servicios (5)
- `/servicios` - Priority 0.9
- `/servicios/geo` - Priority 0.9
- `/servicios/ppc` - Priority 0.8
- `/servicios/diseno-web` - Priority 0.8
- `/servicios/seo` - Priority 0.8

#### 🏢 Páginas Corporativas (3)
- `/casos-exito` - Priority 0.8
- `/nosotros` - Priority 0.7
- `/contacto` - Priority 0.9

#### 📝 Blog (8)
- `/blog` - Priority 0.9, Weekly
- `/blog/seo-vs-geo` - Priority 0.9 (Nuevo: 2026-03-09)
- `/blog/contenido-citable` - Priority 0.9 (Nuevo: 2026-03-09)
- `/blog/auditoria-ia` - Priority 0.9 (Nuevo: 2026-03-09)
- `/blog/marca-en-ia` - Priority 0.9 (Nuevo: 2026-03-09)
- `/blog/que-es-geo` - Priority 0.9 (Nuevo: 2026-03-09)
- `/blog/searchgpt` - Priority 0.8 (2026-02-15)
- `/blog/5-errores` - Priority 0.8 (2026-02-05)

#### ⚖️ Páginas Legales (3)
- `/politica-privacidad` - Priority 0.3, Yearly
- `/terminos-servicio` - Priority 0.3, Yearly
- `/aviso-legal` - Priority 0.3, Yearly

### 📊 Prioridades Explicadas

- **1.0** → Homepage (máxima prioridad)
- **0.9** → Páginas clave: Servicios principales, Blog, Contacto
- **0.8** → Servicios secundarios, Casos de Éxito, Artículos antiguos
- **0.7** → Página Nosotros
- **0.3** → Páginas legales (baja prioridad de indexación)

### 🔄 Frecuencia de Actualización

- **Weekly** → Homepage, Blog principal
- **Monthly** → Servicios, Artículos, Páginas corporativas
- **Yearly** → Páginas legales

---

## 🤖 Robots.txt - Configuración de Bots

### Bots de IA Permitidos Explícitamente:

#### OpenAI
- `GPTBot` - Bot de indexación de ChatGPT
- `ChatGPT-User` - Búsquedas de usuarios de ChatGPT

#### Anthropic
- `anthropic-ai` - Bot de indexación de Claude
- `Claude-Web` - Búsquedas web de Claude

#### Google
- `Googlebot` - Bot tradicional de Google
- `Google-Extended` - Bot para entrenamiento de IA (Gemini)

#### Otros
- `CCBot` - Common Crawl (usado por varios LLMs)
- `PerplexityBot` - Bot de Perplexity AI
- `Bingbot` - Bot de Microsoft Bing

### 🚫 Páginas Excluidas

```
Disallow: /404          # Página de error
Disallow: /*?*          # URLs con parámetros de query
```

### 🗺️ Referencia al Sitemap

```
Sitemap: https://geomarketingia.com/sitemap.xml
```

---

## 🔧 Mantenimiento y Actualización

### ✅ Cuándo Actualizar el Sitemap

1. **Nuevos artículos de blog** → Agregar URL con fecha actual
2. **Nuevas páginas de servicio** → Agregar con priority 0.8-0.9
3. **Cambios importantes** → Actualizar `<lastmod>` con fecha actual
4. **Eliminación de páginas** → Remover URL del sitemap

### 📝 Ejemplo: Agregar Nuevo Artículo de Blog

```xml
<url>
  <loc>https://geomarketingia.com/blog/nuevo-articulo</loc>
  <lastmod>2026-03-15</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.9</priority>
</url>
```

### 🔄 Pasos para Actualizar

1. Editar `/public/sitemap.xml` directamente
2. Actualizar fecha `<lastmod>` con formato `YYYY-MM-DD`
3. Guardar el archivo
4. El cambio se refleja inmediatamente en producción (no requiere rebuild)

---

## 🧪 Verificación y Testing

### Verificar que los archivos se sirven correctamente:

```bash
# Sitemap
curl https://geomarketingia.com/sitemap.xml

# Robots.txt
curl https://geomarketingia.com/robots.txt
```

### Herramientas de Validación:

1. **Google Search Console**
   - Enviar sitemap: https://geomarketingia.com/sitemap.xml
   - Verificar indexación de páginas

2. **Validador XML de Sitemap**
   - https://www.xml-sitemaps.com/validate-xml-sitemap.html

3. **Robots.txt Tester**
   - Google Search Console → Herramientas → Robots.txt

4. **Bing Webmaster Tools**
   - Enviar sitemap para indexación en Bing

---

## 🎯 Optimización SEO/GEO

### ✅ Configuración Actual

- ✅ **20 URLs completas** en sitemap.xml
- ✅ **Todos los bots de IA permitidos** (GPTBot, PerplexityBot, Claude, Gemini)
- ✅ **Prioridades correctamente asignadas**
- ✅ **Fechas actualizadas** (artículos nuevos: 2026-03-09)
- ✅ **Archivos estáticos** (sin pasar por JavaScript)
- ✅ **Formato XML válido**
- ✅ **Robots.txt optimizado para IA**

### 📈 Beneficios para GEO

1. **Perplexity AI** puede rastrear todo el contenido
2. **ChatGPT Search** tiene acceso completo
3. **Google Gemini** indexa para búsquedas con IA
4. **Claude** puede referenciar el sitio
5. **Bing Chat** integra el contenido

---

## ⚠️ Notas Importantes

1. **NO crear rutas en React Router** para `/sitemap.xml` o `/robots.txt`
2. **NO mover estos archivos** fuera de `/public`
3. **Editar directamente** los archivos XML/TXT (no usar componentes React)
4. **Vite sirve automáticamente** todo lo que esté en `/public`
5. **Los cambios son inmediatos** (no requieren rebuild del proyecto)

---

## 📚 Referencias

- [Sitemaps.org Protocol](https://www.sitemaps.org/protocol.html)
- [Google: Robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)
- [Vite: Static Asset Handling](https://vitejs.dev/guide/assets.html#the-public-directory)
- [OpenAI GPTBot Documentation](https://platform.openai.com/docs/gptbot)

---

**Última actualización:** 2026-03-10  
**Mantenedor:** GEO Marketing IA  
**Contacto:** info@geomarketingia.com
