// src/sections/About.jsx
import React from 'react';
import { companyInfo } from '../data/company';

const About = () => {
  return (
    <section id="a-propos" className="py-24 lg:py-32 bg-[#0B1E45] text-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-8">
            
            {/* Badge */}
            <span className="inline-block px-4 py-2 bg-white/10 text-white text-sm font-semibold rounded-full backdrop-blur-sm">
              À propos
            </span>

            {/* Title */}
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
              {companyInfo.stats.yearsExperience} ans d'expertise
              <span className="block mt-2 text-white/80">en rénovation</span>
            </h2>

            {/* Description */}
            <div className="space-y-6 text-lg text-white/80 leading-relaxed">
              <p>
                <strong className="text-white font-semibold">{companyInfo.name}</strong> est spécialisée dans la rénovation d'intérieur haut de gamme depuis {companyInfo.foundedYear}. Notre équipe d'artisans qualifiés met son savoir-faire au service de votre projet.
              </p>
              <p>
                Nous accompagnons particuliers et professionnels dans la concrétisation de leurs projets, du conseil initial à la livraison finale, en garantissant qualité, délais et budget.
              </p>
              <p>
                Notre engagement : transformer votre espace de vie en un lieu unique qui vous ressemble, avec des finitions impeccables et des matériaux de première qualité.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6 pt-6">
              {companyInfo.values.map((value, index) => (
                <div 
                  key={index}
                  className="p-6 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="text-3xl mb-3" role="img" aria-label={value.title}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    {value.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold mb-2">
                  {companyInfo.stats.projectsCompleted}+
                </div>
                <div className="text-white/70 text-sm">
                  Projets livrés
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold mb-2">
                  {companyInfo.stats.satisfactionRate}%
                </div>
                <div className="text-white/70 text-sm">
                  Satisfaction client
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold mb-2">
                  {companyInfo.stats.teamMembers}
                </div>
                <div className="text-white/70 text-sm">
                  Artisans qualifiés
                </div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-4xl font-bold mb-2">
                  {companyInfo.stats.averageResponseTime}
                </div>
                <div className="text-white/70 text-sm">
                  Réponse devis
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Image & Badge */}
          <div className="relative">
            
            {/* Main Image */}
            <div className="relative aspect-square rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80"
                alt="Équipe Entreprise AZ au travail"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Gradient overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E45]/40 to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-8 -left-8 bg-white text-[#0B1E45] p-8 rounded-2xl shadow-2xl max-w-[240px]">
              <div className="flex items-baseline gap-2 mb-2">
                <div className="text-5xl font-bold">
                  {companyInfo.stats.yearsExperience}
                </div>
                <div className="text-xl font-semibold">ans</div>
              </div>
              <div className="text-lg font-semibold">
                d'excellence
              </div>
              <div className="text-sm text-[#0B1E45]/70 mt-2">
                Au service de vos projets
              </div>
            </div>

            {/* Certifications floating badges */}
            <div className="hidden lg:block absolute -top-6 -right-6 space-y-3">
              {companyInfo.certifications.slice(0, 2).map((cert, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-xl border border-white/20 px-4 py-3 rounded-xl text-sm font-semibold shadow-xl"
                >
                  ✓ {cert.name}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-20 pt-12 border-t border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              Zones d'intervention
            </h3>
            <p className="text-white/70">
              Nous intervenons dans toute l'Île-de-France
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {companyInfo.stats.serviceAreas.map((area, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white/90 font-medium hover:bg-white/10 transition-colors duration-300"
              >
                {area}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;