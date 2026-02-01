import React from 'react';

export interface PracticalTip {
  title: string;
  content: string;
}

export interface PageSection {
  id: string;
  title: string;
  description: string;
  // Fix: Added React import to resolve the React namespace for ReactNode
  content: React.ReactNode;
  tips?: PracticalTip[];
}