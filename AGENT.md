# Kehitystyön pelisäännöt (Agent Rules)

Tämä tiedosto lukitsee säännöt tekoälyavusteiselle kehitykselle.

## Vastuujaot
- **AI Studio:** Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- **Codex:** Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Conflict Resolution (Konfliktien ratkaisu)
Tekoälyagenttien on noudatettava seuraavaa hierarkiaa kohdatessaan ristiriitaista tietoa:

1. **Lähdeprioriteetti:**
   - **P1: PDF-lähdemateriaali:** Tekninen ja asiasisällöllinen totuus.
   - **P2: Repo-konfiguraatio (AGENT.md / types.ts):** Järjestelmän säännöt ja rakenteellinen totuus.
   - **P3: Uusi käyttäjä-prompti:** Tehtäväkohtainen ohjeistus (ei saa kumota P1/P2-tasoja ilman erillistä 'Override'-varmistusta).

2. **Toimintatapa ristiriidassa:**
   - **Flag & Ask (Oletus):** Jos prompti vaatii poikkeamaan PDF:n turvaohjeista tai types.ts:n rajoitteista, agentti pysäyttää työn ja raportoi ristiriidasta.
   - **Assume & Proceed:** Sallittu vain matalan riskin visuaalisissa muutoksissa (esim. hienovarainen sanamuodon muutos).

3. **Dokumentointi:**
   - Kaikki merkittävät ohitukset ja ratkaistut konfliktit on kirjattava tiedostoon `docs/CONFLICTS.md` muodossa: `[TIMESTAMP] | KOHDE | RISTIRIITA | PÄÄTÖS | VAIKUTUS`.

**Esimerkki:** Prompt pyytää navLabeliksi "Kattava Mobiiliturvaopas" (23 merkkiä). 
-> **Ratkaisu:** Agentti hylkää pituuden types.ts-validaation perusteella, ehdottaa lyhyempää muotoa ja raportoi rajoitteesta.

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