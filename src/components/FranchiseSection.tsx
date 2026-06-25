/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Award, 
  FileText, 
  Search, 
  ChevronDown, 
  ChevronUp, 
  Calculator, 
  Mail, 
  Phone, 
  Compass, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  Info
} from 'lucide-react';
import { STARTUP_KIT_ITEMS } from '../data';

export default function FranchiseSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [selectedCity, setSelectedCity] = useState('Mancherial');
  const [isKitExpanded, setIsKitExpanded] = useState(false);

  // Filter startup kit items
  const filteredKit = STARTUP_KIT_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: 'all', label: 'All Items' },
    { id: 'Kitchen Equipments', label: 'Kitchen Equipments' },
    { id: 'Packaging & Materials', label: 'Packaging & Materials' },
    { id: 'Starter Consumables', label: 'Consumables' },
    { id: 'Uniform & Utilities', label: 'Uniform & Utilities' }
  ];

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (applicantName && applicantEmail && applicantPhone) {
      setFormSubmitted(true);
    }
  };

  return (
    <section className="bg-primary-brown/5 py-24 border-t border-secondary-gold/15" id="franchise">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Brand Banner */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary-gold/10 rounded-full border border-secondary-gold/15 mb-4">
            <Award className="w-4 h-4 text-secondary-gold" />
            <span className="font-sans text-[10px] font-bold text-secondary-gold tracking-[0.2em] uppercase">
              OWN A ROYAL LEGACY
            </span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-brown leading-tight">
            Why Choose the Irani Palace Franchise?
          </h2>
          <p className="font-sans text-sm text-text-muted mt-4 leading-relaxed">
            With a proven business model, strategic pricing, and cost management insights, Irani Palace offers a franchise opportunity designed for maximum return on investment.
          </p>
        </div>

        {/* Core Value Props (Pages 3 & 4 of PDF) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" id="franchise-props">
          {/* Tradition You Can Trust */}
          <div className="bg-white p-8 border border-secondary-gold/15 rounded-sm shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-brown/5 rounded-sm flex items-center justify-center text-secondary-gold mb-6 border border-secondary-gold/10">
              <Compass className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-primary-brown mb-3">
              Tradition You Can Trust
            </h3>
            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
              At Irani Palace, We Uphold The Rich Heritage Of Irani Chai By Using Premium Ingredients And Time-Honored Brewing Techniques To Preserve Its Original Taste And Charm.
            </p>
          </div>

          {/* Franchise Support & Hands-On Training */}
          <div className="bg-white p-8 border border-secondary-gold/15 rounded-sm shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-brown/5 rounded-sm flex items-center justify-center text-secondary-gold mb-6 border border-secondary-gold/10">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-primary-brown mb-3">
              Franchise Support & Training
            </h3>
            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
              We provide complete support, including free training, promotional assistance, and operational guidance to ensure your franchise journey is smooth and successful. Our seasoned experts provide hands-on training to equip you & your staff.
            </p>
          </div>

          {/* No Renewal Charges & Ongoing Support */}
          <div className="bg-white p-8 border border-secondary-gold/15 rounded-sm shadow-xs hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-primary-brown/5 rounded-sm flex items-center justify-center text-secondary-gold mb-6 border border-secondary-gold/10">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-lg font-bold text-primary-brown mb-3">
              No Renewal Charges
            </h3>
            <p className="font-sans text-xs md:text-sm text-text-muted leading-relaxed">
              Enjoy Lifetime Franchise Benefits With No Hidden Renewal Fees - A One-Time Investment For A Long-Term Business Opportunity. We are committed to your long-term success with reliable ongoing support.
            </p>
          </div>
        </div>

        {/* Startup Kit Section (Pages 5, 6, 8 of PDF) */}
        <div className="bg-white border border-secondary-gold/15 rounded-sm p-6 md:p-10 mb-24 shadow-sm" id="startup-kit">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 pb-6 border-b border-secondary-gold/10">
            <div>
              <span className="font-sans text-[10px] font-bold text-secondary-gold tracking-[0.2em] uppercase">
                COMPLETE EQUIPMENTS & INVENTORY
              </span>
              <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary-brown mt-1">
                Our Startup Kit Includes
              </h3>
              <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
                Everything you need to set up, launch, and operate your Irani Palace successfully.
              </p>
            </div>

            <button
              onClick={() => setIsKitExpanded(!isKitExpanded)}
              className="bg-primary-brown hover:bg-secondary-gold text-white px-5 py-3 font-sans text-[10px] font-bold tracking-widest uppercase transition-all duration-300 flex items-center gap-2 rounded-xs cursor-pointer shadow-xs"
              id="btn-toggle-kit"
            >
              {isKitExpanded ? 'Hide Items Inventory' : 'Explore Full Kit (38 items)'}
              {isKitExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>
          </div>

          {/* Visual categories from page 8 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" id="kit-types">
            <div className="bg-primary-brown/5 border border-secondary-gold/10 p-5 rounded-sm text-center">
              <h4 className="font-serif text-sm font-bold text-primary-brown uppercase tracking-wider mb-2">
                Kitchen Equipments
              </h4>
              <p className="font-sans text-[11px] text-text-muted">
                Premium commercial gas stoves, milk heating handis, and copper bowls (Except Cylinders).
              </p>
            </div>
            <div className="bg-primary-brown/5 border border-secondary-gold/10 p-5 rounded-sm text-center">
              <h4 className="font-serif text-sm font-bold text-primary-brown uppercase tracking-wider mb-2">
                Branding & Marketing
              </h4>
              <p className="font-sans text-[11px] text-text-muted">
                Complete promotional kit, premium storefront designs, and high-visibility digital templates.
              </p>
            </div>
            <div className="bg-primary-brown/5 border border-secondary-gold/10 p-5 rounded-sm text-center">
              <h4 className="font-serif text-sm font-bold text-primary-brown uppercase tracking-wider mb-2">
                Startup Material
              </h4>
              <p className="font-sans text-[11px] text-text-muted">
                20kg complimentary tea powder, 20kg sugar, and 200 ceramic tea cups & saucers.
              </p>
            </div>
          </div>

          {/* Expandable detailed inventory tables (Pages 5 & 6) */}
          <AnimatePresence>
            {isKitExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden space-y-6"
                id="expanded-inventory"
              >
                {/* Search & Filter controls */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between border-t border-secondary-gold/10 pt-6">
                  {/* Category filters */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setSelectedCategory(cat.id)}
                        className={`px-3 py-1.5 font-sans text-[10px] font-bold uppercase tracking-wider rounded-full border cursor-pointer transition-all ${
                          selectedCategory === cat.id
                            ? 'bg-primary-brown text-white border-primary-brown'
                            : 'bg-transparent text-text-muted border-secondary-gold/15 hover:border-secondary-gold/40'
                        }`}
                        id={`btn-kit-filter-${cat.id}`}
                      >
                        {cat.label}
                      </button>
                    ))}
                  </div>

                  {/* Search box */}
                  <div className="relative w-full sm:max-w-xs">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted" />
                    <input
                      type="text"
                      placeholder="Search kit inventory..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2 border border-secondary-gold/20 font-sans text-xs bg-bg-cream/40 focus:outline-none focus:border-secondary-gold/80 rounded-sm"
                      id="kit-search"
                    />
                  </div>
                </div>

                {/* Grid of inventory items */}
                <div className="max-h-[400px] overflow-y-auto border border-secondary-gold/10 rounded-sm bg-bg-cream/20">
                  <table className="w-full text-left font-sans text-xs">
                    <thead className="bg-primary-brown text-white sticky top-0 text-[10px] tracking-wider uppercase font-bold border-b border-secondary-gold/15">
                      <tr>
                        <th className="p-4">Item Name</th>
                        <th className="p-4 text-center">Quantity Provided</th>
                        <th className="p-4">Inventory Category</th>
                        <th className="p-4 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-secondary-gold/10">
                      {filteredKit.map((item) => (
                        <tr key={item.id} className="hover:bg-primary-brown/5 transition-colors">
                          <td className="p-4 font-medium text-primary-brown">{item.name}</td>
                          <td className="p-4 text-center font-bold text-secondary-gold">{item.qty}</td>
                          <td className="p-4 text-text-muted text-[10px] uppercase font-semibold">{item.category}</td>
                          <td className="p-4 text-right text-emerald-800 font-bold text-[10px] tracking-wider uppercase">
                            ✓ INCLUDED
                          </td>
                        </tr>
                      ))}
                      {filteredKit.length === 0 && (
                        <tr>
                          <td colSpan={4} className="p-8 text-center text-text-muted italic">
                            No matching items found inside the startup proposal.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>

                <div className="flex items-center gap-2 text-[11px] text-text-muted italic bg-primary-brown/5 p-4 rounded-sm border-l border-secondary-gold">
                  <Info className="w-4 h-4 text-secondary-gold shrink-0" />
                  Note: Custom branding boards, operational guides, and recipe handbooks are fully pre-configured. Cooking gas cylinders are not provided as part of the initial equipment kit due to regional safety constraints.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Investment Details & Enquiry Form (Page 12 of PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch" id="franchise-application-hub">
          
          {/* Left panel: Investment pricing overview */}
          <div className="col-span-1 lg:col-span-5 bg-primary-brown text-white p-8 md:p-10 border border-secondary-gold/25 rounded-sm flex flex-col justify-between" id="investment-overview">
            <div className="space-y-6">
              <span className="font-sans text-[10px] tracking-[0.2em] font-bold text-gold-light uppercase block">
                FINANCIAL REQUIREMENT
              </span>

              <h3 className="font-serif text-3xl md:text-4xl font-bold text-white leading-tight">
                Unit Franchise Cost
              </h3>

              <div className="py-6 border-y border-secondary-gold/15 space-y-3">
                <div className="font-sans text-[11px] font-bold text-secondary-gold tracking-widest uppercase">
                  INVESTMENT COST
                </div>
                <div className="font-serif text-4xl md:text-5xl font-extrabold text-gold-light flex items-center">
                  ₹5,00,000/-
                </div>
                <p className="font-sans text-xs text-gold-light/75 leading-relaxed">
                  A comprehensive, one-time investment that guarantees lifetime franchise benefits without hidden renewal charges or royalties.
                </p>
              </div>

              {/* Direct corporate info */}
              <div className="space-y-4 pt-4 text-xs font-sans">
                <h4 className="font-serif text-sm font-bold text-gold-light uppercase tracking-wider">
                  Corporate Inquiries
                </h4>
                
                <div className="flex gap-3">
                  <Mail className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                  <a href="mailto:Business@Iranipalace.Com" className="hover:text-secondary-gold transition-colors font-medium">
                    Business@Iranipalace.Com
                  </a>
                </div>

                <div className="flex gap-3">
                  <Phone className="w-4.5 h-4.5 text-secondary-gold shrink-0 mt-0.5" />
                  <a href="tel:+918008181919" className="hover:text-secondary-gold transition-colors font-medium">
                    +91 8008181919
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/5 border border-secondary-gold/15 p-4.5 rounded-sm mt-8">
              <div className="flex items-center gap-2 text-[10px] font-sans font-bold text-secondary-gold uppercase tracking-wider mb-1.5">
                <CheckCircle2 className="w-4 h-4 text-secondary-gold" />
                No Royalty Fees
              </div>
              <p className="font-sans text-[11px] text-gold-light/65 leading-relaxed">
                Retain 100% of your retail sales profit margins. Focus entirely on executing the highest standards of our beloved Irani Chai.
              </p>
            </div>
          </div>

          {/* Right panel: Application Inquiry Form */}
          <div className="col-span-1 lg:col-span-7 bg-white p-8 md:p-10 border border-secondary-gold/15 rounded-sm shadow-xs flex flex-col justify-center" id="franchise-inquiry-box">
            
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-brown">
                      Submit Your Franchise Inquiry
                    </h3>
                    <p className="font-sans text-xs text-text-muted mt-1 leading-relaxed">
                      Enter your contact information below to check target region eligibility and secure a free corporate consultation packet.
                    </p>
                  </div>

                  <form onSubmit={handleSubmitInquiry} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-[10px] font-bold text-primary-brown uppercase tracking-wider mb-2">
                          Your Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={applicantName}
                          onChange={(e) => setApplicantName(e.target.value)}
                          placeholder="Osman Ali Khan"
                          className="w-full p-3.5 border border-secondary-gold/20 font-sans text-xs bg-bg-cream/30 focus:outline-none focus:border-secondary-gold rounded-sm"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] font-bold text-primary-brown uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={applicantPhone}
                          onChange={(e) => setApplicantPhone(e.target.value)}
                          placeholder="+91 80081 81919"
                          className="w-full p-3.5 border border-secondary-gold/20 font-sans text-xs bg-bg-cream/30 focus:outline-none focus:border-secondary-gold rounded-sm"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] font-bold text-primary-brown uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="osman@gmail.com"
                        className="w-full p-3.5 border border-secondary-gold/20 font-sans text-xs bg-bg-cream/30 focus:outline-none focus:border-secondary-gold rounded-sm"
                      />
                    </div>

                    <div>
                      <label className="block font-sans text-[10px] font-bold text-primary-brown uppercase tracking-wider mb-2">
                        Proposed Location / Territory
                      </label>
                      <select
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.target.value)}
                        className="w-full p-3.5 border border-secondary-gold/20 font-sans text-xs bg-bg-cream/30 focus:outline-none focus:border-secondary-gold rounded-sm"
                      >
                        <option value="Mancherial">Mancherial, Telangana (Approved Target)</option>
                        <option value="Kalwakurthi">Kalwakurthi, Telangana (Approved Target)</option>
                        <option value="Hyderabad">Hyderabad District (High Density)</option>
                        <option value="Other">Other Territory (Requires Feasibility Check)</option>
                      </select>
                    </div>

                    <div className="bg-primary-brown/5 border border-secondary-gold/15 p-4 rounded-sm flex gap-3.5 items-center">
                      <Calculator className="w-5 h-5 text-secondary-gold shrink-0" />
                      <div>
                        <span className="font-sans text-[10px] font-bold text-primary-brown block uppercase tracking-wider">
                          Strategic ROI Calculator
                        </span>
                        <p className="font-sans text-[11px] text-text-muted mt-0.5">
                          Estimated payback period: <strong className="text-primary-brown">6–9 Months</strong> based on standard retail volumes.
                        </p>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary-brown hover:bg-secondary-gold text-white py-4 px-4 font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shadow-md mt-6"
                      id="btn-submit-franchise"
                    >
                      <FileText className="w-4.5 h-4.5" />
                      APPLY FOR FRANCHISE PACKET
                    </button>
                  </form>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6 text-center py-6"
                  id="franchise-success-screen"
                >
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-800 mx-auto border border-emerald-100 shadow-xs">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-primary-brown">
                      Application Submitted!
                    </h3>
                    <p className="font-sans text-xs text-text-muted mt-2 leading-relaxed max-w-sm mx-auto">
                      Congratulations <strong className="text-primary-brown font-semibold">{applicantName}</strong>. Your franchise interest sheet has been secured inside our corporate offices.
                    </p>
                  </div>

                  {/* Generated Quote / Certificate sheet */}
                  <div className="bg-bg-cream/40 border border-secondary-gold/25 p-5 max-w-md mx-auto rounded-sm text-left font-sans text-xs space-y-3 shadow-xs">
                    <div className="border-b border-secondary-gold/15 pb-2 flex justify-between items-center">
                      <span className="font-bold text-primary-brown">IRANI PALACE CORP</span>
                      <span className="text-[10px] text-secondary-gold font-mono font-semibold">IP-INQ-2026-88</span>
                    </div>

                    <div className="space-y-1.5 text-text-muted">
                      <div><span className="font-semibold text-text-dark">Applicant:</span> {applicantName}</div>
                      <div><span className="font-semibold text-text-dark">Email:</span> {applicantEmail}</div>
                      <div><span className="font-semibold text-text-dark">Phone:</span> {applicantPhone}</div>
                      <div><span className="font-semibold text-text-dark">Proposed Unit:</span> {selectedCity} Outpost</div>
                      <div><span className="font-semibold text-text-dark">Base Startup Kit:</span> 38 Items Included</div>
                      <div><span className="font-semibold text-text-dark">Unit Pricing:</span> ₹5,00,000/-</div>
                    </div>

                    <div className="border-t border-secondary-gold/15 pt-2 flex items-center justify-between text-[10px] font-bold text-secondary-gold uppercase tracking-widest">
                      <span>STATUS: ELIGIBLE</span>
                      <span>1924 HERITAGE</span>
                    </div>
                  </div>

                  <p className="font-sans text-[11px] text-text-muted">
                    Our corporate relations officer will review this territory feasibility and call you within 24 working hours. Or call directly at <strong className="text-primary-brown font-semibold">+91 8008181919</strong>.
                  </p>

                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setApplicantName('');
                      setApplicantEmail('');
                      setApplicantPhone('');
                    }}
                    className="bg-primary-brown/5 hover:bg-primary-brown/10 text-primary-brown px-6 py-2.5 font-sans text-[10px] font-bold tracking-widest uppercase rounded-sm border border-secondary-gold/15 cursor-pointer transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
