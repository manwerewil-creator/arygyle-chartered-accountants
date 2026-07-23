import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Page } from '../types';
import { FIRM_DETAILS, SERVICES_LIST, FORMATION_OPTIONS, AUDIT_CATEGORIES } from '../data/firmData';
import {
  Building2,
  ShieldCheck,
  Calculator,
  Receipt,
  TrendingUp,
  FileSpreadsheet,
  CheckCircle2,
  Clock,
  AlertTriangle,
  ArrowRight,
  FileText,
  DollarSign,
  ChevronRight
} from 'lucide-react';

interface ServicesViewProps {
  setActivePage: (page: Page) => void;
  onOpenInquiry: (serviceOrPackage?: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  setActivePage,
  onOpenInquiry
}) => {
  const [activeTab, setActiveTab] = useState<string>('company-formation');

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner with Image Overlay */}
      <section className="relative bg-navy-dark text-white py-16 border-b-4 border-gold-accent overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1610652492500-ded49ceeb378?auto=format&fit=crop&w=1920&q=80"
            alt="Zimbabwean chartered accountant providing statutory services"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy-dark/25 to-navy-dark/70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-gold-accent px-3 py-1.5 rounded-full text-xs font-semibold border border-gold-accent/40">
            <Building2 className="w-4 h-4 text-gold-accent" />
            <span>Full Statutory Service Catalog</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Accounting, Tax Clearance, VAT & Auditing
          </h1>
          <p className="hero-serif-tagline text-lg text-gold-accent font-serif italic">
            "{FIRM_DETAILS.tagline}"
          </p>
          <p className="text-gray-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
            Detailed regulatory compliance procedures, required client document checklists, and fee structures for Zimbabwean companies and individuals.
          </p>
        </div>
      </section>

      {/* Service Anchor Nav Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 sticky top-20 z-30 bg-slate-50/90 backdrop-blur-md py-3 rounded-2xl border border-gray-200 shadow-xs">
        <div className="flex items-center gap-2 overflow-x-auto pb-1 px-2">
          {SERVICES_LIST.map((srv) => (
            <button
              key={srv.id}
              onClick={() => {
                setActiveTab(srv.id);
                const el = document.getElementById(srv.id);
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`px-4 py-2 rounded-xl font-medium text-xs whitespace-nowrap transition-all ${
                activeTab === srv.id
                  ? 'bg-navy-deep text-white shadow-sm font-semibold'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {srv.title}
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED SERVICE SECTION 1: COMPANY FORMATION */}
      <section id="company-formation" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-slate-200/90 border-t-4 border-t-gold-accent p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 space-y-6"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 01 • Chapter 24:31 Governed
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                Company Formation & Incorporation Services
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Under the Companies and Other Business Entities Act (Chapter 24:31), signed into law November 2019, effective 13 February 2020.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Company Formation')}
              className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Register Company in 5 Days</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Image Banner */}
          <div className="relative rounded-2xl overflow-hidden h-48 sm:h-60 border border-gray-200 shadow-inner">
            <img
              src="https://images.unsplash.com/photo-1573164574511-73c773193279?auto=format&fit=crop&w=1200&q=80"
              alt="Business team registering a company in Harare"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/90 via-navy-deep/40 to-transparent p-6 flex items-end">
              <div>
                <span className="text-gold-accent font-bold text-xs uppercase tracking-wider">Fast Turnaround</span>
                <p className="text-white font-extrabold text-lg sm:text-xl">5 Working Days Guarantee with Registrar of Companies</p>
              </div>
            </div>
          </div>

          {/* PBC vs PLC Comparison Table */}
          <div className="space-y-4">
            <h3 className="font-bold text-navy-deep text-sm">
              Comparative Analysis: Private Business Corporation (PBC) vs Private Limited Company (PLC)
            </h3>

            <div className="overflow-x-auto rounded-xl border border-gray-200">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-navy-deep text-white">
                    <th className="p-3 font-semibold rounded-tl-lg">Feature</th>
                    <th className="p-3 font-semibold">Private Business Corporation (PBC)</th>
                    <th className="p-3 font-semibold rounded-tr-lg">Private Limited Company (PLC)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-slate-50">
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Standard Fee</td>
                    <td className="p-3 font-bold text-green-700 bg-green-50/50">USD 100</td>
                    <td className="p-3 font-bold text-navy-deep bg-amber-50/50">USD 150</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Best Suited For</td>
                    <td className="p-3 text-gray-700">Small businesses, sole traders & single-focused ventures</td>
                    <td className="p-3 text-gray-700">Medium to large businesses, holding companies, multi-purpose & tenders</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Director Requirement</td>
                    <td className="p-3 text-gray-700">Minimum 1 Director (Max 20 members)</td>
                    <td className="p-3 text-gray-700">Minimum 2 to 50 Directors</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Line of Business Scope</td>
                    <td className="p-3 text-gray-700">Limited to 1 main business objective</td>
                    <td className="p-3 text-gray-700">Multiple unrestricted business objects</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Key Statutory Docs</td>
                    <td className="p-3 text-gray-700">Certificate, CR28 (Statement), CR5 (Address)</td>
                    <td className="p-3 text-gray-700">Certificate, CR6 (Directors), CR5, Memorandum & Articles, Share Register</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-bold text-navy-deep bg-white">Registration Timeline</td>
                    <td className="p-3 text-gray-700 font-semibold text-navy-deep">5 Working Days</td>
                    <td className="p-3 text-gray-700 font-semibold text-navy-deep">5 Working Days</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Client Requirements Checklist */}
          <div className="bg-slate-50 p-5 rounded-xl border border-gray-200 space-y-3">
            <h4 className="font-bold text-navy-deep text-xs uppercase tracking-wider">
              Client Requirements Checklist to Register a Company in Zimbabwe:
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-gray-700">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>1 to 5 Preferred Company Names</strong> (submitted in order of preference for name reservation).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Choice of Entity:</strong> Private Business Corporation (PBC) or Private Limited Company (PLC).</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Full Particulars of Directors:</strong> Full names, residential addresses, and National ID or Passport copies.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Main Line of Business Objective:</strong> Brief description of core commercial activities.</span>
              </div>
            </div>
          </div>

        </motion.div>

      </section>

      {/* DETAILED SERVICE SECTION 2: TAX CLEARANCE (ITF263) */}
      <section id="tax-clearance" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-slate-200/90 border-t-4 border-t-gold-accent p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 space-y-6"
        >
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 02 • ZIMRA Compliance
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                ZIMRA Tax Clearance Certificate (ITF263)
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                All individuals, companies, partnerships and cooperatives launching a new business must register online with ZIMRA.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('ZIMRA Tax Clearance (ITF263)')}
              className="bg-navy-deep hover:bg-navy-dark text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
            >
              Get Tax Clearance
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-52 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80"
              alt="ZIMRA tax clearance documents and computation"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white font-extrabold text-sm">ITF263 Tax Clearance Certificate</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Individual Requirements */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex items-center gap-2 font-bold text-navy-deep text-sm">
                <ShieldCheck className="w-4 h-4 text-gold-accent" />
                <span>Individual Tax Clearance Applicants Need:</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Stamped Individual Bank Statement</strong> (official bank stamp required).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Proof of Residence</strong> (utility bill, affidavit, or lease agreement).</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Identity Documents:</strong> Certified National ID card or Passport copy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Active Bank Account:</strong> Required to complete ZIMRA online profile.</span>
                </li>
              </ul>
            </div>

            {/* PBC Requirements */}
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200 space-y-3">
              <div className="flex items-center gap-2 font-bold text-navy-deep text-sm">
                <Building2 className="w-4 h-4 text-gold-accent" />
                <span>PBC & Corporate Applicants Need:</span>
              </div>
              <ul className="space-y-2 text-xs text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>PBC Certificate of Incorporation</strong> or PLC Certificate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>CR28 or CR6 Documents:</strong> Official statement of incorporation particulars.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Directors' IDs & Proof of Residence:</strong> Certified copies for all listed directors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Corporate Stamped Bank Statement:</strong> Showing company name & bank account details.</span>
                </li>
              </ul>
            </div>

          </div>

        </motion.div>

      </section>

      {/* DETAILED SERVICE SECTION 3: TAX MANAGEMENT & COMPLIANCE */}
      <section id="tax-management" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        
        <div className="bg-white rounded-2xl border-2 border-slate-200/90 border-t-4 border-t-gold-accent p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 03 • Ongoing Compliance
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                Tax Management & Ledger Reconciliation
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Ongoing ZIMRA return computations, Master Updates, and ledger management.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Tax Management & Compliance')}
              className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
            >
              Manage Taxes
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-52 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1626266061368-46a8f578ddd6?auto=format&fit=crop&w=1200&q=80"
              alt="Accountant computing tax returns and managing ledgers"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white font-extrabold text-sm">Ledger Management &amp; Return Computation</span>
          </div>

          {/* 2022 ZIMRA Interfacing Warning Callout Box */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-xl space-y-2">
            <div className="flex items-center gap-2 font-bold text-red-900 text-xs uppercase tracking-wider">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Critical ZIMRA Compliance Client Education Point:</span>
            </div>
            <p className="text-xs text-red-800 leading-relaxed">
              <strong>With effect from 1 January 2022</strong>, no tax clearance certificate (ITF263) is issued to registered operators who are not interfaced with ZIMRA servers. In addition, all tax payments and return submissions (Income Tax, PAYE, VAT) must be 100% up to date.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1">
              <span className="font-bold text-navy-deep block text-sm">ZIMRA Master Update</span>
              <p className="text-gray-600">Reconciling master company details, address updates, director changes, and tax head activation on the ZIMRA e-service portal.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1">
              <span className="font-bold text-navy-deep block text-sm">Tax Ledger Management</span>
              <p className="text-gray-600">Continuous monitoring of ZIMRA account statements, clearing historical interest/penalties, and ledger offset applications.</p>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1">
              <span className="font-bold text-navy-deep block text-sm">Return Computation & Submission</span>
              <p className="text-gray-600">Accurate calculation and timely submission for Corporate Income Tax, PAYE, Withholding Tax (WHT), and QPDs.</p>
            </div>
          </div>

        </div>

      </section>

      {/* DETAILED SERVICE SECTION 4: VAT & FISCALISATION */}
      <section id="vat-fiscalisation" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-slate-200/90 border-t-4 border-t-gold-accent p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 04 • VAT &amp; Fiscal Devices
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                Value Added Tax (VAT) &amp; Fiscalisation Interfacing
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Compulsory registration, fiscal device interfacing, and multi-currency fiscal tax invoicing.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('VAT & Fiscalisation Interfacing')}
              className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-5 py-2.5 rounded-xl text-xs transition-colors flex items-center gap-2 shadow-sm"
            >
              <span>Setup Fiscalisation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-52 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1654263937079-f63a3ea4d48b?auto=format&fit=crop&w=1200&q=80"
              alt="Fiscal device and card payment terminal for VAT invoicing"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white font-extrabold text-sm">Fiscal Device Interfacing &amp; VAT Invoicing</span>
          </div>

          {/* Threshold cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-accent">Compulsory Registration Threshold</span>
              <p className="text-2xl font-extrabold text-navy-deep">USD 60,000</p>
              <p className="text-xs text-gray-600">or ZWL 7,800,000 in annual taxable turnover.</p>
            </div>
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gold-accent">Category C Threshold</span>
              <p className="text-2xl font-extrabold text-navy-deep">USD 240,000</p>
              <p className="text-xs text-gray-600">or ZWL 31,200,000 in annual taxable turnover.</p>
            </div>
          </div>

          {/* Fiscalisation callout */}
          <div className="bg-amber-50 border-l-4 border-gold-accent p-4 rounded-r-xl">
            <p className="text-xs text-gray-700 leading-relaxed">
              <strong className="text-navy-deep">With effect from 1 January 2022</strong>, all Registered Operators must issue Fiscal Tax Invoices printed by a fiscal electronic register or fiscal memory device interfaced with ZIMRA servers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            {[
              { t: 'VAT Registration', d: 'Complete online ZIMRA VAT registration once you reach the compulsory threshold.' },
              { t: 'Fiscalisation', d: 'Approved fiscal device supply, configuration and activation for compliant invoicing.' },
              { t: 'Multi-Currency Interfacing', d: 'Interface fiscal devices for USD/ZWL multi-currency fiscal tax invoice issuing.' },
              { t: 'VAT Deregistration', d: 'Clean, compliant deregistration when turnover falls below the threshold.' },
            ].map((it) => (
              <div key={it.t} className="p-4 bg-white rounded-xl border border-gray-200 hover:border-navy-deep transition-colors space-y-1">
                <span className="font-bold text-navy-deep block text-sm">{it.t}</span>
                <p className="text-gray-600">{it.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DETAILED SERVICE SECTION 5: CAPITAL GAINS TAX */}
      <section id="capital-gains" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl border-2 border-slate-200/90 border-t-4 border-t-gold-accent p-6 sm:p-8 shadow-md hover:shadow-2xl transition-all duration-300 space-y-6"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 05 • Property &amp; Asset Disposals
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                Capital Gains Tax (CGT) Advisory &amp; Certificates
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                The rate depends entirely on the asset's acquisition date — we compute it correctly and draft every document.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Capital Gains Tax (CGT)')}
              className="bg-navy-deep hover:bg-navy-dark text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
            >
              Consult CGT Expert
            </button>
          </div>

          <div className="relative rounded-2xl overflow-hidden h-40 sm:h-52 border border-gray-200">
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80"
              alt="Property and real estate disposal subject to capital gains tax"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" />
            <span className="absolute bottom-3 left-4 text-white font-extrabold text-sm">Property &amp; Asset Disposals</span>
          </div>

          {/* Before vs After comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-slate-50 p-5 rounded-2xl border border-gray-200 space-y-2">
              <div className="flex items-center gap-2 text-navy-deep font-bold text-sm">
                <Clock className="w-4 h-4 text-gold-accent" />
                <span>Acquired BEFORE 22 Feb 2019</span>
              </div>
              <p className="text-4xl font-extrabold text-navy-deep">5%</p>
              <p className="text-xs text-gray-600">Levied on the <strong>Gross Capital Amount</strong>. No deduction is made before applying the 5%.</p>
            </div>
            <div className="bg-navy-deep text-white p-5 rounded-2xl border-2 border-gold-accent space-y-2">
              <div className="flex items-center gap-2 text-gold-accent font-bold text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>Acquired ON / AFTER 22 Feb 2019</span>
              </div>
              <p className="text-4xl font-extrabold text-gold-accent">20%</p>
              <p className="text-xs text-gray-200">Levied on the <strong>Capital Gain</strong> after allowing all applicable deductions.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            {[
              { t: 'CGT Certificate', d: 'Obtain your Capital Gains Tax clearance certificate to complete property transfers.' },
              { t: 'Legal Document Drafting', d: 'We draft all legal documents required for the CGT certificate process.' },
              { t: 'CGT Advisory', d: 'Strategic advice on acquisition dates, deductions and minimising exposure.' },
            ].map((it) => (
              <div key={it.t} className="p-4 bg-slate-50 rounded-xl border border-gray-200 space-y-1">
                <span className="font-bold text-navy-deep block text-sm">{it.t}</span>
                <p className="text-gray-600">{it.d}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* DETAILED SERVICE SECTION 6: AUDITING SERVICES (FULL 9 ITEMS) */}
      <section id="auditing-services" className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8 scroll-mt-32">
        
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-gold-accent">
                Service Line 06 • Statutory & Internal Audits
              </span>
              <h2 className="text-2xl font-extrabold text-navy-deep mt-1">
                Auditing & Assurance Services (9 Specialized Categories)
              </h2>
              <p className="text-xs text-gray-600 mt-1">
                Independent verification, operational health checks, and statutory assurance for Zimbabwean entities.
              </p>
            </div>
            <button
              onClick={() => onOpenInquiry('Auditing Services')}
              className="bg-navy-deep hover:bg-navy-dark text-white font-bold px-5 py-2.5 rounded-xl text-xs transition-colors shadow-sm"
            >
              Request Audit
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AUDIT_CATEGORIES.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="p-5 bg-slate-50 rounded-2xl border border-gray-200 hover:border-navy-deep transition-colors space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold uppercase text-gold-accent">
                      Audit Type 0{idx + 1}
                    </span>
                    <FileSpreadsheet className="w-4 h-4 text-navy-deep opacity-60" />
                  </div>
                  <h3 className="font-bold text-navy-deep text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-1">{item.desc}</p>
                </div>
                
                <button
                  onClick={() => onOpenInquiry(`Audit: ${item.title}`)}
                  className="text-[11px] font-semibold text-navy-deep hover:text-gold-accent pt-2 text-left flex items-center gap-1"
                >
                  <span>Request This Audit</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-navy-deep text-white py-12 rounded-3xl max-w-7xl mx-auto px-6 text-center space-y-4 shadow-xl">
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need a Custom Accounting or Audit Quote?</h3>
        <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
          Contact our Harare team today. No business is too small to receive certified chartered accounting support.
        </p>
        <button
          onClick={() => onOpenInquiry('Custom Service Quote')}
          className="bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-6 py-3.5 rounded-xl text-xs transition-colors shadow-md"
        >
          Consult Professional Accountant
        </button>
      </section>

    </div>
  );
};
