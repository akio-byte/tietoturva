import React from 'react';
import Checklist from './Checklist';

interface SectionProps {
  title: string;
  description: string;
  importance: string;
  checklist: string[];
}

const Section: React.FC<SectionProps> = ({ title, description, importance, checklist }) => {
  return (
    <section className="mb-16 md:mb-20">
      <div className="flex items-center gap-4 mb-6">
        <span className="w-2 h-8 bg-emerald-500 rounded-full" aria-hidden="true"></span>
        <h2 className="text-2xl md:text-3xl font-bold text-white">{title}</h2>
      </div>
      <p className="text-lg text-slate-400 leading-relaxed mb-8">{description}</p>
      <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div className="glass p-6 md:p-8 rounded-3xl">
          <h3 className="text-emerald-400 font-semibold mb-3">Miksi tärkeää?</h3>
          <p className="text-slate-300 leading-relaxed">{importance}</p>
        </div>
        <div className="bg-slate-950 border border-slate-800 p-6 md:p-8 rounded-3xl">
          <h3 className="text-white font-semibold mb-4">Tarkistuslista</h3>
          <Checklist items={checklist} />
        </div>
      </div>
    </section>
  );
};

export default Section;
