import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { AuditSubmission } from '../types';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Tervetuloa Lapland AI Labin valvontakeskukseen. Olen Arctic Hardening -asiantuntijasi. Miten voin auttaa organisaatiotasi tänään?'}
  ]);
  const [input, setInput] = useState('');
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async (text: string) => {
    if (!text.trim()) return;
    
    const userMessage = text.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsTyping(true);

    try {
      // Haetaan käyttäjän viimeisin auditointi kontekstiksi (Source of Truth v1.8)
      const submissionsRaw = localStorage.getItem('audit_submissions');
      const submissions: AuditSubmission[] = submissionsRaw ? JSON.parse(submissionsRaw) : [];
      
      // Valitaan uusin auditointi timestampin perusteella
      const latestAudit = submissions.length > 0 
        ? submissions.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())[0]
        : null;
      
      const auditContext = latestAudit 
        ? `Käyttäjä on juuri tehnyt auditoinnin ja saanut pisteet ${latestAudit.totalScore}/20. Hänen tasonsa on ${latestAudit.level}. Anna tähän pohjautuvia täsmävinkkejä.` 
        : "Käyttäjä ei ole vielä tehnyt auditointia.";

      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: `Toimit Lapland AI Labin kyberturvallisuus- ja AI-hallinta-asiantuntijana. 
          ${auditContext}
          Vastaat käyttäjän kysymyksiin "Arctic Hardening" -viitekehyksen mukaisesti. 
          Painota resilienssiä, datan suvereniteettia ja nollaluottamusta. 
          Jos käyttäjällä on matalat auditointipisteet, ole kannustava mutta painota kriittisiä korjauksia kuten MFA:ta.
          Vastaa suomeksi, ole asiantunteva ja käytännönläheinen.`,
          temperature: 0.7,
        },
      });

      const aiText = response.text || "Yhteysvirhe. Järjestelmä on palautunut offline-tilaan.";
      setMessages(prev => [...prev, { role: 'assistant', content: aiText }]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, { role: 'assistant', content: "Pahoittelut, arktinen yhteys pätkii. Yritä hetken kuluttua uudelleen." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-slate-900 rounded-2xl flex items-center justify-center shadow-2xl hover:scale-105 transition-all border border-emerald-500/20 group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 animate-pulse"></div>
          <svg className="w-8 h-8 text-emerald-400 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        </button>
      ) : (
        <div className="glass w-[380px] md:w-[450px] h-[600px] rounded-[2.5rem] flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/5 flex justify-between items-center bg-slate-950/80">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_#10b981]"></div>
              <div>
                <span className="font-black block text-xs text-white uppercase tracking-widest">Arctic Guardian AI</span>
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Context Aware v1.8</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 no-scrollbar bg-slate-900/20">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-3xl text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-slate-950 font-bold rounded-tr-none' 
                    : 'bg-slate-800/80 text-slate-200 rounded-tl-none border border-white/5'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-slate-800/80 p-4 rounded-3xl rounded-tl-none border border-white/5 flex gap-1">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-slate-950 border-t border-white/5">
            <div className="relative">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend(input)}
                placeholder="Kysy personoituja vinkkejä..."
                className="w-full bg-slate-900 border border-white/10 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition-all font-medium"
              />
              <button 
                onClick={() => handleSend(input)}
                disabled={isTyping || !input.trim()}
                className="absolute right-2 top-2 w-10 h-10 bg-emerald-500 rounded-xl flex items-center justify-center text-slate-950 hover:bg-emerald-400 transition-all disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;