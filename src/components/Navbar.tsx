/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu as MenuIcon, X, Heart, Landmark, Calendar } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
}

export default function Navbar({
  activeSection,
  scrollToSection
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'heritage', label: 'Our Heritage' },
    { id: 'menu', label: 'Menu' },
    { id: 'locations', label: 'Locations' },
    { id: 'franchise', label: 'Franchise' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-45 transition-all duration-300 h-20 flex items-center ${
          isScrolled
            ? 'bg-bg-cream/90 backdrop-blur-md shadow-sm border-b border-secondary-gold/20'
            : 'bg-bg-cream/40 backdrop-blur-sm'
        }`}
        id="main-navbar"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="font-serif text-3xl font-semibold text-primary-brown hover:scale-105 transition-transform duration-300 cursor-pointer text-left"
            id="nav-logo"
          >
            Irani Palace
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  scrollToSection(link.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`font-sans text-xs font-semibold tracking-widest uppercase pb-1 transition-colors duration-300 cursor-pointer ${
                  activeSection === link.id
                    ? 'text-secondary-gold border-b-2 border-secondary-gold'
                    : 'text-text-dark hover:text-secondary-gold'
                }`}
                id={`link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile controllers */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-primary-brown focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
              id="btn-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-primary-brown/40 backdrop-blur-md transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
        id="mobile-drawer-overlay"
      >
        <div
          className={`absolute top-20 left-0 w-full bg-bg-cream shadow-xl border-t border-secondary-gold/10 p-6 flex flex-col space-y-4 transition-transform duration-300 ease-out origin-top ${
            isMobileMenuOpen ? 'transform scale-y-100' : 'transform scale-y-0'
          }`}
          onClick={(e) => e.stopPropagation()}
          id="mobile-drawer-content"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id);
                setIsMobileMenuOpen(false);
              }}
              className={`text-left py-2 font-sans text-sm font-semibold tracking-widest uppercase transition-colors ${
                activeSection === link.id ? 'text-secondary-gold' : 'text-text-dark'
              }`}
              id={`mobile-link-${link.id}`}
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
