import React from 'react';
import { SEO, Hero, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Admin: React.FC = () => {
  const items = Object.values(contentRegistry);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Admin Panel | Lapland AI Lab" 
        description="Järjestelmän hallinta ja sisällön auditointi." 
      />
      <Hero 
        title="Hallintapaneeli"
        subtitle="Source of Truth (SoT) - Lapland AI Labin arkkitehtuurin ja sisällön valvonta."
        label="System Access Level 4"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Status Card */}
        <div className="lg:col-span-2 glass p-10 rounded-[2.5rem] border-emerald-500/20">
          <h3 className="text-2xl font-black text-white mb-8">Sisältöinventaario</h3>
          <div className="space-y-4">
            {items.map(item => (
              <div key={item.slug} className="flex items-center justify-between p-4 bg-slate-900/50 rounded-xl border border-slate-800">
                <div>
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.category}</span>
                  <h4 className="text-white font-bold">{item.navLabel}</h4>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-black ${item.featured ? 'bg-emerald-500 text-slate-900' : 'bg-slate-800 text-slate-400'}`}>
                    {item.featured ? 'FEATURED' : 'CORE'}
                  </span>
                  <span className="text-slate-500 text-xs font-mono">/{item.slug}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Gaps */}
        <div className="glass p-10 rounded-[2.5rem] border-amber-500/20">
          <h3 className="text-2xl font-black text-white mb-8 text-amber-400">Audit-löydökset</h3>
          <div className="space-y-6">
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl">
              <h4 className="text-amber-500 font-bold text-sm mb-2 uppercase tracking-widest">Avoimet tehtävät</h4>
              <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                <li>Mobiili-kategoria kaipaa laajempaa karkaisuopasta (Routa-Hardening)</li>
                <li>Tietosuoja-osio vaatii lisää käytännön case-esimerkkejä</li>
              </ul>
            </div>
            <div className="p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <h4 className="text-emerald-400 font-bold text-sm mb-2 uppercase tracking-widest">Valmiit askeleet</h4>
              <ul className="text-sm text-slate-400 space-y-2 list-disc pl-4">
                <li>Agentti-tietosuoja (Privacy-kategoria) toteutettu</li>
                <li>Arctic Security Opus & Codex integroitu</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Section 
        title="Codex Bridge Commands"
        colorClass="bg-amber-500"
      >
        <p className="mb-6">Käytä näitä ohjeita Codex-agentille seuraavien päivitysten tekemiseen:</p>
        <div className="bg-black/40 p-6 rounded-2xl font-mono text-xs text-amber-200/70 border border-amber-500/20 leading-relaxed">
          "TEHTÄVÄ: Päivitä 'mobile'-kategoria. Luo uusi ContentItem 'Arctic Mobile Hardening'. Hyödynnä 'Calm & Expert' tonaalisuutta ja Lapin luonnon vertauskuvia."
        </div>
      </Section>
    </div>
  );
};

export default Admin;