
import { VoteOption, ContentItem } from './types';

export const voteOptions: VoteOption[] = [
  {
    id: 'opt-a',
    label: 'Vaihtoehto A',
    description: 'Moderni ja skaalautuva ratkaisu pohjoisen tarpeisiin.',
    color: 'from-emerald-400 to-teal-600'
  },
  {
    id: 'opt-b',
    label: 'Vaihtoehto B',
    description: 'Perinteinen ja vakaa arkkitehtuuri kriittiseen käyttöön.',
    color: 'from-blue-400 to-indigo-600'
  },
  {
    id: 'opt-c',
    label: 'Vaihtoehto C',
    description: 'Kevyt ja ketterä kokeilunhallinta pienille tiimeille.',
    color: 'from-purple-400 to-pink-600'
  },
  {
    id: 'opt-d',
    label: 'Vaihtoehto D',
    description: 'Täysin uusi innovaatio, joka haastaa nykytilan.',
    color: 'from-amber-400 to-orange-600'
  }
];

// Added contentRegistry to manage dynamic security guides and fix import errors
export const contentRegistry: Record<string, ContentItem> = {
  'incident-response': {
    slug: 'incident-response',
    category: 'crisis',
    featured: true,
    navLabel: 'Kriisinhallinta',
    seo: { 
      title: 'Poikkeustilanneharjoitus | Lapland AI Lab', 
      description: 'Miten toimia kun tietomurto tapahtuu.' 
    },
    hero: { 
      title: 'Kun hätä on suurin', 
      subtitle: 'Toimintasuunnitelma kriisitilanteisiin.' 
    },
    sections: [
      { title: 'Ensimmäiset askeleet', body: 'Eristä saastuneet laitteet verkosta välittömästi.' }
    ],
    checklist: [
      'Katkaise verkkoyhteydet',
      'Vaihda pääkäyttäjien salasanat',
      'Ilmoita viranomaisille'
    ],
    cta: { text: 'Palaa etusivulle', route: '/' }
  }
};
