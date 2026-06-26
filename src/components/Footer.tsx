/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Share2, MessageCircle } from 'lucide-react';

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Irani Palace Premium Irani Heritage',
        text: 'Experience the authentic Irani Palace culture and signature slow-brewed tea.',
        url: window.location.href
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Irani Palace website link copied to clipboard!');
    }
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918008181919?text=Hello%20Irani%20Palace%2C%20I%20would%20like%20to%20know%20more.', '_blank', 'noopener,noreferrer');
  };

  return (
    <footer className="bg-primary-brown text-white py-20 border-t border-secondary-gold/25" id="franchise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gold-light tracking-wide">
              Irani Palace
            </h2>
            <p className="font-sans text-sm text-gold-light/75 max-w-sm leading-relaxed">
              Preserving the soul of Irani café culture. A blend of history, hospitality, and the finest tea leaves in the world with a royal touch.
            </p>
            <div className="flex gap-4">
              <button
                onClick={handleShare}
                className="w-10 h-10 border border-secondary-gold/30 rounded-full flex items-center justify-center hover:bg-secondary-gold hover:text-primary-brown transition-all cursor-pointer text-gold-light"
                title="Share Website"
                id="footer-share-btn"
              >
                <Share2 className="w-4 h-4" />
              </button>
              <button
                onClick={handleWhatsApp}
                className="w-10 h-10 border border-secondary-gold/30 rounded-full flex items-center justify-center hover:bg-secondary-gold hover:text-primary-brown transition-all cursor-pointer text-gold-light"
                title="Chat on WhatsApp"
                id="footer-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-sans text-xs font-bold text-secondary-gold tracking-[0.2em] uppercase mb-6">
              EXPLORE
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              <li>
                <button
                  onClick={() => scrollToSection('heritage')}
                  className="text-gold-light/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('menu')}
                  className="text-gold-light/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  The Menu
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('locations')}
                  className="text-gold-light/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Outposts
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-sans text-xs font-bold text-secondary-gold tracking-[0.2em] uppercase mb-6">
              LEGAL
            </h4>
            <ul className="space-y-3 font-sans text-xs">
              <li>
                <span className="text-gold-light/50">Privacy Policy</span>
              </li>
              <li>
                <span className="text-gold-light/50">Terms of Service</span>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('locations')}
                  className="text-gold-light/70 hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-secondary-gold/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans">
          <p className="text-gold-light/50 text-center md:text-left">
            © {currentYear} Irani Palace Premium Irani Heritage. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] tracking-[0.2em] text-gold-light/60 font-bold">
            <span className="hover:text-gold-light cursor-pointer transition-colors">MANCHERIAL</span>
            <span className="hover:text-gold-light cursor-pointer transition-colors">KALWAKURTHI</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
