
import React, { useState, useEffect } from 'react';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';
import { AuditSubmission } from '../types';

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<AuditSubmission[]>([]);
  const items = Object.values(contentRegistry);
  const categories = ['kyber', 'ai', 'mobile', 'crisis', 'privacy', 'routines'];
  
  const stats = categories.map(cat => ({
    name: cat,
    count: items.filter(i => i.category === cat).length
  }));

  useEffect(() => {
    const saved = localStorage.getItem('audit_submissions');
    if (saved) {
      setSubmissions(JSON.parse(saved));
    }
  }, []);

  const logs = [
    { id: 1, time: '11:20', event: 'Arctic Data Vault: Integrity check passed', status: 'ok' },
    { id: 2, time: '10:45', event: 'New content: ai-system-resilience published', status: 'new' },
    { id: 3, time: '09:12', event: 'Privacy deep-dive: Invisible memory module updated', status: 'new' },
    { id: 4, time: 'Eilen', event: 'Global opt-out policy forced for all LLM connectors', status: 'security' },
    { id: 5, time: 'Eilen', event: 'MFA failure threshold reached (IP: 192.168.x.x)', status: 'warning' },
    { id: 6, time: 'Eilen', event: 'Offline backup sync successful: 72h readiness active', status: 'ok' },
  ];

  const archiveSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('audit_submissions', JSON.stringify(updated));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO title="Admin Dashboard | Lapland AI Lab" description="Hallintapaneeli ja järjestelmän auditointi." />
      
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <span className="text-amber-500 font-bold tracking-widest uppercase text-xs mb-4 block">System Administration</span>
          <h1 className="text-5xl font-black text-white tracking-tighter">
            Arctic <span className="aurora-text">Command Center</span>
          </h1>
        </div>
        <div className="flex gap-4">
          <div className="glass px-6 py-3 rounded-2xl border-emerald-500/20">
            <span className="text-[10px] text-slate-500 uppercase block font-bold">System Status</span>
            <span className="text-emerald-400 font-black flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {stats.map(s => (
          <div key={s.name} className="glass p-6 rounded-3xl border-slate-800 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-black text-white mb-1">{s.count}</span>
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{s.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Vastaanotetut auditoinnit - Pääkehittäjän näkymä */}
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[2.5rem] border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/40">
              <div>
                <h3 className="text-xl font-black text-white">Vastaanotetut auditoinnit</h3>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Lead Developer Review Queue</p>
              </div>
              <span className="bg-emerald-500/10 text-emerald-400 text-[10px] font-black px-3 py-1 rounded-full border border-emerald-500/20 uppercase">
                {submissions.length} uutta
              </span>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-800">
                    <th className="px-8 py-4">Aikaleima</th>
                    <th className="px-8 py-4">Tulos</th>
                    <th className="px-8 py-4">Taso</th>
                    <th className="px-8 py-4 text-right">Toiminnot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {submissions.length > 0 ? (
                    submissions.map(sub => (
                      <tr key={sub.id} className="hover:bg-slate-800/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="text-white font-bold">{sub.timestamp}</div>
                          <div className="text-[10px] text-slate-600 font-mono">ID: {sub.id}</div>
                        </td>
                        <td className="px-8 py-6">
                          <div className={`text-xl font-black ${
                            sub.score >= 16 ? 'text-emerald-400' : sub.score >= 9 ? 'text-yellow-400' : 'text-red-400'
                          }`}>
                            {sub.score} / 20
                          </div>
                        </td>
                        <td className="px-8 py-6">
                          <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-1 rounded border ${
                            sub.score >= 16 ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 
                            sub.score >= 9 ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' : 
                            'bg-red-500/10 border-red-500/20 text-red-400'
                          }`}>
                            {sub.level}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right space-x-3">
                          <button className="text-slate-500 hover:text-white transition-colors" title="Avaa raportti">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => archiveSubmission(sub.id)}
                            className="text-slate-500 hover:text-red-400 transition-colors" 
                            title="Arkistoi"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-20 text-center">
                        <div className="text-slate-600 font-bold uppercase tracking-widest text-xs italic">
                          Ei uusia auditointeja jonossa.
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sisältöinventaario - Säilytetty aiemmasta */}
          <div className="glass rounded-[2.5rem] border-slate-800 overflow-hidden shadow-2xl opacity-60">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-black text-white">Sisältöinventaario (PDF Sync)</h3>
            </div>
            <div className="p-8 text-xs text-slate-500 italic">
              Yhteensä {items.length} julkaistua moduulia. Kaikki synkronoitu P1-lähdemateriaalin kanssa.
            </div>
          </div>
        </div>

        {/* Audit Logs */}
        <div className="space-y-6">
          <div className="glass p-8 rounded-[2.5rem] border-slate-800 shadow-2xl h-full">
            <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
              <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Audit Trail
            </h3>
            <div className="space-y-6">
              {logs.map(log => (
                <div key={log.id} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      log.status === 'warning' ? 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]' : 
                      log.status === 'security' ? 'bg-amber-500' : 
                      log.status === 'new' ? 'bg-blue-500' : 'bg-slate-700'
                    }`}></div>
                    <div className="w-px flex-grow bg-slate-800 my-2"></div>
                  </div>
                  <div className="pb-4">
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{log.time}</div>
                    <p className={`text-xs font-medium ${log.status === 'warning' ? 'text-red-400' : log.status === 'new' ? 'text-blue-400' : 'text-slate-300'}`}>
                      {log.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
