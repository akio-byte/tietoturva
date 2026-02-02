import React from 'react';
import { Link } from 'react-router-dom';
import { SEO, Hero } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Crisis: React.FC = () => {
  const crisisItems = Object.values(contentRegistry).filter(item => item.category === 'crisis');

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Kriisivalmius ja jatkuvuus | Lapland AI Lab" 
        description="Kriisiviestintä, jatkuvuussuunnittelu ja palautumisen protokollat."
      />
      <Hero 
        title="Kriisivalmius ja jatkuvuus"
        subtitle="Kun verkko pimenee, suunnitelma ratkaisee. Näistä sisällöistä rakennat toimintakyvyn pahimpaan hetkeen."
        label="Kriisinhallinnan perusta"
      />

      <div className="space-y-12">
        <div className="glass p-8 rounded-3xl border border-slate-800">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Kriisisisällöt</p>
              <h2 className="text-2xl font-black text-white">Kriisivalmiuden oppaat</h2>
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              {crisisItems.length} sisältöä
            </span>
          </div>
          <div className="grid gap-3">
            {crisisItems.map(item => (
              <Link
                key={item.slug}
                to={`/content/${item.slug}`}
                className="flex items-center justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 px-5 py-4 text-sm font-bold uppercase tracking-widest text-slate-300 transition-all hover:border-emerald-500/40 hover:text-emerald-400"
              >
                <span>{item.navLabel}</span>
                <span className="text-[10px] text-slate-500">{item.hero.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Crisis;
