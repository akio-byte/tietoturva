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
        <div className="mb-12 glass border-red-500/30 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8 animate-in fade-in slide-in-from-top-4 duration-700">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center text-slate-950 shadow-xl shadow-red-500/20">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h4 className="text-red-400 font-black uppercase text-xs tracking-[0.2em] mb-1">Päivystävä Kriisivalvomo</h4>
              <p className="text-slate-300 text-sm font-medium">Jokainen minuutti on kriittinen. Eskaloi tilanne heti.</p>
            </div>
          </div>
          <a 
            href="tel:+358401234567" 
            className="w-full md:w-auto bg-red-500 hover:bg-red-400 text-slate-950 font-black px-10 py-5 rounded-2xl transition-all shadow-2xl shadow-red-500/20 text-center flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95"
          >
            SOITA NYT
          </a>
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
              {content.cta.text || "Tulossa"}
            </button>
            <p className="mt-4 text-xs text-slate-500 italic">Tämä osio on tällä hetkellä työn alla Lapland AI Labissa.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentPage;