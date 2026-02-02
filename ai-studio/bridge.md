
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

## Integraatio laplandailab.fi:hin
Sovellus upotetaan polkuun `laplandailab.fi/tietoturva/`. 
1. **Header:** Säilytettävä visuaalinen linja.
2. **Reititys:** `HashRouter` käytössä.
