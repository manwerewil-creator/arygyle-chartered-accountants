import React, { useState } from 'react';
import { Page } from '../types';
import { FIRM_DETAILS, RETAINER_PACKAGES, STARTUP_PACKAGES, FORMATION_OPTIONS } from '../data/firmData';
import { CheckCircle2, MessageSquare, ArrowRight, ShieldCheck, Zap, Sparkles } from 'lucide-react';

interface PricingViewProps {
  onOpenInquiry: (packageName: string) => void;
  onOpenCalculator: () => void;
}

export const PricingView: React.FC<PricingViewProps> = ({
  onOpenInquiry,
  onOpenCalculator
}) => {
  const [activeTab, setActiveTab] = useState<'retainers' | 'startups' | 'standalone'>('retainers');

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="aurora-bg text-white py-16 border-b-4 border-gold-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.1] text-gold-accent dot-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 text-center max-w-3xl mx-auto relative z-10 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-accent px-3 py-1 rounded-full text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-gold-accent" />
            <span>Transparent Fixed Fees • No Hidden Charges</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Packages & Transparent Pricing
          </h1>
          <p className="hero-serif-tagline text-lg text-gold-accent">
            "No business is too small. Consult Professional Accountants at an affordable price."
          </p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
            Choose from monthly ongoing compliance retainers, complete company launch bundles, or standalone formation packages.
          </p>
        </div>
      </section>

      {/* Main Pricing Category Selector Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-100 p-1.5 rounded-xl flex items-center justify-center gap-2 max-w-2xl mx-auto border border-gray-200">
          <button
            onClick={() => setActiveTab('retainers')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold text-xs transition-all ${
              activeTab === 'retainers'
                ? 'bg-navy-deep text-white shadow-sm'
                : 'text-gray-700 hover:text-navy-deep'
            }`}
          >
            1. Monthly Retainers ($20 - $130/mo)
          </button>
          
          <button
            onClick={() => setActiveTab('startups')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold text-xs transition-all ${
              activeTab === 'startups'
                ? 'bg-navy-deep text-white shadow-sm'
                : 'text-gray-700 hover:text-navy-deep'
            }`}
          >
            2. Start Up Bundles ($160 - $700)
          </button>

          <button
            onClick={() => setActiveTab('standalone')}
            className={`flex-1 py-3 px-4 rounded-lg font-bold text-xs transition-all ${
              activeTab === 'standalone'
                ? 'bg-navy-deep text-white shadow-sm'
                : 'text-gray-700 hover:text-navy-deep'
            }`}
          >
            3. Formation Only ($100 - $150)
          </button>
        </div>
      </section>

      {/* TAB 1: MONTHLY RETAINER PACKAGES */}
      {activeTab === 'retainers' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 animate-fadeIn">
          
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy-deep">
              Monthly Compliance Retainer Packages
            </h2>
            <p className="text-xs text-gray-600">
              Keep your business 100% compliant with ZIMRA and the Registrar of Companies year-round.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {RETAINER_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-300 relative border-t-4 ${
                  pkg.popular
                    ? 'bg-navy-deep text-white shadow-2xl border-2 border-gold-accent border-t-gold-accent md:-translate-y-2'
                    : 'bg-white text-navy-deep border-2 border-slate-200/90 border-t-gold-accent shadow-md hover:shadow-2xl hover:-translate-y-1.5'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gold-accent text-navy-dark text-[10px] font-extrabold tracking-wider uppercase px-3.5 py-1 rounded-full shadow-md flex items-center gap-1 border border-navy-dark/20">
                    <Sparkles className="w-3 h-3" />
                    <span>Most Popular Tier</span>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="border-b border-gray-200/20 pb-4">
                    <h3 className="text-xl font-extrabold">{pkg.name}</h3>
                    <p className={`text-xs mt-1 ${pkg.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                      {pkg.tagline}
                    </p>
                    <div className="mt-4 flex items-baseline gap-1">
                      <span className={`text-3xl font-extrabold ${pkg.popular ? 'text-gold-accent' : 'text-navy-deep'}`}>
                        USD {pkg.priceUSD}
                      </span>
                      <span className={`text-xs ${pkg.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                        / {pkg.period}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-gold-accent block">
                      Included Retainer Services:
                    </span>
                    <ul className="space-y-2 text-xs">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${
                            pkg.popular ? 'text-gold-accent' : 'text-green-600'
                          }`} />
                          <span className={pkg.popular ? 'text-gray-100' : 'text-gray-700'}>
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 space-y-2 border-t border-gray-200/20">
                  <button
                    onClick={() => onOpenInquiry(`${pkg.name} ($${pkg.priceUSD}/mo)`)}
                    className={`w-full font-extrabold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg ${
                      pkg.popular
                        ? 'bg-gold-accent hover:bg-gold-hover text-navy-dark'
                        : 'bg-navy-deep hover:bg-gold-accent hover:text-navy-dark text-white'
                    }`}
                  >
                    <span>Subscribe to {pkg.name}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => {
                      const text = `Hi Arygyle Team, I am interested in subscribing to the ${pkg.name} at USD ${pkg.priceUSD}/month. Please advise on onboarding.`;
                      window.open(`https://wa.me/263777592952?text=${encodeURIComponent(text)}`, '_blank');
                    }}
                    className="w-full text-center text-[11px] font-semibold text-gray-500 hover:text-green-600 flex items-center justify-center gap-1 pt-1"
                  >
                    <MessageSquare className="w-3 h-3 text-green-500" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 2: START UP PACKAGES */}
      {activeTab === 'startups' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 animate-fadeIn">
          
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy-deep">
              Complete Start Up Launch Bundles
            </h2>
            <p className="text-xs text-gray-600">
              One-time company launch bundles combining formation, bank account setup, tax clearance, branding & web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {STARTUP_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`bg-white rounded-2xl p-6 border shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative ${
                  pkg.popular ? 'border-2 border-gold-accent ring-2 ring-gold-accent/20' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 right-4 bg-gold-accent text-navy-dark text-[10px] font-bold uppercase px-2.5 py-0.5 rounded shadow-xs">
                    Popular Choice
                  </div>
                )}

                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-3">
                    <h3 className="text-xl font-bold text-navy-deep">{pkg.name}</h3>
                    <p className="text-xs text-gray-600 mt-0.5">{pkg.tagline}</p>
                    <div className="mt-3 text-3xl font-extrabold text-navy-deep">
                      USD {pkg.priceUSD}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gold-accent block">
                      Bundle Items Included:
                    </span>
                    <ul className="space-y-2 text-xs text-gray-700">
                      {pkg.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => onOpenInquiry(`${pkg.name} ($${pkg.priceUSD})`)}
                    className="w-full bg-navy-deep hover:bg-navy-dark text-white font-bold py-2.5 rounded-lg text-xs transition-colors"
                  >
                    Select {pkg.name} (USD {pkg.priceUSD})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* TAB 3: STANDALONE COMPANY FORMATION */}
      {activeTab === 'standalone' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 animate-fadeIn">
          
          <div className="text-center space-y-1 max-w-xl mx-auto">
            <h2 className="text-2xl font-extrabold text-navy-deep">
              Standalone Company Formation Pricing
            </h2>
            <p className="text-xs text-gray-600">
              Direct incorporation service with the Registrar of Companies in Harare. Completed in 5 working days.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {FORMATION_OPTIONS.map((option) => (
              <div
                key={option.type}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm hover:shadow-md transition-all space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4">
                    <span className="text-xs font-bold text-gold-accent uppercase tracking-wider">
                      5 Working Days Turnaround
                    </span>
                    <h3 className="text-2xl font-bold text-navy-deep mt-1">{option.fullName}</h3>
                    <div className="text-3xl font-extrabold text-navy-deep mt-3">
                      USD {option.priceUSD}
                    </div>
                  </div>

                  <div className="space-y-2 text-xs text-gray-700">
                    <p><strong>Ideal For:</strong> {option.bestFor}</p>
                    <p><strong>Director Requirement:</strong> {option.minDirectors}</p>
                    <p><strong>Business Scope:</strong> {option.linesOfBusiness}</p>
                    
                    <div className="pt-2">
                      <span className="font-bold text-navy-deep block mb-1">Documents Issued:</span>
                      <ul className="space-y-1.5 list-disc list-inside text-gray-600">
                        {option.docsIncluded.map((doc, idx) => (
                          <li key={idx}>{doc}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => onOpenInquiry(`${option.fullName} ($${option.priceUSD})`)}
                  className="w-full bg-navy-deep hover:bg-navy-dark text-white font-bold py-3 rounded-lg text-xs transition-colors"
                >
                  Register {option.type} (USD {option.priceUSD})
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Fee Estimator Prompt Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-navy-deep">
              Need Help Choosing the Right Package?
            </h3>
            <p className="text-xs text-gray-600 max-w-xl">
              Use our interactive Fee Estimator tool to select your business type, required ZIMRA documents, and calculate exact costs.
            </p>
          </div>
          <button
            onClick={onOpenCalculator}
            className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-6 py-3 rounded-lg text-xs transition-colors flex items-center gap-2 flex-shrink-0 shadow-sm"
          >
            <span>Open Fee & Package Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

    </div>
  );
};
