
import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const ContentPage: React.FC = () => {
  const { slug: paramsSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  // Use the slug from URL params or infer it from the pathname (e.g., /incident-response)
  const slug = paramsSlug || location.pathname.substring(1);
  const content = contentRegistry[slug];

  if (!content) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title={content.seo.title} 
        description={content.seo.description} 
      />
      <Hero 
        title={content.hero.title}
        subtitle={content.hero.subtitle}
        label={`Tietoturvasyväsukellus | ${content.category.toUpperCase()}`}
      />

      <div className="space-y-12">
        {content.sections.map((section, idx) => (
          <Section 
            key={idx}
            title={section.title}
            colorClass={idx % 2 === 0 ? "bg-emerald-500" : "bg-blue-500"}
          >
            {section.body}
          </Section>
        ))}

        <Section 
          title="Toimenpidelista" 
          checklist={content.checklist}
          colorClass="bg-purple-500"
        >
          Seuraa näitä askeleita varmistaaksesi aihealueen turvallisuuden organisaatiossasi.
        </Section>

        {content.cta.route ? (
          <CTA label={content.cta.text} link={content.cta.route} />
        ) : (
          <div className="py-10 border-t border-slate-800 mt-20">
            <p className="text-center text-slate-500 text-sm italic">Tämä on itsenäinen sisältöpaketti osana Lapland AI Labin tietoturvaopasta.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;
