import React from 'react';
import { Plus, ArrowUpRight } from 'lucide-react';
import { PageIntro } from './HomeView';
const questions = [
    ['What does Arygyle specialise in?', 'Our eight advisory practices cover corporate tax strategy, transactions and investments, VAT, tax governance, ZIMRA disputes, international tax, digital tax and outsourced tax leadership.'],
    ['Which package should I choose?', 'Choose Silver for corporate compliance, Gold for ongoing planning, Platinum for risk and governance, or Diamond for an executive tax partner. Sovereign supports international investment projects. Signature provides group tax leadership. We agree the final scope with you.'],
    ['Do you support new and smaller businesses?', 'Yes. Basic Plus and Standard Complete Plus cover company formation and registration support. Basic Monthly Plus and Standard Monthly Plus provide ongoing compliance support.'],
    ['Who leads the firm?', 'Farai Arygyle Nicholia Tofa is the CEO and Founding Director. His professional designation is Associate, Chartered Tax Accountant, ACTA(Z).'],
    ['How are fees agreed?', 'Published package fees are in US dollars. Prices marked “from” depend on scope and complexity. We confirm services, deliverables and the full fee before work begins.'],
    ['Can you assist during a ZIMRA audit or tax dispute?', 'We support audit preparation, assessment reviews, evidence gathering and technical responses. We coordinate with qualified legal practitioners where legal representation is needed.'],
    ['Do you provide statutory external audits?', 'Where statutory audit authorisation is required, we coordinate with appropriately qualified and authorised professionals.'],
    ['How do I get started?', 'Call, email or use our enquiry form to prepare a WhatsApp message. We will discuss your requirements and agree an engagement scope.']
];
export const FaqView = ({ onOpenInquiry }: {
    onOpenInquiry: (s?: string) => void;
}) => <><PageIntro label="Questions / Getting started" title="A little clarity before we begin." description="Answers about our services, packages and working with Arygyle."/><section className="wrap section faq-content"><div className="service-details">{questions.map(([q, a]) => <details key={q}><summary>{q}<Plus size={18}/></summary><p>{a}</p></details>)}</div><button className="text-link" onClick={() => onOpenInquiry()}>Talk through your requirements <ArrowUpRight size={18}/></button></section></>;
