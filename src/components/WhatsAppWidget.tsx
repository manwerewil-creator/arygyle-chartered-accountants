import React, { useState } from 'react';
import { FIRM_DETAILS } from '../data/firmData';
import { MessageSquare, X, Send, ShieldCheck } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const quickPrompts = [
    'I need Company Formation (PBC/PLC)',
    'I need ZIMRA Tax Clearance (ITF263)',
    'I need VAT & Fiscalisation Interfacing',
    'I want a Monthly Retainer Quote'
  ];

  const handleSendWhatsApp = (text: string) => {
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${encoded}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Expanded WhatsApp Modal */}
      {isOpen && (
        <div className="pointer-events-auto mb-4 w-80 sm:w-96 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden animate-slideUp">
          {/* Header */}
          <div className="bg-navy-deep text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white shadow">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-sm leading-tight">{FIRM_DETAILS.brandName}</h4>
                <p className="text-[11px] text-green-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-400 inline-block animate-pulse" />
                  Online • Harare Office Support
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-300 hover:text-white p-1 rounded-full hover:bg-white/10"
              aria-label="Close chat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3">
            <div className="bg-white p-3 rounded-lg border border-gray-200 text-xs text-gray-700 shadow-sm">
              <p className="font-medium text-navy-deep mb-1">Hello! Welcome to Arygyle Chartered Accountants.</p>
              <p>How can our Harare team assist your business today?</p>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-gray-500">Quick Inquiry Options:</p>
              {quickPrompts.map((prompt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendWhatsApp(prompt)}
                  className="w-full text-left bg-white hover:bg-navy-deep hover:text-white text-gray-800 text-xs px-3 py-2 rounded-md border border-gray-200 transition-colors shadow-xs flex items-center justify-between"
                >
                  <span>{prompt}</span>
                  <Send className="w-3.5 h-3.5 text-gold-accent opacity-80" />
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2 border-t border-gray-200">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type custom message..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && customMsg.trim()) {
                      handleSendWhatsApp(customMsg);
                    }
                  }}
                  className="flex-1 text-xs border border-gray-300 rounded px-2.5 py-1.5 focus:outline-none focus:border-navy-deep bg-white"
                />
                <button
                  onClick={() => customMsg.trim() && handleSendWhatsApp(customMsg)}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-1 shadow-sm"
                >
                  <span>Send</span>
                  <Send className="w-3 h-3" />
                </button>
              </div>
            </div>
            
            <div className="text-[10px] text-gray-500 text-center flex items-center justify-center gap-1">
              <ShieldCheck className="w-3 h-3 text-gold-accent" />
              <span>Direct WhatsApp to +263 777 592 952</span>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="pointer-events-auto bg-green-500 hover:bg-green-600 text-white p-3.5 rounded-full shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 group border-2 border-white"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-bold pr-1">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
};
