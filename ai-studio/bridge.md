
# AI Studio Bridge - Orkestrointimalli

Tämä tiedosto kuvaa, miten AI Studio kommunikoi Codexin kanssa ja miten sovellus upotetaan osaksi pääsivustoa.

## Integraatio laplandailab.fi:hin

Sovellus upotetaan polkuun `laplandailab.fi/tietoturva/`. 

### Vaatimukset integraatiolle:
1. **Pääsivuston yläpalkki:** Headerin tulee säilyttää visuaalinen linja pääsivuston kanssa.
2. **Reititys:** `HashRouter` mahdollistaa helpon upotuksen staattisena tiedostona mihin tahansa kansioon ilman palvelinpuolen uudelleenohjaussääntöjä.
3. **Linkitys:** Sisäiset linkit osoittavat `/content/slug` ja ulkoiset takaisin pääsivuston juureen.

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
