import React, { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { VerificationNotice } from './components/VerificationNotice';
import { CalculatorModal } from './components/CalculatorModal';
import { InquiryModal } from './components/InquiryModal';
import { ScrollProgress } from './components/motion';

import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [calculatorModalOpen, setCalculatorModalOpen] = useState(false);
  const [verificationModalOpen, setVerificationModalOpen] = useState(false);

  const handleOpenInquiry = (serviceOrPackage?: string) => {
    setPreselectedService(serviceOrPackage || 'Company Formation');
    setInquiryModalOpen(true);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return (
          <HomeView
            setActivePage={setActivePage}
            onOpenInquiry={handleOpenInquiry}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        );
      case 'about':
        return (
          <AboutView
            setActivePage={setActivePage}
            onOpenInquiry={handleOpenInquiry}
            onOpenVerificationModal={() => setVerificationModalOpen(true)}
          />
        );
      case 'services':
        return (
          <ServicesView
            setActivePage={setActivePage}
            onOpenInquiry={handleOpenInquiry}
          />
        );
      case 'pricing':
        return (
          <PricingView
            onOpenInquiry={handleOpenInquiry}
            onOpenCalculator={() => setCalculatorModalOpen(true)}
          />
        );
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FaqView onOpenInquiry={handleOpenInquiry} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-navy-deep antialiased font-sans">

      {/* Reading progress bar */}
      <ScrollProgress />

      {/* Sticky Header Navigation */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        onOpenInquiry={handleOpenInquiry}
        onOpenCalculator={() => setCalculatorModalOpen(true)}
        onOpenVerificationModal={() => setVerificationModalOpen(true)}
      />

      {/* Main Page View Routing with animated transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer
        setActivePage={setActivePage}
        onOpenInquiry={handleOpenInquiry}
        onOpenVerificationModal={() => setVerificationModalOpen(true)}
      />

      {/* Floating WhatsApp Action Widget */}
      <WhatsAppWidget />

      {/* Modals */}
      <InquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        preselectedServiceOrPackage={preselectedService}
      />

      <CalculatorModal
        isOpen={calculatorModalOpen}
        onClose={() => setCalculatorModalOpen(false)}
        onSelectPackage={(quoteSummary) => {
          handleOpenInquiry(quoteSummary);
        }}
      />

      <VerificationNotice
        isOpen={verificationModalOpen}
        onClose={() => setVerificationModalOpen(false)}
      />

    </div>
  );
}
