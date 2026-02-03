import React, { useMemo } from 'react';

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const formatInline = (value: string) => {
  const escaped = escapeHtml(value);
  return escaped
    .replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-slate-900/70 text-emerald-300 text-xs">$1</code>')
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\*([^*]+)\*/g, '<em>$1</em>');
};

const renderMarkdown = (markdown: string) => {
  const lines = markdown.split('\n');
  const htmlParts: string[] = [];
  let inCodeBlock = false;
  let listType: 'ul' | 'ol' | null = null;

  const closeList = () => {
    if (listType) {
      htmlParts.push(`</${listType}>`);
      listType = null;
    }
  };

  lines.forEach((line) => {
    const trimmed = line.trim();

    if (trimmed.startsWith('```')) {
      closeList();
      if (inCodeBlock) {
        htmlParts.push('</code></pre>');
        inCodeBlock = false;
      } else {
        htmlParts.push(
          '<pre class="bg-black/60 border border-slate-800/60 rounded-2xl p-4 overflow-x-auto text-sm text-emerald-200/80"><code>'
        );
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      htmlParts.push(`${escapeHtml(line)}\n`);
      return;
    }

    if (!trimmed) {
      closeList();
      return;
    }

    if (trimmed.startsWith('# ')) {
      closeList();
      htmlParts.push(`<h1 class="text-3xl font-black text-white mt-6">${formatInline(trimmed.slice(2))}</h1>`);
      return;
    }

    if (trimmed.startsWith('## ')) {
      closeList();
      htmlParts.push(`<h2 class="text-2xl font-bold text-white mt-6">${formatInline(trimmed.slice(3))}</h2>`);
      return;
    }

    if (trimmed.startsWith('### ')) {
      closeList();
      htmlParts.push(`<h3 class="text-xl font-bold text-white mt-6">${formatInline(trimmed.slice(4))}</h3>`);
      return;
    }

    const unorderedMatch = /^[-*] (.+)/.exec(trimmed);
    const orderedMatch = /^(\d+)\. (.+)/.exec(trimmed);

    if (unorderedMatch) {
      if (listType !== 'ul') {
        closeList();
        htmlParts.push('<ul class="list-disc list-inside space-y-2 text-slate-300">');
        listType = 'ul';
      }
      htmlParts.push(`<li>${formatInline(unorderedMatch[1])}</li>`);
      return;
    }

    if (orderedMatch) {
      if (listType !== 'ol') {
        closeList();
        htmlParts.push('<ol class="list-decimal list-inside space-y-2 text-slate-300">');
        listType = 'ol';
      }
      htmlParts.push(`<li>${formatInline(orderedMatch[2])}</li>`);
      return;
    }

    closeList();
    htmlParts.push(`<p class="text-slate-300 leading-relaxed">${formatInline(trimmed)}</p>`);
  });

  closeList();
  if (inCodeBlock) {
    htmlParts.push('</code></pre>');
  }

  return htmlParts.join('');
};

const MarkdownContent: React.FC<MarkdownContentProps> = ({ content, className }) => {
  const html = useMemo(() => renderMarkdown(content), [content]);

  return (
    <div
      className={`space-y-4 text-sm sm:text-base ${className ?? ''}`.trim()}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default MarkdownContent;
