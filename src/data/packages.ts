export const PREMIUM_PACKAGES = [
    { name: 'Silver', title: 'Corporate Tax Compliance Plus', price: 150, from: false, period: 'month', audience: 'For established SMEs, contractors and growing businesses.', features: ['VAT, PAYE and corporate income tax', 'Withholding tax', 'Tax reconciliations and TARMS support', 'Quarterly compliance reviews', 'Tax-clearance monitoring'] },
    { name: 'Gold', title: 'Corporate Tax Advisory & Planning', price: 250, from: true, period: 'month', audience: 'For profitable companies seeking ongoing tax planning and transaction advice.', features: ['Corporate tax planning and VAT structuring', 'Contract reviews and withholding tax advice', 'Quarterly tax strategy meetings', 'Tax opinions within agreed limits', 'Annual tax-position reviews'] },
    { name: 'Platinum', title: 'Corporate Tax Risk & Governance', price: 500, from: true, period: 'month', audience: 'For large corporates, mining operators and infrastructure developers.', features: ['Tax risk registers and VAT assurance reviews', 'Audit-readiness assessments and tax control testing', 'Governance frameworks', 'Monthly exposure reporting', 'Quarterly board or audit-committee briefings'] },
    { name: 'Diamond', title: 'Executive Tax Partner', price: 1000, from: true, period: 'month', audience: 'For enterprises, corporate groups and investors needing a dedicated external tax adviser.', features: ['Executive tax strategy and transaction reviews', 'Board-level tax reporting', 'Cross-border tax coordination', 'ZIMRA engagement strategy and tax controversy oversight', 'Priority advisory access'] },
    { name: 'Sovereign', title: 'International Investment & Transaction Tax', price: 2000, from: true, period: 'project', audience: 'For foreign investors, acquisition teams and major project sponsors.', features: ['Investment-entry tax assessments', 'Cross-border transaction structuring', 'Tax due diligence', 'Repatriation considerations and treaty analysis', 'Tax implementation roadmaps'] },
    { name: 'Signature', title: 'Group Head of Tax as a Service', price: 2500, from: true, period: 'month', audience: 'For diversified groups needing outsourced tax leadership.', features: ['Group-wide tax oversight and department coordination', 'Consolidated risk dashboards', 'Governance policies and executive reporting', 'Strategic tax planning', 'Coordination of specialist advisers'] }
];
export const STARTER_PACKAGES = [
    { name: 'Basic Plus', price: 235, period: 'once', features: ['Company formation: PLC or PBC', 'ZIMRA registration and tax clearance support'] },
    { name: 'Standard Complete Plus', price: 320, period: 'once', features: ['Company formation: PLC or PBC', 'ZIMRA registration and tax clearance support', 'NSSA, ZIMDEF and Standard levy registration'] },
    { name: 'Basic Monthly Plus', price: 50, period: 'month', features: ['ZIMRA returns and tax clearance support', 'Tax ledger management and reconciliation', 'Company registrar annual return filing', 'Unaudited annual financial statement drafting'] },
    { name: 'Standard Monthly Plus', price: 100, period: 'month', features: ['Everything in Basic Monthly Plus', 'NSSA, ZIMDEF and Standard levy return submission'] }
];
export const SPECIALIST_FEES = [
    ['Corporate Tax Diagnostic & Exposure Review', 'From US$500', 'Identify potential tax risks, reporting weaknesses and corrective actions.'],
    ['Strategic VAT Review: Mining or Construction', 'From US$1,000', 'Review VAT treatment, input claims, invoicing and project tax risks.'],
    ['Corporate Group Tax Structuring', 'From US$1,500', 'Assess group arrangements, related-party transactions and restructuring.'],
    ['ZIMRA Audit Defence & Technical Response', 'From US$500', 'Prepare evidence-based responses and support businesses during tax audits.'],
    ['Transaction Tax Due Diligence', 'From US$2,500', 'Assess tax exposures before acquisitions, investments or disposals.'],
    ['Transfer Pricing Documentation Support', 'From US$3,000', 'Support related-party transaction analysis and documentation.'],
    ['Tax Governance Framework Development', 'From US$1,000', 'Establish controls, accountability and tax risk reporting.'],
    ['Infrastructure Project Tax Structuring', 'From US$2,500', 'Review construction contracts, project spending and VAT treatment.'],
    ['Tax Objections & Controversy Advisory', 'Quoted per case', 'Review disputed assessments and support appropriate objections.']
];
export const inquiryOptions = [...PREMIUM_PACKAGES.map(p => p.name + ' Package'), ...STARTER_PACKAGES.map(p => p.name), ...SPECIALIST_FEES.map(p => p[0])];
