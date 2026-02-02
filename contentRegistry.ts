export interface ContentItem {
  slug: string;
  category: 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';
  featured: boolean;
  navLabel: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<{ title: string; body: string }>;
  checklist: string[];
  cta: { text: string; route: string | null };
}

export const contentRegistry: Record<string, ContentItem> = {
  "remote-work-security": {
    "slug": "remote-work-security",
    "category": "kyber",
    "featured": true,
    "navLabel": "Etätyö",
    "seo": { "title": "Etätyön tietoturvaopas | Lapland AI Lab", "description": "Käytännön ohjeet turvalliseen etätyöhön ja kotiverkon suojaamiseen." },
    "hero": { "title": "Toimisto ilman seiniä", "subtitle": "Näin pidät työtietosi turvassa tunturissa, kahvilassa ja kotona." },
    "sections": [
      { "title": "Kotiverkon kriittiset pisteet", "body": "Reititin on kotisi tietoturvan ovi. Jos oletussalasana on 'admin', ovi on käytännössä auki kaikille." }
    ],
    "checklist": [
      "Kytke VPN päälle aina julkisessa verkossa",
      "Vaihda kotireitittimen oletussalasana vahvaksi",
      "Pidä työlaite vain työkäyttössä",
      "Lukitse näyttö aina poistuessasi laitteelta",
      "Peitä kamera, kun et käytä sitä"
    ],
    "cta": { "text": "Varmista etätyön suojaus", "route": "/cyber-basics" }
  },
  "incident-response": {
    "slug": "incident-response",
    "category": "crisis",
    "featured": true,
    "navLabel": "Kriisinhallinta",
    "seo": { "title": "Tietomurto-ohjeistus | Lapland AI Lab", "description": "Mitä tehdä, kun tietomurto tapahtuu? Selkeät askeleet vahinkojen minimoimiseksi." },
    "hero": { "title": "Kun vahinko sattuu", "subtitle": "Rauhallisuus on vahvin suojasi. Seuraa näitä askeleita välittömästi, jos epäilet tietomurtoa." },
    "sections": [
      { "title": "Eristä ja ilmoita", "body": "Ensimmäinen sääntö on estää hyökkäyksen leviäminen katkaisemalla verkkoyhteydet laitteesta." }
    ],
    "checklist": [
      "Katkaise verkkoyhteydet (Wi-Fi/Johto)",
      "Älä sammuta virtaa todisteiden säilyttämiseksi",
      "Ota välittömästi yhteyttä organisaation IT-tukeen",
      "Kirjaa ylös kaikki poikkeavat havainnot",
      "Vaihda tärkeimmät salasanat toisella laitteella"
    ],
    "cta": { "text": "Lataa kriisinhallintaopas", "route": null }
  },
  "data-privacy": {
    "slug": "data-privacy",
    "category": "privacy",
    "featured": false,
    "navLabel": "Tietosuoja",
    "seo": { "title": "Tietosuoja ja GDPR pk-yrityksille | Lapland AI Lab", "description": "Yksinkertainen opas henkilötietojen käsittelyyn ja luottamuksen rakentamiseen." },
    "hero": { "title": "Luottamuksen rakentaminen", "subtitle": "Henkilötieto on arvokkainta, mitä asiakas antaa. Käsittele sitä kunnioituksella." },
    "sections": [
      { "title": "Datan minimointi", "body": "Kerää vain se tieto, jota todella tarvitset. Vähemmän dataa tarkoittaa aina pienempää riskiä yritykselle." }
    ],
    "checklist": [
      "Kartoita, missä asiakasdata sijaitsee",
      "Minimoi kerättävän tiedon määrä",
      "Tuhoa vanhentunut data säännöllisesti",
      "Päivitä julkinen tietosuojaseloste",
      "Varmista, että koko tiimi tunnistaa henkilötiedot"
    ],
    "cta": { "text": "Tarkista tietosuojataso", "route": "/business-audit" }
  },
  "ai-intellectual-property": {
    "slug": "ai-intellectual-property",
    "category": "ai",
    "featured": false,
    "navLabel": "AI-oikeudet",
    "seo": { "title": "AI ja tekijänoikeudet | Lapland AI Lab", "description": "Miten suojata yrityksen liikesalaisuudet tekoälyaikakaudella?" },
    "hero": { "title": "Kenen on koodi?", "subtitle": "Tekoäly on tehokas työkalu, mutta se vaatii tarkat säännöt organisaation IP-omaisuuden suojaamiseksi." },
    "sections": [
      { "title": "Liikesalaisuudet ja LLM-mallit", "body": "Julkiset tekoälyt oppivat syötteistäsi. Älä anna niille yrityksesi kruununjalokiviä." }
    ],
    "checklist": [
      "Lue tekoälytyökalun käyttöehdot huolellisesti",
      "Anonymisoi kaikki tekoälylle annettavat syötteet",
      "Älä syötä liikesalaisuuksia julkisiin malleihin",
      "Merkitse tekoälyllä tuotettu sisältö selkeästi",
      "Käytä yritystason suojattuja lisenssejä"
    ],
    "cta": { "text": "Suojaa yrityksen keksinnöt", "route": "/ai-safety" }
  },
  "deepfakes-and-influence": {
    "slug": "deepfakes-and-influence",
    "category": "ai",
    "featured": true,
    "navLabel": "Deepfakes",
    "seo": { "title": "Deepfakes ja huijaukset | Lapland AI Lab", "description": "Näin tunnistat tekoälyllä luodut valevideot ja huijausyritykset." },
    "hero": { "title": "Älä usko silmiäsi", "subtitle": "Tekoäly osaa matkia ääntä ja kuvaa. Opi tunnistamaan uuden sukupolven huijaukset." },
    "sections": [
      { "title": "Toimitusjohtajahuijaus 2.0", "body": "Huijari voi nyt soittaa videopuhelun käyttäen esimiehesi kasvoja. Luota, mutta varmista aina toista reittiä." }
    ],
    "checklist": [
      "Sovi tiimin kesken sisäinen turvasana",
      "Varmista oudot pyynnöt soittamalla tuttuun numeroon",
      "Tarkkaile epäluonnollisia liikkeitä videokuvassa",
      "Älä toimi paineen alla tai kiireessä",
      "Ilmoita epäilyttävistä yhteydenotoista heti"
    ],
    "cta": { "text": "Tunnista tekoälyhuijaukset", "route": "/ai-safety" }
  },
  "staff-training": {
    "slug": "staff-training",
    "category": "routines",
    "featured": false,
    "navLabel": "Koulutus",
    "seo": { "title": "Henkilöstön tietoturvakoulutus | Lapland AI Lab", "description": "Näin rakennat organisaatioon positiivisen ja valppaan tietoturvakulttuurin." },
    "hero": { "title": "Vahvin lenkki: Ihminen", "subtitle": "Tietoturva ei ole vain tekniikkaa, se on ihmisten välistä luottamusta ja yhteisiä toimintatapoja." },
    "sections": [
      { "title": "Syyllistämisestä oppimiseen", "body": "Virheiden pelko johtaa asioiden salaamiseen. Positiivinen kulttuuri kannustaa kertomaan havainnoista heti." }
    ],
    "checklist": [
      "Järjestä säännöllisiä tietoturvatuokioita",
      "Palkitse tarkkaavaisuudesta ja raportoinnista",
      "Pidä ohjeet lyhyinä ja helposti saatavilla",
      "Tee tietoturvasta osa perehdytystä",
      "Harjoittele kalasteluviestien tunnistamista"
    ],
    "cta": { "text": "Aloita tiimin koulutus", "route": "/routines" }
  },
  "annual-security-cycle": {
    "slug": "annual-security-cycle",
    "category": "routines",
    "featured": false,
    "navLabel": "Vuosikello",
    "seo": { "title": "Tietoturvan vuosikello | Lapland AI Lab", "description": "Suunnitelmallinen malli tietoturvan ylläpitoon koko kalenterivuoden ajaksi." },
    "hero": { "title": "Jatkuvuus on vakauden perusta", "subtitle": "Tietoturva ei ole kertahanke. Vuosikello auttaa jakamaan tehtävät hallittaviin osiin." },
    "sections": [
      { "title": "Neljä vuodenaikaa, neljä teemaa", "body": "Jaa vuosi neljänneksiin: 1. Perusteet, 2. Tekniikka, 3. Ihminen, 4. Strategia." }
    ],
    "checklist": [
      "Q1: Salasanatarkistus ja MFA-auditointi",
      "Q2: Ohjelmistojen inventaario ja päivitykset",
      "Q3: Henkilöstön koulutus ja harjoitukset",
      "Q4: Strategian päivitys ja riskien arviointi"
    ],
    "cta": { "text": "Lataa vuosikellon pohja", "route": "/routines" }
  },
  "management-security-strategy": {
    "slug": "management-security-strategy",
    "category": "crisis",
    "featured": false,
    "navLabel": "Strategia",
    "seo": { "title": "Tietoturvajohtaminen pk-yrityksessä | Lapland AI Lab", "description": "Tietoturva on liiketoiminnan jatkuvuuden ja arvon säilyttämisen työkalu." },
    "hero": { "title": "Turvallisuus on kilpailuetu", "subtitle": "Johtoryhmän tehtävä on varmistaa, että tietoturva tukee liiketoiminnan kasvua ja kestävyyttä." },
    "sections": [
      { "title": "Riskien hallinta vs. kustannukset", "body": "Tietoturvaan käytetty euro on vakuutus liiketoiminnan keskeytymättömyydelle ja brändin suojalle." }
    ],
    "checklist": [
      "Määrittele yrityksen kriittisin tieto",
      "Resursoi tietoturva osaksi budjettia",
      "Vaadi säännöllistä raportointia uhkakuvista",
      "Varmista vastuuhenkilöiden nimeäminen",
      "Integroidu tietoturva osaksi strategisia tavoitteita"
    ],
    "cta": { "text": "Vahvista johdon strategia", "route": "/business-audit" }
  },
  "pilviturvallisuuden-koventaminen": {
    "slug": "pilviturvallisuuden-koventaminen",
    "category": "kyber",
    "featured": false,
    "navLabel": "Pilviturva",
    "seo": { "title": "Pilvipalveluiden tietoturvan koventaminen | Lapland AI Lab", "description": "Opas pilvipalveluiden, kuten M365 ja Google Workspace, turvalliseen konfigurointiin." },
    "hero": { "title": "Pilvi haltuun turvallisesti", "subtitle": "Pilvipalvelut tarjoavat joustavuutta, mutta niiden turvallisuus riippuu omista valinnoistasi." },
    "sections": [
      { "title": "Jaettu vastuu pilvessä", "body": "Pilvipalveluntarjoaja vastaa fyysisestä infrastruktuurista, mutta sinä vastaat datasta, identiteeteistä ja pääsynhallinnasta." }
    ],
    "checklist": [
      "Ota MFA käyttöön poikkeuksetta kaikille käyttäjille",
      "Tarkista jaetut tiedostolinkit ja niiden käyttöoikeudet",
      "Määrittele geo-blocking kriittisille kirjautumisille",
      "Auditoida pilviympäristön lokit säännöllisesti"
    ],
    "cta": { "text": "Lue lisää pilviturvasta", "route": null }
  },
  "vaikuttaminen-ja-psykologia": {
    "slug": "vaikuttaminen-ja-psykologia",
    "category": "kyber",
    "featured": false,
    "navLabel": "Psykologia",
    "seo": { "title": "Vaikuttaminen ja psykologia tietoturvassa | Lapland AI Lab", "description": "Ymmärrä miten hyökkääjät manipuloivat ihmismieltä ja miten suojautua." },
    "hero": { "title": "Mielen murtaminen", "subtitle": "Hyökkääjä ei aina tarvitse monimutkaista koodia, jos hän hallitsee psykologisen vaikuttamisen ja manipuloinnin." },
    "sections": [
      { "title": "Manipulaation yleisimmät tekniikat", "body": "Kiireen tuntu, auktoriteetin teeskentely ja pelon lietsominen ovat hyökkääjän yleisimmät työkalut luottamuksen murtamiseen." }
    ],
    "checklist": [
      "Pysähdy ja hengitä, jos viesti vaatii välitöntä toimintaa",
      "Varmista pyyntö aina toista, tuttua kanavaa pitkin",
      "Älä toimi paineen alla; kysy neuvoa kollegalta",
      "Ole kriittinen liian hyviltä kuulostaville tarjouksille"
    ],
    "cta": { "text": "Suojaudu manipulaatiolta", "route": null }
  },
  "ai-hallintostrategia": {
    "slug": "ai-hallintostrategia",
    "category": "ai",
    "featured": false,
    "navLabel": "AI-hallinta",
    "seo": { "title": "Tekoälyn hallintastrategia organisaatiolle | Lapland AI Lab", "description": "Luo raamit ja säännöt tekoälyn turvalliselle hyödyntämiselle yrityksessäsi." },
    "hero": { "title": "Hallittu tekoäly-siirtymä", "subtitle": "Innovaatio vaatii ohjausta. Luo organisaatiollesi kestävä ja turvallinen AI-strategia." },
    "sections": [
      { "title": "Politiikka ja pelisäännöt", "body": "Määrittele selkeästi, mitä tekoälytyökaluja organisaatiossa saa käyttää ja mitä tietoa niihin saa syöttää." }
    ],
    "checklist": [
      "Luo kirjallinen AI-käyttöohjeistus henkilöstölle",
      "Nimeä vastuuhenkilö tekoälytyökalujen arviointiin",
      "Kouluta tiimi tunnistamaan tekoälyyn liittyvät riskit",
      "Päivitä tietosuojaselosteet vastaamaan AI-käyttöä"
    ],
    "cta": { "text": "Luo AI-strategia", "route": null }
  }
};