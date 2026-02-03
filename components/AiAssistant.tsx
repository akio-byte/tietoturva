import React, { useState } from 'react';

const STATIC_MESSAGES = [
  {
    title: 'Staattinen tila',
    body: 'Tämä avustaja toimii tällä hetkellä staattisena tietoikkunana ilman API-kutsuja.',
  },
  {
    title: 'Mitä osaan',
    body: 'Voin ohjata sinut kyberturvan, mobiiliturvan ja AI-turvallisuuden sisältöihin.',
  },
  {
    title: 'Seuraavat askeleet',
    body: 'Tutustu oppaan osioihin ja käytä checklistiä käytännön toimenpiteissä.',
  },
];

const AiAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const quickActions = ['Tiivistä tämä sivu', 'Selitä termit', 'Näytä checklist'];

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group relative bg-emerald-500 shadow-emerald-500/40"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-300 rounded-full border-2 border-slate-950"></div>
          <svg className="w-8 h-8 text-slate-950 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        </button>
      ) : (
        <div className="glass w-[350px] md:w-[450px] h-[520px] rounded-3xl flex flex-col shadow-2xl animate-in slide-in-from-bottom-10 border overflow-hidden border-emerald-500 border-opacity-30">
          {/* Header */}
          <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/80 backdrop-blur-xl z-10">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-3 h-3 rounded-full animate-pulse bg-emerald-500"></div>
              </div>
              <div>
                <span className="font-bold block text-sm aurora-text">
                  Lapland AI Analyst
                </span>
                <span className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">
                  Static Mode
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Chat Area */}
          <div className="flex-grow overflow-y-auto p-4 space-y-6 scroll-smooth">
            {STATIC_MESSAGES.map((message) => (
              <div key={message.title} className="flex justify-start animate-in fade-in slide-in-from-bottom-2 duration-300">
                <div className="max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-lg bg-slate-800/90 text-slate-200 rounded-tl-none border border-slate-700/50">
                  <span className="block text-emerald-300 font-semibold mb-2">{message.title}</span>
                  <span className="block text-slate-300">{message.body}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions & Input */}
          <div className="bg-slate-900/80 backdrop-blur-xl border-t border-slate-800 p-4 space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
              {quickActions.map((action) => (
                <button
                  key={action}
                  disabled
                  className="whitespace-nowrap px-3 py-1.5 rounded-lg bg-slate-800 border border-slate-700 text-xs font-medium transition-all disabled:opacity-60 disabled:cursor-not-allowed flex-shrink-0 text-emerald-400"
                >
                  {action}
                </button>
              ))}
            </div>

            <div className="relative">
              <input 
                type="text" 
                placeholder="Staattinen tila (ei syöttöä)"
                disabled
                className="w-full bg-slate-950/50 border border-slate-700 rounded-xl pl-4 pr-12 py-3.5 text-sm focus:outline-none focus:ring-1 transition-all text-slate-200 placeholder-slate-500 disabled:opacity-50"
              />
              <button 
                disabled
                className="absolute right-2 top-2 p-1.5 text-slate-950 rounded-lg transition-colors disabled:opacity-0 disabled:scale-75 transform duration-200 bg-emerald-500"
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
