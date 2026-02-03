
import React from 'react';
import { SEO } from '../components/Shared';

const agentRules = `# Kehitystyön pelisäännöt (Agent Rules)

## Vastuujaot
- AI Studio: Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- Codex: Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Conflict Resolution (Konfliktien ratkaisu)
1. Lähdeprioriteetti:
   - P1: PDF-lähdemateriaali (Tekninen totuus)
   - P2: Repo-konfiguraatio (AGENT.md, types.ts, metadata.json)
   - P3: Käyttäjän uusi prompti (Tehtäväkohtainen muutos)
   Perustelu: PDF edustaa auditoitua asiantuntijatietoa, konfiguraatio järjestelmän rajoitteita.
2. Toimintatapa:
   - Flag & Ask: Jos prompti vaatii poikkeamaan P1- tai P2-tasoista, agentti keskeyttää ja pyytää vahvistusta.
   - Assume & Proceed: Sallittu vain matalan riskin visuaalisissa säätömuutoksissa.
3. Dokumentointi:
   - Kaikki ratkaistut konfliktit kirjataan tiedostoon docs/CONFLICTS.md (Aikaleima | Kohde | Ristiriita | Päätös).

## Koodikartta
- /pages: Sivukohtaiset komponentit (sisältö ja logiikka).
- /components: Jaetut käyttöliittymäkomponentit.
- /types.ts: Globaalit tyyppimäärittelyt.
- App.tsx: Reititys ja sovellusrakenne.
- contentRegistry.ts: Sisällön keskitetty rekisteri (Source of Truth).

## Definition of Done (DoD)
1. Toiminnallisuus: Ominaisuus vastaa annettua promptia.
2. UI/UX: Ulkoasu noudattaa "glassmorphism"-tyyliä ja on responsiivinen.
3. Saavutettavuus: Käytä ARIA-attribuutteja ja varmista riittävä kontrasti.
4. TypeScript: Ei any-tyyppejä ja tyypitys on johdonmukaista types.ts mukaan.
5. Rajaukset: Ei uusia backend-riippuvuuksia tai API-avaimia.`;

const Governance: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="Governance & Agent Rules | Arctic Hardening" description="AI Agenttien hallintasäännöt ja konfliktiresoluutio." />
      
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Agent Governance</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Miten hallitsemme tekoälyagentteja dynaamisessa kehitysympäristössä?
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <div className="glass p-10 rounded-[2.5rem] border-slate-800">
          <h2 className="text-2xl font-black text-emerald-400 mb-6 uppercase tracking-widest">Conflict Resolution</h2>
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="bg-emerald-500 text-slate-950 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">P1</div>
              <div>
                <h3 className="font-bold text-white">PDF Lähdemateriaali</h3>
                <p className="text-sm text-slate-400">Tekninen totuus. Jos koodi tai prompti poikkeaa tästä, PDF voittaa.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-slate-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">P2</div>
              <div>
                <h3 className="font-bold text-white">Repo-konfiguraatio</h3>
                <p className="text-sm text-slate-400">Järjestelmän rajoitteet (types.ts, metadata). Määrittelee mitä voidaan rakentaa.</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-slate-900 text-slate-500 w-8 h-8 rounded-full flex items-center justify-center font-black shrink-0">P3</div>
              <div>
                <h3 className="font-bold text-white">Käyttäjän Prompti</h3>
                <p className="text-sm text-slate-400">Tehtäväkohtainen muutos. Ei voi ohittaa P1/P2 ilman vahvistusta.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass p-10 rounded-[2.5rem] border-slate-800">
          <h2 className="text-2xl font-black text-white mb-6 uppercase tracking-widest">Agent Rules (AGENT.md)</h2>
          <div className="bg-black/40 p-6 rounded-xl font-mono text-xs text-emerald-400/80 max-h-[520px] overflow-y-auto leading-relaxed whitespace-pre-wrap">
            {agentRules}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Governance;
