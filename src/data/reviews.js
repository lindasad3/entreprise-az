// src/data/reviews.js

export const reviews = [
  {
    id: 1,
    author: 'Sophie Martin',
    role: 'Particulier',
    location: 'Paris 16ème',
    rating: 5,
    date: '2024-10-15',
    projectType: 'Rénovation complète',
    text: 'Travail impeccable ! L\'équipe a rénové notre appartement en respectant parfaitement les délais. Très professionnels et à l\'écoute de nos besoins. Le résultat est au-delà de nos attentes.',
    avatar: 'https://ui-avatars.com/api/?name=Sophie+Martin&background=0B1E45&color=fff',
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400&q=80'
    ]
  },
  {
    id: 2,
    author: 'Thomas Dubois',
    role: 'Particulier',
    location: 'Neuilly-sur-Seine',
    rating: 5,
    date: '2024-09-20',
    projectType: 'Cuisine',
    text: 'Excellent rapport qualité-prix. Notre cuisine est magnifique et ultra fonctionnelle. L\'équipe d\'Entreprise AZ a su nous conseiller sur les meilleurs choix. Je recommande sans hésitation !',
    avatar: 'https://ui-avatars.com/api/?name=Thomas+Dubois&background=0B1E45&color=fff',
    verified: true,
    images: []
  },
  {
    id: 3,
    author: 'Marie Laurent',
    role: 'Particulier',
    location: 'Boulogne-Billancourt',
    rating: 5,
    date: '2024-08-10',
    projectType: 'Salle de bain',
    text: 'Une équipe formidable qui a su comprendre nos besoins. La rénovation de notre salle de bain s\'est déroulée sans aucun problème. Très satisfaits du résultat !',
    avatar: 'https://ui-avatars.com/api/?name=Marie+Laurent&background=0B1E45&color=fff',
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=400&q=80'
    ]
  },
  {
    id: 4,
    author: 'Alexandre Petit',
    role: 'Particulier',
    location: 'Montreuil',
    rating: 5,
    date: '2024-07-25',
    projectType: 'Rénovation complète',
    text: 'Entreprise AZ a transformé notre ancien atelier en un magnifique loft. Le suivi de chantier était exemplaire avec des points réguliers. Un vrai professionnalisme !',
    avatar: 'https://ui-avatars.com/api/?name=Alexandre+Petit&background=0B1E45&color=fff',
    verified: true,
    images: []
  },
  {
    id: 5,
    author: 'Isabelle Rousseau',
    role: 'Particulier',
    location: 'Paris 15ème',
    rating: 5,
    date: '2024-06-12',
    projectType: 'Peinture',
    text: 'Travail soigné et propre. Les peintres étaient ponctuels et très méticuleux. Notre appartement a retrouvé une seconde jeunesse. Merci à toute l\'équipe !',
    avatar: 'https://ui-avatars.com/api/?name=Isabelle+Rousseau&background=0B1E45&color=fff',
    verified: true,
    images: []
  },
  {
    id: 6,
    author: 'David Chen',
    role: 'Professionnel',
    location: 'Paris 9ème',
    rating: 5,
    date: '2024-05-30',
    projectType: 'Rénovation bureau',
    text: 'Rénovation de nos bureaux réalisée dans les temps pour l\'ouverture. Coordination parfaite entre les différents corps de métier. Je recommande vivement pour les projets professionnels.',
    avatar: 'https://ui-avatars.com/api/?name=David+Chen&background=0B1E45&color=fff',
    verified: true,
    images: []
  },
  {
    id: 7,
    author: 'Caroline Blanc',
    role: 'Particulier',
    location: 'Levallois-Perret',
    rating: 5,
    date: '2024-04-18',
    projectType: 'Cuisine',
    text: 'De la conception à la réalisation, tout était parfait. L\'équipe a été de bon conseil sur le choix des matériaux. Notre cuisine est devenue la pièce préférée de la maison !',
    avatar: 'https://ui-avatars.com/api/?name=Caroline+Blanc&background=0B1E45&color=fff',
    verified: true,
    images: [
      'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&q=80'
    ]
  },
  {
    id: 8,
    author: 'Pierre Moreau',
    role: 'Particulier',
    location: 'Courbevoie',
    rating: 5,
    date: '2024-03-22',
    projectType: 'Salle de bain',
    text: 'Très content de la prestation. La douche italienne est sublime et les finitions sont nickel. Équipe sérieuse et prix transparent. À recommander !',
    avatar: 'https://ui-avatars.com/api/?name=Pierre+Moreau&background=0B1E45&color=fff',
    verified: true,
    images: []
  }
];

// Stats globales
export const reviewsStats = {
  totalReviews: 127,
  averageRating: 4.9,
  ratingDistribution: {
    5: 118,
    4: 7,
    3: 2,
    2: 0,
    1: 0
  },
  verifiedPercentage: 100,
  recommendationRate: 98
};

// Helper functions
export const getRecentReviews = (limit = 3) => {
  return reviews
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, limit);
};

export const getReviewsByRating = (rating) => {
  return reviews.filter(review => review.rating === rating);
};

export const getReviewsByProjectType = (projectType) => {
  return reviews.filter(review => review.projectType === projectType);
};

export const getVerifiedReviews = () => {
  return reviews.filter(review => review.verified);
};

export const getReviewsWithImages = () => {
  return reviews.filter(review => review.images && review.images.length > 0);
};