import React, { useState } from 'react';
import { Page } from '../types';
import { Logo } from './Logo';
import { FIRM_DETAILS } from '../data/firmData';
import { Phone, MessageSquare, MapPin, Menu, X, ArrowRight, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  activePage: Page;
  setActivePage: (page: Page) => void;
  onOpenInquiry: (serviceOrPackage?: string) => void;
  onOpenCalculator: () => void;
  onOpenVerificationModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  onOpenInquiry,
  onOpenCalculator,
  onOpenVerificationModal
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Packages & Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: Page) => {
    setActivePage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 transition-all">
      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left focus:outline-none focus:ring-2 focus:ring-navy-deep/20 rounded p-1 transition-transform hover:scale-[1.01]"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all relative ${
                activePage === item.id
                  ? 'text-navy-deep font-bold bg-slate-100/80 shadow-2xs'
                  : 'text-gray-700 hover:text-navy-deep hover:bg-slate-50'
              }`}
            >
              {item.label}
              {activePage === item.id && (
                <div className="absolute bottom-0 left-3 right-3 h-0.5 bg-gold-accent rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Buttons & Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => {
              onOpenInquiry('ZIMRA Tax Clearance (ITF263)');
            }}
            className="hidden sm:inline-flex items-center gap-2 bg-gold-accent hover:bg-gold-hover text-navy-dark font-bold px-4 py-2.5 rounded-lg text-xs sm:text-sm shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 focus:outline-none"
          >
            <span>Get Tax Clearance</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-navy-deep hover:bg-gray-100 rounded-md focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-2 animate-fadeIn shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`w-full text-left px-4 py-2.5 text-base font-medium rounded-md transition-colors flex items-center justify-between ${
                activePage === item.id
                  ? 'bg-navy-deep text-white font-bold'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span>{item.label}</span>
              {activePage === item.id && <div className="w-2 h-2 rounded-full bg-gold-accent" />}
            </button>
          ))}

          <div className="pt-4 border-t border-gray-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('Company Formation');
              }}
              className="w-full bg-navy-deep text-white font-semibold py-2.5 rounded-md text-center text-sm"
            >
              Register a Company (PBC/PLC)
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry('ZIMRA Tax Clearance');
              }}
              className="w-full bg-gold-accent text-navy-dark font-semibold py-2.5 rounded-md text-center text-sm"
            >
              Get Tax Clearance
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
