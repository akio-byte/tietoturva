# Codex Skill - Koodin toteutusmalli

Codex toimii projektin teknisenä toteuttajana. Noudata näitä ohjeita jokaisessa tehtävässä.

## Työvuon vaiheet
1. **Tehtävän analyysi:** Lue prompti ja tunnista muokattavat tiedostot.
2. **Pilkkominen:** Jaa monimutkaiset UI-muutokset pienempiin osiin (State -> UI -> Logiikka).
3. **Toteutus:** Kirjoita puhdasta ja dokumentoitua React-koodia.
4. **Laatutarkastus:** Varmista, että muutokset eivät riko olemassa olevaa reititystä tai teemaa.

## Rajoitukset
- **Ei backendia:** Kaikki logiikka on oltava client-side (esim. `useState`, `localStorage`).
- **Ei kirjautumista:** Kaikki toiminnot on oltava saatavilla ilman kirjautumista.
- **Riippuvuudet:** Älä lisää uusia npm-paketteja ilman nimenomaista pyyntöä.
- **API-avaimet:** Älä koskaan lisää API-avaimia tai `.env`-tiedostoja koodiin.

## Testauslista
- [ ] Toimiiko reititys uudelle sivulle?
- [ ] Onko UI responsiivinen (mobiili/desktop)?
- [ ] Onko tyylit (Tailwind) linjassa muun sivuston kanssa?
- [ ] Onko TypeScript-virheitä?