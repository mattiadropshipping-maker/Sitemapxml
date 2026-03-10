#!/bin/bash

# Script de verificación de sitemap.xml y robots.txt
# Verifica MIME types y accesibilidad

echo "🔍 VERIFICACIÓN DE SITEMAP.XML Y ROBOTS.TXT"
echo "==========================================="
echo ""

# Colores
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# URL base (ajustar según entorno)
BASE_URL="${1:-http://localhost:5173}"

echo "📍 URL Base: $BASE_URL"
echo ""

# Verificar sitemap.xml
echo "1️⃣  Verificando sitemap.xml..."
SITEMAP_RESPONSE=$(curl -s -I "$BASE_URL/sitemap.xml")
SITEMAP_CONTENT_TYPE=$(echo "$SITEMAP_RESPONSE" | grep -i "content-type" | cut -d' ' -f2- | tr -d '\r')

if [[ $SITEMAP_CONTENT_TYPE == *"application/xml"* ]]; then
  echo -e "${GREEN}✅ MIME Type correcto: $SITEMAP_CONTENT_TYPE${NC}"
else
  echo -e "${RED}❌ MIME Type incorrecto: $SITEMAP_CONTENT_TYPE${NC}"
  echo -e "${RED}   Esperado: application/xml${NC}"
fi

# Verificar que el XML es válido
echo ""
echo "2️⃣  Verificando contenido XML..."
SITEMAP_CONTENT=$(curl -s "$BASE_URL/sitemap.xml")

if [[ $SITEMAP_CONTENT == *"<?xml version"* ]] && [[ $SITEMAP_CONTENT == *"<urlset"* ]]; then
  echo -e "${GREEN}✅ Contenido XML válido${NC}"
  
  # Contar URLs
  URL_COUNT=$(echo "$SITEMAP_CONTENT" | grep -c "<loc>")
  echo -e "${GREEN}   URLs encontradas: $URL_COUNT${NC}"
else
  echo -e "${RED}❌ Contenido XML inválido${NC}"
fi

# Verificar robots.txt
echo ""
echo "3️⃣  Verificando robots.txt..."
ROBOTS_RESPONSE=$(curl -s -I "$BASE_URL/robots.txt")
ROBOTS_CONTENT_TYPE=$(echo "$ROBOTS_RESPONSE" | grep -i "content-type" | cut -d' ' -f2- | tr -d '\r')

if [[ $ROBOTS_CONTENT_TYPE == *"text/plain"* ]]; then
  echo -e "${GREEN}✅ MIME Type correcto: $ROBOTS_CONTENT_TYPE${NC}"
else
  echo -e "${YELLOW}⚠️  MIME Type: $ROBOTS_CONTENT_TYPE${NC}"
  echo -e "${YELLOW}   Esperado: text/plain${NC}"
fi

# Verificar referencia a sitemap en robots.txt
echo ""
echo "4️⃣  Verificando referencia a sitemap en robots.txt..."
ROBOTS_CONTENT=$(curl -s "$BASE_URL/robots.txt")

if [[ $ROBOTS_CONTENT == *"Sitemap:"* ]]; then
  echo -e "${GREEN}✅ Referencia a sitemap encontrada${NC}"
  SITEMAP_URL=$(echo "$ROBOTS_CONTENT" | grep "Sitemap:" | head -1)
  echo -e "${GREEN}   $SITEMAP_URL${NC}"
else
  echo -e "${RED}❌ Referencia a sitemap no encontrada${NC}"
fi

# Resumen
echo ""
echo "==========================================="
echo "📊 RESUMEN"
echo "==========================================="
echo ""
echo "Archivos verificados:"
echo "  • $BASE_URL/sitemap.xml"
echo "  • $BASE_URL/robots.txt"
echo ""
echo "Para verificar en producción, ejecuta:"
echo "  ./verify-sitemap.sh https://geomarketingia.com"
echo ""
