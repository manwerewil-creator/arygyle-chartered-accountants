import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_DETAILS, SERVICES_LIST, RETAINER_PACKAGES, STARTUP_PACKAGES } from '../data/firmData';
import { InquiryFormState } from '../types';
import { X, Send, CheckCircle2, MessageSquare, Phone, Mail, ShieldCheck } from 'lucide-react';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedServiceOrPackage?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  preselectedServiceOrPackage = ''
}) => {
  const [formState, setFormState] = useState<InquiryFormState>({
    name: '',
    email: '',
    phone: '',
    serviceInterested: preselectedServiceOrPackage || 'Company Formation',
    message: '',
    preferredContact: 'whatsapp'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedServiceOrPackage) {
      setFormState((prev) => ({
        ...prev,
        serviceInterested: preselectedServiceOrPackage
      }));
    }
  }, [preselectedServiceOrPackage]);

  // Reset submitted state + lock body scroll + Escape-to-close while open
  useEffect(() => {
    if (!isOpen) return;
    setSubmitted(false);
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleSendWhatsAppDirect = () => {
    const text = `Inquiry for Arygyle Chartered Accountants:
Name: ${formState.name}
Phone: ${formState.phone}
Email: ${formState.email}
Service/Package: ${formState.serviceInterested}
Preferred Contact: ${formState.preferredContact}
Message: ${formState.message || 'I would like to inquire about this service.'}`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${encoded}`, '_blank');
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
            className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-gray-200 p-6 space-y-5"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >

        {/* Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-3">
          <div>
            <h3 className="text-lg font-bold text-navy-deep">
              Consult Professional Accountants
            </h3>
            <p className="text-xs text-gray-500">
              {FIRM_DETAILS.campaignLine}
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 p-1 rounded hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-scaleUp">
            <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-navy-deep">Inquiry Received!</h4>
              <p className="text-xs text-gray-600 max-w-xs mx-auto">
                Thank you, <strong>{formState.name}</strong>. An accountant from our Harare office will review your details regarding <strong>{formState.serviceInterested}</strong> and reach out shortly.
              </p>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={handleSendWhatsAppDirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-lg text-xs flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open Instant Chat on WhatsApp Now</span>
              </button>

              <button
                onClick={onClose}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 rounded-lg text-xs"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            
            {/* Service / Package Pre-selection */}
            <div>
              <label className="block font-semibold text-navy-deep mb-1">
                Service / Package Interested In *
              </label>
              <select
                value={formState.serviceInterested}
                onChange={(e) => setFormState({ ...formState, serviceInterested: e.target.value })}
                className="w-full bg-slate-50 border border-gray-300 rounded-lg p-2.5 font-medium text-navy-deep focus:outline-none focus:border-navy-deep"
              >
                <optgroup label="Company Formation">
                  <option value="PBC Formation ($100)">Private Business Corporation (PBC) - $100</option>
                  <option value="PLC Formation ($150)">Private Limited Company (PLC) - $150</option>
                </optgroup>
                <optgroup label="ZIMRA & Tax Services">
                  <option value="ZIMRA Tax Clearance (ITF263)">ZIMRA Tax Clearance Certificate (ITF263)</option>
                  <option value="VAT & Fiscalisation Interfacing">VAT & Fiscal Device Interfacing</option>
                  <option value="Tax Management & Compliance">Tax Ledger Management & Return Filing</option>
                  <option value="Capital Gains Tax (CGT)">Capital Gains Tax Certificate & Advisory</option>
                  <option value="Auditing Services">Statutory or Operational Audit Inquiry</option>
                </optgroup>
                <optgroup label="Monthly Retainer Packages">
                  <option value="Bronze Package ($20/mo)">Bronze Package - $20 / month</option>
                  <option value="Silver Package ($50/mo)">Silver Package - $50 / month (Most Popular)</option>
                  <option value="Gold Package ($130/mo)">Gold Package - $130 / month</option>
                </optgroup>
                <optgroup label="Start Up Bundles">
                  <option value="Basic Bundle ($160)">Basic Bundle - $160</option>
                  <option value="Basic Plus Bundle ($200)">Basic Plus Bundle - $200</option>
                  <option value="Standard Bundle ($260)">Standard Bundle - $260 (Popular)</option>
                  <option value="Premium Bundle ($500)">Premium Bundle - $500</option>
                  <option value="Premium Plus Bundle ($700)">Premium Plus Bundle - $700</option>
                </optgroup>
              </select>
            </div>

            {/* Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tendai Moyo"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-navy-deep"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+263 77..."
                  value={formState.phone}
                  onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-navy-deep"
                />
              </div>
            </div>

            {/* Email & Preferred Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.co.zw"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-navy-deep"
                />
              </div>

              <div>
                <label className="block font-semibold text-gray-700 mb-1">Preferred Contact Method</label>
                <select
                  value={formState.preferredContact}
                  onChange={(e) => setFormState({ ...formState, preferredContact: e.target.value as any })}
                  className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-navy-deep"
                >
                  <option value="whatsapp">WhatsApp Message</option>
                  <option value="phone">Phone Call</option>
                  <option value="email">Email Response</option>
                </select>
              </div>
            </div>

            {/* Message Box */}
            <div>
              <label className="block font-semibold text-gray-700 mb-1">Additional Details / Message</label>
              <textarea
                rows={3}
                placeholder="Describe your business or specific questions for our accountants..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:outline-none focus:border-navy-deep resize-none"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="w-full bg-navy-deep hover:bg-navy-dark text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Submit Inquiry to Harare Office</span>
                <Send className="w-4 h-4 text-gold-accent" />
              </button>

              <button
                type="button"
                onClick={handleSendWhatsAppDirect}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Directly via WhatsApp Instead (+263 777 592 952)</span>
              </button>
            </div>

            <p className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-gold-accent" />
              <span>No business is too small. Confidential chartered accountancy advice.</span>
            </p>

          </form>
        )}

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
