// src/sections/Services.jsx
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { getFeaturedServices } from '../data/services';

const Services = () => {
  const services = getFeaturedServices();

  return (
    <section id="services" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-2 bg-[#0B1E45]/5 text-[#0B1E45] text-sm font-semibold rounded-full mb-6">
            Services
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B1E45] mb-6">
            Nos Services
          </h2>
          <p className="text-xl text-[#0B1E45]/70 max-w-3xl mx-auto leading-relaxed">
            Une expertise complète pour tous vos projets de rénovation intérieure
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.id}
              className="group bg-white p-8 lg:p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#0B1E45]/10"
            >
              {/* Icon */}
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#0B1E45] to-[#1a3a6b] rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl" role="img" aria-label={service.title}>
                  {service.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0B1E45] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#0B1E45]/70 mb-6 leading-relaxed">
                {service.shortDescription}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, i) => (
                  <li 
                    key={i} 
                    className="flex items-start gap-3 text-[#0B1E45]/80"
                  >
                    <Check 
                      className="w-5 h-5 text-[#0B1E45] flex-shrink-0 mt-0.5" 
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & Duration */}
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                <div>
                  <div className="text-sm text-[#0B1E45]/60 mb-1">
                    À partir de
                  </div>
                  <div className="text-lg font-bold text-[#0B1E45]">
                    {service.averagePrice}
                  </div>
                </div>
                <div className="w-px h-12 bg-gray-200" aria-hidden="true" />
                <div>
                  <div className="text-sm text-[#0B1E45]/60 mb-1">
                    Durée
                  </div>
                  <div className="text-lg font-bold text-[#0B1E45]">
                    {service.duration}
                  </div>
                </div>
              </div>

              {/* CTA Link */}
              <a
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 text-[#0B1E45] font-semibold group/link hover:gap-3 transition-all duration-300"
                aria-label={`En savoir plus sur ${service.title}`}
              >
                En savoir plus
                <ArrowRight 
                  className="w-5 h-5 transform group-hover/link:translate-x-1 transition-transform duration-300" 
                  aria-hidden="true"
                />
              </a>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#0B1E45]/70 mb-6">
            Un projet spécifique en tête ?
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0B1E45] text-white text-lg font-bold rounded-full hover:shadow-2xl hover:shadow-[#0B1E45]/20 hover:-translate-y-1 transition-all duration-300"
            aria-label="Voir tous nos services"
          >
            Voir tous nos services
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;