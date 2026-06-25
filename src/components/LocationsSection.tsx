/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, Phone, Clock, Compass, Globe } from 'lucide-react';
import { CAFE_LOCATIONS } from '../data';

export default function LocationsSection() {
  const [activeBranch, setActiveBranch] = useState(CAFE_LOCATIONS[0].id); // default Mancherial

  const currentBranch = CAFE_LOCATIONS.find((b) => b.id === activeBranch) || CAFE_LOCATIONS[0];

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 md:px-12" id="locations">
      <div className="text-center max-w-xl mx-auto mb-16">
        <div className="flex justify-center items-center gap-2 mb-3">
          <MapPin className="w-4 h-4 text-secondary-gold" />
          <span className="font-sans text-[11px] font-bold text-secondary-gold tracking-[0.2em] uppercase">
            REGIONAL OUTPOSTS
          </span>
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown">
          Our Heritage Locations
        </h2>
        <p className="font-sans text-sm text-text-muted mt-4 leading-relaxed">
          Step into our approved operational hubs in Telangana. Our cafés feature traditional clay samovars, welcoming atmospheres, and the finest signature Irani Chai.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="locations-grid">
        
        {/* Branch selectors & info card */}
        <div className="col-span-1 lg:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-3" id="branch-selectors">
            {CAFE_LOCATIONS.map((branch) => {
              const isActive = branch.id === activeBranch;
              return (
                <button
                  key={branch.id}
                  onClick={() => setActiveBranch(branch.id)}
                  className={`w-full p-5 text-left border transition-all rounded-sm flex justify-between items-center cursor-pointer ${
                    isActive
                      ? 'bg-primary-brown text-white border-primary-brown shadow-md'
                      : 'bg-white text-text-dark border-secondary-gold/20 hover:border-secondary-gold'
                  }`}
                  id={`btn-branch-${branch.id}`}
                >
                  <div>
                    <span className={`font-sans text-[9px] font-bold tracking-widest block ${isActive ? 'text-gold-light' : 'text-secondary-gold'}`}>
                      {branch.city}
                    </span>
                    <span className="font-serif text-base font-bold mt-1 block">
                      {branch.name}
                    </span>
                  </div>
                  <Compass className={`w-4 h-4 ${isActive ? 'text-gold-light animate-spin-slow' : 'text-secondary-gold'}`} />
                </button>
              );
            })}
          </div>

          {/* Active branch details card */}
          <div className="bg-primary-brown/5 border border-secondary-gold/15 p-6 md:p-8 rounded-sm space-y-6 flex-1 flex flex-col justify-center" id="branch-details-card">
            <h4 className="font-serif text-lg font-bold text-primary-brown border-b border-secondary-gold/15 pb-3">
              {currentBranch.name} Contact
            </h4>

            <div className="space-y-4 text-xs font-sans text-text-muted">
              
              {/* Address */}
              <div className="flex gap-3">
                <MapPin className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed font-medium text-text-dark">
                  {currentBranch.address}
                </p>
              </div>

              {/* Phone */}
              <div className="flex gap-3">
                <Phone className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                <a href={`tel:${currentBranch.phone}`} className="hover:text-secondary-gold transition-colors font-medium text-text-dark">
                  {currentBranch.phone}
                </a>
              </div>

              {/* Operating Hours */}
              <div className="flex gap-3">
                <Clock className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold uppercase tracking-wider block text-[9px] text-secondary-gold mb-1">
                    Operating Hours
                  </span>
                  <p className="leading-relaxed font-medium text-text-dark">
                    {currentBranch.hours}
                  </p>
                </div>
              </div>

              {/* Concierge Service */}
              <div className="flex gap-3 pt-2">
                <Globe className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                <p className="leading-relaxed italic">
                  Territory development packages, localized training support, and bulk startup kit orders are fully managed from this branch.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Dynamic Maps Frame */}
        <div className="col-span-1 lg:col-span-7" id="branch-map-container">
          <div className="w-full h-full min-h-[350px] lg:min-h-[480px] bg-primary-brown/5 rounded-sm overflow-hidden border border-secondary-gold/15 shadow-md relative">
            {currentBranch.mapEmbed ? (
              <iframe
                title={`Map of ${currentBranch.name}`}
                src={currentBranch.mapEmbed}
                className="w-full h-full border-0 absolute inset-0"
                allowFullScreen
                loading="lazy"
                id="location-map-frame"
              ></iframe>
            ) : (
              <div className="w-full h-full flex items-center justify-center font-sans text-xs text-text-muted">
                Interactive Map Loading...
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
