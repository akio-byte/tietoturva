import React from 'react';

interface Props {
  content: string;
}

const SimpleMarkdown: React.FC<Props> = ({ content }) => {
  const parseMarkdown = (text: string) => {
    let html = text
      // Otsikot
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-black text-white mt-10 mb-6 tracking-tight">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-emerald-400 mt-8 mb-4 tracking-tight">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-bold text-slate-200 mt-6 mb-3">$1</h3>')
      // Boldaus
      .replace(/\*\*(.*)\*\*/gim, '<strong class="text-white font-bold">$1</strong>')
      // Listat
      .replace(/^- (.*$)/gim, '<li class="ml-5 mb-2 text-slate-300 list-disc list-outside">$1</li>')
      // Kappaleet (rivinvaihdot)
      .replace(/^\s*$/gim, '<br/>');

    return { __html: html };
  };

  return (
    <div 
      className="prose prose-invert max-w-none leading-relaxed"
      dangerouslySetInnerHTML={parseMarkdown(content)}
    />
  );
};

export default SimpleMarkdown;