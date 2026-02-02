# Repo-ohjeistus (Lapland AI Lab – tietoturvaopas)

## Projektin tarkoitus
Lapland AI Labin tietoturvaopas: selkeä, käytännönläheinen sisältö tietoturvan perusteista ja hyvistä käytännöistä.

## Koodikartta
- **App.tsx**: sovelluksen reititys ja sivujen kytkentä.
- **/pages**: yksittäiset sivut (sisällöt ja näkymät).
- **/components**: jaetut komponentit (esim. SEO, Hero, Shared.tsx-tyylit).
- **types.ts**: jaetut tyypit ja yhteiset datarakenteet.

## Konventiot
- Säilytä olemassa oleva **tumma “glasmorphism” -ilme**.
- Käytä **Tailwindia** ja olemassa olevia tyylipaloja.
- Älä lisää uusia kirjastoja ilman perusteltua tarvetta.

## Turva
- **Älä koskaan lisää avaimia koodiin.**
- **Älä lisää .env-sisältöä repoihin.**

## “Tehtäväpaketti”-malli
Käytä seuraavaa rakennetta tehtävän speksaamiseen:
- **Otsikko**: lyhyt ja kuvaava nimi.
- **Scope**: mitä muuttuu ja miksi.
- **Tiedostot**: muutettavat tiedostot (polut).
- **UI**: näkyvät muutokset käyttöliittymään.
- **Logiikka**: toiminnalliset muutokset ja vaikutukset.
- **Rajaukset**: mitä ei tehdä.
- **DoD**: Definition of Done -kriteerit.

## Definition of Done (DoD)
- Build ei hajoa.
- Ei TypeScript-virheitä.
- Reititys toimii odotetusti.
- UI-ilme säilyy ennallaan (glasmorphism).
