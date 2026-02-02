
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
# BRAND IDENTITY: "Arctic Security"
- Tone: High-end, Calm, Expert. Use metaphors related to winter, ice, northern lights.
- Visuals: Slate-950, Emerald-500, Glassmorphism.
- Rules: navLabel < 20 chars. Checklists verb-first.
`;

const AUDIT_CONTEXT = `
# CURRENT AUDIT REPORT
- GAPS DETECTED: privacy and mobile categories need expansion.
- SEO NOTES: AI Safety needs terms like "adversarial attacks" and "model alignment".
`;

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDevMode, setIsDevMode] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    {role: 'assistant', content: 'Hei! Olen Lapland AI Labin virtuaalinen tietoturva-analyytikko. Miten voin auttaa sinua tänään?'}
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  // Listen for agent commands from DevDashboard
  useEffect(() => {
    const handleCommand = (event: any) => {
      const { prompt, mode } = event.detail;
      if (mode === 'dev') setIsDevMode(true);
      setIsOpen(true);
      handleSend(prompt);
    };
    window.addEventListener('agent-command', handleCommand);
    return () => window.removeEventListener('agent-command', handleCommand);
  }, []);

  const toggleDevMode = () => {
    const newMode = !isDevMode;
    setIsDevMode(newMode);
    setMessages([{
      role: 'assistant', 
      content: newMode 
        ? '🏗️ **SYSTEM ACCESS GRANTED: DEV ARCHITECT**\n\nOlen valmiina auditoimaan ja generoimaan sisältöä. Mitä kategoriaa tarkastellaan?' 
        : 'Hei! Olen Lapland AI Labin virtuaalinen tietoturva-analyytikko. Miten voin auttaa sinua tänään?'
    }]);
  };

  const getContentMap = () => {
    return Object.values(contentRegistry).map(item => 
      `- ${item.navLabel} (${item.slug}) [${item.category}]`
    ).join('\n');
  };

  const getCurrentPageContext = () => {
    const slug = location.pathname.substring(1).split('/').pop() || "";
    if (location.pathname === '/dev-dashboard') return "Sivu: Arctic Command Center (Dashboard)";
    if (location.pathname === '/business-audit') return "Sivu: Pika-auditointi";
    
    const content = contentRegistry[slug];
    if (content) {
      return isDevMode ? `EDITING CONTEXT: ${JSON.stringify(content)}` : `Olet sivulla: ${content.navLabel}.`;
    }
    return "Sivu: Kotisivu";
  };

  const getSystemInstruction = (pageContext: string) => {
    if (isDevMode) {
      return `ROLE: Lead Architect. ${BRAND_CONTEXT} ${SCHEMA_CONTEXT} ${AUDIT_CONTEXT} CONTEXT: ${pageContext} INVENTORY: ${getContentMap()} INSTRUCTION: Return valid ContentItem JSON when asked.`;
    }
    return `ROLE: Analyst. CONTEXT: ${pageContext} TONE: Calm, Helpful, Finnish. Max 4 sentences.`;
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
      
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const chat = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: getSystemInstruction(currentContext),
          temperature: isDevMode ? 0.3 : 0.7,
        },
      });

      const result = await chat.sendMessageStream({ message: messageToSend });
      let fullResponse = "";
      
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
      console.error(error);
      setMessages(prev => [...prev.slice(0, -1), { role: 'assistant', content: 'Yhteysvirhe. (API Error)' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const quickActions = isDevMode ? [
    { label: "Täytä Privacy", prompt: "Luo uusi ContentItem JSON 'privacy'-kategoriaan." },
    { label: "Luo Mobile", prompt: "Luo uusi ContentItem JSON 'mobile'-kategoriaan." },
    { label: "Validoi sivu", prompt: "Auditoi nykyinen sivu." }
  ] : [
    { label: "Tiivistä", prompt: "Tiivistä sivu 3 kohtaan." },
    { label: "Testaa", prompt: "Kysy kertauskysymys." }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative ${isDevMode ? 'bg-amber-500 shadow-amber-500/40' : 'bg-emerald-500 shadow-emerald-500/40'}`}
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>
          <svg className="w-8 h-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </button>
      ) : (
        <div className={`glass w-[350px] md:w-[450px] h-[600px] rounded-3xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border overflow-hidden ${isDevMode ? 'border-amber-500/30' : 'border-emerald-500/30'}`}>
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl z-10">
            <div className="flex items-center gap-3">
              <div className={`w-3 h-3 rounded-full animate-pulse ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
              <div>
                <span className={`font-bold block text-sm ${isDevMode ? 'text-amber-400' : 'text-emerald-400'}`}>{isDevMode ? 'Dev Architect' : 'Assistant'}</span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">{isLoading ? 'Processing...' : 'Online'}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={toggleDevMode} className={`text-[10px] font-bold px-2 py-1 rounded border ${isDevMode ? 'bg-amber-500 text-slate-900 border-amber-500' : 'text-slate-500 border-slate-700'}`}>{isDevMode ? 'DEV ON' : 'DEV OFF'}</button>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white"><svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
            </div>
          </div>
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${m.role === 'user' ? `${isDevMode ? 'bg-amber-600' : 'bg-emerald-600'} text-white` : 'bg-slate-800 text-slate-200 border border-slate-700'}`}>
                  {m.content.split('\n').map((line, i) => <span key={i} className="block min-h-[1em]">{line}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="bg-slate-900/80 p-4 space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar">
              {quickActions.map((action, idx) => (
                <button key={idx} onClick={() => handleSend(action.prompt)} disabled={isLoading} className={`px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium transition-all ${isDevMode ? 'text-amber-400 hover:border-amber-500/50' : 'text-emerald-400 hover:border-emerald-500/50'}`}>{action.label}</button>
              ))}
            </div>
            <div className="relative">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSend()} placeholder={isDevMode ? "Komenna..." : "Kysy..."} disabled={isLoading} className={`w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 ${isDevMode ? 'focus:border-amber-500 focus:ring-amber-500/20' : 'focus:border-emerald-500 focus:ring-emerald-500/20'}`} />
              <button onClick={() => handleSend()} disabled={!input.trim() || isLoading} className={`absolute right-2 top-2 p-1.5 rounded-lg ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}><svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" /></svg></button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AiAssistant;
