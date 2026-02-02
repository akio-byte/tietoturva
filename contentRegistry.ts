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
        "body": "Tämä opus ei ole pelkkä manuaali, vaan strateginen viitekehys. Se yhdistää Lapland AI Labin 'Arctic Security' -filosofian käytännön teknisiin kontrolleihin. Sisältö on jaettu kuuteen pääteemaan: Kyberresilienssi, AI-turva, Mobiili karkaisu, Kriisinhallinta, Tietosuoja ja Päivittäiset rutiinit. Jokainen luku on suunniteltu kestämään aikaa, aivan kuten peruskallio jään alla."
      },
      {
        "title": "Zero Trust Arktisessa Verkossa",
        "body": "Luottamus on ansaittava uudelleen jokaisessa pakkasasteessa. Verkkoarkkitehtuurimme ei luota sisä- eikä ulkoverkon liikenteeseen oletusarvoisesti. Jokainen yhteys todennetaan, salataan ja valtuutetaan erikseen, aivan kuten jokainen askel heikoilla jäillä."
      },
      {
        "title": "Tekoälymallien Suojaaminen (Adversarial Attacks)",
        "body": "Suojaamme mallimme 'myrkytyksiltä' ja syötehyökkäyksiltä kerrostetulla puolustuksella. Datan eheys varmistetaan kryptografisesti, ja mallien vastauksia monitoroidaan reaaliaikaisesti poikkeamien varalta."
      }
    ],
    "checklist": [
      "Määrittele dokumentin kohderyhmä (CISO vs. Arkkitehdit)",
      "Valitse visuaalinen teema (Slate-950 tausta, Emerald-500 korostukset)",
      "Generoi sisältö lukukohtaisesti asiantuntijatason varmistamiseksi",
      "Lisää konkreettiset tarkistuslistat jokaisen luvun loppuun"
    ],
    "cta": {
      "text": "Lataa Opasluonnos (PDF)",
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
  "agentic-privacy-protocols": {
    "slug": "agentic-privacy-protocols",
    "category": "privacy",
    "featured": true,
    "navLabel": "Agentti-tietosuoja",
    "seo": {
      "title": "Autonomisten AI-agenttien tietosuoja | Arctic Security",
      "description": "Opas autonomisten AI-agenttien turvalliseen käyttöönottoon ja tietosuojan varmistamiseen arktisella tarkkuudella."
    },
    "hero": {
      "title": "Agenttitoiminnan Jäämuuri",
      "subtitle": "Suojaa organisaatiosi data, kun tekoäly siirtyy avustajasta itsenäiseksi toimijaksi."
    },
    "sections": [
      {
        "title": "Autonomian uusi rintama",
        "body": "Kun siirrymme staattisista kielimalleista autonomisiin agentteihin, jotka suorittavat tehtäviä itsenäisesti, hyökkäyspinta laajenee merkittävästi. Agentit eivät vain käsittele tietoa, ne muokkaavat ympäristöään. Tämä vaatii 'Routa-protokollan' kaltaista lähestymistapaa: jokainen agentin suorittama toiminto on voitava jäljittää ja rajoittaa ennalta määritettyihin raameihin."
      },
      {
        "title": "Tietosuojan hiekkalaatikkostrategia",
        "body": "Agenttien on toimittava tiukasti eristetyissä ympäristöissä. Kuten tunturivaeltaja pitää kriittiset varusteensa vesitiiviissä pusseissa, agentin pääsy yrityksen arkaluonteiseen dataan on rajoitettava vain tehtävän kannalta välttämättömään. Käytä dynaamisia käyttöoikeuksia, jotka raukeavat välittömästi tehtävän suorituksen jälkeen, estäen luvattoman datan keruun taustalla."
      },
      {
        "title": "Päättelyketjun auditointi",
        "body": "Agentin 'Chain of Thought' eli päättelyketju on tallennettava muuttumattomaan lokiin. Tämä mahdollistaa sen, että voimme jälkikäteen todentaa, miksi agentti teki tietyn päätöksen ja varmistaa, ettei se ole altistunut prompt-injektioille tai muulle ulkopuoliselle manipuloinnille tehtävän aikana."
      }
    ],
    "checklist": [
      "Määritä agentille 'Least Privilege' -oikeudet tehtäväkohtaisesti.",
      "Implementoi 'Human-in-the-loop' -varmistus kaikille kriittisille API-kutsuille.",
      "Salaa agenttien välinen viestintä ja lokita päättelyketjut reaaliajassa."
    ],
    "cta": {
      "text": "Lataa Agenttistrategia",
      "route": "/ai-technical-security"
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
      { "title": "Kotiverkon kriittiset pisteet", "body": "Reititin on kotisi tietoturvan ovi. Jos oletussalasana on 'admin', ovi on selällään. Vaihda salasana ennen kuin kirjaudut työkoneella." },
      { "title": "Liikkuva työ ja fyysinen suoja", "body": "Kun työskentelet junassa tai kahvilassa, suurin uhka on vieressä istuva silmäpari. Käytä aina tietosuojakalvoa." }
    ],
    "checklist": ["Varmista VPN-yhteys aina", "Vaihda reitittimen oletussalasana", "Peitä kamera fyysisellä suojalla", "Käytä tietosuojakalvoa julkisilla paikoilla"],
    "cta": { "text": "Tutustu fyysiseen turvaan", "route": "/content/physical-defense" }
  },
  "social-engineering": {
    "slug": "social-engineering",
    "category": "kyber",
    "featured": true,
    "navLabel": "Tunturivaisto",
    "seo": { "title": "Sosiaalinen manipulointi | Lapland AI Lab", "description": "Kehitä organisaatiollesi tunturivaisto tunnistamaan digitaaliset petokset." },
    "hero": { "title": "Inhimillinen valpautus", "subtitle": "Tekniikka on vain niin vahvaa kuin sen käyttäjä. Sosiaalinen manipulointi on yleisin tapa murtaa suojat." },
    "sections": [
      { "title": "Tunnista kalastelu", "body": "Kalasteluviestit hyödyntävät usein kiirettä, pelkoa tai auktoriteettia. Jos pyyntö tuntuu epätavalliselta, se todennäköisesti on sitä." },
      { "title": "Stop & Think -rutiini", "body": "Pysähdy hetkeksi ennen kuin klikkaat. Tarkista lähettäjän osoite ja linkin todellinen kohde viemällä hiiri sen päälle." }
    ],
    "checklist": ["Tarkista lähettäjän todellinen osoite", "Älä syötä tunnuksia linkeistä", "Varmista rahansiirrot toista kanavaa pitkin", "Luota vaistoosi: jos se tuntuu oudolta, kysy IT-tuelta"],
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
      { "title": "Sekunneilla on väliä", "body": "Mitä nopeammin katkaiset verkkoyhteyden, sitä vähemmän dataa hyökkääjä ehtii viedä. Älä viivyttele analyysin pelossa." },
      { "title": "Eskalaatiopolku", "body": "Tiedä ketä soittaa. Tallenna Labin turvavalvomon numero offline-tilaan jo tänään." }
    ],
    "checklist": ["Eristä laite: Katkaise verkkoyhteydet heti", "Säilytä tila: Älä sammuta virtaa", "Ilmoita: Ota yhteys Labin turvavalvomoon", "Vaihda kriittiset salasanat puhtaalla laitteella"],
    "cta": { "text": "Soita päivystykseen", "route": null }
  },
  "ai-technical-security": {
    "slug": "ai-technical-security",
    "category": "ai",
    "featured": true,
    "navLabel": "Tekninen AI-turva",
    "seo": { "title": "Tekoälyn tekninen tietoturva | Lapland AI Lab", "description": "Suojaudu prompt-injektioilta ja datan myrkytykseltä." },
    "hero": { "title": "AI-tietoturvan kova ydin", "subtitle": "Tekoäly on uusi hyökkäyspinta. Suojaa syötteet ja mallit yhtä huolellisesti kuin palvelimesi." },
    "sections": [
      { "title": "Prompt Injection", "body": "Hyökkääjä voi syöttää tekstiä, joka saa AI-mallin ohittamaan turvaohjeet. Monitoroi ja suodata mallille menevät kehotteet." },
      { "title": "Datan luottamuksellisuus", "body": "Älä syötä arkaluontoista asiakasdataa tai liikesalaisuuksia julkisiin kielimalleihin. Käytä aina organisaation sisäisiä instansseja." }
    ],
    "checklist": ["Validoi AI-tuotosten eheys", "Käytä suljettuja instansseja sensitiiviselle datalle", "Monitoroi poikkeavia kehotteita", "Anonymisoi data ennen syöttöä"],
    "cta": { "text": "Lue tekninen whitepaper", "route": null }
  },
  "arctic-hardware-safety": {
    "slug": "arctic-hardware-safety",
    "category": "kyber",
    "featured": false,
    "navLabel": "Laiteturva äärioloissa",
    "seo": { "title": "Pohjoinen kestävyys | Lapland AI Lab", "description": "Laitteiden fyysinen suojaaminen pakkasessa ja kosteudessa." },
    "hero": { "title": "Pohjoinen kestävyys", "subtitle": "Lapin olosuhteet asettavat laitteille omat haasteensa. Pakkanen ja kosteus ovat myös tietoturvariskejä." },
    "sections": [
      { "title": "Kylmähallinta", "body": "Akun äkillinen loppuminen pakkasessa voi keskeyttää kriittisen tietoturvapäivityksen tai lukituksen. Pidä MFA-laitteet lämpimänä." },
      { "title": "Kondensaatiovaara", "body": "Kun tuot laitteen tunturi-ilmasta sisätiloihin, kosteus voi vaurioittaa komponentteja. Anna laitteen lämmetä suljetussa laukussa." }
    ],
    "checklist": ["Pidä MFA-puhelin sisätaskussa", "Vältä päivityksiä ulkotiloissa", "Suojaa laitteet kosteudelta", "Varmista laturien toimivuus pakkasessa"],
    "cta": { "text": "Takaisin rutiineihin", "route": "/routines" }
  },
  "supply-chain": {
    "slug": "supply-chain",
    "category": "kyber",
    "featured": false,
    "navLabel": "Toimitusketju",
    "seo": { "title": "Toimitusketjun hallinta | Lapland AI Lab", "description": "Varmista kumppaniesi ja alihankkijoidesi tietoturvataso." },
    "hero": { "title": "Kaira-auditoinnit", "subtitle": "Digitaalinen ekosysteemi on yhtä vahva kuin sen heikoin lenkki. Varmista alihankkijoiden laatu." },
    "sections": [
      { "title": "Kumppanien valvonta", "body": "Vaadi toimittajilta säännölliset tietoturvaselvitykset ja määrittele selkeät SOP-sopimukset (Security Operating Procedures)." },
      { "title": "Pääsynhallinta", "body": "Rajaa kumppanien pääsy vain välttämättömään tietoon. Käytä 'Least Privilege' -periaatetta kaikissa integraatioissa." }
    ],
    "checklist": ["Auditoi kriittiset kumppanit", "Vaadi SOP-sopimukset", "Rajaa ulkopuolinen pääsy", "Monitoroi integraatioiden lokeja"],
    "cta": { "text": "Lataa auditointipohja", "route": null }
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
  "ai-ethics-and-safety": {
    "slug": "ai-ethics-and-safety",
    "category": "ai",
    "featured": true,
    "navLabel": "AI-etiikka",
    "seo": { "title": "Vastuullinen tekoäly | Lapland AI Lab", "description": "Tekoälyn eettinen käyttö ja turvallisuus organisaatiossa." },
    "hero": { "title": "Etiikka on turvaa", "subtitle": "Vastuullinen tekoälyn käyttö ehkäisee maineriskejä ja varmistaa syrjimättömyyden." },
    "sections": [
      { "title": "Hallusinaatioiden tunnistus", "body": "Tekoäly voi tuottaa väärää tietoa vakuuttavasti. Tarkista aina kriittiset tiedot alkuperäisestä lähteestä. Jos vastaus tuntuu 'liian täydelliseltä', se voi olla hallusinaatio." },
      { "title": "AI-käyttöpolitiikka", "body": "Luo organisaatiollesi selkeät raamit: Mitä työkaluja saa käyttää? Mitä tietoa ei saa syöttää julkisiin malleihin?" }
    ],
    "checklist": ["Ristiintarkista AI:n tuottamat faktat", "Luo kirjallinen AI-politiikka", "Nimeä vastuullinen AI-vastaava", "Ole avoin AI-käytöstä"],
    "cta": { "text": "Luo AI-pelisäännöt", "route": "/ai-safety" }
  },
  "zero-trust-architecture": {
    "slug": "zero-trust-architecture",
    "category": "kyber",
    "featured": true,
    "navLabel": "Nollaluottamus",
    "seo": { "title": "Nollaluottamus-arkkitehtuuri | Lapland AI Lab", "description": "Älä koskaan luota, varmista aina." },
    "hero": { "title": "Zero Trust: Uusi normaali", "subtitle": "Moderni tietoturva ei luota kehenkään verkon sisällä tai ulkopuolella." },
    "sections": [
      { "title": "Periaatteet", "body": "Jokainen pyyntö on todennettava, valtuutettava ja salattava, vaikka se tulisi sisäverkosta." },
      { "title": "Miten aloitan siirtymän?", "body": "1. Identiteetti: MFA pakolliseksi kaikille. 2. Laitteet: MDM-hallinta päälle. 3. Pienimmät oikeudet: Anna pääsy vain tarpeelliseen tietoon." }
    ],
    "checklist": ["Identiteetin varmistus (MFA)", "Laitteen kunnon tarkistus", "Pienimmät oikeudet (Least Privilege)", "Verkon segmentointi"],
    "cta": { "text": "Siirry Zero Trustiin", "route": null }
  },
  "privacy-ai-training": {
    "slug": "privacy-ai-training",
    "category": "privacy",
    "featured": true,
    "navLabel": "AI & Tietosuoja",
    "seo": { "title": "Tietosuoja ja AI-mallien opetus | Lapland AI Lab", "description": "Miten varmistat, ettei tekoäly opi organisaatiosi salaisuuksia?" },
    "hero": { "title": "Datan näkymätön muisti", "subtitle": "Kun syötät tietoa tekoälylle, varmista ettet opeta sille vahingossa liikesalaisuuksiasi tai asiakkaidesi tietoja." },
    "sections": [
      { "title": "Opetusdata on ikuista", "body": "Kielimallit oppivat syötteistä. Jos lataat malliin salaista tietoa 'analysoitavaksi', se voi päätyä osaksi mallin pysyvää muistia ja vuotaa kilpailijoille vastauksina." },
      { "title": "Anonymisoinnin tärkeys", "body": "Pelkkä nimen poistaminen ei riitä. Jos datasta voi päätellä henkilön epäsuorasti (esim. harvinainen ammatti + paikkakunta), GDPR-riski on todellinen. Käytä synteettistä dataa aina kun mahdollista." }
    ],
    "checklist": ["Anonymisoi kaikki henkilötiedot", "Minimoi syötettävä data", "Tarkista audit-logit säännöllisesti", "Kielletään mallin opetus datallasi (Opt-out)"],
    "cta": { "text": "Lue tietosuojakäytäntö", "route": null }
  },
  "arctic-mobile-hardening": {
    "slug": "arctic-mobile-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Arctic Mobile",
    "seo": { "title": "Mobiililaitteiden koventaminen | Lapland AI Lab", "description": "Puhelimen tietoturvan maksimointi pohjoisissa ääriolosuhteissa." },
    "hero": { "title": "Arctic Mobile Hardening", "subtitle": "Rauhallinen, asiantunteva kovennusohjelma, joka pitää mobiilidatan turvassa kuin routa varjelee maan ydintä." },
    "sections": [
      { "title": "Kylmäkäynnistys ja salaus", "body": "Pidä levyn salaus aina päällä ja vaadi PIN-koodi käynnistyksessä. Se on kuin tunturissa kulkeva kompassi: hiljainen, luotettava ja välttämätön silloin kun olosuhteet kiristyvät." },
      { "title": "Radiokurinalaisuus", "body": "Sulje Bluetooth, NFC ja Wi-Fi, kun et tarvitse niitä. Hiljainen radio on kuin tyyni järvenselkä: vähemmän heijastuksia, vähemmän havaittavaa." },
      { "title": "Lukitus ja valvonta", "body": "Ota käyttöön automaattinen lukitus ja etäpyyhintä. Kun laite katoaa, rauhallinen toimintamalli palauttaa järjestyksen kuten revontulten alla tehty suunnitelma." }
    ],
    "checklist": [
      "Varmista levyn salaus ja Secure Boot",
      "Käytä vähintään 6-numeroista PIN-koodia",
      "Pidä radiot hiljaisina tarpeettomina",
      "Aktivoi etäpyyhintä ja lukituspolitiikka"
    ],
    "cta": { "text": "Päivitä mobiilikovennus", "route": "/mobile-security" }
  },
  "pohjoinen-kilpi": {
    "slug": "pohjoinen-kilpi",
    "category": "kyber",
    "featured": true,
    "navLabel": "Perussuojaus",
    "seo": {
      "title": "Pohjoinen Kilpi: Kyberhygienian Perusta | Arctic Security",
      "description": "Perussuojaus, joka rakentaa ensimmäisen suojamuurin arktisissa oloissa."
    },
    "hero": {
      "title": "Pohjoinen Kilpi",
      "subtitle": "Perussuojaus on kuin tuulensuoja: se estää kylmän ennen kuin se pääsee iholle."
    },
    "sections": [
      {
        "title": "Kovuus syntyy rutiineista",
        "body": "Kyberturva alkaa arkisista päätöksistä: päivitykset, vahvat salasanat ja MFA luovat kerroksen, joka kestää hyökkäysten peruspainetta."
      },
      {
        "title": "Hygienia ennen hybridiuhkia",
        "body": "Ilman perushygieniaa hienostuneet kontrollit jäävät ohueksi jääksi. Varmista, että jokainen laite ja käyttäjä noudattaa samaa perustasoa."
      }
    ],
    "checklist": [
      "Pakota monivaiheinen tunnistautuminen",
      "Pidä käyttöjärjestelmät ja sovellukset ajan tasalla",
      "Käytä yksilöllisiä, pitkiä salasanoja",
      "Poista tarpeettomat käyttöoikeudet"
    ],
    "cta": { "text": "Aloita perushygienia", "route": "/kyber-basics" }
  },
  "synteettinen-tundra": {
    "slug": "synteettinen-tundra",
    "category": "ai",
    "featured": true,
    "navLabel": "Tekoälyn uhat",
    "seo": {
      "title": "Synteettinen Tundra: Tekoälyn Uhat | Arctic Security",
      "description": "Tunnista tekoälyyn kohdistuvat uhkat ja rakenna puolustus kerroksittain."
    },
    "hero": {
      "title": "Synteettinen Tundra",
      "subtitle": "Uhat muuttuvat nopeammin kuin sää. Tekoälyn turva vaatii jatkuvaa valppautta."
    },
    "sections": [
      {
        "title": "Mallien manipulointi",
        "body": "Mallien syötteitä voidaan myrkyttää tai ohjata harhaan. Turvaa opetusdata ja valvo mallien käyttäytymistä jatkuvasti."
      },
      {
        "title": "Tuotosten luotettavuus",
        "body": "Hallusinaatiot voivat näyttää vakuuttavilta. Rakennamme varmistusketjun, joka edellyttää lähdeviitteitä ja kriittistä validointia."
      }
    ],
    "checklist": [
      "Vahvista opetusdatan eheys",
      "Seuraa mallien poikkeamia",
      "Rajaa syötteet luotettuihin lähteisiin",
      "Pidä ihmisvarmennus kriittisissä päätöksissä"
    ],
    "cta": { "text": "Suojaa AI-kerros", "route": "/ai-threats" }
  },
  "signaalituli": {
    "slug": "signaalituli",
    "category": "mobile",
    "featured": true,
    "navLabel": "Salattu viestintä",
    "seo": {
      "title": "Signaalituli: Salattu Viestintä | Arctic Security",
      "description": "Pidä viestit piilossa kuin revontulet pilviverhon takana."
    },
    "hero": {
      "title": "Signaalituli",
      "subtitle": "Kun yhteys on ainoa silta, sen on oltava salattu ja luotettava."
    },
    "sections": [
      {
        "title": "Päästä päähän -suojaus",
        "body": "Valitse viestintäkanavat, joissa salaus on oletus, ei lisäosa. Varmista avainten hallinta ja varmuus sekä käyttäjän tunnistaminen."
      },
      {
        "title": "Metadatan minimointi",
        "body": "Sisältö on vain osa riskiä. Suojaa myös metatiedot rajaamalla lokit, signaalit ja tarpeettomat kuittaukset."
      }
    ],
    "checklist": [
      "Käytä E2EE-viestintää",
      "Vahvista turvakoodit kasvotusten",
      "Minimoi viestien säilytysaika",
      "Vältä pilvivarmuuskopioita viesteille"
    ],
    "cta": { "text": "Valitse salattu kanava", "route": "/mobile-encryption" }
  },
  "jaatynyt-kehays": {
    "slug": "jaatynyt-kehays",
    "category": "mobile",
    "featured": true,
    "navLabel": "Laitteiston karkaisu",
    "seo": {
      "title": "Jäätynyt Kehä: Mobiililaitteen Koventaminen | Arctic Security",
      "description": "Muuta mobiililaitteesi murtumattomaksi linnakkeeksi. Asiantuntijaopas laitteiston karkaisuun arktisella tarkkuudella."
    },
    "hero": {
      "title": "Jäätynyt Kehä",
      "subtitle": "Kun signaali on ainoa yhteys ulkomaailmaan, sen on oltava murtumaton."
    },
    "sections": [
      {
        "title": "Perinteisen suojan murtuminen",
        "body": "Nykyaikainen mobiililaite on avoin haavoittuvuus, ellei sitä ole eristetty kuin tunturimaja talvimyrskyn keskellä. Standardiasetukset on suunniteltu mukavuuden, ei selviytymisen ehdoilla."
      },
      {
        "title": "Eristysstrategia",
        "body": "Karkaisu alkaa peruskerroksista: BIOS-tason lukituksista ja hiekkalaatikoinnista. Emerald-500 -tason suojaus vaatii nollaluottamuksen periaatetta jokaiselle sovellukselle ja yhteydelle."
      }
    ],
    "checklist": [
      "Biometrisen tunnistautumisen deaktivointi kriittisissä pisteissä",
      "Laitetason salausavaimen vahvistaminen",
      "USB-porttien lukitus dataliikenteeltä",
      "Baseband-prosessorin tarkkailu"
    ],
    "cta": {
      "text": "Lataa karkaisuohje",
      "route": "/guides/mobile-hardening"
    }
  },
  "vaeltaja-tutka": {
    "slug": "vaeltaja-tutka",
    "category": "mobile",
    "featured": false,
    "navLabel": "Seurannan esto",
    "seo": {
      "title": "Vaeltaja-tutka: Seurannan Esto | Arctic Security",
      "description": "Katkaise jäljitysverkot ja vähennä mobiililaitteen paljastamaa metatietoa."
    },
    "hero": {
      "title": "Vaeltaja-tutka",
      "subtitle": "Jäljet lumessa katoavat nopeasti — varmista, että myös digitaaliset katoavat."
    },
    "sections": [
      {
        "title": "Sijainnin hallinta",
        "body": "Hallinnoi sijaintia sovelluskohtaisesti. Salli vain välttämättömät oikeudet ja käytä väliaikaista sijaintia tarpeen mukaan."
      },
      {
        "title": "Mainostunnisteiden jäädytys",
        "body": "Nollaa mainostunnisteet ja estä ristiinseuranta. Pienennä sovellusten lupa-alueita kuin tiivistät varusterepun."
      }
    ],
    "checklist": [
      "Poista tarpeettomat sijaintioikeudet",
      "Nollaa mainostunnisteet säännöllisesti",
      "Rajoita taustalla toimivia sovelluksia",
      "Kytke Bluetooth/NFC päälle vain tarvittaessa"
    ],
    "cta": { "text": "Sulje jäljitysreitit", "route": "/mobile-privacy" }
  },
  "syva-ikirouta": {
    "slug": "syva-ikirouta",
    "category": "privacy",
    "featured": false,
    "navLabel": "Tietosuvereniteetti",
    "seo": {
      "title": "Syvä Ikirouta: Tietojen Lopullinen Suoja | Arctic Security",
      "description": "Miten varmistat datasi yksityisyyden tilanteessa, jossa pilvipalvelut sulavat? Syvä Ikirouta on ratkaisu tietosuvereniteettiin."
    },
    "hero": {
      "title": "Syvä Ikirouta",
      "subtitle": "Tieto on arvokkainta silloin, kun kukaan muu ei tiedä sen olemassaolosta."
    },
    "sections": [
      {
        "title": "Datan suvereniteetti",
        "body": "Arktisessa strategiassa emme luota kolmansiin osapuoliin. Data on säilytettävä omassa hallinnassa, salattuna kerroksilla, jotka eivät murru vaikka infrastruktuuri ympärillä pettäisi."
      },
      {
        "title": "Kylmäsäilytys ja hajautus",
        "body": "Aito yksityisyys syntyy hajauttamisesta. Käytämme menetelmiä, joissa informaatio sirpaloituu kuin jää, ja vain oikea avain voi koota sen takaisin luettavaan muotoon."
      }
    ],
    "checklist": [
      "Hajautetun tallennuksen (IPFS) protokollat",
      "PGA-tason fyysiset suoja-avaimet",
      "Metadata-strippaus ennen arkistointia",
      "Paikallinen LLM-analyysi pilvipalveluiden sijaan"
    ],
    "cta": {
      "text": "Siirry holviin",
      "route": "/vault/sovereignty"
    }
  },
  "aurora-obscura": {
    "slug": "aurora-obscura",
    "category": "privacy",
    "featured": true,
    "navLabel": "Identiteetin maskaus",
    "seo": {
      "title": "Aurora Obscura: Identiteetin Maskaus | Arctic Security",
      "description": "Suojaa identiteetti kuin revontulten varjo: näkyvä mutta jäljittämätön."
    },
    "hero": {
      "title": "Aurora Obscura",
      "subtitle": "Maskaus ei ole pako, vaan kontrollin palautus."
    },
    "sections": [
      {
        "title": "Pseudonymisointi käytännössä",
        "body": "Pidä yksilö dataerillään. Tunnisteet, lokit ja asiakaspolut tulee irrottaa toisistaan niin, ettei yhtä voi kytkeä toiseen."
      },
      {
        "title": "Turvallinen tunnistautuminen",
        "body": "Käytä vahvaa tunnistautumista ilman tarpeettomia henkilötietoja. Minimoi säilytettävä data ja rajoita sen näkyvyys."
      }
    ],
    "checklist": [
      "Erottele tunnisteet ja lokit",
      "Vaihda tunnisteet määräajoin",
      "Rajaa henkilötietojen näkyvyys",
      "Päivitä tietosuojakäytännöt"
    ],
    "cta": { "text": "Rakenna maskausmalli", "route": "/privacy-masking" }
  },
  "jaljet-lumessa": {
    "slug": "jaljet-lumessa",
    "category": "privacy",
    "featured": false,
    "navLabel": "Digitaalinen jalanjälki",
    "seo": {
      "title": "Jäljet Lumessa: Digitaalinen Jalanjälki | Arctic Security",
      "description": "Hallinnoi näkyvyyttä ja pienennä datajälkiä arktisessa ympäristössä."
    },
    "hero": {
      "title": "Jäljet Lumessa",
      "subtitle": "Kaikki liike jättää jäljen — tärkeintä on päättää, mitä näkyy."
    },
    "sections": [
      {
        "title": "Kartoitus ja minimointi",
        "body": "Aloita kartoittamalla, missä tieto elää. Poista tarpeettomat lomakkeet, evästeet ja käyttöoikeudet."
      },
      {
        "title": "Elinkaaren hallinta",
        "body": "Aseta tiedolle elinkaari. Vanha data on kylmää painolastia, joka altistaa vuodoille."
      }
    ],
    "checklist": [
      "Inventoi kerätty data",
      "Lyhennä säilytysaikoja",
      "Poista tarpeettomat evästeet",
      "Dokumentoi poistopolitiikka"
    ],
    "cta": { "text": "Siivoa jalanjälki", "route": "/privacy-footprint" }
  },
  "lasiholvi": {
    "slug": "lasiholvi",
    "category": "privacy",
    "featured": true,
    "navLabel": "Kryptografia",
    "seo": {
      "title": "Lasiholvi: Kryptografia | Arctic Security",
      "description": "Kryptografia tekee tiedosta mihin tahansa sijoitettaessa lukematonta."
    },
    "hero": {
      "title": "Lasiholvi",
      "subtitle": "Läpinäkyvä mutta murtumaton: näkyvä rakenne, piilotettu sisältö."
    },
    "sections": [
      {
        "title": "Avainhallinnan periaatteet",
        "body": "Kryptografia on vain niin vahva kuin avainten hallinta. Pidä avaimet erillään datasta ja rajoita niiden käyttöä."
      },
      {
        "title": "Kerrostettu salaus",
        "body": "Yksi kerros ei riitä. Yhdistä levysalaus, tiedostokohtainen salaus ja siirtosalaus."
      }
    ],
    "checklist": [
      "Keskitetty avainhallinta (KMS/HSM)",
      "Avainrotaatio ajastetusti",
      "Salaa data levossa ja siirrossa",
      "Pidä varmuusavaimet offline-tilassa"
    ],
    "cta": { "text": "Syvenny kryptografiaan", "route": "/privacy-crypto" }
  },
  "lumimyrsky-protokolla": {
    "slug": "lumimyrsky-protokolla",
    "category": "crisis",
    "featured": true,
    "navLabel": "Hätätilanteet",
    "seo": {
      "title": "Lumimyrsky-protokolla: Hätätilanteet | Arctic Security",
      "description": "Kriisinhallinta, joka pitää toiminnan pystyssä myös myrskyn keskellä."
    },
    "hero": {
      "title": "Lumimyrsky-protokolla",
      "subtitle": "Kun näkyvyys katoaa, protokolla pitää suunnan."
    },
    "sections": [
      {
        "title": "Ensimmäiset 30 minuuttia",
        "body": "Kriisin alussa nopeus ratkaisee. Eristä kriittiset järjestelmät ja varmista viestintäkanavat."
      },
      {
        "title": "Tilannekuvan ylläpito",
        "body": "Päivitä tilannekuvaa säännöllisesti. Ilman yhteistä tilannekuvaa resurssit valuvat hukkaan."
      }
    ],
    "checklist": [
      "Aktivoi kriisiryhmä ja viestintäkanava",
      "Eristä kriittiset verkkoalueet",
      "Varmista varajärjestelmien saatavuus",
      "Pidä yhteys viranomaisiin"
    ],
    "cta": { "text": "Avaa kriisiprotokolla", "route": "/crisis-response" }
  },
  "ydin-yllapito": {
    "slug": "ydin-yllapito",
    "category": "crisis",
    "featured": false,
    "navLabel": "Off-grid selviytyminen",
    "seo": {
      "title": "Ydin-ylläpito: Off-grid Selviytyminen | Arctic Security",
      "description": "Pidä ydintoiminnot käynnissä myös silloin, kun verkko kaatuu."
    },
    "hero": {
      "title": "Ydin-ylläpito",
      "subtitle": "Kun sähköt katkeavat, perusjärjestelmien on jatkettava."
    },
    "sections": [
      {
        "title": "Offline-kyvykkyydet",
        "body": "Varmista, että kriittiset prosessit toimivat ilman ulkoisia riippuvuuksia. Harjoittele irtikytkentätilaa säännöllisesti."
      },
      {
        "title": "Varavoima ja viestintä",
        "body": "Pidä varavoima testattuna ja suunnittele viestintä myös ilman internetiä: satelliitti, radio, paikallinen mesh."
      }
    ],
    "checklist": [
      "Testaa varavoima kuukausittain",
      "Harjoittele offline-toimintaa",
      "Pidä kriittinen dokumentaatio paikallisesti",
      "Varmista vaihtoehtoiset viestintäkanavat"
    ],
    "cta": { "text": "Rakenna off-grid suunnitelma", "route": "/crisis-offgrid" }
  },
  "paivittainen-vartio": {
    "slug": "paivittainen-vartio",
    "category": "routines",
    "featured": true,
    "navLabel": "OpSec rutiinit",
    "seo": {
      "title": "Päivittäinen Vartio: OpSec Rutiinit | Arctic Security",
      "description": "Operatiivinen turvallisuus syntyy päivittäisistä rutiineista."
    },
    "hero": {
      "title": "Päivittäinen Vartio",
      "subtitle": "Rutiinit ovat yhtä vahvoja kuin niiden toisto."
    },
    "sections": [
      {
        "title": "Rutiinien rytmi",
        "body": "Aamun tarkistuslista, päivän varmistukset ja iltaraportti muodostavat turvallisen rytmin."
      },
      {
        "title": "Tunnistamisen kulttuuri",
        "body": "OpSec tarkoittaa hereilläoloa: havainnot kirjataan ja poikkeamat tutkitaan."
      }
    ],
    "checklist": [
      "Tarkista MFA- ja VPN-tila",
      "Varmista työaseman lukituspolitiikka",
      "Kirjaa poikkeamat päivän aikana",
      "Sulje päivän päätteeksi avoimet istunnot"
    ],
    "cta": { "text": "Ota vartio käyttöön", "route": "/routines-opsec" }
  },
  "algoritminen-pakkanen": {
    "slug": "algoritminen-pakkanen",
    "category": "ai",
    "featured": false,
    "navLabel": "Manipulaation tunnistus",
    "seo": {
      "title": "Algoritminen Pakkanen: Manipulaation Tunnistus | Arctic Security",
      "description": "Tunnista ohjaus, harhautus ja manipulointi tekoälyjärjestelmissä."
    },
    "hero": {
      "title": "Algoritminen Pakkanen",
      "subtitle": "Kun data kylmenee, poikkeamat näkyvät selkeämmin."
    },
    "sections": [
      {
        "title": "Poikkeamien signaalit",
        "body": "Seuraa mallien ulostuloja systemaattisesti ja tunnista epätavalliset kuvioit kuten käsikirjoitettu toisto."
      },
      {
        "title": "Vastapuolen taktiikat",
        "body": "Manipulaatio näkyy usein pieninä painotuksina. Kalibroi valvonta niin, että havaitset myös hienovaraiset ohjaukset."
      }
    ],
    "checklist": [
      "Rakenna poikkeamien baseline",
      "Monitoroi epätavallisia syötekuvioita",
      "Vahvista ulostulojen lähdeaineisto",
      "Pidä red team -testit säännöllisinä"
    ],
    "cta": { "text": "Vahvista manipulaatiosuoja", "route": "/ai-detection" }
  },
  "nollapiste": {
    "slug": "nollapiste",
    "category": "kyber",
    "featured": true,
    "navLabel": "Infrastruktuurin suojaus",
    "seo": {
      "title": "Nollapiste: Infrastruktuurin Suojaus | Arctic Security",
      "description": "Ydinpalveluiden suojaus on koko ekosysteemin perusta."
    },
    "hero": {
      "title": "Nollapiste",
      "subtitle": "Infrastruktuurin suojaus alkaa nollapisteestä: kaikesta kriittisestä."
    },
    "sections": [
      {
        "title": "Kriittisten palveluiden kartta",
        "body": "Määrittele kriittiset palvelut ja niiden riippuvuudet. Ilman karttaa et voi suojata reittiä."
      },
      {
        "title": "Segmentointi ja valvonta",
        "body": "Segmentoi palvelut ja lisää näkyvyys jokaiseen vyöhykkeeseen. Näin rajaaminen on nopeaa häiriötilanteessa."
      }
    ],
    "checklist": [
      "Dokumentoi kriittiset palvelut",
      "Segmentoi verkkoalueet",
      "Vahvista lokitus ja valvonta",
      "Testaa palautuspolut säännöllisesti"
    ],
    "cta": { "text": "Kartoita infrastruktuuri", "route": "/kyber-infrastructure" }
  }
};
