import { contentRegistry } from '../../contentRegistry';
import { renderPdfBytes } from './render';
import type { PdfDocumentConfig } from './mappings';

const buildApiUrl = (slug: string) => {
  const url = new URL('/api/pdf', window.location.origin);
  url.searchParams.set('slug', slug);
  return url.toString();
};

const downloadBlob = (blob: Blob, filename: string) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = filename;
  anchor.rel = 'noopener';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const tryApiDownload = async (slug: string, filename: string): Promise<boolean> => {
  try {
    const response = await fetch(buildApiUrl(slug));
    if (!response.ok) {
      return false;
    }
    const blob = await response.blob();
    if (blob.type !== 'application/pdf') {
      return false;
    }
    downloadBlob(blob, filename);
    return true;
  } catch {
    return false;
  }
};

export const downloadPdfWithFallback = async (config: PdfDocumentConfig): Promise<'downloaded' | 'opened-guide'> => {
  const apiDownloaded = await tryApiDownload(config.slug, config.filename);
  if (apiDownloaded) {
    return 'downloaded';
  }

  const content = contentRegistry[config.slug];
  if (!content) {
    return 'opened-guide';
  }

  try {
    const pdfBytes = await renderPdfBytes(content);
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    downloadBlob(blob, config.filename);
    return 'downloaded';
  } catch {
    return 'opened-guide';
  }
};
