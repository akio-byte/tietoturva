# Kehitystyön pelisäännöt (Agent Rules)

Tämä tiedosto lukitsee säännöt tekoälyavusteiselle kehitykselle.

## Vastuujaot
- **AI Studio:** Vastaa dokumentaation ylläpidosta, sisällön tuotannosta ja ominaisuuksien määrittelystä. Ei kirjoita lopullista tuotantokoodia.
- **Codex:** Vastaa teknisestä toteutuksesta, logiikasta, lomakkeista ja UI-komponenteista.

## Koodikartta
- `/pages`: Sivukohtaiset komponentit (sisältö ja logiikka).
- `/components`: Jaetut käyttöliittymäkomponentit.
- `/types.ts`: Globaalit tyyppimäärittelyt.
- `App.tsx`: Reititys ja sovellusrakenne.

## Definition of Done (DoD)
Kaikki koodimuutokset on vahvistettava seuraavilla kriteereillä:
1. **Toiminnallisuus:** Ominaisuus vastaa annettua promptia.
2. **UI/UX:** Ulkoasu noudattaa "glassmorphism"-tyyliä ja on responsiivinen.
3. **TypeScript:** Ei `any`-tyyppejä (ellei välttämätöntä) ja tyypitys on johdonmukaista.
4. **Rajaukset:** Ei uusia backend-riippuvuuksia tai API-avaimia.