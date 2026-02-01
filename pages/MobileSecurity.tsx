
import React from 'react';
import { SEO, Hero, Section, CTA } from '../components/Shared';

const MobileSecurity: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <Seo
        title="Mobiiliturva | Lapland AI Lab"
        description="Käytännön ohjeet mobiililaitteiden suojaamiseen, sovellusoikeuksien hallintaan ja turvallisiin verkkoihin."
      />
      <div className="mb-20">
        <span className="text-purple-400 font-bold tracking-widest uppercase text-sm">Liikkuva Turvallisuus</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">Mobiiliturva</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Kattava suoja älypuhelimille ja tableteille – laitteista, jotka kulkevat aina mukanasi.
        </p>
      </div>
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

      <div className="bg-purple-600 p-1 rounded-[40px]">
        <div className="bg-slate-950 rounded-[38px] p-12 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Valmiina turvaamaan laitteesi?</h2>
          <p className="text-slate-400 mb-10 max-w-2xl mx-auto italic">
            "Mobiiliturva ei ole staattinen tila, vaan jatkuva prosessi. Lapland AI Lab auttaa pitämään yhteytesi suojattuna."
          </p>
          <Link to="/" className="inline-block bg-purple-600 text-white font-bold px-12 py-4 rounded-full hover:bg-purple-500 transition-all">
            Takaisin aloitukseen
          </Link>
        </div>
        <CTA label="Mobiiliturvan pikaohje (A4)" />
      </div>
    </div>
  );
};

export default MobileSecurity;
