import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
}

const setMetaTag = (key: string, content: string, attribute: 'name' | 'property' = 'name') => {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
};

export const SEO: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;
    setMetaTag('description', description, 'name');
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:type', 'website', 'property');
    setMetaTag('twitter:card', 'summary_large_image', 'name');
    setMetaTag('twitter:title', title, 'name');
    setMetaTag('twitter:description', description, 'name');
  }, [title, description]);
  return null;
};

export const PageLayout: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className
}) => (
  <div className={`max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 ${className ?? ''}`.trim()}>
    {children}
  </div>
);

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

export const Checklist: React.FC<{ items: string[]; title?: string }> = ({ items, title = 'Tee näin' }) => (
  <div>
    <h4 className="text-emerald-400 font-bold mb-6 flex items-center">{title}</h4>
    <ul className="space-y-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start">
          <svg className="w-6 h-6 text-emerald-500 mr-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-slate-300 font-medium">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const Section: React.FC<{ 
  title: string; 
  children: React.ReactNode; 
  importanceTitle?: string;
  importanceDesc?: string;
  checklist?: string[];
  colorClass?: string;
}> = ({ title, children, importanceTitle = 'Miksi tämä on tärkeää?', importanceDesc, checklist, colorClass = 'bg-emerald-500' }) => (
  <section className="mb-24">
    <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
      <span className={`w-2 h-8 ${colorClass} rounded-full mr-4`}></span>
      {title}
    </h2>
    <div className="glass p-8 rounded-3xl border border-slate-800 mb-8">
      <div className="text-slate-300 leading-relaxed mb-8">
        {children}
      </div>
      
      {importanceDesc && (
        <div className="bg-indigo-900/30 border border-indigo-500/30 p-8 rounded-2xl mb-8">
          <h3 className="text-indigo-400 font-bold mb-4 text-lg">{importanceTitle}</h3>
          <p className="text-slate-300">
            {importanceDesc}
          </p>
        </div>
      )}

      {checklist && <Checklist items={checklist} />}
    </div>
  </section>
);

interface RiskCardProps {
  title: string;
  example: string;
  description: string;
}

export const RiskCard: React.FC<RiskCardProps> = ({ title, example, description }) => (
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

export const RiskCards: React.FC<{ cards: RiskCardProps[] }> = ({ cards }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {cards.map((card) => (
      <RiskCard key={card.title} {...card} />
    ))}
  </div>
);

export const CTA: React.FC<{ label: string; onClick?: () => void; link?: string; disabled?: boolean }> = ({
  label,
  onClick,
  link,
  disabled = false
}) => {
  const baseClasses = 'font-bold px-10 py-5 rounded-full transition-all text-xl shadow-xl inline-block';
  const enabledClasses = 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-emerald-500/20';
  const disabledClasses = 'bg-slate-700 text-slate-200 cursor-not-allowed shadow-slate-900/20';
  const className = `${baseClasses} ${disabled ? disabledClasses : enabledClasses}`;

  if (link) {
    if (disabled) {
      return (
        <section className="text-center py-10">
          <span className={className} aria-disabled="true">
            {label}
          </span>
        </section>
      );
    }

    const isInternal = link.startsWith('/') || link.startsWith('#');
    return (
      <section className="text-center py-10">
        {isInternal ? (
          <Link to={link} className={className}>
            {label}
          </Link>
        ) : (
          <a href={link} className={className}>
            {label}
          </a>
        )}
      </section>
    );
  }

  return (
    <section className="text-center py-10">
      <button onClick={disabled ? undefined : onClick} className={className} disabled={disabled}>
        {label}
      </button>
    </section>
  );
};
