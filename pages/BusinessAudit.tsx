import React, { useState } from 'react';
import { SEO, Hero } from '../components/Shared';
import { AuditSubmission } from '../types';

interface Question {
  id: number;
  text: string;
  category: string;
}

const questions: Question[] = [
  { id: 1, category: 'MFA', text: 'Käytämmekö monivaiheista tunnistautumista (MFA) kaikissa kriittisissä palveluissa?' },
  { id: 2, category: 'Varmuuskopiot', text: 'Onko meillä 3-2-1-säännön mukaiset varmuuskopiot, jotka on testattu viimeisen vuoden aikana?' },
  { id: 3, category: 'Salasanat', text: 'Käyttääkö koko henkilöstö salasanaohjelmaa (Password Manager)?' },
  { id: 4, category: 'Päivitykset', text: 'Onko automaattiset päivitykset päällä kaikissa yrityksen laitteissa?' },
  { id: 5, category: 'Koulutus', text: 'Järjestämmekö säännöllistä kalasteluharjoittelua henkilöstölle?' },
  { id: 6, category: 'Shadow AI', text: 'Onko meillä selkeät ohjeet tekoälyn käytöstä (Shadow AI -hallinta)?' },
  { id: 7, category: 'Laitteet', text: 'Onko meillä ajan tasalla oleva lista kaikista yrityksen laitteista?' },
  { id: 8, category: 'Fyysinen turva', text: 'Ovatko kriittiset tilat (esim. kytkinkaapit) aina lukittuina?' },
  { id: 9, category: 'Kumppanit', text: 'Onko sopimuksissamme kumppaneiden kanssa tietoturvavaatimukset?' },
  { id: 10, category: 'Valmius', text: 'Onko meillä valmiina toimintaohje ja yhteystiedot tietomurron sattuessa?' },
];

const BusinessAudit: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [isFinished, setIsFinished] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const totalScore = (Object.values(answers) as number[]).reduce((acc: number, curr: number) => acc + curr, 0);
  const allAnswered = Object.keys(answers).length === questions.length;

  const getResult = () => {
    if (totalScore <= 8) return {
      level: "Matala (Hälytystila)",
      color: "text-red-500",
      border: "border-red-500/30",
      bg: "bg-red-500/10",
      feedback: "Yrityksenne on kriittisessä vaarassa. Aloita Kyberperusteista välittömästi ja ota MFA käyttöön heti."
    };
    if (totalScore <= 15) return {
      level: "Keskitaso (Perusasiat hallussa)",
      color: "text-yellow-500",
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/10",
      feedback: "Perusasiat ovat kunnossa, mutta AI-uhat, laitehallinta ja prosessit vaativat vielä työtä."
    };
    return {
      level: "Hyvä (Pohjoinen edelläkävijä)",
      color: "text-emerald-500",
      border: "border-emerald-500/30",
      bg: "bg-emerald-500/10",
      feedback: "Erinomaista työtä! Organisaationne tietoturvakulttuuri on vahvalla pohjalla. Keskittykää jatkuvaan ylläpitoon."
    };
  };

  const result = getResult();

  const submitAudit = () => {
    const submission: AuditSubmission = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date().toISOString(),
      totalScore: totalScore,
      level: result.level,
    };

    const existingRaw = localStorage.getItem('audit_submissions');
    const existing: AuditSubmission[] = existingRaw ? JSON.parse(existingRaw) : [];
    
    localStorage.setItem('audit_submissions', JSON.stringify([submission, ...existing]));
    setSubmitted(true);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO 
        title="Tietoturva-auditointi pk-yritykselle | Lapland AI Lab" 
        description="Interaktiivinen 10 kysymyksen itsearviointi yrityksen tietoturvasta." 
      />
      <Hero 
        title="Pika-auditointi pk-yrityksille"
        subtitle="Vastaa 10 kysymykseen ja selvitä organisaatiosi tietoturvan taso. Saat välittömän arvion ja suositukset."
        label="5 minuutin itsearviointi"
      />

      <div className="space-y-6">
        {!isFinished ? (
          <>
            <div className="grid gap-4">
              {questions.map((q) => (
                <div key={q.id} className="glass p-6 rounded-2xl border border-slate-800 transition-all hover:border-slate-700">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-grow">
                      <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 block">{q.category}</span>
                      <p className="text-slate-200 font-medium">{q.text}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {[
                        { label: 'Kyllä', val: 2, color: 'hover:bg-emerald-500/20 hover:text-emerald-400 border-emerald-500/20' },
                        { label: 'Osittain', val: 1, color: 'hover:bg-yellow-500/20 hover:text-yellow-400 border-yellow-500/20' },
                        { label: 'Ei', val: 0, color: 'hover:bg-red-500/20 hover:text-red-400 border-red-500/20' }
                      ].map((opt) => (
                        <button
                          key={opt.val}
                          onClick={() => handleAnswer(q.id, opt.val)}
                          className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${
                            answers[q.id] === opt.val 
                              ? opt.label === 'Kyllä' ? 'bg-emerald-500 text-slate-950 border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.3)]' : 
                                opt.label === 'Osittain' ? 'bg-yellow-500 text-slate-950 border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)]' : 
                                'bg-red-500 text-slate-950 border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                              : `bg-slate-900/50 text-slate-400 ${opt.color}`
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <button
                disabled={!allAnswered}
                onClick={() => setIsFinished(true)}
                className={`px-12 py-6 rounded-2xl font-black text-xl transition-all shadow-xl uppercase tracking-widest ${
                  allAnswered 
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20 scale-105' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                }`}
              >
                {allAnswered ? 'Katso tulokset' : `Vastaa vielä ${questions.length - Object.keys(answers).length} kysymykseen`}
              </button>
            </div>
          </>
        ) : (
          <div className={`glass p-10 md:p-20 rounded-[4rem] border-2 ${result.border} ${result.bg} animate-in fade-in zoom-in duration-500 relative overflow-hidden`}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-current opacity-5 blur-[100px] -z-10"></div>
            <div className="text-center relative z-10">
              <div className="w-24 h-24 bg-slate-900 rounded-full mx-auto mb-10 flex items-center justify-center border border-white/10 shadow-2xl">
                <svg className={`w-12 h-12 ${result.color} animate-pulse`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-xl font-black text-slate-500 mb-2 uppercase tracking-[0.3em]">Auditointiraportti</h2>
              <div className={`text-6xl md:text-9xl font-black mb-8 ${result.color} tracking-tighter`}>
                {totalScore} / 20
              </div>
              <h3 className={`text-4xl md:text-5xl font-black mb-10 ${result.color} tracking-tight uppercase`}>{result.level}</h3>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-14 font-medium">
                {result.feedback}
              </p>
              
              <div className="flex flex-col md:flex-row gap-6 justify-center print:hidden">
                <button 
                  onClick={() => { setIsFinished(false); setSubmitted(false); }}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-black px-12 py-5 rounded-2xl transition-all uppercase tracking-widest text-xs"
                >
                  Uusi testi
                </button>
                <button 
                  onClick={submitAudit}
                  disabled={submitted}
                  className={`font-black px-12 py-5 rounded-2xl transition-all shadow-2xl uppercase tracking-widest text-xs flex items-center gap-3 ${
                    submitted 
                    ? 'bg-slate-800 text-emerald-500 border border-emerald-500/30 cursor-not-allowed' 
                    : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
                  }`}
                >
                  {submitted ? 'Lähetetty' : 'Lähetä pääkehittäjälle'}
                </button>
                <button 
                  onClick={() => window.print()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black px-12 py-5 rounded-2xl transition-all shadow-2xl shadow-emerald-500/20 uppercase tracking-widest text-xs"
                >
                  Lataa PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BusinessAudit;