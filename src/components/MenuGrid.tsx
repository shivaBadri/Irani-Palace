/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart, Eye, Sparkles, Clock, Compass } from 'lucide-react';
import { MenuItem } from '../types';

interface MenuGridProps {
  items: MenuItem[];
  onSelectItem: (item: MenuItem) => void;
}

export default function MenuGrid({ items, onSelectItem }: MenuGridProps) {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-24" id="menu-grid-section">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12" id="menu-items-grid">
        <AnimatePresence mode="popLayout">
          {items.map((item, index) => {
            const isBiryani = item.id === 'nizami-chicken-dum-biryani';
            const colSpanClass = isBiryani ? 'md:col-span-2 lg:col-span-2' : '';
            const aspectClass = isBiryani ? 'aspect-[16/9]' : 'aspect-square';
            const showPrice = item.category === 'tea';

            return (
              <motion.div
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.05 }}
                key={item.id}
                className={`group flex flex-col justify-between ${colSpanClass}`}
                id={`menu-card-${item.id}`}
              >
                <div>
                  {/* Image Container with Actions */}
                  <div className={`w-full ${aspectClass} mb-6 overflow-hidden relative shadow-lg rounded-sm border border-secondary-gold/10 bg-primary-brown/5`}>
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      src={item.image}
                      alt={item.name}
                      id={`img-${item.id}`}
                    />

                    {/* Left overlay chips */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                      {item.isSignature && (
                        <span className="bg-secondary-gold text-white px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase shadow-sm flex items-center gap-1">
                          <Sparkles className="w-3 h-3" />
                          SIGNATURE
                        </span>
                      )}
                      {item.availableTimeText && (
                        <span className="bg-primary-brown text-gold-light px-3 py-1 font-sans text-[10px] font-bold tracking-widest uppercase shadow-sm flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {item.availableTimeText}
                        </span>
                      )}
                    </div>

                    {/* Action buttons (View Detail Only) */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <button
                        onClick={() => onSelectItem(item)}
                        className="w-10 h-10 bg-bg-cream hover:bg-gold-light text-primary-brown rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform cursor-pointer border border-secondary-gold/10"
                        title="View recipe heritage & details"
                        id={`view-btn-${item.id}`}
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Subtle Hover Gradient Mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    </div>
                  </div>

                  {/* Details Header */}
                  <div className="flex justify-between items-start mb-2 gap-4">
                    <h3 className="font-serif text-2xl md:text-[28px] text-primary-brown font-semibold leading-snug group-hover:text-secondary-gold transition-colors">
                      {item.name}
                    </h3>
                    {showPrice && (
                      <span className="font-sans text-base md:text-lg font-bold text-secondary-gold whitespace-nowrap mt-1">
                        ₹{item.price}
                      </span>
                    )}
                  </div>

                  {/* Short Description with elegant Line-Accent indicator */}
                  <p className="font-sans text-sm text-text-muted leading-relaxed line-accent mb-4 max-w-xl">
                    {item.description}
                  </p>
                </div>

                {/* Card action footer for engagement */}
                <div className="mt-4 pt-2 flex items-center justify-between border-t border-secondary-gold/5">
                  <div className="flex gap-2">
                    {item.dietaryTags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-sans text-[10px] text-text-muted/80 bg-primary-brown/5 px-2.5 py-1 rounded-full uppercase font-medium tracking-wider"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSelectItem(item)}
                    className="font-sans text-[10px] font-bold text-secondary-gold hover:text-primary-brown uppercase tracking-widest flex items-center gap-1.5 group cursor-pointer"
                    id={`learn-more-${item.id}`}
                  >
                    <Compass className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    Heritage Story
                  </button>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
}
