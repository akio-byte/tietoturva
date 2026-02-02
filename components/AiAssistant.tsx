import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { contentRegistry } from '../contentRegistry';

// 1. EXACT SCHEMA DEFINITION (From Screenshot 5)
const SCHEMA_CONTEXT = `
// STRICT INTERFACE DEFINITION
interface ContentItem {
  slug: string; // URL-friendly ID (e.g., "arctic-mobile-hardening")
  category: 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';
  featured: boolean;
  navLabel: string; // Max 20 chars!
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<{ title: string; body: string }>;
  checklist: string[]; // Min 3 concrete steps
  cta: { text: string; route: string | null };
}
`;

// 2. DESIGN & BRAND CONTEXT (From Screenshot 3 & 4)
const BRAND_CONTEXT = `
# BRAND IDENTITY: "Arctic Security"
- Tone: High-end, Calm, Expert. Use metaphors related to winter, ice, northern lights, or survival where appropriate, but keep it technical.
- Visuals: Slate-950 (darkness), Emerald-500 (aurora/safety), Glassmorphism.
- Rules: 
  - navLabel must be under 20 characters.
  - Checklists must be concrete actions (verb-first).
  - CTA buttons should usually be emerald-500 to maintain conversion continuity.
`;

// 3. AUDIT FINDINGS (From Screenshot 6)
const AUDIT_CONTEXT = `
# CURRENT AUDIT REPORT
- GAPS DETECTED: 
  - 'privacy' category is empty.
  - 'mobile' category needs deep-dive content (e.g. "arctic-mobile-hardening").
  - 'crisis' category relies on a single page.
- SEO NOTES: 
  - AI Safety needs terms like "adversarial attacks" and "model alignment".
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

  const toggleDevMode = () => {
    const newMode = !isDevMode;
    setIsDevMode(newMode);
    setMessages([{
      role: 'assistant', 
      content: newMode 
        ? '🏗️ **SYSTEM ACCESS GRANTED: DEV ARCHITECT**\n\nOlen ladannut auditointiraportin ja ContentItem-skeeman. Tietokannassa havaittu puutteita kategorioissa: **Privacy** ja **Mobile**.\n\nGeneroidaanko puuttuva sisältö?' 
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
    
    if (location.pathname === '/business-audit') return "Sivu: Pika-auditointi (Lomake)";
    if (location.pathname === '/cyber-basics') return "Sivu: Kyberperusteet (Staattinen)";
    if (location.pathname === '/') return "Sivu: Etusivu";

    const content = contentRegistry[slug];
    if (content) {
      if (isDevMode) {
        return `EDITING CONTEXT: ${JSON.stringify(content, null, 2)}`;
      } else {
        return `
          Olet sivulla: "${content.navLabel}".
          Tiivistelmä: ${content.hero.subtitle}.
          Sisältö: ${content.sections.map(s => s.title + ": " + s.body).join(' | ')}.
          Tehtävät: ${content.checklist.join(', ')}.
        `;
      }
    }
    return "Sivu: Tuntematon";
  };

  const getSystemInstruction = (pageContext: string) => {
    if (isDevMode) {
      return `
      ROLE: Lead Architect & Content Strategist for Lapland AI Lab.
      
      YOUR TASK: Validate, audit, and generate content that fits the "Arctic Security" brand.
      
      ${BRAND_CONTEXT}
      
      ${SCHEMA_CONTEXT}
      
      ${AUDIT_CONTEXT}
      
      CURRENT PAGE CONTEXT:
      ${pageContext}
      
      EXISTING CONTENT INVENTORY:
      ${getContentMap()}
      
      INSTRUCTIONS FOR GENERATION:
      1. When asked for JSON, return ONLY the JSON object. No markdown wrappers unless requested.
      2. Ensure strict adherence to TypeScript interface.
      3. Use the 'Arctic Security' tone (Professional, Calm, Expert).
      `;
    }

    return `
    ROLE: Lapland AI Lab Virtual Analyst.
    CONTEXT: ${pageContext}
    INSTRUCTIONS: Answer questions based on page content. Tone: Calm, Helpful, Finnish language. Keep answers short (max 4 sentences).
    `;
  };

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input;
    if (!messageToSend.trim() || isLoading) return;

    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: messageToSend }]);
    setIsLoading(true);

    try {
      const currentContext = getCurrentPageContext();
      
      setMessages(prev => [...prev, { role: 'assistant', content: '' }]);

      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: messageToSend,
          systemInstruction: getSystemInstruction(currentContext),
          temperature: isDevMode ? 0.3 : 0.7,
        }),
      });

      if (!response.ok) {
        throw new Error('AI request failed');
      }

      const data = await response.json() as { text?: string };
      const fullResponse = data.text?.trim() || 'Vastaus jäi tyhjäksi.';

      setMessages(prev => {
        const newMsgs = [...prev];
        newMsgs[newMsgs.length - 1] = { role: 'assistant', content: fullResponse };
        return newMsgs;
      });

    } catch (error) {
      console.error(error);
      setMessages(prev => {
        const newMsgs = prev.slice(0, -1); 
        return [...newMsgs, { role: 'assistant', content: 'Yhteyshäiriö tunturissa. (API Error)' }];
      });
    } finally {
      setIsLoading(false);
    }
  };

  const userQuickActions = [
    { label: "Tiivistä tämä sivu", prompt: "Tiivistä tämän sivun tärkeimmät opit 3 ranskalaiseen viivaan." },
    { label: "Testaa minua", prompt: "Kysy yksi monivalintakysymys (A,B,C) liittyen tähän sivuun." },
    { label: "Selitä termit", prompt: "Selitä sivun vaikeimmat termit yksinkertaisesti." }
  ];

  // Updated Dev Actions based on Screenshots
  const devQuickActions = [
    { 
      label: "Täytä Privacy-aukko", 
      prompt: "Luo uusi ContentItem JSON 'privacy'-kategoriaan. Aihe: 'Tietosuoja ja AI-mallien opetus'. Varmista: 3 konkreettista checklist-kohtaa (Anonymisointi, Minimointi, Lokit). NavLabel < 20 merkkiä." 
    },
    { 
      label: "Luo Arctic Mobile", 
      prompt: "Luo ContentItem JSON slugilla 'arctic-mobile-hardening'. Kategoria: 'mobile'. Teema: Mobiiliturva pakkasessa ja äärioloissa. Tone: Arctic Security." 
    },
    { 
      label: "Validoi sivu", 
      prompt: "Analysoi nykyinen sivu: Vastaako se 'Arctic Security' brändiä? Onko checklist konkreettinen? Onko CTA houkutteleva?" 
    }
  ];

  const quickActions = isDevMode ? devQuickActions : userQuickActions;
  const borderColor = isDevMode ? 'border-amber-500' : 'border-emerald-500';

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative ${isDevMode ? 'bg-amber-500 shadow-amber-500/40' : 'bg-emerald-500 shadow-emerald-500/40'}`}
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-slate-950"></div>
          
          {isDevMode ? (
             <svg className="w-8 h-8 text-slate-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
             </svg>
          ) : (
            <svg className="w-8 h-8 text-slate-950 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          )}
        </button>
      ) : (
        <div className={`glass w-[350px] md:w-[450px] h-[600px] rounded-3xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border overflow-hidden ${borderColor} border-opacity-30`}>
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className={`w-3 h-3 rounded-full animate-pulse ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
              </div>
              <div>
                <span className={`font-bold block text-sm ${isDevMode ? 'text-amber-400' : 'aurora-text'}`}>
                  {isDevMode ? 'Dev Architect' : 'Lapland AI Analyst'}
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  {isLoading ? 'Processing...' : isDevMode ? 'System Access' : 'Online'}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button 
                onClick={toggleDevMode}
                className={`text-[10px] font-bold px-2 py-1 rounded border transition-colors ${
                  isDevMode 
                  ? 'bg-amber-500 text-slate-900 border-amber-500' 
                  : 'text-slate-500 border-slate-700 hover:text-white'
                }`}
              >
                {isDevMode ? 'DEV ON' : 'DEV OFF'}
              </button>
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Chat Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-6 scroll-smooth">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}>
                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-lg ${
                  m.role === 'user' 
                    ? `${isDevMode ? 'bg-amber-600' : 'bg-emerald-600'} text-white rounded-tr-none` 
                    : 'bg-slate-800/90 text-slate-200 rounded-tl-none border border-slate-700/50'
                }`}>
                  {m.content.split('\n').map((line, i) => (
                    <span key={i} className={`block min-h-[1em] ${line.startsWith('```') || line.startsWith('    ') ? 'font-mono text-xs bg-black/30 p-2 rounded my-1 overflow-x-auto' : ''}`}>
                      {line}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {isLoading && messages[messages.length - 1]?.role !== 'assistant' && (
              <div className="flex justify-start">
                <div className="bg-slate-800/50 p-4 rounded-2xl rounded-tl-none border border-slate-700/50 flex gap-2">
                  <div className={`w-2 h-2 rounded-full animate-bounce ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce [animation-delay:-0.15s] ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                  <div className={`w-2 h-2 rounded-full animate-bounce [animation-delay:-0.3s] ${isDevMode ? 'bg-amber-500' : 'bg-emerald-500'}`}></div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions & Input */}
          <div className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 p-4 space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
              {quickActions.map((action, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(action.prompt)}
                  disabled={isLoading}
                  className={`whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 hover:bg-slate-700 text-xs font-medium transition-all disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 ${
                    isDevMode ? 'text-amber-400 hover:border-amber-500/50' : 'text-emerald-400 hover:border-emerald-500/50'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>

            <div className="relative">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.isComposing) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder={isDevMode ? "Komenna (esim. 'Luo uusi JSON')..." : "Kysy tietoturvasta..."}
                disabled={isLoading}
                className={`w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 transition-all text-slate-200 placeholder-slate-500 disabled:opacity-50 ${
                  isDevMode ? 'focus:border-amber-500 focus:ring-amber-500/20' : 'focus:border-emerald-500 focus:ring-emerald-500/20'
                }`}
              />
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim() || isLoading}
                className={`absolute right-2 top-2 p-1.5 text-slate-950 rounded-lg transition-colors disabled:opacity-0 disabled:scale-75 transform duration-200 ${
                  isDevMode ? 'bg-amber-500 hover:bg-amber-400' : 'bg-emerald-500 hover:bg-emerald-400'
                }`}
              >
                <svg className="w-5 h-5 rotate-90" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
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
