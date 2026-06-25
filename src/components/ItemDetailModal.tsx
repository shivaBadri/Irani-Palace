/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { X, Heart, Sparkles, CheckCircle2, Coffee, Leaf } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemDetailModalProps {
  item: MenuItem | null;
  onClose: () => void;
}

export default function ItemDetailModal({ item, onClose }: ItemDetailModalProps) {
  if (!item) return null;
  const showPrice = item.category === 'tea';

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-primary-brown/70 backdrop-blur-md flex items-center justify-center p-4 md:p-6"
      onClick={onClose}
      id="item-detail-modal-container"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ type: 'spring', damping: 25, stiffness: 250 }}
        className="relative bg-bg-cream max-w-4xl w-full rounded-sm shadow-2xl overflow-hidden border border-secondary-gold/20 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        id="item-detail-modal-card"
      >
        {/* Left Side: Large Img representation */}
        <div className="w-full md:w-1/2 relative bg-primary-brown/10 h-64 md:h-auto min-h-[250px] md:min-h-[450px]">
          <img
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
            src={item.image}
            alt={item.name}
            id="modal-item-image"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-brown/60 via-transparent to-transparent"></div>
          
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-gold-light uppercase bg-primary-brown/65 px-2.5 py-1 rounded-sm backdrop-blur-xs inline-block mb-2">
              {item.category.toUpperCase()} SELECTION
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold leading-tight" id="modal-item-name">
              {item.name}
            </h2>
          </div>

          {/* Close button on top of image for mobile */}
          <button
            onClick={onClose}
            className="absolute top-4 left-4 bg-primary-brown/60 hover:bg-primary-brown text-white p-2 rounded-full cursor-pointer transition-colors md:hidden"
            id="close-btn-mobile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side: Scrollable details content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col justify-between overflow-y-auto" id="modal-item-info">
          {/* Top header & Close button for desktop */}
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="font-sans text-xs font-semibold text-secondary-gold tracking-widest uppercase mb-1 block">
                Heritage Recipe
              </span>
              {showPrice && (
                <div className="text-2xl font-bold text-primary-brown font-serif">
                  ₹{item.price}
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 bg-primary-brown/5 hover:bg-primary-brown/10 text-primary-brown rounded-full cursor-pointer transition-colors hidden md:block"
                title="Close modal"
                id="close-btn-desktop"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Core Content */}
          <div className="space-y-6 flex-1 pr-1">
            {/* Short description */}
            <p className="font-sans text-sm text-text-dark leading-relaxed font-medium">
              {item.description}
            </p>

            {/* Cultural Heritage Story */}
            <div className="bg-primary-brown/5 p-4 border-l-2 border-secondary-gold">
              <div className="flex items-center gap-1.5 font-sans text-xs font-bold text-secondary-gold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                The Heritage Story
              </div>
              <p className="font-sans text-xs text-text-muted leading-relaxed italic">
                "{item.heritageStory}"
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h4 className="font-sans text-xs font-bold text-primary-brown uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Leaf className="w-3.5 h-3.5 text-secondary-gold" />
                Pure Ingredients
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, idx) => (
                  <span
                    key={idx}
                    className="font-sans text-xs text-text-muted bg-surface-container/50 px-3 py-1.5 border border-secondary-gold/10 rounded-sm flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3 h-3 text-secondary-gold" />
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            {/* Curated Pairing Recommendation */}
            <div className="border-t border-secondary-gold/15 pt-4">
              <h4 className="font-sans text-xs font-bold text-primary-brown uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                <Coffee className="w-3.5 h-3.5 text-secondary-gold" />
                Sommelier Pairing Recommendation
              </h4>
              <p className="font-sans text-xs text-text-muted leading-relaxed">
                We recommend enjoying this item alongside our{' '}
                <strong className="text-secondary-gold font-semibold">{item.pairingSuggestion}</strong> for an optimal balance of flavors.
              </p>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="mt-8 pt-4 border-t border-secondary-gold/10 flex flex-col gap-2">
            <div className="flex flex-wrap gap-1.5 justify-start mb-2">
              {item.dietaryTags.map((tag, idx) => (
                <span
                  key={idx}
                  className="font-sans text-[10px] tracking-wider font-bold text-secondary-gold bg-secondary-gold/5 border border-secondary-gold/15 px-2.5 py-1 uppercase rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <button
              onClick={onClose}
              className="w-full py-3.5 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 bg-primary-brown text-white hover:bg-secondary-gold cursor-pointer"
              id="modal-footer-action-btn"
            >
              Close Details
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
