
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-slate-500 py-12 mt-20 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.3em] mb-4">
          Lapland <span className="text-white">AI Lab</span> &copy; 2026
        </p>
        <div className="flex justify-center gap-6 text-[10px] font-black uppercase tracking-widest">
          <span className="text-emerald-500">Live Static App</span>
          <span className="text-slate-700">|</span>
          <span>No Backend Required</span>
          <span className="text-slate-700">|</span>
          <span>Local Storage Persistence</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
