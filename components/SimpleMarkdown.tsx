import React from 'react';

interface Props {
  content: string;
}

const SimpleMarkdown: React.FC<Props> = ({ content }) => {
  const parseMarkdown = (text: string) => {
    let html = text
      // Otsikot
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black text-white mt-8 mb-4 tracking-tight">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-emerald-400 mt-6 mb-3 tracking-tight">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-slate-200 mt-4 mb-2">$1</h3>')
      // Boldaus
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      // Listat (muunnetaan ensin li-elementeiksi)
      .replace(/^- (.*$)/gim, '<li class="ml-4 mb-1 text-slate-300 list-disc list-inside">$1</li>')
      // Kappaleet (tyhjät rivit)
      .replace(/^\s*$/gim, '<br/>');

    return { __html: html };
  };

  return (
    <div 
      className="prose prose-invert max-w-none leading-relaxed space-y-2"
      dangerouslySetInnerHTML={parseMarkdown(content)}
    />
  );
};

export default SimpleMarkdown;