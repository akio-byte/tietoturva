import React from 'react';

interface MaturityRadarProps {
  score: number;
  label?: string;
}

const MaturityRadar: React.FC<MaturityRadarProps> = ({ score, label = "Maturity" }) => {
  const normalizedScore = Math.min(Math.max(score, 0), 20);
  const percentage = (normalizedScore / 20) * 100;
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-48 h-48 flex items-center justify-center">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-slate-800 fill-none"
          strokeWidth="8"
        />
        <circle
          cx="50"
          cy="50"
          r={radius}
          className="stroke-emerald-500 fill-none transition-all duration-1000 ease-out"
          strokeWidth="8"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center transform rotate-0">
        <span className="text-4xl font-black text-white">{normalizedScore.toFixed(1)}</span>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{label}</span>
      </div>
    </div>
  );
};

export default MaturityRadar;