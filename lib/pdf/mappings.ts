export type PdfButtonId = 'kyberperusteet-muistilista' | 'mobiiliturvan-pikaohje';

export interface PdfDocumentConfig {
  buttonId: PdfButtonId;
  slug: string;
  filename: string;
  label: string;
  fallbackRoute: string;
}

export const pdfButtonMap: Record<PdfButtonId, PdfDocumentConfig> = {
  'kyberperusteet-muistilista': {
    buttonId: 'kyberperusteet-muistilista',
    slug: 'kyberperusteet-muistilista',
    filename: 'lapland-ai-lab_kyberperusteet-muistilista_v1.4.pdf',
    label: 'Lataa Kyberperusteet-muistilista (PDF)',
    fallbackRoute: '/cyber-basics'
  },
  'mobiiliturvan-pikaohje': {
    buttonId: 'mobiiliturvan-pikaohje',
    slug: 'arctic-mobile-hardening',
    filename: 'lapland-ai-lab_arctic-mobile-hardening_v1.4.pdf',
    label: 'Mobiiliturvan pikaohje (A4)',
    fallbackRoute: '/mobile-security'
  }
};
