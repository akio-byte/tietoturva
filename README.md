# Lapland AI Lab - Tietoturvaopas

Tämä on Lapland AI Labin kattava 6-osainen tietoturvaopas, joka on toteutettu React + Tailwind -pohjaisena verkkosovelluksena. Opas keskittyy pk-yritysten ja henkilöstön tietoturvaosaamisen kehittämiseen.

## AI-orkestroitu kehitys

Tämä projekti hyödyntää modernia AI-orkestrointimallia, jossa kehitystyö on jaettu **AI Studion** (suunnittelu ja sisältö) ja **Codexin** (toteutus) välillä.

### Kehitysprosessi (3 vaihetta)
1. **Määrittely:** AI Studio luo ominaisuuden kuvauksen ja sisällön (Markdown/JSON).
2. **Tehtävänanto:** AI Studio tuottaa standardoidun Codex-promptin.
3. **Toteutus:** Codex lukee promptin ja päivittää koodin vastaamaan vaatimuksia.

### Dokumentaatio
- [AGENT.md](./AGENT.md) - Projektin säännöt ja yleiskuvaus.
- [codex/skill.md](./codex/skill.md) - Codexin toimintaohjeet ja laatuvaatimukset.
- [ai-studio/bridge.md](./ai-studio/bridge.md) - AI Studion rooli ja kommunikaatiopohjat.

## Teknologiat
- React 19
- Tailwind CSS
- React Router 7

## PDF-lataukset (A4)
Sivustolla on PDF-latauksia varten kevyt PDF-generaattori. Oletuksena käyttöliittymä hakee `/api/pdf?slug=<slug>` -endpointin ja fallbackina generoi PDF:n client-puolella, jos endpoint ei ole saatavilla.

### Lisää uusi PDF-dokumentti
1. Lisää uusi `ContentItem` `contentRegistry.ts`-tiedostoon ja varmista, että `slug` vastaa lataukseen käytettävää tunnistetta.
2. Lisää mapping `lib/pdf/mappings.ts`-tiedostoon:
   - `buttonId`, `slug`, `filename`, `label`, `fallbackRoute`.
3. Lisää CTA-painike halutulle sivulle käyttäen `PdfDownloadCTA`-komponenttia.
4. (Valinnainen) Päivitä tarvittaessa tekstit/CTA-reitit sisältöön.

### Endpoint ja välimuisti
`/api/pdf?slug=<slug>` palauttaa PDF:n `Content-Disposition`-liitteellä sekä `Cache-Control: public, max-age=3600` -otsikolla.
