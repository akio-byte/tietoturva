
# Kehitystyön pelisäännöt (Agent Rules)

Tämä tiedosto lukitsee säännöt tekoälyavusteiselle kehitykselle.

## Vastuujaot
- **AI Studio:** Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- **Codex:** Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Ristiriitojen hallinta (Conflict Resolution)
Jos lähdemateriaali (PDF/Documentation) ja uusi käyttäjä-prompti ovat ristiriidassa, noudata seuraavaa prioriteettijärjestystä:

1. **Lähdeprioriteetti:** 
   - 1. PDF-lähdemateriaali (Tekninen totuus)
   - 2. AGENT.md / Dokumentaatio (Prosessitotuus)
   - 3. Käyttäjän prompti (Tehtäväkohtainen muutos)

2. **Toimintatapa:**
   - **Flag & Ask:** Jos ristiriita on teknisesti kriittinen (esim. tietoturvaohje muuttuu vaaralliseksi), pysäytä toteutus ja pyydä vahvistus.
   - **Assume & Proceed:** Jos kyseessä on visuaalinen tai vähäinen sävyero, suosi PDF:n mukaista asiantuntevaa sävyä, mutta toteuta promptin pyytämä rakenne.

3. **Dokumentointi:**
   - Merkitse merkittävät poikkeamat koodiin kommentteina: `// CONFLICT: Override based on PDF p. 12`.

**Esimerkki:** Prompt pyytää poistamaan MFA-vaatimuksen kirjautumisesta. PDF sanoo MFA on pakollinen. -> **Toiminta:** Estä muutos, huomauta PDF-vaatimuksesta.

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
