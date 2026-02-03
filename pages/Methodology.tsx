
import React from 'react';
import { SEO } from '../components/Shared';

const Methodology: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="Methodology | Arctic Hardening" description="Content-as-Code ja pohjoisen tietoturvan filosofia." />
      
      <div className="mb-20 text-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
          Content <br/><span className="aurora-text">As Code</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Tietoturva ei ole vain dokumentti. Se on versionhallittua, tyypitettyä ja auditoitavaa dataa.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {[
          { title: "Immutable", desc: "Sisältö on lukittu konfiguraatioon. Muutokset vaativat commit-prosessin." },
          { title: "Typed", desc: "TypeScript-rajapinnat estävät virheellisen tiedon renderöinnin." },
          { title: "Audited", desc: "Jokainen muutos jättää jäljen ja noudattaa AGENT.md -sääntöjä." }
        ].map((item, i) => (
          <div key={i} className="glass p-8 rounded-3xl border-slate-800 text-center">
            <h3 className="text-2xl font-black text-emerald-400 mb-4">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Methodology;
