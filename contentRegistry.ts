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
      },
      {
        "title": "Mobiililaitteiden fyysinen ja digitaalinen karkaisu",
        "body": "Arktinen ympäristö vaatii laitteilta enemmän. Akut hyytyvät, näytöt jäätyvät. Digitaalisesti laite on kovettava: poista turhat sovellukset, kytke yhteydet (BT, NFC) pois (Hard Off) ja käytä vain suojattuja yhteyksiä. Fyysinen eristys kylmästä on yhtä kriittistä kuin looginen eristys verkosta."
      },
      {
        "title": "Kriisiviestintä pimeän sään aikana",
        "body": "Kun digitaalinen pimeys laskeutuu (sähkökatko tai kyberhyökkäys), viestinnän on jatkuttava. Varmista, että kriittiset yhteystiedot ovat saatavilla offline-tilassa (paperilla tai suojatulla paikallisella laitteella). Harjoittele viestintää ilman pääverkkoa, kuten satelliitti- tai radioteitse, jos toiminta sitä vaatii."
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
      "route": "/downloads/arctic-security-opus.pdf"
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
      "route": "/content/arctic-codex-protocol"
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
  "arctic-digital-survival": {
    "slug": "arctic-digital-survival",
    "category": "crisis",
    "featured": true,
    "navLabel": "Digitaalinen Selviytyminen",
    "seo": {
      "title": "Arctic Digital Survival Kit | Lapland AI Lab",
      "description": "Selviytymispaketti digikatkoksiin: toimi nopeasti, turvaa viestintä ja säilytä toimintakyky poikkeusoloissa."
    },
    "hero": {
      "title": "Digitaalinen Selviytyminen",
      "subtitle": "Kun verkot kaatuvat ja näkyvyys nollautuu, tämä paketti pitää organisaatiosi toimintakykyisenä."
    },
    "sections": [
      {
        "title": "Tilannekuva minuuteissa",
        "body": "Ensimmäinen tavoite on ymmärtää, mikä on poissa käytöstä ja mikä toimii edelleen. Rakenna nopea tilannekuva: yhteydet, kriittiset palvelut, henkilöstön tavoitettavuus ja asiakkaiden vaikutus."
      },
      {
        "title": "Viestinnän varareitit",
        "body": "Kytke käyttöön varaviestintäkanavat: satelliittiyhteydet, radio, offline-viestit ja ennalta sovitut kokoontumispisteet. Varmista, että jokainen tietää missä ja miten ilmoittautua."
      },
      {
        "title": "Turvallinen työtila",
        "body": "Eristä kriittiset laitteet ja luo suojattu työtila ilman tarpeettomia yhteyksiä. Käytä paperisia ohjeita ja offline-tilassa toimivia tarkistuslistoja."
      }
    ],
    "checklist": [
      "Laadi 15 minuutin tilannekuva (palvelut, verkot, henkilöstö)",
      "Aktivoi varaviestintäkanavat ja päivitä yhteystiedot",
      "Eristä kriittiset laitteet ja varmistu offline-työkalujen toimivuudesta",
      "Nimeä päätöksentekijä ja viestintävastuut poikkeustilaan"
    ],
    "cta": {
      "text": "Avaa selviytymispaketti",
      "route": "/content/arctic-digital-survival"
    }
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
    "checklist": ["Varmista identiteetti (MFA)", "Tarkista laitteen kunto", "Rajoita oikeudet pienimpiin (Least Privilege)", "Segmentoi verkko"],
    "cta": { "text": "Siirry Zero Trustiin", "route": null }
  },
  "privacy-ai-training": {
    "slug": "privacy-ai-training",
    "category": "privacy",
    "featured": true,
    "navLabel": "AI & Tietosuoja",
    "seo": { "title": "Tietosuoja ja AI: Datan näkymätön muisti | Lapland AI Lab", "description": "Miten tekoäly muistaa syötteet? Opas anonymisointiin ja datan minimointiin." },
    "hero": { "title": "Privacy: Datan näkymätön muisti", "subtitle": "Modernit kielimallit oppivat syötteistäsi. Opetusdata on ikuista: kerran malliin syötettyä tietoa voi olla lähes mahdotonta poistaa." },
    "sections": [
      { "title": "Datan näkymätön muisti", "body": "Modernit kielimallit, kuten laajat tekoälypohjaiset LLM-mallit, oppivat syötteistäsi. Kun annat tekoälylle tietoa analysoitavaksi, on vaarana että syöte tallentuu mallin pysyvään muistiin. Vaikka malli ei välttämättä tarkkaan toista kaikkea näkemäänsä, se saattaa silti muistaa kriittisiä yksityiskohtia ja käyttää niitä myöhemmin vastauksissaan. Esimerkiksi OpenAI on varoittanut, ettei yksittäisiä kehotteita voida aina poistaa järjestelmästä. Älä siis koskaan syötä liikesalaisuuksia tai arkaluonteisia asiakastietoja julkisiin AI-palveluihin, ellet halua nähdä niitä kilpailijoiden vastauksissa tulevaisuudessa." },
      { "title": "Anonymisoinnin tärkeys", "body": "Jos tekoälyä on kuitenkin tarpeen hyödyntää henkilötietoja sisältävän datan kanssa, huolehdi aineiston kunnollisesta anonymisoinnista. Pelkkä nimen poistaminen ei riitä; epäsuorat tunnisteet (esim. harvinainen ammatti + pieni paikkakunta) voivat paljastaa henkilöllisyyden. Tällainen tieto on yhä GDPR:n alaista. Käytä mieluiten synteettistä dataa aina kun mahdollista – se säilyttää analyysin kannalta olennaiset piirteet vaarantamatta kenenkään oikeita henkilötietoja." }
    ],
    "checklist": [
      "Anonymisoi kaikki henkilötiedot (myös epäsuorat tunnisteet)",
      "Minimoi syötettävä data: vain välttämätön, ei raakadataa",
      "Tarkista audit-logit säännöllisesti tietovuotojen varalta",
      "Kytke 'Opt-out' päälle estääksesi datan käytön mallin koulutuksessa",
      "Lue palvelun tietosuojakäytäntö: missä data säilytetään?"
    ],
    "cta": { "text": "Lue tietosuojakäytäntö", "route": null }
  },
  "arctic-mobile-hardening": {
    "slug": "arctic-mobile-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Arctic Hardening",
    "seo": { "title": "Mobiililaitteiden koventaminen | Lapland AI Lab", "description": "Puhelimen tietoturvan maksimointi pohjoisissa ääriolosuhteissa." },
    "hero": { "title": "Jäätynyt laite, turvattu data", "subtitle": "Ääriolosuhteet vaativat äärimmäistä tietoturvaa. Näin kovennat mobiililaitteesi tunturikäyttöön." },
    "sections": [
      { "title": "Kylmäkäynnistys ja salaus", "body": "Varmista, että laitteen levyn salaus on päällä ja vaatii PIN-koodin käynnistyksessä (Secure Boot). Älä luota pelkkään sormenjälkeen, joka ei toimi hanskoilla." },
      { "title": "Radiokurinalaisuus", "body": "Erämaassa tai rajavyöhykkeellä jokainen signaali on riski. Kytke Bluetooth, NFC ja Wi-Fi pois päältä (Hard Off), kun et tarvitse niitä, välttääksesi seurantaa." }
    ],
    "checklist": ["Kytke levyn salaus päälle", "Käytä 6-numeroista PIN-koodia", "Poista Bluetooth käytöstä", "Aktivoi etäpyyhintä"],
    "cta": { "text": "Tarkista laiteasetukset", "route": "/mobile-security" }
  }
};
