# Headers para Netlify y Cloudflare Pages
# Asegura MIME types correctos para SEO/GEO

/sitemap.xml
  Content-Type: application/xml; charset=utf-8
  X-Content-Type-Options: nosniff
  Cache-Control: public, max-age=3600, must-revalidate

/robots.txt
  Content-Type: text/plain; charset=utf-8
  X-Content-Type-Options: nosniff
  Cache-Control: public, max-age=3600, must-revalidate

/*
  X-Frame-Options: DENY
  X-XSS-Protection: 1; mode=block
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin
