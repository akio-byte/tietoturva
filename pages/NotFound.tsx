import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../components/PageLayout';

const NotFound: React.FC = () => {
  return (
    <PageLayout className="text-center">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-4">404</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Sivua ei löytynyt</h1>
        <p className="text-slate-400 mb-10">
          Tämä reitti ei ole käytössä. Tarkista osoite tai palaa takaisin etusivulle.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-8 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300"
        >
          Takaisin etusivulle
        </Link>
      </div>
    </PageLayout>
  );
};

export default NotFound;
