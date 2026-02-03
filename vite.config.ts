import path from 'path';
import type { Connect } from 'vite';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { handlePdfRequest } from './lib/pdf/server';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const pdfApiMiddleware: Connect.NextHandleFunction = (req, res, next) => {
      if (!req.url?.startsWith('/api/pdf')) {
        next();
        return;
      }
      void handlePdfRequest(req, res);
    };
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
        middlewareMode: false
      },
      plugins: [
        react(),
        {
          name: 'lapland-ai-lab-pdf-api',
          configureServer(server) {
            server.middlewares.use(pdfApiMiddleware);
          },
          configurePreviewServer(server) {
            server.middlewares.use(pdfApiMiddleware);
          }
        }
      ],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
