import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Hei! Olen Lapland AI Labin automaattinen tietoturva-avustaja. Toimin tällä hetkellä offline-tilassa (Governance Mode).'}
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = (text: string) => {
    setMessages(prev => [...prev, { role: 'user', content: text }]);
    
    // Static responses based on keywords
    setTimeout(() => {
      let response = "Järjestelmä on staattisessa auditointitilassa. AI-ominaisuudet on poistettu käytöstä tietoturvasyistä.";
      
      const lowerText = text.toLowerCase();
      if (lowerText.includes('audit')) {
        response = "Auditointiraportti on saatavilla osoitteessa /audit. Se sisältää teknisen katsauksen järjestelmän tilaan.";
      } else if (lowerText.includes('agent') || lowerText.includes('säännöt')) {
        response = "Kehittäjäsäännöt (AGENT.md) löytyvät Hallinto-sivulta (/governance).";
      } else if (lowerText.includes('github') || lowerText.includes('repo')) {
        response = "Tämä projekti on optimoitu GitHub Pages -jakeluun ilman backend-riippuvuuksia.";
      }

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 500);
  };

  const quickActions = [
    { label: "Näytä Audit-status", prompt: "Mikä on auditoinnin tila?" },
    { label: "Kehittäjäsäännöt", prompt: "Missä ovat agentin säännöt?" },
    { label: "Järjestelmätiedot", prompt: "Kerro repositoriosta." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-slate-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border border-slate-600 group"
        >
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
          <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </button>
      ) : (
        <div className="glass w-[350px] md:w-[450px] h-[500px] rounded-3xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border border-slate-700 overflow-hidden">
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
              <div>
                <span className="font-bold block text-sm text-slate-200">Governance Bot</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider">System Secure</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                    ? 'bg-emerald-600 text-white rounded-tr-none' 
                    : 'bg-slate-800 text-slate-300 rounded-tl-none border border-slate-700'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
          </div>

          <div className="bg-slate-900/90 p-4 border-t border-slate-800 space-y-3">
             <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action.prompt)}
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:border-emerald-500/50 text-xs text-slate-400 hover:text-emerald-400 transition-all flex-shrink-0"
                >
                  {action.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;