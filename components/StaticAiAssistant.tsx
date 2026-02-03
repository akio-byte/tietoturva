import React, { useId, useState } from 'react';

const StaticAiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dialogId = useId();
  const titleId = useId();
  const descriptionId = useId();

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <button
        onClick={() => setIsOpen(true)}
        className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative shadow-emerald-500/40"
        aria-haspopup="dialog"
        aria-controls={dialogId}
        aria-expanded={isOpen}
        aria-label="Avaa AI-assistentin tila"
      >
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-slate-950"></div>
        <svg
          className="w-8 h-8 text-slate-950 group-hover:rotate-12 transition-transform"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id={dialogId}
          className="fixed inset-0 z-[110] flex items-end justify-center sm:items-center"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
        >
          <button
            className="absolute inset-0 bg-slate-950/70"
            aria-label="Sulje AI-assistentin ikkuna"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative w-full max-w-md mx-4 sm:mx-0 glass rounded-3xl border border-emerald-500/30 shadow-2xl animate-in slide-in-from-bottom-10">
            <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl rounded-t-3xl">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse"></div>
                <div>
                  <span id={titleId} className="font-bold block text-sm aurora-text">
                    AI-assistentti (tulossa pian)
                  </span>
                  <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                    Staattinen demotila
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Sulje"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-6 space-y-6">
              <div className="bg-slate-800/90 p-4 rounded-2xl border border-slate-700/50 text-sm leading-relaxed text-slate-200">
                Tämä demoversio on esittelytila tietoturvaportaalille.
              </div>

              <div
                id={descriptionId}
                className="bg-emerald-500/10 border border-emerald-500/20 p-5 rounded-2xl text-sm text-emerald-200"
              >
                AI-assistentti (tulossa pian) – tämä demoversio ei suorita live-kyselyitä.
              </div>

              <div className="space-y-2">
                <h5 className="text-[10px] font-black text-slate-500 uppercase tracking-widest px-2">
                  Mitä on tulossa
                </h5>
                {['Kysymys-vastaus tietoturvasta', 'Ohjatut tarkistuslistat', 'Tilannekuvat ja auditointiraportit'].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-slate-400 text-xs"
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StaticAiAssistant;
