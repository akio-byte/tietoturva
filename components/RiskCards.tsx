import React from 'react';

interface RiskCardItem {
  title: string;
  description: string;
}

interface RiskCardsProps {
  items: RiskCardItem[];
}

const RiskCards: React.FC<RiskCardsProps> = ({ items }) => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="bg-slate-950 border border-red-500/30 rounded-3xl p-6 md:p-8"
        >
          <span className="text-xs uppercase tracking-[0.2em] text-red-400 font-semibold">
            Esimerkki riskistä
          </span>
          <h3 className="text-xl font-bold text-white mt-3 mb-4">{item.title}</h3>
          <p className="text-slate-400 leading-relaxed">{item.description}</p>
        </article>
      ))}
    </div>
  );
};

export default RiskCards;
