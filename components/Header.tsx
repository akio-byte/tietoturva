
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Metodologia', path: '/methodology' },
    { name: 'Hallinto (AGENT.md)', path: '/governance' },
    { name: 'Audit (AUDIT.md)', path: '/audit' },
    { name: 'Oppaat', path: '/blueprints' },
    { name: 'Arkkitehtuuri', path: '/architecture' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <span className="text-slate-950 font-black text-xs">AH</span>
              </div>
              <span className="text-xl font-bold tracking-tight">
                Arctic <span className="aurora-text">Hardening</span>
              </span>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all px-3 py-2 rounded-lg ${
                  isActive(item.path) ? 'text-emerald-400 bg-emerald-500/5' : 'text-slate-400 hover:text-white'
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
