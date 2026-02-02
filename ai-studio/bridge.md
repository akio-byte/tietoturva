# AI Studio ↔ Codex -vuorovaikutusmalli

## AI Studio -metaprompt (lyhyt)
Tuota selkeä, toteutettava sisältöpaketti. Erota sisältö ja tekniset ohjeet. Pidä paketti tiiviinä, mutta riittävän yksityiskohtaisena, jotta Codex voi tehdä repo-muutokset ilman oletuksia.

## Codexille palautettava formaatti
Palauta yksi prompti seuraavalla rakenteella:
1) **Tavoite** (1–2 virkettä)
2) **Sisältöpaketti** (Markdown- tai JSON-muodossa alla)
3) **Tekniset ohjeet** (reitit, komponentit, rajaukset)
4) **Validoi** (mitä tarkistetaan ennen valmistumista)

## Sisältöpaketti (A) Markdown-paketti
Käytä tätä sisältömuotoa, kun sisältö menee suoraan sivulle:
- **Otsikko**
- **Ingressi**
- **Miksi tärkeää**
- **Tee näin** (lista)
- **CTA**

## Sisältöpaketti (B) JSON-paketti
Käytä tätä, kun sisältö halutaan rakenteisena:
```json
{
  "title": "",
  "sections": [
    { "title": "", "body": "" }
  ],
  "checklist": [""],
  "cta": { "text": "", "route": "" },
  "seo": { "title": "", "description": "" }
}
```
