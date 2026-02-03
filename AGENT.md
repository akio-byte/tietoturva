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
   - Kaikki ratkaistut konfliktit kirjataan tiedostoon `docs/CONFLICTS.md` (Aikaleima | Kohde | Ristiriita | Päätös).

**Esimerkki:** Prompt pyytää navLabeliksi "Mobiiliturva Pohjoisessa" (24 merkkiä).
-> **Ratkaisu:** Agentti ilmoittaa `types.ts`:n 20 merkin rajoitteesta ja ehdottaa muotoa "Mobiiliturva Arktis".

## Koodikartta
- `/pages`: Sivukohtaiset komponentit (sisältö ja logiikka).
- `/components`: Jaetut käyttöliittymäkomponentit.
- `/types.ts`: Globaalit tyyppimäärittelyt.
- `App.tsx`: Reititys ja sovellusrakenne.
- `contentRegistry.ts`: Sisällön keskitetty rekisteri (Source of Truth).

## Definition of Done (DoD)
Kaikki koodimuutokset on vahvistettava seuraavilla kriteereillä:
1. **Toiminnallisuus:** Ominaisuus vastaa annettua promptia.
2. **UI/UX:** Ulkoasu noudattaa "glassmorphism"-tyyliä ja on responsiivinen.
3. **Saavutettavuus:** Käytä ARIA-attribuutteja ja varmista riittävä kontrasti.
4. **TypeScript:** Ei `any`-tyyppejä ja tyypitys on johdonmukaista `types.ts` mukaan.
5. **Rajaukset:** Ei uusia backend-riippuvuuksia tai API-avaimia.