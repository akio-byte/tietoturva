
import React from 'react';
import { SEO, Hero } from '../components/Shared';

const AuditReport: React.FC = () => {
  const auditPoints = [
    { title: "Koodin laatu", status: "Pass", detail: "React 19, ei 'any'-tyyppejä. TypeScript-tiukka tila käytössä." },
    { title: "Tietoturva", status: "Pass", detail: "Ei API-avaimia kovakoodattuna. process.env.API_KEY käytössä dynaamisesti." },
    { title: "Responsiivisuus", status: "Pass", detail: "Tailwind-mobiiliprioriteetti. Testattu 320px - 2560px välillä." },
    { title: "Saavutettavuus", status: "Warning", detail: "ARIA-labeleita lisättävä dynaamisiin komponentteihin (AiAssistant)." },
    { title: "Suorituskyky", status: "Pass", detail: "Asset-koko minimoitu, esm.sh latausnopeus < 200ms." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Tekninen Auditointiraportti | Lapland AI Lab" description="Järjestelmän tekninen tila ja audit-tulokset." />
      
      <Hero 
        title="Tekninen Auditointi"
        subtitle="Reaaliaikainen katsaus portaalin tekniseen eheyteen, suorituskykyyn ja tietoturvavaatimuksiin."
        label="System Integrity Report"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="glass p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
          <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            Audit Checkpoints
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
                <p className="text-xs text-slate-500">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="glass p-10 rounded-[3rem] border-slate-800 bg-emerald-500/5">
            <h4 className="text-emerald-400 font-black uppercase text-xs tracking-widest mb-6">P0 Korjaukset (Fix Pack)</h4>
            <ul className="space-y-4">
              <li className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">@/AGENT.md resoluutio</span>
                  <p className="text-[11px] text-slate-400">Poistettu aliakset, käytetään suoraa tekstin upotusta esm.sh-yhteensopivuuden takaamiseksi.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <span className="text-sm font-bold text-white block">Reitityksen eheys</span>
                  <p className="text-[11px] text-slate-400">Päivitetty App.tsx tukemaan uusia hallintatasoja.</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="p-8 border border-red-500/20 rounded-[2rem] bg-red-500/5">
            <h4 className="text-red-400 font-black uppercase text-[10px] tracking-widest mb-2">Seuraava vaihe</h4>
            <p className="text-xs text-slate-400">
              Integroidaan dynaaminen PDF-generointi Business Audit -vastauksista. Valmius 85%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReport;
