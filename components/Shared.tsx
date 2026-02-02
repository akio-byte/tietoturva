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
  <div className="mb-20">
    {label && <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">{label}</span>}
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
  slug?: string; // Käytetään checklistin tallennukseen
  showAuroraIndicator?: boolean;
}> = ({
  title,
  children,
  importanceTitle,
  importanceDesc,
  checklist,
  colorClass = "bg-emerald-500",
  slug,
  showAuroraIndicator = false,
}) => {
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
      {showAuroraIndicator && <span className="aurora-vertical-line" aria-hidden="true"></span>}
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
