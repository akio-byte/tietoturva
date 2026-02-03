import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Materials: React.FC = () => {
  const items = Object.values(contentRegistry);

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'kyber': return 'text-blue-500';
      case 'ai': return 'text-emerald-500';
      case 'mobile': return 'text-purple-500';
      case 'crisis': return 'text-red-500';
      case 'privacy': return 'text-indigo-500';
      default: return 'text-slate-500';
    }
  };

  return (
    <div className="min-h-screen bg-[#020617] pb-40">
      <SEO 
        title="Materiaalipankki | Lapland AI Lab" 
        description="Lataa tietoturvaoppaat, tarkistuslistat ja arktinen opus PDF-muodossa." 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <Hero 
          title="Arkisto"
          subtitle="Kaikki auditoitu materiaali showroom-muodossa. Blueprintit, checklistat ja toimintaohjeet organisaatiollesi."
          label="Knowledge Base"
        />

        {/* Blueprint Grid - showroom card layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(item => (
            <div 
              key={item.slug} 
              className="group glass p-10 rounded-[3rem] border border-white/5 hover:border-emerald-500/30 transition-all duration-500 flex flex-col h-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute -top-20 -right-10 w-56 h-56 bg-emerald-500/10 blur-[120px]"></div>

              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="w-12 h-12 bg-slate-900/80 rounded-2xl flex items-center justify-center border border-slate-800 shadow-inner">
                  <svg className="w-6 h-6 text-slate-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className={`text-[10px] font-black uppercase tracking-[0.35em] ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-tight group-hover:text-emerald-400 transition-colors relative z-10">
                {item.navLabel}
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed mb-10 flex-grow font-medium relative z-10">
                {item.hero.subtitle}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-8 border-t border-white/5 relative z-10">
                <Link 
                  to={`/content/${item.slug}`} 
                  className="flex-1 bg-emerald-500/90 hover:bg-emerald-400 text-slate-950 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-3 rounded-xl text-center transition-all"
                >
                  Avaa
                </Link>
                <Link 
                  to={`/content/${item.slug}`} 
                  className="flex-1 glass text-slate-300 text-[10px] font-black uppercase tracking-[0.25em] px-4 py-3 rounded-xl text-center border border-white/10 hover:border-emerald-500/30 transition-all"
                >
                  Lataa PDF
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Footer */}
        <div className="mt-40 text-center glass p-20 rounded-[4rem] border border-white/5 relative overflow-hidden">
           <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
           <h3 className="text-3xl font-black text-white mb-6 uppercase tracking-tighter">Etkö löytänyt etsimääsi?</h3>
           <p className="text-slate-400 max-w-xl mx-auto mb-12 leading-relaxed font-medium">
             Tietokantamme päivittyy viikoittain. Voit myös esittää toiveen uudesta blueprintistä tai ottaa yhteyttä asiantuntijoihimme.
           </p>
           <Link to="/contact" className="bg-white text-slate-950 font-black px-10 py-5 rounded-2xl hover:bg-emerald-400 transition-all uppercase tracking-widest text-xs shadow-xl">
             Ota yhteyttä
           </Link>
        </div>
      </div>
    </div>
  );
};

export default Materials;
