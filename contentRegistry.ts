
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
  "email-safety": {
    "slug": "email-safety",
    "category": "kyber",
    "featured": false,
    "navLabel": "Sähköposti",
    "seo": { "title": "Sähköpostin suojausopas | Lapland AI Lab", "description": "Näin tunnistat hienostuneet kalasteluviestit." },
    "hero": { "title": "Rauhallinen valppaus postilaatikolla", "subtitle": "Sähköposti on edelleen yleisin tie organisaatioon." },
    "sections": [{ "title": "Kalastelun uudet muodot", "body": "Tekoälyllä luodut viestit ovat kieliopillisesti täydellisiä." }],
    "checklist": ["Tarkista lähettäjä", "Älä klikkaa linkkejä", "Ilmoita IT-tuelle"],
    "cta": { "text": "Lue lisää", "route": "/cyber-basics" }
  },
  "backup-basics": {
    "slug": "backup-basics",
    "category": "crisis",
    "featured": false,
    "navLabel": "Varmuuskopiot",
    "seo": { "title": "Varmuuskopioinnin 3-2-1-sääntö | Lapland AI Lab", "description": "Tietosi ovat turvassa vain, jos ne on varmuuskopioitu." },
    "hero": { "title": "Tietosi ovat vakaalla kalliolla", "subtitle": "Varmuuskopio on ainoa todellinen vakuutus." },
    "sections": [{ "title": "3-2-1 Sääntö", "body": "3 kopiota, 2 mediaa, 1 offline." }],
    "checklist": ["Testaa palautus", "Automaatio päälle", "Pidä yksi offline-kopio"],
    "cta": { "text": "Katso rutiinit", "route": "/routines" }
  },
  "ai-prompt-security": {
    "slug": "ai-prompt-security",
    "category": "ai",
    "featured": false,
    "navLabel": "AI-kehotteet",
    "seo": { "title": "Turvallinen AI-kehotteiden käyttö | Lapland AI Lab", "description": "Käytä AI:ta vuotamatta liikesalaisuuksia." },
    "hero": { "title": "Kirkkaat ajatukset, turvalliset kehotteet", "subtitle": "Opi suojaamaan syötteesi." },
    "sections": [{ "title": "Kehotemuotoilu", "body": "Opeta tiimisi anonymisoimaan data." }],
    "checklist": ["Poista nimet", "Älä syötä salaisuuksia", "Käytä yrityslisenssejä"],
    "cta": { "text": "Syvenny AI-turvaan", "route": "/ai-safety" }
  },
  "mobile-vpn-guide": {
    "slug": "mobile-vpn-guide",
    "category": "mobile",
    "featured": false,
    "navLabel": "VPN-opas",
    "seo": { "title": "VPN mobiililaitteissa | Lapland AI Lab", "description": "Suojaa tietoliikenteesi matkalla." },
    "hero": { "title": "Suojattu tunneli tunturiin", "subtitle": "VPN on välttämätön varuste." },
    "sections": [{ "title": "Avoimen verkon vaarat", "body": "Julkinen Wi-Fi on riski." }],
    "checklist": ["Maksullinen VPN", "Always-on päälle", "Testaa ennen matkaa"],
    "cta": { "text": "Mobiiliturva", "route": "/mobile-security" }
  }
};
