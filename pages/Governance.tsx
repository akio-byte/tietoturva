import React from 'react';
import { SEO, Hero } from '../components/Shared';
import SimpleMarkdown from '../components/SimpleMarkdown';

const AGENT_CONTENT = `
# Kehitystyön pelisäännöt (Agent Rules)

Tämä tiedosto lukitsee säännöt tekoälyavusteiselle kehitykselle.

## Vastuujaot
- **AI Studio:** Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- **Codex:** Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Conflict Resolution (Konfliktien ratkaisu)
Agentin on noudatettava seuraavaa protokollaa kohdatessaan ristiriitaista ohjeistusta:

1. **Lähdeprioriteetti:**
   - **P1: PDF-lähdemateriaali** (Tekninen totuus)
   - **P2: Repo-konfiguraatio** (AGENT.md, types.ts, metadata.json)
   - **P3: Käyttäjän uusi prompti** (Tehtäväkohtainen muutos)
   *Perustelu: PDF edustaa auditoitua asiantuntijatietoa, konfiguraatio järjestelmän rajoitteita.*

2. **Toimintatapa:**
   - **Flag & Ask:** Jos prompti vaatii poikkeamaan P1- tai P2-tasoista, agentti keskeyttää ja pyytää vahvistusta.
   - **Assume & Proceed:** Sallittu vain matalan riskin visuaalisissa säätömuutoksissa.

3. **Dokumentointi:**
   - Kaikki ratkaistut konfliktit kirjataan tiedostoon \`docs/CONFLICTS.md\` (Aikaleima | Kohde | Ristiriita | Päätös).

## Koodikartta
- \`/pages\`: Sivukohtaiset komponentit (sisältö ja logiikka).
- \`/components\`: Jaetut käyttöliittymäkomponentit.
- \`/types.ts\`: Globaalit tyyppimäärittelyt.
- \`App.tsx\`: Reititys ja sovellusrakenne.
- \`contentRegistry.ts\`: Sisällön keskitetty rekisteri (Source of Truth).

## Definition of Done (DoD)
Kaikki koodimuutokset on vahvistettava seuraavilla kriteereillä:
1. **Toiminnallisuus:** Ominaisuus vastaa annettua promptia.
2. **UI/UX:** Ulkoasu noudattaa "glassmorphism"-tyyliä ja on responsiivinen.
3. **Saavutettavuus:** Käytä ARIA-attribuutteja ja varmista riittävä kontrasti.
4. **TypeScript:** Ei \`any\`-tyyppejä ja tyypitys on johdonmukaista \`types.ts\` mukaan.
5. **Rajaukset:** Ei uusia backend-riippuvuuksia tai API-avaimia.
`;

const Governance: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Governance & Hallinto | Lapland AI Lab" description="Kehitystyön ja sisällöntuotannon ohjeet ja hallintamallit." />
      
      <Hero 
        title="Governance & Hallinto"
        subtitle="Miten Lapland AI Lab hallitsee digitaalista omaisuuttaan ja tekoälyavusteista kehitystä."
        label="Vastuullinen Hallintamalli"
      />

      <div className="mb-16 space-y-6">
         <h2 className="text-2xl font-bold text-white tracking-tight">Miksi hallintamalli on tärkeä?</h2>
         <p className="text-slate-400 leading-relaxed font-medium">
            Hallintamalli (Governance) on organisaation selkäranka. Se varmistaa, että tekoälyä käytetään vastuullisesti ja tietoturvallisesti, ilman että innovaatio pysähtyy. 
            Tällä sivulla määrittelemme "Source of Truth" -periaatteet koodillemme.
         </p>
      </div>

      <div className="glass p-10 rounded-[3rem] border border-slate-800 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-[60px]"></div>
        <SimpleMarkdown content={AGENT_CONTENT} />
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