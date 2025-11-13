// src/utils/seo.js

import { companyInfo } from '../data/company';

// Configuration SEO par défaut pour la homepage
export const defaultSEO = {
  title: 'Entreprise AZ - Rénovation Intérieure Paris | Cuisine, Salle de Bain',
  description: 'Expert en rénovation d\'intérieur à Paris depuis 2009. Cuisine, salle de bain, peinture, rénovation complète. Devis gratuit sous 48h. ⭐ 4.9/5 sur 127 avis.',
  keywords: [
    'rénovation intérieure Paris',
    'rénovation cuisine Paris',
    'rénovation salle de bain Paris',
    'entreprise rénovation Paris',
    'rénovation appartement Paris',
    'travaux rénovation Paris'
  ],
  author: 'Entreprise AZ',
  canonical: 'https://www.entreprise-az.fr',
  ogImage: 'https://www.entreprise-az.fr/og-image.jpg',
  twitterCard: 'summary_large_image'
};

// Génération des meta tags pour React Helmet
export const generateMetaTags = (pageData = {}) => {
  const seo = { ...defaultSEO, ...pageData };
  
  return {
    title: seo.title,
    meta: [
      { name: 'description', content: seo.description },
      { name: 'keywords', content: seo.keywords.join(', ') },
      { name: 'author', content: seo.author },
      
      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: seo.title },
      { property: 'og:description', content: seo.description },
      { property: 'og:image', content: seo.ogImage },
      { property: 'og:url', content: seo.canonical },
      { property: 'og:site_name', content: companyInfo.name },
      
      // Twitter
      { name: 'twitter:card', content: seo.twitterCard },
      { name: 'twitter:title', content: seo.title },
      { name: 'twitter:description', content: seo.description },
      { name: 'twitter:image', content: seo.ogImage },
      
      // Mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#0B1E45' }
    ],
    link: [
      { rel: 'canonical', href: seo.canonical }
    ]
  };
};

// Structured Data (JSON-LD) pour Google
export const generateStructuredData = () => {
  return {
    // Organisation
    organization: {
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: companyInfo.name,
      description: companyInfo.description,
      url: 'https://www.entreprise-az.fr',
      logo: 'https://www.entreprise-az.fr/logo.png',
      telephone: companyInfo.contact.phone,
      email: companyInfo.contact.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.contact.address.street,
        addressLocality: companyInfo.contact.address.city,
        postalCode: companyInfo.contact.address.postalCode,
        addressCountry: companyInfo.contact.address.country
      },
      sameAs: Object.values(companyInfo.socialMedia),
      priceRange: '€€€',
      foundingDate: companyInfo.foundedYear.toString(),
      areaServed: companyInfo.stats.serviceAreas.map(area => ({
        '@type': 'City',
        name: area
      }))
    },

    // Service local
    localBusiness: {
      '@context': 'https://schema.org',
      '@type': 'Contractor',
      name: companyInfo.name,
      image: 'https://www.entreprise-az.fr/og-image.jpg',
      '@id': 'https://www.entreprise-az.fr',
      url: 'https://www.entreprise-az.fr',
      telephone: companyInfo.contact.phone,
      priceRange: '€€€',
      address: {
        '@type': 'PostalAddress',
        streetAddress: companyInfo.contact.address.street,
        addressLocality: companyInfo.contact.address.city,
        postalCode: companyInfo.contact.address.postalCode,
        addressCountry: 'FR'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 48.8566,
        longitude: 2.3522
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00'
        },
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: 'Saturday',
          opens: '10:00',
          closes: '13:00'
        }
      ]
    },

    // Avis agrégés
    aggregateRating: {
      '@context': 'https://schema.org',
      '@type': 'LocalBusiness',
      name: companyInfo.name,
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.9',
        bestRating: '5',
        worstRating: '1',
        ratingCount: '127'
      }
    },

    // Fil d'Ariane
    breadcrumb: (items) => ({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    }),

    // Service offert
    service: (service) => ({
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: service.title,
      description: service.description,
      provider: {
        '@type': 'HomeAndConstructionBusiness',
        name: companyInfo.name
      },
      areaServed: companyInfo.stats.serviceAreas,
      offers: {
        '@type': 'Offer',
        priceCurrency: 'EUR',
        price: service.averagePrice
      }
    }),

    // Projet/Réalisation
    project: (project) => ({
      '@context': 'https://schema.org',
      '@type': 'CreativeWork',
      name: project.title,
      description: project.description,
      creator: {
        '@type': 'HomeAndConstructionBusiness',
        name: companyInfo.name
      },
      datePublished: project.year.toString(),
      image: project.images[0]?.url
    })
  };
};

// Helper pour insérer le JSON-LD dans le head
export const insertStructuredData = (data) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(data);
  document.head.appendChild(script);
};

// SEO pour les pages
export const pageSEO = {
  home: {
    title: 'Entreprise AZ - Rénovation Intérieure Paris | Devis Gratuit',
    description: 'Expert en rénovation d\'intérieur à Paris depuis 2009. Cuisine, salle de bain, peinture, rénovation complète. ⭐ 4.9/5 - Devis gratuit sous 48h.',
    keywords: ['rénovation Paris', 'rénovation intérieure', 'entreprise rénovation'],
    canonical: 'https://www.entreprise-az.fr'
  },
  
  services: {
    title: 'Nos Services de Rénovation | Cuisine, Salle de Bain, Peinture',
    description: 'Découvrez tous nos services de rénovation : cuisine sur-mesure, salle de bain moderne, peinture, rénovation complète. Artisans qualifiés RGE.',
    keywords: ['services rénovation', 'rénovation cuisine', 'rénovation salle de bain'],
    canonical: 'https://www.entreprise-az.fr/services'
  },
  
  realisations: {
    title: 'Nos Réalisations - Portfolio Rénovation Paris | Entreprise AZ',
    description: 'Découvrez nos 250+ projets de rénovation à Paris. Photos avant/après, témoignages clients. Cuisine, salle de bain, appartements haussmanniens.',
    keywords: ['réalisations rénovation', 'portfolio rénovation Paris', 'photos rénovation'],
    canonical: 'https://www.entreprise-az.fr/realisations'
  },
  
  blog: {
    title: 'Blog Rénovation - Conseils & Astuces | Entreprise AZ',
    description: 'Conseils d\'experts en rénovation : prix, tendances, matériaux, démarches. Guides complets pour réussir votre projet de rénovation.',
    keywords: ['blog rénovation', 'conseils rénovation', 'prix rénovation'],
    canonical: 'https://www.entreprise-az.fr/blog'
  },
  
  contact: {
    title: 'Contact - Devis Gratuit Rénovation Paris | Entreprise AZ',
    description: 'Contactez-nous pour un devis gratuit sous 48h. ☎️ 01 23 45 67 89 | Paris et Île-de-France. Réponse rapide garantie.',
    keywords: ['devis rénovation Paris', 'contact rénovation', 'devis gratuit'],
    canonical: 'https://www.entreprise-az.fr/contact'
  }
};

// Helper pour les URLs canoniques
export const getCanonicalUrl = (path = '') => {
  const baseUrl = 'https://www.entreprise-az.fr';
  return `${baseUrl}${path}`;
};