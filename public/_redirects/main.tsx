# Redirects para Netlify
# Permite que React Router maneje todas las rutas excepto archivos estáticos

# Archivos estáticos se sirven directamente (no pasan por React Router)
/sitemap.xml  /sitemap.xml  200
/robots.txt   /robots.txt   200

# Todas las demás rutas van a index.html para React Router
/*  /index.html  200
