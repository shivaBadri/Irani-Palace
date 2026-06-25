/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Landmark } from 'lucide-react';

interface HeroProps {
  onScrollToMenu: () => void;
}

export default function Hero({ onScrollToMenu }: HeroProps) {
  return (
    <header className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-16 md:py-24" id="hero-section">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* Left Text details */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="col-span-1 md:col-span-6 flex flex-col justify-center"
          id="hero-text-block"
        >
          <div className="flex items-center gap-2 mb-4" id="hero-badge">
            <span className="w-6 h-[1px] bg-secondary-gold"></span>
            <span className="font-sans text-[11px] font-bold text-secondary-gold tracking-[0.25em] uppercase">
              CRAFTED TRADITION
            </span>
          </div>

          <h1
            className="font-serif text-5xl md:text-[76px] leading-[1.05] text-primary-brown font-bold mb-6 tracking-tight"
            id="hero-title"
          >
            The Irani Chai <br className="hidden lg:inline" /> Selection
          </h1>

          <p className="font-sans text-base md:text-lg text-text-muted leading-relaxed mb-10 max-w-lg" id="hero-desc">
            A beloved treasure presenting a unique fusion of robust black tea and rich Mawa (Khoya). Experience sweet, creamy indulgence with every royal sip.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4" id="hero-actions">
            <button
              onClick={onScrollToMenu}
              className="bg-primary-brown hover:bg-secondary-gold text-white px-8 py-4.5 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer group"
              id="btn-hero-menu"
            >
              Explore Menu
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </motion.div>

        {/* Right Heritage Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
          className="col-span-1 md:col-span-6 relative"
          id="hero-image-block"
        >
          <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl relative vintage-shadow rounded-sm border border-secondary-gold/10 bg-primary-brown/5">
            <img
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3HapmWw_UArnpxnTWpBkdET3s-CxXig4PIyKnuvJgO-hzJS70nqu2ef2RV-U1Tg_lg1lRvqcoEuCnjbVwe0jg7RO9pqqHow6q73ngakGSvWRFLB86UuP0cESlm19o_08d4MXWorIsr0NOx_eIaJA7auXNJS5D6lwgR5Q3BXqW25rl3wnexONLMQZteMfsEvklJibII9GOMq813vCsJEBk0q4aWXkFupHh6GWowCi1gg7mjtYVqGqgNSwf1BaRPY92EdC_9h7WIXg"
              alt="Cinematic shot of rich amber Irani Chai being slow-poured from an antique brass tea kettle into a traditional crystal cut glass, steam rising gracefully in a warm historic lounge."
              id="hero-main-img"
            />
            {/* Elegant corner highlights or picture frame accents */}
            <div className="absolute inset-0 border-[12px] border-bg-cream/10 pointer-events-none"></div>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
