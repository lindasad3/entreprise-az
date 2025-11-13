// src/data/company.js

export const companyInfo = {
  name: 'Entreprise AZ',
  legalName: 'Entreprise AZ SARL',
  slogan: 'Rénovation d\'intérieur sur-mesure',
  description: 'Expert en rénovation d\'intérieur depuis 2009. Nous transformons vos espaces de vie avec qualité, design et respect des délais.',
  foundedYear: 2009,
  
  contact: {
    phone: '01 23 45 67 89',
    email: 'contact@entreprise-az.fr',
    address: {
      street: '123 Avenue de la Rénovation',
      city: 'Paris',
      postalCode: '75001',
      country: 'France'
    }
  },

  businessHours: {
    weekdays: 'Lundi - Vendredi: 9h00 - 18h00',
    saturday: 'Samedi: 10h00 - 13h00',
    sunday: 'Dimanche: Fermé'
  },

  socialMedia: {
    facebook: 'https://facebook.com/entrepriseaz',
    instagram: 'https://instagram.com/entrepriseaz',
    linkedin: 'https://linkedin.com/company/entrepriseaz',
    pinterest: 'https://pinterest.com/entrepriseaz'
  },

  certifications: [
    {
      name: 'RGE',
      description: 'Reconnu Garant de l\'Environnement',
      year: 2015
    },
    {
      name: 'Qualibat',
      description: 'Certification qualité bâtiment',
      year: 2012
    },
    {
      name: 'Garantie Décennale',
      description: 'Assurance responsabilité décennale',
      year: 2009
    }
  ],

  stats: {
    projectsCompleted: 250,
    yearsExperience: 15,
    satisfactionRate: 98,
    teamMembers: 15,
    averageResponseTime: '24h',
    serviceAreas: [
      'Paris (75)',
      'Hauts-de-Seine (92)',
      'Seine-Saint-Denis (93)',
      'Val-de-Marne (94)'
    ]
  },

  values: [
    {
      title: 'Qualité',
      icon: '⭐',
      description: 'Des finitions impeccables avec des matériaux premium'
    },
    {
      title: 'Transparence',
      icon: '🤝',
      description: 'Devis détaillés et communication claire tout au long du projet'
    },
    {
      title: 'Délais',
      icon: '⏱️',
      description: 'Respect strict des plannings et engagement contractuel'
    },
    {
      title: 'Conseil',
      icon: '💡',
      description: 'Accompagnement personnalisé et expertise technique'
    }
  ],

  team: {
    totalMembers: 15,
    description: 'Une équipe d\'artisans qualifiés et passionnés',
    roles: [
      'Chefs de projet',
      'Menuisiers',
      'Plombiers',
      'Électriciens',
      'Peintres',
      'Carreleurs'
    ]
  },

  legalInfo: {
    siret: '123 456 789 00012',
    tva: 'FR12 345678901',
    legalForm: 'SARL',
    capital: '50 000€',
    rcs: 'RCS Paris B 123 456 789'
  }
};

// Zone d'intervention avec temps de déplacement
export const serviceAreas = [
  {
    department: '75',
    name: 'Paris',
    responseTime: 'Immédiat',
    cities: ['Tous arrondissements']
  },
  {
    department: '92',
    name: 'Hauts-de-Seine',
    responseTime: '24h',
    cities: ['Neuilly-sur-Seine', 'Boulogne-Billancourt', 'Levallois-Perret', 'Courbevoie', 'Issy-les-Moulineaux']
  },
  {
    department: '93',
    name: 'Seine-Saint-Denis',
    responseTime: '24h',
    cities: ['Montreuil', 'Saint-Denis', 'Pantin', 'Aubervilliers']
  },
  {
    department: '94',
    name: 'Val-de-Marne',
    responseTime: '48h',
    cities: ['Vincennes', 'Saint-Mandé', 'Charenton-le-Pont', 'Créteil']
  }
];

// Questions fréquentes
export const faq = [
  {
    id: 1,
    category: 'Devis',
    question: 'Comment obtenir un devis ?',
    answer: 'Contactez-nous par téléphone, email ou via notre formulaire. Nous organisons une visite gratuite sous 48h pour évaluer votre projet et vous proposer un devis détaillé.'
  },
  {
    id: 2,
    category: 'Devis',
    question: 'Le devis est-il gratuit ?',
    answer: 'Oui, le devis et la visite préalable sont totalement gratuits et sans engagement.'
  },
  {
    id: 3,
    category: 'Délais',
    question: 'Quels sont les délais d\'intervention ?',
    answer: 'Les délais varient selon le type de projet : 2-4 semaines pour une salle de bain, 3-6 semaines pour une cuisine, 2-6 mois pour une rénovation complète.'
  },
  {
    id: 4,
    category: 'Financement',
    question: 'Proposez-vous des solutions de financement ?',
    answer: 'Oui, nous travaillons avec des partenaires bancaires pour vous proposer des solutions de financement adaptées à votre budget.'
  },
  {
    id: 5,
    category: 'Garanties',
    question: 'Quelles garanties proposez-vous ?',
    answer: 'Nous disposons de la garantie décennale, d\'assurances responsabilité civile professionnelle et offrons une garantie de parfait achèvement d\'un an.'
  },
  {
    id: 6,
    category: 'Travaux',
    question: 'Dois-je quitter mon logement pendant les travaux ?',
    answer: 'Cela dépend de l\'ampleur des travaux. Pour une rénovation complète, c\'est recommandé. Pour des travaux ponctuels (cuisine, salle de bain), vous pouvez généralement rester sur place.'
  },
  {
    id: 7,
    category: 'Travaux',
    question: 'Gérez-vous les démarches administratives ?',
    answer: 'Oui, nous pouvons vous accompagner dans les démarches (déclaration préalable, demande d\'autorisation copropriété, etc.).'
  },
  {
    id: 8,
    category: 'Suivi',
    question: 'Comment se passe le suivi de chantier ?',
    answer: 'Un chef de projet dédié assure le suivi avec des points réguliers. Vous avez accès à un espace client en ligne pour suivre l\'avancement en temps réel.'
  }
];