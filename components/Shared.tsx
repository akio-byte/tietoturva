
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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

export const CategoryIcon: React.FC<{ category: string; className?: string }> = ({ category, className = "w-8 h-8" }) => {
  switch (category) {
    case 'ai': return (
      <svg className={`${className} text-emerald-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    );
    case 'crisis': return (
      <svg className={`${className} text-red-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    );
    case 'mobile': return (
      <svg className={`${className} text-purple-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    );
    case 'routines': return (
      <svg className={`${className} text-slate-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
    case 'privacy': return (
      <svg className={`${className} text-indigo-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    );
    default: return (
      <svg className={`${className} text-blue-400`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    );
  }
};

export const ArcticLoader: React.FC = () => (
  <div className="flex flex-col items-center justify-center py-24 space-y-6 animate-in fade-in duration-500">
    <div className="relative">
      <div className="w-16 h-16 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin"></div>
      <div className="absolute inset-0 bg-emerald-500/10 blur-xl animate-pulse"></div>
    </div>
    <span className="text-[10px] font-black text-emerald-500 uppercase tracking-[0.3em]">Noudetaan arktista dataa...</span>
  </div>
);

export const Hero: React.FC<{ title: string; subtitle: string; label?: string; category?: string }> = ({ title, subtitle, label, category }) => (
  <div className="mb-20">
    <div className="flex items-center gap-4 mb-4">
      {category && <CategoryIcon category={category} className="w-6 h-6" />}
      {label && <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs block animate-pulse">{label}</span>}
    </div>
    <h1 className="text-5xl md:text-7xl font-black text-white mt-4 mb-8 tracking-tighter leading-none">
      <span className="aurora-text">{title}</span>
    </h1>
    <p className="text-xl text-slate-400 leading-relaxed max-w-3xl border-l-2 border-emerald-500/20 pl-6">
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
  slug?: string; 
}> = ({ title, children, importanceTitle, importanceDesc, checklist, colorClass = "bg-emerald-500", slug }) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  useEffect(() => {
    if (slug) {
      const saved = localStorage.getItem(`checklist-${slug}-${title}`);
      if (saved) {
        setCheckedItems(JSON.parse(saved));
      }
    }
  }, [slug, title]);

  const toggleItem = (idx: number) => {
    const newItems = { ...checkedItems, [idx]: !checkedItems[idx] };
    setCheckedItems(newItems);
    if (slug) {
      localStorage.setItem(`checklist-${slug}-${title}`, JSON.stringify(newItems));
    }
  };

  return (
    <section className="mb-24 relative">
      <h2 className="text-3xl font-black text-white mb-8 flex items-center tracking-tight">
        <span className={`w-3 h-10 ${colorClass} rounded-full mr-6 shadow-lg shadow-current/20`}></span>
        {title}
      </h2>
      <div className="glass p-10 rounded-[2.5rem] border border-slate-800/50 mb-8 shadow-2xl relative overflow-hidden">
        <div className="text-slate-300 leading-relaxed mb-10 text-lg relative z-10">
          {children}
        </div>
        
        {importanceTitle && importanceDesc && (
          <div className="bg-indigo-900/20 border border-indigo-500/20 p-8 rounded-3xl mb-10 relative z-10">
            <h3 className="text-indigo-400 font-bold mb-4 text-sm uppercase tracking-widest">Miksi tämä on tärkeää?</h3>
            <p className="text-slate-300 italic">
              "{importanceDesc}"
            </p>
          </div>
        )}

        {checklist && (
          <div className="bg-slate-900/50 p-8 rounded-3xl border border-emerald-500/10 relative z-10">
            <h4 className="text-emerald-400 font-black mb-8 flex items-center text-xs uppercase tracking-[0.2em]">
              Interaktiivinen Tarkistuslista
              {Object.values(checkedItems).filter(Boolean).length === checklist.length && 
                <span className="ml-4 text-[10px] bg-emerald-500 text-slate-900 px-2 py-0.5 rounded-full animate-bounce">Valmis!</span>
              }
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checklist.map((item, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleItem(idx)}
                  className={`flex items-start p-4 rounded-xl border transition-all cursor-pointer ${
                    checkedItems[idx] 
                      ? 'bg-emerald-500/10 border-emerald-500/40 opacity-60' 
                      : 'bg-slate-800/30 border-slate-700/50 hover:border-emerald-500/30'
                  }`}
                >
                  <div className={`w-5 h-5 mr-4 shrink-0 mt-0.5 rounded flex items-center justify-center border ${
                    checkedItems[idx] ? 'bg-emerald-500 border-emerald-500' : 'border-slate-600'
                  }`}>
                    {checkedItems[idx] && (
                      <svg className="w-3.5 h-3.5 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm leading-tight transition-all ${checkedItems[idx] ? 'text-slate-400 line-through' : 'text-slate-300 font-medium'}`}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export const RiskCard: React.FC<{ title: string; example: string; description: string }> = ({ title, example, description }) => (
  <div className="bg-slate-900/80 border border-red-500/20 p-10 rounded-[2.5rem] h-full flex flex-col shadow-inner">
    <h4 className="text-red-400 font-black mb-6 text-xl tracking-tight">{title}</h4>
    <div className="bg-black/60 p-6 rounded-2xl mb-8 font-mono text-xs text-red-300/70 italic border border-red-500/10 leading-relaxed">
      "Esimerkki riskistä: {example}"
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mt-auto">
      {description}
    </p>
  </div>
);

export const CTA: React.FC<{ label: string; onClick?: () => void; link?: string }> = ({ label, onClick, link }) => (
  <section className="text-center py-12">
    {link ? (
      <Link 
        to={link} 
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-2xl transition-all text-xl shadow-2xl shadow-emerald-500/30 inline-block transform hover:scale-105"
      >
        {label}
      </Link>
    ) : (
      <button 
        onClick={onClick} 
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-2xl transition-all text-xl shadow-2xl shadow-emerald-500/30 transform hover:scale-105"
      >
        {label}
      </button>
    )}
  </section>
);
