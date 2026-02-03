
import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const MobileSecurity: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Mobiiliturvallisuus ja viestintä | Lapland AI Lab" 
        description="Suojaa älypuhelimesi, tablettisi ja viestintäsi julkisissa verkoissa ja huolehdi fyysisestä turvasta." 
      />
      <Hero 
        title="Tasku-kyber: Suojaa liikkuva toimisto"
        subtitle="Puhelimesi on todennäköisesti henkilökohtaisin ja samalla haavoittuvin laitteesi. Pidä se lukittuna ja valvottuna."
        label="Taskussa kulkevan tiedon suojaus"
      />

      <div className="space-y-12">
        <Section 
          title="Fyysinen pääsy: Ensimmäinen este"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Kadonnut puhelin on avoin ovi kaikkeen dataasi, sähköposteihisi ja pankkitileihisi."
          checklist={[
            "Käytä vahvaa biometriaa (kasvot/sormenjälki) aina",
            "Käytä vähintään 6-numeroista PIN-koodia, ei kuvioita",
            "Ota etätyhjennys (Find My / Android Find) käyttöön heti"
          ]}
        >
          Fyysinen turvallisuus on usein mobiililaitteiden heikoin lenkki. Laitteen varastaminen tai katoaminen on arkipäiväinen riski, joka on taklattava etukäteen.
        </Section>

        <Section 
          title="USB-lataus ja Juice Jacking"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Julkiset USB-latauspisteet voivat siirtää dataa sähkön lisäksi. Puhelimesi voi saastua pelkästä latauksesta."
          checklist={[
            "Käytä aina omaa laturia ja pistorasiaa, vältä julkisia USB-portteja",
            "Hanki 'USB data blocker' -välikappale, joka estää datasiirron",
            "Älä koskaan hyväksy 'Luota tähän tietokoneeseen' -ilmoitusta latauksen yhteydessä"
          ]}
          colorClass="bg-red-500"
        >
          <p className="mb-4">Lentokenttien ja kahviloiden ilmaiset latauspisteet ovat käteviä, mutta riskialttiita. Juice Jacking on hyökkäys, jossa latauskaapelin kautta asennetaan haittaohjelma.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Matkustaja kytkee puhelimensa lataustolppaan, ja taustalla oleva mikrotietokone kopioi puhelimen kuvat ja yhteystiedot huomaamatta.
          </div>
        </Section>

        <Section 
          title="Viestintäsovellukset ja salaus"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Arkaluonteinen tieto voi paljastua, jos viestintää ei ole suojattu päästä päähän -salauksella (E2EE)."
          checklist={[
            "Käytä ensisijaisesti E2EE-sovelluksia (Signal, WhatsApp)",
            "Käytä katoavia viestejä (disappearing messages) arkaluonteiseen tietoon",
            "Älä jaa salasanoja tai koodia tavallisella tekstiviestillä",
            "Varmista, että sovellusten varmuuskopiot on myös salattu"
          ]}
          colorClass="bg-emerald-500"
        >
          <p className="mb-4">Perinteiset tekstiviestit ja monet ilmaiset sähköpostit eivät ole salattuja. Käytä turvallisia kanavia työhön ja yksityisyyteen.</p>
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-xl italic text-slate-400">
            Esimerkki riskistä: Tekstiviestit voidaan kaapata verkkotasolla, jolloin MFA-koodit tai salasanat päätyvät vääriin käsiin ilman, että huomaat mitään.
          </div>
        </Section>

        <Section 
          title="Sovellusluvat: Kuka kuuntelee?"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Monet sovellukset pyytävät pääsyä mikrofoniiin, kameraan tai sijaintiin ilman todellista tarvetta."
          checklist={[
            "Käy läpi sovellusluvat kerran kuussa puhelimen asetuksista",
            "Poista kaikki sovellukset, joita et ole käyttänyt 3 kuukauteen",
            "Lataa sovelluksia vain virallisista kaupoista (App Store / Play Store)"
          ]}
          colorClass="bg-blue-500"
        >
          Sovellukset keräävät valtavia määriä dataa taustalla. Ole kriittinen sille, mitä tietoa annat puhelimessasi oleville ohjelmille.
        </Section>

        <Section 
          title="Turvattomat verkot: Wi-Fi on ansa"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Julkiset verkot ovat helppoja paikkoja 'man-in-the-middle' -hyökkäyksille."
          checklist={[
            "Käytä aina VPN-yhteyttä julkisessa Wi-Fissä (hotellit, kahvilat)",
            "Suosi mobiilidataa ja omaa hotspottia avoimen verkon sijaan",
            "Sammuta Wi-Fi ja Bluetooth, kun et tarvitse niitä aktiivisesti"
          ]}
          colorClass="bg-purple-500"
        >
          Avoimet verkot kahviloissa ja lentokentillä ovat hyökkääjien leikkikenttiä. Suojaa liikenteesi salaamalla se luotettavalla VPN-yhteydellä.
        </Section>

        <CTA label="Mobiiliturvan pikaohje (A4 - Tulossa)" />
      </div>
    </div>
  );
};

export default MobileSecurity;
