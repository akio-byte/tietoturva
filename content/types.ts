export interface ContentPackage {
  slug: string;
  seo: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    subtitle: string;
    label?: string;
  };
  sections: Array<{
    id: string;
    title: string;
    body: string;
    importanceDesc?: string;
    checklist?: string[];
    colorClass?: string;
  }>;
  cta?: {
    label: string;
    link?: string;
  };
}
