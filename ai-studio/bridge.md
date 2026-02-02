# AI Studio Bridge - Orkestrointimalli

Tämä tiedosto kuvaa, miten AI Studio kommunikoi Codexin kanssa.

## AI Studion rooli
1. Toimia siltana käyttäjän toiveiden ja teknisen toteutuksen välillä.
2. Tuottaa valmiit sisältöpaketit (Markdown ja JSON).
3. Luoda yksiselitteinen Codex-prompti, jonka perusteella koodi voidaan päivittää.

## Vakioitu Codex-prompt-pohja
```text
Muuta tiedostoa [polku] ja toteuta [ominaisuus]:

**Yhteenveto:**
[Mitä tehdään lyhyesti]

**Toteutus:**
1. [Vaihe 1]
2. [Vaihe 2]

**Rajaukset:**
- Ei backend/login.
- Ei uusia riippuvuuksia.

**Definition of Done:**
- [Kriteeri 1]
- [Kriteeri 2]
```

## Sisältöformaatit
Ominaisuuden määrittelyssä on aina annettava sekä Markdown-rakenne että vastaava JSON-metadata, jotta Codex voi integroida ne suoraan koodiin tai tyyppeihin.