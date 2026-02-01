import React from 'react';
import CTA from '../components/CTA';
import PageLayout from '../components/PageLayout';
import RiskCards from '../components/RiskCards';
import Section from '../components/Section';
import Seo from '../components/Seo';

const Routines: React.FC = () => {
  return (
    <PageLayout>
      <Seo
        title="Arjen rutiinit | Lapland AI Lab"
        description="Selkeät tietoturvarutiinit, joilla varmistat jatkuvan suojauksen ja vahvan turvallisuuskulttuurin."
      />

      <div className="mb-16">
        <span className="text-blue-400 font-bold tracking-widest uppercase text-sm">Turva arjessa</span>
        <h1 className="text-5xl font-extrabold text-white mt-4 mb-6">Arjen rutiinit</h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl">
          Toimiva tietoturva rakentuu pienistä teoista. Kun perusasiat tehdään oikein joka päivä, riskit pienenevät
          merkittävästi ja poikkeamiin reagointi nopeutuu.
        </p>
      </div>

      <Section
        title="Viikkotason tarkistukset"
        description="Lyhyet, säännölliset rutiinit pitävät tilanteen näkyvissä ja estävät ongelmien kertymisen."
        importance="Kun poikkeamat havaitaan nopeasti, niiden vaikutus pysyy rajattuna ja palautuminen on helppoa."
        checklist={[
          'Varmista, että varmuuskopiot ovat onnistuneet.',
          'Seuraa tärkeimpiä hälytyksiä ja loki-ilmoituksia.',
          'Tarkista, että kriittiset palvelut ovat ajan tasalla.'
        ]}
      />

      <Section
        title="Kuukausittaiset toimet"
        description="Laajempi katselmus tuo esiin trendit, joita päivittäinen seuranta ei paljasta."
        importance="Säännöllinen analyysi auttaa priorisoimaan parannuksia ja vahvistaa turvallisuuskulttuuria."
        checklist={[
          'Käy läpi käyttäjien käyttöoikeudet ja poista turhat.',
          'Testaa palautusprosessi tärkeimmille järjestelmille.',
          'Päivitä turvallisuusohjeistus ja viesti muutoksista.'
        ]}
      />

      <Section
        title="Kriittiset hälytykset"
        description="Hälytykset kertovat, milloin tilanne vaatii välitöntä reagointia."
        importance="Nopea reagointi estää hyökkääjän etenemisen ja pienentää mahdollisia vahinkoja."
        checklist={[
          'Määrittele vastuuhenkilö hälytysten käsittelylle.',
          'Kirjaa ensitoimet valmiiksi pelikirjaan.',
          'Varmista, että hätäyhteystiedot ovat ajan tasalla.'
        ]}
      />

      <div className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-6">Tyypilliset sudenkuopat</h2>
        <RiskCards
          items={[
            {
              title: 'Hälytysväsymys',
              description:
                'Liian monta hälytystä johtaa siihen, että kriittisetkin ilmoitukset jäävät huomaamatta.'
            },
            {
              title: 'Rutiinien unohtuminen kiireessä',
              description:
                'Kun arki kuormittaa, tarkistukset jäävät tekemättä ja riskit kasvavat hiljalleen.'
            }
          ]}
        />
      </div>

      <CTA
        title="Varmista jatkuva turva"
        subtitle="Seuraava askel"
        description="Ota rutiinit käyttöön ja rakenna turvallisuuskulttuuri, joka kestää myös kiireessä."
        buttonLabel="Palaa etusivulle"
        buttonHref="/"
      />
    </PageLayout>
  );
};

export default Routines;
