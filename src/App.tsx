/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { Utensils } from 'lucide-react';

// Core Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryFilter from './components/CategoryFilter';
import MenuGrid from './components/MenuGrid';
import ItemDetailModal from './components/ItemDetailModal';
import HeritageStory from './components/HeritageStory';
import LocationsSection from './components/LocationsSection';
import FranchiseSection from './components/FranchiseSection';
import Footer from './components/Footer';

// Static Data & Types
import { MENU_ITEMS } from './data';
import { MenuItem } from './types';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Sync scroll positions with active navbar items
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'heritage', 'menu', 'locations', 'franchise'];
      const scrollPosition = window.scrollY + 250; // Offset for better trigger point

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    let targetId = id;
    if (id === 'menu') {
      targetId = 'menu-anchor';
    } else if (id === 'heritage') {
      targetId = 'heritage';
    }

    const element = document.getElementById(targetId);
    if (element) {
      const offset = 100;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Filter items based on active tab
  const filteredItems = selectedCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-bg-cream min-h-screen text-text-dark font-sans selection:bg-gold-light selection:text-primary-brown relative overflow-hidden" id="app-root">
      
      {/* Decorative ambient background curves or spots */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-gold/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="absolute top-[120vh] left-0 w-80 h-80 bg-primary-brown/5 rounded-full filter blur-2xl pointer-events-none"></div>

      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Main Sections Stack */}
      <main className="space-y-4">
        
        {/* Scroll Anchor for Hero */}
        <div id="hero"></div>
        <Hero
          onScrollToMenu={() => scrollToSection('menu')}
        />

        {/* The Heritage Story Chapter */}
        <HeritageStory />

        {/* Menu Title Anchor */}
        <div id="menu-anchor" className="pt-16"></div>
        <section className="max-w-7xl mx-auto px-6 md:px-12 text-center" id="menu">
          <div className="flex flex-col items-center">
            <span className="font-sans text-[10px] tracking-[0.25em] text-secondary-gold uppercase font-bold mb-3 flex items-center gap-1.5">
              <Utensils className="w-3.5 h-3.5" />
              FLAVORS OF TRADITION
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown">
              Irani Palace Menu
            </h2>
            <div className="w-12 h-[2px] bg-secondary-gold mt-4 mb-3"></div>
            <p className="font-sans text-sm text-text-muted max-w-lg leading-relaxed">
              Every dish is hand-crafted following traditional heritage. Savor authentic Irani chai paired with our legendary delicacies.
            </p>
          </div>
        </section>

        {/* Dynamic Category Filtering and Menu Bento Grid */}
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <MenuGrid
          items={filteredItems}
          onSelectItem={setSelectedItem}
        />

        {/* Interactive Locations Branch Showcases with maps */}
        <LocationsSection />

        {/* Franchise selection & detailed inquiry desk */}
        <FranchiseSection />

      </main>

      {/* Corporate Info Footer */}
      <Footer
        scrollToSection={scrollToSection}
      />

      {/* Portal Modals */}
      <AnimatePresence>
        {selectedItem && (
          <ItemDetailModal
            item={selectedItem}
            onClose={() => setSelectedItem(null)}
          />
        )}
      </AnimatePresence>

    </div>
  );
}
