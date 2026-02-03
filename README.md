# Lapland AI Lab - Arctic Hardening Portal

Arctic Hardening Portal on Lapland AI Labin staattinen dokumentaatio- ja showcase-sivusto, joka kokoaa arktisen kyber- ja AI-turvan periaatteet yhteen. Sivusto on tarkoitettu turvallisuuslinjausten esittelyyn, ei tuotantokäyttöön tai käyttäjätiedon keruuseen.

## Live-sivu
- GitHub Pages: https://lapland-ai-lab.github.io/tietoturva/

## GitHub Pages -julkaisu
Sivusto julkaistaan GitHub Pages -palveluun Vite-buildin kautta.

1. Build pipeline
   - `npm ci`
   - `npm run build`
2. GitHub Actions rakentaa `dist/`-kansion ja julkaisee sen Pagesiin.
3. Vite on konfiguroitu base-polulla `/tietoturva/`, jotta assetit toimivat GitHub Pagesissa.

## AI-orkestroitu kehitys

Tämä projekti hyödyntää modernia AI-orkestrointimallia, jossa kehitystyö on jaettu **AI Studion** (suunnittelu ja sisältö) ja **Codexin** (toteutus) välillä.

### Kehitysprosessi (3 vaihetta)
1. **Määrittely:** AI Studio luo ominaisuuden kuvauksen ja sisällön (Markdown/JSON).
2. **Tehtävänanto:** AI Studio tuottaa standardoidun Codex-promptin.
3. **Toteutus:** Codex lukee promptin ja päivittää koodin vastaamaan vaatimuksia.

### Dokumentaatio
- [AGENT.md](./AGENT.md) - Projektin säännöt ja yleiskuvaus.
- [docs/AUDIT.md](./docs/AUDIT.md) - Staattisen julkaisutavan tietoturva-auditointi.
- [codex/skill.md](./codex/skill.md) - Codexin toimintaohjeet ja laatuvaatimukset.
- [ai-studio/bridge.md](./ai-studio/bridge.md) - AI Studion rooli ja kommunikaatiopohjat.

## Teknologiat
- React 19
- Tailwind CSS
- React Router 7
