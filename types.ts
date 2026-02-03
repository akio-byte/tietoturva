
import React from 'react';

/**
 * Pääasiallinen sisältökategorioiden tyyppi.
 */
export type CategoryType = 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';

/**
 * Sisältöobjektin rajapinta (Source of Truth).
 * Huom: navLabel suositeltu maksimipituus on 20 merkkiä UI-yhteensopivuuden vuoksi.
 */
export interface ContentItem {
  slug: string;
  category: CategoryType;
  featured: boolean;
  navLabel: string; // UI-rajoite: max 20 merkkiä
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
  checklist: string[]; // Vähintään 3 konkreettista toimenpidettä
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
