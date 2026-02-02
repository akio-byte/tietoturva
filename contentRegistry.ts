
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
  // --- ALKUPERÄISET 8 PAKETTIA NORMALISOITUINA ---
  "remote-work-security": {
    "slug": "remote-work-security",
    "category": "kyber",
    "featured": false,
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
    "cta": { "text": "Lue kyberperusteet", "route": "/cyber-basics" }
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
    "cta": { "text": "Siirry rutiineihin", "route": "/routines" }
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
    "cta": { "text": "Tee auditointi", "route": "/business-audit" }
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
    "cta": { "text": "Lue AI-turvasta", "route": "/ai-safety" }
  },
  "deepfakes-and-influence": {
    "slug": "deepfakes-and-influence",
    "category": "ai",
    "featured": false,
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
    "cta": { "text": "Lue AI-turvasta", "route": "/ai-safety" }
  },
  "staff-training": {
    "slug": "staff-training",
    "category": "routines",
    "featured": true,
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
    "cta": { "text": "Katso rutiinit", "route": "/routines" }
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
    "cta": { "text": "Siirry rutiineihin", "route": "/routines" }
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
    "cta": { "text": "Tee auditointi", "route": "/business-audit" }
  },

  // --- 10 UUTTA SISÄLTÖPAKETTIA ---
  "email-safety": {
    "slug": "email-safety",
    "category": "kyber",
    "featured": false,
    "navLabel": "Sähköposti",
    "seo": { "title": "Sähköpostin suojausopas | Lapland AI Lab", "description": "Näin tunnistat hienostuneet kalasteluviestit ja suojaat postilaatikkosi." },
    "hero": { "title": "Rauhallinen valppaus postilaatikolla", "subtitle": "Sähköposti on edelleen yleisin tie organisaatioon. Opi erottamaan aito viesti väärennöksestä." },
    "sections": [
      { "title": "Kalastelun uudet muodot", "body": "Tekoälyllä luodut viestit ovat kieliopillisesti täydellisiä. Tarkkaile kiireen tunnetta ja epätavallisia pyyntöjä." }
    ],
    "checklist": [
      "Tarkista lähettäjän todellinen osoite",
      "Älä klikkaa linkkejä suoraan, jos viesti yllättää",
      "Varmista oudot liitetiedostot soittamalla",
      "Käytä sähköpostin esikatselua varoen",
      "Ilmoita epäilyttävät viestit IT-tuelle"
    ],
    "cta": { "text": "Lue lisää kyberperusteista", "route": "/cyber-basics" }
  },
  "backup-basics": {
    "slug": "backup-basics",
    "category": "crisis",
    "featured": true,
    "navLabel": "Varmuuskopiot",
    "seo": { "title": "Varmuuskopioinnin 3-2-1-sääntö | Lapland AI Lab", "description": "Tietosi ovat turvassa vain, jos ne on varmuuskopioitu oikein." },
    "hero": { "title": "Tietosi ovat vakaalla kalliolla", "subtitle": "Varmuuskopio on ainoa todellinen vakuutus kiristyshaittaohjelmia ja laiterikkoja vastaan." },
    "sections": [
      { "title": "3-2-1 - Sääntö jota kannattaa seurata", "body": "3 kopiota, 2 eri tallennusmediaa, 1 kopio täysin eri fyysisessä sijainnissa tai irrotettuna verkosta." }
    ],
    "checklist": [
      "Testaa palautus vähintään kerran vuodessa",
      "Varmista että kopiointi on automaattista",
      "Pidä yksi kopio 'kylmänä' (offline)",
      "Varmuuskopioi myös pilvipalveluiden data",
      "Kirjaa ylös palautusohjeet paperille"
    ],
    "cta": { "text": "Katso rutiinit", "route": "/routines" }
  },
  "ai-prompt-security": {
    "slug": "ai-prompt-security",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-kehotteet",
    "seo": { "title": "Turvallinen AI-kehotteiden käyttö | Lapland AI Lab", "description": "Näin käytät generatiivista tekoälyä vuotamatta liikesalaisuuksia." },
    "hero": { "title": "Kirkkaat ajatukset, turvalliset kehotteet", "subtitle": "Tekoäly on väline, jota tulee käyttää tietoisesti. Opi suojaamaan syötteesi." },
    "sections": [
      { "title": "Kehotemuotoilu ja tietoturva", "body": "Promptit voivat sisältää vahingossa arkaluonteista tietoa. Opeta tiimisi anonymisoimaan data ennen syöttöä." }
    ],
    "checklist": [
      "Poista nimet ja osoitteet syötteistä",
      "Älä syötä yrityssalaisuuksia julkiseen AI:hin",
      "Käytä 'System Instruction' -kenttää rajaamiseen",
      "Varmista ettei AI tallenna historiaa",
      "Käytä suljettuja yrityslisenssejä"
    ],
    "cta": { "text": "Syvenny AI-turvaan", "route": "/ai-safety" }
  },
  "mobile-vpn-guide": {
    "slug": "mobile-vpn-guide",
    "category": "mobile",
    "featured": false,
    "navLabel": "VPN-opas",
    "seo": { "title": "VPN mobiililaitteissa | Lapland AI Lab", "description": "Suojaa tietoliikenteesi matkalla ja julkisissa Wi-Fi-verkoissa." },
    "hero": { "title": "Suojattu tunneli tunturiin", "subtitle": "VPN on välttämätön varuste kaikille, jotka työskentelevät toimiston ulkopuolella." },
    "sections": [
      { "title": "Avoimen verkon vaarat", "body": "Julkinen Wi-Fi on kuin huutaisit asiasi torilla. VPN salaa viestintäsi muiden silmiltä." }
    ],
    "checklist": [
      "Valitse luotettava, maksullinen VPN-palvelu",
      "Ota 'Always-on VPN' käyttöön asetuksista",
      "Käytä VPN-yhteyttä myös puhelimella",
      "Vältä ilmaisia VPN-palveluita (data-riski)",
      "Testaa yhteyden toimivuus ennen matkaa"
    ],
    "cta": { "text": "Mobiiliturvan perusteet", "route": "/mobile-security" }
  },
  "password-manager-guide": {
    "slug": "password-manager-guide",
    "category": "routines",
    "featured": false,
    "navLabel": "Hallintaohjelmat",
    "seo": { "title": "Salasanaohjelman käyttöönotto | Lapland AI Lab", "description": "Lopeta salasanojen muistaminen ja paranna turvallisuuttasi." },
    "hero": { "title": "Vain yksi avain muistettavaksi", "subtitle": "Salasanaohjelma poistaa inhimilliset virheet ja takaa vahvat tunnukset jokaiseen palveluun." },
    "sections": [
      { "title": "Miksi Password Manager?", "body": "Ihminen ei pysty muistamaan 50:tä uniikkia, 20 merkin salasanaa. Ohjelma pystyy, ja se tekee sen turvallisesti." }
    ],
    "checklist": [
      "Valitse markkinajohtaja (esim. Bitwarden/1Pass)",
      "Luo yksi, erittäin vahva pääsalasana",
      "Ota MFA käyttöön salasanaohjelmaan",
      "Tallenna recovery key fyysiseen talteen",
      "Poista salasanat selaimen muistista"
    ],
    "cta": { "text": "Katso arjen rutiinit", "route": "/routines" }
  },
  "phone-fraud-vishing": {
    "slug": "phone-fraud-vishing",
    "category": "kyber",
    "featured": false,
    "navLabel": "Puhelinhuijaukset",
    "seo": { "title": "Vishing ja tekstiviestihuijaukset | Lapland AI Lab", "description": "Tunnista puhelimen välityksellä tapahtuvat vaikuttamisyritykset." },
    "hero": { "title": "Kuka siellä oikeasti on?", "subtitle": "Hyökkääjä voi väärentää soittajan numeron ja nimen. Ole kriittinen outoja pyyntöjä kohtaan." },
    "sections": [
      { "title": "Vaikuttaminen äänellä", "body": "Huijari voi teeskennellä pankin virkailijaa tai IT-tukea. He luovat kiireen ja paniikin tunnetta." }
    ],
    "checklist": [
      "Älä koskaan kerro tunnuksia puhelimessa",
      "Katkaise puhelu ja soita viralliseen numeroon",
      "Varo linkkejä sisältäviä tekstiviestejä",
      "Älä asenna ohjelmia soittajan kehotuksesta",
      "Käytä 'turvasanaa' perheen/tiimin kesken"
    ],
    "cta": { "text": "Tee pika-auditointi", "route": "/business-audit" }
  },
  "data-minimization": {
    "slug": "data-minimization",
    "category": "privacy",
    "featured": false,
    "navLabel": "Minimointi",
    "seo": { "title": "Datan minimointi käytännössä | Lapland AI Lab", "description": "Vähemmän dataa on vähemmän vastuuta ja riskiä." },
    "hero": { "title": "Yksinkertaisuus on tietosuojaa", "subtitle": "Mitä vähemmän keräät ja säilytät tarpeetonta tietoa, sitä pienempi on murron vaikutus." },
    "sections": [
      { "title": "Kerää vain tarpeellinen", "body": "Kysy itseltäsi: Tarvitsemmeko todella tämän asiakkaan syntymäaikaa tai kotiosoitetta?" }
    ],
    "checklist": [
      "Käy läpi lomakkeet ja poista turhat kentät",
      "Aseta automaattiset tuhoamisajat datalle",
      "Anonymisoi vanha tilastodata",
      "Pidä vain aktiiviset asiakkaat rekisterissä",
      "Kouluta tiimi poistamaan turhat kopiot"
    ],
    "cta": { "text": "Lue tietosuojasta", "route": "/content/data-privacy" }
  },
  "ai-reliability-check": {
    "slug": "ai-reliability-check",
    "category": "ai",
    "featured": false,
    "navLabel": "AI-luotettavuus",
    "seo": { "title": "Tekoälyn tuottaman tiedon varmistus | Lapland AI Lab", "description": "Tunnista hallusinaatiot ja varmista AI-vastaukset." },
    "hero": { "title": "Luota, mutta varmista", "subtitle": "Tekoäly on loistava assistentti, mutta se voi erehtyä varmalla äänellä. Ole kriittinen tarkastaja." },
    "sections": [
      { "title": "Hallusinaatiot ja faktantarkistus", "body": "Tekoäly pyrkii miellyttämään ja voi keksiä lähteitä. Tarkista aina kriittiset faktat ulkopuolisista lähteistä." }
    ],
    "checklist": [
      "Pyydä AI:lta lähteet ja tarkista ne",
      "Vertaile vastauksia perinteiseen hakuun",
      "Älä käytä AI-koodia tarkastamatta sitä",
      "Käytä useampaa eri mallia ristiin",
      "Merkitse AI-tuotettu tieto selkeästi"
    ],
    "cta": { "text": "Syvenny AI-turvaan", "route": "/ai-safety" }
  },
  "physical-hardware-safety": {
    "slug": "physical-hardware-safety",
    "category": "crisis",
    "featured": false,
    "navLabel": "Laiteturva",
    "seo": { "title": "Fyysinen laiteturvallisuus | Lapland AI Lab", "description": "Suojaa palvelimet, kytkimet ja työlaitteet fyysiseltä pääsyltä." },
    "hero": { "title": "Lukoilla on merkitystä", "subtitle": "Paras palomuuri ei auta, jos kuka tahansa voi kävellä konesaliin ja viedä kiintolevyn matkaansa." },
    "sections": [
      { "title": "Pääsynhallinta fyysisissä tiloissa", "body": "Kriittiset laitteet tulee sijoittaa lukittuihin tiloihin, jonne pääsy on vain nimetyillä henkilöillä." }
    ],
    "checklist": [
      "Lukitse palvelinkaapit ja tilat",
      "Pidä kirjaa avaimista ja kulkukorteista",
      "Käytä tietokoneissa Kensington-lukkoja",
      "Sammuta laitteet, jos poistut pitkäksi aikaa",
      "Asenna valvontakamerat kriittisiin pisteisiin"
    ],
    "cta": { "text": "Katso vuosikello", "route": "/content/annual-security-cycle" }
  },
  "cloud-service-hardening": {
    "slug": "cloud-service-hardening",
    "category": "routines",
    "featured": false,
    "navLabel": "Pilviturva",
    "seo": { "title": "Pilvipalveluiden koventaminen | Lapland AI Lab", "description": "Varmista että yrityksen pilvipalvelut on konfiguroitu oikein." },
    "hero": { "title": "Turvalliset pilvet ylläsi", "subtitle": "Pilvipalvelun tarjoaja vastaa alustasta, mutta sinä vastaat omasta konfiguraatiostasi ja datastasi." },
    "sections": [
      { "title": "Vastuunjako pilvessä", "body": "Shared Responsibility Model tarkoittaa, että käyttäjän on itse kytkettävä päälle MFA ja rajattava pääsy." }
    ],
    "checklist": [
      "Poista vanhat käyttäjätunnukset heti",
      "Kytke lokitus päälle kaikessa",
      "Käytä vahvinta mahdollista salausta",
      "Tarkista julkisten linkkien oikeudet",
      "Auditoida käyttöoikeudet neljännesvuosittain"
    ],
    "cta": { "text": "Tee auditointi", "route": "/business-audit" }
  }
};
