
import React, { useEffect } from 'react';

interface SeoProps {
  title: string;
  description: string;
}

export const SEO: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = description;
      document.head.appendChild(meta);
    }
  }, [title, description]);
  return null;
};

export const Hero: React.FC<{ title: string; subtitle: string; label?: string }> = ({ title, subtitle, label }) => (
  <div className="mb-20">
    {label && <span className="text-emerald-400 font-bold tracking-widest uppercase text-sm">{label}</span>}
    <h1 className="text-5xl md:text-6xl font-extrabold text-white mt-4 mb-6 tracking-tight leading-tight">
      {title}
    </h1>
    <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
      {subtitle}
    </p>
  </div>
);

export const Section: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  importanceTitle?: string;
  importanceDesc?: string;
  checklist?: string[];
  colorClass?: string;
}> = ({ title, children, importanceTitle, importanceDesc, checklist, colorClass = "bg-emerald-500" }) => (
  <section className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
      <span className={`w-2 h-8 ${colorClass} rounded-full mr-4`}></span>
      {title}
    </h2>
    <div className="glass p-8 rounded-3xl border border-slate-800 mb-8">
      <div className="text-slate-300 leading-relaxed mb-8">
        {children}
      </div>
      
      {importanceTitle && importanceDesc && (
        <div className="bg-indigo-900/30 border border-indigo-500/30 p-8 rounded-2xl mb-8">
          <h3 className="text-indigo-400 font-bold mb-4 text-lg">Miksi tämä on tärkeää?</h3>
          <p className="text-slate-300">
            {importanceDesc}
          </p>
        </div>
      )}

      {checklist && (
        <div>
          <h4 className="text-emerald-400 font-bold mb-6 flex items-center">
            Tee näin
          </h4>
          <ul className="space-y-4">
            {checklist.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="w-6 h-6 text-emerald-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-slate-300 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </section>
);

export const RiskCard: React.FC<{ title: string; example: string; description: string }> = ({ title, example, description }) => (
  <div className="bg-slate-900/80 border border-red-500/20 p-8 rounded-3xl h-full flex flex-col">
    <h4 className="text-red-400 font-bold mb-4 text-xl">{title}</h4>
    <div className="bg-black/40 p-4 rounded-xl mb-6 font-mono text-sm text-red-300/80 italic border border-red-500/10">
      "Esimerkki riskistä: {example}"
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
      {description}
    </p>
  </div>
);

const normalizeCtaLink = (href: string) => {
  if (href.startsWith('#/')) {
    return href;
  }
  if (href.startsWith('/')) {
    return `#${href}`;
  }
  return href;
};

const isExternalLink = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

export const CTA: React.FC<{ label: string; onClick?: () => void; link?: string }> = ({ label, onClick, link }) => {
  const normalizedLink = link ? normalizeCtaLink(link) : undefined;
  const isExternal = normalizedLink ? isExternalLink(normalizedLink) : false;

  return (
    <section className="text-center py-10">
      {normalizedLink ? (
        <a
          href={normalizedLink}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all text-xl shadow-xl shadow-emerald-500/20 inline-block"
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noreferrer noopener' : undefined}
        >
          {label}
        </a>
      ) : (
        <button
          onClick={onClick}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-10 py-5 rounded-full transition-all text-xl shadow-xl shadow-emerald-500/20"
        >
          {label}
        </button>
      )}
    </section>
  );
};
