import React from 'react';
import { SEO, Hero, Section } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Admin: React.FC = () => {
  const items = Object.values(contentRegistry);
  const categories = ['kyber', 'ai', 'mobile', 'crisis', 'privacy', 'routines'];
  
  const getProgress = (cat: string) => {
    const count = items.filter(i => i.category === cat).length;
    return Math.min((count / 3) * 100, 100); // Oletus: 3 sisältöä per kategoria on "valmis"
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Admin Panel | Lapland AI Lab" 
        description="Järjestelmän hallinta ja sisällön auditointi." 
      />
      <Hero 
        title="Arkkitehtuurin Hallinta"
        subtitle="Source of Truth (SoT) - Valvomme järjestelmän eheyttä ja sisältöstrategian toteutumista."
        label="System Access Level 4"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
        {/* Progress Overview */}
        <div className="lg:col-span-2 glass p-10 rounded-[2.5rem] border-emerald-500/20">
          <div className="flex justify-between items-end mb-10">
            <h3 className="text-2xl font-black text-white">Sisältökattavuus</h3>
            <span className="text-emerald-400 font-mono text-sm tracking-widest uppercase">Eheyden tila: 68%</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map(cat => (
              <div key={cat} className="space-y-3">
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                  <span className="text-slate-400">{cat}</span>
                  <span className="text-emerald-400">{Math.round(getProgress(cat))}%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-right from-emerald-600 to-emerald-400 transition-all duration-1000"
                    style={{ width: `${getProgress(cat)}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Gaps (Smart) */}
        <div className="glass p-10 rounded-[2.5rem] border-amber-500/20">
          <h3 className="text-2xl font-black text-white mb-8 text-amber-400 italic">Audit Intelligence</h3>
          <div className="space-y-6">
            <div className="p-4 bg-amber-500/5 border border-amber-500/20 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-20">
                <svg className="w-8 h-8 text-amber-500 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h4 className="text-amber-500 font-bold text-sm mb-3 uppercase tracking-widest">Kriittiset aukot</h4>
              <ul className="text-xs text-slate-400 space-y-3 list-disc pl-4 font-medium">
                <li><span className="text-slate-200">Mobile Hardening:</span> Laitetason karkaisuohjeet puuttuvat.</li>
                <li><span className="text-slate-200">Privacy Deep-Dive:</span> GDPR vs AI -käytännön case-esimerkit.</li>
                <li><span className="text-slate-200">Crisis SOP:</span> Välitön toimintaohjeistus kiristyshaittaohjelmille.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
         <div className="glass p-10 rounded-[2.5rem] border-slate-800">
            <h3 className="text-xl font-black text-white mb-6 uppercase tracking-widest">Viimeisimmät päivitykset</h3>
            <div className="space-y-4">
              {items.slice(-4).reverse().map(item => (
                <div key={item.slug} className="flex items-center gap-4 text-sm border-b border-slate-900 pb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-slate-300 font-bold">{item.navLabel}</span>
                  <span className="text-slate-600 text-[10px] font-mono ml-auto">VER 1.4</span>
                </div>
              ))}
            </div>
         </div>
         
         <div className="glass p-10 rounded-[2.5rem] border-amber-500/10">
            <h3 className="text-xl font-black text-amber-500 mb-6 uppercase tracking-widest">Codex Link</h3>
            <div className="bg-black/40 p-6 rounded-2xl font-mono text-[11px] text-amber-200/50 leading-relaxed">
              "System prompt updated. Priority: Arctic Mobile Hardening content generation. Use the Arctic Security Tone Protocol."
            </div>
         </div>
      </div>
    </div>
  );
};

export default Admin;