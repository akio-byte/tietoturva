import React from 'react';
import { useParams, Navigate, useLocation } from 'react-router-dom';
import { SEO, Hero, Section, CTA } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const ContentPage: React.FC = () => {
  const { slug: paramsSlug } = useParams<{ slug: string }>();
  const location = useLocation();
  
  // Etsitään slug joko urlista tai suorasta polusta
  const slug = paramsSlug || location.pathname.substring(1).split('/').pop() || "";
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
      
      {slug === 'incident-response' && (
        <div className="mb-12 glass border-red-500/30 p-6 rounded-2xl flex items-center gap-6 animate-pulse">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-slate-950">
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="text-red-400 font-black uppercase text-xs tracking-widest">Aikakriittinen varoitus</h4>
            <p className="text-slate-300 text-sm font-medium">Poikkeustilanteessa jokainen minuutti ratkaisee. Toimi nyt, analysoi myöhemmin.</p>
          </div>
        </div>
      )}

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
            slug={slug}
            colorClass={idx % 2 === 0 ? "bg-emerald-500" : "bg-blue-500"}
          >
            {section.body}
          </Section>
        ))}

        <Section 
          title="Tärkeimmät toimenpiteet" 
          checklist={content.checklist}
          slug={slug}
          colorClass="bg-purple-500"
        >
          Käy läpi tämä lista ja kuittaa tehtävät, kun olet varmistanut ne organisaatiossasi. Tilasi tallentuu automaattisesti tähän selaimeen.
        </Section>

        {content.cta.route ? (
          <CTA label={content.cta.text} link={content.cta.route} />
        ) : (
          <div className="text-center py-10 opacity-50 grayscale">
            <button disabled className="bg-slate-800 text-slate-400 font-bold px-10 py-5 rounded-full cursor-not-allowed">
              {content.cta.text} (Tulossa)
            </button>
            <p className="mt-4 text-xs text-slate-500 italic">Tämä osio on tällä hetkellä työn alla Lapland AI Labissa.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;