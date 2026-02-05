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
      { "title": "Segmentointi ja Zero Trust", "body": "Älä luota keneenkään verkon sisällä. Segmentoi vierasverkko, tuotantoverkko ja hallintaverkko toisistaan. Käytä palomuureja, jotka ymmärtävät sovellustason liikenteen. Moderni arkkitehtuuri ei tunne 'sisäverkkoa' turvallisena alueena; jokainen yhteys on todennettava erikseen." }
    ],
    "checklist": ["Verkko segmentointu", "Zero Trust -malli käytössä", "Vierasverkko eristetty", "IDS/IPS aktivoitu"],
    "cta": { "text": "Verkkokarttapohja", "route": null }
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
      { "title": "Puolustusmekanismit", "body": "Syötteiden sanitointi ja deterministiset mallit kriittisissä toiminnoissa ovat perusedellytys. Tekoälyjärjestelmien on kyettävä tunnistamaan poikkeukselliset syötekuviot, jotka viittaavat yrityksiin ohittaa turvakaiteet (Jailbreaking). Red teaming -prosessin tulisi olla jatkuvaa, ei kerrallinen auditointi." }
    ],
    "checklist": ["Prompt-sanitointi käytössä", "Deterministiset mallit kriittisissä osissa", "Red teaming suoritettu neljännesvuosittain"],
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
      { "title": "Käyttöpolitiikka", "body": "Määrittele selkeästi mitkä AI-työkalut ovat hyväksyttyjä ja miten niitä saa käyttää luottamuksellisen tiedon kanssa. Organisaation tulisi tarjota 'Turvasatama' eli sisäinen, auditoitu AI-ympäristö, jotta työntekijöiden ei tarvitse turvautua julkisiin kuluttajatuotteisiin." }
    ],
    "checklist": ["AI-politiikka luotu ja viestitty", "Sallitut työkalut listattu", "Data-koulutus pidetty henkilöstölle"],
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
      { "title": "MDM ja Eristäminen", "body": "Mobiililaitteet ovat usein pääsyreitti MFA-koodeihin ja yrityksen viestintään. MDM-hallinta mahdollistaa hiekkalaatikoinnin, jossa työkäyttöön tarkoitetut sovellukset eivät voi jakaa dataa vapaa-ajan sovellusten kanssa. Etäpyyhintäkyky on ehdoton vaatimus kadonneen laitteen varalta." }
    ],
    "checklist": ["PIN/Biometria pakollinen", "Etäpyyhintä testattu", "Sovellusluvat auditoitu", "Always-on VPN käytössä"],
    "cta": { "text": "MDM-valintaopas", "route": null }
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
      { "title": "Datan näkymätön muisti", "body": "Tekoälymallit voivat muistaa syötteitä tavoilla, jotka eivät ole helposti peruutettavissa. Kerran julkiseen malliin syötetty liikesalaisuus on osa mallin 'tietoa'. Privacy by Design tarkoittaa, että data anonymisoidaan tai pseudonymisoidaan jo ennen kuin se poistuu käyttäjän laitteelta tai organisaation verkosta." }
    ],
    "checklist": ["DPII (Tietosuojan vaikutustenarviointi) tehty", "Datan poistopolitiikka määritelty", "Anonymisointityökalut käytössä"],
    "cta": { "text": "GDPR-työkalupakki", "route": null }
  },

  // ROUTINES
  "arctic-security-opus-v2": {
    "type": "article",
    "slug": "arctic-security-opus-v2",
    "category": "routines",
    "featured": true,
    "navLabel": "Arktinen Opus",
    "seo": { "title": "Arctic Security Opus", "description": "Kokonaisvaltainen tietoturvamanifesti." },
    "hero": { "title": "Arktinen Opus v2", "subtitle": "Kaikki tietotaito tiivistettynä yhteen dokumenttiin. Tämä on organisaatiosi turva-arkkitehtuuri." },
    "sections": [
      { "title": "Resilienssimanifesti", "body": "Arktinen tietoturva-ajattelu lähtee siitä, että olosuhteet ovat vihamieliset. Sähkökatkot, katkenneet yhteydet ja hybridiuhat ovat osa normaalia toimintaympäristöä. Organisaation on kyettävä toimimaan 72 tuntia täysin ilman ulkoista verkkoa (Offline Readiness). Tämä Opus määrittelee protokollat, joilla digitaalinen perustoiminta varmistetaan pimeän sään vallitessa." }
    ],
    "checklist": ["Opus jaettu johtoryhmälle", "Offline-harjoitus suoritettu", "Auditointisykli vakiinnutettu"],
    "cta": { "text": "Lataa täysi Opus", "route": "/materials" }
  },

  // CRISIS
  "incident-response": {
    "type": "checklist",
    "slug": "incident-response",
    "category": "crisis",
    "featured": true,
    "navLabel": "72h Valmius",
    "seo": { "title": "Kriisivalmius 72h", "description": "Miten toimia hyökkäyksen sattuessa." },
    "hero": { "title": "72 tunnin valmius", "subtitle": "Ensimmäiset tunnit ratkaisevat. Toimintaohjeet tietomurron ja kiristysohjelmien varalle." },
    "sections": [
      { "title": "Välitön eristäminen", "body": "Kun poikkeama havaitaan, jokainen sekunti on kallis. Eristä saastunut laite välittömästi verkosta, mutta älä sammuta sitä, jotta keskusmuistin (RAM) todisteet säilyvät forensiikkaa varten. Käynnistä kriisiviestintäsuunnitelma välittömästi, jotta sidosryhmät saavat oikeaa tietoa ennen huhujen leviämistä." }
    ],
    "checklist": ["Kriisiryhmä ja eskalointipolku nimetty", "Viestintäpohjat valmiina", "Offline-yhteystiedot paperilla", "Viranomaisilmoituksen prosessi tiedossa"],
    "cta": { "text": "Lataa kriisi-A4", "route": null }
  }
};
