import { ContentItem } from './types';

export const contentRegistry: Record<string, ContentItem> = {
  // KYBER-KATEGORIA
  "network-hardening-arctic": {
    "type": "module",
    "slug": "network-hardening-arctic",
    "category": "kyber",
    "featured": true,
    "navLabel": "Verkon karkaisu",
    "seo": { "title": "Verkkoturvan karkaisu | Lapland AI Lab", "description": "Miten suojata organisaation verkko arktisella otteella." },
    "hero": { "title": "Verkkoturvan karkaisu", "subtitle": "Verkko on organisaation hermojärjestelmä. Segmentointi ja Zero Trust ovat pohjoisen puolustuksen peruskivet." },
    "sections": [
      { "title": "Segmentointi ja Zero Trust", "body": "Älä luota keneenkään verkon sisällä. Segmentoi vierasverkko, tuotantoverkko ja hallintaverkko toisistaan. Käytä palomuureja, jotka ymmärtävät sovellustason liikenteen." },
      { "title": "VPN ja turvalliset tunnelit", "body": "Etätyö vaatii murtumattoman yhteyden. Käytä moderneja protokollia (WireGuard) ja varmista, että jokainen yhteys on todennettu MFA:lla." }
    ],
    "checklist": ["Verkko segmentointu", "Zero Trust -malli käytössä", "Vierasverkko eristetty", "IDS/IPS aktivoitu"],
    "cta": { "text": "Verkkokarttapohja", "route": null }
  },
  "mfa-best-practices": {
    "type": "checklist",
    "slug": "mfa-best-practices",
    "category": "kyber",
    "featured": true,
    "navLabel": "MFA Syväsukellus",
    "seo": { "title": "MFA Parhaat käytännöt | Lapland AI Lab", "description": "Monivaiheinen tunnistautuminen on tärkein suojasi." },
    "hero": { "title": "Monivaiheinen tunnistautuminen", "subtitle": "Salasana on vain puoli lukkoa. MFA on se toinen, joka pitää murtovarkaat loitolla." },
    "sections": [
      { "title": "FIDO2 ja Fyysiset avaimet", "body": "Korkeimman turvatason saavuttamiseksi käytä fyysisiä turva-avaimia (YubiKey). Ne suojaavat jopa kehittyneiltä kalasteluhyökkäyksiltä." }
    ],
    "checklist": ["MFA käytössä sähköpostissa", "FIDO2 avaimet kriittisille käyttäjille", "SMS-tunnistautumisesta luovuttu", "Varakoodit tallennettu kassakaappiin"],
    "cta": { "text": "MFA Käyttöönotto-opas", "route": null }
  },

  // AI-KATEGORIA
  "ai-system-resilience": {
    "type": "article",
    "slug": "ai-system-resilience",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-Resilienssi",
    "seo": { "title": "AI-järjestelmien vastustuskyky | Lapland AI Lab", "description": "Prompt injection -hyökkäykset ja adversarial input -manipulaatio." },
    "hero": { "title": "AI-järjestelmien vastustuskyky", "subtitle": "Uhat eivät ole vain ulkoisia. Puolustaudu prompt-injektioita ja vääristynyttä dataa vastaan." },
    "sections": [
      { "title": "Puolustusmekanismit", "body": "Syötteiden sanitointi ja deterministiset mallit kriittisissä toiminnoissa ovat perusedellytys. Säännöllinen red teaming -testaus paljastaa heikot kohdat ennen hyökkääjiä." }
    ],
    "checklist": ["Prompt-sanitointi käytössä", "Deterministiset mallit kriittisissä osissa", "Red teaming suoritettu"],
    "cta": { "text": "Lataa red teaming -ohje", "route": null }
  },
  "llm-data-privacy": {
    "type": "module",
    "slug": "llm-data-privacy",
    "category": "ai",
    "featured": false,
    "navLabel": "LLM & Tietosuoja",
    "seo": { "title": "Kielimallit ja Tietosuoja", "description": "Miten hallita dataa AI-aikakaudella." },
    "hero": { "title": "Data LLM-maailmassa", "subtitle": "Mitä syötät tekoälylle, voi päätyä muiden vastauksiin. Hallitse näkyvyyttäsi." },
    "sections": [
      { "title": "Data Governance", "body": "Määrittele mitkä tietotyypit ovat sallittuja tekoälytyökaluissa. Käytä yrityslisenssejä, jotka takaavat, ettei dataa käytetä mallien kouluttamiseen." }
    ],
    "checklist": ["AI-käyttöpolitiikka luotu", "Henkilöstö koulutettu", "Data-opt-out tehty"],
    "cta": { "text": "AI-sopimuspohja", "route": null }
  },

  // MOBILE-KATEGORIA
  "mobile-security-arctic": {
    "type": "module",
    "slug": "mobile-security-arctic",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiilikarkaisu",
    "seo": { "title": "Mobiiliturva | Lapland AI Lab", "description": "Suojaa liikkuva toimisto." },
    "hero": { "title": "Tasku-kyberin karkaisu", "subtitle": "Älypuhelimesi on organisaation heikoin lenkki. Karkaise se." },
    "sections": [
      { "title": "MDM-hallinta", "body": "Käytä Mobile Device Management (MDM) -järjestelmää. Se mahdollistaa laitteiden etäpyyhinnän ja pakottaa turva-asetukset." }
    ],
    "checklist": ["Vahva PIN käytössä", "Biometrinen tunnistus", "Etäpyyhintä aktivoitu", "Sovellusluvat tarkistettu"],
    "cta": { "text": "MDM Ohjeistus", "route": null }
  },

  // CRISIS-KATEGORIA
  "incident-response-72h": {
    "type": "checklist",
    "slug": "incident-response-72h",
    "category": "crisis",
    "featured": true,
    "navLabel": "72h Valmius",
    "seo": { "title": "72 tunnin kriisivalmius | Lapland AI Lab", "description": "Miten selvitä ensimmäiset 72 tuntia tietomurron jälkeen." },
    "hero": { "title": "72 tunnin kriisivalmius", "subtitle": "Kun pilli soi, ei ole aikaa lukea käyttöohjeita. Toiminnan on tultava selkäytimestä." },
    "sections": [
      { "title": "Eristäminen ja analyysi", "body": "Ensimmäinen tavoite: pysäytä leviäminen. Irrota saastuneet laitteet verkosta, mutta älä sammuta niitä." }
    ],
    "checklist": ["Eristämissuunnitelma valmis", "Viestintäpohjat luotu", "Yhteystiedot offline-muodossa", "Viranomaisilmoitus-prosessi"],
    "cta": { "text": "Kriisiviestintäpohja", "route": null }
  },
  "backup-strategy-321": {
    "type": "article",
    "slug": "backup-strategy-321",
    "category": "crisis",
    "featured": true,
    "navLabel": "3-2-1 Varmuuskopiot",
    "seo": { "title": "Varmuuskopiointi 3-2-1", "description": "Tiedon vakuutus." },
    "hero": { "title": "3-2-1 Varmuuskopiointi", "subtitle": "Yksi kopio on nolla kotiota. Kolme kopiota on yksi kopio." },
    "sections": [
      { "title": "Kultainen sääntö", "body": "3 kopiota datasta, 2 eri tallennusmediaa, 1 kopio täysin irrallaan verkosta (Off-site / Offline)." }
    ],
    "checklist": ["Automaatio toimii", "Palautuskoe tehty kuukausittain", "Offline-kopio olemassa"],
    "cta": { "text": "Varmuuskopiointi-audit", "route": null }
  },

  // PRIVACY-KATEGORIA
  "arctic-data-vault": {
    "type": "module",
    "slug": "arctic-data-vault",
    "category": "privacy",
    "featured": true,
    "navLabel": "Data Vault",
    "seo": { "title": "Arctic Data Vault | Lapland AI Lab", "description": "Datan suvereniteetti pohjoisessa mallissa. Hallitse omaa omaisuuttasi." },
    "hero": { "title": "Arctic Data Vault", "subtitle": "Digitaalinen suvereniteetti tarkoittaa omistajuutta, hallintaa ja riippumattomuutta." },
    "sections": [
      { "title": "Datan suvereniteetti", "body": "Pohjoisessa mallissa data on omaisuutta, jota suojellaan hajautetulla tallennuksella ja Zero-Knowledge-periaatteilla." }
    ],
    "checklist": ["Hajautettu tallennus käytössä", "Zero-Knowledge salaus aktivoitu", "Avoimen lähdekoodin auditointi tehty"],
    "cta": { "text": "Tutustu vault-arkkitehtuuriin", "route": null }
  },
  "privacy-by-design-ai": {
    "type": "article",
    "slug": "privacy-by-design-ai",
    "category": "privacy",
    "featured": false,
    "navLabel": "Privacy by Design",
    "seo": { "title": "Sisäänrakennettu tietosuoja", "description": "Miten rakentaa järjestelmiä jotka kunnioittavat yksityisyyttä." },
    "hero": { "title": "Privacy by Design", "subtitle": "Tietosuoja ei ole lisäosa, se on osa perustusta." },
    "sections": [
      { "title": "Datan minimointi", "body": "Kerää vain se mitä tarvitset. Poista heti kun et tarvitse. Tämä on paras suoja tietomurron vaikutuksia vastaan." }
    ],
    "checklist": ["DPII suoritettu", "Datan säilytysajat määritelty", "Käyttöoikeudet minimoitu"],
    "cta": { "text": "DPII-lomakepohja", "route": null }
  },

  // ROUTINES-KATEGORIA
  "arctic-security-opus": {
    "type": "article",
    "slug": "arctic-security-opus",
    "category": "routines",
    "featured": true,
    "navLabel": "Arktinen Opus",
    "seo": {
      "title": "Arctic Security Opus - Kokonaisvaltainen Turvaopas",
      "description": "Lataa Lapland AI Labin kattava opas arktiseen kyberturvallisuuteen ja tekoälyn hallintaan."
    },
    "hero": {
      "title": "Arktinen Opus: Selviytymisopas Digitaaliseen Talveen",
      "subtitle": "Kattava arkkitehtuurikuvaus ja toimintaohjeisto kriittisen infrastruktuurin ja tekoälyratkaisujen suojaamiseen."
    },
    "sections": [
      {
        "title": "Dokumentin Arkkitehtuuri",
        "body": "Tämä opus ei ole pelkkä manuaali, vaan strateginen viitekehys. Se yhdistää Lapland AI Labin 'Arctic Security' -filosofian käytännön teknisiin kontrolleihin. Sisältö on jaettu kuuteen pääteemaan: Kyberresilienssi, AI-turva, Mobiili karkaisu, Kriisinhallinta, Tietosuoja ja Päivittäiset rutiinit."
      }
    ],
    "checklist": [
      "Määrittele dokumentin kohderyhmä",
      "Valitse visuaalinen teema",
      "Lisää konkreettiset tarkistuslistat",
      "Suorita vuotuinen päivityskierros"
    ],
    "cta": {
      "text": "Lataa Opasluonnos",
      "route": null
    }
  },
  "daily-routines-security": {
    "type": "checklist",
    "slug": "daily-routines-security",
    "category": "routines",
    "featured": true,
    "navLabel": "Arjen rutiinit",
    "seo": { "title": "Päivittäiset tietoturvarutiinit", "description": "Pienet teot, suuri turva." },
    "hero": { "title": "Turvallisuus on tapa", "subtitle": "Tietoturva ei ole projekti, se on jatkuva prosessi." },
    "sections": [
      { "title": "Työpäivän startti", "body": "Tarkista päivitykset, avaa salasanaohjelma, varmista että VPN on päällä. Rutiini säästää sinut virheiltä kiireen keskellä." }
    ],
    "checklist": ["Puhtaat pöydät", "Lukitut näytöt", "Huolellinen sähköpostien luku", "Fyysinen avain tallessa"],
    "cta": { "text": "Tulosta muistilista", "route": null }
  },
  "security-awareness-training": {
    "type": "module",
    "slug": "security-awareness-training",
    "category": "routines",
    "featured": false,
    "navLabel": "Koulutusohjelma",
    "seo": { "title": "Henkilöstön koulutusohjelma", "description": "Rakenna tietoturvakulttuuria." },
    "hero": { "title": "Ihmispalomuuri", "subtitle": "Tekniikka on vain puoli voittoa. Koulutettu ihminen on paras puolustus." },
    "sections": [
      { "title": "Jatkuva oppiminen", "body": "Tietoturvakoulutuksen ei tule olla kerran vuodessa tapahtuva kalvosulkeinen. Käytä simulaatioita, uutiskirjeitä ja lyhyitä tietoiskuja." }
    ],
    "checklist": ["Kalasteluharjoitus tehty", "Uudet työntekijät perehdytetty", "Palkitsemismalli käytössä"],
    "cta": { "text": "Koulutusmateriaali", "route": null }
  }
};