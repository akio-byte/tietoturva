
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#020617]">
      <SEO 
        title="Showroom | Lapland AI Lab" 
        description="Tutustu Lapland AI Labin kehittämiin karkaistuihin digitaalisiin ratkaisuihin." 
      />
      
      {/* Background Orbs */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -z-10 animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center mb-32 relative">
          <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-[10px] font-black uppercase tracking-[0.25em] animate-in fade-in slide-in-from-top-4 duration-1000">
            Arctic Innovation Showroom v3.0
          </div>
          <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
            Lapland <br/><span className="aurora-text">AI Lab</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium mb-14">
            Arktinen laboratorio digitaaliselle kestävyydelle. Tutustu demoihin ja karkaistuihin arkkitehtuurimalleihimme.
          </p>
        </div>

        {/* Featured App: Tietoturvaportaali (tt) */}
        <div className="mb-40">
           <div className="flex items-end justify-between mb-16 px-4">
              <div>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-2">Sovellukset</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Päivitetty helmikuu 2026</p>
              </div>
           </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* TT APP CARD */}
            <div className="arctic-card p-12 flex flex-col h-full group">
                <div className="w-20 h-20 bg-emerald-500/20 rounded-3xl flex items-center justify-center mb-10 border border-emerald-500/30 shadow-2xl shadow-emerald-500/20 transform group-hover:rotate-6 transition-all duration-500">
                   <svg className="w-10 h-10 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                   </svg>
                </div>
                <h3 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Tietoturvaportaali</h3>
                <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                  Kokonaisvaltainen tietoturva- ja AI-hallintaportaali pk-yrityksille. Sisältää karkaistut rutiinit ja blueprintit.
                </p>
                <div className="flex flex-wrap gap-3 mb-10">
                  <span className="px-3 py-1 bg-slate-900 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-widest">v1.7.0</span>
                  <span className="px-3 py-1 bg-slate-900 border border-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">Open Source</span>
                </div>
                <Link to="/tt/materials" className="mt-auto inline-flex items-center gap-4 text-emerald-400 font-black uppercase tracking-widest text-xs group-hover:translate-x-2 transition-transform">
                  Avaa sovellus
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
            </div>

            {/* COMING SOON APP */}
            <div className="glass rounded-[2.5rem] p-12 flex flex-col opacity-50 border-dashed border-white/10">
                <div className="w-20 h-20 bg-slate-800 rounded-3xl flex items-center justify-center mb-10 border border-white/5">
                   <svg className="w-10 h-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-400 mb-4 uppercase tracking-tighter">AI Ops Dashboard</h3>
                <p className="text-slate-500 text-lg mb-10 font-medium leading-relaxed">
                  Reaaliaikainen tekoälyagenttien valvonta- ja hallintapaneeli. Suunnitteilla Q3/2026.
                </p>
                <div className="mt-auto">
                  <span className="px-4 py-2 bg-slate-800 rounded-xl text-xs font-black text-slate-500 uppercase tracking-[0.2em]">Tulossa pian</span>
                </div>
            </div>
          </div>
        </div>

        {/* Global Tech Matrix */}
        <div className="pt-24 border-t border-white/5">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-4">Teknologia-pino</h2>
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Arktinen laatuvaatimus</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['React 19', 'Tailwind CSS', 'Gemini AI', 'Cloudflare'].map(tech => (
              <div key={tech} className="glass p-8 rounded-3xl border border-white/5 text-center">
                <span className="text-xs font-black text-slate-400 uppercase tracking-[0.25em]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;