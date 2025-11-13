// src/data/services.js

export const services = [
  {
    id: 'renovation-cuisine',
    title: 'Rénovation de Cuisine',
    slug: 'renovation-cuisine',
    shortDescription: 'Transformation complète de votre espace culinaire avec des finitions haut de gamme',
    description: 'Notre expertise en rénovation de cuisine transforme votre espace en un lieu moderne, fonctionnel et esthétique. Nous gérons l\'intégralité du projet, de la conception à la livraison.',
    icon: '🍳',
    features: [
      'Design sur-mesure et plans 3D',
      'Électroménager intégré dernière génération',
      'Optimisation de l\'espace et rangements intelligents',
      'Choix de matériaux premium (plan de travail, crédence)',
      'Installation électrique et plomberie certifiées'
    ],
    process: [
      'Étude de vos besoins et prise de mesures',
      'Conception 3D et validation du projet',
      'Démolition et préparation',
      'Installation et finitions',
      'Livraison clé en main'
    ],
    averagePrice: '15 000 - 35 000€',
    duration: '3-6 semaines',
    image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
      'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
      'https://images.unsplash.com/photo-1556912167-f556f1f39faa?w=800&q=80'
    ],
    seo: {
      title: 'Rénovation Cuisine Paris | Design & Installation | Entreprise AZ',
      description: 'Expert en rénovation de cuisine sur-mesure. Design 3D, matériaux premium, installation professionnelle. Devis gratuit sous 48h.',
      keywords: ['rénovation cuisine', 'cuisine sur-mesure', 'rénovation cuisine Paris']
    }
  },
  {
    id: 'salle-de-bain',
    title: 'Rénovation Salle de Bain',
    slug: 'salle-de-bain',
    shortDescription: 'Création d\'un espace détente moderne et fonctionnel adapté à vos besoins',
    description: 'Transformez votre salle de bain en un véritable espace de bien-être avec nos solutions de rénovation complètes. Design, qualité et fonctionnalité.',
    icon: '🚿',
    features: [
      'Douche italienne et baignoire îlot',
      'Carrelage premium et faïence design',
      'Plomberie certifiée et garantie',
      'Meubles vasque sur-mesure',
      'Éclairage LED et miroirs chauffants'
    ],
    process: [
      'Analyse de la configuration existante',
      'Proposition de design et matériaux',
      'Travaux de plomberie et électricité',
      'Pose carrelage et faïence',
      'Installation équipements et finitions'
    ],
    averagePrice: '8 000 - 25 000€',
    duration: '2-4 semaines',
    image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&q=80',
      'https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80',
      'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?w=800&q=80'
    ],
    seo: {
      title: 'Rénovation Salle de Bain Paris | Douche Italienne | Entreprise AZ',
      description: 'Spécialiste rénovation salle de bain. Douche italienne, carrelage premium, plomberie certifiée. Devis gratuit.',
      keywords: ['rénovation salle de bain', 'douche italienne', 'salle de bain moderne']
    }
  },
  {
    id: 'peinture-revetements',
    title: 'Peinture & Revêtements',
    slug: 'peinture-revetements',
    shortDescription: 'Application professionnelle avec des matériaux de qualité supérieure',
    description: 'Nos peintres professionnels transforment vos espaces avec des finitions impeccables et des peintures écologiques de haute qualité.',
    icon: '🎨',
    features: [
      'Finitions impeccables (lisse, satinée, mate)',
      'Peintures écologiques sans COV',
      'Conseils décoration et harmonies de couleurs',
      'Papier peint et revêtements muraux',
      'Protection complète de vos meubles'
    ],
    process: [
      'Diagnostic des surfaces',
      'Préparation et mise en peinture',
      'Application des couches',
      'Finitions et retouches',
      'Nettoyage complet'
    ],
    averagePrice: '20 - 40€/m²',
    duration: '3-10 jours',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=800&q=80',
      'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=800&q=80',
      'https://images.unsplash.com/photo-1633114127408-af671c774b39?w=800&q=80'
    ],
    seo: {
      title: 'Peinture Intérieure Paris | Peintre Professionnel | Entreprise AZ',
      description: 'Peintre professionnel Paris. Peintures écologiques, finitions impeccables, conseils déco. Devis gratuit sous 24h.',
      keywords: ['peinture intérieure', 'peintre Paris', 'peinture écologique']
    }
  },
  {
    id: 'renovation-complete',
    title: 'Rénovation Complète',
    slug: 'renovation-complete',
    shortDescription: 'Prise en charge totale de votre projet de A à Z avec coordination des corps de métier',
    description: 'Confiez-nous la rénovation complète de votre bien. Nous coordonnons tous les corps de métier pour un résultat harmonieux dans les délais.',
    icon: '🏗️',
    features: [
      'Gestion de projet complète',
      'Coordination de tous les artisans',
      'Délais garantis par contrat',
      'Suivi personnalisé et transparence',
      'Garantie décennale'
    ],
    process: [
      'Audit complet et diagnostic',
      'Conception du projet global',
      'Planning détaillé des interventions',
      'Coordination des travaux',
      'Réception et garanties'
    ],
    averagePrice: '800 - 1500€/m²',
    duration: '2-6 mois',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ],
    seo: {
      title: 'Rénovation Appartement Paris | Rénovation Complète | Entreprise AZ',
      description: 'Expert rénovation complète appartement et maison. Gestion de projet, coordination artisans, délais garantis. Devis gratuit.',
      keywords: ['rénovation complète', 'rénovation appartement', 'rénovation maison Paris']
    }
  }
];

// Helper functions
export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getServiceById = (id) => {
  return services.find(service => service.id === id);
};

export const getFeaturedServices = (limit = 4) => {
  return services.slice(0, limit);
};