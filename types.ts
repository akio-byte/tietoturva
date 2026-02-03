
export interface VoteOption {
  id: string;
  label: string;
  description: string;
  icon?: string;
  color: string;
}

export type VoteData = Record<string, number>;

export interface SystemLog {
  id: number;
  time: string;
  event: string;
  status: 'ok' | 'warning' | 'security' | 'new';
}

// Added ContentItem interface for structured educational content
export interface ContentItem {
  slug: string;
  category: 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';
  featured: boolean;
  navLabel: string;
  seo: { title: string; description: string };
  hero: { title: string; subtitle: string };
  sections: Array<{ title: string; body: string }>;
  checklist: string[];
  cta: { text: string; route: string | null };
}
