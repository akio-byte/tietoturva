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
- [docs/AUDIT.md](./docs/AUDIT.md) - Auditointiyhteenveto ja löydökset.

## Quickstart
```bash
npm ci
npm run dev
```

## Run tests
```bash
npm run test
npm run build
```

## Security checks
```bash
npm audit --omit=dev
rg "(AKIA|BEGIN (RSA|OPENSSH) PRIVATE KEY|AIza|ghp_|xoxb-|sk-[A-Za-z0-9])" -n . --glob '!node_modules/*' --glob '!.git/*'
find . -maxdepth 3 \( -path './node_modules/*' -o -path './.git/*' \) -prune -o \( -name '.env*' -o -name '*.pem' -o -name '*.key' \) -print
```

## Agent/skill I/O schema + esimerkit
**AI Studio ➜ Codex (sisältö/tehtävänanto)**
```json
{
  "role": "AI Studio",
  "task": "Luo 2 uutta ContentItem-sisältöä",
  "files": ["contentRegistry.ts"],
  "constraints": [
    "Älä muuta App.tsx reititystä",
    "Käytä glassmorphism-tyyliä"
  ]
}
```

**Codex ➜ Repo (toteutus)**
```json
[
  {
    "file": "contentRegistry.ts",
    "changes": "Lisätty 2 uutta ContentItem-entryä ContentItem-rajapinnan mukaisesti."
  }
]
```

## Teknologiat
- React 19
- Tailwind CSS
- React Router 7
