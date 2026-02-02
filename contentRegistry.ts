export interface ContentItem {
  slug: string;
  category: 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';
  featured: boolean;
  navLabel: string; // Max 20 chars
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<{ title: string; body: string }>;
  checklist: string[]; // Min 3 steps, verb-first
  cta: { text: string; route: string | null };
}

export const contentRegistry: Record<string, ContentItem> = {
  "arctic-security-opus": {
    "slug": "arctic-security-opus",
    "category": "routines",
    "featured": true,
    "navLabel": "Opus",
    "seo": {
      "title": "Arctic Security Opus | Strateginen Selviytymisopas",
      "description": "Pohjoisen digitaalisen turvallisuuden perusteos. Strategiat, rutiinit ja mielenmalli arktiseen kyberympäristöön."
    },
    "hero": {
      "title": "Arctic Security Opus",
      "subtitle": "Strateginen perusteos digitaaliseen selviytymiseen."
    },
    "sections": [
      {
        "title": "Pohjoinen mielenmalli",
        "body": "Turvallisuus ei ole työkalu, vaan tila. Opus opastaa rakentamaan rutiinit, jotka kestävät vaativimmatkin olosuhteet."
      }
    ],
    "checklist": [
      "Määritä kriittiset digitaaliset resurssit",
      "Luo päivittäinen tarkistuslista",
      "Vakiinnuta turvalliset viestintäkanavat"
    ],
    "cta": {
      "text": "Lataa Opus",
      "route": "/download/opus"
    }
  },
  "arctic-codex-protocol": {
    "slug": "arctic-codex-protocol",
    "category": "routines",
    "featured": false,
    "navLabel": "Codex",
    "seo": {
      "title": "Arctic Codex Protocol | Arkkitehtuurin Peruskivi",
      "description": "Tekninen protokolla järjestelmien karkaisuun ja arktiseen infrastruktuuriin."
    },
    "hero": {
      "title": "Arctic Codex Protocol",
      "subtitle": "Järjestelmäarkkitehtuurin muuttumaton peruskivi."
    },
    "sections": [
      {
        "title": "Infrastruktuurin karkaisu",
        "body": "Codex määrittelee standardit, joilla digitaalinen ympäristö eristetään ja suojataan ulkoisilta häiriöiltä."
      }
    ],
    "checklist": [
      "Implementoi Zero Trust -arkkitehtuuri",
      "Koveta palvelinympäristöt",
      "Automatisoi lokien analysointi"
    ],
    "cta": {
      "text": "Lue Protokolla",
      "route": "/codex-details"
    }
  },
  "arctic-automation-hub": {
    "slug": "arctic-automation-hub",
    "category": "routines",
    "featured": false,
    "navLabel": "Automaatio",
    "seo": {
      "title": "Arctic Automation Hub | Turvallinen Dev-tila",
      "description": "Automaation ja turvallisen ohjelmistokehityksen keskus."
    },
    "hero": {
      "title": "Arctic Automation Hub",
      "subtitle": "Tehokkuutta turvallisuuden ehdoilla."
    },
    "sections": [
      {
        "title": "Turvallinen CI/CD",
        "body": "Automaatio poistaa inhimilliset virheet. Hub tarjoaa työkalut jatkuvaan ja turvalliseen toimitukseen."
      }
    ],
    "checklist": [
      "Skannaa koodi haavoittuvuuksien varalta",
      "Automatisoi päivityssyklit",
      "Validoi konfiguraatiomuutokset"
    ],
    "cta": {
      "text": "Avaa Hub",
      "route": "/automation-tools"
    }
  },
  "arctic-privacy-vault": {
    "slug": "arctic-privacy-vault",
    "category": "privacy",
    "featured": true,
    "navLabel": "Tietosuoja",
    "seo": {
      "title": "Arctic Privacy Vault | Digitaalinen Ikirouta",
      "description": "Datasuvereniteetti ja yksityisyyden suojaaminen äärimmäisissä olosuhteissa."
    },
    "hero": {
      "title": "Arctic Privacy Vault",
      "subtitle": "Datan suvereniteetti ja digitaalinen ikirouta."
    },
    "sections": [
      {
        "title": "Digitaalinen ikirouta",
        "body": "Tallennamme kriittisen tiedon tavalla, joka säilyy muuttumattomana ja saavuttamattomana ulkopuolisille. Tämä on datan suvereniteetin korkein muoto."
      },
      {
        "title": "Yksityisyyden kerrokset",
        "body": "Käytämme monikerroksista salausta ja hajautettua tallennusta varmistaaksemme, ettei yksittäinen murtuma vaaranna kokonaisuutta."
      }
    ],
    "checklist": [
      "Käytä päästä päähän -salausta kaikessa viestinnässä",
      "Minimoi kerättävän datan määrä",
      "Auditoi kolmansien osapuolten pääsyoikeudet"
    ],
    "cta": {
      "text": "Suojaa Datasi",
      "route": "/privacy-setup"
    }
  },
  "mobile-field-hardening": {
    "slug": "mobile-field-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiili",
    "seo": {
      "title": "Mobiilikarkaisu | Arctic Field Hardening",
      "description": "Mobiililaitteiden syväkarkaisu kenttäolosuhteisiin."
    },
    "hero": {
      "title": "Mobiilikarkaisu",
      "subtitle": "Laitteesi on etulinjan puolustus."
    },
    "sections": [
      {
        "title": "Kenttäkarkaisu",
        "body": "Mobiililaite on usein heikoin lenkki. Karkaisemme käyttöjärjestelmän ja sovellukset kestämään kohdistettuja hyökkäyksiä."
      }
    ],
    "checklist": [
      "Poista tarpeettomat radioliitännät (BT/NFC)",
      "Käytä laitteistopohjaista salausta",
      "Eristä työ- ja henkilökohtainen profiili"
    ],
    "cta": {
      "text": "Aloita Karkaisu",
      "route": "/mobile-guide"
    }
  },
  "adversarial-ai-defense": {
    "slug": "adversarial-ai-defense",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-Turva",
    "seo": {
      "title": "AI-vastatoimet | Adversarial AI Defense",
      "description": "Suojaudu tekoälypohjaisilta hyökkäyksiltä ja varmista mallien linjaus (alignment)."
    },
    "hero": {
      "title": "AI-vastatoimet",
      "subtitle": "Puolustus tekoälypohjaisia uhkia vastaan."
    },
    "sections": [
      {
        "title": "Adversarial Attacks & Alignment",
        "body": "Tekoälymallit ovat alttiita manipuloinnille. Keskitymme mallien linjaukseen (alignment) ja vastakkaisten hyökkäysten (adversarial attacks) tunnistamiseen."
      }
    ],
    "checklist": [
      "Testaa mallit syötteen manipuloinnin varalta",
      "Varmista mallien eettinen linjaus",
      "Monitoroi tekoälyn ulostuloja poikkeamien varalta"
    ],
    "cta": {
      "text": "Tutki AI-turvaa",
      "route": "/ai-defense-lab"
    }
  },
  "arctic-business-continuity": {
    "slug": "arctic-business-continuity",
    "category": "crisis",
    "featured": true,
    "navLabel": "Jatkuvuus",
    "seo": {
      "title": "Arctic Business Continuity | Jatkuvuussuunnittelu",
      "description": "Liiketoiminnan jatkuvuus kriisitilanteissa ja Arctic Freeze -protokolla."
    },
    "hero": {
      "title": "Jatkuvuussuunnittelu",
      "subtitle": "Toimintakyky kaikissa olosuhteissa."
    },
    "sections": [
      {
        "title": "Arctic Freeze -protokolla",
        "body": "Kun kriisi iskee, aktivoimme Arctic Freeze -protokollan. Se varmistaa kriittisten toimintojen jatkumisen offline-tilassa ja eristetyssä verkossa."
      }
    ],
    "checklist": [
      "Luo offline-toimintasuunnitelma",
      "Testaa varajärjestelmien käynnistys",
      "Kouluta henkilöstö poikkeustilaan"
    ],
    "cta": {
      "text": "Varmista Jatkuvuus",
      "route": "/continuity-plan"
    }
  },
  "remote-work-security": {
    "slug": "remote-work-security",
    "category": "kyber",
    "featured": false,
    "navLabel": "Etätyö",
    "seo": {
      "title": "Etätyön Turvallisuus | Arctic Remote",
      "description": "Turvallinen työskentely toimiston ulkopuolella."
    },
    "hero": {
      "title": "Etätyön Turvallisuus",
      "subtitle": "Toimisto on siellä missä sinäkin."
    },
    "sections": [
      {
        "title": "Turvallinen etäyhteys",
        "body": "Varmista, että jokainen yhteys on suojattu ja jokainen käyttäjä on tunnistettu vahvasti."
      }
    ],
    "checklist": [
      "Käytä vahvaa monivaiheista tunnistautumista",
      "Varmista VPN-yhteyden eheys",
      "Päivitä kotiverkon laitteet"
    ],
    "cta": {
      "text": "Lue Ohjeet",
      "route": "/remote-security"
    }
  },
  "social-engineering": {
    "slug": "social-engineering",
    "category": "kyber",
    "featured": false,
    "navLabel": "Tunturivaisto",
    "seo": {
      "title": "Tunturivaisto | Sosiaalinen Manipulointi",
      "description": "Tunnista ja torju sosiaalisen manipuloinnin yritykset."
    },
    "hero": {
      "title": "Tunturivaisto",
      "subtitle": "Ihmisen puolustusmekanismit digiajassa."
    },
    "sections": [
      {
        "title": "Psykologinen puolustus",
        "body": "Tekniikka ei riitä, jos ihminen erehtyy. Tunturivaisto opettaa tunnistamaan manipuloinnin merkit."
      }
    ],
    "checklist": [
      "Varmista pyynnön esittäjän henkilöllisyys",
      "Suhtaudu kriittisesti kiireellisiin pyyntöihin",
      "Ilmoita epäilyttävistä havainnoista"
    ],
    "cta": {
      "text": "Kehitä Vaistoasi",
      "route": "/social-eng-defense"
    }
  },
  "incident-response": {
    "slug": "incident-response",
    "category": "crisis",
    "featured": false,
    "navLabel": "Vaste",
    "seo": {
      "title": "Kriisinhallinta | Incident Response",
      "description": "Nopea vaste ja toipuminen tietoturvapoikkeamista."
    },
    "hero": {
      "title": "Kriisinhallinta",
      "subtitle": "Kun vahinko on tapahtunut."
    },
    "sections": [
      {
        "title": "Välitön vaste",
        "body": "Ensimmäiset minuutit ratkaisevat. Selkeä vasteohjeistus minimoi vahingot ja nopeuttaa toipumista."
      }
    ],
    "checklist": [
      "Eristä saastuneet järjestelmät",
      "Aktivoi kriisiviestintäkanavat",
      "Analysoi hyökkäyksen juurisyy"
    ],
    "cta": {
      "text": "Vasteohjeet",
      "route": "/ir-protocol"
    }
  }
};