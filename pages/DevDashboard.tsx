import React, { useState, useEffect } from 'react';
import { SEO, Hero } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const DevDashboard: React.FC = () => {
  const [activeAgent, setActiveAgent] = useState<'ai' | 'dev' | 'codex'>('ai');
  const [auditResults, setAuditResults] = useState<{ category: string; count: number; status: 'ok' | 'warning' | 'error' }[]>([]);
  const [isScanning, setIsScanning] = useState(false);

  useEffect(() => {
    runAudit();
  }, []);

  const runAudit = () => {
    setIsScanning(true);
    setTimeout(() => {
      const categories = ['kyber', 'ai', 'mobile', 'crisis', 'privacy', 'routines'];
      const results = categories.map(cat => {
        const items = Object.values(contentRegistry).filter(item => item.category === cat);
        const count = items.length;
        // Logic: 3+ is green, 1-2 is warning, 0 is error
        return {
          category: cat,
          count: count,
          status: count >= 3 ? 'ok' : count >= 1 ? 'warning' : 'error' as any
        };
      });
      setAuditResults(results);
      setIsScanning(false);
    }, 800);
  };

  const triggerAgentAction = (prompt: string) => {
    const event = new CustomEvent('agent-command', { detail: { prompt, mode: 'dev' } });
    window.dispatchEvent(event);
  };

  const agents = [
    {
      id: 'ai',
      name: 'Virtual Analyst',
      model: 'gemini-3-flash-preview',
      role: 'User Experience & Help',
      status: 'Active',
      color: 'emerald',
      description: 'Hoitaa loppukäyttäjien kysymykset ja sivun tiivistykset. Vastaa portaalin "äänestä".'
    },
    {
      id: 'dev',
      name: 'Dev Architect',
      model: 'gemini-3-pro-preview',
      role: 'Content Audit & Generation',
      status: 'Standby',
      color: 'amber',
      description: 'Suunnittelee sisällön rakenteen, JSON-objektit ja auditoi portaalin aukot.'
    },
    {
      id: 'codex',
      name: 'Codex Executor',
      model: 'LLM (Internal)',
      role: 'Code & File Updates',
      status: 'Waiting',
      color: 'blue',
      description: 'Kirjoittaa teknisen koodin, Tailwind-tyylit ja toteuttaa reitityksen muutokset.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Arctic Command Center | Lapland AI Lab" 
        description="Agenttiverkoston hallinta ja portaalin arkkitehtuurin monitorointi." 
      />
      
      <Hero 
        title="Arctic Command Center"
        subtitle="Hallitse agentteja, auditoi sisältöä ja ohjaa portaalin kehitystä reaaliajassa."
        label="Dev Mode v2.3 - Global Orchestration"
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center">
            <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3 animate-pulse"></span>
            Agent Topology & Hierarchy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {agents.map(agent => (
              <button
                key={agent.id}
                onClick={() => setActiveAgent(agent.id as any)}
                className={`glass p-6 rounded-3xl text-left border transition-all transform hover:scale-105 ${
                  activeAgent === agent.id 
                    ? `border-${agent.color}-500 ring-1 ring-${agent.color}-500/50 bg-${agent.color}-500/5` 
                    : 'border-slate-800 opacity-60 hover:opacity-100'
                }`}
              >
                <div className={`text-[10px] font-bold uppercase tracking-widest mb-2 text-${agent.color}-400`}>
                  {agent.status}
                </div>
                <div className="text-white font-black text-lg mb-1">{agent.name}</div>
                <div className="text-slate-500 text-xs font-mono">{agent.model}</div>
              </button>
            ))}
          </div>

          <div className="glass p-10 rounded-[2.5rem] border border-slate-800 relative h-72 flex items-center justify-center overflow-hidden">
             <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] border-b border-slate-900/5"></div>
             
             <svg className="w-full max-w-lg relative z-10 overflow-visible" viewBox="0 0 400 120">
                <path d="M50 60 Q 125 10, 200 60" stroke="currentColor" className={`transition-opacity duration-700 ${activeAgent === 'ai' || activeAgent === 'dev' ? 'text-emerald-500 opacity-40' : 'text-slate-800 opacity-10'}`} fill="none" strokeWidth="2" strokeDasharray="4 4" />
                <path d="M200 60 Q 275 110, 350 60" stroke="currentColor" className={`transition-opacity duration-700 ${activeAgent === 'dev' || activeAgent === 'codex' ? 'text-blue-500 opacity-40' : 'text-slate-800 opacity-10'}`} fill="none" strokeWidth="2" strokeDasharray="4 4" />
                
                <g className="cursor-pointer" onClick={() => setActiveAgent('ai')}>
                  <circle cx="50" cy="60" r="15" className={`transition-all duration-500 ${activeAgent === 'ai' ? 'fill-emerald-500 shadow-xl' : 'fill-slate-800'}`} />
                  <circle cx="50" cy="60" r="25" className={`fill-emerald-500/20 transition-opacity ${activeAgent === 'ai' ? 'opacity-100 animate-ping' : 'opacity-0'}`} />
                </g>
                
                <g className="cursor-pointer" onClick={() => setActiveAgent('dev')}>
                  <circle cx="200" cy="60" r="15" className={`transition-all duration-500 ${activeAgent === 'dev' ? 'fill-amber-500 shadow-xl' : 'fill-slate-800'}`} />
                  <circle cx="200" cy="60" r="25" className={`fill-amber-500/20 transition-opacity ${activeAgent === 'dev' ? 'opacity-100 animate-ping' : 'opacity-0'}`} />
                </g>

                <g className="cursor-pointer" onClick={() => setActiveAgent('codex')}>
                  <circle cx="350" cy="60" r="15" className={`transition-all duration-500 ${activeAgent === 'codex' ? 'fill-blue-500 shadow-xl' : 'fill-slate-800'}`} />
                  <circle cx="350" cy="60" r="25" className={`fill-blue-500/20 transition-opacity ${activeAgent === 'codex' ? 'opacity-100 animate-ping' : 'opacity-0'}`} />
                </g>
             </svg>
          </div>
        </div>

        <div className="space-y-6">
          <h3 className="text-white font-black uppercase tracking-widest text-sm flex items-center">
            <span className="w-2 h-2 bg-red-500 rounded-full mr-3 animate-pulse"></span>
            Inventory Coverage
          </h3>
          <div className="glass p-8 rounded-[2.5rem] border border-slate-800 space-y-4">
            {auditResults.map(res => (
              <div key={res.category} className="flex flex-col border-b border-slate-800/30 pb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">{res.category}</span>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-slate-500 font-mono">{res.count} Mod</span>
                    <div className={`w-2 h-2 rounded-full ${
                      res.status === 'ok' ? 'bg-emerald-500' : 
                      res.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500 animate-pulse'
                    }`}></div>
                  </div>
                </div>
                {res.status !== 'ok' && (
                  <button 
                    onClick={() => triggerAgentAction(`Luo uusi moduuli kategoriaan '${res.category}'.`)}
                    className="text-[9px] text-emerald-400 hover:text-emerald-300 font-bold uppercase tracking-widest flex items-center gap-2"
                  >
                    + Lisää sisältöä
                  </button>
                )}
              </div>
            ))}
            <button 
              disabled={isScanning}
              className="w-full bg-slate-900 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 font-black py-4 rounded-2xl text-[10px] uppercase tracking-widest transition-all"
              onClick={runAudit}
            >
              {isScanning ? 'PÄIVITETÄÄN...' : 'AJA AUDITOINTI'}
            </button>
          </div>
        </div>
      </div>

      <div className="glass p-10 rounded-[3rem] border border-slate-800 relative overflow-hidden">
        <div className="flex flex-col md:flex-row gap-12 relative z-10">
          <div className="md:w-1/3">
            <div className={`text-emerald-400 font-black uppercase text-xs tracking-widest mb-4`}>
                System Diagnostic
            </div>
            <h2 className="text-4xl font-black text-white mb-6 tracking-tighter">
              {agents.find(a => a.id === activeAgent)?.name}
            </h2>
            <p className="text-slate-400 leading-relaxed mb-8">
              {agents.find(a => a.id === activeAgent)?.description}
            </p>
          </div>
          <div className="flex-grow">
            <div className="bg-black/40 p-8 rounded-3xl border border-slate-800/50 space-y-4 font-mono text-xs h-[250px] overflow-y-auto">
              <div className="text-emerald-500">[INFO] Syncing with contentRegistry.ts...</div>
              <div className="text-slate-400">Scan complete. {Object.keys(contentRegistry).length} nodes indexed.</div>
              {auditResults.filter(r => r.status === 'error').map(r => (
                <div key={r.category} className="text-red-500">[CRITICAL] Category '{r.category}' is empty. Action required.</div>
              ))}
              <div className="text-slate-600">_ Ready for input.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevDashboard;