import React from 'react';
import { Link } from 'react-router-dom';

interface CTAProps {
  title: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  subtitle?: string;
}

const CTA: React.FC<CTAProps> = ({ title, description, buttonLabel, buttonHref, subtitle }) => {
  return (
    <div className="bg-gradient-to-br from-emerald-600/20 via-slate-950 to-blue-600/20 border border-emerald-500/20 rounded-[40px] p-10 md:p-12 text-center">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-emerald-200 uppercase tracking-[0.2em] text-xs mb-4">{subtitle}</p>}
      <p className="text-slate-300 max-w-2xl mx-auto mb-8">{description}</p>
      <Link
        to={buttonHref}
        className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-10 py-4 text-sm font-semibold text-slate-900 transition-colors hover:bg-emerald-300"
      >
        {buttonLabel}
      </Link>
    </div>
  );
};

export default CTA;
