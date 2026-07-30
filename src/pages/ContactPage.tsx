import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, MessageCircle, Clock, Send, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CONTACT_INFO } from '../data/siteData';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    facilityType: 'Hospital / Clinic',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        facilityType: 'Hospital / Clinic',
        message: '',
      });
    }, 1200);
  };

  return (
    <motion.div
      id="contact-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-0"
    >
      <SEOHead
        title="Contact Us & Wholesale Inquiry"
        description="Contact RS JADON  for wholesale drug inquiries, cold-chain distribution partnerships, and hospital supply agreements. Phone: +91 88106 60831."
      />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-tr from-slate-950 via-harmony-dark to-slate-900 text-white">
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.1, 0.22, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute inset-0 bg-radial-gradient from-harmony-turquoise/25 via-transparent to-transparent pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-harmony-cream/15 backdrop-blur-xs text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-harmony-cream/10"
          >
            <Sparkles className="w-3.5 h-3.5 text-harmony-turquoise" />
            <span>Connect Worldwide</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-harmony-cream"
          >
            Contact RS JADON 
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed"
          >
            Reach our pharmaceutical sourcing desk for bulk price quotes, regulatory paperwork, or wholesale distribution setup.
          </motion.p>
        </div>
      </section>

      {/* Contact Content Grid */}
      <div className="bg-grid-pattern py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/20 shadow-sm space-y-6">
              <h2 className="text-2xl font-extrabold text-harmony-dark font-display">
                Direct Communication Channels
              </h2>
              <p className="text-xs text-harmony-dark/80 leading-relaxed">
                Our sales team and licensed pharmacists are available Monday through Friday for emergency hospital inquiries and bulk quotes.
              </p>

              <div className="space-y-4 pt-2">
                {/* Phone Card */}
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-harmony-bg hover:bg-harmony-cream/60 border border-harmony-teal/15 transition-all group"
                >
                  <div className="p-3 bg-harmony-teal text-white rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                      Direct Phone Support
                    </span>
                    <strong className="text-sm font-bold text-harmony-dark group-hover:text-harmony-teal transition-colors">
                      {CONTACT_INFO.phone}
                    </strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Mon-Fri, 8:00 AM – 6:00 PM IST
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-harmony-bg hover:bg-harmony-cream/60 border border-harmony-teal/15 transition-all group"
                >
                  <div className="p-3 bg-harmony-teal text-white rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                      Official Sales Desk
                    </span>
                    <strong className="text-sm font-bold text-harmony-dark group-hover:text-harmony-teal transition-colors">
                      {CONTACT_INFO.email}
                    </strong>
                    <span className="text-[11px] text-slate-500 block mt-0.5">
                      Average response time: &lt; 2 hours
                    </span>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent('Hello RS JADON , I would like to make an inquiry.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50 hover:bg-emerald-100/70 border border-emerald-200 transition-all group"
                >
                  <div className="p-3 bg-emerald-600 text-white rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider block">
                      Instant WhatsApp Inquiry
                    </span>
                    <strong className="text-sm font-bold text-emerald-950">
                      +{CONTACT_INFO.whatsapp}
                    </strong>
                    <span className="text-[11px] text-emerald-700 block mt-0.5">
                      Click for 1-tap live chat & instant pricing
                    </span>
                  </div>
                </a>

                {/* Office Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-harmony-bg border border-harmony-teal/15">
                  <div className="p-3 bg-harmony-teal text-white rounded-xl shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider block">
                      Headquarters & Facility Address
                    </span>
                    <strong className="text-xs font-bold text-harmony-dark leading-relaxed block mt-1">
                      Plot No. 389, Ground Floor,<br />
                      Vinay Nagar Sector 2A, Near Urwai Gate,<br />
                      Ahukhana Kalan, Lashkar, Gwalior,<br />
                      Madhya Pradesh 474012, India
                    </strong>
                  </div>
                </div>
              </div>

              {/* License Badge */}
              <div className="p-4 bg-harmony-cream border border-harmony-teal/20 rounded-2xl flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-harmony-teal" />
                  <span className="text-xs font-bold text-harmony-dark">Drug License No:</span>
                </div>
                <span className="text-xs font-mono font-black text-harmony-teal">
                  {CONTACT_INFO.licenseNo}
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-harmony-card p-6 sm:p-10 rounded-3xl border border-harmony-teal/20 shadow-xl space-y-6">
              <div className="space-y-2">
                <span className="px-3 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  Official Sourcing Request
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-harmony-dark font-display">
                  Submit a B2B Wholesale Inquiry
                </h2>
                <p className="text-xs sm:text-sm text-slate-600">
                  Fill out the form below to receive a formal wholesale quote, catalog price list, or distribution terms for RS JADON .
                </p>
              </div>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="text-xl font-bold font-display text-emerald-950">
                      Inquiry Submitted Successfully
                    </h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting RS JADON . Our sales and clinical dispatch team has received your message and will get back to you within 2 to 4 business hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-bold shadow-sm hover:bg-emerald-700 transition-colors"
                    >
                      Send Another Inquiry
                    </button>
                  </motion.div>
                ) : (
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-harmony-dark">Full Name *</label>
                        <input
                          required
                          type="text"
                          placeholder="e.g. Dr. Rajesh Sharma"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs text-harmony-dark font-medium focus:outline-none focus:border-harmony-teal transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-harmony-dark">Email Address *</label>
                        <input
                          required
                          type="email"
                          placeholder="e.g. procurement@hospital.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs text-harmony-dark font-medium focus:outline-none focus:border-harmony-teal transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-harmony-dark">Phone / Mobile *</label>
                        <input
                          required
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs text-harmony-dark font-medium focus:outline-none focus:border-harmony-teal transition-colors"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-xs font-bold text-harmony-dark">Facility Type</label>
                        <select
                          value={formData.facilityType}
                          onChange={(e) => setFormData({ ...formData, facilityType: e.target.value })}
                          className="w-full px-4 py-3 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs text-harmony-dark font-bold focus:outline-none focus:border-harmony-teal transition-colors cursor-pointer"
                        >
                          <option value="Hospital / Clinic">Hospital / Clinic</option>
                          <option value="Retail Pharmacy Franchise">Retail Pharmacy Franchise</option>
                          <option value="Pharmaceutical Wholesaler">Pharmaceutical Wholesaler</option>
                          <option value="Government Agency">Government Agency</option>
                          <option value="Other">Other Facility</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-harmony-dark">Inquiry / Requirements *</label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please specify product compositions, required unit quantities, or supply chain questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-harmony-bg rounded-xl border border-harmony-teal/20 text-xs text-harmony-dark font-medium focus:outline-none focus:border-harmony-teal transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-harmony-teal hover:bg-harmony-mint text-white font-bold rounded-2xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg transition-all cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Sending Request...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Submit Official Inquiry</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
