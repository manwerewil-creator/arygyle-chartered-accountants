import corporateServices from './corporateServices.json';
import { PREMIUM_PACKAGES, STARTER_PACKAGES as NEW_STARTERS } from './packages';
import { RetainerPackage, StartupPackage, FormationOption, FAQItem, ServiceItem } from '../types';
export const FIRM_DETAILS = {
    legalName: 'Arygyle Chartered Accountants Zimbabwe (Private) Limited',
    brandName: 'Arygyle Chartered Accountants',
    tagline: 'Strategic Tax Intelligence. Corporate Confidence. Sustainable Value.',
    campaignLine: 'Corporate tax advice shaped around your business.',
    address: '210 Throughmton House, Cnr J. Nyerere & S. Machel, Harare',
    primaryPhone: '+263 777 592 952',
    whatsappNumber: '263777592952',
    secondaryPhone: '+263 717 061 148',
    canonicalEmail: 'farai@arygylecazim.co.zw',
    alternateEmails: ['farai@arygyle.co.zw', 'arygylecazim@gmail.com'],
    domain: 'arygyle.co.zw',
    founded: 'February 2019',
    specialistLine: 'Taxation Specialists — ZIMRA Registered Tax Agents',
    credentialStrip: 'ZIMRA Registered Tax Agent • Tax & VAT Structuring Specialist • Professional Tax Opinions • Tax Compliance • Company Formation',
    managingPartner: {
        name: 'Farai Arygyle Nicholia Tofa',
        shortName: 'Farai Tofa',
        credentials: 'ACTA(Z)',
        role: 'CEO & Founding Director',
        institute: 'Institute of Chartered Tax Accountants of Zimbabwe (CTA)',
        designation: 'Associate, Chartered Tax Accountant (ACTA(Z))',
        membershipNo: 'ICTAZ-M-2026-08617',
        certificateNo: '8458299',
        validUntil: '31 December 2026',
        experience: 'A ZIMRA-registered tax practitioner with over 10 years of experience in the profession, specialising in corporate tax advisory, VAT structuring and ZIMRA audit representation, with deep expertise in tax compliance, fiscalisation and business restructuring.',
        specialisations: [
            'Corporate tax advisory & planning',
            'VAT structuring for construction & mining',
            'ZIMRA audit representation',
            'Transfer pricing compliance',
            'Tax due diligence',
            'Fiscalisation & electronic tax invoice compliance',
            'Cross-border taxation',
            'Tax risk management',
            'Business restructuring',
            'CFO & outsourced finance advisory'
        ],
        flagNote: 'Chartered Tax Accountant, ACTA(Z). Membership reference ICTAZ-M-2026-08617.'
    },
    actReference: 'Companies and Other Business Entities Act (Chapter 24:31)',
    formationTurnaround: '5 Working Days'
};
// Firm "About Us" — background, vision, mission, values and objectives (client-provided)
export const ABOUT_CONTENT = {
    background: 'Arygyle Chartered Accountants Zimbabwe (Private) Limited set foot in February 2019 providing accounting, taxation, corporate secretarial and statutory services. One of the best ways of ensuring success and continuity in any business is to ensure that all statutory obligations are met in time. Our services are dedicated to assisting our Zimbabwean and diaspora clients, and we serve a broad client base ranging from start-up companies to listed and regulated public limited companies. As legal requirements on Zimbabwean registered companies grow more complex and stringent, we help businesses meet their statutory and regulatory obligations and satisfy increasing stakeholder demands for corporate compliance.',
    vision: 'To serve the needs of the customer in relation to accounting, taxation, corporate secretarial and statutory services.',
    mission: 'To provide reliable and efficient services of uncompromising world-class standards for enterprises, with integrity, professionalism, independence and excellence.',
    coreValues: [
        'Act ethically',
        'Lead by example',
        'Open and honest in all communications',
        'Deliver a quality service with an emphasis on integrity',
        'Foster teamwork and collaboration with other member firms',
        'Maintain a supportive environment in which our people can flourish'
    ],
    objectives: [
        'Maintain a high level of integrity, objectivity and professional standards',
        'Respond proactively to new challenges and developments in our sector',
        'Maintain a high level of performance, professional knowledge and industry expertise',
        'Ensure that our clients receive the best possible professional advice',
        'Provide high-quality services through global resources, close relationships, depth of talent, integrity and the stature of other member firms'
    ]
};
export const SERVICES_LIST: ServiceItem[] = corporateServices.map(s => ({ id: s.id, title: s.title, shortDesc: s.description, fullDesc: s.description, iconName: 'Building2', highlights: s.sections.map(v => v.title), ctaText: 'Discuss this service' }));
export const FORMATION_OPTIONS: FormationOption[] = [
    {
        type: 'PBC',
        fullName: 'Private Business Corporation (PBC)',
        priceUSD: 100,
        bestFor: 'Small businesses & sole entrepreneurs focused on one core line of business.',
        minDirectors: '1 Director (Minimum 1, Maximum 20)',
        linesOfBusiness: '1 Single line of business objective',
        regulatoryCommitments: 'Simplified annual regulatory filings & ZIMRA registration',
        docsIncluded: [
            'Name Reservation Certificate',
            'PBC Incorporation Certificate',
            'CR28 Document (Statement of Incorporation)',
            'CR5 (Registered Office Address)',
            'Memorandum of Business Objectives',
            '5 Working Days Turnaround Guarantee'
        ]
    },
    {
        type: 'PLC',
        fullName: 'Private Limited Company (PLC)',
        priceUSD: 150,
        bestFor: 'Medium to large businesses, tenders, holding structures & multi-purpose ventures.',
        minDirectors: '2 to 50 Directors',
        linesOfBusiness: 'Multiple unrestricted business objectives',
        regulatoryCommitments: 'Annual returns to Registrar of Companies, share registers & statutory audits',
        docsIncluded: [
            'Name Reservation Certificate',
            'Certificate of Incorporation',
            'CR6 (Directors & Secretaries Particulars)',
            'CR5 (Registered Address)',
            'Memorandum & Articles of Association',
            'Share Certificates & Official Register',
            '5 Working Days Turnaround Guarantee'
        ]
    }
];
export const RETAINER_PACKAGES: RetainerPackage[] = PREMIUM_PACKAGES.map(p => ({ id: p.name.toLowerCase(), name: p.name + ' Package', priceUSD: p.price, period: 'per ' + p.period, tagline: p.audience, features: p.features }));
export const STARTUP_PACKAGES: StartupPackage[] = NEW_STARTERS.filter(p => p.period === 'once').map(p => ({ id: p.name.toLowerCase().replaceAll(' ', '-'), name: p.name, priceUSD: p.price, tagline: 'Company formation and compliance support.', features: p.features }));
export const AUDIT_CATEGORIES = [
    { title: 'Internal Controls Audit', desc: 'Review and strengthening of internal financial controls, approval workflows and segregation of duties.' },
    { title: 'Operational Audit', desc: 'Review of operational procedures, internal controls, efficiency, and resource utilization.' },
    { title: 'Due Diligence Review', desc: 'Financial, tax, and legal health check before acquisitions, investments, or mergers.' },
    { title: 'Risk-Based Audit', desc: 'Identification and testing of the highest-risk areas across finance, tax and operations.' },
    { title: 'Information Systems Audit', desc: 'Assessment of IT infrastructure security, financial data integrity, and digital ledgers.' },
    { title: 'Tax Audit', desc: 'Comprehensive review of past ZIMRA filings to ensure zero penalty exposure before official inspections.' },
    { title: 'Compliance Audit', desc: 'Verification against Companies Act (24:31), NSSA, PRAZ, and regulatory statutory mandates.' },
    { title: 'Value for Money Audit', desc: 'Performance and efficiency evaluation ensuring maximum return on capital expenditures.' }
];
export const FAQ_LIST: FAQItem[] = [
    {
        id: 'pbc-vs-plc',
        category: 'formation',
        question: 'What is the main difference between a PBC and a PLC in Zimbabwe?',
        answer: 'A Private Business Corporation (PBC) costs USD 100, requires at least 1 director, and is limited to one single line of business — making it ideal for small traders. A Private Limited Company (PLC) costs USD 150, allows 2 to 50 directors, supports unlimited business activities, and is required for major tenders, government vendor numbers, and corporate holding structures.'
    },
    {
        id: 'formation-time',
        category: 'formation',
        question: 'How long does company registration take with Arygyle?',
        answer: 'The entire company formation process takes exactly five (5) working days from the submission of your preferred company names and director identity documents to the Registrar of Companies in Harare.'
    },
    {
        id: 'tax-clearance-requirements',
        category: 'tax',
        question: 'What documents do I need to get a ZIMRA Tax Clearance Certificate?',
        answer: 'For individual applicants: a stamped individual bank statement, proof of residence, and National ID or Passport. For Private Business Corporations (PBCs): PBC Certificate, CR28, Directors\' IDs, and proof of residence. You must also have an active bank account.'
    },
    {
        id: 'zimra-2022-rule',
        category: 'vat',
        question: 'What changed with ZIMRA fiscalisation and tax clearances in 2022?',
        answer: 'Since 1 January 2022, ZIMRA does NOT issue tax clearance certificates (ITF263) to registered operators who are not interfaced with ZIMRA servers. In addition, all payments and returns (VAT, PAYE, Income Tax) must be completely up to date. Arygyle provides full interfacing support.'
    },
    {
        id: 'vat-threshold',
        category: 'vat',
        question: 'What is the compulsory VAT registration threshold in Zimbabwe?',
        answer: 'Compulsory VAT registration applies when annual taxable turnover reaches ZWL 7,800,000 or USD 60,000. For Category C operators, the threshold is ZWL 31,200,000 or USD 240,000. Registered operators are required to issue Fiscal Tax Invoices printed by an approved fiscal device.'
    },
    {
        id: 'capital-gains-tax',
        category: 'tax',
        question: 'How is Capital Gains Tax calculated on property sales?',
        answer: 'For properties acquired BEFORE 22 February 2019, a rate of 5% is levied on the Gross Capital Amount with no deductions. For assets acquired ON or AFTER 22 February 2019, a rate of 20% is levied on the net Capital Gain after allowable deductions.'
    },
    {
        id: 'retainer-benefits',
        category: 'general',
        question: 'Why should my business choose a monthly retainer package?',
        answer: 'Our monthly retainer packages (starting at USD 20/month) ensure you never miss a ZIMRA filing deadline, face late penalties, or lose your Tax Clearance. We handle tax ledgers, PAYE, VAT, annual returns, and financial statements while keeping your costs predictable.'
    }
];
