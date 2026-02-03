
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Blueprints: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  
  const items = Object.values(contentRegistry);
  const categories = Array.from(new Set(items.map(i => i.category)));
  
  const filteredItems = filter 
    ? items.filter(i => i.category === filter)
    : items;

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <SEO title="Blueprintit | Arctic Hardening" description="Selaa Lapland AI Labin tietoturva-blueprinttejä." />
      
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Blueprintit</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Valmiit arkkitehtuurit ja toimintamallit digitaaliseen karkaisuun.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        <button 
          onClick={() => setFilter(null)}
          className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${!filter ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-500 hover:text-slate-300'}`}
        >
          Kaikki
        </button>
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${filter === cat ? 'bg-emerald-500 text-slate-950' : 'bg-slate-900 text-slate-500 hover:text-slate-300'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map(item => (
          <Link 
            key={item.slug} 
            to={`/content/${item.slug}`}
            className="group glass p-8 rounded-[2.5rem] border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col h-full relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-20 transition-opacity">
               <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
               </svg>
            </div>
            
            <div className="mb-6 flex justify-between items-start">
              <div className="px-3 py-1 bg-slate-900 border border-slate-700 rounded-md text-[10px] font-black text-emerald-400 uppercase tracking-widest">
                {item.category}
              </div>
              {item.featured && (
                <span className="text-[10px] font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded uppercase">Nosto</span>
              )}
            </div>

            <h3 className="text-2xl font-black text-white mb-4 group-hover:text-emerald-400 transition-colors">
              {item.navLabel}
            </h3>
            
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow">
              {item.hero.subtitle}
            </p>

            <div className="flex items-center text-emerald-500 text-xs font-black uppercase tracking-widest gap-2">
              Avaa blueprintti
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Blueprints;
