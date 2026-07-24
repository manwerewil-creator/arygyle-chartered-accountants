import React, { useState } from 'react';
import { FIRM_DETAILS, SERVICES_LIST } from '../data/firmData';
import { Phone, Mail, MapPin, MessageSquare, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    serviceInterested: 'Company Formation',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppClick = () => {
    const text = `Hi Arygyle Team, I am reaching out regarding ${formState.serviceInterested}. Name: ${formState.name || 'Client'}, Phone: ${formState.phone || 'N/A'}`;
    window.open(`https://wa.me/${FIRM_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="aurora-bg text-white py-16 border-b-4 border-gold-accent relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1760246964044-1384f71665b9?auto=format&fit=crop&w=1920&q=80"
          alt="Modern corporate office at dusk"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/55 via-navy-dark/25 to-navy-dark/70" />
        <div className="absolute inset-0 opacity-[0.1] text-gold-accent dot-grid pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-4 text-center max-w-2xl mx-auto relative z-10 animate-slideUp">
          <div className="inline-flex items-center gap-2 bg-white/10 text-gold-accent px-3 py-1 rounded-full text-xs font-semibold">
            <MapPin className="w-4 h-4 text-gold-accent" />
            <span>Harare CBD, Zimbabwe</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Contact Arygyle Chartered Accountants
          </h1>
          <p className="hero-serif-tagline text-lg text-gold-accent">
            "Let Us Help You Grow Your Business."
          </p>
          <p className="text-gray-300 text-xs sm:text-sm">
            Reach out directly to our Harare accountants via phone, WhatsApp, email, or schedule an office visit.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Details & Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6 text-xs text-gray-700">
            
            <div className="bg-navy-deep text-white rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl border-t-8 border-gold-accent">
              <div className="border-b border-white/10 pb-4">
                <h3 className="text-xl font-bold">Harare Executive Office</h3>
                <p className="text-xs text-gray-300 mt-1">{FIRM_DETAILS.legalName}</p>
              </div>

              <div className="space-y-4 text-xs text-gray-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Physical Location:</span>
                    <span>{FIRM_DETAILS.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Telephone Contacts:</span>
                    <p><a href={`tel:${FIRM_DETAILS.primaryPhone}`} className="hover:text-gold-accent">Phone/WhatsApp: {FIRM_DETAILS.primaryPhone}</a></p>
                    <p><a href={`tel:${FIRM_DETAILS.secondaryPhone}`} className="hover:text-gold-accent">Phone: {FIRM_DETAILS.secondaryPhone}</a></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageSquare className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">WhatsApp Direct:</span>
                    <a
                      href={`https://wa.me/${FIRM_DETAILS.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-300 hover:underline"
                    >
                      +{FIRM_DETAILS.whatsappNumber}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Canonical Email:</span>
                    <a href={`mailto:${FIRM_DETAILS.canonicalEmail}`} className="hover:text-gold-accent">
                      {FIRM_DETAILS.canonicalEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 border-t border-white/10 pt-3">
                  <Clock className="w-5 h-5 text-gold-accent flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Office Hours (CAT):</span>
                    <p>Monday – Friday: 8:00 AM – 5:00 PM</p>
                    <p>Saturday: 8:00 AM – 1:00 PM</p>
                    <p>Sunday & Public Holidays: Closed</p>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg text-xs transition-colors flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Start Direct WhatsApp Conversation</span>
              </button>
            </div>

            {/* Verification Note for Email Addresses */}
            <div className="bg-slate-50 p-4 rounded-xl border border-gray-200 text-gray-600 text-[11px] space-y-1">
              <span className="font-bold text-navy-deep block">Alternate Contact Emails on Record:</span>
              <p>farai@arygyle.co.zw • arygylecazim@gmail.com</p>
              <p className="text-gray-500 italic">Please direct all primary formal inquiries to farai@arygylecazim.co.zw.</p>
            </div>

          </div>

          {/* Interactive Contact Form Column */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm space-y-6">
            
            <div className="border-b border-gray-100 pb-4">
              <h3 className="text-xl font-bold text-navy-deep">
                Send a Direct Message to Our Accountants
              </h3>
              <p className="text-xs text-gray-600 mt-1">
                Fill out your details below and an accountant will review your tax or incorporation needs.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-green-50 rounded-xl border border-green-200 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-green-600 mx-auto" />
                <h4 className="text-lg font-bold text-navy-deep">Message Successfully Sent!</h4>
                <p className="text-xs text-gray-700 max-w-sm mx-auto">
                  Thank you, <strong>{formState.name}</strong>. Our Harare office will get back to you shortly regarding <strong>{formState.serviceInterested}</strong>.
                </p>
                <button
                  onClick={handleWhatsAppClick}
                  className="bg-green-600 hover:bg-green-700 text-white font-bold px-4 py-2 rounded text-xs transition-colors inline-flex items-center gap-2 mt-2"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Connect Immediately on WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-navy-deep mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Farai Nyathi"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-navy-deep bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-navy-deep mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+263 77..."
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-navy-deep bg-slate-50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-navy-deep mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="yourname@business.co.zw"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-navy-deep bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-navy-deep mb-1">Service Interested In *</label>
                    <select
                      value={formState.serviceInterested}
                      onChange={(e) => setFormState({ ...formState, serviceInterested: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-navy-deep bg-slate-50 font-medium"
                    >
                      <option value="Company Formation (PBC/PLC)">Company Formation (PBC or PLC)</option>
                      <option value="ZIMRA Tax Clearance (ITF263)">ZIMRA Tax Clearance (ITF263)</option>
                      <option value="VAT & Fiscalisation Interfacing">VAT & Fiscalisation Interfacing</option>
                      <option value="Monthly Retainer Packages">Monthly Compliance Retainer ($20 - $130/mo)</option>
                      <option value="Start Up Bundles">Start Up Package ($160 - $700)</option>
                      <option value="Capital Gains Tax">Capital Gains Tax Certificate</option>
                      <option value="Auditing Services">Statutory or Operational Audit</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-navy-deep mb-1">Message / Business Details</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your business status or questions for our accountants..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-navy-deep bg-slate-50 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-navy-deep hover:bg-navy-dark text-white font-bold py-3.5 rounded-lg text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Send Contact Form</span>
                  <Send className="w-4 h-4 text-gold-accent" />
                </button>

              </form>
            )}

            {/* Embedded Map Section */}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <span className="font-bold text-navy-deep text-xs block">Harare Location Map Preview:</span>
              <div className="w-full h-48 bg-slate-200 rounded-xl overflow-hidden relative flex items-center justify-center text-center p-4 border border-gray-300">
                <div className="space-y-1">
                  <MapPin className="w-8 h-8 text-navy-deep mx-auto" />
                  <p className="font-bold text-navy-deep text-xs">210 Throughmton House, Cnr J. Nyerere & S. Machel, Harare</p>
                  <p className="text-[11px] text-gray-600">Arygyle Chartered Accountants Executive Office</p>
                  <a
                    href="https://maps.google.com/?q=Throughmton+House+Julius+Nyerere+Samora+Machel+Harare"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-[10px] font-bold text-navy-deep hover:underline pt-1"
                  >
                    Open in Google Maps &rarr;
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
