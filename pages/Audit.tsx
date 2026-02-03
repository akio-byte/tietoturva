import React from 'react';
import { SEO, Hero } from '../components/Shared';
import MarkdownContent from '../components/MarkdownContent';
import auditDoc from '../docs/AUDIT.md?raw';

const Audit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <SEO
        title="Auditointipohja | Lapland AI Lab"
        description="Staattinen auditointipohja organisaation tietoturvan itsearviointiin."
      />
      <Hero
        title="Tietoturvan auditointipohja"
        subtitle="Dokumentoitu tarkistuslista pk-organisaatioille, jotka haluavat kartoittaa tietoturvan perustason."
        label="Staattinen auditointi"
      />

      <div className="glass p-10 rounded-[2.5rem] border border-slate-800/60">
        <MarkdownContent content={auditDoc} />
      </div>
    </div>
  );
};

export default Audit;
