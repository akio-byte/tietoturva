
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Metodologia', path: '/methodology' },
    { name: 'Blueprints', path: '/blueprints' },
    { name: 'Hallinto', path: '/governance' },
    { name: 'Arkkitehtuuri', path: '/architecture' },
    { name: 'Auditointi', path: '/audit' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center transition-transform group-hover:rotate-12">
                <span className="text-slate-950 font-black text-xs">AH</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arctic <span className="aurora-text">Hardening</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                aria-current={isActive(item.path) ? 'page' : undefined}
                className={`text-sm font-bold transition-all px-4 py-2 rounded-xl ${
                  isActive(item.path) 
                    ? 'text-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.1)]' 
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
