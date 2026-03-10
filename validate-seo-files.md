# ✅ Checklist de Validación SEO/GEO

## 🎯 Validación Completa de Sitemap.xml y Robots.txt

### 📋 Pre-deployment Checklist

#### 1. Verificar Ubicación de Archivos
- [ ] `/public/sitemap.xml` existe
- [ ] `/public/robots.txt` existe
- [ ] NO hay `/src/app/pages/sitemap.tsx`
- [ ] NO hay `/src/app/pages/robots.tsx`
- [ ] NO hay rutas para sitemap/robots en `/src/app/routes.ts`

#### 2. Validar Sitemap.xml
- [ ] Contiene exactamente **20 URLs**
- [ ] Todas las URLs usan `https://geomarketingia.com`
- [ ] Fechas `<lastmod>` están en formato `YYYY-MM-DD`
- [ ] Artículos nuevos tienen fecha `2026-03-09`
- [ ] Prioridades asignadas correctamente (1.0 para home)
- [ ] Declaración XML correcta: `<?xml version="1.0" encoding="UTF-8"?>`
- [ ] Namespace correcto: `xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"`

#### 3. Validar Robots.txt
- [ ] Permite todos los bots: `User-agent: *` → `Allow: /`
- [ ] Incluye GPTBot (OpenAI)
- [ ] Incluye PerplexityBot (Perplexity AI)
- [ ] Incluye Claude-Web (Anthropic)
- [ ] Incluye Google-Extended (Gemini)
- [ ] Incluye anthropic-ai
- [ ] Incluye ChatGPT-User
- [ ] Incluye CCBot
- [ ] Referencia al sitemap: `Sitemap: https://geomarketingia.com/sitemap.xml`

#### 4. Testing de Accesibilidad
- [ ] `curl https://geomarketingia.com/sitemap.xml` retorna XML válido
- [ ] `curl https://geomarketingia.com/robots.txt` retorna texto plano
- [ ] Content-Type correcto (text/xml para sitemap, text/plain para robots)
- [ ] Status code 200 (no 404)
- [ ] No redirige a otra URL

---

## 🧪 Pruebas Post-Deployment

### Test 1: Validador de Sitemap XML
```
URL: https://www.xml-sitemaps.com/validate-xml-sitemap.html
Ingresar: https://geomarketingia.com/sitemap.xml

✅ Esperado:
- "Sitemap is valid"
- 20 URLs detectadas
- Sin errores de formato
```

### Test 2: Google Search Console
```
1. Ir a: https://search.google.com/search-console
2. Seleccionar propiedad: geomarketingia.com
3. Menú → Sitemaps
4. Enviar sitemap: https://geomarketingia.com/sitemap.xml

✅ Esperado:
- "Sitemap enviado correctamente"
- Estado: "Correcto"
- URLs detectadas: 20
```

### Test 3: Bing Webmaster Tools
```
1. Ir a: https://www.bing.com/webmasters
2. Seleccionar sitio: geomarketingia.com
3. Sitemaps → Enviar sitemap
4. URL: https://geomarketingia.com/sitemap.xml

✅ Esperado:
- "Sitemap añadido correctamente"
- URLs procesadas: 20
```

### Test 4: Robots.txt Tester (Google)
```
1. Google Search Console → Configuración → Robots.txt
2. Probar URL: https://geomarketingia.com/robots.txt

✅ Esperado:
- Archivo encontrado
- Sin errores de sintaxis
- Sitemap detectado
```

### Test 5: Verificación Manual de URLs
```bash
# Test desde terminal
curl -I https://geomarketingia.com/sitemap.xml
# Esperado: HTTP/2 200

curl -I https://geomarketingia.com/robots.txt  
# Esperado: HTTP/2 200

# Verificar contenido
curl https://geomarketingia.com/sitemap.xml | head -20
# Esperado: Ver declaración XML y primeras URLs

curl https://geomarketingia.com/robots.txt
# Esperado: Ver directivas de robots
```

---

## 🔍 Validación de Indexación por Bots de IA

### Verificar que los bots pueden acceder:

#### OpenAI (ChatGPT)
```
User-Agent: Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko); compatible; GPTBot/1.0; +https://openai.com/gptbot
```
- [ ] Robots.txt permite acceso
- [ ] Sitemap.xml accesible

#### Perplexity AI
```
User-Agent: PerplexityBot
```
- [ ] Robots.txt permite acceso
- [ ] Puede rastrear todas las páginas

#### Anthropic (Claude)
```
User-Agent: anthropic-ai
User-Agent: Claude-Web
```
- [ ] Robots.txt permite acceso
- [ ] Sin restricciones

#### Google Gemini
```
User-Agent: Google-Extended
```
- [ ] Robots.txt permite acceso
- [ ] Puede indexar para IA

---

## 📊 Métricas de Éxito

### Semana 1 Post-Deployment
- [ ] Google Search Console muestra sitemap procesado
- [ ] Bing Webmaster Tools confirma recepción
- [ ] Al menos 5 páginas indexadas en Google
- [ ] Al menos 3 páginas indexadas en Bing

### Mes 1 Post-Deployment
- [ ] 15+ páginas indexadas en Google
- [ ] 10+ páginas indexadas en Bing
- [ ] Sitio aparece en resultados de Perplexity para búsquedas de GEO
- [ ] Artículos de blog citados por ChatGPT

### Mes 3 Post-Deployment
- [ ] 20/20 páginas indexadas en Google
- [ ] Presencia en resultados de IA para términos clave
- [ ] Tráfico orgánico desde motores de búsqueda
- [ ] Referencias desde Perplexity/ChatGPT/Claude

---

## 🚨 Troubleshooting

### Problema: "Sitemap no encontrado (404)"
```
Posibles causas:
1. Archivo no está en /public
2. Vite no está sirviendo archivos estáticos
3. Hay una ruta en React Router interceptando la URL

Solución:
1. Verificar que /public/sitemap.xml existe
2. Eliminar cualquier ruta para /sitemap.xml en routes.ts
3. Rebuild del proyecto: npm run build
4. Limpiar caché del navegador
```

### Problema: "Robots.txt no accesible"
```
Posibles causas:
1. Archivo no está en /public
2. Configuración incorrecta del servidor

Solución:
1. Verificar que /public/robots.txt existe
2. Eliminar ruta para /robots.txt en routes.ts
3. Verificar configuración de Vite
```

### Problema: "Sitemap muestra HTML en lugar de XML"
```
Causa:
React Router está interceptando la ruta

Solución:
1. Eliminar { path: 'sitemap.xml', Component: Sitemap } de routes.ts
2. Eliminar /src/app/pages/sitemap.tsx
3. Verificar que solo existe /public/sitemap.xml
```

### Problema: "Google no procesa el sitemap"
```
Verificar:
1. XML válido (sin errores de sintaxis)
2. URLs absolutas (https://geomarketingia.com/...)
3. Formato de fechas correcto (YYYY-MM-DD)
4. Todas las URLs son accesibles (no 404)

Herramienta:
https://www.xml-sitemaps.com/validate-xml-sitemap.html
```

---

## 🎓 Best Practices

### ✅ DO (Hacer)
- ✅ Mantener sitemap.xml actualizado con cada nuevo contenido
- ✅ Usar fechas `<lastmod>` reales
- ✅ Asignar prioridades según importancia real
- ✅ Permitir todos los bots de IA relevantes
- ✅ Reenviar sitemap a Google después de actualizaciones importantes
- ✅ Monitorear indexación en Search Console semanalmente

### ❌ DON'T (No hacer)
- ❌ Generar sitemap dinámicamente con JavaScript
- ❌ Bloquear bots de IA (GPTBot, PerplexityBot, etc.)
- ❌ Poner fechas futuras en `<lastmod>`
- ❌ Incluir URLs con redirect 301/302
- ❌ Incluir URLs que retornen 404
- ❌ Duplicar URLs con y sin trailing slash
- ❌ Olvidar actualizar sitemap con nuevo contenido

---

## 📈 KPIs a Monitorear

### Google Search Console
```
- Páginas indexadas vs. páginas enviadas
- Cobertura del sitemap (% de URLs indexadas)
- Errores de rastreo
- Páginas bloqueadas por robots.txt
- Tiempo de respuesta del servidor
```

### Bing Webmaster Tools
```
- URLs en índice
- URLs rastreadas en últimos 30 días
- Errores de rastreo
- Sitemap procesado correctamente
```

### Métricas de IA
```
- Menciones en Perplexity AI (búsquedas de "GEO marketing")
- Referencias en ChatGPT
- Apariciones en Claude
- Visibilidad en Google Gemini
```

---

## 🔄 Calendario de Mantenimiento

### Semanal
- [ ] Revisar errores en Google Search Console
- [ ] Verificar accesibilidad de sitemap.xml

### Mensual
- [ ] Actualizar fechas `<lastmod>` de páginas modificadas
- [ ] Agregar nuevos artículos al sitemap
- [ ] Revisar indexación de nuevas páginas
- [ ] Verificar que robots.txt permite nuevos bots de IA

### Trimestral
- [ ] Auditoría completa de URLs en sitemap
- [ ] Eliminar URLs obsoletas
- [ ] Ajustar prioridades según rendimiento
- [ ] Revisar estrategia de frecuencia de actualización

---

## 📞 Contacto para Soporte

**Documentación oficial:**
- Vite: https://vitejs.dev/guide/assets.html
- Sitemaps.org: https://www.sitemaps.org/
- Google Search Central: https://developers.google.com/search

**Equipo GEO Marketing IA:**
- Email: info@geomarketingia.com
- Teléfono: +34 642 881 418
- Ubicación: Barcelona

---

**Última actualización:** 2026-03-10  
**Versión:** 1.0  
**Estado:** ✅ Producción Ready
