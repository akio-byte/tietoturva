
import React, { useState } from 'react';
import { voteOptions } from '../contentRegistry';
import { castVote } from '../lib/voting';

const Vote: React.FC = () => {
  const [votedId, setVotedId] = useState<string | null>(null);

  const handleVote = (id: string) => {
    castVote(id);
    setVotedId(id);
    // Poistetaan ilmoitus hetken kuluttua
    setTimeout(() => setVotedId(null), 3000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tighter uppercase">Valitse suosikkisi</h2>
        <p className="text-slate-400">Klikkaa korttia antaaksesi äänesi. Voit äänestää useita kertoja tässä demossa.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {voteOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => handleVote(opt.id)}
            className="group relative glass p-10 rounded-[2.5rem] border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 text-left overflow-hidden transform hover:-translate-y-2 active:scale-95"
          >
            <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${opt.color}`}></div>
            <div className="flex justify-between items-start mb-6">
              <h3 className="text-3xl font-black text-white group-hover:text-emerald-400 transition-colors">{opt.label}</h3>
              <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/30">
                <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed">{opt.description}</p>
            
            {votedId === opt.id && (
              <div className="absolute inset-0 bg-emerald-500/90 flex items-center justify-center animate-in fade-in duration-300 z-10">
                <div className="text-center text-slate-950 font-black">
                  <svg className="w-16 h-16 mx-auto mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-2xl uppercase tracking-widest">Ääni rekisteröity!</span>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>

      {votedId && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-emerald-500 text-slate-950 px-8 py-4 rounded-full font-black shadow-2xl animate-bounce z-50">
          Kiitos äänestäsi! 🚀
        </div>
      )}
    </div>
  );
};

export default Vote;
