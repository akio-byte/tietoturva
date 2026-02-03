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

        {/* Blueprint Grid - exact match to screenshot style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {items.map(item => (
            <div 
              key={item.slug} 
              className="group glass p-12 rounded-[3.5rem] border border-white/5 hover:border-white/10 transition-all duration-500 flex flex-col h-full shadow-2xl relative"
            >
              {/* Category Label at Top Right */}
              <div className="absolute top-10 right-12">
                <span className={`text-[10px] font-black uppercase tracking-[0.25em] ${getCategoryColor(item.category)}`}>
                  {item.category}
                </span>
              </div>

              {/* Document Icon Top Left */}
              <div className="w-16 h-16 bg-slate-900/80 rounded-2xl flex items-center justify-center mb-10 border border-slate-800 shadow-inner">
                <svg className="w-7 h-7 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>

              <h3 className="text-2xl font-black text-white mb-6 tracking-tight uppercase leading-tight group-hover:text-emerald-400 transition-colors">
                {item.navLabel}
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-12 flex-grow font-medium">
                {item.hero.subtitle}
              </p>

              <div className="flex items-center justify-between pt-10 border-t border-white/5">
                <Link 
                  to={`/content/${item.slug}`} 
                  className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500 hover:text-white transition-colors"
                >
                  Lue selaimessa
                </Link>
                <Link 
                  to={`/content/${item.slug}`} 
                  className="w-10 h-10 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-slate-950 transition-all shadow-lg"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
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