import React from 'react';
import { CONTENT } from '../content/registry';
import { SEO, Hero, Section, CTA } from './Shared';

interface ContentPageProps {
  slug: string;
}

const renderMarkdownLite = (body: string): React.ReactNode => {
  const blocks = body.split(/\n\n+/).map((block, blockIndex) => {
    const lines = block.split('\n').map((line) => line.trim()).filter(Boolean);
    if (lines.length === 0) {
      return null;
    }
    const isList = lines.every((line) => line.startsWith('- '));
    if (isList) {
      return (
        <ul key={`list-${blockIndex}`} className="list-disc list-inside space-y-2 mb-4">
          {lines.map((line, lineIndex) => (
            <li key={`item-${blockIndex}-${lineIndex}`}>{line.replace(/^-\s+/, '')}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={`paragraph-${blockIndex}`} className="mb-4">
        {lines.join(' ')}
      </p>
    );
  });

  return blocks.filter((block): block is React.ReactNode => block !== null);
};

const ContentPage: React.FC<ContentPageProps> = ({ slug }) => {
  const content = CONTENT[slug];

  if (!content) {
    return (
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <SEO title="Sivua ei löytynyt" description="Pyydettyä sisältöä ei löytynyt." />
        <Hero
          title="Sisältö puuttuu"
          subtitle="Tätä sisältöpakettia ei ole vielä lisätty."
        />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title={content.seo.title} description={content.seo.description} />
      <Hero title={content.hero.title} subtitle={content.hero.subtitle} label={content.hero.label} />
      <div className="space-y-12">
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
        {content.cta && content.cta.link?.startsWith('/') ? (
          <CTA label={content.cta.label} link={content.cta.link} />
        ) : null}
      </div>
    </div>
  );
};

export default ContentPage;
