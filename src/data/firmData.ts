import {
  RetainerPackage,
  StartupPackage,
  FormationOption,
  FAQItem,
  ServiceItem
} from '../types';

export const FIRM_DETAILS = {
  legalName: 'Arygyle Chartered Accountants Zimbabwe (Private) Limited',
  brandName: 'Arygyle Chartered Accountants',
  tagline: 'Let Us Help You Grow Your Business.',
  campaignLine: 'No business is too small. Consult Professional Accountants at an affordable price.',
  address: '3049 Kuwadzana 3, Harare, Zimbabwe',
  primaryPhone: '+263 777 592 952',
  whatsappNumber: '263777592952',
  secondaryPhone: '+263 717 061 148',
  canonicalEmail: 'farai@arygylecazim.co.zw',
  alternateEmails: ['farai@arygyle.co.zw', 'arygylecazim@gmail.com'],
  domain: 'www.arygyle.com',
  founded: 'February 2019',
  specialistLine: 'Taxation Specialists — ZIMRA Registered Tax Agents',
  credentialStrip: 'ZIMRA Registered Tax Agent • Tax & VAT Structuring Specialist • Professional Tax Opinions • Tax Compliance • Company Formation',
  managingPartner: {
    name: 'Farai Arygyle Nicholia Tofa',
    shortName: 'Farai Tofa',
    credentials: 'AGTA(Z), M.Acc, ACCA',
    role: 'Managing Partner & Principal Tax Consultant',
    institute: 'Institute of Chartered Tax Accountants of Zimbabwe (CTA)',
    designation: 'Associate — General Tax Accountant (AGTA(Z))',
    membershipNo: '96607026',
    certificateNo: '8458299',
    validUntil: '31 December 2026',
    experience: 'A ZIMRA-registered tax practitioner specialising in corporate tax advisory, VAT structuring and ZIMRA audit representation. Former Assistant Accountant at Exodus and Company (a Harare construction firm), with deep expertise in project costing, tax compliance and fiscalisation.',
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
    flagNote: 'Credentials verified against CTA Membership Certificate No. 8458299 (Membership No. 96607026), valid until 31 December 2026.'
  },
  actReference: 'Companies and Other Business Entities Act (Chapter 24:31)',
  formationTurnaround: '5 Working Days'
};

// Firm "About Us" — background, vision, mission, values and objectives (client-provided)
export const ABOUT_CONTENT = {
  background:
    'Arygyle Chartered Accountants Zimbabwe (Private) Limited set foot in February 2019 providing accounting, taxation, corporate secretarial and statutory services. One of the best ways of ensuring success and continuity in any business is to ensure that all statutory obligations are met in time. Our services are dedicated to assisting our Zimbabwean and diaspora clients, and we serve a broad client base ranging from start-up companies to listed and regulated public limited companies. As legal requirements on Zimbabwean registered companies grow more complex and stringent, we help businesses meet their statutory and regulatory obligations and satisfy increasing stakeholder demands for corporate compliance.',
  vision:
    'To serve the needs of the customer in relation to accounting, taxation, corporate secretarial and statutory services.',
  mission:
    'To provide reliable and efficient services of uncompromising world-class standards for enterprises, with integrity, professionalism, independence and excellence.',
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

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'company-formation',
    title: 'Company Formation & Registration',
    shortDesc: 'Fast 5-day incorporation for Private Business Corporations (PBC) and Private Limited Companies (PLC) in Zimbabwe under Chapter 24:31.',
    fullDesc: 'We handle your complete incorporation process with the Registrar of Companies in Harare. Fully compliant with the Companies and Other Business Entities Act (Chapter 24:31). We prepare signed memorandum and articles, CR6, CR5/CR28 documents and secure your certificate within 5 working days.',
    iconName: 'Building2',
    highlights: [
      'Turnaround in 5 working days',
      'Private Business Corporation (PBC) - USD 100',
      'Private Limited Company (PLC) - USD 150',
      'Name reservation & articles drafting',
      'Bank account opening support included'
    ],
    ctaText: 'Register Company'
  },
  {
    id: 'tax-clearance',
    title: 'ZIMRA Tax Clearance (ITF263)',
    shortDesc: 'Obtain and maintain valid ZIMRA Tax Clearance for individuals, new startups, PBCs, and PLCs with step-by-step document preparation.',
    fullDesc: 'All individuals, companies, partnerships and cooperatives in Zimbabwe require valid tax clearance for banking, tenders, and business operations. We guide you through online ZIMRA registration, stamped bank statement validation, and clearance issuance.',
    iconName: 'ShieldCheck',
    highlights: [
      'Individual & Business ITF263 processing',
      'Stamped bank statement & proof of residence guidance',
      'PBC & PLC document verification',
      'Fast turnaround to open active bank accounts'
    ],
    ctaText: 'Get Tax Clearance'
  },
  {
    id: 'tax-management',
    title: 'Tax Management & Compliance Services',
    shortDesc: 'End-to-end ZIMRA ledger management, return computations, Master Updates, and compliance maintenance.',
    fullDesc: 'Stay fully compliant with ZIMRA requirements. Important notice: From 1 January 2022, tax clearances are only issued to operators interfaced with ZIMRA servers with up-to-date returns. We manage your tax ledgers, computations, and renewals.',
    iconName: 'Calculator',
    highlights: [
      'ZIMRA Master Update & Account Reconciliation',
      'Tax Ledger Management & Return Computation',
      'Income Tax, PAYE & Withholding Tax filings',
      'ZIMRA Registration and Deregistration'
    ],
    ctaText: 'Manage Taxes'
  },
  {
    id: 'vat-fiscalisation',
    title: 'VAT & Fiscalisation Interfacing',
    shortDesc: 'Compulsory VAT registration, fiscal device interfacing, multi-currency system integration, and fiscal tax invoice compliance.',
    fullDesc: 'Under ZIMRA legislation, compulsory VAT registration applies to operators hitting thresholds of ZWL 7,800,000 / USD 60,000 (Category C: ZWL 31,200,000 / USD 240,000). Since 1 Jan 2022, all operators must issue fiscal tax invoices printed by interfaced fiscal devices.',
    iconName: 'Receipt',
    highlights: [
      'Compulsory VAT Registration & Deregistration',
      'Fiscal Electronic Register / Fiscal Device Interfacing',
      'Multi-currency invoice system setup',
      'ZIMRA server interface verification'
    ],
    ctaText: 'Setup Fiscalisation'
  },
  {
    id: 'capital-gains',
    title: 'Capital Gains Tax (CGT) Advisory',
    shortDesc: 'Expert CGT clearance certificates, legal drafting, and strategic property acquisition tax computation.',
    fullDesc: 'Navigating Capital Gains Tax rates in Zimbabwe requires precise acquisition date analysis: 5% on Gross Capital Amount for properties acquired BEFORE 22 Feb 2019 (no deductions), vs 20% on Capital Gain for assets acquired ON/AFTER 22 Feb 2019.',
    iconName: 'TrendingUp',
    highlights: [
      'Pre-2019 property rate (5% gross capital amount)',
      'Post-2019 asset rate (20% allowable capital gain)',
      'CGT Certificate process & legal document drafting',
      'Property transaction tax advisory'
    ],
    ctaText: 'Consult CGT Expert'
  },
  {
    id: 'auditing-services',
    title: 'Internal Audit & Assurance',
    shortDesc: 'Internal audit, operational controls, compliance reviews and due diligence. (We do not provide external financial statement audits.)',
    fullDesc: 'Independent internal audit and assurance for businesses, cooperatives and institutions in Zimbabwe — strengthening internal controls, risk management and statutory compliance. Our assurance work is internal-audit focused; we do not offer external financial statement audits.',
    iconName: 'FileSpreadsheet',
    highlights: [
      'Internal controls & operational audits',
      'Compliance & tax audits',
      'Due diligence & value-for-money reviews',
      'Risk management & information systems audits'
    ],
    ctaText: 'Request Internal Audit'
  }
];

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

export const RETAINER_PACKAGES: RetainerPackage[] = [
  {
    id: 'bronze',
    name: 'Bronze Package',
    priceUSD: 20,
    period: 'per month',
    tagline: 'Essential compliance maintenance for small traders and new startups.',
    features: [
      'Tax clearance renewal (ITF263)',
      'Tax returns computation and submission (Income Tax & PAYE only)',
      'ZIMRA tax ledger management & reconciliation',
      'Financial statements preparation for ZIMRA annual return',
      'Company registrar annual return filing'
    ]
  },
  {
    id: 'silver',
    name: 'Silver Package',
    priceUSD: 50,
    period: 'per month',
    popular: true,
    tagline: 'Comprehensive monthly tax, VAT & ledger accounting for active SMEs.',
    features: [
      'Everything included in Bronze Package',
      'VAT tax returns computation & submission',
      'Withholding Tax (WHT) returns computation & filing',
      'Monthly Accounts & Profit/Loss statements',
      'Continuous ZIMRA server interface monitoring'
    ]
  },
  {
    id: 'gold',
    name: 'Gold Package',
    priceUSD: 130,
    period: 'per month',
    tagline: 'Full financial controller service with management accounts & share maintenance.',
    features: [
      'Everything included in Silver Package',
      'Unaudited financial statement Management Accounts',
      'Share register & share certificate maintenance',
      'Minute book maintenance & secretarial compliance',
      'Dedicated senior chartered accountant consultation'
    ]
  }
];

export const STARTUP_PACKAGES: StartupPackage[] = [
  {
    id: 'basic',
    name: 'Basic Bundle',
    priceUSD: 160,
    tagline: 'Quick single-objective startup launch with bank account setup.',
    features: [
      'Company Formation (Private Business Corporation - PBC)',
      'Company Bank Account Opening assistance',
      'Initial ZIMRA Tax Clearance Certificate'
    ]
  },
  {
    id: 'basic-plus',
    name: 'Basic Plus Bundle',
    priceUSD: 200,
    tagline: 'Full PLC company formation with bank account and initial tax clearance.',
    features: [
      'Company Formation (Private Limited Company - PLC)',
      'Company Bank Account Opening assistance',
      'Initial ZIMRA Tax Clearance Certificate'
    ]
  },
  {
    id: 'standard',
    name: 'Standard Bundle',
    priceUSD: 260,
    popular: true,
    tagline: 'Complete professional corporate identity & registration kit.',
    features: [
      'Company formation (Choice of PLC or PBC)',
      'Company Bank Account Opening assistance',
      'Initial ZIMRA Tax Clearance Certificate',
      'Custom Professional Company Logo Design',
      'Corporate Company Profile document',
      'Official Company Letterhead design',
      'Quotation & Invoice Book custom templates'
    ]
  },
  {
    id: 'premium',
    name: 'Premium Bundle',
    priceUSD: 500,
    tagline: 'Complete identity, company registration, plus domain, email & web presence.',
    features: [
      'Everything included in Standard Bundle',
      'Professional Business Website development',
      'Custom Corporate Email addresses (e.g. info@yourcompany.co.zw)'
    ]
  },
  {
    id: 'premium-plus',
    name: 'Premium Plus Bundle',
    priceUSD: 700,
    tagline: 'Ultimate launch package: Web, emails, Vendor Number & NSSA compliance.',
    features: [
      'Everything included in Standard Bundle',
      'Professional Business Website & Corporate Emails',
      'Government Vendor Number registration (PRAZ/Tenders)',
      'NSSA Certificate & Social Security Registration'
    ]
  }
];

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
