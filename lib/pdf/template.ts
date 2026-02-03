import { rgb } from 'pdf-lib';

export const PDF_VERSION_TEXT = 'Versio 1.4 (Expanded Content Edition) — Päivitetty helmikuussa 2026';

export const PDF_BRAND = {
  name: 'Lapland AI Lab',
  footerLine: '© 2026 Lapland AI Lab',
  contactEmail: 'info@laplandailab.fi',
  contactX: 'X: @laplandailab',
  accentColor: rgb(0.06, 0.78, 0.64),
  textColor: rgb(0.08, 0.12, 0.2),
  mutedTextColor: rgb(0.4, 0.45, 0.52)
};

export const PDF_LAYOUT = {
  page: {
    width: 595.28,
    height: 841.89
  },
  margin: {
    top: 64,
    bottom: 64,
    left: 56,
    right: 56
  },
  headerHeight: 48,
  footerHeight: 56,
  lineGap: 6
};
