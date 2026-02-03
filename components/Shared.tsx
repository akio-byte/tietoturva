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

export const Hero: React.FC<{ title: string; subtitle: string; label?: string }> = ({ title, subtitle, label }) => (
  <div className="mb-20 animate-in fade-in slide-in-from-top-4 duration-1000">
    {label && <span className="text-emerald-400 font-bold tracking-widest uppercase text-[10px] mb-4 block animate-pulse">{label}</span>}
    <h1 className="text-5xl md:text-8xl font-black text-white mt-4 mb-8 tracking-tighter leading-[0.9]">
      <span className="aurora-text">{title}</span>
    </h1>
    <p className="text-xl text-slate-400 leading-relaxed max-w-3xl border-l-2 border-emerald-500/20 pl-6 font-medium">
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
        try {
          setCheckedItems(JSON.parse(saved));
        } catch (e) {
          console.error("Virhe ladattaessa tarkistuslistaa", e);
        }
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

  const handleKeyToggle = (event: React.KeyboardEvent<HTMLLIElement>, idx: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleItem(idx);
    }
  };

  const progress = checklist && checklist.length > 0 
    ? (Object.values(checkedItems).filter(Boolean).length / checklist.length) * 100 
    : 0;

  return (
    <section className="mb-24 relative animate-in fade-in slide-in-from-bottom-8 duration-700">
      <h2 className="text-3xl font-black text-white mb-8 flex items-center tracking-tight uppercase">
        <span className={`w-3 h-10 ${colorClass} rounded-full mr-6 shadow-lg shadow-current/20`}></span>
        {title}
      </h2>
      <div className="glass p-10 md:p-14 rounded-[3.5rem] border border-white/5 mb-8 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 blur-[100px] -z-10 group-hover:bg-emerald-500/10 transition-all"></div>
        
        <div className="text-slate-300 leading-relaxed mb-10 text-lg relative z-10 font-medium">
          {children}
        </div>
        
        {importanceTitle && importanceDesc && (
          <div className="bg-slate-950/50 border border-white/5 p-8 rounded-3xl mb-10 relative z-10 shadow-inner">
            <h3 className="text-emerald-400 font-bold mb-4 text-[10px] uppercase tracking-[0.2em]">{importanceTitle}</h3>
            <p className="text-slate-300 italic text-lg leading-relaxed">
              "{importanceDesc}"
            </p>
          </div>
        )}

        {checklist && checklist.length > 0 && (
          <div className="bg-slate-900/50 p-8 md:p-12 rounded-[2.5rem] border border-emerald-500/10 relative z-10">
            <div className="flex justify-between items-end mb-8">
              <h4 className="text-emerald-400 font-black flex items-center text-[10px] uppercase tracking-[0.2em]">
                Pohjoinen tarkistuslista
              </h4>
              <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">
                Valmiina: {Math.round(progress)}%
              </span>
            </div>
            
            <div className="w-full h-1.5 bg-slate-800 rounded-full mb-10 overflow-hidden">
               <div 
                className="h-full bg-emerald-500 transition-all duration-700 ease-out" 
                style={{ width: `${progress}%` }}
               ></div>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {checklist.map((item, idx) => (
                <li 
                  key={idx} 
                  onClick={() => toggleItem(idx)}
                  onKeyDown={(event) => handleKeyToggle(event, idx)}
                  role="button"
                  tabIndex={0}
                  aria-pressed={checkedItems[idx] ? 'true' : 'false'}
                  aria-label={`Tarkistuslista: ${item}`}
                  className={`flex items-start p-5 rounded-2xl border transition-all cursor-pointer group/item ${
                    checkedItems[idx] 
                      ? 'bg-emerald-500/10 border-emerald-500/30 opacity-60' 
                      : 'bg-slate-800/40 border-slate-700/50 hover:border-emerald-500/30 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex flex-1 items-start justify-between gap-4">
                    <div className="flex items-start">
                      <div className={`w-6 h-6 mr-4 shrink-0 mt-0.5 rounded-lg flex items-center justify-center border transition-all ${
                        checkedItems[idx] ? 'bg-emerald-500 border-emerald-500 scale-110' : 'border-slate-600 group-hover/item:border-emerald-500/50'
                      }`}>
                        {checkedItems[idx] && (
                          <svg className="w-4 h-4 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm leading-tight transition-all ${checkedItems[idx] ? 'text-slate-400 line-through' : 'text-slate-200 font-bold'}`}>
                        {item}
                      </span>
                    </div>
                    {checkedItems[idx] && (
                      <span className="text-[9px] font-black uppercase tracking-[0.25em] text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                        Checked
                      </span>
                    )}
                  </div>
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
  <div className="bg-slate-900/80 border border-red-500/20 p-10 rounded-[2.5rem] h-full flex flex-col shadow-inner relative overflow-hidden group mb-6 last:mb-0">
    <div className="absolute -top-10 -right-10 w-32 h-32 bg-red-500/5 blur-[50px] group-hover:bg-red-500/10 transition-all"></div>
    <h4 className="text-red-400 font-black mb-6 text-xl tracking-tight uppercase">{title}</h4>
    <div className="bg-black/40 p-6 rounded-2xl mb-8 font-mono text-xs text-red-300/70 italic border border-red-500/10 leading-relaxed">
      "Esimerkki riskistä: {example}"
    </div>
    <p className="text-slate-400 text-sm leading-relaxed mt-auto font-medium">
      {description}
    </p>
  </div>
);

export const CTA: React.FC<{ label: string; onClick?: () => void; link?: string }> = ({ label, onClick, link }) => (
  <section className="text-center py-20">
    {link ? (
      link.startsWith('#') ? (
        <a 
          href={link}
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-[2rem] transition-all text-xl shadow-2xl shadow-emerald-500/30 inline-block transform hover:scale-105 active:scale-95"
        >
          {label}
        </a>
      ) : (
        <Link 
          to={link} 
          className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-[2rem] transition-all text-xl shadow-2xl shadow-emerald-500/30 inline-block transform hover:scale-105 active:scale-95"
        >
          {label}
        </Link>
      )
    ) : (
      <button 
        onClick={onClick} 
        className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-[2rem] transition-all text-xl shadow-2xl shadow-emerald-500/30 transform hover:scale-105 active:scale-95"
      >
        {label}
      </button>
    )}
  </section>
);
