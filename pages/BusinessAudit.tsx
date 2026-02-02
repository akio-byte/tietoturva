
import React, { useState } from 'react';
import { SEO, Hero, CTA } from '../components/Shared';

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

  const handleAnswer = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  // Fix: Explicitly type acc and curr as numbers to avoid 'unknown' type errors in strict environments
  const totalScore = Object.values(answers).reduce((acc: number, curr: number) => acc + curr, 0);
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
                              ? opt.label === 'Kyllä' ? 'bg-emerald-500 text-slate-950 border-emerald-500' : 
                                opt.label === 'Osittain' ? 'bg-yellow-500 text-slate-950 border-yellow-500' : 
                                'bg-red-500 text-slate-950 border-red-500'
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
                className={`px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl ${
                  allAnswered 
                    ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 shadow-emerald-500/20' 
                    : 'bg-slate-800 text-slate-500 cursor-not-allowed opacity-50'
                }`}
              >
                {allAnswered ? 'Katso tulokset' : `Vastaa vielä ${questions.length - Object.keys(answers).length} kysymykseen`}
              </button>
            </div>
          </>
        ) : (
          <div className={`glass p-10 rounded-3xl border-2 ${result.border} ${result.bg} animate-in fade-in zoom-in duration-500`}>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-400 mb-2 uppercase tracking-widest">Auditoinnin tulos</h2>
              <div className={`text-5xl md:text-7xl font-black mb-6 ${result.color}`}>
                {totalScore} / 20
              </div>
              <h3 className={`text-3xl font-bold mb-6 ${result.color}`}>{result.level}</h3>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed mb-10">
                {result.feedback}
              </p>
              
              <div className="flex flex-col md:flex-row gap-4 justify-center print:hidden">
                <button 
                  onClick={() => setIsFinished(false)}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
                >
                  Muokkaa vastauksia
                </button>
                <button 
                  onClick={() => window.print()}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
                >
                  Lataa raportti (PDF)
                </button>
              </div>

              <div className="hidden print:block mt-12 text-left border-t border-slate-700 pt-8">
                <h4 className="text-slate-400 font-bold mb-4 uppercase text-sm">Yksityiskohtaiset vastaukset:</h4>
                <div className="grid gap-2">
                  {questions.map(q => (
                    <div key={q.id} className="flex justify-between text-sm py-1 border-b border-slate-800">
                      <span className="text-slate-400">{q.text}</span>
                      <span className="font-bold text-white">
                        {answers[q.id] === 2 ? 'Kyllä' : answers[q.id] === 1 ? 'Osittain' : 'Ei'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 print:hidden">
          <CTA label="Lataa koko Kyberperusteet-opas" link="/print/cyber-basics" />
        </div>
      </div>
    </div>
  );
};

export default BusinessAudit;
