import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// In dev e su Vercel l'app vive sulla root.
// Su GitHub Pages serve il prefisso /<repo>/ — passato come BASE_PATH env.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  base,
  plugins: [react(), tailwindcss()],
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
});
