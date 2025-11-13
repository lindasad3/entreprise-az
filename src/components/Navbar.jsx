import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('/');

  const NAV_LINKS = [
    { name: 'Accueil', path: '/' },
    { name: 'Réalisations', path: '/réalisations' },
    { name: 'Services', path: '/services' },
    { name: 'À propos', path: '/à-propos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Avis', path: '/avis-clients' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-sm border-b border-black/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            
            {/* Logo */}
            <a
              href="/"
              onClick={() => handleLinkClick('/')}
              className="relative z-50 group"
              aria-label="Retour à l'accueil - Entreprise AZ Rénovation"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-[#0B1E45] to-[#1a3a6b] rounded-xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                  <span className="text-white font-bold text-xl" aria-hidden="true">AZ</span>
                </div>
                <span className="font-bold text-xl text-[#0B1E45] hidden sm:block">
                  Entreprise AZ
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav aria-label="Navigation principale">
              <ul className="hidden lg:flex items-center gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.path}>
                    <a
                      href={link.path}
                      onClick={() => handleLinkClick(link.path)}
                      className={`relative px-5 py-2 text-[15px] font-medium transition-colors duration-300 ${
                        activeLink === link.path
                          ? 'text-[#0B1E45]'
                          : 'text-[#0B1E45]/60 hover:text-[#0B1E45]'
                      }`}
                      aria-current={activeLink === link.path ? 'page' : undefined}
                    >
                      {link.name}
                      {activeLink === link.path && (
                        <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-[#0B1E45] rounded-full" aria-hidden="true" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* CTA Button Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="/contact"
                className="group relative px-6 py-3 bg-[#0B1E45] text-white text-sm font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0B1E45]/20 hover:-translate-y-0.5"
                aria-label="Obtenir un devis gratuit pour vos travaux de rénovation"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Devis gratuit
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a3a6b] to-[#0B1E45] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative z-50 w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#0B1E45]/5 transition-colors duration-300"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isOpen}
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-full h-0.5 bg-[#0B1E45] rounded-full transition-all duration-300 ${
                    isOpen ? 'top-1.5 rotate-45' : 'top-0'
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 w-full h-0.5 bg-[#0B1E45] rounded-full transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span
                  className={`absolute left-0 w-full h-0.5 bg-[#0B1E45] rounded-full transition-all duration-300 ${
                    isOpen ? 'top-1.5 -rotate-45' : 'top-3'
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-500 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#0B1E45]/95 backdrop-blur-xl transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Menu Content */}
        <nav
          aria-label="Menu mobile"
          className={`relative h-full flex flex-col items-center justify-center px-8 transition-all duration-500 delay-100 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <ul className="space-y-2 w-full max-w-sm">
            {NAV_LINKS.map((link, index) => (
              <li
                key={link.path}
                className={`transform transition-all duration-500 ${
                  isOpen
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-8'
                }`}
                style={{ transitionDelay: `${index * 50 + 150}ms` }}
              >
                <a
                  href={link.path}
                  onClick={() => handleLinkClick(link.path)}
                  className={`block px-8 py-5 text-2xl font-bold rounded-2xl transition-all duration-300 ${
                    activeLink === link.path
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={activeLink === link.path ? 'page' : undefined}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile CTA */}
          <div
            className={`mt-12 w-full max-w-sm transform transition-all duration-500 ${
              isOpen
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '450ms' }}
          >
            <a
              href="/contact"
              onClick={() => handleLinkClick('/contact')}
              className="group flex items-center justify-center gap-3 w-full px-8 py-5 bg-white text-[#0B1E45] text-lg font-bold rounded-2xl hover:bg-white/90 transition-all duration-300"
              aria-label="Obtenir un devis gratuit pour vos travaux de rénovation"
            >
              Obtenir un devis gratuit
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;