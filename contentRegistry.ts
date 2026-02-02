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
        "title": "Auditointipisteraportti v3.0",
        "body": "Sisältö on synkronoitu johtavan arkkitehdin auditointipisteraportin sanomuotoihin. Jokainen kappale vastaa tarkasti JSON-lohkoja (Opus, AI Studio, Nollaluottamus), jotta strategiset linjaukset ja tekniset kontrollit pysyvät samassa rytmissä."
      },
      {
        "title": "Opus-linjaukset",
        "body": "Opus-lohko määrittää järjestelmän pysyvän ydinviestin: riskiluokitus, auditointiketju ja hyväksyntäpolku. Näin varmistetaan, että Lapland AI Labin turvallisuuskuvaus pysyy yhtenäisenä jokaisessa näkymässä."
      },
      {
        "title": "Kokonaisarkkitehtuuri",
        "body": "AI Studio -lohko ohjaa mallien hallintaa ja koulutuksen hallittua läpivalaisua, kun taas Nollaluottamus-lohko ankkuroidaan identiteettivarmistukseen, segmentointiin ja jatkuvaan valvontaan. Tämä trio muodostaa arktisen turvallisuusrunkoon sidotun kokonaisuuden."
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
  "ai-studio-governance": {
    "slug": "ai-studio-governance",
    "category": "ai",
    "featured": true,
    "navLabel": "AI Studio",
    "seo": { "title": "AI Studio -hallinta | Lapland AI Lab", "description": "Johtavan arkkitehdin v3.0 -sanomuotoihin synkronoitu AI Studio -hallintamalli." },
    "hero": { "title": "AI Studio: Hallittu luovuus", "subtitle": "Käyttöliittymä, jossa mallit, datalähteet ja auditointipisteet kohtaavat turvallisesti." },
    "sections": [
      { "title": "Sanomuodot ja auditointi", "body": "AI Studio -lohko varmistaa, että jokainen mallikutsu kirjautuu auditointipisteraportin mukaisena JSON-viestinä. Tämä säilyttää jäljitettävyyden ja hyväksyntäketjun." },
      { "title": "Koulutus ja data", "body": "Datalähteet on luokiteltu luottamustasoittain, ja koulutus tapahtuu vain hyväksytyssä Secure Context -ympäristössä. Jokainen datasetti allekirjoitetaan ennen käyttöä." },
      { "title": "Operatiivinen turva", "body": "Malliversiot, promtien muutokset ja käyttölokit lukitaan suvereniteettiperiaatteen mukaisesti. Vain kriittiset toiminnot ovat näkyvissä, jotta riskipinta pysyy minimissä." }
    ],
    "checklist": ["Varmista Secure Context -ympäristö", "Lukitse auditointipisteiden JSON-lohkot", "Segmentoi malliversiot", "Hyväksytä muutokset kahden tason kautta"],
    "cta": { "text": "Avaa AI Studio -raportti", "route": "/content/ai-studio-governance" }
  },
  "zero-trust-architecture": {
    "slug": "zero-trust-architecture",
    "category": "kyber",
    "featured": true,
    "navLabel": "Nollaluottamus",
    "seo": { "title": "Nollaluottamus-arkkitehtuuri | Lapland AI Lab", "description": "Älä koskaan luota, varmista aina." },
    "hero": { "title": "Zero Trust: Uusi normaali", "subtitle": "Moderni tietoturva ei luota kehenkään verkon sisällä tai ulkopuolella." },
    "sections": [
      { "title": "Nollaluottamus-lohko", "body": "Johtavan arkkitehdin v3.0 -sanomuoto määrittää Nollaluottamus-lohkon: identiteetti, laite, sovellus, data. Jokainen pyyntö kirjataan auditointilokiin ennen kuin mitään sallitaan." },
      { "title": "Siirtymäpolku", "body": "1) Identiteetti: MFA pakolliseksi kaikille. 2) Laite: MDM ja kunnon tarkistus. 3) Segmentointi: kriittiset palvelut erilleen. 4) Jatkuva todentaminen: ei pysyviä sessioita." },
      { "title": "Ylläpidon rytmi", "body": "Nollaluottamus ei ole projekti vaan jatkuva rytmi. Auditointipisteet tarkistetaan viikoittain, ja poikkeamahälytykset eskaloidaan välittömästi." }
    ],
    "checklist": ["Identiteetin varmistus (MFA)", "Laitteen kunnon tarkistus", "Pienimmät oikeudet (Least Privilege)", "Verkon segmentointi"],
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
