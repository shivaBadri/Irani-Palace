/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, Target, Trophy } from 'lucide-react';

export default function HeritageStory() {
  return (
    <section className="bg-primary-brown/5 py-24 border-y border-secondary-gold/10 space-y-24" id="heritage">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* ABOUT OUR IRANI PALACE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mb-24">
          {/* Text details */}
          <div className="col-span-1 lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2" id="heritage-badge">
              <span className="w-6 h-[1px] bg-secondary-gold"></span>
              <span className="font-sans text-[11px] font-bold text-secondary-gold tracking-[0.2em] uppercase">
                ABOUT OUR
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown leading-tight">
              Irani Palace
            </h2>

            <p className="font-sans text-base md:text-lg text-text-dark font-medium leading-relaxed">
              Irani Chai - A Timeless Taste Of Tradition Irani Chai, A Beloved Treasure From The Heart Of India, Is A Unique Fusion Of Robust Black Tea And Rich Mawa (Khoya), Offering A Sweet, Creamy Indulgence That Lingers On Your Palate. This Signature Blend Delivers A Truly Unforgettable Tea Experience.
            </p>

            <p className="font-sans text-sm md:text-base text-text-muted leading-relaxed font-semibold italic text-secondary-gold">
              Join The Irani Chai Legacy
            </p>
          </div>

          {/* Visual representations */}
          <div className="col-span-1 lg:col-span-5 relative">
            <div className="aspect-square overflow-hidden shadow-xl rounded-sm border border-secondary-gold/15 bg-white p-4 vintage-shadow">
              <div className="w-full h-full bg-primary-brown/5 overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAX8TE1Tthrmj5B_QGiRlLdKj7z71UaK3vc8JaJPVogbldVPS3p6BSjBhHnJfnZO4zeel-75BbdAuPpxjPoHt0lvCiK_0I3SLO_28qz9Bw4WnozTR57IOaPxl52sho2YstgoH31L0kOjivM0xB5XTZ3idn_z_B902agi5WSGV34gxQq6PAv_MyV6c5pv5C0yv10bgeNV8UuW4SFbYJTrdUGcNCtS18WJ7Wyjm7duIa_FJmhkWuumuEwuaDX4tNnzrdm-49NahOR_js"
                  alt="A cup of Irani Palace Chai on a saucer"
                  id="heritage-main-img"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>

        {/* VISION & MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-secondary-gold/15">
          {/* Vision Card */}
          <div className="bg-white p-8 border border-secondary-gold/10 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 bg-secondary-gold/10 rounded-full flex items-center justify-center text-secondary-gold mb-2">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary-brown">
              Vision
            </h3>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              To Be The Most Loved Irani Tea Franchise Brand Globally, Known For Our Cultural Heritage, Consistent Taste, And Customer-First Approach—Making "Irani Palace" A Household Name For Tea Lovers Everywhere.
            </p>
          </div>

          {/* Mission Card */}
          <div className="bg-white p-8 border border-secondary-gold/10 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 bg-secondary-gold/10 rounded-full flex items-center justify-center text-secondary-gold mb-2">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-primary-brown">
              Mission
            </h3>
            <p className="font-sans text-sm text-text-muted leading-relaxed">
              To Serve Authentic, High-Quality Irani Chai With A Royal Touch, Blending Traditional Flavors With Modern Service Standards. We Aim To Create A Warm And Memorable Tea Experience While Empowering Franchise Partners And Promoting Sustainable Growth.
            </p>
          </div>
        </div>

        {/* TARGET & GOAL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12">
          {/* Target Card */}
          <div className="bg-primary-brown text-white p-8 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 bg-gold-light/15 rounded-full flex items-center justify-center text-gold-light mb-2">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-light">
              Our Target
            </h3>
            <p className="font-sans text-sm text-gold-light/80 leading-relaxed">
              To Reach Tea Enthusiasts Across Urban And Semi-Urban Areas By Establishing A Strong Network Of Franchise Outlets That Deliver An Authentic Irani Chai Experience In A Clean, Modern, & Welcoming Environment.
            </p>
          </div>

          {/* Goal Card */}
          <div className="bg-primary-brown text-white p-8 rounded-sm shadow-sm space-y-4">
            <div className="w-12 h-12 bg-gold-light/15 rounded-full flex items-center justify-center text-gold-light mb-2">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gold-light">
              Our Goal
            </h3>
            <p className="font-sans text-sm text-gold-light/80 leading-relaxed">
              To Expand Irani Palace Into A Leading National Tea Franchise By Opening 100+ Outlets In The Next 3 Years, Ensuring Consistent Quality, Customer Satisfaction, And Profitable Growth For All Our Franchise Partners.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
