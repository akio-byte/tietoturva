# Auditointi

Tämä dokumentti kuvaa tietoturvaoppaan auditointikäytännöt ja läpinäkyvän jäljitettävyyden.

## Tavoite
- Varmistaa, että sisältö ja toteutus vastaavat AGENT.md:n sääntöjä.
- Tunnistaa muutokset, joilla on vaikutus tietoturvaan, luotettavuuteen tai saatavuuteen.
- Pitää julkaistu sisältö yhdenmukaisena Content-as-Code -mallin kanssa.

## Tarkastuspolku
1. **Sisällön lähde:** muutokset dokumentoidaan `contentRegistry.ts`-tiedostoon.
2. **Tekninen toteutus:** kaikki UI- ja logiikkamuutokset tehdään TypeScript-tyypityksen mukaisesti.
3. **Build & julkaisu:** CI ajaa `npm run build` ja julkaisee staattisen `dist`-paketin.

## Hyväksyntäkriteerit
- Ei uusia backend- tai API-riippuvuuksia.
- Ei runtime-avaimia tai ulkoisia kutsuja tuotannossa.
- Glassmorphism-tyyli ja saavutettavuus säilyvät.

## Auditointijälki
- Jokainen muutos näkyy Git-historiassa.
- Konfliktit kirjataan `docs/CONFLICTS.md`-tiedostoon aikaleiman kanssa.

## Päivitysrytmi
Auditointi päivitetään aina, kun uusia osioita, reittejä tai sisältöjä lisätään.
