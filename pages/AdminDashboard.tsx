import React, { useState, useEffect } from 'react';
import { SEO } from '../components/Shared';
import { contentRegistry } from '../contentRegistry';
import { AuditSubmission } from '../types';
import MaturityRadar from '../components/MaturityRadar';
import { GoogleGenAI } from "@google/genai";

const AdminDashboard: React.FC = () => {
  const [submissions, setSubmissions] = useState<AuditSubmission[]>([]);
  const [aiSummary, setAiSummary] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  
  const items = Object.values(contentRegistry);
  const categories = ['kyber', 'ai', 'mobile', 'crisis', 'privacy', 'routines'];
  
  const stats = categories.map(cat => ({
    name: cat,
    count: items.filter(i => i.category === cat).length
  }));

  useEffect(() => {
    const saved = localStorage.getItem('audit_submissions');
    if (saved) {
      const parsed = JSON.parse(saved);
      setSubmissions(parsed);
      if (parsed.length > 0) {
        generateAiSummary(parsed);
      }
    }
  }, []);

  const generateAiSummary = async (data: AuditSubmission[]) => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = `Tässä on lista organisaatioiden tietoturva-auditoinneista (pisteet 0-20): ${JSON.stringify(data)}. 
      Analysoi tulokset ja anna lyhyt, 2-3 lauseen asiantuntijayhteenveto yleisimmistä heikkouksista ja mihin pääkehittäjän tulisi keskittyä seuraavaksi "Arctic Hardening" -viitekehyksen näkökulmasta. Vastaa suomeksi asiantuntevalla sävyllä.`;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      setAiSummary(response.text || 'Analyysi epäonnistui.');
    } catch (error) {
      console.error("AI Analysis error:", error);
      setAiSummary('AI-analyysia ei voitu luoda juuri nyt arktisen yhteysvirheen vuoksi.');
    } finally {
      setIsGenerating(false);
    }
  };

  const averageScore = submissions.length > 0 
    ? submissions.reduce((acc, curr) => acc + curr.totalScore, 0) / submissions.length 
    : 0;

  const logs = [
    { id: 1, time: '11:20', event: 'Arctic Data Vault: Integrity check passed', status: 'ok' },
    { id: 2, time: '10:45', event: 'New content: ai-system-resilience published', status: 'new' },
    { id: 3, time: '09:12', event: 'Privacy deep-dive: Invisible memory module updated', status: 'new' },
    { id: 4, time: 'Eilen', event: 'Global opt-out policy forced for all LLM connectors', status: 'security' },
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
          <div className="glass px-6 py-3 rounded-2xl border-emerald-500/20 status-badge-glow">
            <span className="text-[10px] text-slate-500 uppercase block font-bold">System Status</span>
            <span className="text-emerald-400 font-black flex items-center gap-2">
              <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
              OPERATIONAL
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 glass p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center">
          <h3 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-6">Maturity Average</h3>
          <MaturityRadar score={averageScore} />
        </div>
        <div className="lg:col-span-3 space-y-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {stats.map(s => (
              <div key={s.name} className="glass p-6 rounded-3xl border-slate-800 flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-black text-white mb-1">{s.count}</span>
                <span className="text-[10px] text-slate-500 uppercase font-black tracking-widest">{s.name}</span>
              </div>
            ))}
          </div>

          {/* AI Strategy Box */}
          <div className="glass p-8 rounded-[2.5rem] border-blue-500/20 bg-blue-500/5 shadow-inner">
             <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                   <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                   </svg>
                </div>
                <h3 className="text-xs font-black text-blue-400 uppercase tracking-widest">AI Strategic Analytics</h3>
             </div>
             <div className="text-sm text-slate-300 leading-relaxed italic font-medium">
                {isGenerating ? (
                  <span className="animate-pulse flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-400 rounded-full animate-bounce"></span>
                    Generoidaan arktista analyysia...
                  </span>
                ) : aiSummary || "Ei tarpeeksi auditointidataa strategista analyysia varten."}
             </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="glass rounded-[2.5rem] border-slate-800 overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/40">
              <div>
                <h3 className="text-xl font-black text-white">Vastaanotetut auditoinnit</h3>
                <p className="text-[10px] text-slate-500 uppercase font-bold tracking-widest mt-1">Lead Developer Review Queue</p>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="bg-slate-900/50 text-slate-500 uppercase text-[10px] font-black tracking-widest border-b border-slate-800">
                    <th className="px-8 py-4">Aikaleima</th>
                    <th className="px-8 py-4">Pisteluku</th>
                    <th className="px-8 py-4">Taso</th>
                    <th className="px-8 py-4 text-right">Toiminnot</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {submissions.length > 0 ? (
                    submissions.map(sub => (
                      <tr key={sub.id} className="hover:bg-slate-800/30 transition-colors group">
                        <td className="px-8 py-6">
                          <div className="text-white font-bold">{new Date(sub.timestamp).toLocaleString('fi-FI')}</div>
                          <div className="text-[10px] text-slate-600 font-mono uppercase">ID: {sub.id}</div>
                        </td>
                        <td className="px-8 py-6 text-white font-black text-xl">
                          {sub.totalScore} / 20
                        </td>
                        <td className="px-8 py-6">
                          <span className="px-3 py-1 bg-slate-800 rounded-full text-[10px] font-black text-slate-300 uppercase tracking-widest border border-white/5">
                            {sub.level}
                          </span>
                        </td>
                        <td className="px-8 py-6 text-right space-x-3">
                          <button className="text-emerald-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors">Avaa</button>
                          <button 
                            onClick={() => archiveSubmission(sub.id)}
                            className="text-red-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                          >
                            Arkistoi
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={4} className="px-8 py-20 text-center text-slate-600 font-bold uppercase tracking-widest text-xs italic">
                        Ei saapuneita auditointeja.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

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