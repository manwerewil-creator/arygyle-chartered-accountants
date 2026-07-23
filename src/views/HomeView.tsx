import React from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { FIRM_DETAILS, SERVICES_LIST, RETAINER_PACKAGES, STARTUP_PACKAGES } from '../data/firmData';
import { Reveal, Stagger, StaggerItem, TextReveal, Counter, Magnetic, Marquee } from '../components/motion';
import {
  Building2,
  ShieldCheck,
  Calculator,
  Receipt,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  ArrowRight,
  MessageSquare,
  Phone,
  HelpCircle,
  Star,
  Users,
  Award,
  Sparkles,
  ChevronRight
} from 'lucide-react';

interface HomeViewProps {
  setActivePage: (page: Page) => void;
  onOpenInquiry: (serviceOrPackage?: string) => void;
  onOpenCalculator: () => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  setActivePage,
  onOpenInquiry,
  onOpenCalculator
}) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Building2': return <Building2 className="w-6 h-6 text-gold-accent" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-gold-accent" />;
      case 'Calculator': return <Calculator className="w-6 h-6 text-gold-accent" />;
      case 'Receipt': return <Receipt className="w-6 h-6 text-gold-accent" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-gold-accent" />;
      case 'FileSpreadsheet': return <FileSpreadsheet className="w-6 h-6 text-gold-accent" />;
      default: return <Building2 className="w-6 h-6 text-gold-accent" />;
    }
  };

  return (
    <div className="space-y-20 pb-16 overflow-hidden">
      
      {/* FULL PAGE CINEMATIC HERO SECTION WITH ANIMATED AURORA + IMAGE */}
      <section className="relative min-h-[92vh] flex items-center justify-center aurora-bg text-white overflow-hidden border-b-4 border-gold-accent py-24">

        {/* Hero Background Image - Financial Ledgers, Accounting Reports & Tax Records */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1920&q=80"
            alt="Harare Chartered Accountants Financial Ledgers and Accounting Workspace"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter brightness-[0.35] contrast-110"
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
          />
          {/* Dual Multi-layer Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-deep/85 to-navy-dark/95" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/70" />
        </div>

        {/* Subtle Ambient Golden Dot Overlay */}
        <div className="absolute inset-0 opacity-[0.12] pointer-events-none z-0 text-gold-accent dot-grid" />

        {/* Floating decorative orbs */}
        <div className="absolute top-24 -left-10 w-72 h-72 rounded-full bg-gold-accent/10 blur-3xl animate-floaty pointer-events-none" />
        <div className="absolute bottom-16 -right-10 w-80 h-80 rounded-full bg-cool-blue/25 blur-3xl animate-floaty pointer-events-none" style={{ animationDelay: '2s' }} />

        {/* Centered Hero Content Container */}
        <motion.div
          className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 w-full text-center space-y-7"
          initial="hidden"
          animate="visible"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
        >
          {/* Eyebrow badge */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-gold-accent px-4 py-1.5 rounded-full text-xs font-semibold border border-gold-accent/40"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span>Registered Chartered Accountancy Practice • Harare, Zimbabwe</span>
          </motion.div>

          {/* Main Headline — word-by-word reveal */}
          <TextReveal
            as="h1"
            text="Professional Accounting, Tax Clearance & Company Formation"
            highlight="Tax Clearance"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12]"
          />

          {/* Italic Serif Hero Tagline */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.3 } } }}
            className="text-xl sm:text-2xl text-shimmer font-serif italic max-w-2xl mx-auto"
          >
            "{FIRM_DETAILS.tagline}"
          </motion.p>

          {/* Description */}
          <motion.p
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal"
          >
            {FIRM_DETAILS.campaignLine} We serve sole traders, new entrepreneurs, cooperatives, growing SMEs, and established companies across Zimbabwe with approachable, transparent financial expertise.
          </motion.p>

          {/* Centered Interactive Hero Action Buttons */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
            className="pt-4 flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          >
            <Magnetic>
              <button
                onClick={() => onOpenInquiry('ZIMRA Tax Clearance (ITF263)')}
                className="btn-sheen bg-gold-accent hover:bg-gold-hover text-navy-dark font-extrabold px-8 py-4 rounded-xl text-sm shadow-2xl transition-all duration-200 flex items-center gap-2.5 hover:-translate-y-0.5"
              >
                <span>Get Tax Clearance (ITF263)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </Magnetic>

            <Magnetic>
              <button
                onClick={() => onOpenInquiry('PBC Formation ($100)')}
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold px-8 py-4 rounded-xl text-sm border border-white/30 transition-all duration-200 flex items-center gap-2.5"
              >
                <Building2 className="w-4 h-4 text-gold-accent" />
                <span>Register Company (5 Days)</span>
              </button>
            </Magnetic>
          </motion.div>

          {/* Key Highlights Stat Ribbon with animated counters */}
          <motion.div
            variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { delay: 0.2 } } }}
            className="pt-8 mt-6 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-2xl mx-auto text-center"
          >
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 shadow-sm hover:border-gold-accent/50 transition-colors">
              <div className="text-3xl font-extrabold text-gold-accent">
                <Counter to={5} /> Days
              </div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Fast Company Registration</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 shadow-sm hover:border-gold-accent/50 transition-colors">
              <div className="text-3xl font-extrabold text-white">
                <Counter to={20} prefix="$" />/mo
              </div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">Affordable Retainers From</div>
            </div>
            <div className="p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/15 shadow-sm hover:border-gold-accent/50 transition-colors">
              <div className="text-3xl font-extrabold text-green-400">
                <Counter to={100} suffix="%" />
              </div>
              <div className="text-xs text-gray-300 font-medium mt-0.5">ZIMRA Compliant Filing</div>
            </div>
          </motion.div>

          {/* Scroll cue */}
          <motion.div
            className="pt-4 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5"
            >
              <div className="w-1 h-2 rounded-full bg-gold-accent" />
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

      {/* TRUST / CREDENTIALS MARQUEE BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="rounded-2xl bg-slate-50 border border-gray-200 py-5">
          <p className="text-center text-[11px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">
            Governed &amp; Aligned With Zimbabwe's Statutory Framework
          </p>
          <Marquee
            items={[
              'ZIMRA Registered Tax Practice',
              'Companies Act (Chapter 24:31)',
              'ACCA Qualified Leadership',
              'ICAZ Aligned Standards',
              'Registrar of Companies Filing',
              'NSSA & PRAZ Compliance',
              'Fiscal Device Interfacing',
            ].map((label) => (
              <span
                key={label}
                className="text-sm font-semibold text-navy-deep/70 px-6 flex items-center gap-2 whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-accent" />
                {label}
              </span>
            ))}
          />
        </div>
      </section>

      {/* LEGISLATIVE ZIMRA NOTICE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="bg-amber-50/90 border-l-4 border-gold-accent rounded-r-2xl p-6 sm:p-8 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-amber-200/60"
        >
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-navy-deep font-extrabold text-sm sm:text-base">
              <ShieldCheck className="w-5 h-5 text-gold-accent flex-shrink-0" />
              <span>Important ZIMRA Legislative Compliance Notice</span>
            </div>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed max-w-3xl">
              Since 1 January 2022, ZIMRA does NOT issue tax clearance certificates to registered operators who are not interfaced with ZIMRA servers. All payments and tax returns must be up to date. Arygyle Chartered Accountants handles complete server interfacing, fiscal device compliance, and ledger reconciliation.
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => onOpenInquiry('VAT & Fiscalisation Interfacing')}
            className="flex-shrink-0 bg-navy-deep hover:bg-navy-dark text-white font-extrabold px-6 py-3.5 rounded-xl text-xs transition-all shadow-md"
          >
            Interface with ZIMRA Now
          </motion.button>
        </motion.div>
      </section>

      {/* THREE CORPORATE PILLARS - POPPING OUT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-accent bg-amber-50 border border-gold-accent/30 px-3 py-1 rounded-full">
            Core Service Pillars
          </span>
          <TextReveal
            as="h2"
            text="How We Support Your Enterprise"
            className="text-2xl sm:text-4xl font-extrabold text-navy-deep"
          />
          <p className="text-xs sm:text-sm text-gray-600">
            From official incorporation with the Registrar of Companies to continuous ZIMRA tax clearance and audit advisory.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 - Company Formation */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-gold-accent shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-gold-accent relative group"
          >
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80"
                  alt="Official Company Registration Documents & Stamp"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-navy-deep/95 text-gold-accent font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-gold-accent/40 backdrop-blur-xs">
                  5 Working Days
                </span>
                <span className="absolute bottom-3 left-3 text-white font-extrabold text-xs">
                  Legal Registrar Filing
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-extrabold text-navy-deep group-hover:text-gold-accent transition-colors">
                  Company Formation (PBC & PLC)
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Direct incorporation with the Registrar of Companies in Harare. Name reservation, Memorandum of Association, CR6 & CR5 certificates issued in 5 working days.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-gray-700 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-navy-deep">PBC Registration — USD 100</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span className="font-semibold text-navy-deep">PLC Registration — USD 150</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Bank account opening assistance included</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenInquiry('Company Formation')}
                className="w-full bg-navy-deep hover:bg-gold-accent hover:text-navy-dark text-white font-extrabold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Register Company Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 2 - Tax Clearance */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-gold-accent shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-gold-accent relative group"
          >
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80"
                  alt="ZIMRA Tax Clearance & Financial Ledger Audit"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-gold-accent text-navy-dark font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md border border-navy-dark/20">
                  ITF263 Clearance
                </span>
                <span className="absolute bottom-3 left-3 text-white font-extrabold text-xs">
                  ZIMRA Server Interfacing
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-extrabold text-navy-deep group-hover:text-gold-accent transition-colors">
                  ZIMRA Tax Clearance & Interfacing
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Stay 100% compliant with ZIMRA server interfacing, fiscal device configuration, multi-currency VAT returns, and ITF263 tax clearance renewals.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-gray-700 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Avoid 10% Withholding Tax penalties</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>ZIMRA Fiscal Electronic Register Interfacing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Master Update & Tax Account Reconciliation</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => onOpenInquiry('ZIMRA Tax Clearance')}
                className="w-full bg-navy-deep hover:bg-gold-accent hover:text-navy-dark text-white font-extrabold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>Get Tax Clearance</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Card 3 - Retainers & Auditing */}
          <motion.div
            whileHover={{ y: -8 }}
            className="bg-white rounded-2xl overflow-hidden border-2 border-slate-200/90 hover:border-gold-accent shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between border-t-4 border-t-gold-accent relative group"
          >
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                  alt="Audit Advisory & Balance Sheet Financial Reports"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/70 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-green-600 text-white font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  From USD 20/mo
                </span>
                <span className="absolute bottom-3 left-3 text-white font-extrabold text-xs">
                  Statutory Audit Opinions
                </span>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-extrabold text-navy-deep group-hover:text-gold-accent transition-colors">
                  Retainers & Statutory Auditing
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Ongoing accounting retainers ($20-$130/mo) and independent auditing services to prepare robust annual financial statements for banks and tenders.
                </p>
                <ul className="space-y-2.5 pt-2 text-xs text-gray-700 border-t border-slate-100">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Monthly Accounts & Profit/Loss Ledgers</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Independent Statutory Financial Statement Audits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                    <span>Bank & Tender Financial Certification</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                onClick={() => setActivePage('pricing')}
                className="w-full bg-navy-deep hover:bg-gold-accent hover:text-navy-dark text-white font-extrabold py-3.5 rounded-xl text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <span>View Retainer Tiers</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

        </div>
      </section>

      {/* FULL SERVICES CATALOG GRID - POPPING OUT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-wider text-gold-accent bg-amber-50 border border-gold-accent/30 px-3 py-1 rounded-full">
            Comprehensive Financial Services
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">
            Full Service Accounting Catalog
          </h2>
          <p className="text-xs sm:text-sm text-gray-600">
            Every service your Zimbabwean enterprise needs to operate legally, optimize tax exposure, and maintain continuous statutory clearance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES_LIST.map((srv) => (
            <motion.div
              key={srv.id}
              whileHover={{ y: -6 }}
              className="bg-white rounded-2xl p-6 border-2 border-slate-100 hover:border-gold-accent/80 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col justify-between space-y-5 border-t-4 border-t-gold-accent/50 relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3.5 bg-gradient-to-br from-navy-deep to-navy-dark text-gold-accent rounded-xl w-fit shadow-md group-hover:scale-110 group-hover:bg-gold-accent group-hover:text-navy-dark transition-all duration-300">
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-navy-deep bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                    Compliant
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-navy-deep group-hover:text-gold-accent transition-colors leading-snug">
                  {srv.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {srv.shortDesc}
                </p>
                <ul className="space-y-2 pt-2 text-[11px] text-gray-700 border-t border-slate-100">
                  {srv.highlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-accent flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 flex items-center justify-between border-t border-slate-100 gap-2">
                <button
                  onClick={() => {
                    setActivePage('services');
                  }}
                  className="text-xs font-bold text-navy-deep hover:text-gold-accent transition-colors flex items-center gap-1"
                >
                  <span>Rules</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenInquiry(srv.title)}
                  className="bg-navy-deep text-white hover:bg-gold-accent hover:text-navy-dark font-extrabold px-4 py-2 rounded-xl text-xs transition-all shadow-sm hover:shadow-md"
                >
                  {srv.ctaText || 'Inquire Now'}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY ARYGYLE SECTION WITH PHOTO & VALUES */}
      <section className="bg-slate-50 py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Photo featuring Executive Accounting Practice Office */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80"
                  alt="Arygyle Chartered Accountant Harare Boardroom & Accounting Office"
                  referrerPolicy="no-referrer"
                  className="w-full h-80 sm:h-96 object-cover object-center"
                />
              </div>
              <div className="absolute -bottom-6 -right-4 bg-navy-deep text-white p-4.5 rounded-2xl shadow-2xl max-w-xs space-y-1 border-t-4 border-gold-accent">
                <div className="flex items-center gap-1 text-gold-accent font-bold text-xs">
                  <Star className="w-4 h-4 fill-gold-accent" />
                  <span>Trusted Across Zimbabwe</span>
                </div>
                <p className="text-[11px] text-gray-200 leading-snug">
                  "No business is too small. Consult Professional Accountants at an affordable price."
                </p>
              </div>
            </div>

            {/* Right Value Proposition Text */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Our Firm Value Proposition
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">
                Bridging Corporate Excellence & Small Business Affordability
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                We believe that every Zimbabwean business owner deserves transparent, professional accounting services without exorbitant price barriers.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                  <Clock className="w-6 h-6 text-gold-accent" />
                  <h4 className="font-bold text-navy-deep text-sm">5 Days Incorporation</h4>
                  <p className="text-xs text-gray-600">Fast-tracked registration with the Registrar of Companies in Harare.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                  <ShieldCheck className="w-6 h-6 text-gold-accent" />
                  <h4 className="font-bold text-navy-deep text-sm">ZIMRA Server Experts</h4>
                  <p className="text-xs text-gray-600">Complete fiscal device interfacing and tax clearance renewals.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                  <Users className="w-6 h-6 text-gold-accent" />
                  <h4 className="font-bold text-navy-deep text-sm">From USD 20/month</h4>
                  <p className="text-xs text-gray-600">Predictable monthly retainers with zero hidden surprise charges.</p>
                </div>

                <div className="p-4 bg-white rounded-xl border border-gray-200 shadow-xs space-y-2">
                  <Building2 className="w-6 h-6 text-gold-accent" />
                  <h4 className="font-bold text-navy-deep text-sm">Harare Local Office</h4>
                  <p className="text-xs text-gray-600">Accessible physical offices in Kuwadzana 3, Harare with direct WhatsApp support.</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* PRICING HIGHLIGHT TEASER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-gray-200 pb-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
              Transparent Fixed Fees
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-deep">
              Popular Retainer & Launch Bundles
            </h2>
          </div>
          <button
            onClick={() => setActivePage('pricing')}
            className="text-xs font-bold text-navy-deep hover:text-gold-accent flex items-center gap-1"
          >
            <span>View All Package Tiers</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2 Column Teaser Grid: Monthly vs Startup */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Monthly Retainers Highlight */}
          <div className="bg-navy-deep text-white rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-xl border-t-4 border-gold-accent">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-gold-accent font-semibold">
                  Monthly Compliance Retainers
                </span>
                <span className="bg-gold-accent text-navy-dark text-[10px] font-bold px-2.5 py-0.5 rounded">
                  Most Popular: Silver ($50/mo)
                </span>
              </div>
              <h3 className="text-2xl font-bold">Silver Retainer — USD 50 / month</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                Complete monthly tax returns (VAT, PAYE, WHT), ZIMRA ledger management, monthly accounts, and annual tax clearance renewal.
              </p>
              <ul className="space-y-2 text-xs text-gray-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent" />
                  <span>Tax clearance renewal (ITF263) & annual return filing</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent" />
                  <span>VAT & Withholding Tax returns computation & submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-gold-accent" />
                  <span>Monthly Accounts & Profit/Loss financial statements</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenInquiry('Silver Package ($50/mo)')}
              className="w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-extrabold py-3.5 rounded-xl text-xs transition-colors shadow-md"
            >
              Subscribe to Silver Retainer ($50/mo)
            </button>
          </div>

          {/* Startup Package Highlight */}
          <div className="bg-white border-2 border-navy-deep rounded-2xl p-6 sm:p-8 space-y-6 flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wider text-navy-deep font-semibold">
                  Complete Startup Bundles
                </span>
                <span className="bg-navy-deep text-white text-[10px] font-bold px-2.5 py-0.5 rounded">
                  Most Popular: Standard ($260)
                </span>
              </div>
              <h3 className="text-2xl font-bold text-navy-deep">Standard Bundle — USD 260</h3>
              <p className="text-xs text-gray-600 leading-relaxed">
                Full company incorporation (PLC or PBC) + Bank Account opening + Tax Clearance + Custom Logo, Profile, Letterhead & Invoicing templates.
              </p>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>5-day company registration (PLC or PBC)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Company Bank Account Opening & ZIMRA Tax Clearance</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Logo, Company Profile, Letterhead & Invoice Book templates</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => onOpenInquiry('Standard Bundle ($260)')}
              className="w-full bg-navy-deep hover:bg-navy-dark text-white font-extrabold py-3.5 rounded-xl text-xs transition-colors shadow-md"
            >
              Select Standard Bundle ($260)
            </button>
          </div>

        </div>
      </section>

      {/* HOW IT WORKS — ANIMATED PROCESS TIMELINE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-10">
        <Reveal className="text-center space-y-3 max-w-2xl mx-auto">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-gold-accent bg-amber-50 border border-gold-accent/30 px-3 py-1 rounded-full">
            Simple 4-Step Process
          </span>
          <TextReveal
            as="h2"
            text="From First Call to Fully Compliant"
            highlight="Fully Compliant"
            className="text-2xl sm:text-4xl font-extrabold text-navy-deep"
          />
          <p className="text-xs sm:text-sm text-gray-600">
            A clear, guided path — most companies are registered and tax-cleared within five working days.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* connecting line */}
          <div className="hidden md:block absolute top-9 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-gold-accent/30 via-gold-accent to-gold-accent/30" />
          {[
            { step: '01', title: 'Consult & Choose', desc: 'Tell us your goals via WhatsApp, phone or the form. We recommend the right structure (PBC or PLC) and package.', icon: <MessageSquare className="w-6 h-6" /> },
            { step: '02', title: 'Submit Documents', desc: 'Provide 1–5 preferred names, director IDs, proof of residence and your main line of business.', icon: <FileSpreadsheet className="w-6 h-6" /> },
            { step: '03', title: 'We File & Register', desc: 'We handle the Registrar of Companies filing, incorporation certificates and bank account setup.', icon: <Building2 className="w-6 h-6" /> },
            { step: '04', title: 'Stay Compliant', desc: 'ZIMRA tax clearance, server interfacing and an optional monthly retainer keep you compliant year-round.', icon: <ShieldCheck className="w-6 h-6" /> },
          ].map((item, idx) => (
            <Reveal key={item.step} delay={idx * 0.12} className="relative">
              <div className="bg-white rounded-2xl border-2 border-slate-100 hover:border-gold-accent p-6 shadow-card hover:shadow-card-lg transition-all duration-300 h-full space-y-3 text-center group">
                <div className="mx-auto w-16 h-16 rounded-2xl bg-gradient-to-br from-navy-deep to-navy-dark text-gold-accent flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-3xl font-extrabold text-slate-200 group-hover:text-gold-accent/40 transition-colors">{item.step}</div>
                <h3 className="text-base font-extrabold text-navy-deep">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION BANNER WITH HARARE BACKGROUND */}
      <section className="relative bg-navy-dark text-white py-20 border-t-4 border-gold-accent overflow-hidden">
        
        {/* Background Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80"
            alt="Harare Corporate Financial Center"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover filter brightness-40"
          />
          <div className="absolute inset-0 bg-navy-dark/90" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
            Ready to Formalize & Grow Your Business in Zimbabwe?
          </h2>
          <p className="text-lg text-gold-accent max-w-xl mx-auto font-serif italic">
            "No business is too small. Consult Professional Accountants at an affordable price."
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-4 rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat on WhatsApp (+263 777 592 952)</span>
            </a>

            <a
              href={`tel:${FIRM_DETAILS.primaryPhone}`}
              className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-6 py-4 rounded-xl text-xs transition-all flex items-center gap-2 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Call Harare Office</span>
            </a>

            <button
              onClick={() => onOpenInquiry('General Inquiry')}
              className="bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-4 rounded-xl text-xs border border-white/30 transition-all"
            >
              Book Consultation Form
            </button>
          </div>

          <p className="text-xs text-gray-400 pt-4">
            Harare Executive Office: {FIRM_DETAILS.address} • Email: {FIRM_DETAILS.canonicalEmail}
          </p>
        </div>
      </section>

    </div>
  );
};
