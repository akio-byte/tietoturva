
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      
      <div className="max-w-3xl">
        <div className="inline-block px-4 py-1.5 mb-8 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em]">
          Yhteisön ääni counts
        </div>
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-tight">
          Vaikuta <br/><span className="aurora-text">Päätökseen</span>
        </h1>
        <p className="text-xl text-slate-400 mb-12 leading-relaxed">
          Osallistu Lapland AI Labin kevään 2026 kehityssuunnan valintaan. 
          Äänesi tallentuu paikallisesti ja tulokset päivittyvät reaaliajassa.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="/vote" className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-6 rounded-2xl transition-all transform hover:scale-105 shadow-2xl shadow-emerald-500/20 text-xl">
            Äänestä nyt
          </Link>
          <Link to="/results" className="glass hover:bg-slate-800/80 text-white font-black px-12 py-6 rounded-2xl transition-all text-xl">
            Katso tulokset
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
