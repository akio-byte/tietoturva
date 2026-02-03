import React from 'react';

/**
 * Pääasialliset sisältökategoriat.
 */
export type CategoryType = 'kyber' | 'ai' | 'mobile' | 'crisis' | 'privacy' | 'routines';

/**
 * Branded String navLabelille (Compile-time suoja).
 */
export type NavLabel = string & { readonly __brand: 'NavLabel' };

/**
 * Validoi navLabelin pituuden (Runtime validation).
 * Heittää virheen jos > 20 merkkiä. Käytetään contentRegistryn latausvaiheessa.
 */
export const validateNavLabel = (label: string): NavLabel => {
  if (label.length > 20) {
    throw new Error(`ARKKITEHTUURIVIRHE: navLabel "${label}" on liian pitkä (max 20 merkkiä).`);
  }
  return label as NavLabel;
};

/**
 * Sisältöobjektin tyyppi eroteltuna unionina (Discriminated Union).
 */
export type ContentItem = ArticleContent | ChecklistContent | ToolContent | ModuleContent;

interface BaseContent {
  slug: string;
  category: CategoryType;
  featured: boolean;
  navLabel: string; 
  stylePreset?: 'standard' | 'warning' | 'arctic';
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
  }>;
  cta: {
    text: string;
    route: string | null;
  };
}

export interface ArticleContent extends BaseContent {
  type: 'article';
  checklist: string[];
}

export interface ChecklistContent extends BaseContent {
  type: 'checklist';
  checklist: string[];
}

export interface ToolContent extends BaseContent {
  type: 'tool';
  checklist: string[];
}

export interface ModuleContent extends BaseContent {
  type: 'module';
  checklist: string[];
}

export interface PracticalTip {
  title: string;
  content: string;
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

export interface AuditSubmission {
  id?: string;
  timestamp: string;
  totalScore: number;
  level: string;
}
