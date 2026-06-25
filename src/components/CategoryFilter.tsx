/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  const categories = [
    { id: 'all', label: 'ALL SELECTIONS' },
    { id: 'tea', label: 'SIGNATURE TEA' },
    { id: 'snacks', label: 'AUTHENTIC SNACKS' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 mb-16" id="menu-category-section">
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 border-y border-secondary-gold/10 py-6">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`font-sans text-[11px] sm:text-xs font-bold tracking-[0.15em] px-4 py-2 transition-all duration-300 relative cursor-pointer ${
                isActive
                  ? 'text-secondary-gold'
                  : 'text-text-muted hover:text-secondary-gold'
              }`}
              id={`filter-${cat.id}`}
            >
              {cat.label}
              {isActive && (
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-secondary-gold" id={`active-bar-${cat.id}`}></span>
              )}
            </button>
          );
        })}
      </div>
    </section>
  );
}
