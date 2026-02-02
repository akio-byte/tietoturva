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
  "arctic-command-interactive": {
    "slug": "arctic-command-interactive",
    "category": "ai",
    "featured": true,
    "navLabel": "Arctic Command",
    "seo": {
      "title": "Arctic Command: AI Model Alignment & Codex Execution",
      "description": "Hallitse infrastruktuuria interaktiivisesti. Suojaudu adversarial attacks -hyökkäyksiltä ja varmista model alignment AI Studio -ympäristössä."
    },
    "hero": {
      "title": "Pohjoinen Komentokeskus",
      "subtitle": "Interaktiivinen hallinta Codex-automaatiolle ja AI-mallien eettiselle linjaukselle."
    },
    "sections": [
      {
        "title": "Interaktiivinen Lasimorfismi",
        "body": "Admin-käyttöliittymä ei ole vain staattinen näkymä, vaan elävä revontuli. Käytämme Slate-950-syvyyttä ja Emerald-500-tila-indikaattoreita luomaan visuaalisen vasteen jokaiselle komennolle. Dashboard integroi reaaliaikaisen telemetrian suoraan Codex-suorittimesta, mahdollistaen välittömän reagoinnin poikkeamiin."
      },
      {
        "title": "Codex Executor: Automaation Sydän",
        "body": "Codex Executor on rutiinien (routines) selkäranka. Se mahdollistaa monimutkaisten työnkulkujen ajamisen eristetyssä ympäristössä. Jokainen suoritus on kuin jään murtaminen: tarkkaa, voimakasta ja hallittua. Executor mahdollistaa scriptien ajon suoraan hallintapaneelista ilman manuaalista väliintuloa."
      },
      {
        "title": "AI Studio & Model Alignment",
        "body": "AI Studio on laboratorionne, jossa varmistetaan mallien turvallisuus. Keskitymme erityisesti 'adversarial attacks' -torjuntaan ja 'model alignment' -protokolliin. Täällä tekoäly muovataan palvelemaan organisaation arvoja, estäen hallitsemattomat ulostulot ja varmistaen, että algoritmit pysyvät määritetyllä polulla kuin kokenut opas tunturissa."
      }
    ],
    "checklist": [
      "Aktivoi interaktiivinen lasimorfismi-näkymä.",
      "Konfiguroi Codex Executor -oikeudet.",
      "Suorita model alignment -tarkistus AI Studiossa.",
      "Monitoroi adversarial attacks -indikaattoreita.",
      "Varmista rutiinien eheys digitaalisessa ikiroudassa."
    ],
    "cta": {
      "text": "Avaa Komentokeskus",
      "route": null // Draft mode until specialized dashboard link is confirmed
    }
  },
  "aurora-ai-alignment": {
    "slug": "aurora-ai-alignment",
    "category": "ai",
    "featured": true,
    "navLabel": "Aurora AI Safety",
    "seo": {
      "title": "Aurora AI Alignment & Safety | Arctic Security",
      "description": "Defend against adversarial attacks and ensure model alignment with our Aurora AI safety framework. Secure your intelligence layer."
    },
    "hero": {
      "title": "Aurora AI Alignment",
      "subtitle": "Guiding your intelligence through the shifting winds of adversarial threats with crystalline precision."
    },
    "sections": [
      {
        "title": "Adversarial Defense",
        "body": "In the shifting landscape of machine learning, your models face constant pressure from sophisticated adversarial attacks. These subtle perturbations in data can lead to catastrophic failures in decision-making. Our Aurora framework implements robust input sanitization and gradient masking to ensure your neural networks remain resilient against prompt injections and data poisoning, maintaining the integrity of your intellectual core."
      },
      {
        "title": "Model Alignment",
        "body": "Like the steady glow of the northern lights, your AI must remain aligned with human intent and organizational values. We utilize advanced reinforcement learning from human feedback (RLHF) and constitutional AI principles to ensure model alignment. This process creates a stable ethical compass for your autonomous agents, preventing drift and ensuring that every output resonates with your brand's high-end standards."
      }
    ],
    "checklist": [
      "Monitor model drift continuously",
      "Sanitize all input vectors",
      "Validate alignment metrics weekly",
      "Stress-test against adversarial attacks",
      "Audit training data provenance"
    ],
    "cta": {
      "text": "Secure Your Intelligence",
      "route": "/contact"
    }
  },
  "ai-studio-audit": {
    "slug": "ai-studio-audit",
    "category": "ai",
    "featured": true,
    "navLabel": "AI Studio Audit",
    "seo": {
      "title": "AI Studio Auditointi | Adversarial Attacks & Model Alignment",
      "description": "Varmista tekoälyratkaisujesi murtovarmuus. Erikoistunut auditointimme kattaa adversarial attacks -suojauksen ja model alignment -varmistuksen."
    },
    "hero": {
      "title": "Pohjoinen Valo Tekoälyn Pimeisiin Kulmiin",
      "subtitle": "AI Studio -auditointi on syväluotaava katsaus tekoälysi rakenteelliseen eheyteen. Varmistamme, että mallisi kestävät manipulaation ja noudattavat asetettuja rajoja."
    },
    "sections": [
      {
        "title": "Jäänmurtaja Tekoälyn Haavoittuvuuksille",
        "body": "Tekoälyratkaisut ovat kuin arktinen jääpeite: päältä vankkoja, mutta pinnan alla piilee näkymättömiä virtauksia. AI Studio -auditointimme keskittyy tunnistamaan kriittiset heikkoudet ennen kuin ne muuttuvat halkeamiksi. Käytämme edistyksellisiä menetelmiä, joilla paljastamme, miten mallisi reagoi poikkeuksellisiin syötteisiin ja yllättäviin tilanteisiin."
      },
      {
        "title": "Adversarial Attacks ja Vastustuskyky",
        "body": "Nykyaikaiset uhat eivät ole vain suoria hyökkäyksiä, vaan hienovaraista manipulaatiota. Analysoimme järjestelmäsi alttiuden adversarial attacks -menetelmille, joissa syötteitä muokataan harhauttamaan tekoälyä. Rakennamme suojakerroksen, joka toimii kuin ikirouta – muuttumattomana ja periksiantamattomana ulkoisen paineen alla."
      },
      {
        "title": "Model Alignment – Arvojen ja Toiminnan Synkronointi",
        "body": "Tekoälyn on toimittava organisaatiosi eettisten ja toiminnallisten raamien sisällä. Model alignment -tarkastuksessamme varmistamme, että kielimallit ja agentit eivät poikkea määritellyltä polulta. Tämä prosessi on kuin kompassin kalibrointi pohjoisella pallonpuoliskolla: tarkkuus on elinehto eksymisen välttämiseksi."
      }
    ],
    "checklist": [
      "Analysoi mallin syötehaavoittuvuudet.",
      "Testaa vastustuskyky adversarial attacks -hyökkäyksille.",
      "Varmista model alignment organisaation sääntöihin.",
      "Auditoi harjoitusdatan eheys ja puhtaus.",
      "Määritä turvapiiri tekoälyagenteille.",
      "Dokumentoi riskitasot ja korjaavat toimenpiteet."
    ],
    "cta": {
      "text": "Varaa asiantuntija-auditointi",
      "route": "/ota-yhteytta"
    }
  },
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
  "nollatieto-glacier": {
    "slug": "nollatieto-glacier",
    "category": "privacy",
    "featured": true,
    "navLabel": "Nollatieto-suoja",
    "seo": {
      "title": "Zero-Knowledge -arkkitehtuuri arktisessa tietosuojassa",
      "description": "Miten rakentaa tietosuoja, jossa edes palveluntarjoaja ei pääse käsiksi dataasi."
    },
    "hero": {
      "title": "Jäänmurtaja tietosuojalle",
      "subtitle": "Varmista datasi koskemattomuus Zero-Knowledge -protokollilla."
    },
    "sections": [
      {
        "title": "Matemaattinen eristys",
        "body": "Nollatietotodistus mahdollistaa tiedon oikeellisuuden varmistamisen paljastamatta itse tietoa. Se on kuin revontuli: näet loisteen, mutta et voi koskettaa sen lähdettä."
      }
    ],
    "checklist": [
      "Implementoi päästä-päähän-salaus kaikkeen viestinnät",
      "Hajauta avainten hallinta HSM-moduuleihin",
      "Auditoi nollatieto-protokollien eheys säännöllisesti"
    ],
    "cta": {
      "text": "Lataa arkkitehtuurikuvaus",
      "route": "/vault/zero-knowledge"
    }
  },
  "field-hardened-comms": {
    "slug": "field-hardened-comms",
    "category": "mobile",
    "featured": false,
    "navLabel": "Kenttäkovennus",
    "seo": {
      "title": "Mobiililaitteiden kovennus kenttäolosuhteisiin",
      "description": "Suojaa mobiiliviestintäsi signaalitiedustelulta ja fyysiseltä kajoamiselta."
    },
    "hero": {
      "title": "Signaali pimeydessä",
      "subtitle": "Karkaistu mobiilistrategia kriittiseen viestintään."
    },
    "sections": [
      {
        "title": "Radiosuojaus",
        "body": "Kun operoidaan verkon reunalla, laitteen on oltava hiljaa. Käytä Faraday-suojausta ja selektiivistä radioliikennettä minimoidaksesi digitaalisen jalonjälkesi."
      }
    ],
    "checklist": [
      "Poista käytöstä tarpeettored radiotaajuudet (NFC, BT)",
      "Käytä vain GrapheneOS-tyyppisiä karkaistuja käyttöjärjestelmiä",
      "Aktivoi automaattinen datan pyyhintä väärien yritysten jälkeen"
    ],
    "cta": {
      "text": "Aloita kovennus",
      "route": "/mobile/hardening-guide"
    }
  },
  "ai-agent-governance": {
    "slug": "ai-agent-governance",
    "category": "ai",
    "featured": false,
    "navLabel": "Agentti-hallinta",
    "seo": {
      "title": "AI-Agenttien hallinta ja auditointi | Lapland AI Lab",
      "description": "Määritä rajat autonomisille agenteille ja varmista ihmisen valvonta (human-in-the-loop)."
    },
    "hero": {
      "title": "Agentti-hallinta",
      "subtitle": "Hallittu autonomia on turvallisuuden tae pohjoisessa AI-ekosysteemissä."
    },
    "sections": [
      {
        "title": "Autonomian rajat",
        "body": "Agentit tarvitsevat selkeät hiekkalaatikot ja pääsynhallinnan. Ilman valvontaa autonominen järjestelmä voi muuttua arvaamattomaksi ja alttiiksi manipuloinnille."
      }
    ],
    "checklist": [
      "Määritä kriittiset kynnykset ihmisvalvonnalle",
      "Rajoita agenttien API-pääsyä vähimmän oikeuden periaatteella",
      "Lokita kaikki agenttien tekemät päätöksentekoprosessit"
    ],
    "cta": {
      "text": "Lue hallintamalli",
      "route": "/ai/governance"
    }
  },
  "arctic-data-sovereignty": {
    "slug": "arctic-data-sovereignty",
    "category": "privacy",
    "featured": true,
    "navLabel": "Datan Hallinta",
    "seo": {
      "title": "Arctic Data Sovereignty | Digitaalinen Itsemääräämisoikeus",
      "description": "Varmista tietojesi koskemattomuus pohjoisen tiukimpien tietosuojastandardien mukaisesti. Hallitse digitaalista jalanjälkeäsi."
    },
    "hero": {
      "title": "Datan Itsemääräämisoikeus",
      "subtitle": "Suojaa yksityisyytesi kuin ikirouta suojaa maanperää – murtumattomasti ja pysyvästi."
    },
    "sections": [
      {
        "title": "Digitaalinen Eristys",
        "body": "Nykyaikaisessa verkossa tieto on valuuttaa, jota kerätään ilman lupaa. Arctic Data Sovereignty -malli perustuu nollaluottamukseen ja tietojen hajauttamiseen siten, ettei mikään yksittäinen taho voi muodostaa kokonaiskuvaa toiminnastasi."
      },
      {
        "title": "Sijaintitiedon Arkkitehtuuri",
        "body": "Palvelimien fyysinen sijainti on kriittinen tekijä. Hyödynnämme pohjoismaista lainsäädäntöä ja teknistä salausta varmistaaksemme, että datasi pysyy oikeudenkäyttöpiirissä, joka kunnioittaa yksilönvapautta."
      }
    ],
    "checklist": [
      "Auditointi: Kartoita nykyinen datan sijainti",
      "Salaus: Ota käyttöön päästä-päähän-salaus kaikessa viestinnässä",
      "Minimointi: Poista tarpeeton metatieto digitaalisista varannoista"
    ],
    "cta": {
      "text": "Vahvista tietosuoja",
      "route": "/privacy/vault"
    }
  },
  "arctic-mobile-hardening": {
    "slug": "arctic-mobile-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiili-Kovennus",
    "seo": {
      "title": "Arctic Mobile Hardening | Mobiililaitteiden Turvaaminen",
      "description": "Syväsukellus mobiililaitteiden tekniseen koventamiseen. Suojaudu seurannalta ja tietomurroilta kenttäolosuhteissa."
    },
    "hero": {
      "title": "Mobiili-Kovennus",
      "subtitle": "Muuta älypuhelimesi haavoittuvasta sensorista turvalliseksi viestintävälineeksi."
    },
    "sections": [
      {
        "title": "Radiosignaalien Hallinta",
        "body": "Mobiililaite lähettää jatkuvasti signaaleja, jotka paljastavat sijaintisi ja identiteettisi. Kovennusprosessi alkaa radioprotokollien (Bluetooth, Wi-Fi, NFC) tiukasta hallinnasta ja tarvittaessa fyysisestä eristämisestä."
      },
      {
        "title": "Käyttöjärjestelmän Eristys",
        "body": "Vakio-ohjelmistot sisältävät usein telemetriaa ja takaovia. Asennamme ja konfiguroimme tietoturvaan keskittyviä käyttöjärjestelmäkerroksia, jotka estävät luvattoman datan ulosvirtauksen."
      }
    ],
    "checklist": [
      "Konfiguroi: Poista käytöstä tarpeettomat taustaprosessit",
      "Eristä: Käytä hiekkalaatikointia kriittisille sovelluksille",
      "Suojaa: Ota käyttöön laitteistopohjainen tunnistautuminen"
    ],
    "cta": {
      "text": "Lataa kovennusopas",
      "route": "/mobile/hardening-guide"
    }
  },
  "digital-survival-protocol": {
    "slug": "digital-survival-protocol",
    "category": "crisis",
    "featured": false,
    "navLabel": "Digi-Selviytyminen",
    "seo": {
      "title": "Digital Survival Protocol | Kriisiviestintä ja Jatkuvuus",
      "description": "Toimintasuunnitelma digitaalisen infrastruktuurin pettäessä. Varmista viestintä ja tiedon saatavuus kaikissa olosuhteissa."
    },
    "hero": {
      "title": "Digitaalinen Selviytyminen",
      "subtitle": "Kun verkko pimenee, valmistautuminen ratkaisee. Strategia sähköiseen selviytymiseen."
    },
    "sections": [
      {
        "title": "Analoginen Varmistus",
        "body": "Kriisitilanteessa digitaaliset järjestelmät ovat haavoittuvia. Protokollamme opastaa, miten kriittinen tieto siirretään offline-tilaan ja miten viestintä hoidetaan ilman keskitettyä infrastruktuuria."
      },
      {
        "title": "Vastekyvyn Testaus",
        "body": "Suunnitelma on vain paperia, jos sitä ei ole testattu. Simuloimme skenaarioita, joissa verkkoyhteydet ja sähkönhankinta on katkaistu, varmistaaksemme organisaatiosi toimintakyvyn säilymisen."
      }
    ],
    "checklist": [
      "Luo: Muodosta offline-arkisto kriittisestä tiedosta",
      "Määritä: Valitse vaihtoehtoiset viestintäkanavat (Mesh/Satelliitti)",
      "Harjoittele: Suorita säännölliset 'Blackout'-harjoitukset"
    ],
    "cta": {
      "text": "Aloita varautuminen",
      "route": "/crisis/survival"
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