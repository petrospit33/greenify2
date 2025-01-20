import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    react(),
    copy({
      targets: [
        { src: resolve(__dirname, 'static/*'), dest: resolve(__dirname, 'dist') }, // Ensure the destination path is correctly resolved
      ],
      hook: 'writeBundle', // or 'build.end' if 'writeBundle' causes issues
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

