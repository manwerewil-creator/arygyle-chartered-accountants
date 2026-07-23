import React from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { FIRM_DETAILS, SERVICES_LIST } from '../data/firmData';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

interface FooterProps {
  setActivePage: (page: Page) => void;
  onOpenInquiry: (serviceOrPackage?: string) => void;
  onOpenVerificationModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  setActivePage,
  onOpenInquiry,
  onOpenVerificationModal
}) => {
  const handlePageNav = (page: Page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-dark text-white pt-16 pb-8 border-t-4 border-gold-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-gray-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <Logo light size="lg" />
            <p className="text-gray-300 text-sm leading-relaxed mt-2">
              "{FIRM_DETAILS.tagline}"
            </p>
            <p className="text-xs text-gray-400 italic">
              "{FIRM_DETAILS.campaignLine}"
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenVerificationModal}
                className="inline-flex items-center gap-1.5 text-xs text-gold-accent hover:underline bg-white/5 px-3 py-1.5 rounded border border-gold-accent/20"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Client Data Source & Verification</span>
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h3 className="text-gold-accent font-semibold text-sm tracking-wider uppercase border-b border-gray-800 pb-2">
              Quick Navigation
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <button
                  onClick={() => handlePageNav('home')}
                  className="hover:text-gold-accent transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('about')}
                  className="hover:text-gold-accent transition-colors"
                >
                  About Our Firm & Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('services')}
                  className="hover:text-gold-accent transition-colors"
                >
                  Service Catalog & Compliance
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('pricing')}
                  className="hover:text-gold-accent transition-colors"
                >
                  Retainers & Startup Packages
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('faq')}
                  className="hover:text-gold-accent transition-colors"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNav('contact')}
                  className="hover:text-gold-accent transition-colors"
                >
                  Contact & Location
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Service Lines */}
          <div className="space-y-3">
            <h3 className="text-gold-accent font-semibold text-sm tracking-wider uppercase border-b border-gray-800 pb-2">
              Our Core Services
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              {SERVICES_LIST.map((srv) => (
                <li key={srv.id}>
                  <button
                    onClick={() => {
                      handlePageNav('services');
                    }}
                    className="hover:text-gold-accent transition-colors text-left flex items-center gap-1.5"
                  >
                    <span className="w-1.5 h-1.5 bg-gold-accent rounded-full flex-shrink-0" />
                    <span className="truncate">{srv.title}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Direct Contact */}
          <div className="space-y-3">
            <h3 className="text-gold-accent font-semibold text-sm tracking-wider uppercase border-b border-gray-800 pb-2">
              Harare Office
            </h3>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-accent flex-shrink-0 mt-0.5" />
                <span>{FIRM_DETAILS.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <a href={`tel:${FIRM_DETAILS.primaryPhone}`} className="hover:text-gold-accent">
                  {FIRM_DETAILS.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-green-400 flex-shrink-0" />
                <a
                  href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400"
                >
                  WhatsApp: {FIRM_DETAILS.primaryPhone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-accent flex-shrink-0" />
                <a href={`mailto:${FIRM_DETAILS.canonicalEmail}`} className="hover:text-gold-accent text-xs">
                  {FIRM_DETAILS.canonicalEmail}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry('General Inquiry')}
                className="w-full bg-gold-accent hover:bg-gold-hover text-navy-dark font-semibold py-2 px-3 rounded text-xs transition-colors flex items-center justify-center gap-2"
              >
                <span>Consult an Accountant</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

        {/* Regulatory & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div className="text-center md:text-left space-y-1">
            <p>
              &copy; {new Date().getFullYear()} {FIRM_DETAILS.legalName}. All rights reserved.
            </p>
            <p className="text-gray-500 text-[11px]">
              Governed under the Companies and Other Business Entities Act (Chapter 24:31) & ZIMRA Legislative Statutes.
            </p>
          </div>

          <div className="flex items-center gap-4 text-gray-400">
            <span>Harare, Zimbabwe</span>
            <span>•</span>
            <button onClick={() => handlePageNav('contact')} className="hover:text-white">
              Privacy & Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
