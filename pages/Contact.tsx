import React from 'react';
import { SEO, Hero } from '../components/Shared';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Yhteystiedot | Lapland AI Lab" description="Ota yhteyttä - Governance Showroom" />
      <Hero 
        title="Yhteystiedot"
        subtitle="Tämä on staattinen showroom ilman taustapalveluja."
        label="Ota yhteyttä"
      />
      <div className="glass p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Lähdekoodi</h3>
            <a 
              href="https://github.com/akio-byte/tietoturva" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-2 font-mono text-sm break-all"
            >
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              github.com/akio-byte/tietoturva
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Sähköposti</h3>
            <a href="mailto:contact@example.com" className="text-slate-300 hover:text-white transition-colors">
              contact@example.com (Placeholder)
            </a>
          </div>
          <div className="pt-8 border-t border-slate-700">
             <p className="text-slate-400 text-sm">
                Huomio: Tämä sivusto on rakennettu staattiseksi React-sovellukseksi. Se ei kerää tietoja eikä lähetä lomakkeita palvelimelle.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;