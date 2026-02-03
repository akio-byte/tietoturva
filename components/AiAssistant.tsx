
import React, { useState } from 'react';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative shadow-emerald-500/40"
          aria-label="Avaa assistentti"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>
          <svg className="w-8 h-8 text-slate-950 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </button>
      ) : (
        <div className="glass w-[350px] md:w-[400px] h-[500px] rounded-3xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border border-emerald-500/30 overflow-hidden">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
              <div>
                <span className="font-bold block text-sm aurora-text">Arctic Analyst (Showroom)</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">Static Documentation Mode</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Content Area */}
          <div className="flex-grow overflow-y-auto p-6 space-y-6">
            <div className="bg-slate-800/90 p-4 rounded-2xl rounded-tl-none border border-slate-700/50 text-sm leading-relaxed text-slate-200">
              Hei! Tämä on Lapland AI Labin **Arctic Analyst** -esittelytila.
            </div>
            
            <div className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-xs text-emerald-400">
              <h4 className="font-black mb-2 uppercase tracking-widest">Showroom-info</h4>
              <p className="leading-relaxed">
                Tämä showroom toimii täysin staattisena esittelynä ilman ulkoisia palvelukutsuja.
                <br/><br/>
                Live-kyselyt ja taustaintegraatiot on kytketty pois päältä tietoturvan ja vakauden takaamiseksi.
              </p>
            </div>

            <div className="space-y-2">
              <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">Esimerkkejä kyvyistä:</h5>
              {['Analysoi sivun riskit', 'Luo uusi tarkistuslista', 'Tee pika-auditointi'].map(q => (
                <div key={q} className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 text-xs italic">
                   "{q}"
                </div>
              ))}
            </div>
          </div>

          {/* Footer Input Mock */}
          <div className="p-4 bg-slate-900/80 border-t border-slate-800">
            <div className="relative opacity-50 grayscale cursor-not-allowed">
              <div className="w-full bg-slate-950/50 border border-slate-700 rounded-xl px-4 py-3 text-xs text-slate-500 italic">
                Live-chat ei käytössä showroom-versiossa...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
