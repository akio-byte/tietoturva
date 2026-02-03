
import React from 'react';
import { SEO } from '../components/Shared';

const Architecture: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="Arkkitehtuuri | Arctic Hardening" description="Tekninen arkkitehtuurikuvaus Content-as-Code -mallista." />
      
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Tekninen arkkitehtuuri</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Systeemi-integraatio: AI Studio → Codex → CI → GitHub Pages.
        </p>
      </div>

      <div className="space-y-16">
        {/* The Concept Section */}
        <div className="glass p-10 rounded-[2.5rem] border-slate-800">
          <h2 className="text-3xl font-black text-white mb-8">Content-as-Code (CaC)</h2>
          <p className="text-slate-400 leading-relaxed mb-10">
            Tämä portaali on rakennettu filosofialla, jossa sisältö käsitellään koodina. Se mahdollistaa tietoturvadokumentaation versionhallinnan, tyypityksen ja automaattisen auditoinnin.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-emerald-400 font-black mb-2 uppercase text-[10px] tracking-widest">Syöte</div>
              <h4 className="text-white font-bold mb-2">Sisältörekisteri</h4>
              <p className="text-xs text-slate-500">TypeScript-pohjainen `contentRegistry.ts` toimii kaiken tiedon totuuden lähteenä.</p>
            </div>
            <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-800">
              <div className="text-blue-400 font-black mb-2 uppercase text-[10px] tracking-widest">Prosessi</div>
              <h4 className="text-white font-bold mb-2">Tyypitetty UI</h4>
              <p className="text-xs text-slate-500">React-komponentit renderöivät datan dynaamisesti TypeScript-rajapintojen avulla.</p>
            </div>
            <div className="p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
              <div className="text-emerald-500 font-black mb-2 uppercase text-[10px] tracking-widest">Tuloste</div>
              <h4 className="text-white font-bold mb-2">Staattinen julkaisu</h4>
              <p className="text-xs text-slate-500">Vite-build tuottaa puhtaan staattisen HTML/JS-paketin GitHub Pagesiin.</p>
            </div>
          </div>
        </div>

        {/* Pipeline Diagram */}
        <div className="text-center">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Julkaisuketju</h3>
          <div className="flex flex-col items-center space-y-4">
            <div className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold">AI Studio: Sisällön määrittely</div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold">Codex: Toteutus &amp; `git commit`</div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl text-sm font-bold">CI: `npm run build`</div>
            <div className="w-px h-8 bg-slate-800"></div>
            <div className="px-8 py-4 bg-emerald-500 text-slate-950 rounded-xl text-sm font-black">GitHub Pages: Staattinen julkaisu</div>
          </div>
        </div>

        {/* Future Roadmap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border-slate-800">
            <h3 className="text-xl font-black text-white mb-6">Kehityspolku</h3>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">01</span>
                <span><span className="font-semibold text-slate-200">P1-teemat:</span> Syvempi integraatio paikallisiin PDF-lähteisiin.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">02</span>
                <span><span className="font-semibold text-slate-200">Auto-auditointi:</span> Automaattinen tietoturvaskannaus joka buildissa.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold">03</span>
                <span><span className="font-semibold text-slate-200">Export-palvelu:</span> Dynaaminen PDF-generointi suoraan selaimessa.</span>
              </li>
            </ul>
          </div>
          
          <div className="glass p-8 rounded-3xl border-slate-800">
            <h3 className="text-xl font-black text-white mb-6">Saavutettavuus &amp; vaatimustenmukaisuus</h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Portaali noudattaa WCAG 2.1 -standardeja. Staattinen luonne takaa, ettei sivusto kerää evästeitä tai käyttäjädataa (yksityisyys suunnittelussa).
            </p>
            <div className="bg-black/30 p-4 rounded-xl font-mono text-[10px] text-emerald-400">
              - Ei ulkoisia evästeitä<br/>
              - Ei seurantaa<br/>
              - Auditointijälki: Git-historia
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
