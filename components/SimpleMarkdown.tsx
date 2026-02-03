import React from 'react';

interface Props {
  content: string;
}

const SimpleMarkdown: React.FC<Props> = ({ content }) => {
  const parseMarkdown = (text: string) => {
    return text
      .replace(/^# (.*$)/gim, '<h1 class="font-black text-white">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="font-bold text-emerald-400">$1</h2>')
      .replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>')
      .replace(/^- (.*$)/gim, '<li class="list-disc ml-5">$1</li>');
  };

  return (
    <div dangerouslySetInnerHTML={{ __html: parseMarkdown(content) }} className="prose prose-invert" />
  );
};

export default SimpleMarkdown;
