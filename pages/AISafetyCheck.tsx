import React, { useMemo, useState } from 'react';
import { SEO, Hero } from '../components/Shared';

interface Question {
  id: number;
  text: string;
}

const questions: Question[] = [
  { id: 1, text: 'Onko ohjeistus mitä dataa EI saa syöttää tekoälyyn?' },
  { id: 2, text: 'Onko henkilödata anonymisoitu ennen käyttöä?' },
  { id: 3, text: 'Onko käytössä hyväksytyt AI-työkalut ja “Shadow AI” -linja?' },
  { id: 4, text: 'Onko käyttöoikeudet/tilit hallinnassa (poistuneet työntekijät)?' },
  { id: 5, text: 'Onko mallien ja työkalujen toimittajat arvioitu (DPA/tietosuoja)?' },
  { id: 6, text: 'Onko promptit/aineistot tallennuspaikat sovittu (ei henkilökohtaisiin muistiinpanoihin)?' },
  { id: 7, text: 'Onko henkilöstölle lyhyt koulutus AI-riskistä ja tietosuojasta?' },
  { id: 8, text: 'Onko tulosten tarkistusprosessi (hallusinaatiot/virheet) sovittu?' },
  { id: 9, text: 'Onko IP/tekijänoikeuslinja selvä (mitä saa generoida)?' },
  { id: 10, text: 'Onko incident-polku jos tekoälyyn syötetään vahingossa väärää dataa?' },
];

const AISafetyCheck: React.FC = () => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const allAnswered = questions.every((question) => answers[question.id] !== undefined);
  const totalScore = useMemo(
    () => Object.values(answers).reduce((acc, curr) => acc + curr, 0),
    [answers],
  );

  const result = useMemo(() => {
    if (!allAnswered) {
      return null;
    }
    if (totalScore <= 8) {
      return {
        label: 'Matala (Hälytystila)',
        range: '0–8 pistettä',
        color: 'text-red-500',
        border: 'border-red-500/30',
        bg: 'bg-red-500/10',
        feedback: 'Suuret riskit ovat vielä auki. Aloita ohjeistuksista ja hyväksytyistä työkaluista välittömästi.',
      };
    }
    if (totalScore <= 15) {
      return {
        label: 'Keskitaso (Perusasiat kunnossa)',
        range: '9–15 pistettä',
        color: 'text-yellow-400',
        border: 'border-yellow-400/30',
        bg: 'bg-yellow-400/10',
        feedback: 'Peruslinjaukset ovat olemassa, mutta prosessit ja koulutus kaipaavat lisää vahvistusta.',
      };
    }
    return {
      label: 'Korkea (Hyvä valmius)',
      range: '16–20 pistettä',
      color: 'text-emerald-400',
      border: 'border-emerald-400/30',
      bg: 'bg-emerald-400/10',
      feedback: 'AI-turvan perusta on kunnossa. Jatka seurantaa ja päivitä ohjeistuksia säännöllisesti.',
    };
  }, [allAnswered, totalScore]);

  const handleAnswer = (id: number, value: number) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setAnswers({});
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="AI-turvatason tarkistus | Lapland AI Lab"
        description="10 kysymyksen itsearviointi organisaation AI-turvan nykytilasta."
      />
      <Hero
        title="AI-turvatason tarkistus"
        subtitle="Vastaa 10 kysymykseen ja saat välittömän arvion organisaatiosi AI-turvan kypsyydestä."
        label="10 kohdan itsearviointi"
      />

      <div className="space-y-6">
        <div className="grid gap-4">
          {questions.map((question) => (
            <div
              key={question.id}
              className="glass p-6 rounded-2xl border border-slate-800 transition-all hover:border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex-grow">
                  <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1 block">
                    Kysymys {question.id}
                  </span>
                  <p className="text-slate-200 font-medium">{question.text}</p>
                </div>
                <div className="flex gap-2 shrink-0">
                  {[
                    { label: 'Kyllä', val: 2, color: 'hover:bg-emerald-500/20 hover:text-emerald-400 border-emerald-500/20' },
                    { label: 'Osittain', val: 1, color: 'hover:bg-yellow-500/20 hover:text-yellow-400 border-yellow-500/20' },
                    { label: 'Ei', val: 0, color: 'hover:bg-red-500/20 hover:text-red-400 border-red-500/20' },
                  ].map((option) => (
                    <button
                      key={option.val}
                      onClick={() => handleAnswer(question.id, option.val)}
                      className={`px-4 py-2 rounded-xl border text-sm font-bold transition-all ${
                        answers[question.id] === option.val
                          ? option.label === 'Kyllä'
                            ? 'bg-emerald-500 text-slate-950 border-emerald-500'
                            : option.label === 'Osittain'
                              ? 'bg-yellow-500 text-slate-950 border-yellow-500'
                              : 'bg-red-500 text-slate-950 border-red-500'
                          : `bg-slate-900/50 text-slate-400 ${option.color}`
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {result ? (
          <div className={`glass p-10 rounded-3xl border-2 ${result.border} ${result.bg}`}>
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-400 mb-2 uppercase tracking-widest">Tulos</h2>
              <div className={`text-5xl md:text-7xl font-black mb-6 ${result.color}`}>
                {totalScore} / 20
              </div>
              <h3 className={`text-3xl font-bold mb-4 ${result.color}`}>{result.label}</h3>
              <p className="text-slate-400 mb-6">{result.range}</p>
              <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed">
                {result.feedback}
              </p>
              <div className="mt-8">
                <button
                  onClick={handleReset}
                  className="bg-slate-800 hover:bg-slate-700 text-white font-bold px-8 py-4 rounded-xl transition-all"
                >
                  Nollaa vastaukset
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="glass p-8 rounded-3xl border border-slate-800 text-center">
            <p className="text-slate-400 text-lg">
              Täytä kaikki kysymykset nähdäksesi AI-turvatason tuloksen.
            </p>
            <div className="mt-6">
              <button
                onClick={handleReset}
                disabled={Object.keys(answers).length === 0}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  Object.keys(answers).length === 0
                    ? 'bg-slate-900 text-slate-600 cursor-not-allowed'
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                Nollaa vastaukset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AISafetyCheck;
