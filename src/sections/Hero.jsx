// src/sections/Hero.jsx
import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { companyInfo } from '../data/company';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="accueil" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0B1E45] via-[#1a3a6b] to-[#0B1E45]"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 py-32 lg:py-40">
        <div className="text-center space-y-8 lg:space-y-12">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            Expert en rénovation depuis {new Date().getFullYear() - companyInfo.foundedYear} ans
          </div>

          {/* Main title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1]">
            <span className="block">Rénovation d'intérieur</span>
            <span className="block mt-2 bg-gradient-to-r from-white via-white/90 to-white/80 bg-clip-text text-transparent">
              sur-mesure
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-4xl mx-auto leading-relaxed font-light">
            Transformez votre espace de vie avec notre expertise en rénovation.
            <span className="block mt-3 text-white/70">
              Design, qualité et respect des délais garantis.
            </span>
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group px-8 py-4 bg-white text-[#0B1E45] text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 transition-all duration-300 min-w-[240px]"
              aria-label="Demander un devis gratuit"
            >
              <span className="flex items-center justify-center gap-2">
                Devis gratuit
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
              </span>
            </button>
            
            <button
              onClick={() => scrollToSection('realisations')}
              className="group px-8 py-4 border-2 border-white/30 text-white text-lg font-bold rounded-full hover:bg-white/10 hover:border-white transition-all duration-300 backdrop-blur-sm min-w-[240px]"
              aria-label="Voir nos réalisations"
            >
              Nos réalisations
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16 pt-12 lg:pt-16">
            <div className="text-center min-w-[120px]">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {companyInfo.stats.projectsCompleted}+
              </div>
              <div className="text-white/70 text-sm lg:text-base">
                Projets réalisés
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-white/20" aria-hidden="true" />
            
            <div className="text-center min-w-[120px]">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {companyInfo.stats.yearsExperience} ans
              </div>
              <div className="text-white/70 text-sm lg:text-base">
                D'expérience
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-16 bg-white/20" aria-hidden="true" />
            
            <div className="text-center min-w-[120px]">
              <div className="text-4xl lg:text-5xl font-bold text-white mb-1">
                {companyInfo.stats.satisfactionRate}%
              </div>
              <div className="text-white/70 text-sm lg:text-base">
                Clients satisfaits
              </div>
            </div>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-white/60 text-sm">
            {companyInfo.certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full backdrop-blur-sm"
              >
                <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-medium text-white/80">{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection('services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/60 hover:text-white transition-colors duration-300"
        aria-label="Défiler vers les services"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;