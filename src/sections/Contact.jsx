// src/sections/Contact.jsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, ArrowRight, Clock, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/company';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici tu ajouteras l'envoi réel du formulaire
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <span className="inline-block px-4 py-2 bg-[#0B1E45]/5 text-[#0B1E45] text-sm font-semibold rounded-full mb-6">
            Contact
          </span>
          <h2 className="text-4xl lg:text-6xl font-bold text-[#0B1E45] mb-6">
            Parlons de votre projet
          </h2>
          <p className="text-xl text-[#0B1E45]/70 max-w-3xl mx-auto leading-relaxed">
            Obtenez un devis gratuit et personnalisé en moins de 48h
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contact Cards */}
            <div className="space-y-6">
              
              {/* Phone */}
              <a 
                href={`tel:${companyInfo.contact.phone.replace(/\s/g, '')}`}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#0B1E45] hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0B1E45] group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white group-hover:text-[#0B1E45] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    Téléphone
                  </h3>
                  <p className="text-lg text-[#0B1E45]/70 group-hover:text-white/90 transition-colors duration-300">
                    {companyInfo.contact.phone}
                  </p>
                  <p className="text-sm text-[#0B1E45]/50 group-hover:text-white/70 mt-1 transition-colors duration-300">
                    Lun-Ven 9h-18h
                  </p>
                </div>
              </a>

              {/* Email */}
              <a 
                href={`mailto:${companyInfo.contact.email}`}
                className="group flex items-start gap-4 p-6 bg-gray-50 rounded-2xl hover:bg-[#0B1E45] hover:text-white transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#0B1E45] group-hover:bg-white rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white group-hover:text-[#0B1E45] transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors duration-300">
                    Email
                  </h3>
                  <p className="text-lg text-[#0B1E45]/70 group-hover:text-white/90 transition-colors duration-300 break-all">
                    {companyInfo.contact.email}
                  </p>
                  <p className="text-sm text-[#0B1E45]/50 group-hover:text-white/70 mt-1 transition-colors duration-300">
                    Réponse sous {companyInfo.stats.averageResponseTime}
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#0B1E45] rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1E45] mb-2">
                    Adresse
                  </h3>
                  <address className="text-lg text-[#0B1E45]/70 not-italic">
                    {companyInfo.contact.address.street}<br />
                    {companyInfo.contact.address.postalCode} {companyInfo.contact.address.city}
                  </address>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl">
                <div className="w-12 h-12 bg-[#0B1E45] rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0B1E45] mb-2">
                    Horaires
                  </h3>
                  <div className="space-y-1 text-[#0B1E45]/70">
                    <p>{companyInfo.businessHours.weekdays}</p>
                    <p>{companyInfo.businessHours.saturday}</p>
                    <p>{companyInfo.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-gradient-to-br from-[#0B1E45] to-[#1a3a6b] p-6 rounded-2xl text-white">
              <h3 className="text-xl font-bold mb-4">Pourquoi nous choisir ?</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Devis gratuit sous 48h</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Garantie décennale</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>98% de clients satisfaits</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span>Artisans qualifiés RGE</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-gray-50 p-8 lg:p-10 rounded-3xl">
              
              {isSubmitted ? (
                // Success Message
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#0B1E45] mb-3">
                    Merci pour votre demande !
                  </h3>
                  <p className="text-[#0B1E45]/70 text-lg">
                    Nous vous répondrons dans les 24h.
                  </p>
                </div>
              ) : (
                // Contact Form
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label 
                      htmlFor="name"
                      className="block text-sm font-semibold text-[#0B1E45] mb-2"
                    >
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E45] focus:border-transparent transition-all"
                      placeholder="Jean Dupont"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label 
                        htmlFor="email"
                        className="block text-sm font-semibold text-[#0B1E45] mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E45] focus:border-transparent transition-all"
                        placeholder="jean.dupont@email.com"
                      />
                    </div>

                    <div>
                      <label 
                        htmlFor="phone"
                        className="block text-sm font-semibold text-[#0B1E45] mb-2"
                      >
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E45] focus:border-transparent transition-all"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label 
                      htmlFor="projectType"
                      className="block text-sm font-semibold text-[#0B1E45] mb-2"
                    >
                      Type de projet *
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E45] focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="">Sélectionnez un type de projet</option>
                      <option value="cuisine">Rénovation cuisine</option>
                      <option value="salle-de-bain">Rénovation salle de bain</option>
                      <option value="peinture">Peinture & revêtements</option>
                      <option value="complete">Rénovation complète</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label 
                      htmlFor="message"
                      className="block text-sm font-semibold text-[#0B1E45] mb-2"
                    >
                      Votre projet *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0B1E45] focus:border-transparent transition-all resize-none"
                      placeholder="Décrivez votre projet de rénovation : surface, localisation, délais souhaités..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="group w-full px-8 py-4 bg-[#0B1E45] text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Envoyer ma demande
                      <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>

                  {/* Privacy Notice */}
                  <p className="text-xs text-[#0B1E45]/60 text-center leading-relaxed">
                    En soumettant ce formulaire, vous acceptez que vos données soient utilisées pour vous recontacter. 
                    <a href="/mentions-legales" className="underline hover:text-[#0B1E45]">En savoir plus</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;