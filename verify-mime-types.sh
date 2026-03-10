#!/bin/bash

# Script de Verificación de MIME Types para GEO Marketing IA
# Verifica que sitemap.xml y robots.txt tengan los Content-Type correctos

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 VERIFICACIÓN DE MIME TYPES - GEO Marketing IA"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# URL base (cambiar según ambiente)
if [ "$1" == "prod" ]; then
    BASE_URL="https://geomarketingia.com"
    echo "🌐 Ambiente: PRODUCCIÓN"
elif [ "$1" == "local" ]; then
    BASE_URL="http://localhost:5173"
    echo "💻 Ambiente: DESARROLLO LOCAL"
else
    BASE_URL="https://geomarketingia.com"
    echo "🌐 Ambiente: PRODUCCIÓN (default)"
fi

echo "🔗 URL Base: $BASE_URL"
echo ""

# Función para verificar Content-Type
check_content_type() {
    local url=$1
    local expected=$2
    local file_name=$3
    
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📄 Verificando: $file_name"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    
    # Obtener headers
    response=$(curl -s -I "$url" 2>&1)
    
    # Verificar si curl tuvo éxito
    if [ $? -ne 0 ]; then
        echo -e "${RED}❌ ERROR: No se pudo conectar a $url${NC}"
        echo "   Verifica que el servidor esté corriendo"
        return 1
    fi
    
    # Extraer Content-Type
    content_type=$(echo "$response" | grep -i "content-type:" | cut -d' ' -f2- | tr -d '\r')
    
    # Extraer Status Code
    status_code=$(echo "$response" | head -n 1 | cut -d' ' -f2)
    
    echo "🔗 URL: $url"
    echo "📊 Status Code: $status_code"
    echo "📋 Content-Type: $content_type"
    echo ""
    
    # Verificar Status Code
    if [ "$status_code" != "200" ]; then
        echo -e "${RED}❌ FALLO: Status code incorrecto${NC}"
        echo "   Esperado: 200"
        echo "   Recibido: $status_code"
        return 1
    fi
    
    # Verificar Content-Type
    if [[ $content_type == *"$expected"* ]]; then
        echo -e "${GREEN}✅ CORRECTO: Content-Type es válido${NC}"
        echo -e "${GREEN}✅ SEO/GEO: Optimizado${NC}"
        return 0
    else
        echo -e "${RED}❌ FALLO: Content-Type incorrecto${NC}"
        echo "   Esperado: $expected"
        echo "   Recibido: $content_type"
        echo ""
        echo -e "${YELLOW}🔧 Acciones recomendadas:${NC}"
        echo "   1. Verificar configuración del servidor"
        echo "   2. Limpiar caché de CDN"
        echo "   3. Revisar archivos de configuración:"
        echo "      - vercel.json (Vercel)"
        echo "      - netlify.toml (Netlify)"
        echo "      - .htaccess (Apache)"
        echo "      - nginx.conf (Nginx)"
        return 1
    fi
}

# Test 1: Sitemap.xml
echo ""
check_content_type "$BASE_URL/sitemap.xml" "application/xml" "sitemap.xml"
SITEMAP_RESULT=$?

echo ""
echo ""

# Test 2: Robots.txt
check_content_type "$BASE_URL/robots.txt" "text/plain" "robots.txt"
ROBOTS_RESULT=$?

echo ""
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📊 RESUMEN DE VERIFICACIÓN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

if [ $SITEMAP_RESULT -eq 0 ]; then
    echo -e "${GREEN}✅ sitemap.xml: CORRECTO${NC}"
else
    echo -e "${RED}❌ sitemap.xml: FALLO${NC}"
fi

if [ $ROBOTS_RESULT -eq 0 ]; then
    echo -e "${GREEN}✅ robots.txt: CORRECTO${NC}"
else
    echo -e "${RED}❌ robots.txt: FALLO${NC}"
fi

echo ""

# Resultado final
if [ $SITEMAP_RESULT -eq 0 ] && [ $ROBOTS_RESULT -eq 0 ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${GREEN}🎉 ÉXITO: Todos los MIME types son correctos${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "✅ Tu sitio está optimizado para SEO/GEO"
    echo "✅ Google puede indexar correctamente"
    echo "✅ Bing puede procesar el sitemap"
    echo "✅ Bots de IA (GPTBot, PerplexityBot, etc.) tienen acceso"
    echo ""
    echo "🚀 Próximos pasos:"
    echo "   1. Enviar sitemap a Google Search Console"
    echo "   2. Enviar sitemap a Bing Webmaster Tools"
    echo "   3. Validar XML en: https://www.xml-sitemaps.com/validate-xml-sitemap.html"
    echo ""
    exit 0
else
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo -e "${RED}❌ FALLO: Hay errores en los MIME types${NC}"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo -e "${YELLOW}🔧 SOLUCIONES RECOMENDADAS:${NC}"
    echo ""
    echo "1. Verificar configuración del servidor:"
    echo "   - Vercel: Revisar vercel.json"
    echo "   - Netlify: Revisar netlify.toml y _headers"
    echo "   - Apache: Verificar .htaccess y mod_headers"
    echo "   - Nginx: Verificar nginx.conf"
    echo ""
    echo "2. Limpiar caché:"
    echo "   curl -H \"Cache-Control: no-cache\" -I $BASE_URL/sitemap.xml"
    echo ""
    echo "3. Verificar que los archivos existen:"
    echo "   ls -la public/sitemap.xml public/robots.txt"
    echo ""
    echo "4. Consultar documentación:"
    echo "   cat MIME-TYPE-FIX.md"
    echo ""
    exit 1
fi
