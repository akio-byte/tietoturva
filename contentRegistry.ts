import { ContentItem } from './types';

export const contentRegistry: Record<string, ContentItem> = {
  // KYBER
  "network-hardening-arctic": {
    "type": "module",
    "slug": "network-hardening-arctic",
    "category": "kyber",
    "featured": true,
    "navLabel": "Verkon karkaisu",
    "seo": { "title": "Verkkoturvan karkaisu | Lapland AI Lab", "description": "Miten suojata organisaation verkko arktisella otteella." },
    "hero": { "title": "Verkkoturvan karkaisu", "subtitle": "Verkko on organisaation hermojärjestelmä. Segmentointi ja Zero Trust ovat pohjoisen puolustuksen peruskivet." },
    "sections": [
      { "title": "Segmentointi ja Zero Trust", "body": "Älä luota keneenkään verkon sisällä. Segmentoi vierasverkko, tuotantoverkko ja hallintaverkko toisistaan. Käytä palomuureja, jotka ymmärtävät sovellustason liikenteen." }
    ],
    "checklist": ["Verkko segmentointu", "Zero Trust -malli käytössä", "Vierasverkko eristetty", "IDS/IPS aktivoitu"],
    "cta": { "text": "Verkkokarttapohja", "route": null }
  },
  "mfa-best-practices": {
    "type": "checklist",
    "slug": "mfa-best-practices",
    "category": "kyber",
    "featured": true,
    "navLabel": "MFA-opas",
    "seo": { "title": "MFA Parhaat käytännöt", "description": "Monivaiheinen tunnistautuminen on tärkein suojasi." },
    "hero": { "title": "MFA-suojaus", "subtitle": "Salasana on vain puoli lukkoa. MFA on se toinen, joka pitää murtovarkaat loitolla." },
    "sections": [
      { "title": "FIDO2 ja Fyysiset avaimet", "body": "Korkeimman turvatason saavuttamiseksi käytä fyysisiä turva-avaimia (YubiKey). Ne suojaavat jopa kehittyneiltä kalasteluhyökkäyksiltä." }
    ],
    "checklist": ["MFA sähköpostissa", "FIDO2 avaimet", "SMS-MFA poistettu", "Varakoodit tallessa"],
    "cta": { "text": "Käyttöönotto-ohje", "route": null }
  },

  // AI
  "ai-system-resilience": {
    "type": "article",
    "slug": "ai-system-resilience",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-Resilienssi",
    "seo": { "title": "AI-järjestelmien vastustuskyky", "description": "Prompt injection -hyökkäykset ja adversarial input." },
    "hero": { "title": "AI-Resilienssi", "subtitle": "Uhat eivät ole vain ulkoisia. Puolustaudu prompt-injektioita ja vääristynyttä dataa vastaan." },
    "sections": [
      { "title": "Puolustusmekanismit", "body": "Syötteiden sanitointi ja deterministiset mallit kriittisissä toiminnoissa ovat perusedellytys. Säännöllinen red teaming -testaus paljastaa heikot kohdat." }
    ],
    "checklist": ["Prompt-sanitointi", "Deterministiset mallit", "Red teaming tehty"],
    "cta": { "text": "Red team -lista", "route": null }
  },
  "shadow-ai-governance": {
    "type": "module",
    "slug": "shadow-ai-governance",
    "category": "ai",
    "featured": true,
    "navLabel": "Shadow AI",
    "seo": { "title": "Shadow AI -hallinta", "description": "Työntekijöiden oma-aloitteinen AI-käyttö ja sen riskit." },
    "hero": { "title": "Shadow AI -hallinta", "subtitle": "Hallitsematon tekoäly on uusi Shadow IT. Luo säännöt ennen kuin data vuotaa." },
    "sections": [
      { "title": "Käyttöpolitiikka", "body": "Määrittele selkeästi mitkä AI-työkalut ovat hyväksyttyjä ja miten niitä saa käyttää luottamuksellisen tiedon kanssa." }
    ],
    "checklist": ["AI-politiikka luotu", "Sallitut työkalut listattu", "Data-koulutus pidetty"],
    "cta": { "text": "AI-käyttösäännöt", "route": null }
  },

  // MOBILE
  "mobile-hardening-arctic": {
    "type": "module",
    "slug": "mobile-hardening-arctic",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiilikarkaisu",
    "seo": { "title": "Mobiiliturvan karkaisu", "description": "Suojaa laitteesi arktisella otteella." },
    "hero": { "title": "Mobiilikarkaisu", "subtitle": "Puhelimesi on taskussa kulkeva tietovuoto-riski. Lukitse ja karkaise se MDM-ratkaisuilla." },
    "sections": [
      { "title": "MDM ja Eristäminen", "body": "Käytä Mobile Device Management (MDM) -järjestelmää yrityksen datan ja sovellusten eristämiseen henkilökohtaisesta käytöstä." }
    ],
    "checklist": ["PIN/Biometria päällä", "Etäpyyhintä aktivoitu", "Sovellusluvat rajattu", "VPN käytössä"],
    "cta": { "text": "MDM-valintaopas", "route": null }
  },
  "secure-comms-travel": {
    "type": "checklist",
    "slug": "secure-comms-travel",
    "category": "mobile",
    "featured": false,
    "navLabel": "Turvallinen matka",
    "seo": { "title": "Viestintä matkalla", "description": "Mobiiliturva liikkeellä ollessa." },
    "hero": { "title": "Turvallinen viestintä", "subtitle": "Julkinen Wi-Fi ja USB-latauspisteet ovat ansoja. Suojaa viestisi päästä päähän -salauksella." },
    "sections": [
      { "title": "USB Data Blockers", "body": "Käytä latauksessa 'USB-kondomia' estämään datan siirtyminen latausportin kautta julkisissa paikoissa." }
    ],
    "checklist": ["Data blocker käytössä", "Signal/WhatsApp E2EE", "Ei julkista Wi-Fiä", "Hotspot päällä"],
    "cta": { "text": "Matkailijan muistio", "route": null }
  },

  // CRISIS
  "incident-response-72h": {
    "type": "checklist",
    "slug": "incident-response-72h",
    "category": "crisis",
    "featured": true,
    "navLabel": "72h Valmius",
    "seo": { "title": "Kriisivalmius 72h", "description": "Miten toimia hyökkäyksen sattuessa." },
    "hero": { "title": "72 tunnin valmius", "subtitle": "Ensimmäiset tunnit ratkaisevat. Toimintaohjeet tietomurron ja kiristysohjelmien varalle." },
    "sections": [
      { "title": "Eristäminen", "body": "Pysäytä leviäminen välittömästi. Älä sammuta laitteita, vaan irrota ne verkosta." }
    ],
    "checklist": ["Kriisiryhmä nimetty", "Viestintäpohjat valmiina", "Offline-yhteystiedot", "Viranomaisilmoitus"],
    "cta": { "text": "Lataa kriisi-A4", "route": null }
  },
  "backup-masterplan-321": {
    "type": "article",
    "slug": "backup-masterplan-321",
    "category": "crisis",
    "featured": true,
    "navLabel": "3-2-1 Backup",
    "seo": { "title": "3-2-1 Varmuuskopiot", "description": "Tiedon vakuutus pohjoisella otteella." },
    "hero": { "title": "3-2-1 Varmuuskopiointi", "subtitle": "Yksi kopio on nolla kopiota. Kolme kopiota on yksi kopio." },
    "sections": [
      { "title": "3-2-1 Sääntö", "body": "3 kopiota datasta, 2 eri mediaa, 1 kopio täysin irti verkosta (Air-gapped)." }
    ],
    "checklist": ["Automaatio ok", "Palautustesti tehty", "Offline-kopio olemassa"],
    "cta": { "text": "Backup-audit", "route": null }
  },

  // PRIVACY
  "privacy-by-design-llm": {
    "type": "module",
    "slug": "privacy-by-design-llm",
    "category": "privacy",
    "featured": true,
    "navLabel": "Privacy Design",
    "seo": { "title": "Privacy by Design", "description": "Tietosuoja osana järjestelmäsuunnittelua." },
    "hero": { "title": "Sisäänrakennettu suoja", "subtitle": "Tietosuoja ei ole taakka, se on kilpailuetu. Minimoi kerättävä data ja maksimoi hallinta." },
    "sections": [
      { "title": "Datan minimointi", "body": "Kerää vain tarvittava. Tekoälysovelluksissa käytä anonymisointia ennen syötteen lähettämistä pilveen." }
    ],
    "checklist": ["DPII tehty", "Datan poistopolitiikka", "Anonymisointi käytössä"],
    "cta": { "text": "GDPR-työkalupakki", "route": null }
  },
  "arctic-data-sovereignty": {
    "type": "article",
    "slug": "arctic-data-sovereignty",
    "category": "privacy",
    "featured": false,
    "navLabel": "Data-suvereniteetti",
    "seo": { "title": "Datan omistajuus", "description": "Hallitse omaa digitaalista omaisuuttasi." },
    "hero": { "title": "Arctic Data Sovereignty", "subtitle": "Omista oma datasi. Älä anna tekoälymallien muuttua yrityksesi 'näkymättömäksi muistiksi'." },
    "sections": [
      { "title": "Self-Hosting AI", "body": "Harkitse paikallisten tai suojattujen yksityisten kielimallien käyttöä kriittisimmille toiminnoille." }
    ],
    "checklist": ["Konesali sijainti tiedossa", "Sopimusluvat kunnossa", "Local-AI testattu"],
    "cta": { "text": "Lataa sijainti-opas", "route": null }
  },

  // ROUTINES
  "daily-arctic-routines": {
    "type": "checklist",
    "slug": "daily-arctic-routines",
    "category": "routines",
    "featured": true,
    "navLabel": "Arjen rutiinit",
    "seo": { "title": "Päivittäiset rutiinit", "description": "Pienet teot suojaavat suuret kokonaisuudet." },
    "hero": { "title": "Päivittäinen resilienssi", "subtitle": "Tietoturva on tapa, ei projekti. Pidä työpöytäsi ja järjestelmäsi puhtaana joka päivä." },
    "sections": [
      { "title": "Maanantai-rutiini", "body": "Päivitysten tarkistus, varmuuskopioiden login luku ja viikon riskikatsaus." }
    ],
    "checklist": ["Päivitykset ok", "Login katsaus", "VPN-testi", "MFA-tarkistus"],
    "cta": { "text": "Tulosta lista", "route": null }
  },
  "arctic-security-opus-v2": {
    "type": "article",
    "slug": "arctic-security-opus-v2",
    "category": "routines",
    "featured": true,
    "navLabel": "Arktinen Opus",
    "seo": { "title": "Arctic Security Opus", "description": "Kokonaisvaltainen tietoturvamanifesti." },
    "hero": { "title": "Arktinen Opus v2", "subtitle": "Kaikki tietotaito tiivistettynä yhteen dokumenttiin. Tämä on organisaatiosi turva-arkkitehtuuri." },
    "sections": [
      { "title": "Manifesti", "body": "Resilienssi tarkoittaa kykyä selviytyä ja kukoistaa digitaalisessa talvessa." }
    ],
    "checklist": ["Opus jaettu tiimille", "Vuosikatsaus sovittu", "Auditoija nimetty"],
    "cta": { "text": "Lataa täysi Opus", "route": "/materials" }
  }
};