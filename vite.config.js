import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    // lucide-react has ~1600+ icons; pre-bundling all of them causes V8 Zone OOM.
    // Exclude it so Vite handles it via native ESM instead.
    include: ['react', 'react-dom'],
    exclude: ['lucide-react'],
  },
  server: {
    hmr: true,
  },
  build: {
    sourcemap: false,
  },
})
