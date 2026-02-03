import { PDFDocument, StandardFonts } from 'pdf-lib';
import type { PDFFont, PDFPage, RGB } from 'pdf-lib';
import type { ContentItem } from '../../contentRegistry';
import { PDF_BRAND, PDF_LAYOUT, PDF_VERSION_TEXT } from './template';

const SECTION_TITLE_SIZE = 15;
const BODY_TEXT_SIZE = 11.5;
const SUBTITLE_SIZE = 12.5;
const TITLE_SIZE = 24;
const CHECKLIST_SIZE = 11;
const CHECKBOX_SIZE = 8;
const CHECKBOX_GAP = 6;
const CTA_SIZE = 11.5;

const FOOTER_SIZE = 9;
const PAGE_NUMBER_SIZE = 8.5;

const getAvailableWidth = () => PDF_LAYOUT.page.width - PDF_LAYOUT.margin.left - PDF_LAYOUT.margin.right;

const wrapText = (text: string, maxWidth: number, font: PDFFont, size: number): string[] => {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let currentLine = '';

  for (const word of words) {
    const candidate = currentLine ? `${currentLine} ${word}` : word;
    const candidateWidth = font.widthOfTextAtSize(candidate, size);
    if (candidateWidth <= maxWidth) {
      currentLine = candidate;
    } else {
      if (currentLine) {
        lines.push(currentLine);
      }
      currentLine = word;
    }
  }

  if (currentLine) {
    lines.push(currentLine);
  }

  return lines;
};

const drawHeader = (page: PDFPage, fonts: { regular: PDFFont; bold: PDFFont }) => {
  const { width, height } = PDF_LAYOUT.page;
  const iconSize = 30;
  const iconX = PDF_LAYOUT.margin.left;
  const iconY = height - PDF_LAYOUT.margin.top + 6;

  page.drawRectangle({
    x: iconX,
    y: iconY,
    width: iconSize,
    height: iconSize,
    color: PDF_BRAND.accentColor
  });

  page.drawText('LAIL', {
    x: iconX + 5,
    y: iconY + 10,
    size: 9,
    font: fonts.bold,
    color: PDF_BRAND.textColor
  });

  page.drawText(PDF_BRAND.name, {
    x: iconX + iconSize + 12,
    y: iconY + 12,
    size: 14,
    font: fonts.bold,
    color: PDF_BRAND.textColor
  });
};

const drawFooter = (page: PDFPage, fonts: { regular: PDFFont; bold: PDFFont }, pageNumber: number, pageCount: number) => {
  const { width } = PDF_LAYOUT.page;
  const footerY = PDF_LAYOUT.margin.bottom - 28;
  const leftX = PDF_LAYOUT.margin.left;

  page.drawText(`${PDF_BRAND.footerLine} • ${PDF_BRAND.contactEmail} • ${PDF_BRAND.contactX}`, {
    x: leftX,
    y: footerY + 14,
    size: FOOTER_SIZE,
    font: fonts.regular,
    color: PDF_BRAND.mutedTextColor,
    maxWidth: width - PDF_LAYOUT.margin.left - PDF_LAYOUT.margin.right - 80
  });

  page.drawText(PDF_VERSION_TEXT, {
    x: leftX,
    y: footerY,
    size: FOOTER_SIZE,
    font: fonts.regular,
    color: PDF_BRAND.mutedTextColor
  });

  page.drawText(`Sivu ${pageNumber} / ${pageCount}`, {
    x: width - PDF_LAYOUT.margin.right - 50,
    y: footerY,
    size: PAGE_NUMBER_SIZE,
    font: fonts.bold,
    color: PDF_BRAND.mutedTextColor
  });
};

const drawLines = (page: PDFPage, lines: string[], font: PDFFont, fontSize: number, color: RGB, startX: number, startY: number, lineHeight: number) => {
  let y = startY;
  lines.forEach((line) => {
    page.drawText(line, {
      x: startX,
      y,
      size: fontSize,
      font,
      color
    });
    y -= lineHeight;
  });
  return y;
};

export const renderPdfBytes = async (content: ContentItem): Promise<Uint8Array> => {
  const pdfDoc = await PDFDocument.create();
  const regularFont = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const boldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

  const fonts = { regular: regularFont, bold: boldFont };
  const pages: PDFPage[] = [];
  const lineHeight = BODY_TEXT_SIZE + PDF_LAYOUT.lineGap;

  let page = pdfDoc.addPage([PDF_LAYOUT.page.width, PDF_LAYOUT.page.height]);
  pages.push(page);
  drawHeader(page, fonts);

  let cursorY = PDF_LAYOUT.page.height - PDF_LAYOUT.margin.top - PDF_LAYOUT.headerHeight;
  const availableWidth = getAvailableWidth();

  const addPage = () => {
    page = pdfDoc.addPage([PDF_LAYOUT.page.width, PDF_LAYOUT.page.height]);
    pages.push(page);
    drawHeader(page, fonts);
    cursorY = PDF_LAYOUT.page.height - PDF_LAYOUT.margin.top - PDF_LAYOUT.headerHeight;
  };

  const ensureSpace = (heightNeeded: number) => {
    if (cursorY - heightNeeded < PDF_LAYOUT.margin.bottom + PDF_LAYOUT.footerHeight) {
      addPage();
    }
  };

  const drawParagraph = (text: string, font: PDFFont, fontSize: number, color: RGB) => {
    const paragraphs = text.split('\n').map((paragraph) => paragraph.trim()).filter(Boolean);
    paragraphs.forEach((paragraph, index) => {
      const lines = wrapText(paragraph, availableWidth, font, fontSize);
      const paragraphHeight = lines.length * (fontSize + PDF_LAYOUT.lineGap);
      ensureSpace(paragraphHeight + lineHeight);
      cursorY = drawLines(page, lines, font, fontSize, color, PDF_LAYOUT.margin.left, cursorY, fontSize + PDF_LAYOUT.lineGap);
      if (index < paragraphs.length - 1) {
        cursorY -= lineHeight * 0.5;
      }
    });
  };

  const drawSectionTitle = (title: string) => {
    ensureSpace(SECTION_TITLE_SIZE + lineHeight);
    page.drawText(title, {
      x: PDF_LAYOUT.margin.left,
      y: cursorY,
      size: SECTION_TITLE_SIZE,
      font: boldFont,
      color: PDF_BRAND.textColor
    });
    cursorY -= SECTION_TITLE_SIZE + PDF_LAYOUT.lineGap;
  };

  const drawChecklist = (items: string[]) => {
    drawSectionTitle('Tarkistuslista');
    items.forEach((item) => {
      const textStartX = PDF_LAYOUT.margin.left + CHECKBOX_SIZE + CHECKBOX_GAP;
      const textWidth = availableWidth - CHECKBOX_SIZE - CHECKBOX_GAP;
      const lines = wrapText(item, textWidth, regularFont, CHECKLIST_SIZE);
      const listHeight = lines.length * (CHECKLIST_SIZE + PDF_LAYOUT.lineGap);
      ensureSpace(listHeight + lineHeight);
      page.drawRectangle({
        x: PDF_LAYOUT.margin.left,
        y: cursorY + 2,
        width: CHECKBOX_SIZE,
        height: CHECKBOX_SIZE,
        borderColor: PDF_BRAND.textColor,
        borderWidth: 1
      });
      cursorY = drawLines(page, lines, regularFont, CHECKLIST_SIZE, PDF_BRAND.textColor, textStartX, cursorY, CHECKLIST_SIZE + PDF_LAYOUT.lineGap);
    });
  };

  drawParagraph(content.hero.title, boldFont, TITLE_SIZE, PDF_BRAND.textColor);
  cursorY -= 4;
  drawParagraph(content.hero.subtitle, regularFont, SUBTITLE_SIZE, PDF_BRAND.mutedTextColor);
  cursorY -= lineHeight;

  content.sections.forEach((section) => {
    drawSectionTitle(section.title);
    drawParagraph(section.body, regularFont, BODY_TEXT_SIZE, PDF_BRAND.textColor);
    cursorY -= lineHeight;
  });

  if (content.checklist.length > 0) {
    drawChecklist(content.checklist);
    cursorY -= lineHeight;
  }

  if (content.cta.text) {
    drawSectionTitle('Toimintaehdotus');
    drawParagraph(content.cta.text, boldFont, CTA_SIZE, PDF_BRAND.textColor);
    if (content.cta.route) {
      drawParagraph(`Reitti: ${content.cta.route}`, regularFont, CTA_SIZE, PDF_BRAND.mutedTextColor);
    }
  }

  pages.forEach((pageItem, index) => {
    drawFooter(pageItem, fonts, index + 1, pages.length);
  });

  return pdfDoc.save();
};
