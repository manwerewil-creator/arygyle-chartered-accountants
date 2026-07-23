import React, { useState } from 'react';
import { Page } from '../types';
import { FAQ_LIST, FIRM_DETAILS } from '../data/firmData';
import { HelpCircle, Search, ChevronDown, ChevronUp, ShieldCheck, ArrowRight, MessageSquare } from 'lucide-react';

interface FaqViewProps {
  onOpenInquiry: (serviceOrPackage?: string) => void;
}

export const FaqView: React.FC<FaqViewProps> = ({ onOpenInquiry }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [openId, setOpenId] = useState<string>('pbc-vs-plc');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'formation', label: 'Company Formation' },
    { id: 'tax', label: 'Tax Clearance & Rules' },
    { id: 'vat', label: 'VAT & Fiscalisation' },
    { id: 'general', label: 'Retainers & Pricing' }
  ];

  const filteredFaqs = FAQ_LIST.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="aurora-bg text-white py-16 border-b-4 border-gold-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] text-gold-accent dot-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 text-center max-w-2xl mx-auto relative z-10 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-accent px-3 py-1 rounded-full text-xs font-semibold">
            <HelpCircle className="w-4 h-4 text-gold-accent" />
            <span>Compliance Knowledge Base</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Frequently Asked Questions
          </h1>
          <p className="hero-serif-tagline text-lg text-gold-accent">
            "No business is too small. Consult Professional Accountants at an affordable price."
          </p>
          <p className="text-gray-300 text-xs sm:text-sm">
            Plain-spoken answers on Zimbabwean tax legislation, ZIMRA server interfacing, company formation, and retainer packages.
          </p>
        </div>
      </section>

      {/* Search & Category Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        
        {/* Search Input Box */}
        <div className="relative">
          <Search className="w-5 h-5 text-gray-400 absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search questions (e.g. PBC, VAT threshold, Tax Clearance, 5 days)..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white border border-gray-300 rounded-xl pl-12 pr-4 py-3 text-xs sm:text-sm text-navy-deep focus:outline-none focus:border-navy-deep shadow-xs"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full font-medium text-xs whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-navy-deep text-white font-semibold shadow-xs'
                  : 'bg-slate-100 text-gray-700 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

      </section>

      {/* Accordion List */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-4">
        {filteredFaqs.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-gray-200 space-y-2">
            <p className="font-bold text-navy-deep text-sm">No matching questions found.</p>
            <p className="text-xs text-gray-500">Try searching for alternative terms like "ZIMRA", "VAT", or "PBC".</p>
          </div>
        ) : (
          filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-gray-200 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-navy-deep text-sm hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-gold-accent flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-gold-accent flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs text-gray-700 leading-relaxed border-t border-gray-100 bg-slate-50/50 space-y-3 animate-fadeIn">
                    <p>{faq.answer}</p>
                    
                    <div className="pt-2 flex items-center justify-between border-t border-gray-200/60">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">
                        Category: {faq.category}
                      </span>
                      <button
                        onClick={() => onOpenInquiry(faq.question)}
                        className="text-[11px] font-semibold text-navy-deep hover:text-gold-accent flex items-center gap-1"
                      >
                        <span>Ask Accountant About This</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </section>

      {/* Ask Question Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-navy-deep text-white rounded-xl p-6 sm:p-8 text-center space-y-4">
          <h3 className="text-xl font-bold">Have a Specific ZIMRA or Compliance Question?</h3>
          <p className="text-xs text-gray-300 max-w-lg mx-auto">
            Our Harare chartered accountants are available to answer your unique tax, VAT, or incorporation questions.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onOpenInquiry('Custom Compliance Question')}
              className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-5 py-2.5 rounded-lg text-xs transition-colors"
            >
              Ask Our Accountants
            </button>

            <a
              href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=Hi%20Arygyle%20Team%2C%20I%20have%20a%20question%20regarding%20ZIMRA%20tax%20compliance.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2.5 rounded-lg text-xs transition-colors inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Us (+263 777 592 952)</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};
