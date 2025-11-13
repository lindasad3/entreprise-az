// src/sections/Reviews.jsx
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { getRecentReviews, reviewsStats } from '../data/reviews';

const Reviews = () => {
  const reviews = getRecentReviews(3);

  // Helper pour afficher les étoiles
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
        aria-hidden="true"
      />
    ));
  };

  // Helper pour formater la date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays < 30) {
      return `Il y a ${Math.floor(diffDays / 7)} semaine${Math.floor(diffDays / 7) > 1 ? 's' : ''}`;
    } else if (diffDays < 365) {
      return `Il y a ${Math.floor(diffDays / 30)} mois`;
    } else {
      return `Il y a ${Math.floor(diffDays / 365)} an${Math.floor(diffDays / 365) > 1 ? 's' : ''}`;
    }
  };

  return (
    <section id="avis" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-2 bg-[#0B1E45]/5 text-[#0B1E45] text-sm font-semibold rounded-full mb-6">
            Témoignages
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B1E45] mb-6">
            Avis Clients
          </h2>
          <p className="text-xl text-[#0B1E45]/70 max-w-3xl mx-auto leading-relaxed">
            La satisfaction de nos clients est notre plus belle récompense
          </p>

          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-6 mt-8 p-6 bg-white rounded-2xl max-w-md mx-auto shadow-sm">
            <div className="text-center">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-5xl font-bold text-[#0B1E45]">
                  {reviewsStats.averageRating}
                </span>
                <span className="text-2xl text-[#0B1E45]/60">/5</span>
              </div>
              <div className="flex gap-1 justify-center mb-1">
                {renderStars(5)}
              </div>
              <p className="text-sm text-[#0B1E45]/70">
                Basé sur {reviewsStats.totalReviews} avis
              </p>
            </div>
            <div className="w-px h-20 bg-gray-200" aria-hidden="true" />
            <div className="text-center">
              <div className="text-4xl font-bold text-[#0B1E45] mb-2">
                {reviewsStats.recommendationRate}%
              </div>
              <p className="text-sm text-[#0B1E45]/70">
                Taux de<br />recommandation
              </p>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-16 h-16 text-[#0B1E45]" aria-hidden="true" />
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4" role="img" aria-label={`Note: ${review.rating} sur 5 étoiles`}>
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <blockquote className="text-[#0B1E45]/80 mb-6 leading-relaxed relative z-10">
                "{review.text}"
              </blockquote>

              {/* Author Info */}
              <div className="pt-6 border-t border-gray-100">
                <div className="flex items-center gap-4">
                  <img
                    src={review.avatar}
                    alt=""
                    className="w-12 h-12 rounded-full bg-gray-100"
                    loading="lazy"
                  />
                  <div>
                    <div className="font-bold text-[#0B1E45] flex items-center gap-2">
                      {review.author}
                      {review.verified && (
                        <svg 
                          className="w-4 h-4 text-blue-500" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                          aria-label="Avis vérifié"
                        >
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <div className="text-sm text-[#0B1E45]/60">
                      {review.location} · {formatDate(review.date)}
                    </div>
                    <div className="text-xs text-[#0B1E45]/50 mt-1">
                      {review.projectType}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0B1E45] mb-2">
              {reviewsStats.verifiedPercentage}%
            </div>
            <p className="text-[#0B1E45]/70 text-sm">
              Avis vérifiés
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0B1E45] mb-2">
              {reviewsStats.ratingDistribution[5]}
            </div>
            <p className="text-[#0B1E45]/70 text-sm">
              Notes 5 étoiles
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0B1E45] mb-2">
              {reviewsStats.recommendationRate}%
            </div>
            <p className="text-[#0B1E45]/70 text-sm">
              Recommandent
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <p className="text-lg text-[#0B1E45]/70 mb-6">
            Rejoignez nos clients satisfaits
          </p>
          <a
            href="/avis-clients"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#0B1E45] text-[#0B1E45] text-lg font-bold rounded-full hover:bg-[#0B1E45] hover:text-white transition-all duration-300"
            aria-label="Voir tous les avis clients"
          >
            Voir tous les avis
          </a>
        </div>
      </div>
    </section>
  );
};

export default Reviews;