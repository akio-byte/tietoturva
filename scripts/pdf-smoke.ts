import { renderPdfBytes } from '../lib/pdf/render';

const sampleContent = {
  slug: 'smoke-test',
  category: 'kyber',
  featured: false,
  navLabel: 'PDF Smoke',
  seo: { title: 'PDF Smoke', description: 'PDF smoke test' },
  hero: { title: 'PDF Smoke Test', subtitle: 'Testataan PDF-renderöinti' },
  sections: [
    { title: 'Osio', body: 'Tämä on testiosio PDF-renderöinnille.' }
  ],
  checklist: ['Testi 1', 'Testi 2'],
  cta: { text: 'Lue lisää', route: '/content/smoke-test' }
};

const run = async () => {
  const pdfBytes = await renderPdfBytes(sampleContent);
  if (!pdfBytes || pdfBytes.length === 0) {
    throw new Error('PDF smoke test failed: empty buffer');
  }
  console.log(`PDF smoke test ok (${pdfBytes.length} bytes)`);
};

run().catch((error) => {
  console.error(error);
  process.exit(1);
});
