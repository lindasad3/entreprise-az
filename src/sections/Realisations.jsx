// src/sections/Realisations.jsx
import React, { useState } from 'react';
import { ArrowRight, MapPin, Calendar, Ruler } from 'lucide-react';
import { getFeaturedProjects } from '../data/projects';

const Realisations = () => {
  const projects = getFeaturedProjects();
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section id="realisations" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-2 bg-[#0B1E45]/5 text-[#0B1E45] text-sm font-semibold rounded-full mb-6">
            Portfolio
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B1E45] mb-6">
            Nos Réalisations
          </h2>
          <p className="text-xl text-[#0B1E45]/70 max-w-3xl mx-auto leading-relaxed">
            Découvrez nos projets de rénovation qui ont transformé des espaces de vie
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className="group relative overflow-hidden rounded-3xl aspect-[4/3] cursor-pointer"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image */}
              <img
                src={project.images[0].url}
                alt={project.images[0].alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading={index < 2 ? 'eager' : 'lazy'}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E45]/95 via-[#0B1E45]/60 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                
                {/* Category Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold mb-4 w-fit">
                  {project.category}
                </div>

                {/* Title */}
                <h3 className="text-2xl lg:text-3xl font-bold mb-3 transform group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                  {project.title}
                </h3>

                {/* Project Details */}
                <div 
                  className={`space-y-2 mb-4 transform transition-all duration-300 ${
                    hoveredProject === project.id 
                      ? 'translate-y-0 opacity-100' 
                      : 'translate-y-4 opacity-0'
                  }`}
                >
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <MapPin className="w-4 h-4" aria-hidden="true" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Ruler className="w-4 h-4" aria-hidden="true" />
                    <span>{project.surface}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/90 text-sm">
                    <Calendar className="w-4 h-4" aria-hidden="true" />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Description (visible on hover) */}
                <p 
                  className={`text-white/80 text-sm leading-relaxed mb-4 transform transition-all duration-300 ${
                    hoveredProject === project.id 
                      ? 'translate-y-0 opacity-100 max-h-20' 
                      : 'translate-y-4 opacity-0 max-h-0'
                  }`}
                >
                  {project.shortDescription}
                </p>

                {/* CTA Link */}
                <a
                  href={`/realisations/${project.slug}`}
                  className="inline-flex items-center gap-2 text-white font-semibold group/link transform group-hover:translate-y-0 translate-y-2 transition-all duration-300"
                  aria-label={`Voir le projet ${project.title}`}
                >
                  Voir le projet
                  <ArrowRight 
                    className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <p className="text-lg text-[#0B1E45]/70 mb-6">
            Plus de {projects.length * 60}+ projets réalisés
          </p>
          <a
            href="/realisations"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1E45] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#0B1E45]/20 hover:-translate-y-1 transition-all duration-300"
            aria-label="Voir toutes nos réalisations"
          >
            Voir tout le portfolio
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Realisations;