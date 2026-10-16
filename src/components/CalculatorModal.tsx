import React, { useEffect, useRef, useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { PREMIUM_PACKAGES, STARTER_PACKAGES } from '../data/packages';
export const CalculatorModal = ({ isOpen, onClose, onSelectPackage }: {
    isOpen: boolean;
    onClose: () => void;
    onSelectPackage: (s: string) => void;
}) => {
    const dialog = useRef<HTMLDialogElement>(null);
    const [choice, setChoice] = useState('Silver');
    const options = [...STARTER_PACKAGES.map(p => ({ ...p, title: p.name, from: false })), ...PREMIUM_PACKAGES];
    const selected = options.find(p => p.name === choice)!;
    useEffect(() => { if (isOpen) {
        dialog.current?.showModal();
        document.body.style.overflow = 'hidden';
    }
    else {
        dialog.current?.close();
        document.body.style.overflow = '';
    } return () => { document.body.style.overflow = ''; }; }, [isOpen]);
    return <dialog ref={dialog} className="inquiry-dialog" onCancel={onClose} onClose={onClose} aria-labelledby="package-guide-title"><div className="dialog-content"><button className="dialog-close" onClick={onClose} aria-label="Close package guide"><X /></button><span className="eyebrow">Package guide</span><h2 id="package-guide-title">Plan your support.</h2><p>Compare the published starting fees. Your final scope and fee are agreed with Arygyle.</p><label className="enquiry-form">Choose a package<select value={choice} onChange={e => setChoice(e.target.value)}>{options.map(p => <option key={p.name}>{p.name}</option>)}</select></label><div className="guide-price">{selected.from ? 'From ' : ''}US${selected.price.toLocaleString('en-US')}<small>{selected.period === 'once' ? ' one-off' : ' / ' + selected.period}</small></div><h3>{selected.title}</h3><ul className="guide-features">{selected.features.map(f => <li key={f}>{f}</li>)}</ul><button className="button" onClick={() => { onClose(); onSelectPackage(PREMIUM_PACKAGES.some(p => p.name === selected.name) ? selected.name + ' Package' : selected.name); }}>Discuss this package <ArrowUpRight size={18}/></button></div></dialog>;
};
