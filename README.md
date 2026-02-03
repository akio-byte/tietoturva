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

## Sivut: Blueprintit ja Arkkitehtuuri
- **Blueprintit:** listaa kaikki `contentRegistry.ts`-sisältöobjektit kortteina ja mahdollistaa suodatuksen kategorian mukaan.
- **Arkkitehtuuri:** kuvaa Content-as-Code -mallin sekä AI Studio → Codex → CI → GitHub Pages -julkaisuketjun.

## AI-assistentti (placeholder)
AI-assistentti näkyy kaikilla sivuilla, mutta se on tällä hetkellä staattinen demokomponentti. Se **ei tee runtime-AI-kutsuja** eikä käytä API-avaimia.

## Paikallinen ajo ja buildaus
### Asennus ja kehitystila
```bash
npm ci
npm run dev
```

### GitHub Pages -build
```bash
npm run build
```

## GitHub Pages -osoite
Julkaistu sivusto löytyy osoitteesta:  
`https://lapland-ai-lab.github.io/tietoturva/`
