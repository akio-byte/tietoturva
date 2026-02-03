
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Shared';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-[90vh] px-4 text-center">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      
      <div className="max-w-4xl">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
          Lapland AI Lab Showroom
        </div>
        <h1 className="text-7xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-tight">
          Arctic <br/><span className="aurora-text">Hardening</span>
        </h1>
        <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-medium">
          Tietoturvan ja AI-hallinnan blueprintit pk-yrityksille. <br/> 
          Avoimen lähdekoodin metodologinen näyteikkuna.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/methodology" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/20 text-xl">
            Tutustu Metodologiaan
          </Link>
          <Link to="/blueprints" className="glass hover:bg-slate-800/80 text-white font-black px-12 py-6 rounded-2xl transition-all text-xl">
            Selaa Blueprints
          </Link>
        </div>
      </div>

      <div className="mt-20 flex gap-12 grayscale opacity-40">
        <span className="text-xs font-bold tracking-[0.4em] uppercase">Security</span>
        <span className="text-xs font-bold tracking-[0.4em] uppercase">Governance</span>
        <span className="text-xs font-bold tracking-[0.4em] uppercase">Resilience</span>
      </div>
    </div>
  );
};

export default Home;
