import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Check, Star, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Realisations from '../sections/Realisations';
import About from '../sections/About';
import Reviews from '../sections/Reviews';
import Contact from '../sections/Contact';

function HomePage() {
 

  return (
    <div className="bg-white">
      <Hero />
      <Services />
      <Realisations />
      <About />
      <Reviews />
      <Contact />   
    </div>
  );
}

export default HomePage;