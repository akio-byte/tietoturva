
import React, { useEffect, useState } from 'react';
import { voteOptions } from '../contentRegistry';
import { readVotes } from '../lib/voting';
import { VoteData } from '../types';

const Results: React.FC = () => {
  const [votes, setVotes] = useState<VoteData>({});
  
  const refresh = () => setVotes(readVotes());

  useEffect(() => {
    refresh();
    // Päivitetään automaattisesti jos käyttäjä äänestää toisessa välilehdessä
    window.addEventListener('storage', refresh);
    return () => window.removeEventListener('storage', refresh);
  }, []);

  // Fix: Explicitly cast Object.values to number[] to ensure TS correctly handles arithmetic operations
  const totalVotes = (Object.values(votes) as number[]).reduce((a, b) => a + b, 0);

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div>
          <h2 className="text-5xl font-black text-white tracking-tighter uppercase">Tulokset</h2>
          <p className="text-slate-400 mt-2">Reaaliaikainen ääntenlaskenta suoraan selaimessasi.</p>
        </div>
        <div className="text-right">
          <span className="text-emerald-400 font-black text-6xl leading-none">{totalVotes}</span>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Ääntä yhteensä</p>
        </div>
      </div>

      <div className="space-y-8">
        {voteOptions.map((opt) => {
          const count = votes[opt.id] || 0;
          // Fix: Ensure comparison and division use correctly typed numeric values
          const percentage = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0;
          
          return (
            <div key={opt.id} className="relative">
              <div className="flex justify-between items-end mb-3">
                <span className="text-xl font-bold text-white">{opt.label}</span>
                <div className="text-right">
                  <span className="text-emerald-400 font-black mr-2">{count}</span>
                  <span className="text-slate-500 text-sm font-bold uppercase">{percentage}%</span>
                </div>
              </div>
              <div className="h-6 bg-slate-900 rounded-full border border-slate-800 overflow-hidden shadow-inner">
                <div 
                  className={`h-full bg-gradient-to-r ${opt.color} transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(16,185,129,0.2)]`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {totalVotes === 0 && (
        <div className="text-center py-20 glass border-slate-800 rounded-3xl mt-12">
          <p className="text-slate-500 font-bold uppercase tracking-widest">Ei vielä ääniä. Ole ensimmäinen!</p>
        </div>
      )}

      <div className="mt-20 text-center">
        <button 
          onClick={refresh}
          className="text-emerald-400 font-black uppercase tracking-widest text-sm hover:text-white transition-colors flex items-center justify-center gap-2 mx-auto"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Päivitä luvut
        </button>
      </div>
    </div>
  );
};

export default Results;
