
import React from 'react';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';

const AdminDashboard: React.FC = () => {
  const items = Object.values(contentRegistry);
  const categories = ['kyber', 'ai', 'mobile', 'crisis', 'privacy', 'routines'];
  
  const stats = categories.map(cat => ({
    name: cat,
    count: items.filter(i => i.category === cat).length
  }));

  const logs = [
    { id: 1, time: '10:45', event: 'Audit log rotation successful', status: 'ok' },
    { id: 2, time: '09:12', event: 'New content: privacy-ai-training published', status: 'new' },
    { id: 3, time: 'Eilen', event: 'Global opt-out policy forced for all LLM connectors', status: 'security' },
    { id: 4, time: 'Eilen', event: 'MFA failure threshold reached (IP: 192.168.x.x)', status: 'warning' },
  ];

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

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
        {stats.map(s => (
          <div key={s.name} className="glass p-6 rounded-3xl border-slate-800 flex flex-col items-center justify-center text-center">
            <span className="text-3xl font-black text-white mb-1">{s.count}</span>
            <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{s.name}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Content Inventory */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass rounded-[2.5rem] border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center">
              <h3 className="text-xl font-black text-white">Sisältöinventaario</h3>
              <button className="text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors uppercase tracking-widest">Lataa raportti</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 uppercase text-[10px] font-black tracking-widest">
                    <th className="px-8 py-4">Slug / Nav Label</th>
                    <th className="px-8 py-4">Kategoria</th>
                    <th className="px-8 py-4">Status</th>
                    <th className="px-8 py-4 text-right">Toiminnot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {items.map(item => (
                    <tr key={item.slug} className="hover:bg-slate-800/30 transition-colors">
                      <td className="px-8 py-4">
                        <div className="font-bold text-white">{item.navLabel}</div>
                        <div className="text-[10px] text-slate-500 font-mono">{item.slug}</div>
                      </td>
                      <td className="px-8 py-4">
                        <span className="px-2 py-1 rounded-md bg-slate-800 text-[10px] font-bold text-slate-400 uppercase">
                          {item.category}
                        </span>
                      </td>
                      <td className="px-8 py-4">
                        {item.featured ? (
                          <span className="text-emerald-400 text-[10px] font-black uppercase tracking-widest">Featured</span>
                        ) : (
                          <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest">Standard</span>
                        )}
                      </td>
                      <td className="px-8 py-4 text-right">
                        <button className="text-slate-400 hover:text-white transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
                      log.status === 'security' ? 'bg-amber-500' : 'bg-slate-700'
                    }`}></div>
                    <div className="w-px flex-grow bg-slate-800 my-2"></div>
                  </div>
                  <div className="pb-4">
                    <div className="text-[10px] font-black text-slate-600 uppercase tracking-widest mb-1">{log.time}</div>
                    <p className={`text-xs font-medium ${log.status === 'warning' ? 'text-red-400' : 'text-slate-300'}`}>
                      {log.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white font-bold py-3 rounded-xl transition-all text-xs uppercase tracking-widest border border-slate-700">
              View All Logs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
