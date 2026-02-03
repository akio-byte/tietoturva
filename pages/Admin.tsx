
import React, { useState } from 'react';
import { resetVotes, exportVotesJson, readVotes } from '../lib/voting';

const Admin: React.FC = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleReset = () => {
    resetVotes();
    setShowConfirm(false);
    window.location.reload();
  };

  const handleExport = () => {
    const json = exportVotesJson();
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="mb-16">
        <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">System Maintenance</span>
        <h2 className="text-5xl font-black text-white tracking-tighter uppercase italic">Ylläpito</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-[2.5rem] border-slate-800 border-opacity-50">
          <h3 className="text-2xl font-black text-white mb-6">Nollaa tulokset</h3>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Tämä poistaa kaikki kertyneet äänet selaimen muistista. Toimintoa ei voi peruuttaa.
          </p>
          
          {!showConfirm ? (
            <button 
              onClick={() => setShowConfirm(true)}
              className="w-full bg-red-500/10 hover:bg-red-500/20 text-red-500 border border-red-500/30 font-black py-4 rounded-2xl transition-all"
            >
              Nollaa tietokanta
            </button>
          ) : (
            <div className="flex gap-4">
              <button onClick={handleReset} className="flex-grow bg-red-600 text-white font-black py-4 rounded-2xl animate-pulse">VAHVISTA</button>
              <button onClick={() => setShowConfirm(false)} className="px-6 bg-slate-800 text-white font-bold rounded-2xl">Peruuta</button>
            </div>
          )}
        </div>

        <div className="glass p-10 rounded-[2.5rem] border-slate-800 border-opacity-50">
          <h3 className="text-2xl font-black text-white mb-6">Vie JSON-data</h3>
          <p className="text-slate-400 mb-10 leading-relaxed">
            Kopioi nykyinen äänestystilanne leikepöydälle raakamuodossa analysointia varten.
          </p>
          <button 
            onClick={handleExport}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl transition-all shadow-xl shadow-emerald-500/10"
          >
            {copied ? 'KOPIOITU!' : 'Kopioi JSON'}
          </button>
        </div>
      </div>

      <div className="mt-12 glass p-8 rounded-3xl border-slate-800 overflow-hidden">
        <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Raakadata (Live Preview)</h4>
        <pre className="text-[10px] font-mono text-emerald-400 bg-black/40 p-6 rounded-xl overflow-x-auto border border-emerald-500/5">
          {JSON.stringify(readVotes(), null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default Admin;
