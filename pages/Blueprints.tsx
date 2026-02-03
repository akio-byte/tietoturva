
import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const Blueprints: React.FC = () => {
  const items = Object.values(contentRegistry);
  const categories = Array.from(new Set(items.map(i => i.category)));

  return (
    <div className="max-w-7xl mx-auto px-4 py-20">
      <SEO title="Blueprints | Arctic Hardening" description="Selaa Lapland AI Labin tietoturva-blueprinttejä." />
      
      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">Blueprints</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Valmiit arkkitehtuurit ja toimintamallit digitaaliseen karkaisuun.
        </p>
      </div>

      <div className="space-y-20">
        {categories.map(category => (
          <div key={category}>
            <h2 className="text-xs font-black text-emerald-500 uppercase tracking-[0.4em] mb-8 flex items-center gap-4">
              {category}
              <div className="h-px flex-grow bg-slate-800"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.filter(i => i.category === category).map(item => (
                <Link 
                  key={item.slug} 
                  to={`/content/${item.slug}`}
                  className="group glass p-8 rounded-[2rem] border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col h-full"
                >
                  <div className="mb-6 flex justify-between items-start">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-700 group-hover:border-emerald-500/30 transition-colors">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    {item.featured && (
                      <span className="text-[10px] font-black bg-emerald-500 text-slate-950 px-2 py-0.5 rounded uppercase">Featured</span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 group-hover:text-emerald-400 transition-colors">{item.navLabel}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 flex-grow">
                    {item.seo.description}
                  </p>
                  <div className="flex items-center text-emerald-500 text-xs font-black uppercase tracking-widest gap-2">
                    Avaa blueprint
                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blueprints;
