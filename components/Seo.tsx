import React, { useEffect } from 'react';

type SeoProps = {
  title: string;
  description: string;
};

const Seo: React.FC<SeoProps> = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('name', 'description', description);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('name', 'twitter:card', 'summary_large_image');
  }, [title, description]);

  return null;
};

export default Seo;
