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
      "route": "/downloads/arctic-security-opus.pdf"
    }
  },
  "privacy-ai-training": {
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
  "arctic-data-vault": {
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
  "crisis-offline-readiness": {
    "slug": "crisis-offline-readiness",
    "category": "crisis",
    "featured": true,
    "navLabel": "Offline-valmius",
    "seo": { "title": "Offline-valmius ja kriisinkestävyys | Lapland AI Lab", "description": "Arktinen ajattelu olettaa: yhteys katkeaa. Ole valmis." },
    "hero": { "title": "Kriisinkestävyys ja offline-valmius", "subtitle": "Arktinen ajattelu olettaa, että yhteys katkeaa jossain vaiheessa. Varmista toimintakyky ilman verkkoa." },
    "sections": [
      { "title": "72 tunnin sääntö", "body": "Varmista kriittiset dokumentit offline-tilassa, varaa fyysiset MFA-avaimet ja varmista varavirta vähintään 72 tunniksi." }
    ],
    "checklist": ["Kriittiset dokumentit offline-tallessa", "Fyysiset MFA-avaimet (Yubikey) käytössä", "Varavirta 72h varmistettu"],
    "cta": { "text": "Kriisivalmiussuunnitelma", "route": "/incident-response" }
  },
  "ai-governance-audit": {
    "slug": "ai-governance-audit",
    "category": "ai",
    "featured": false,
    "navLabel": "Hallinta & Audit",
    "seo": { "title": "AI Hallinta ja Audit-logit | Lapland AI Lab", "description": "Miten hallita AI-ympäristöjä vastuullisesti." },
    "hero": { "title": "Hallinta ja Auditointi", "subtitle": "Tietoturva ei ole asetustila – se on jatkuva prosessi." },
    "sections": [
      { "title": "Hallintaperiaatteet", "body": "Varmista, että mallin opetus on estetty omalla datalla (Opt-out), audit-logit ovat käytössä ja käyttöoikeudet on rajattu rooleittain." }
    ],
    "checklist": ["Opt-out aktivoitu kaikissa palveluissa", "Audit-logit keskitetty", "Käyttöoikeudet auditoitu"],
    "cta": { "text": "Audit-raporttipohja", "route": null }
  },
  "arctic-mobile-hardening": {
    "slug": "arctic-mobile-hardening",
    "category": "mobile",
    "featured": true,
    "navLabel": "Mobiili karkaisu",
    "seo": { "title": "Arctic Mobile Hardening | Lapland AI Lab", "description": "Mobiililaite on organisaation heikoin lenkki. Koveta se." },
    "hero": { "title": "Arctic Mobile Hardening", "subtitle": "Mobiililaite on organisaation heikoin lenkki ja tehokkain hyökkäysvektori." },
    "sections": [
      { "title": "Keskeiset toimenpiteet", "body": "Käytä täyttä laitteen salausta, Zero Trust -verkkoliikennettä ja MDM-hallintaa etätyhjennyksellä." }
    ],
    "checklist": ["Täysi laitteen salaus aktiivinen", "Zero Trust VPN käytössä", "MDM-profiili asennettu", "Automaattiset Wi-Fi-haut pois"],
    "cta": { "text": "Mobiiliturva-auditointi", "route": "/mobile-security" }
  },
  "remote-work-security": {
    "slug": "remote-work-security",
    "category": "kyber",
    "featured": true,
    "navLabel": "Etätyö",
    "seo": { "title": "Etätyön tietoturvaopas | Lapland AI Lab", "description": "Käytännön ohjeet turvalliseen etätyöhön." },
    "hero": { "title": "Toimisto ilman seiniä", "subtitle": "Varmista VPN-yhteys ennen tunturiin nousua." },
    "sections": [
      { "title": "Kotiverkon kriittiset pisteet", "body": "Reititin on kotisi tietoturvan ovi. Vaihda salasana heti." }
    ],
    "checklist": ["VPN käytössä", "Reitittimen salasana vaihdettu", "Tietosuojakalvo käytössä"],
    "cta": { "text": "Lue lisää", "route": null }
  }
};