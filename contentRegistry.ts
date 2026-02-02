
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
  "cloud-security-hardening": {
    "slug": "cloud-security-hardening",
    "category": "kyber",
    "featured": false,
    "navLabel": "Pilviturva",
    "seo": { "title": "Pilvipalveluiden suojaus | Lapland AI Lab", "description": "Miten varmistaa Microsoft 365, Google Workspace ja muiden pilvipalveluiden turvallisuus." },
    "hero": { "title": "Turvallinen pilvipalvelu", "subtitle": "Pilvi on vain jonkun muun tietokone. Varmista, että hallitset pääsyä omaan dataasi." },
    "sections": [
      { "title": "Vastuunjako pilvessä", "body": "Muista, että pilvipalvelun tarjoaja vastaa alustasta, mutta sinä vastaat datasta ja sen pääsynhallinnasta." }
    ],
    "checklist": [
      "Aktivoi MFA kaikille pilvipalvelun käyttäjille",
      "Tarkista ulkoiset jakolinkit kerran kuukaudessa",
      "Rajoita pääsynhallinta vain tarvittaviin maihin (Geo-blocking)",
      "Varmuuskopioi kriittinen pilvidata erilliseen sijaintiin",
      "Poista vanhat käyttäjätunnukset heti työsuhteen päättyessä"
    ],
    "cta": { "text": "Lue kyberperusteet", "route": "/cyber-basics" }
  },
  "social-engineering-psychology": {
    "slug": "social-engineering-psychology",
    "category": "kyber",
    "featured": false,
    "navLabel": "Vaikuttaminen",
    "seo": { "title": "Sosiaalisen manipuloinnin psykologia | Lapland AI Lab", "description": "Miksi lankeamme huijauksiin ja miten voimme suojautua psykologiselta vaikuttamiselta." },
    "hero": { "title": "Ihmismielen haavoittuvuudet", "subtitle": "Hyökkääjä ei murra koodia, vaan luottamuksen. Tunnista manipulaation merkit ajoissa." },
    "sections": [
      { "title": "Vaikuttamisen kuusi peruspilaria", "body": "Auktoriteetti, kiire, niukkuus, miellyttäminen, vastavuoroisuus ja johdonmukaisuus ovat huijarin työkaluja." }
    ],
    "checklist": [
      "Pysähdy, jos viesti vaatii välitöntä toimintaa",
      "Varmista oudot pyynnöt soittamalla lähettäjälle",
      "Älä kerro arkaluonteisia tietoja puhelimessa yllättävälle soittajalle",
      "Sovi organisaatioon selkeät prosessit rahansiirroille",
      "Opeta tiimille, että kysyminen on aina turvallisempaa kuin olettaminen"
    ],
    "cta": { "text": "Tee auditointi", "route": "/business-audit" }
  },
  "ai-governance-strategy": {
    "slug": "ai-governance-strategy",
    "category": "ai",
    "featured": false,
    "navLabel": "AI-hallinta",
    "seo": { "title": "Tekoälyn hallintamalli pk-yritykselle | Lapland AI Lab", "description": "Luo yrityksellesi selkeät raamit tekoälyn turvalliseen ja eettiseen käyttöön." },
    "hero": { "title": "Strateginen AI-turva", "subtitle": "Tekoäly ilman ohjausta on riski. Luo säännöt, jotka mahdollistavat innovaation turvallisesti." },
    "sections": [
      { "title": "AI-politiikka osana tietoturvaa", "body": "Organisaation tulee määritellä, mitä tekoälytyökaluja käytetään ja miten dataa käsitellään niissä." }
    ],
    "checklist": [
      "Kirjaa ylös hyväksytyt AI-työkalut",
      "Määrittele kielletyt tietotyypit (esim. lähdekoodi julkiseen malliin)",
      "Nimeä vastuuhenkilö tekoälyn valvontaan",
      "Varmista, että AI-tuotokset tarkistetaan aina asiantuntijan toimesta",
      "Päivitä työsopimukset huomioimaan AI-oikeudet"
    ],
    "cta": { "text": "Siirry AI-turvaan", "route": "/ai-safety" }
  }
};
