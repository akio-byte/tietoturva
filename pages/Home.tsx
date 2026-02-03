import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  const allItems = Object.values(contentRegistry);
  const featuredItems = allItems.filter(item => item.featured);
  
  const categories = [
    { name: "Kyber", color: "text-blue-400", bg: "bg-blue-500/10", slug: "kyber" },
    { name: "AI", color: "text-emerald-400", bg: "bg-emerald-500/10", slug: "ai" },
    { name: "Mobiili", color: "text-purple-400", bg: "bg-purple-500/10", slug: "mobile" },
    { name: "Kriisi", color: "text-red-400", bg: "bg-red-500/10", slug: "crisis" },
    { name: "Tietosuoja", color: "text-indigo-400", bg: "bg-indigo-500/10", slug: "privacy" },
    { name: "Rutiinit", color: "text-slate-400", bg: "bg-slate-500/10", slug: "routines" }
  ];

  return (
    <div className="relative overflow-hidden bg-[#020617]">
      <SEO 
        title="Lapland AI Lab | Arctic Hardening Showroom" 
        description="Pohjoisen digitaalisen turvan keskus. Kaikki blueprintit ja hallintamallit pk-yrityksille." 
      />
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-32 relative">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] animate-in fade-in slide-in-from-top-4 duration-1000">
            Arctic Hardening Platform v2.5
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Digital <br/><span className="aurora-text">Winter Proof.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-14">
            Organisaation selviytymisopas digitaalisessa talvessa. Auditoitu asiantuntijatieto ja tekniset blueprintit yhdessä showroomissa.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-24">
            <Link to="/governance" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/30 text-lg uppercase tracking-wider">
              Governance
            </Link>
            <Link to="/business-audit" className="glass hover:bg-slate-800 text-white font-bold px-12 py-5 rounded-2xl transition-all text-lg border-slate-700 uppercase tracking-wider">
              Auditointi
            </Link>
          </div>
        </div>

        {/* Featured Showcase */}
        <div className="mb-40">
           <div className="flex items-end justify-between mb-16 px-4">
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Showroom</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Valitut arkkitehtuurit</p>
              </div>
              <Link to="/materials" className="text-xs font-black text-emerald-400 uppercase tracking-widest hover:underline pb-1">Kaikki materiaalit &rarr;</Link>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                to={`/content/${item.slug}`}
                className="group glass p-10 rounded-[3.5rem] hover:border-emerald-500/50 transition-all duration-700 transform hover:-translate-y-4 border border-white/5 flex flex-col h-full shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/5 blur-[80px] -z-10 group-hover:bg-emerald-500/10 transition-all"></div>
                
                <div className="w-16 h-16 bg-slate-950/90 rounded-2xl flex items-center justify-center mb-10 border border-slate-800 group-hover:border-emerald-500/30 transition-all shadow-inner transform group-hover:rotate-6">
                   <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                   </svg>
                </div>

                <div className="flex justify-between items-start mb-4">
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.25em] group-hover:text-emerald-400 transition-colors">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-2xl font-black text-white mb-4 tracking-tight uppercase leading-tight">
                  {item.navLabel}
                </h3>
                <p className="text-slate-400 mb-10 leading-relaxed line-clamp-2 text-sm flex-grow font-medium">
                  {item.hero.subtitle}
                </p>
                
                <div className="flex items-center text-emerald-400 font-black text-[10px] tracking-[0.25em] uppercase pt-8 border-t border-white/5">
                  Lataa raportti
                  <svg className="w-4 h-4 ml-3 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Categories Matrix */}
        <div className="mb-40 pt-24 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 px-4">
            <h2 className="text-5xl md:text-6xl font-black text-white uppercase tracking-tighter max-w-md leading-[0.9]">Koko <br/><span className="text-slate-600">Arkisto</span></h2>
            <div className="text-right">
              <span className="text-emerald-400 font-black text-7xl md:text-8xl leading-none">{allItems.length}</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mt-2">Dynaamista moduulia</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => {
              const count = allItems.filter(i => i.category === cat.slug).length;
              return (
                <Link 
                  key={cat.slug} 
                  to="/materials"
                  className="glass p-8 rounded-[2.5rem] border border-white/5 hover:border-white/10 transition-all group shadow-xl flex flex-col"
                >
                  <div className="mb-8 flex items-center justify-between">
                     <div className={`w-2 h-2 rounded-full ${cat.color.replace('text', 'bg')}`}></div>
                     <span className="text-[10px] font-black text-slate-600">{count}</span>
                  </div>
                  <h4 className={`${cat.color} font-black text-xs uppercase tracking-[0.2em] mb-4`}>{cat.name}</h4>
                  <div className="flex flex-col gap-3">
                    {allItems
                      .filter(item => item.category === cat.slug)
                      .slice(0, 3)
                      .map(item => (
                        <div 
                          key={item.slug} 
                          className="text-[10px] text-slate-500 group-hover:text-slate-400 transition-colors truncate font-bold uppercase tracking-widest"
                        >
                          {item.navLabel}
                        </div>
                      ))
                    }
                    {count > 3 && (
                      <span className="text-[9px] text-slate-700 font-black uppercase tracking-widest">+{count - 3} lisää</span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;