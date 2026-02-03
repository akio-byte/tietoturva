import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-[#020617] text-white min-h-[70vh]">
      <div className="absolute top-0 right-1/4 w-[380px] h-[380px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="glass rounded-3xl p-8 md:p-12 space-y-6">
          <h1 className="text-3xl md:text-4xl font-black">Yhteystiedot</h1>
          <p className="text-slate-300 leading-relaxed">
            Tämä on staattinen showroom-sivusto ilman taustajärjestelmää. Kaikki palaute ja
            keskustelut ohjataan projektin repositorioon.
          </p>
          <div className="space-y-3 text-sm text-slate-200">
            <div>
              <span className="font-semibold text-white">Repo:</span>{' '}
              <a
                href="https://github.com/akio-byte/tietoturva"
                className="text-emerald-300 hover:text-emerald-200 transition-colors"
                rel="noreferrer"
                target="_blank"
              >
                https://github.com/akio-byte/tietoturva
              </a>
            </div>
            <div>
              <span className="font-semibold text-white">Sähköposti:</span>{' '}
              <a
                href="mailto:your-email-here"
                className="text-emerald-300 hover:text-emerald-200 transition-colors"
              >
                mailto:your-email-here
              </a>
            </div>
            <div className="text-slate-400">
              Huom: showroom on täysin staattinen, eikä sisällä backend-palveluita.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
