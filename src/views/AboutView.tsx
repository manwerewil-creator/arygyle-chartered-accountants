import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { FIRM_DETAILS } from '../data/firmData';
import { ShieldCheck, Award, GraduationCap, Briefcase, Users, Clock, CheckCircle2, ArrowRight, MapPin, Building2 } from 'lucide-react';

interface AboutViewProps {
  setActivePage: (page: Page) => void;
  onOpenInquiry: (serviceOrPackage?: string) => void;
  onOpenVerificationModal: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  setActivePage,
  onOpenInquiry,
  onOpenVerificationModal
}) => {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Hero Banner with High-Res Background Image Overlay */}
      <section className="relative bg-navy-dark text-white py-20 border-b-4 border-gold-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1920&q=80"
            alt="Professional Zimbabwean chartered accountant"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark via-navy-deep/90 to-navy-dark/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 relative z-10 text-center max-w-3xl mx-auto animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-gold-accent px-3.5 py-1.5 rounded-full text-xs font-semibold border border-gold-accent/40">
            <ShieldCheck className="w-4 h-4 text-gold-accent" />
            <span>Harare, Zimbabwe • Chartered Accountancy Practice</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            About Arygyle Chartered Accountants
          </h1>
          <p className="hero-serif-tagline text-xl text-gold-accent font-serif italic">
            "{FIRM_DETAILS.tagline}"
          </p>
          <p className="text-gray-300 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            Founded with a vision to democratize top-tier financial management and statutory compliance for entrepreneurs, sole traders, SMEs, and corporate enterprises across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Main Firm Narrative & Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-gray-700 text-xs sm:text-sm leading-relaxed">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
              Our Core Mission & Practice Identity
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-navy-deep leading-tight">
              Professional Financial Counsel Made Accessible & Affordable
            </h2>

            <p>
              <strong>Arygyle Chartered Accountants Zimbabwe (Private) Limited</strong> is a registered chartered accounting and financial advisory firm based in Kuwadzana 3, Harare. We recognized that small and growing Zimbabwean businesses were frequently left stranded between uncertified bookkeepers and prohibitively expensive audit firms.
            </p>

            <p>
              Our firm's defining campaign pledge — <em className="text-navy-deep font-semibold">"No business is too small. Consult Professional Accountants at an affordable price"</em> — reflects our firm belief that compliance and sound financial structure are the essential foundation of business survival and capital growth in Zimbabwe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1.5 shadow-2xs">
                <span className="font-bold text-navy-deep text-xs block">Speed & Efficiency</span>
                <p className="text-gray-600 text-[11px]">
                  5-day turnaround guarantee for complete company formation (PBC and PLC) under Chapter 24:31.
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1.5 shadow-2xs">
                <span className="font-bold text-navy-deep text-xs block">ZIMRA Legislative Mastery</span>
                <p className="text-gray-600 text-[11px]">
                  Experts in 2022+ ZIMRA server interfacing, fiscal devices, multi-currency VAT thresholds & Capital Gains.
                </p>
              </div>
            </div>

            <p className="text-xs text-gray-500 italic">
              We maintain active alignment with statutory standards defined by the Companies and Other Business Entities Act (Chapter 24:31), the Institute of Chartered Accountants of Zimbabwe (ICAZ) standards, and ZIMRA revenue regulations.
            </p>
          </div>

          {/* Practice Image Card */}
          <motion.div
            whileHover={{ y: -4 }}
            className="lg:col-span-5 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl"
          >
            <div className="relative h-56 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1686628269082-c92c3189903f?auto=format&fit=crop&w=1000&q=80"
                alt="Arygyle accountant reviewing client financial documents"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-transparent to-transparent p-4 flex items-end">
                <span className="text-white font-bold text-sm">Harare Executive Office</span>
              </div>
            </div>

            <div className="p-6 bg-navy-deep text-white space-y-5">
              <div className="space-y-1">
                <h3 className="text-lg font-bold">Arygyle Chartered Accountants</h3>
                <p className="text-xs text-gray-300 flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-gold-accent" />
                  <span>3049 Kuwadzana 3, Harare, Zimbabwe</span>
                </p>
              </div>

              <div className="space-y-2.5 text-xs border-y border-white/10 py-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Target Audience:</span>
                  <span className="font-semibold text-white">Startups, SMEs & Corporates</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Incorporation Turnaround:</span>
                  <span className="font-semibold text-gold-accent">5 Working Days</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Retainer Packages:</span>
                  <span className="font-semibold text-green-400">From $20 / month</span>
                </div>
              </div>

              <div className="space-y-2">
                <button
                  onClick={() => onOpenInquiry('General Inquiry')}
                  className="w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold py-3 rounded-xl text-xs transition-colors shadow-sm"
                >
                  Schedule Office Consultation
                </button>
                
                <button
                  onClick={onOpenVerificationModal}
                  className="w-full bg-white/10 hover:bg-white/20 text-white font-medium py-2 rounded-xl text-xs transition-colors"
                >
                  View Verification Data Source
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MANAGING PARTNER LEADERSHIP BIO WITH PHOTO */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
              Leadership & Professional Qualification
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">
              Managing Partner & Leadership Team
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Rigorous academic credentials combined with hands-on industrial financial experience.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm max-w-4xl mx-auto space-y-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 border-b border-gray-100 pb-6">
              
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gold-accent shadow-md flex-shrink-0">
                <img
                  src="https://images.unsplash.com/photo-1495603889488-42d1d66e5523?auto=format&fit=crop&w=400&q=80"
                  alt="Managing Partner Farai"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-1 text-center sm:text-left">
                <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                  <h3 className="text-xl font-extrabold text-navy-deep">
                    {FIRM_DETAILS.managingPartner.name}
                  </h3>
                  <span className="bg-gold-accent/20 text-navy-deep text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-gold-accent/40">
                    Managing Partner
                  </span>
                </div>
                <p className="text-xs font-semibold text-navy-deep flex items-center gap-1.5 justify-center sm:justify-start">
                  <GraduationCap className="w-4 h-4 text-gold-accent" />
                  <span>{FIRM_DETAILS.managingPartner.credentials}</span>
                </p>
                <p className="text-xs text-gray-500">
                  Head of Audit, Tax Compliance & Strategic Financial Advisory
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-gray-700 leading-relaxed">
              
              <div className="space-y-3">
                <h4 className="font-bold text-navy-deep text-sm flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-gold-accent" />
                  <span>Academic & Professional Credentials</span>
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Master of Accountancy (M.Acc):</strong> Awarded by Chinhoyi University of Technology (CUT).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>ACCA Professional Qualification:</strong> Member of the Association of Chartered Certified Accountants.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-navy-deep text-sm flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gold-accent" />
                  <span>Industry Financial Experience</span>
                </h4>
                <p className="text-gray-600">
                  Prior experience serving as Assistant Accountant at <strong>Exodus and Company</strong>, a premier Harare construction and infrastructure corporate.
                </p>
                <ul className="space-y-1 text-gray-600 list-disc list-inside">
                  <li>Construction project costing & capital allocation</li>
                  <li>Financial budgeting, cash flow & ledger controls</li>
                  <li>Statutory return compliance & auditor liaison</li>
                </ul>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* CORE VALUES / TRUST COMMITMENT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
            Our Service Commitments
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">
            The Arygyle Client Guarantee
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <h3 className="font-bold text-navy-deep text-base">1. Zero Hidden Fees</h3>
            <p className="text-xs text-gray-600">
              Our PBC ($100), PLC ($150), and retainer packages ($20, $50, $130) are all-inclusive. You know exactly what you pay before we begin.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <h3 className="font-bold text-navy-deep text-base">2. Guaranteed 5-Day Formation</h3>
            <p className="text-xs text-gray-600">
              We maintain direct, active filing procedures at the Registrar of Companies in Harare to deliver complete company certificates in 5 working days.
            </p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-6 bg-white rounded-2xl border border-gray-200 shadow-xs space-y-2">
            <h3 className="font-bold text-navy-deep text-base">3. Year-Round Tax Clearance</h3>
            <p className="text-xs text-gray-600">
              We monitor your ZIMRA account monthly so your ITF263 clearance certificate never expires when you need to bid on a critical tender.
            </p>
          </motion.div>
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => setActivePage('services')}
            className="bg-navy-deep hover:bg-navy-dark text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Explore Full Service Catalog</span>
            <ArrowRight className="w-4 h-4 text-gold-accent" />
          </button>
        </div>
      </section>

    </div>
  );
};
