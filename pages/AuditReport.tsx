import React from 'react';
import { SEO, Hero } from '../components/Shared';

const AuditReport: React.FC = () => {
  const leadDevSignals = [
    { status: 'OK', detail: 'Ei krymptäysongelmia havaittu build-vaiheessa' },
    { status: 'WARNING', detail: 'Vite importmap ristiriita havaittu (Korvattu staattisella modulilla)' },
    { status: 'PENDING', detail: 'BusinessAudit submission -moduuli testauksessa v1.7.0' }
  ];

  const leadDevActions = [
    { level: 'P0', action: 'Poista importmap index.html ja käytä Vite-bundlea' },
    { level: 'P1', action: 'Implementoi auditoinnin lähetystoiminto ja admin-näkymä' },
    { level: 'P2', action: 'Refaktoroi AiAssistant käyttämään uutta Gemini-mallia' }
  ];

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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="glass p-8 rounded-[2.5rem] border-slate-800">
          <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">Pääkehittäjän signaalit</h3>
          <div className="space-y-4">
            {leadDevSignals.map((s, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <span className={`text-[10px] font-black px-2 py-0.5 rounded shrink-0 ${
                  s.status === 'OK' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-400'
                }`}>
                  {s.status}
                </span>
                <p className="text-sm text-slate-300 font-medium">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="glass p-8 rounded-[2.5rem] border-slate-800">
          <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tighter">Pääkehittäjän toimenpiteet</h3>
          <div className="space-y-4">
            {leadDevActions.map((a, idx) => (
              <div key={idx} className="flex gap-4 items-center">
                <span className={`text-[10px] font-black w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                  a.level === 'P0' ? 'bg-red-500/20 text-red-400' : a.level === 'P1' ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'
                }`}>
                  {a.level}
                </span>
                <p className="text-sm text-slate-400">{a.action}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

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
          <div className="glass p-8 rounded-[2.5rem] border-emerald-500/20 bg-emerald-500/5">
            <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-widest mb-4">Vakausraportti v1.7.0</h4>
            <p className="text-[11px] text-slate-400 leading-relaxed">
              Järjestelmä on siirretty staattiseen Vite-buildiin. Importmapit on poistettu ja riippuvuudet on lukittu. Vercel-deployment on optimoitu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditReport;