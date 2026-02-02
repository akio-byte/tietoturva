import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { GoogleGenAI } from '@google/genai';
import type { IncomingMessage, ServerResponse } from 'node:http';

type AiRequestBody = {
  message: string;
  systemInstruction?: string;
  temperature?: number;
  model?: string;
};

const readJsonBody = (req: IncomingMessage): Promise<unknown> => new Promise((resolve, reject) => {
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });
  req.on('end', () => {
    if (!body) {
      resolve({});
      return;
    }
    try {
      resolve(JSON.parse(body));
    } catch (error) {
      reject(error);
    }
  });
  req.on('error', reject);
});

const sendJson = (res: ServerResponse, status: number, payload: Record<string, unknown>) => {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

const handleAiRequest = async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method !== 'POST') {
    sendJson(res, 405, { error: 'Method Not Allowed' });
    return;
  }

  const apiKey = process.env.GEMINI_API_KEY ?? process.env.API_KEY;
  if (!apiKey) {
    sendJson(res, 500, { error: 'Missing GEMINI_API_KEY' });
    return;
  }

  let body: unknown;
  try {
    body = await readJsonBody(req);
  } catch {
    sendJson(res, 400, { error: 'Invalid JSON body' });
    return;
  }

  if (!body || typeof body !== 'object' || Array.isArray(body)) {
    sendJson(res, 400, { error: 'Invalid request body' });
    return;
  }

  const { message, systemInstruction, temperature, model } = body as Record<string, unknown>;
  if (typeof message !== 'string' || !message.trim()) {
    sendJson(res, 400, { error: 'Message is required' });
    return;
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const chat = ai.chats.create({
      model: typeof model === 'string' && model.trim() ? model : 'gemini-3-flash-preview',
      config: {
        systemInstruction: typeof systemInstruction === 'string' ? systemInstruction : undefined,
        temperature: typeof temperature === 'number' ? temperature : undefined,
      },
    });
    const result = await chat.sendMessage({ message });
    sendJson(res, 200, { text: result.text ?? '' });
  } catch (error) {
    console.error(error);
    sendJson(res, 500, { error: 'AI request failed' });
  }
};

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    Object.assign(process.env, env);
    const aiProxyPlugin = (): Plugin => ({
      name: 'ai-proxy',
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/api/ai')) {
            await handleAiRequest(req, res);
            return;
          }
          next();
        });
      },
      configurePreviewServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url?.startsWith('/api/ai')) {
            await handleAiRequest(req, res);
            return;
          }
          next();
        });
      },
    });
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), aiProxyPlugin()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
