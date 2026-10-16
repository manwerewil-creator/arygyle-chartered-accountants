import React, { useEffect, useState } from 'react';
import './corporate.css';
import { CalculatorModal } from './components/CalculatorModal';
import { FaqView } from './views/FaqView';
import { MotionConfig } from 'motion/react';
import { Page } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { InquiryModal } from './components/InquiryModal';
import { HomeView } from './views/HomeView';
import { AboutView } from './views/AboutView';
import { ServicesView } from './views/ServicesView';
import { PricingView } from './views/PricingView';
import { ContactView } from './views/ContactView';
const pages: Page[] = ['home', 'about', 'services', 'pricing', 'contact', 'faq'];
const getPage = (): Page => { const p = window.location.hash.slice(1) as Page; return pages.includes(p) ? p : 'home'; };
export default function App() {
    const [activePage, setActivePage] = useState<Page>(getPage);
    const [calculatorOpen, setCalculatorOpen] = useState(false);
    const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
    const [preselectedService, setPreselectedService] = useState('');
    const navigate = (p: Page) => { if (window.location.hash !== '#' + p)
        window.location.hash = p; setActivePage(p); };
    useEffect(() => { const change = () => setActivePage(getPage()); window.addEventListener('hashchange', change); return () => window.removeEventListener('hashchange', change); }, []);
    useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }); document.title = (activePage === 'home' ? 'Corporate Tax Advisory' : activePage === 'pricing' ? 'Packages' : activePage[0].toUpperCase() + activePage.slice(1)) + ' | Arygyle Chartered Accountants Zimbabwe'; }, [activePage]);
    const openInquiry = (service = 'Corporate Tax Consultation') => { setPreselectedService(service); setInquiryModalOpen(true); };
    return <MotionConfig reducedMotion="user"><div className="site-shell"><a className="skip-link" href="#main-content">Skip to content</a><Header activePage={activePage} setActivePage={navigate} onOpenInquiry={openInquiry}/><main id="main-content" tabIndex={-1}>{activePage === 'home' ? <HomeView setActivePage={navigate} onOpenInquiry={openInquiry}/> : activePage === 'about' ? <AboutView onOpenInquiry={openInquiry}/> : activePage === 'services' ? <ServicesView onOpenInquiry={openInquiry}/> : activePage === 'pricing' ? <PricingView onOpenInquiry={openInquiry} onOpenCalculator={() => setCalculatorOpen(true)}/> : activePage === 'faq' ? <FaqView onOpenInquiry={openInquiry}/> : <ContactView onOpenInquiry={openInquiry}/>}</main><Footer setActivePage={navigate} onOpenInquiry={openInquiry}/><WhatsAppWidget /><CalculatorModal isOpen={calculatorOpen} onClose={() => setCalculatorOpen(false)} onSelectPackage={openInquiry}/><InquiryModal isOpen={inquiryModalOpen} onClose={() => setInquiryModalOpen(false)} preselectedServiceOrPackage={preselectedService}/></div></MotionConfig>;
}
