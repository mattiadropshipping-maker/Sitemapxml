import type { Plugin } from 'vite';

/**
 * Vite Plugin: Force Correct MIME Types for SEO/GEO Files
 * 
 * This plugin ensures sitemap.xml is served with application/xml
 * and robots.txt with text/plain in development mode.
 * 
 * In production, use platform-specific configs:
 * - Vercel: vercel.json
 * - Netlify: netlify.toml or _headers
 * - Cloudflare Pages: _headers
 * - Apache: .htaccess
 * - Nginx: nginx.conf
 */
export function viteMimeTypesPlugin(): Plugin {
  return {
    name: 'vite-plugin-mime-types',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url || '';

        // Force application/xml for sitemap.xml (CRITICAL for SEO/GEO)
        if (url === '/sitemap.xml' || url.startsWith('/sitemap.xml?')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
          res.setHeader('X-Content-Type-Options', 'nosniff');
        }

        // Force text/plain for robots.txt
        if (url === '/robots.txt' || url.startsWith('/robots.txt?')) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.setHeader('Cache-Control', 'public, max-age=3600, must-revalidate');
          res.setHeader('X-Content-Type-Options', 'nosniff');
        }

        next();
      });
    },
  };
}
