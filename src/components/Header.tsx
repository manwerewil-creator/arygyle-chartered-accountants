import React, { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Page } from '../types';
import { Logo } from './Logo';
export const navItems: {
    id: Page;
    label: string;
}[] = [{ id: 'home', label: 'Home' }, { id: 'about', label: 'About us' }, { id: 'services', label: 'Services' }, { id: 'pricing', label: 'Packages' }, { id: 'contact', label: 'Contact' }];
export const Header = ({ activePage, setActivePage, onOpenInquiry }: {
    activePage: Page;
    setActivePage: (p: Page) => void;
    onOpenInquiry: (s?: string) => void;
}) => {
    const [open, setOpen] = useState(false);
    return <header className="site-header"><a href="#home" className="brand-link" aria-label="Arygyle home" onClick={() => { setActivePage('home'); setOpen(false); }}><img src="/favicon-256.png" alt=""/><span className="header-wordmark">ARYGYLE<small>CHARTERED ACCOUNTANTS ZIMBABWE</small></span></a><nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">{navItems.map(item => <a key={item.id} href={'#' + item.id} aria-current={activePage === item.id ? 'page' : undefined} onClick={() => { setActivePage(item.id); setOpen(false); }}>{item.label}</a>)}</nav><button className="button header-cta" onClick={() => onOpenInquiry()}>Speak to an adviser <ArrowUpRight size={17}/></button><button className="menu-toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></header>;
};
