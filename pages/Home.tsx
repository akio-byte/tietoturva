import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#020617] text-white">
      <div className="absolute top-0 left-1/3 w-[420px] h-[420px] bg-emerald-600/10 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center space-y-8">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-xs font-bold uppercase tracking-[0.2em]">
            Lapland AI Lab
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Arctic Hardening – Governance Showroom
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Lyhyt, staattinen esittelytila arktiselle hallintamallille, kybervalmiudelle ja
            auditointikäytännöille.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/blueprints"
              className="glass w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold tracking-wide text-white hover:text-emerald-300 transition-colors"
            >
              Blueprintit
            </Link>
            <Link
              to="/audit"
              className="glass w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-bold tracking-wide text-white hover:text-emerald-300 transition-colors"
            >
              Audit
            </Link>
            <Link
              to="/governance"
              className="bg-emerald-400 text-slate-900 w-full sm:w-auto px-8 py-4 rounded-2xl text-sm font-black tracking-wide hover:bg-emerald-300 transition-colors"
            >
              Hallinto
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">What you’ll find</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-slate-300">
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Blueprintit</h3>
                <p className="text-sm leading-relaxed">
                  Ydinrakenteet ja mallit, joilla hallinto ja kybervalmius pidetään kurissa.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Auditointi</h3>
                <p className="text-sm leading-relaxed">
                  Käytännön checklistat ja tarkistuspisteet staattiseen laadunvarmistukseen.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-white">Hallinto</h3>
                <p className="text-sm leading-relaxed">
                  Governance-näkymä, joka tukee läpinäkyvää päätöksentekoa ja vastuuta.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
