import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FIRM_DETAILS } from '../data/firmData';
import { X, CheckCircle, AlertCircle, ShieldCheck, Mail, MapPin, Phone } from 'lucide-react';

interface VerificationNoticeProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VerificationNotice: React.FC<VerificationNoticeProps> = ({ isOpen, onClose }) => {
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
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-200 p-6 space-y-6"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
          >

        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-navy-deep text-gold-accent rounded-lg">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-navy-deep">
                Client Business Source & Verification
              </h3>
              <p className="text-xs text-gray-500">
                Extracted directly from official marketing flyers and public directory records
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

        {/* Content Body */}
        <div className="space-y-4 text-xs text-gray-700">
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="space-y-1">
              <p className="font-semibold text-amber-900">Pre-Launch Client Confirmation Checklist</p>
              <p className="text-amber-800 leading-relaxed">
                Before publishing to production, the client ({FIRM_DETAILS.brandName}) should confirm the single canonical email address and active domain mapping.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-200 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-navy-deep text-sm">
                <MapPin className="w-4 h-4 text-gold-accent" />
                <span>Physical Office Address</span>
              </div>
              <p className="text-gray-800 font-medium">{FIRM_DETAILS.address}</p>
              <p className="text-[11px] text-gray-500">Harare CBD, Zimbabwe</p>
            </div>

            <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-200 space-y-1.5">
              <div className="flex items-center gap-2 font-semibold text-navy-deep text-sm">
                <Phone className="w-4 h-4 text-gold-accent" />
                <span>Direct Contact Numbers</span>
              </div>
              <p className="text-gray-800 font-medium">WhatsApp: {FIRM_DETAILS.primaryPhone}</p>
              <p className="text-gray-800 font-medium">Landline / Phone: {FIRM_DETAILS.secondaryPhone}</p>
            </div>
          </div>

          {/* Email verification details */}
          <div className="bg-slate-50 p-3.5 rounded-lg border border-gray-200 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-navy-deep text-sm">
              <Mail className="w-4 h-4 text-gold-accent" />
              <span>Canonical & Alternate Email Addresses</span>
            </div>
            <ul className="space-y-1 text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-green-600" />
                <span><strong>Primary Canonical:</strong> {FIRM_DETAILS.canonicalEmail}</span>
              </li>
              {FIRM_DETAILS.alternateEmails.map((email, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-500">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-400 ml-1" />
                  <span>Flyer Alternate {idx + 1}: {email}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Managing Partner Bio Verification */}
          <div className="bg-navy-deep/5 p-3.5 rounded-lg border border-navy-deep/10 space-y-1.5">
            <h4 className="font-bold text-navy-deep text-sm">Managing Partner Context</h4>
            <p className="text-gray-800">
              <strong>{FIRM_DETAILS.managingPartner.name}</strong> — {FIRM_DETAILS.managingPartner.credentials}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {FIRM_DETAILS.managingPartner.experience}
            </p>
            <p className="text-[11px] text-gray-500 italic pt-1">
              {FIRM_DETAILS.managingPartner.flagNote}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="border-t border-gray-100 pt-4 flex justify-end">
          <button
            onClick={onClose}
            className="bg-navy-deep hover:bg-navy-dark text-white font-semibold px-5 py-2 rounded-lg text-xs"
          >
            I Understand & Continue
          </button>
        </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
