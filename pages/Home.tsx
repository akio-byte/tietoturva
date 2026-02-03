import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  const featuredItems = Object.values(contentRegistry).filter(item => item.featured);
  
  const categories = [
    { name: "Kyber", color: "text-blue-400", slug: "kyber" },
    { name: "AI", color: "text-emerald-400", slug: "ai" },
    { name: "Mobiili", color: "text-purple-400", slug: "mobile" },
    { name: "Kriisi", color: "text-red-400", slug: "crisis" },
    { name: "Tietosuoja", color: "text-indigo-400", slug: "privacy" },
    { name: "Rutiinit", color: "text-slate-400", slug: "routines" }
  ];

  const getIconForCategory = (category: string) => {
    switch (category) {
      case 'ai': return (
        <svg className="w-8 h-8 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
      case 'crisis': return (
        <svg className="w-8 h-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      );
      case 'mobile': return (
        <svg className="w-8 h-8 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      );
      case 'privacy': return (
        <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      );
      case 'routines': return (
        <svg className="w-8 h-8 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      default: return (
        <svg className="w-8 h-8 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    }
  };

  return (
    <div className="relative overflow-hidden bg-[#020617]">
      <SEO 
        title="Lapland AI Lab | Arctic Hardening Showroom" 
        description="Arctic Hardening - Tietoturvan ja AI-hallinnan showroom pk-yrityksille ja organisaatioille." 
      />
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-24 relative">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
            Pohjoista Tietoturvaa & Hallintaa
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            Arctic Hardening – <br/><span className="aurora-text">Governance Showroom</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-12">
            Tarjoamme pk-yrityksille selkeän ja käytännönläheisen polun tekoälyn hallintaan ja digitaaliseen turvallisuuteen pohjoisella resilienssillä.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-6 mb-20">
            <Link to="/governance" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-10 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-xl shadow-emerald-500/20 text-lg">
              Tutustu Governance-malliin
            </Link>
            <Link to="/business-audit" className="glass hover:bg-slate-800 text-white font-bold px-10 py-5 rounded-2xl transition-all text-lg border-slate-700">
              Katso Auditointiesimerkki
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto text-left">
             <div className="glass p-8 rounded-[2rem] border-slate-800/60">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                   Kyberresilienssi
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                   Oletamme vihamielisen ympäristön ja varaudumme kriiseihin ennalta arktisella otteella.
                </p>
             </div>
             <div className="glass p-8 rounded-[2rem] border-slate-800/60">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                   Vastuullinen AI
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                   Hallitsemme Shadow AI -riskit ja varmistamme tekoälyn eettisen käytön organisaatiossa.
                </p>
             </div>
             <div className="glass p-8 rounded-[2rem] border-slate-800/60">
                <h3 className="text-white font-bold mb-3 flex items-center gap-2">
                   <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                   Datan suvereniteetti
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed font-medium">
                   Pidämme huolen, että yrityksen tärkein pääoma – data – pysyy omassa hallinnassa.
                </p>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {featuredItems.map((item) => (
            <Link
              key={item.slug}
              to={`/content/${item.slug}`}
              className="group glass p-10 rounded-[3rem] hover:border-emerald-500/50 transition-all duration-700 transform hover:-translate-y-4 border border-slate-800/50 flex flex-col h-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px] group-hover:bg-emerald-500/10 transition-colors"></div>
              <div className="w-20 h-20 bg-slate-900/90 rounded-[1.5rem] flex items-center justify-center mb-12 border border-slate-700 group-hover:border-emerald-500/30 transition-all shadow-inner transform group-hover:rotate-6">
                {getIconForCategory(item.category)}
              </div>
              <h2 className="text-2xl font-black text-white mb-6 group-hover:text-emerald-400 transition-colors tracking-tight">
                {item.navLabel}
              </h2>
              <p className="text-slate-400 mb-10 leading-relaxed line-clamp-3 text-base flex-grow font-medium">
                {item.hero.subtitle}
              </p>
              <div className="flex items-center text-emerald-400 font-black text-xs tracking-[0.2em] uppercase">
                Syvenny aiheeseen
                <svg className="w-5 h-5 ml-3 group-hover:translate-x-3 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="mb-40">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter max-w-md">Kaikki mitä tarvitset <span className="text-slate-600">yhdessä paikassa.</span></h2>
            <div className="text-right">
              <span className="text-emerald-400 font-black text-6xl md:text-7xl leading-none">{Object.keys(contentRegistry).length}</span>
              <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Sisältömoduulia</p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((cat) => (
              <div 
                key={cat.slug} 
                className="glass p-8 rounded-[2rem] text-center border border-slate-800/50 hover:border-slate-600 transition-all group shadow-xl"
              >
                <span className={`${cat.color} font-black text-[10px] block mb-6 uppercase tracking-[0.25em] group-hover:scale-110 transition-transform`}>{cat.name}</span>
                <div className="flex flex-col gap-4">
                  {Object.values(contentRegistry)
                    .filter(item => item.category === cat.slug)
                    .map(item => (
                      <Link 
                        key={item.slug} 
                        to={`/content/${item.slug}`}
                        className="text-[11px] text-slate-500 hover:text-emerald-400 transition-colors truncate font-bold uppercase tracking-widest block"
                      >
                        {item.navLabel}
                      </Link>
                    ))
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;