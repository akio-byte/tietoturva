import React from 'react';
import { SEO, Hero, PageLayout, Section, CTA } from '../components/Shared';

const MobileSecurity: React.FC = () => {
  return (
    <PageLayout>
      <SEO 
        title="Mobiiliturvallisuus ja VPN | Lapland AI Lab" 
        description="Suojaa älypuhelimesi ja tablettisi julkisissa verkoissa ja huolehdi fyysisestä turvasta." 
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
          importanceDesc="Kadonnut puhelin on avoin ovi kaikkeen dataasi."
          checklist={[
            "Käytä biometriaa (kasvot/sormenjälki)",
            "Käytä vähintään 6-numeroista PIN-koodia",
            "Ota etätyhjennys (Find My / Android Find) käyttöön"
          ]}
        >
          Fyysinen turvallisuus on usein mobiililaitteiden heikoin lenkki. Laitteen varastaminen tai katoaminen on arkipäiväinen riski, joka on taklattava etukäteen.
        </Section>

        <Section 
          title="Sovellusluvat: Kuka kuuntelee?"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Moni sovellus pyytää pääsyä mikrofoniiin tai sijaintiin turhaan."
          checklist={[
            "Käy läpi sovellusluvat kerran kuussa",
            "Poista kaikki käyttämättömät sovellukset",
            "Lataa sovelluksia vain virallisista kaupoista"
          ]}
          colorClass="bg-blue-500"
        >
          Sovellukset keräävät valtavia määriä dataa taustalla. Ole kriittinen sille, mitä tietoa annat puhelimessasi oleville ohjelmille.
        </Section>

        <Section 
          title="Turvattomat verkot: Wi-Fi on ansa"
          importanceTitle="Miksi tämä on tärkeää?"
          importanceDesc="Julkiset verkot ovat helppoja paikkoja man-in-the-middle -hyökkäyksille."
          checklist={[
            "Käytä aina VPN-yhteyttä julkisessa Wi-Fissä",
            "Suosi mobiilidataa avoimen verkon sijaan",
            "Sammuta Wi-Fi ja Bluetooth, kun et tarvitse niitä"
          ]}
          colorClass="bg-purple-500"
        >
          Avoimet verkot kahviloissa ja lentokentillä ovat hyökkääjien leikkikenttiä. Suojaa liikenteesi salaamalla se VPN-yhteydellä.
        </Section>

        <CTA label="Mobiiliturvan pikaohje (A4)" />
      </div>
    </PageLayout>
  );
};

export default MobileSecurity;
