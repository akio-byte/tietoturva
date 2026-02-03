import React from 'react';

interface MaturityRadarProps {
  score: number;
  maxScore?: number;
  axes?: number;
}

const MaturityRadar: React.FC<MaturityRadarProps> = ({ score, maxScore = 20, axes = 5 }) => {
  const normalizedScore = Math.min(Math.max(score, 0), maxScore);
  const value = maxScore === 0 ? 0 : normalizedScore / maxScore;
  const center = 60;
  const maxRadius = 42;
  const angleStep = (Math.PI * 2) / axes;

  const polarToCartesian = (radius: number, angle: number) => {
    const x = center + radius * Math.cos(angle);
    const y = center + radius * Math.sin(angle);
    return { x, y, point: `${x.toFixed(2)},${y.toFixed(2)}` };
  };

  const gridLevels = [0.25, 0.5, 0.75, 1];
  const dataPoints = Array.from({ length: axes }, (_, index) => {
    const angle = -Math.PI / 2 + index * angleStep;
    return polarToCartesian(maxRadius * value, angle).point;
  }).join(' ');

  return (
    <div className="relative w-full flex items-center justify-center">
      <svg
        className="w-56 h-56"
        viewBox="0 0 120 120"
        role="img"
        aria-label="Maturity Radar -keskiarvo"
      >
        <g className="stroke-slate-800/80" fill="none" strokeWidth="1">
          {gridLevels.map(level => {
            const radius = maxRadius * level;
            const points = Array.from({ length: axes }, (_, index) => {
              const angle = -Math.PI / 2 + index * angleStep;
              return polarToCartesian(radius, angle).point;
            }).join(' ');
            return <polygon key={level} points={points} />;
          })}
          {Array.from({ length: axes }, (_, index) => {
            const angle = -Math.PI / 2 + index * angleStep;
            const endPoint = polarToCartesian(maxRadius, angle);
            return <line key={index} x1={center} y1={center} x2={endPoint.x} y2={endPoint.y} />;
          })}
        </g>
        <polygon
          points={dataPoints}
          className="fill-emerald-500/20 stroke-emerald-500"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute flex flex-col items-center justify-center text-center">
        <span className="text-3xl font-black text-white">{normalizedScore.toFixed(1)}</span>
        <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Maturity</span>
      </div>
    </div>
  );
};

export default MaturityRadar;
