import type { IncomingMessage, ServerResponse } from 'http';
import { contentRegistry } from '../../contentRegistry';
import { renderPdfBytes } from './render';

const buildFilename = (slug: string) => `lapland-ai-lab_${slug}_v1.4.pdf`;

const sendJson = (res: ServerResponse, statusCode: number, payload: Record<string, string>) => {
  res.statusCode = statusCode;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(payload));
};

export const handlePdfRequest = async (req: IncomingMessage, res: ServerResponse) => {
  const requestUrl = new URL(req.url ?? '', 'http://localhost');
  const slug = requestUrl.searchParams.get('slug');

  if (!slug) {
    sendJson(res, 404, { error: 'Missing slug' });
    return;
  }

  const content = contentRegistry[slug];
  if (!content) {
    sendJson(res, 404, { error: 'Unknown slug' });
    return;
  }

  try {
    const pdfBytes = await renderPdfBytes(content);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="${buildFilename(slug)}"`);
    res.setHeader('Cache-Control', 'public, max-age=3600');
    res.end(Buffer.from(pdfBytes));
  } catch (error) {
    sendJson(res, 500, { error: 'Failed to render PDF' });
  }
};
