import React, { useEffect } from 'react';
import { CONTENT } from '../content/registry';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const renderMarkdownLite = (body: string): React.ReactNode => {
  const blocks = body.split(/\n\n+/).map((block, blockIndex) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    if (lines.length === 0) {
      return null;
    }
    const isList = lines.every((line) => line.startsWith('- '));
    if (isList) {
      return (
        <ul key={`list-${blockIndex}`} className="list-disc list-inside space-y-2 mb-4 text-slate-300">
          {lines.map((line, lineIndex) => (
            <li key={`item-${blockIndex}-${lineIndex}`}>{line.replace(/^-\s+/, '')}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={`paragraph-${blockIndex}`} className="mb-4 text-slate-300">
        {lines.join(' ')}
      </p>
    );
  });

  return blocks.filter((block): block is React.ReactNode => block !== null);
};

const PrintCyberBasics: React.FC = () => {
  const content = CONTENT['cyber-basics'];

  useEffect(() => {
    document.body.classList.add('print-view');
    return () => document.body.classList.remove('print-view');
  }, []);

  if (!content) {
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <SEO title={`${content.seo.title} (Tulostus)`} description={content.seo.description} />
      <Hero title={content.hero.title} subtitle={content.hero.subtitle} label="Tulostusversio" />
      <div className="print-hidden">
        <CTA label="Tulosta / Tallenna PDF" onClick={() => window.print()} />
      </div>
      <div className="space-y-16">
        {content.sections.map((section) => (
          <Section
            key={section.id}
            title={section.title}
            importanceTitle={section.importanceDesc ? 'Miksi tämä on tärkeää?' : undefined}
            importanceDesc={section.importanceDesc}
            checklist={section.checklist}
            colorClass={section.colorClass}
          >
            {renderMarkdownLite(section.body)}
          </Section>
        ))}
      </div>
    </div>
  );
};

export default PrintCyberBasics;
