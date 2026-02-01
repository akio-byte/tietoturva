import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SeoProps {
  title: string;
  description: string;
}

const Seo = ({ title, description }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const ensureMetaTag = (selector: string, attributes: Record<string, string>) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        Object.entries(attributes).forEach(([key, value]) => element?.setAttribute(key, value));
        document.head.appendChild(element);
      }
      return element as HTMLMetaElement;
    };

    const descriptionTag = ensureMetaTag('meta[name="description"]', { name: 'description' });
    descriptionTag.setAttribute('content', description);

    const ogTitleTag = ensureMetaTag('meta[property="og:title"]', { property: 'og:title' });
    ogTitleTag.setAttribute('content', title);

    const ogDescriptionTag = ensureMetaTag('meta[property="og:description"]', { property: 'og:description' });
    ogDescriptionTag.setAttribute('content', description);

    const ogTypeTag = ensureMetaTag('meta[property="og:type"]', { property: 'og:type' });
    ogTypeTag.setAttribute('content', 'website');

    const ogUrlTag = ensureMetaTag('meta[property="og:url"]', { property: 'og:url' });
    ogUrlTag.setAttribute('content', window.location.href);

    const twitterCardTag = ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card' });
    twitterCardTag.setAttribute('content', 'summary_large_image');

    const twitterTitleTag = ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title' });
    twitterTitleTag.setAttribute('content', title);

    const twitterDescriptionTag = ensureMetaTag('meta[name="twitter:description"]', { name: 'twitter:description' });
    twitterDescriptionTag.setAttribute('content', description);
  }, [description, location.pathname, title]);

  return null;
};

export default Seo;
