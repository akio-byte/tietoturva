import React from 'react';
import { SEO } from '../components/Shared';
import auditContent from '../docs/AUDIT.md?raw';

const Audit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="Auditointi | Arctic Hardening" description="Auditointikäytännöt ja jäljitettävyys." />

      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Auditointi</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Kooste auditointiprosessista, hyväksyntäkriteereistä ja jäljitettävyydestä.
        </p>
      </div>

      <div className="glass p-8 rounded-3xl border-slate-800">
        <div className="bg-black/40 p-6 rounded-xl font-mono text-xs text-emerald-200/80 whitespace-pre-wrap leading-relaxed">
          {auditContent}
        </div>
      </div>
    </div>
  );
};

export default Audit;
