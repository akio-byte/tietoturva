# Lapland AI Lab - Tietoturvaportaali

Tämä repo sisältää Lapland AI Labin staattisen tietoturvaportaalin. Portaali on demoympäristö, joka esittelee arktisen kyberturvan perusperiaatteet, auditointipohjat ja hallintamallin ilman taustapalveluita. Sisältö toimii täysin staattisesti, joten sivut ovat GitHub Pages -yhteensopivia.

**Live-sivu:** https://akio-byte.github.io/tietoturva/

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

## Paikallinen ajo ja build
```bash
npm ci
npm run dev
```

```bash
npm run build
```

## GitHub Pages -julkaisu
1. Varmista, että `vite.config.ts` käyttää `base: "/tietoturva/"`.
2. Puske muutokset `main`-haaraan.
3. GitHub Actions ajaa `npm ci` ja `npm run build`, ja julkaisee `dist`-kansion Pagesiin.
4. Julkaisun URL: https://akio-byte.github.io/tietoturva/

## Huomioita
- Portaali on täysin staattinen: ajonaikaisia AI-kutsuja ei tehdä.
- Build-vaiheessa ei injektoida API-avaimia tai backend-integraatioita.

## Teknologiat
- React 19
- Tailwind CSS
- React Router 7
