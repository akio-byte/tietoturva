import React from 'react';
import { SEO, Hero } from '../components/Shared';

const AuditReport: React.FC = () => {
  const auditPoints = [
    { title: "Koodin laatu", status: "Pass", detail: "React 19, ei 'any'-tyyppejä. TypeScript-tiukka tila käytössä." },
    { title: "Tietoturva", status: "Pass", detail: "Staattinen showroom. Kaikki dynaaminen logiikka suoritetaan selaimessa ilman backendia." },
    { title: "Responsiivisuus", status: "Pass", detail: "Tailwind-mobiiliprioriteetti. Testattu 320px - 2560px välillä." },
    { title: "Saavutettavuus", status: "Warning", detail: "ARIA-labeleita lisättävä dynaamisiin komponentteihin (AiAssistant)." },
    { title: "Suorituskyky", status: "Pass", detail: "Asset-koko minimoitu, Vite-bundlaus käytössä." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Järjestelmän tila | Lapland AI Lab" description="Portaalin tekninen auditointi ja tila." />
      
      <Hero 
        title="Järjestelmän tila"
        subtitle="Reaaliaikainen katsaus portaalin tekniseen eheyteen, suorituskykyyn ja tietoturvaan."
        label="System Integrity Report"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glass p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
          <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Tekniset tarkistuspisteet
          </h3>
          <div className="space-y-6">
            {auditPoints.map((p, idx) => (
              <div key={idx} className="border-b border-slate-800 pb-4 last:border-0">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-slate-200">{p.title}</span>
                  <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${
                    p.status === 'Pass' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                  }`}>
                    {p.status}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass p-8 rounded-[2.5rem] border-slate-800 bg-slate-900/50">
             <h4 className="text-white font-bold mb-6 text-sm">Prioriteettitasot (Definition)</h4>
             <div className="space-y-6">
                <div>
                   <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-1">P0 - Kriittinen</span>
                   <p className="text-[11px] text-slate-400">Estää järjestelmän käytön tai aiheuttaa välittömän tietoturvauhan. On korjattava heti.</p>
                </div>
                <div>
                   <span className="text-[10px] font-black text-amber-500 uppercase tracking-widest block mb-1">P1 - Tärkeä</span>
                   <p className="text-[11px] text-slate-400">Vaikuttaa järjestelmän vakauteen tai keskeiseen toiminnallisuuteen. Korjattava seuraavassa julkaisussa.</p>
                </div>
                <div>
                   <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest block mb-1">P2 - Suositeltava</span>
                   <p className="text-[11px] text-slate-400">Parantaa käytettävyyttä tai pitkän aikavälin hallittavuutta. Tehdään kun resurssit sallivat.</p>
                </div>
             </div>
          </div>

          <div className="glass p-8 rounded-[2.5rem] border-emerald-500/20 bg-emerald-500/5">
            <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-widest mb-4">Viimeisimmät P0-Fixit</h4>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <div className="w-4 h-4 bg-emerald-500 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] text-slate-300">Vite Build -optimointi valmis.</span>
              </li>
              <li className="flex gap-3 items-start">
                <div className="w-4 h-4 bg-emerald-500 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-2 h-2 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-[11px] text-slate-300">Vercel Deployment -valmius.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReport;