
import { ContentItem } from './types';

export const contentRegistry: Record<string, ContentItem> = {
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
      "Lisää konkreettiset tarkistuslistat"
    ],
    "cta": {
      "text": "Lataa Opasluonnos",
      "route": null
    }
  },
  "network-hardening-arctic": {
    "type": "module",
    "slug": "network-hardening-arctic",
    "category": "kyber",
    "featured": true,
    "navLabel": "Verkon karkaisu",
    "seo": { "title": "Verkkoturvan karkaisu | Lapland AI Lab", "description": "Miten suojata organisaation verkko arktisella otteella." },
    "hero": { "title": "Verkkoturvan karkaisu", "subtitle": "Verkko on organisaation hermojärjestelmä. Jos se pettää, kaikki pysähtyy." },
    "sections": [
      { "title": "Segmentointi ja Zero Trust", "body": "Älä luota keneenkään verkon sisällä. Segmentoi vierasverkko, tuotantoverkko ja hallintaverkko toisistaan. Käytä palomuureja, jotka ymmärtävät sovellustason liikenteen." },
      { "title": "Vierailijaverkon riskit", "body": "Avoin Wi-Fi on kutsu hyökkääjille. Varmista, että vierailijaverkosta ei ole mitään pääsyä sisäverkkoon tai tulostimiin." }
    ],
    "checklist": ["Verkko segmentointu", "Zero Trust -malli käytössä", "Vierasverkko eristetty", "IDS/IPS aktivoitu"],
    "cta": { "text": "Verkkokarttapohja", "route": null }
  },
  "privacy-ai-training": {
    "type": "article",
    "slug": "privacy-ai-training",
    "category": "privacy",
    "featured": true,
    "navLabel": "Datan muisti",
    "seo": { "title": "Datan näkymätön muisti | Lapland AI Lab", "description": "Tekoäly ei unohda. Opas datan hallintaan ja GDPR-riskeihin." },
    "hero": { "title": "Datan näkymätön muisti", "subtitle": "Jokainen syöte, dokumentti ja keskustelu on potentiaalinen tietovuoto. Opetusdata ei unohda – se on uusi muistijärjestelmä." },
    "sections": [
      { "title": "Opetusdata ei unohda", "body": "Kielimallit voivat käyttää syötteitä mallin hienosäätöön tai laadunvalvontaan. Virheellinen oletus on, että data on vain analysoitavana hetken. Todellisuudessa data voi vaikuttaa vastauksiin pitkällä aikavälillä." },
      { "title": "Anonymisointi ja GDPR", "body": "Pelkkä nimen poistaminen ei riitä. Epäsuora tunnistettavuus syntyy esimerkiksi harvinaisen ammatin ja paikkakunnan yhdistelmästä. Käytä synteettistä dataa aina kun mahdollista." }
    ],
    "checklist": ["Henkilötiedot anonymisoitu", "Syötettävä data minimoitu", "Opt-out aktivoitu", "Audit-logit tarkistettu"],
    "cta": { "text": "Lue lisää GDPR-riskeistä", "route": null }
  },
  "incident-response-72h": {
    "type": "checklist",
    "slug": "incident-response-72h",
    "category": "crisis",
    "featured": true,
    "navLabel": "72h Valmius",
    "seo": { "title": "72 tunnin kriisivalmius | Lapland AI Lab", "description": "Miten selvitä ensimmäiset 72 tuntia tietomurron jälkeen." },
    "hero": { "title": "72 tunnin kriisivalmius", "subtitle": "Kun pilli soi, ei ole aikaa lukea käyttöohjeita. Toiminnan on tultava selkäytimestä." },
    "sections": [
      { "title": "Eristäminen ja analyysi", "body": "Ensimmäinen tavoite: pysäytä leviäminen. Irrota saastuneet laitteet verkosta, mutta älä sammuta niitä, jotta keskusmuistin data säilyy tutkintaa varten." },
      { "title": "Viestintä", "body": "Kuka kertoo asiakkaille? Kuka viranomaisille? Tee valmiit viestipohjat eri tilanteisiin." }
    ],
    "checklist": ["Eristämissuunnitelma valmis", "Viestintäpohjat luotu", "Yhteystiedot offline-muodossa", "Viranomaisilmoitus-prosessi"],
    "cta": { "text": "Kriisiviestintäpohja", "route": null }
  },
  "arctic-data-vault": {
    "type": "module",
    "slug": "arctic-data-vault",
    "category": "privacy",
    "featured": true,
    "navLabel": "Data Vault",
    "seo": { "title": "Arctic Data Vault | Lapland AI Lab", "description": "Datan suvereniteetti pohjoisessa mallissa. Hallitse omaa omaisuuttasi." },
    "hero": { "title": "Arctic Data Vault", "subtitle": "Digitaalinen suvereniteetti tarkoittaa omistajuutta, hallintaa ja riippumattomuutta." },
    "sections": [
      { "title": "Datan suvereniteetti", "body": "Pohjoisessa mallissa data on omaisuutta, jota suojellaan hajautetulla tallennuksella ja Zero-Knowledge-periaatteilla. Avoimen lähdekoodin ratkaisut takaavat, ettei lukkiutumista tapahdu." }
    ],
    "checklist": ["Hajautettu tallennus käytössä", "Zero-Knowledge salaus aktivoitu", "Avoimen lähdekoodin auditointi tehty"],
    "cta": { "text": "Tutustu vault-arkkitehtuuriin", "route": null }
  },
  "ai-system-resilience": {
    "type": "article",
    "slug": "ai-system-resilience",
    "category": "ai",
    "featured": true,
    "navLabel": "Resilienssi",
    "seo": { "title": "AI-järjestelmien vastustuskyky | Lapland AI Lab", "description": "Prompt injection -hyökkäykset ja adversarial input -manipulaatio." },
    "hero": { "title": "AI-järjestelmien vastustuskyky", "subtitle": "Uhat eivät ole vain ulkoisia. Puolustaudu prompt-injektioita ja vääristynyttä dataa vastaan." },
    "sections": [
      { "title": "Puolustusmekanismit", "body": "Syötteiden sanitointi ja deterministiset mallit kriittisissä toiminnoissa ovat perusedellytys. Säännöllinen red teaming -testaus paljastaa heikot kohdat ennen hyökkääjiä." }
    ],
    "checklist": ["Prompt-sanitointi käytössä", "Deterministiset mallit kriittisissä osissa", "Red teaming suoritettu"],
    "cta": { "text": "Lataa red teaming -ohje", "route": null }
  },
  "physical-security-arctic": {
    "type": "module",
    "slug": "physical-security-arctic",
    "category": "routines",
    "featured": false,
    "navLabel": "Fyysinen turva",
    "seo": { "title": "Fyysinen turvallisuus arktisissa oloissa | Lapland AI Lab", "description": "Konesalien ja työpisteiden fyysinen suojaaminen." },
    "hero": { "title": "Fyysinen turva", "subtitle": "Digitaalinen lukko ei auta, jos ovi on auki." },
    "sections": [
      { "title": "Kulunvalvonta", "body": "Varmista, että jokainen käynti palvelintilassa tallentuu lokiin. Käytä biometristä tunnistautumista tai vähintään henkilökohtaisia avaimia." }
    ],
    "checklist": ["Konesalin ovi lukittu", "Kameravalvonta aktiivinen", "Vierailijaprotokolla käytössä"],
    "cta": { "text": "Fyysinen audit-lista", "route": null }
  },
  "supply-chain-trust": {
    "type": "article",
    "slug": "supply-chain-trust",
    "category": "kyber",
    "featured": false,
    "navLabel": "Toimitusketju",
    "seo": { "title": "Toimitusketjun tietoturva | Lapland AI Lab", "description": "Olet juuri niin vahva kuin ketjusi heikoin lenkki." },
    "hero": { "title": "Toimitusketjun luottamus", "subtitle": "Hyökkääjät valitsevat usein helpoimman reitin: ali-ali-alihankkijan." },
    "sections": [
      { "title": "Kumppanien arviointi", "body": "Edellytä kumppaneilta vähintään MFA:n käyttöä ja säännöllistä tietoturva-auditointia. Sisällytä tietoturvavaatimukset kaikkiin hankintasopimuksiin." }
    ],
    "checklist": ["Sopimusklausuulit kunnossa", "MFA vaatimus kumppaneille", "Auditointioikeus varmistettu"],
    "cta": { "text": "Hankintaohjeistus", "route": null }
  }
};
