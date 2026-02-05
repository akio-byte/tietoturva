# Lapland AI Lab - Tietoturvaopas v1.7.0

Tämä on Lapland AI Labin kattava tietoturvaportaali. Versio 1.7.0 on optimoitu Vercel-ympäristöön ja se käyttää staattista Vite-buildia.

## Julkaisu (Vercel)

Vercel-julkaisu on automaattinen. Build-komento on `npm run build` ja output-kansio on `dist/`.

### Ominaisuudet
- **Static Build:** Ei riippuvuutta ulkoisista importmapeista.
- **Audit Submissions:** Auditoinnin tulokset voidaan tallentaa localStoragella ja tarkastella Admin-paneelissa.
- **Lead Dev Reporting:** Tekninen tila ja toimenpiteet on listattu Audit-raportissa.

## Kehitysprosessi
Projekti hyödyntää AI-orkestrointimallia, jossa määrittely (AI Studio) ja toteutus (Codex) on eriytetty.

### Skriptit
- `npm run dev`: Käynnistä kehitysympäristö.
- `npm run build`: Rakenna staattinen versio julkaisua varten.
- `npm run test`: Suorita TypeScript-tyyppitarkistus.

## Teknologiat
- React 19
- Tailwind CSS
- Vite
- TypeScript 5.3