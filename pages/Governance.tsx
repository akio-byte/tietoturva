
import React from 'react';
import { SEO, Hero } from '../components/Shared';

const AGENT_CONTENT = `
# Kehitystyön pelisäännöt (Agent Rules)

Tämä tiedosto lukitsee säännöt tekoälyavusteiselle kehitykselle.

## Vastuujaot
- AI Studio: Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- Codex: Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Conflict Resolution (Konfliktien ratkaisu)
Agentin on noudatettava seuraavaa protokollaa kohdatessaan ristiriitaista ohjeistusta:

1. Lähdeprioriteetti:
   - P1: PDF-lähdemateriaali (Tekninen totuus)
   - P2: Repo-konfiguraatio (AGENT.md, types.ts, metadata.json)
   - P3: Käyttäjän uusi prompti (Tehtäväkohtainen muutos)

2. Toimintatapa:
   - Flag & Ask: Jos prompti vaatii poikkeamaan P1- tai P2-tasoista, agentti keskeyttää ja pyytää vahvistusta.
   - Assume & Proceed: Sallittu vain matalan riskin visuaalisissa säätömuutoksissa.

3. Dokumentointi:
   - Kaikki ratkaistut konfliktit kirjataan tiedostoon docs/CONFLICTS.md.
`;

const Governance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Hallinto & Pelisäännöt | Lapland AI Lab" description="Kehitystyön ja sisällöntuotannon ohjeet." />
      
      <Hero 
        title="Governance & Hallinto"
        subtitle="Miten Lapland AI Lab hallitsee digitaalista omaisuuttaan ja tekoälyavusteista kehitystä."
        label="Agent Rules & Compliance"
      />

      <div className="glass p-10 rounded-[3rem] border border-slate-800 shadow-2xl">
        <div className="prose prose-invert max-w-none">
          {AGENT_CONTENT.split('\n').map((line, i) => {
            if (line.startsWith('# ')) return <h1 key={i} className="text-4xl font-black text-white mb-8 mt-12 tracking-tight">{line.replace('# ', '')}</h1>;
            if (line.startsWith('## ')) return <h2 key={i} className="text-2xl font-bold text-emerald-400 mb-6 mt-10 tracking-tight">{line.replace('## ', '')}</h2>;
            if (line.startsWith('- ')) return <li key={i} className="text-slate-300 ml-4 mb-2 list-none flex gap-3"><span className="text-emerald-500">•</span> {line.replace('- ', '')}</li>;
            if (line.trim() === '') return <br key={i} />;
            return <p key={i} className="text-slate-400 leading-relaxed mb-4">{line}</p>;
          })}
        </div>
      </div>
      
      <div className="mt-12 p-8 rounded-3xl bg-amber-500/5 border border-amber-500/20">
        <h3 className="text-amber-500 font-bold uppercase text-xs tracking-widest mb-4">Lähdeprioriteetti P0-P3</h3>
        <p className="text-slate-400 text-sm">
          Kaikki muutokset on tarkistettava suhteessa PDF-lähdemateriaaliin (P1). Mikäli tekninen toteutus vaatii poikkeamia, ne on dokumentoitava audit-logiin.
        </p>
      </div>
    </div>
  );
};

export default Governance;
