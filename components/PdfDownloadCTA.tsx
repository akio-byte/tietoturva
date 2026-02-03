import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CTA } from './Shared';
import { downloadPdfWithFallback } from '../lib/pdf/download';
import { pdfButtonMap } from '../lib/pdf/mappings';

interface PdfDownloadCTAProps {
  buttonId: keyof typeof pdfButtonMap;
}

const PdfDownloadCTA: React.FC<PdfDownloadCTAProps> = ({ buttonId }) => {
  const [showToast, setShowToast] = useState(false);
  const navigate = useNavigate();
  const config = pdfButtonMap[buttonId];

  useEffect(() => {
    if (!showToast) {
      return undefined;
    }
    const timer = window.setTimeout(() => setShowToast(false), 3200);
    return () => window.clearTimeout(timer);
  }, [showToast]);

  const handleClick = async () => {
    const result = await downloadPdfWithFallback(config);
    if (result === 'opened-guide') {
      setShowToast(true);
      navigate(config.fallbackRoute);
    }
  };

  return (
    <div className="relative">
      <CTA label={config.label} onClick={handleClick} />
      {showToast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900/90 border border-emerald-500/40 text-slate-100 px-6 py-3 rounded-full shadow-2xl text-sm font-semibold z-50">
          PDF ei saatavilla — avataan opas
        </div>
      )}
    </div>
  );
};

export default PdfDownloadCTA;
