import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Materials: React.FC = () => {
  const items = Object.values(contentRegistry);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Materiaalipankki | Lapland AI Lab" 
        description="Lataa tietoturvaoppaat, tarkistuslistat ja arktinen opus PDF-muodossa." 
      />
      
      <Hero 
        title="Materiaalipankki & Oppaat"
        subtitle="Kaikki auditoitu materiaali keskitetysti. Lataa ohjeet offline-käyttöön tai jaettavaksi tiimillesi."
        label="Download Center"
      />

      {/* Main Feature: Arctic Security Opus */}
      <div className="mb-20">
        <h2 className="text-2xl font-black text-white mb-8 uppercase tracking-tighter flex items-center gap-3">
          <div className="w-2 h-8 bg-emerald-500 rounded-full"></div>
          Viralliset Julkaisut
        </h2>
        <div className="glass p-1 bg-gradient-to-br from-emerald-500/20 to-blue-600/20 rounded-[3rem] overflow-hidden">
          <div className="bg-slate-950/80 p-10 md:p-16 rounded-[2.8rem] flex flex-col md:flex-row gap-12 items-center">
            <div className="w-48 h-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl flex flex-col items-center justify-center relative group overflow-hidden shrink-0">
               <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/10 to-transparent"></div>
               <svg className="w-16 h-16 text-emerald-400 mb-4 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
               <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Opas (v1.7)</span>
            </div>
            <div className="flex-grow">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-4 block">Lippulaivajulkaisu</span>
              <h3 className="text-3xl font-black text-white mb-6 tracking-tight">Arctic Security Opus</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Yli 50 sivua auditoitua tietoa pk-yrityksen kyberturvallisuudesta, tekoälyn hallinnasta ja arjen rutiineista. Tämä on portaalin "Source of Truth" -dokumentti.
              </p>
              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => window.print()} 
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-8 py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-3"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Lataa PDF (Digitaalinen versio)
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grid of articles */}
      <div className="mb-20">
        <h2 className="text-2xl font-black text-white mb-12 uppercase tracking-tighter flex items-center gap-3">
          <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
          Blueprint-kirjasto
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(item => (
            <div key={item.slug} className="glass p-8 rounded-[2.5rem] border-slate-800 hover:border-slate-700 transition-all group flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 text-slate-400 group-hover:border-emerald-500/50 transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest group-hover:text-emerald-400 transition-colors">
                  {item.category}
                </span>
              </div>
              <h4 className="text-white font-bold mb-4 text-lg tracking-tight group-hover:text-emerald-400 transition-colors">
                {item.navLabel}
              </h4>
              <p className="text-slate-500 text-sm line-clamp-2 mb-8 flex-grow">
                {item.hero.subtitle}
              </p>
              <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-800/50">
                <Link to={`/content/${item.slug}`} className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors">
                  Lue selaimessa
                </Link>
                <button 
                  onClick={() => window.location.href = `#/content/${item.slug}`} 
                  className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-emerald-500 hover:text-slate-950 transition-all"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center bg-slate-900/30 p-12 rounded-[3rem] border border-slate-800">
        <h3 className="text-xl font-bold text-white mb-4">Etkö löytänyt etsimääsi?</h3>
        <p className="text-slate-400 max-w-lg mx-auto mb-8">
          Lisäämme uutta materiaalia viikoittain. Voit myös kysyä apua suoraan Governance Botilta oikeasta alakulmasta.
        </p>
        <Link to="/contact" className="text-emerald-400 font-bold uppercase tracking-widest text-xs hover:underline">
          Ota yhteyttä asiantuntijaan
        </Link>
      </div>
    </div>
  );
};

export default Materials;