import React from 'react';
import { SEO } from '../components/Shared';

const auditText = `# Arctic Hardening Portal — Static Security Audit

Project: Lapland AI Lab Arctic Hardening Portal
Target: GitHub Pages (static documentation/showcase)
Audit Date: 2026-02-15

## Scope
- Front-end only (Vite + React).
- No backend services or runtime APIs.
- Content is static and versioned in Git.

## Key Assertions
- No secrets: No API keys or credentials are embedded in the front-end.
- No runtime AI calls: No LLM, Gemini, or external inference calls in production UI.
- No data collection: No forms, no user input persistence, no telemetry.
- Static-only deployment: GitHub Pages serves built assets only.

## Findings
1. Attack surface minimized
   - No server-side components or databases.
   - No authenticated endpoints.
2. Content integrity
   - Content is stored in contentRegistry.ts and reviewed in Git.
   - Governance rules are documented in AGENT.md.
3. Operational safety
   - Build-only deployment with deterministic output.
   - Vite base configured for /tietoturva/.

## Recommendations
- Keep all documentation updates in Git.
- Avoid adding client-side analytics unless explicitly required.
- Re-audit after any dependency upgrade.

## Approval
- Status: ✅ Approved for static publishing.`;

const Audit: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-20">
      <SEO title="AUDIT.md | Arctic Hardening" description="Static security audit for the Arctic Hardening Portal." />

      <div className="mb-16">
        <h1 className="text-5xl font-black text-white mb-6 uppercase tracking-tighter italic">AUDIT.md</h1>
        <p className="text-xl text-slate-400 border-l-2 border-emerald-500 pl-6">
          Julkinen auditointiyhteenveto staattiselle GitHub Pages -julkaisulle.
        </p>
      </div>

      <div className="glass p-10 rounded-[2.5rem] border-slate-800">
        <div className="bg-black/40 p-6 rounded-xl font-mono text-xs text-emerald-400/90 overflow-x-auto whitespace-pre-wrap leading-relaxed">
          {auditText}
        </div>
      </div>
    </div>
  );
};

export default Audit;
