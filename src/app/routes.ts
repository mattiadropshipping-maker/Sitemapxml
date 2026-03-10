import { createBrowserRouter } from 'react-router';

// Layout
import { RootLayout } from './pages/root-layout';

// Pages
import { Home } from './pages/home';
import { Servicios } from './pages/servicios';
import { BlogPage } from './pages/blog';
import { CasosExito } from './pages/casos-exito';
import { Nosotros } from './pages/nosotros';
import { Contacto } from './pages/contacto';
import { NotFound } from './pages/not-found';

// Service Pages
import { ServicioGEO } from './pages/servicios/geo';
import { ServicioPPC } from './pages/servicios/ppc';
import { ServicioDisenoWeb } from './pages/servicios/diseno-web';
import { ServicioSEO } from './pages/servicios/seo';

// Blog Articles
import { ArticuloQueEsGEO } from './pages/blog/que-es-geo';
import { ArticuloMarcaEnIA } from './pages/blog/marca-en-ia';
import { ArticuloAuditoriaIA } from './pages/blog/auditoria-ia';
import { ArticuloContenidoCitable } from './pages/blog/contenido-citable';
import { ArticuloSEOvsGEO } from './pages/blog/seo-vs-geo';
import { ArticuloSearchGPT } from './pages/blog/searchgpt';
import { Articulo5Errores } from './pages/blog/5-errores';

// Legal Pages
import { AvisoLegal } from './pages/legal/aviso-legal';
import { PoliticaPrivacidad } from './pages/legal/politica-privacidad';
import { TerminosServicio } from './pages/legal/terminos-servicio';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      { path: 'servicios', Component: Servicios },
      { path: 'servicios/geo', Component: ServicioGEO },
      { path: 'servicios/ppc', Component: ServicioPPC },
      { path: 'servicios/diseno-web', Component: ServicioDisenoWeb },
      { path: 'servicios/seo', Component: ServicioSEO },
      { path: 'blog', Component: BlogPage },
      { path: 'blog/que-es-geo', Component: ArticuloQueEsGEO },
      { path: 'blog/marca-en-ia', Component: ArticuloMarcaEnIA },
      { path: 'blog/auditoria-ia', Component: ArticuloAuditoriaIA },
      { path: 'blog/contenido-citable', Component: ArticuloContenidoCitable },
      { path: 'blog/seo-vs-geo', Component: ArticuloSEOvsGEO },
      { path: 'blog/searchgpt', Component: ArticuloSearchGPT },
      { path: 'blog/5-errores', Component: Articulo5Errores },
      { path: 'casos-exito', Component: CasosExito },
      { path: 'nosotros', Component: Nosotros },
      { path: 'contacto', Component: Contacto },
      { path: 'aviso-legal', Component: AvisoLegal },
      { path: 'politica-privacidad', Component: PoliticaPrivacidad },
      { path: 'terminos-servicio', Component: TerminosServicio },
      { path: '*', Component: NotFound },
    ],
  },
]);