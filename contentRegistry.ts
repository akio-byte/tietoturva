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
    "seo": { "title": "Etätyön tietoturvaopas | Lapland AI Lab", "description": "Käytännön ohjeet turvalliseen etätyöhön." },
    "hero": { "title": "Toimisto ilman seiniä", "subtitle": "Näin pidät työtietosi turvassa tunturissa, kahvilassa ja kotona." },
    "sections": [{ "title": "Kotiverkon kriittiset pisteet", "body": "Reititin on kotisi tietoturvan ovi. Jos oletussalasana on 'admin', ovi on käytännössä auki." }],
    "checklist": ["Käytä VPN:ää", "Vaihda reitittimen salasana", "Peitä kamera"],
    "cta": { "text": "Varmista etätyön suojaus", "route": "/cyber-basics" }
  },
  "incident-response": {
    "slug": "incident-response",
    "category": "crisis",
    "featured": true,
    "navLabel": "Kriisinhallinta",
    "seo": { "title": "Tietomurto-ohjeistus | Lapland AI Lab", "description": "Mitä tehdä, kun tietomurto tapahtuu?" },
    "hero": { "title": "Kun vahinko sattuu", "subtitle": "Rauhallisuus on vahvin suojasi. Seuraa näitä askeleita välittömästi." },
    "sections": [
      { "title": "Eristä ja ilmoita", "body": "Estä hyökkäyksen leviäminen katkaisemalla verkkoyhteydet laitteesta välittömästi." },
      { "title": "Toipuminen ja analyysi", "body": "Kun tilanne on hallinnassa, palauta puhtaat varmuuskopiot, vaihda kaikki salasanat ja analysoi hyökkäysvektori vastaavien tapausten estämiseksi." }
    ],
    "checklist": ["Katkaise Wi-Fi", "Älä sammuta virtaa", "Ota yhteys IT-tukeen", "Vaihda salasanat eristetyssä laitteessa", "Tiedota sidosryhmiä"],
    "cta": { "text": "Lataa kriisinhallintamalli", "route": null }
  },
  "backup-strategies": {
    "slug": "backup-strategies",
    "category": "routines",
    "featured": true,
    "navLabel": "Varmuuskopiot",
    "seo": { "title": "Varmuuskopiointi ja toipuminen | Lapland AI Lab", "description": "Tieto on tallessa vain, jos se on monessa paikassa." },
    "hero": { "title": "Tieto tunturissakin tallessa", "subtitle": "Varmuuskopiointi on tietoturvan viimeinen puolustuslinja. Ilman sitä riski on täydellinen." },
    "sections": [{ "title": "3-2-1 Sääntö", "body": "3 kopiota tiedosta, 2 eri tallennusmediaa, 1 kopio täysin fyysisesti eri paikassa (offsite)." }],
    "checklist": ["Testaa palautus säännöllisesti", "Käytä automaattisia pilvivarmistuksia", "Pidä yksi kopio offline-tilassa"],
    "cta": { "text": "Suunnittele varmuuskopiointi", "route": "/routines" }
  },
  "physical-defense": {
    "slug": "physical-defense",
    "category": "kyber",
    "featured": false,
    "navLabel": "Fyysinen turva",
    "seo": { "title": "Laitteiden fyysinen suojaus | Lapland AI Lab", "description": "Tietoturva alkaa laitteen ympäriltä." },
    "hero": { "title": "Lukot ja suojat", "subtitle": "Älä jätä digitaalista avainta pöydälle. Fyysinen pääsy laitteeseen tarkoittaa usein pääsyä kaikkeen." },
    "sections": [{ "title": "Taskun ulkopuoliset uhat", "body": "Julkisissa tiloissa työskentely vaatii tarkkaavaisuutta. Tietosuojakalvot ja laitteiden lukitseminen ovat perusvaatimuksia." }],
    "checklist": ["Käytä tietosuojakalvoa", "Älä jätä laitteita autoon", "Käytä vain omia latureita julkisilla paikoilla"],
    "cta": { "text": "Tarkista fyysinen turva", "route": null }
  },
  "cloud-saas-security": {
    "slug": "cloud-saas-security",
    "category": "kyber",
    "featured": false,
    "navLabel": "Pilviturva",
    "seo": { "title": "Pilvipalveluiden turvallisuus | Lapland AI Lab", "description": "Miten suojaat datan, joka ei ole omalla palvelimella?" },
    "hero": { "title": "Turvallisesti pilvessä", "subtitle": "Pilvipalvelut siirtävät vastuun infrastruktuurista, mutta vastuu datasta säilyy aina sinulla." },
    "sections": [{ "title": "Jaetun vastuun malli", "body": "Palveluntarjoaja (esim. Microsoft, Google) vastaa pilven turvallisuudesta, mutta käyttäjä vastaa pilvessä olevan datan oikeuksista." }],
    "checklist": ["Auditointi jako-oikeuksille", "Pakollinen MFA kaikille tileille", "Seuraa kirjautumislokeja"],
    // Fix: Removed 'null: null' typo from the object literal on line 70
    "cta": { "text": "Auditoi pilvipalvelut", "route": "/business-audit" }
  },
  "software-lifecycle": {
    "slug": "software-lifecycle",
    "category": "kyber",
    "featured": false,
    "navLabel": "Päivitykset",
    "seo": { "title": "Ohjelmistopäivitysten hallinta | Lapland AI Lab", "description": "Vanhentunut koodi on avoin ovi hyökkääjälle." },
    "hero": { "title": "Päivitys on turva", "subtitle": "Viivyttely päivityksissä on kutsu hyökkääjille. Tee päivityksistä automaattinen rutiini." },
    "sections": [{ "title": "Haavoittuvuuksien hallinta", "body": "Suurin osa hyökkäyksistä kohdistuu tunnettuihin haavoittuvuuksiin, joihin on jo olemassa korjaupdates." }],
    "checklist": ["Kytke automaattiset päivitykset päälle", "Poista vanhat laitteet verkosta", "Käytä vain tuettuja ohjelmistoja"],
    "cta": { "text": "Päivitä laitekanta", "route": "/cyber-basics" }
  },
  "gdpr-business-guide": {
    "slug": "gdpr-business-guide",
    "category": "privacy",
    "featured": false,
    "navLabel": "GDPR-opas",
    "seo": { "title": "GDPR ja tietosuoja pk-yrityksille | Lapland AI Lab", "description": "Tietosuoja on osa modernia tietoturvaa." },
    "hero": { "title": "Luottamus ja laki", "subtitle": "GDPR ei ole vain taakka, vaan mahdollisuus rakentaa luottamusta asiakkaisiin oikeaoppisella tiedonhallinnalla." },
    "sections": [{ "title": "Henkilötiedon minimointi", "body": "Kerää vain se tieto, jota todella tarvitset. Vähemmän tietoa tarkoittaa pienempää riskiä." }],
    "checklist": ["Päivitä tietosuojaseloste", "Minimoi kerättävä data", "Varmista rekisteröidyn oikeudet"],
    "cta": { "text": "Tarkista GDPR-valmius", "route": "/business-audit" }
  },
  "ai-ethics-and-safety": {
    "slug": "ai-ethics-and-safety",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-etiikka",
    "seo": { "title": "Vastuullinen tekoäly | Lapland AI Lab", "description": "Tekoälyn eettinen käyttö ja turvallisuus organisaatiossa." },
    "hero": { "title": "Etiikka on turvaa", "subtitle": "Vastuullinen tekoälyn käyttö ehkäisee maineriskejä ja varmistaa syrjimättömyyden." },
    "sections": [
      { "title": "Läpinäkyvyys", "body": "Käyttäjien on tiedettävä, milloin he asioivat tekoälyn kanssa. Läpinäkyvyys rakentaa luottamusta." },
      { "title": "AI-käyttöpolitiikka", "body": "Luo organisaatiollesi selkeät raamit: Mitä työkaluja saa käyttää? Mitä tietoa (esim. asiakasdataa) ei saa ikinä syöttää julkisiin malleihin?" }
    ],
    "checklist": ["Luo kirjallinen AI-politiikka", "Nimeä vastuullinen AI-vastaava", "Ole avoin AI-käytöstä", "Kouluta tiimi tunnistamaan hallusinaatiot"],
    "cta": { "text": "Luo AI-pelisäännöt", "route": "/ai-safety" }
  },
  "zero-trust-architecture": {
    "slug": "zero-trust-architecture",
    "category": "kyber",
    "featured": true,
    "navLabel": "Nollaluottamus",
    "seo": { "title": "Nollaluottamus-arkkitehtuuri | Lapland AI Lab", "description": "Älä koskaan luota, varmista aina." },
    "hero": { "title": "Zero Trust: Uusi normaali", "subtitle": "Moderni tietoturva ei luota kehenkään verkon sisällä tai ulkopuolella." },
    "sections": [{ "title": "Periaatteet", "body": "Jokainen pyyntö on todennettava, valtuutettava ja salattava, vaikka se tulisi sisäverkosta." }],
    "checklist": ["Identiteetin varmistus", "Laitteen kunnon tarkistus", "Pienimmät oikeudet"],
    "cta": { "text": "Siirry Zero Trustiin", "route": null }
  }
};