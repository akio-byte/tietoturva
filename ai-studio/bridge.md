
# AI Studio Bridge - Orkestrointimalli

Tämä tiedosto kuvaa, miten AI Studio kommunikoi Codexin kanssa ja miten sovellus upotetaan osaksi pääsivustoa.

## Visual & Content Orchestrator (Prompt Agentille)

Käytä seuraavaa kehoitetta, kun haluat agentin tuottavan uutta sisältöä tai parantavan visuaaleja:

---
**ROOLI:** Senior Content Designer & Frontend Developer.
**KONTEKSTI:** Työskentelemme repossa `https://github.com/akio-byte/tietoturva.git`.
**TEKNOLOGIA:** React 19, Tailwind CSS, Lucide-icons (tai SVG), Glassmorphism-teema.

**TEHTÄVÄ:**
1. Lue `contentRegistry.ts` ymmärtääksesi nykyinen tietorakenne.
2. Luo [X] kpl uusia sisältöpaketteja noudattaen `ContentItem`-rajapintaa.
3. Varmista, että `cta.route` on `null` jos sisältö on vasta luonnos ("Tulossa").
4. Paranna sivuston visuaalista ilmettä:
   - Käytä `aurora-text` -gradientteja otsikoissa.
   - Hyödynnä `glass`-luokkaa korteissa.
   - Lisää dynaamisia SVG-ikoneita, jotka sopivat aihealueeseen (kyber, AI, mobiili).

**SÄÄNNÖT:**
- ÄLÄ muuta `App.tsx` reititystä.
- Lisää uudet sisällöt VAIN `contentRegistry.ts` -tiedostoon.
- Jos teet UI-parannuksia, tee ne `components/Shared.tsx` tai `pages/Home.tsx` -tiedostoihin säilyttäen nykyinen tyyli.
- Pidä koodi puhtaana ja tyypitettynä (TypeScript).

**LOPPUTULOS:** Anna muutokset tiedostokohtaisina koodiblokkeina.
---

## AI Studio -kehoite (sivun parantaminen ja loppuunsaattaminen)

Käytä seuraavaa kehoitetta, kun haluat AI Studion tuottavan selkeän parannus- ja viimeistelyohjeistuksen:

---
**ROOLI:** Senior Product Designer & UX Writer.
**KONTEKSTI:** Työskentelemme repossa `https://github.com/akio-byte/tietoturva.git` ja sovellus on React 19 + Tailwind CSS (glassmorphism).

**TEHTÄVÄ:**
1. Lue `pages/Home.tsx`, `components/Shared.tsx` ja `contentRegistry.ts` ymmärtääksesi nykyinen rakenne ja sisältö.
2. Listaa tärkeimmät puutteet (sisältö, UI/UX, saavutettavuus, responsiivisuus).
3. Ehdota konkreettiset parannukset prioriteettijärjestyksessä:
   - Sisältö: otsikot, tekstit, CTA:t.
   - UI: kortit, typografia, kontrastit, spacing.
   - Visuaalit: ikonit, aurora-tekstit, glassmorphism.
4. Laadi “Definition of Done” -checklist, joka varmistaa viimeistelyn.
5. Tee lopuksi lyhyt, selkeä toteutusohjeistus Codexille (1–2 kappaletta).

**SÄÄNNÖT:**
- Älä ehdota uusia backend-riippuvuuksia tai API-avaimia.
- Älä muuta reititystä (`App.tsx`).
- Kaikki ehdotukset tulee pystyä toteuttamaan front-endissä.

**LOPPUTULOS:** Palauta selkeästi jäsennelty suunnitelma ja lyhyt toteutusohjeistus Codexille.
---

## Integraatio laplandailab.fi:hin
Sovellus upotetaan polkuun `laplandailab.fi/tietoturva/`. 
1. **Header:** Säilytettävä visuaalinen linja.
2. **Reititys:** `HashRouter` käytössä.
