import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { viteMimeTypesPlugin } from './vite-plugin-mime-types'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    // Custom plugin to force correct MIME types for sitemap.xml and robots.txt
    viteMimeTypesPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],

  // Configure development server with correct MIME types
  server: {
    headers: {
      // These headers ensure correct MIME types in development
      // Production servers should use vercel.json, netlify.toml, .htaccess, or nginx.conf
    },
    fs: {
      // Allow serving files from the public directory
      strict: false,
    },
  },

  // Build configuration
  build: {
    outDir: 'dist',
    // Ensure public folder is copied correctly
    copyPublicDir: true,
  },
})