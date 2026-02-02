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
    "sections": [{ "title": "Eristä ja ilmoita", "body": "Estä hyökkäyksen leviäminen katkaisemalla verkkoyhteydet laitteesta." }],
    "checklist": ["Katkaise Wi-Fi", "Älä sammuta virtaa", "Ota yhteys IT-tukeen"],
    "cta": { "text": "Lataa kriisinhallintaopas", "route": null }
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
  },
  "email-security-pro": {
    "slug": "email-security-pro",
    "category": "kyber",
    "featured": false,
    "navLabel": "Sähköpostiturva",
    "seo": { "title": "Sähköpostin suojaus | Lapland AI Lab", "description": "Suojaa organisaatiosi kalastelulta ja spämmiltä." },
    "hero": { "title": "Sähköposti: Hyökkääjän ykköskanavana", "subtitle": "Yli 90 % hyökkäyksistä alkaa sähköpostista. Opi sulkemaan tämä ovi." },
    "sections": [{ "title": "DMARC, SPF ja DKIM", "body": "Nämä tekniset protokollat varmistavat, ettei kukaan voi teeskennellä lähettävänsä sähköpostia yrityksesi nimissä." }],
    "checklist": ["Aktivoi SPF/DKIM", "Kouluta henkilöstö", "Käytä hiekkalaatikointia"],
    "cta": { "text": "Tarkista sähköpostiasetukset", "route": null }
  },
  "password-mastery": {
    "slug": "password-mastery",
    "category": "routines",
    "featured": false,
    "navLabel": "Salasanahallinta",
    "seo": { "title": "Salasanojen hallintaopas | Lapland AI Lab", "description": "Lopeta salasanojen muistelu, aloita hallinta." },
    "hero": { "title": "123456 on riski", "subtitle": "Hyvä salasanahallinta poistaa inhimillisen virheen ja tekee murtautumisesta mahdotonta." },
    "sections": [{ "title": "Salasanaohjelmat", "body": "Käytä Bitwardenia tai 1Passwordia. Sinun tarvitsee muistaa vain yksi pääsalasana." }],
    "checklist": ["Lataa hallintaohjelma", "Poista selaimen salasanat", "Luo uniikit koodit"],
    "cta": { "text": "Aloita hallinta", "route": "/routines" }
  },
  "mobile-mdm-guide": {
    "slug": "mobile-mdm-guide",
    "category": "mobile",
    "featured": false,
    "navLabel": "Mobiilihallinta",
    "seo": { "title": "MDM-opas yrityksille | Lapland AI Lab", "description": "Hallitse mobiililaitteita etänä ja turvallisesti." },
    "hero": { "title": "Laitteet hallintaan", "subtitle": "Mobile Device Management (MDM) mahdollistaa kadonneen laitteen tyhjennyksen napin painalluksella." },
    "sections": [{ "title": "Etähallinnan hyödyt", "body": "MDM varmistaa, että kaikissa yrityksen puhelimissa on vaaditut päivitykset ja tietoturva-asetukset päällä." }],
    "checklist": ["Valitse MDM-ratkaisu", "Pakota pääsykoodit", "Eristä työ- ja vapaa-aika"],
    "cta": { "text": "Tutustu MDM-ratkaisuihin", "route": "/mobile-security" }
  },
  "ai-ethics-and-safety": {
    "slug": "ai-ethics-and-safety",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-etiikka",
    "seo": { "title": "Vastuullinen tekoäly | Lapland AI Lab", "description": "Tekoälyn eettinen käyttö ja turvallisuus organisaatiossa." },
    "hero": { "title": "Etiikka on turvaa", "subtitle": "Vastuullinen tekoälyn käyttö ehkäisee maineriskejä ja varmistaa syrjimättömyyden." },
    "sections": [{ "title": "Läpinäkyvyys", "body": "Käyttäjien on tiedettävä, milloin he asioivat tekoälyn kanssa. Läpinäkyvyys rakentaa luottamusta." }],
    "checklist": ["Luo eettiset raamit", "Valvo vinoumia", "Ole avoin AI-käytöstä"],
    "cta": { "text": "Luo AI-pelisäännöt", "route": "/ai-safety" }
  }
};