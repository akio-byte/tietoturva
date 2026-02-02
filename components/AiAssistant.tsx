import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { contentRegistry } from '../contentRegistry';

const SCHEMA_CONTEXT = `
interface ContentItem {
  slug: string;
  category: 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';
  featured: boolean;
  navLabel: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<{ title: string; body: string }>;
  checklist: string[];
  cta: { text: string; route: string | null };
}
`;

const BRAND_CONTEXT = `
# BRAND: "Arctic Security"
- Tone: High-end, Calm, Expert.
- Visuals: Slate-950, Emerald-500, Glassmorphism.
- Arctic metaphors required (winter, ice, northern lights, survival).
`;

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Hei! Olen Lapland AI Labin virtuaalinen tietoturva-analyytikko.'}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, isLoading]);

  const toggleDevMode = () => {
    const newMode = !isDevMode;
    setIsDevMode(newMode);
    
    // Dynaaminen auditointiraportti analyysia varten
    const privacyCount = Object.values(contentRegistry).filter(i => i.category === 'privacy').length;
    const mobileCount = Object.values(contentRegistry).filter(i => i.category === 'mobile').length;
    
    let report = '🏗️ **DEV ARCHITECT: LIVE AUDIT**\n\n';
    if (privacyCount < 2) report += '⚠️ **PRIVACY-AUKKO:** Tietosuoja-osio kaipaa syvempää sisältöä.\n';
    if (mobileCount < 2) report += '⚠️ **MOBILE-AUKKO:** Arctic Hardening -ohjeistus puuttuu.\n';
    report += '\nValmiina generoimaan uutta sisältöä SoT-standardin mukaisesti.';

    setMessages([{ role: 'assistant', content: newMode ? report : 'Hei! Olen Lapland AI Labin analyytikko.' }]);
  };

  const getCurrentPageContext = () => {
    const slug = location.pathname.split('/').pop() || "";
    const content = contentRegistry[slug];
    if (content) return isDevMode ? `EDITING: ${JSON.stringify(content)}` : `Sivu: ${content.navLabel}`;
    return `Sivu: ${location.pathname}`;
  };

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const currentContext = getCurrentPageContext();
      
      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: isDevMode 
            ? `ROLE: Senior Architect. Brand: ${BRAND_CONTEXT}. Schema: ${SCHEMA_CONTEXT}. Tasks: Focus on Privacy and Mobile gaps. Registry size: ${Object.keys(contentRegistry).length} items.` 
            : `ROLE: Security Analyst. Context: ${currentContext}. Answer in Finnish.`,
        },
      });

      const result = await chat.sendMessageStream({ message: messageToSend });
      let fullResponse = "";
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      for await (const chunk of result) {
        const c = chunk as GenerateContentResponse;
        if (c.text) {
          fullResponse += c.text;
          setMessages(prev => {
            const newMsgs = [...prev];
            newMsgs[newMsgs.length - 1] = { role: 'assistant', content: fullResponse };
            return newMsgs;
          });
        }
      }
    } catch (error) {
      setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: 'Yhteysvirta katkesi tunturissa.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const devQuickActions = [
    { label: "Auditointi", prompt: "Analysoi koko contentRegistry: missä on heikoimmat lenkit ja mitä kategoriaa pitäisi vahvistaa seuraavaksi?" },
    { label: "Luo Hardening", prompt: "Luo uusi ContentItem JSON slugilla 'arctic-mobile-hardening'. Kategoria: 'mobile'. Teema: Mobiiliturva äärioloissa. Tone: Arctic Security." },
    { label: "Luo Privacy", prompt: "Luo uusi ContentItem JSON 'privacy'-kategoriaan aiheesta 'GDPR ja Tekoäly: Käytännön opas'." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform ${isDevMode ? 'bg-amber-500 shadow-amber-500/40' : 'bg-emerald-500 shadow-emerald-500/40'}`}
        >
          {isDevMode ? (
             <svg className="w-8 h-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
          ) : (
            <svg className="w-8 h-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
          )}
        </button>
      ) : (
        <div className={`glass w-[400px] h-[600px] rounded-3xl flex flex-col shadow-2xl border ${isDevMode ? 'border-amber-500/30' : 'border-emerald-500/30'} overflow-hidden`}>
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full animate-pulse ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
              <div>
                <span className={`font-bold block text-sm ${isDevMode ? 'text-amber-400' : 'aurora-text'}`}>
                  {isDevMode ? 'Dev Architect' : 'Arctic Analyst'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleDevMode} className={`text-[10px] font-bold px-2 py-1 rounded border ${isDevMode ? 'bg-amber-500 text-slate-900 border-amber-500' : 'text-slate-500 border-slate-700'}`}>
                {isDevMode ? 'DEV ON' : 'DEV OFF'}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>
          
          {/* Chat Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6 scroll-smooth">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? (isDevMode ? 'bg-amber-600' : 'bg-emerald-600') + ' text-white rounded-tr-none' : 'bg-slate-800/90 text-slate-200 rounded-tl-none border border-slate-700/50'}`}>
                  {m.content.split('\n').map((line, i) => (
                    <span key={i} className={`block min-h-[1.2em] ${line.startsWith('```') ? 'font-mono text-xs bg-black/30 p-2 rounded' : ''}`}>{line}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 p-4 space-y-3">
            {isDevMode && (
              <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
                {devQuickActions.map((action, idx) => (
                  <button key={idx} onClick={() => handleSend(action.prompt)} className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-amber-400 text-xs hover:border-amber-500 transition-all">{action.label}</button>
                ))}
              </div>
            )}
            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isDevMode ? "Suorita koodi- tai sisältötehtävä..." : "Kysy tietoturvasta..."}
                className={`w-full bg-slate-950 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 ${isDevMode ? 'focus:border-amber-500 focus:ring-amber-500/20' : 'focus:border-emerald-500 focus:ring-emerald-500/20'}`}
              />
              <button onClick={() => handleSend()} className={`absolute right-2 top-2 p-1.5 rounded-lg ${isDevMode ? 'bg-amber-500 text-slate-950' : 'bg-emerald-500 text-slate-950'}`}>
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;