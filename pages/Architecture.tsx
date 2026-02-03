
import React from 'react';
import { SEO } from '../components/Shared';

const Architecture: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="Architecture | Arctic Hardening" description="Tekninen arkkitehtuurikuvaus Content-as-Code -mallista." />
      
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Technical Architecture</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Systeemi-integraatio: AI Studio ↔ Codex ↔ Production.
        </p>
      </div>

      <div className="space-y-12">
        <div className="glass p-10 rounded-[2.5rem] border-slate-800">
          <h2 className="text-2xl font-black text-white mb-8">The Pipeline</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-1/3 p-6 bg-slate-900/50 rounded-2xl border border-slate-800 text-center">
              <div className="text-emerald-400 font-black mb-2 uppercase text-xs tracking-widest">Inception</div>
              <div className="text-white font-bold">AI Studio</div>
              <div className="text-[10px] text-slate-500 mt-2">Strategy & Prompts</div>
            </div>
            <div className="hidden md:block text-slate-700">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-slate-900/50 rounded-2xl border border-emerald-500/20 text-center">
              <div className="text-blue-400 font-black mb-2 uppercase text-xs tracking-widest">Execution</div>
              <div className="text-white font-bold">Codex Agent</div>
              <div className="text-[10px] text-slate-500 mt-2">Implementation</div>
            </div>
            <div className="hidden md:block text-slate-700">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="w-full md:w-1/3 p-6 bg-emerald-500 text-slate-950 rounded-2xl text-center shadow-lg shadow-emerald-500/20">
              <div className="font-black mb-2 uppercase text-xs tracking-widest">Showroom</div>
              <div className="font-bold uppercase">Static UI</div>
              <div className="text-[10px] font-bold mt-2">GitHub Pages</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass p-8 rounded-3xl border-slate-800">
            <h3 className="text-xl font-black text-white mb-4">Content-as-Code</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Kaikki sivuilla näkyvä tieto on tyypitettyä dataa `contentRegistry.ts` tiedostossa. Tämä mahdollistaa:
            </p>
            <ul className="space-y-3 text-xs text-slate-300 font-mono">
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Git-versionhallinta
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> Schema-validointi (TypeScript)
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-500">✔</span> AI-avusteinen sisällöntuotanto
              </li>
            </ul>
          </div>
          <div className="glass p-8 rounded-3xl border-slate-800">
            <h3 className="text-xl font-black text-white mb-4">Security Model</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Staattinen julkaisu on tietoturvavalinta. Ei backend-hyökkäyspinta-alaa.
            </p>
            <div className="bg-black/30 p-4 rounded-xl font-mono text-[10px] text-emerald-400">
              // Security Policy<br/>
              NoSecretsInFrontend: true,<br/>
              ImmutableRegistry: true,<br/>
              ZeroBackendFootprint: true
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;
