import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { RETAINER_PACKAGES, STARTUP_PACKAGES, FORMATION_OPTIONS } from '../data/firmData';
import { Calculator, X, CheckCircle2, FileText, Calendar, DollarSign, MessageSquare, ArrowRight } from 'lucide-react';

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPackage: (packageName: string) => void;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
  onSelectPackage
}) => {
  const [bizType, setBizType] = useState<'startup' | 'sme' | 'corporate'>('startup');
  const [formationChoice, setFormationChoice] = useState<'none' | 'pbc' | 'plc'>('pbc');
  const [retainerChoice, setRetainerChoice] = useState<'none' | 'bronze' | 'silver' | 'gold'>('silver');
  const [needsLogoWeb, setNeedsLogoWeb] = useState(false);
  const [needsFiscalisation, setNeedsFiscalisation] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  // Calculation logic
  let initialTotalUSD = 0;
  let monthlyTotalUSD = 0;
  const docsList: string[] = [];

  if (formationChoice === 'pbc') {
    initialTotalUSD += 100;
    docsList.push('1-5 Preferred Company Names', 'IDs & Proof of Residence of Directors', 'Main Line of Business');
  } else if (formationChoice === 'plc') {
    initialTotalUSD += 150;
    docsList.push('1-5 Preferred Company Names', '2-50 Directors IDs & Addresses', 'Signed Memorandum & Articles (CR6)');
  }

  if (needsLogoWeb) {
    initialTotalUSD += 160; // Upgrades to Standard Bundle equivalent
    docsList.push('Company Logo Brief & Letterhead Preferences');
  }

  if (needsFiscalisation) {
    initialTotalUSD += 80;
    docsList.push('ZIMRA Interfaced Fiscal Device details or multi-currency register');
  }

  if (retainerChoice === 'bronze') {
    monthlyTotalUSD += 20;
    docsList.push('Stamped Bank Statement for Tax Clearance Renewal');
  } else if (retainerChoice === 'silver') {
    monthlyTotalUSD += 50;
    docsList.push('Monthly Invoices/Sales Ledgers for VAT & WHT computation');
  } else if (retainerChoice === 'gold') {
    monthlyTotalUSD += 130;
    docsList.push('Share Register & Monthly Financial Statements');
  }

  // Find best matching bundle
  let matchedBundle = 'Custom Quote';
  if (formationChoice === 'pbc' && !needsLogoWeb && retainerChoice === 'none') {
    matchedBundle = 'Basic Bundle ($160 includes formation + bank account + tax clearance)';
  } else if (formationChoice === 'plc' && !needsLogoWeb && retainerChoice === 'none') {
    matchedBundle = 'Basic Plus Bundle ($200 includes PLC formation + bank account + tax clearance)';
  } else if (needsLogoWeb) {
    matchedBundle = 'Standard Bundle ($260 complete corporate identity & registration)';
  }

  const handleApply = () => {
    const summary = `Fee Estimator Quote: Formation: ${formationChoice.toUpperCase()}, Retainer: ${retainerChoice.toUpperCase()}, Estimated Setup: $${initialTotalUSD}, Monthly: $${monthlyTotalUSD}/mo`;
    onSelectPackage(summary);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto border border-gray-200 p-6 space-y-6"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >

        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-navy-deep text-gold-accent rounded-lg">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy-deep">
                Arygyle Fee & Package Estimator
              </h3>
              <p className="text-xs text-gray-500">
                Calculate estimated incorporation, ZIMRA tax clearance & monthly compliance costs
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1.5 rounded-lg hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-5 text-xs text-gray-800">
            
            {/* 1. Business Category */}
            <div>
              <label className="block font-bold text-navy-deep mb-1.5 text-xs">
                1. What stage is your business?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'startup', label: 'New Startup' },
                  { id: 'sme', label: 'Growing SME' },
                  { id: 'corporate', label: 'Large Corporate' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setBizType(item.id as any)}
                    className={`py-2 px-2.5 rounded-md border text-center font-medium transition-all ${
                      bizType === item.id
                        ? 'border-navy-deep bg-navy-deep text-white shadow-xs'
                        : 'border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Company Formation Choice */}
            <div>
              <label className="block font-bold text-navy-deep mb-1.5 text-xs">
                2. Do you need company registration?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'pbc', label: 'PBC ($100)', desc: '1 director, 1 line' },
                  { id: 'plc', label: 'PLC ($150)', desc: '2-50 directors' },
                  { id: 'none', label: 'Already Formed', desc: 'Existing entity' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFormationChoice(item.id as any)}
                    className={`p-2 rounded-md border text-left transition-all ${
                      formationChoice === item.id
                        ? 'border-navy-deep bg-navy-deep/5 text-navy-deep font-semibold'
                        : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <div className="font-semibold text-xs">{item.label}</div>
                    <div className="text-[10px] text-gray-500">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Addon Brand & Web */}
            <div className="space-y-2 pt-1 border-t border-gray-100">
              <label className="block font-bold text-navy-deep text-xs">
                3. Additional Branding & Compliance Addons
              </label>
              
              <label className="flex items-center gap-2.5 p-2 rounded bg-slate-50 border border-gray-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsLogoWeb}
                  onChange={(e) => setNeedsLogoWeb(e.target.checked)}
                  className="rounded text-navy-deep focus:ring-navy-deep"
                />
                <div>
                  <span className="font-medium text-navy-deep">Add Logo, Profile & Letterhead Design (+$160)</span>
                  <p className="text-[10px] text-gray-500">Includes corporate profile, quotation & invoice templates</p>
                </div>
              </label>

              <label className="flex items-center gap-2.5 p-2 rounded bg-slate-50 border border-gray-200 cursor-pointer">
                <input
                  type="checkbox"
                  checked={needsFiscalisation}
                  onChange={(e) => setNeedsFiscalisation(e.target.checked)}
                  className="rounded text-navy-deep focus:ring-navy-deep"
                />
                <div>
                  <span className="font-medium text-navy-deep">Add ZIMRA Fiscalisation Interfacing Setup (+$80)</span>
                  <p className="text-[10px] text-gray-500">Required for 2022+ Tax Clearance & VAT multi-currency issuing</p>
                </div>
              </label>
            </div>

            {/* 4. Monthly Retainer Package */}
            <div>
              <label className="block font-bold text-navy-deep mb-1.5 text-xs">
                4. Select Monthly Retainer Package
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'none', label: 'No Retainer', price: '$0/mo', desc: 'Pay ad-hoc per service' },
                  { id: 'bronze', label: 'Bronze', price: '$20/mo', desc: 'Income tax & PAYE' },
                  { id: 'silver', label: 'Silver', price: '$50/mo', desc: 'VAT + WHT + Accounts' },
                  { id: 'gold', label: 'Gold', price: '$130/mo', desc: 'Management accounts' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setRetainerChoice(item.id as any)}
                    className={`p-2.5 rounded-md border text-left transition-all ${
                      retainerChoice === item.id
                        ? 'border-gold-accent bg-amber-50 text-navy-deep font-semibold'
                        : 'border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs">{item.label}</span>
                      <span className="text-xs font-semibold text-gold-accent">{item.price}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 mt-0.5">{item.desc}</p>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Output Column */}
          <div className="lg:col-span-5 bg-navy-deep text-white rounded-xl p-5 flex flex-col justify-between space-y-4">
            
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="text-[11px] text-gold-accent uppercase tracking-wider font-semibold">
                  Estimated Pricing Summary
                </span>
                <h4 className="text-xl font-bold mt-1">Your Customized Plan</h4>
              </div>

              <div className="space-y-3 bg-white/5 p-3.5 rounded-lg border border-white/10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-300">Initial Setup Cost:</span>
                  <span className="text-xl font-bold text-gold-accent">${initialTotalUSD}</span>
                </div>
                <div className="flex items-center justify-between border-t border-white/10 pt-2">
                  <span className="text-xs text-gray-300">Ongoing Monthly Retainer:</span>
                  <span className="text-base font-bold text-green-400">${monthlyTotalUSD} / mo</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs text-gray-200">
                  <Calendar className="w-4 h-4 text-gold-accent" />
                  <span><strong>Turnaround:</strong> 5 Working Days</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-gray-200">
                  <FileText className="w-4 h-4 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-gold-accent">Required Client Documents:</span>
                    <ul className="mt-1 space-y-1 list-disc list-inside text-[11px] text-gray-300">
                      {docsList.slice(0, 4).map((doc, idx) => (
                        <li key={idx}>{doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-3 border-t border-white/10">
              <button
                onClick={handleApply}
                className="w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Book This Customized Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              
              <button
                onClick={() => {
                  const text = `Hi Arygyle Team, I used your Fee Calculator: Initial setup est. $${initialTotalUSD}, Monthly $${monthlyTotalUSD}/mo (${formationChoice.toUpperCase()} / ${retainerChoice.toUpperCase()}). Please advise on next steps.`;
                  window.open(`https://wa.me/263777592952?text=${encodeURIComponent(text)}`, '_blank');
                }}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Send Estimate via WhatsApp</span>
              </button>
            </div>

          </div>

        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
