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
      },
      {
        "title": "Zero Trust Arktisessa Verkossa",
        "body": "Luottamus on ansaittava uudelleen jokaisessa pakkasasteessa. Verkkoarkkitehtuurimme ei luota sisä- eikä ulkoverkon liikenteeseen oletusarvoisesti. Jokainen yhteys todennetaan, salataan ja valtuutetaan erikseen, aivan kuten jokainen askel heikoilla jäillä."
      }
    ],
    "checklist": [
      "Määrittele dokumentin kohderyhmä (CISO vs. Arkkitehdit)",
      "Valitse visuaalinen teema (Slate-950 tausta, Emerald-500 korostukset)",
      "Generoi sisältö lukukohtaisesti asiantuntijatason varmistamiseksi",
      "Lisää konkreettiset tarkistuslistat jokaisen luvun loppuun"
    ],
    "cta": {
      "text": "Lataa Opasluonnos",
      "route": null
    }
  },
  "arctic-codex-protocol": {
    "slug": "arctic-codex-protocol",
    "category": "routines",
    "featured": true,
    "navLabel": "Arctic Codex",
    "seo": {
      "title": "Arctic Codex: Arkkitehtuurin peruskivi",
      "description": "Miten Lapland AI Labin Codex ohjaa turvallisuutta ja brändin eheyttä kaikissa olosuhteissa."
    },
    "hero": {
      "title": "Ikiroudan vakaus: Arctic Codex",
      "subtitle": "Järjestelmän muuttumaton ydin, joka takaa turvallisuuden ja jatkuvuuden."
    },
    "sections": [
      {
        "title": "Codexin rooli: Permafrost-kerros",
        "body": "Codex ei ole pelkkä dokumentti, vaan se on arkkitehtuurimme alin kerros. Se määrittelee ne rajat, joita tekoäly ja sisällöntuotanto eivät saa ylittää. Se on 'North Star', joka ohjaa navigointia silloinkin, kun näkyvyys on nolla."
      },
      {
        "title": "Ohjaus ja Auditointi",
        "body": "Codexin tehtävänä on validoida jokainen vastaus ja toiminto suhteessa 'Arctic Security' -brändiin. Se varmistaa, että tekninen asiantuntijuus yhdistyy rauhalliseen, pohjoiseen vakauteen ilman kompromisseja."
      }
    ],
    "checklist": [
      "Määrittele Codexin muuttumattomat ydinsäännöt",
      "Aseta kielelliset ja tekniset turvarajat",
      "Auditoi ulostulo suhteessa brändin visuaaliseen ja sanalliseen identiteettiin"
    ],
    "cta": {
      "text": "Lue protokolla",
      "route": "/routines"
    }
  },
  "arctic-automation-hub": {
    "slug": "arctic-automation-hub",
    "category": "routines",
    "featured": true,
    "navLabel": "Automaatio & Dev",
    "seo": {
      "title": "Automaatio ja Dev-tila | Lapland AI Lab",
      "description": "Rakenna itseohjautuva infrastruktuuri reaaliaikaisella logiikkakartalla ja manuaalisella ohjauskeskuksella."
    },
    "hero": {
      "title": "Komentokeskus: Automaatio",
      "subtitle": "Hallitse digitaalista ekosysteemiäsi kuin jäänmurtajaa. Automatisoi rutiinit, mutta säilytä manuaalinen hallinta kriittisissä solmukohdissa."
    },
    "sections": [
      {
        "title": "Itseohjautuva infrastruktuuri",
        "body": "Moderni arkkitehtuuri ei ainoastaan suorita koodia, vaan valvoo itseään. Käytä CI/CD-putkia automatisoidaksesi testauksen ja käyttöönoton. Kun ympäristö on vakioitu, virhemarginaali kutistuu kuin hanki keväällä."
      },
      {
        "title": "Dev Mode: Ihmisen ja koneen liitto",
        "body": "Kaikkea ei voi jättää algoritmien varaan. Dev Mode on 'Human-in-the-loop' -rajapinta, joka pysäyttää prosessin ja pyytää vahvistusta, kun järjestelmä kohtaa poikkeaman tai vaatii strategista päätöksentekoa."
      }
    ],
    "checklist": [
      "Määritä pisteet, jotka vaativat manuaalista hyväksyntää",
      "Rakenna reaaliaikainen dashboard järjestelmän logiikan visualisointiin",
      "Automatisoi toistuvat ylläpitotehtävät skripteillä"
    ],
    "cta": {
      "text": "Aktivoi automaatio",
      "route": null
    }
  },
  "arctic-privacy-vault": {
    "slug": "arctic-privacy-vault",
    "category": "privacy",
    "featured": true,
    "navLabel": "Tietosuoja",
    "seo": {
      "title": "Arktinen tietosuoja ja datasuvereniteetti | Lapland AI Lab",
      "description": "Suojaa organisaatiosi arkaluontoisin tieto pohjoisen peruskallion varmuudella. Datasuvereniteetti ja nollaluottamus."
    },
    "hero": {
      "title": "Digitaalinen ikirouta",
      "subtitle": "Tietosuoja ei ole vain vaatimus, se on turvasatama. Rakennamme ratkaisuja, joissa data pysyy hallinnassasi, vaikka ympärillä myrskyäisi."
    },
    "sections": [
      {
        "title": "Datasuvereniteetti",
        "body": "Varmistamme, että kriittinen data ei koskaan poistu määritellyn jurisdiktion ulkopuolelle. Käytämme hajautettua tallennusta ja vahvaa salausta, joka kestää aikaa."
      },
      {
        "title": "Nollaluottamus-arkkitehtuuri",
        "body": "Yksityisyys on oletusarvo. Jokainen pääsypyyntö on todennettava, riippumatta siitä, tuleeko se verkon sisältä vai ulkoa."
      }
    ],
    "checklist": [
      "Kartoita datan sijainti ja virtaus",
      "Aktivoi päästä päähän -salaus kaikessa viestinnässä",
      "Minimoi kerättävän datan määrä (Data Minimization)",
      "Auditoi kolmansien osapuolten pääsyasetukset"
    ],
    "cta": {
      "text": "Lataa tietosuojaviite",
      "route": null
    }
  },
  "mobile-field-hardening": {
    "slug": "mobile-field-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiilikarkaisu",
    "seo": {
      "title": "Mobiililaitteiden koventaminen äärioloihin | Lapland AI Lab",
      "description": "Älypuhelimen suojaus kenttäolosuhteissa. Fyysinen ja digitaalinen karkaisu."
    },
    "hero": {
      "title": "Karkaistu yhteys",
      "subtitle": "Kentällä mobiililaite on sekä työkalu että riski. Arctic Hardening -protokollamme varmistaa, että viestintäsi pysyy murtumattomana myös verkon reunalla."
    },
    "sections": [
      {
        "title": "Laitetason karkaisu",
        "body": "Poistamme tarpeettomat palvelut ja suljemme hyökkäyspinnat. Käytämme hiekkalaatikointia ja rautapohjaista salausta suojaamaan laitteen muistia."
      },
      {
        "title": "Viestintä vihamielisessä verkossa",
        "body": "Kun avoimet verkot ovat ainoa vaihtoehto, käytämme dynaamisia VPN-tunneleita ja peitettyä liikennettä (obfuscation) estämään seurannan."
      }
    ],
    "checklist": [
      "Poista käytöstä automaattinen Wi-Fi-liittyminen",
      "Käytä vain biometrisesti varmennettuja avainnippuja",
      "Asenna hätätyhjennys-toiminto (Remote Wipe)",
      "Vaihda fyysinen SIM-kortti suojattuun eSIM-profiiliin"
    ],
    "cta": {
      "text": "Lue karkaisuohje",
      "route": null
    }
  },
  "adversarial-ai-defense": {
    "slug": "adversarial-ai-defense",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-vastatoimet",
    "seo": {
      "title": "Adversarial Attacks & Model Alignment | Lapland AI Lab",
      "description": "Suojaa tekoälymallisi manipulaatiolta. Syväsukellus vastakkaisiin hyökkäyksiin ja mallien linjaukseen."
    },
    "hero": {
      "title": "Tekoälyn puolustuslinja",
      "subtitle": "Kun algoritmit ohjaavat päätöksentekoa, niiden eheys on kriittistä. Torjumme adversarial attacks -hyökkäykset ja varmistamme model alignment -prosessin toteutumisen."
    },
    "sections": [
      {
        "title": "Vastakkaiset hyökkäykset",
        "body": "Hyökkääjät voivat syöttää malleille manipuloitua dataa, joka muuttaa niiden toimintaa huomaamatta. Rakennamme robustit suodattimet, jotka tunnistavat poikkeamat syötteissä."
      },
      {
        "title": "Mallien linjaus (Alignment)",
        "body": "Varmistamme, että tekoäly toimii eettisten ja turvallisten raamien sisällä. Model alignment ei ole vain koodia, se on arvojen kääntämistä matemaattisiksi rajoitteiksi."
      }
    ],
    "checklist": [
      "Suorita stressitesti vastakkaisilla syötteillä",
      "Varmista opetusdatan puhtaus (Data Sanitization)",
      "Implementoi jatkuva monitorointi mallin ulostuloille",
      "Määrittele kovat turvarajat (Guardrails) vastauksille"
    ],
    "cta": {
      "text": "Tekninen katsaus",
      "route": null
    }
  },
  "arctic-business-continuity": {
    "slug": "arctic-business-continuity",
    "category": "crisis",
    "featured": true,
    "navLabel": "Jatkuvuus",
    "seo": {
      "title": "Liiketoiminnan jatkuvuus arktisissa kriiseissä | Lapland AI Lab",
      "description": "Miten varmistat organisaatiosi toimintakyvyn, kun digitaalinen infrastruktuuri pettää?"
    },
    "hero": {
      "title": "Routa ei riko rutiineja",
      "subtitle": "Varautuminen on taitoa toimia silloin, kun suunnitelma A sulaa alta. Rakennamme resilienssiä, joka kestää sähkökatkot ja tietoliikennehäiriöt."
    },
    "sections": [
      {
        "title": "Digitaalinen varautuminen",
        "body": "Kriisinhallinta ei ole vain palomuureja; se on kykyä operoida 'offline-tilassa'. Organisaation on tunnistettava kriittiset prosessit, joiden on toimittava silloinkin, kun pilvipalvelut ovat saavuttamattomissa."
      },
      {
        "title": "Vasteketjun jäädyttäminen",
        "body": "Kun hyökkäys tai häiriö havaitaan, ensimmäiset minuutit ratkaisevat. Selkeät, etukäteen harjoitellut protokollat estävät paniikin ja minimoivat vahingot. Kutsumme tätä 'Arctic Freeze' -protokollaksi: eristetään saastunut alue välittömästi."
      }
    ],
    "checklist": [
      "Määritä kriittiset offline-toiminnot",
      "Päivitä yhteystietolista fyysiseen muotoon",
      "Testaa palautumisaika (RTO) neljännesvuosittain",
      "Varmista varaviestintäkanavien toimivuus"
    ],
    "cta": {
      "text": "Lataa jatkuvuusopas",
      "route": null
    }
  },
  "remote-work-security": {
    "slug": "remote-work-security",
    "category": "kyber",
    "featured": true,
    "navLabel": "Etätyö",
    "seo": { "title": "Etätyön tietoturvaopas | Lapland AI Lab", "description": "Käytännön ohjeet turvalliseen etätyöhön pohjoisissa oloissa." },
    "hero": { "title": "Toimisto ilman seiniä", "subtitle": "Varmista VPN-yhteys ennen tunturiin nousua. Näin pidät työtietosi turvassa missä tahansa." },
    "sections": [
      { "title": "Kotiverkon kriittiset pisteet", "body": "Reititin on kotisi tietoturvan ovi. Jos oletussalasana on 'admin', ovi on selällään. Vaihda salasana ennen kuin kirjaudut työkoneella." }
    ],
    "checklist": ["Varmista VPN-yhteys aina", "Vaihda reitittimen oletussalasana", "Peitä kamera fyysisellä suojalla", "Käytä tietosuojakalvoa julkisilla paikoilla"],
    "cta": { "text": "Tutustu fyysiseen turvaan", "route": null }
  },
  "social-engineering": {
    "slug": "social-engineering",
    "category": "kyber",
    "featured": true,
    "navLabel": "Tunturivaisto",
    "seo": { "title": "Sosiaalinen manipulointi | Lapland AI Lab", "description": "Kehitä organisaatiollesi tunturivaisto tunnistamaan digitaaliset petokset." },
    "hero": { "title": "Inhimillinen valpautus", "subtitle": "Tekniikka on vain niin vahvaa kuin sen käyttäjä. Sosiaalinen manipulointi on yleisin tapa murtaa suojat." },
    "sections": [
      { "title": "Tunnista kalastelu", "body": "Kalasteluviestit hyödyntävät usein kiirettä, pelkoa tai auktoriteettia. Jos pyyntö tuntuu epätavalliselta, se todennäköisesti on sitä." }
    ],
    "checklist": ["Tarkista lähettäjän todellinen osoite", "Älä syötä tunnuksia linkeistä", "Luota vaistoosi: jos se tuntuu oudolta, kysy"],
    "cta": { "text": "Tee kalastelutesti", "route": null }
  },
  "incident-response": {
    "slug": "incident-response",
    "category": "crisis",
    "featured": true,
    "navLabel": "Kriisinhallinta",
    "seo": { "title": "Tietomurto-ohjeistus | Lapland AI Lab", "description": "Välitön toimintaohje poikkeustilanteisiin." },
    "hero": { "title": "Kun vahinko sattuu", "subtitle": "Rauhallisuus on vahvin suojasi. Aika on kriittisin tekijäsi: eristä, ilmoita, reagoi." },
    "sections": [
      { "title": "Sekunneilla on väliä", "body": "Mitä nopeammin katkaiset verkkoyhteyden, sitä vähemmän dataa hyökkääjä ehtii viedä. Älä viivyttele analyysin pelossa." }
    ],
    "checklist": ["Eristä laite: Katkaise verkkoyhteydet", "Säilytä tila: Älä sammuta virtaa", "Ilmoita: Ota yhteys turvavalvomoon"],
    "cta": { "text": "Soita päivystykseen", "route": null }
  }
};