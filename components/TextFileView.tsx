import React, { useEffect, useState } from 'react';

type TextFileViewProps = {
  path: string;
  className?: string;
};

const TextFileView: React.FC<TextFileViewProps> = ({ path, className }) => {
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const url = new URL(path, import.meta.env.BASE_URL).toString();

    const loadContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to load ${path}`);
        }
        const text = await response.text();
        if (isMounted) {
          setContent(text);
        }
      } catch (caughtError) {
        if (isMounted) {
          const message = caughtError instanceof Error ? caughtError.message : 'Unknown error';
          setError(message);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadContent();

    return () => {
      isMounted = false;
    };
  }, [path]);

  if (isLoading) {
    return <p className="text-sm text-slate-400">Ladataan dokumenttia...</p>;
  }

  if (error) {
    return <p className="text-sm text-rose-400">Dokumentin lataus epäonnistui: {error}</p>;
  }

  return (
    <pre className={`whitespace-pre-wrap text-sm leading-relaxed ${className ?? ''}`.trim()}>
      {content}
    </pre>
  );
};

export default TextFileView;
