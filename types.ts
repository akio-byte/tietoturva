import React from 'react';

/**
 * Pääasialliset sisältökategoriat.
 */
export type CategoryType = 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';

/**
 * Sisältötyypit eroteltuna unionina (Discriminated Union).
 */
export type ContentType = 'artikkeli' | 'tarkistuslista' | 'työkalu' | 'moduuli';

/**
 * Branded String navLabelille (Compile-time suositus).
 */
export type NavLabel = string & { readonly __brand: 'NavLabel' };

/**
 * Validoi navLabelin pituuden (Runtime validation).
 * Suositellaan ajettavaksi contentRegistryn alustuksen yhteydessä.
 */
export const validateNavLabel = (label: string): NavLabel => {
  if (label.length > 20) {
    throw new Error(`KRIITTINEN VIRHE: navLabel "${label}" ylittää 20 merkin rajan.`);
  }
  return label as NavLabel;
};

/**
 * Sisältöobjektin rajapinta (Source of Truth).
 */
export interface ContentItem {
  type: ContentType;
  slug: string;
  category: CategoryType;
  featured: boolean;
  navLabel: string; // Suositus: käytä validateNavLabel() rakentaessa
  stylePreset?: 'standard' | 'warning' | 'arctic'; // Arctic Security -sävytys
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  sections: Array<{
    title: string;
    body: string;
    stylePreset?: 'standard' | 'warning' | 'arctic';
  }>;
  checklist: string[]; 
  cta: {
    text: string;
    route: string | null;
  };
}

export interface PracticalTip {
  title: string;
  content: string;
}

export interface PageSection {
  id: string;
  title: string;
  description: string;
  content: React.ReactNode;
  tips?: PracticalTip[];
}

export interface AuditQuestion {
  id: number;
  text: string;
  category: string;
  weight?: number;
}

export interface SystemLog {
  id: number;
  time: string;
  event: string;
  status: 'ok' | 'new' | 'security' | 'warning' | 'error';
}
