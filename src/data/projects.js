// src/data/projects.js

export const projects = [
  {
    id: 'appartement-haussmannien-paris-16',
    title: 'Appartement Haussmannien - Paris 16ème',
    slug: 'appartement-haussmannien-paris-16',
    category: 'Rénovation complète',
    location: 'Paris 16ème',
    surface: '120m²',
    year: 2024,
    duration: '4 mois',
    budget: '140 000€',
    featured: true,
    shortDescription: 'Rénovation complète d\'un appartement haussmannien avec conservation des éléments d\'origine',
    description: 'Transformation d\'un appartement haussmannien des années 1900 en conservant le charme de l\'ancien tout en apportant confort moderne. Conservation des moulures, parquet Versailles restauré, cuisine et salles de bain entièrement rénovées.',
    services: ['Rénovation complète', 'Cuisine', 'Salle de bain', 'Peinture'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=1200&q=80',
        alt: 'Salon avec moulures et parquet',
        caption: 'Salon principal après rénovation'
      },
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
        alt: 'Cuisine moderne intégrée',
        caption: 'Cuisine sur-mesure'
      },
      {
        url: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&q=80',
        alt: 'Chambre parentale',
        caption: 'Suite parentale avec dressing'
      }
    ],
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=60',
      after: 'https://images.unsplash.com/photo-600210492493-0946911123ea?w=800&q=80'
    },
    testimonial: {
      author: 'Sophie Martin',
      text: 'Entreprise AZ a su respecter le cachet de notre appartement tout en le modernisant. Un travail d\'une qualité exceptionnelle.',
      rating: 5
    },
    highlights: [
      'Conservation des moulures d\'origine',
      'Restauration du parquet Versailles',
      'Cuisine sur-mesure avec électroménager intégré',
      'Salle de bain avec douche italienne',
      'Optimisation des rangements'
    ],
    seo: {
      title: 'Rénovation Appartement Haussmannien Paris 16 | Entreprise AZ',
      description: 'Découvrez notre projet de rénovation d\'un appartement haussmannien de 120m² à Paris 16ème. Conservation du cachet ancien et modernisation.',
      keywords: ['rénovation haussmannien', 'rénovation appartement Paris 16', 'rénovation complète Paris']
    }
  },
  {
    id: 'cuisine-contemporaine-neuilly',
    title: 'Cuisine Contemporaine - Neuilly-sur-Seine',
    slug: 'cuisine-contemporaine-neuilly',
    category: 'Cuisine',
    location: 'Neuilly-sur-Seine',
    surface: '25m²',
    year: 2024,
    duration: '5 semaines',
    budget: '32 000€',
    featured: true,
    shortDescription: 'Création d\'une cuisine design ouverte sur le séjour avec îlot central',
    description: 'Rénovation complète d\'une cuisine avec création d\'un espace ouvert sur le séjour. Îlot central avec plan de travail en quartz, meubles laqués blancs brillants, électroménager Miele intégré.',
    services: ['Cuisine', 'Électricité', 'Plomberie'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200&q=80',
        alt: 'Cuisine avec îlot central',
        caption: 'Vue d\'ensemble de la cuisine'
      },
      {
        url: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=1200&q=80',
        alt: 'Détail îlot central',
        caption: 'Îlot central avec plan de travail quartz'
      },
      {
        url: 'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=1200&q=80',
        alt: 'Rangements cuisine',
        caption: 'Rangements optimisés'
      }
    ],
    testimonial: {
      author: 'Thomas Dubois',
      text: 'Notre cuisine est magnifique ! L\'équipe a été très professionnelle et les finitions sont parfaites.',
      rating: 5
    },
    highlights: [
      'Îlot central avec espace repas',
      'Plan de travail en quartz Silestone',
      'Électroménager Miele encastré',
      'Éclairage LED intégré',
      'Crédence en verre laqué'
    ],
    seo: {
      title: 'Rénovation Cuisine Contemporaine Neuilly | Entreprise AZ',
      description: 'Cuisine design avec îlot central à Neuilly-sur-Seine. Plan de travail quartz, électroménager Miele. Découvrez notre réalisation.',
      keywords: ['rénovation cuisine Neuilly', 'cuisine contemporaine', 'îlot central']
    }
  },
  {
    id: 'salle-bain-zen-boulogne',
    title: 'Salle de Bain Zen - Boulogne-Billancourt',
    slug: 'salle-bain-zen-boulogne',
    category: 'Salle de bain',
    location: 'Boulogne-Billancourt',
    surface: '12m²',
    year: 2023,
    duration: '3 semaines',
    budget: '18 000€',
    featured: true,
    shortDescription: 'Transformation d\'une salle de bain en espace détente avec douche italienne',
    description: 'Création d\'une salle de bain zen et épurée avec douche italienne XXL, meuble vasque suspendu en teck, carrelage effet pierre naturelle et éclairage LED d\'ambiance.',
    services: ['Salle de bain', 'Plomberie', 'Carrelage'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&q=80',
        alt: 'Salle de bain zen',
        caption: 'Vue d\'ensemble de la salle de bain'
      },
      {
        url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=1200&q=80',
        alt: 'Douche italienne',
        caption: 'Douche italienne avec receveur extra-plat'
      }
    ],
    testimonial: {
      author: 'Marie Laurent',
      text: 'Un véritable havre de paix ! La douche italienne est magnifique et les finitions sont irréprochables.',
      rating: 5
    },
    highlights: [
      'Douche italienne 160x90cm',
      'Meuble vasque en teck massif',
      'Carrelage effet pierre naturelle',
      'Éclairage LED RGB d\'ambiance',
      'Sèche-serviettes design'
    ],
    seo: {
      title: 'Rénovation Salle de Bain Zen Boulogne | Douche Italienne | AZ',
      description: 'Salle de bain zen avec douche italienne à Boulogne. Carrelage effet pierre, meuble teck. Voir notre réalisation.',
      keywords: ['rénovation salle de bain Boulogne', 'douche italienne', 'salle de bain zen']
    }
  },
  {
    id: 'loft-industriel-montreuil',
    title: 'Loft Industriel - Montreuil',
    slug: 'loft-industriel-montreuil',
    category: 'Rénovation complète',
    location: 'Montreuil',
    surface: '85m²',
    year: 2023,
    duration: '3 mois',
    budget: '95 000€',
    featured: true,
    shortDescription: 'Transformation d\'un ancien atelier en loft industriel moderne',
    description: 'Rénovation complète d\'un ancien atelier avec création d\'un espace de vie ouvert style loft industriel. Conservation des poutres apparentes, création d\'une mezzanine, cuisine ouverte et verrière d\'atelier.',
    services: ['Rénovation complète', 'Cuisine', 'Menuiserie'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
        alt: 'Loft industriel',
        caption: 'Espace de vie principal'
      },
      {
        url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
        alt: 'Cuisine ouverte loft',
        caption: 'Cuisine ouverte avec verrière'
      }
    ],
    testimonial: {
      author: 'Alexandre Petit',
      text: 'Entreprise AZ a transformé notre ancien atelier en un loft magnifique. Le résultat dépasse nos espérances !',
      rating: 5
    },
    highlights: [
      'Conservation des poutres métalliques',
      'Création d\'une mezzanine chambre',
      'Verrière d\'atelier sur-mesure',
      'Cuisine ouverte avec îlot',
      'Sol béton ciré'
    ],
    seo: {
      title: 'Rénovation Loft Industriel Montreuil | Transformation Atelier | AZ',
      description: 'Transformation d\'un atelier en loft industriel de 85m² à Montreuil. Verrière, mezzanine, cuisine ouverte. Voir le projet.',
      keywords: ['loft industriel', 'rénovation atelier', 'loft Montreuil']
    }
  }
];

// Helper functions
export const getProjectBySlug = (slug) => {
  return projects.find(project => project.slug === slug);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  return projects.filter(project => project.category === category);
};

export const getRecentProjects = (limit = 4) => {
  return projects
    .sort((a, b) => b.year - a.year)
    .slice(0, limit);
};