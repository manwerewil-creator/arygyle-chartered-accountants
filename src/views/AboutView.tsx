import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { FIRM_DETAILS, ABOUT_CONTENT } from '../data/firmData';
import { ShieldCheck, Award, GraduationCap, Briefcase, Users, Clock, CheckCircle2, ArrowRight, MapPin, Building2, Target, Eye, Heart } from 'lucide-react';

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
            src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1920&q=80"
            alt="Arygyle chartered accountancy team in Harare"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy-dark/25 to-navy-dark/70" />
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

            <p>{ABOUT_CONTENT.background}</p>

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
                  <span>210 Throughmton House, Cnr J. Nyerere & S. Machel, Harare</span>
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
              
              <div className="w-28 h-28 rounded-2xl overflow-hidden border-2 border-gold-accent shadow-md flex-shrink-0">
                <img
                  src="/farai-tofa.png"
                  alt="Farai Arygyle Nicholia Tofa — Managing Partner"
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
                    <span><strong>Chartered Tax Accountant — AGTA(Z):</strong> Associate (General Tax Accountant) of the Institute of Chartered Tax Accountants of Zimbabwe. Membership No. 96607026.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>Master of Accountancy (M.Acc):</strong> Awarded by Chinhoyi University of Technology (CUT).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span><strong>ACCA:</strong> Association of Chartered Certified Accountants.</span>
                  </li>
                </ul>

                <div className="mt-2 inline-flex items-center gap-2 bg-navy-deep/5 border border-navy-deep/10 rounded-lg px-3 py-2 text-[11px] text-navy-deep">
                  <ShieldCheck className="w-4 h-4 text-gold-accent flex-shrink-0" />
                  <span>ZIMRA Registered Tax Agent • CTA Certificate No. 8458299 • Valid until 31 Dec 2026</span>
                </div>
              </div>

              <div className="space-y-3">
                <h4 className="font-bold text-navy-deep text-sm flex items-center gap-2">
                  <Briefcase className="w-4 h-4 text-gold-accent" />
                  <span>Industry Financial Experience</span>
                </h4>
                <p className="text-gray-600">
                  A ZIMRA-registered tax practitioner with <strong>over 10 years of experience</strong> in the profession.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {FIRM_DETAILS.managingPartner.specialisations.slice(0, 6).map((s, i) => (
                    <span key={i} className="text-[10px] font-semibold text-navy-deep bg-slate-100 border border-slate-200 px-2 py-1 rounded-full">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ y: -4 }} className="p-7 bg-navy-deep text-white rounded-2xl border-t-4 border-gold-accent shadow-lg space-y-3">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-gold-accent">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold">Our Vision</h3>
            <p className="text-sm text-gray-200 leading-relaxed">{ABOUT_CONTENT.vision}</p>
          </motion.div>

          <motion.div whileHover={{ y: -4 }} className="p-7 bg-white text-navy-deep rounded-2xl border-2 border-slate-100 border-t-4 border-t-gold-accent shadow-card space-y-3">
            <div className="w-12 h-12 rounded-xl bg-navy-deep flex items-center justify-center text-gold-accent">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-extrabold">Our Mission</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{ABOUT_CONTENT.mission}</p>
          </motion.div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">What We Stand For</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ABOUT_CONTENT.coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                className="p-5 bg-white rounded-2xl border border-gray-200 shadow-xs flex items-start gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-gold-accent/15 text-gold-accent flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <p className="text-sm font-semibold text-navy-deep pt-1.5">{value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* OBJECTIVES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">Our Commitments</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">Firm Objectives</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {ABOUT_CONTENT.objectives.map((obj, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-200 shadow-xs">
              <span className="w-7 h-7 rounded-full bg-navy-deep text-gold-accent text-xs font-extrabold flex items-center justify-center flex-shrink-0">
                {idx + 1}
              </span>
              <p className="text-xs text-gray-700 leading-relaxed pt-0.5">{obj}</p>
            </div>
          ))}
        </div>

        <div className="pt-4 text-center">
          <button
            onClick={() => setActivePage('services')}
            className="bg-navy-deep hover:bg-navy-dark text-white font-bold px-6 py-3.5 rounded-xl text-xs transition-colors inline-flex items-center gap-2 shadow-sm"
          >
            <span>Explore Our Full Service Catalog</span>
            <ArrowRight className="w-4 h-4 text-gold-accent" />
          </button>
        </div>
      </section>

    </div>
  );
};
