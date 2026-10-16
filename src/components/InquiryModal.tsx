import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { FIRM_DETAILS, SERVICES_LIST } from '../data/firmData';
import { inquiryOptions } from '../data/packages';
export const InquiryModal = ({ isOpen, onClose, preselectedServiceOrPackage = 'Corporate Tax Consultation' }: {
    isOpen: boolean;
    onClose: () => void;
    preselectedServiceOrPackage?: string;
}) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [service, setService] = useState(preselectedServiceOrPackage);
    useEffect(() => setService(preselectedServiceOrPackage), [preselectedServiceOrPackage]);
    useEffect(() => { if (isOpen) {
        dialog.current?.showModal();
        document.body.style.overflow = 'hidden';
    }
    else {
        dialog.current?.close();
        document.body.style.overflow = '';
    } return () => { document.body.style.overflow = ''; }; }, [isOpen]);
    const send = (e: React.FormEvent) => { e.preventDefault(); const text = ['Enquiry for Arygyle Chartered Accountants', 'Name: ' + name, 'Phone: ' + phone, 'Email: ' + email, 'Service: ' + service, 'Message: ' + message].join('\n'); window.open('https://wa.me/' + FIRM_DETAILS.whatsappNumber + '?text=' + encodeURIComponent(text), '_blank', 'noopener,noreferrer'); };
    return <dialog ref={dialog} className="inquiry-dialog" aria-labelledby="inquiry-title" onCancel={onClose} onClose={onClose} onClick={e => { if (e.target === e.currentTarget)
        onClose(); }}><div className="dialog-content"><button type="button" className="dialog-close" onClick={onClose} aria-label="Close enquiry"><X size={22}/></button><span className="eyebrow">Start a conversation</span><h2 id="inquiry-title">Tell us about<br /><span className="serif">your next move.</span></h2><p>Share a few details. We’ll discuss the right scope and support for your business.</p><form className="enquiry-form" onSubmit={send}><label>Service or package<select value={service} onChange={e => setService(e.target.value)}>{[...new Set([service, ...SERVICES_LIST.map(s => s.title), ...inquiryOptions])].filter(Boolean).map(s => <option key={s}>{s}</option>)}</select></label><div className="form-pair"><label>Your name<input required autoComplete="name" value={name} onChange={e => setName(e.target.value)} maxLength={100}/></label><label>Phone number<input type="tel" required autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} maxLength={40}/></label></div><label>Email address<input type="email" autoComplete="email" value={email} onChange={e => setEmail(e.target.value)} maxLength={200}/></label><label>How can we help?<textarea rows={3} value={message} onChange={e => setMessage(e.target.value)} maxLength={2000}/></label><p className="form-note">This opens WhatsApp with your details. Review and send your message there.</p><button type="submit" className="button">Continue in WhatsApp <ArrowUpRight size={18}/></button></form></div></dialog>;
};
