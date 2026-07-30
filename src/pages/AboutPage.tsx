import { motion } from 'motion/react';
import { Award, ShieldCheck, Truck, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { CTABanner } from '../components/CTABanner';
import { TIMELINE } from '../data/siteData';
import { CONTACT_INFO } from '../data/siteData';

export function AboutPage() {
  return (
    <motion.div
      id="about-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-0"
    >
      <SEOHead
        title="About RS JADON  - Licensed Pharmaceutical Wholesaler"
        description="Learn about RS JADON , a CDSCO-licensed pharmaceutical distributor supplying hospital-grade critical care, plasma therapeutics, and WHO-GDP compliant cold-chain distribution across India."
      />

      {/* Hero Header */}
      <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden bg-gradient-to-tr from-slate-950 via-harmony-dark to-slate-900 text-white">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute inset-0 bg-radial-gradient from-harmony-turquoise/30 via-transparent to-transparent pointer-events-none"
        />
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-xs text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider mb-6 border border-white/5"
          >
            <Sparkles className="w-3.5 h-3.5 text-harmony-turquoise" />
            <span>Discover Our Story</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 font-display text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-harmony-cream"
          >
            Empowering Healthcare Supply Chains Across India
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed"
          >
            RS JADON  serves as a primary pharmaceutical distribution channel, ensuring authentic, cold-chain compliant therapeutics reach hospitals, clinics, and pharmacies with zero delay.
          </motion.p>
        </div>
      </section>

      <div className="bg-grid-pattern py-16 md:py-24 space-y-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Company Overview & Mission */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/20 text-harmony-teal rounded-full text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5 text-harmony-teal" />
              <span>Institutional Excellence</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark font-display">
              Built on Integrity, Driven by Quality
            </h2>
            <p className="text-harmony-dark/85 text-sm sm:text-base leading-relaxed">
              Founded with a commitment to bridge manufacturing excellence with critical healthcare delivery, RS JADON  operates state-of-the-art WHO-GDP compliant warehousing facilities in Gwalior, Madhya Pradesh.
            </p>
            <p className="text-harmony-dark/80 text-sm leading-relaxed">
              We hold official distribution relationships with leading international biopharmaceutical brands, including Senores Pharmaceuticals Limited and Concord Biotech (INCA), ensuring seamless access to high-demand ICU therapeutics, antifungals, and plasma products.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs font-bold text-harmony-dark">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Government Authorized License: Wholesale-819-A</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-harmony-dark">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Continuous 2°C - 8°C Active Telemetry Cold Chain</span>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold text-harmony-dark">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>100% Genuine Batch Pedigree with Full CoA Documentation</span>
              </div>
            </div>
          </div>

          <div className="relative rounded-3xl overflow-hidden border border-harmony-teal/20 shadow-xl aspect-4/3">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
              alt="RS JADON  distribution warehouse"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-xs font-bold text-harmony-turquoise uppercase">Regulatory Facility</span>
              <p className="text-sm font-medium">WHO-GDP & CDSCO Certified Wholesale Operations Depot</p>
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-xs font-bold uppercase">
              Our Growth Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark font-display">
              Milestones & Expansion
            </h2>
            <p className="text-sm text-harmony-dark/80">
              A chronology of continuous commitment to pharmaceutical distribution excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE.map((item, idx) => (
              <div
                key={idx}
                className="bg-harmony-card p-6 rounded-3xl border border-harmony-teal/15 shadow-sm space-y-3 hover:border-harmony-teal/40 transition-all"
              >
                <span className="text-2xl font-black text-harmony-teal font-display block">
                  {item.year}
                </span>
                <h3 className="text-base font-bold text-harmony-dark font-display">{item.title}</h3>
                <p className="text-xs text-harmony-dark/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications Grid */}
        <section className="bg-harmony-dark text-white rounded-3xl p-8 sm:p-12 border border-harmony-teal/30 shadow-2xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 bg-white/10 text-harmony-cream rounded-full text-xs font-bold uppercase tracking-wider">
              Verification & Compliance
            </span>
            <h2 className="text-3xl font-extrabold font-display">
              Regulatory Badges & Licensing
            </h2>
            <p className="text-sm text-slate-300">
              RS JADON  maintains strict adherence to CDSCO standards, wholesale licensing laws, and DSCA guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <Award className="w-8 h-8 text-harmony-turquoise mx-auto" />
              <h3 className="text-base font-bold font-display">Wholesale License</h3>
              <p className="text-xs text-slate-300">License No: {CONTACT_INFO.licenseNo}</p>
              <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                CDSCO Authorized
              </span>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <Truck className="w-8 h-8 text-harmony-turquoise mx-auto" />
              <h3 className="text-base font-bold font-display">WHO-GDP Cold Storage</h3>
              <p className="text-xs text-slate-300">Active temperature tracking from 2°C to 8°C</p>
              <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                Verified Logistics
              </span>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-center space-y-3">
              <ShieldCheck className="w-8 h-8 text-harmony-turquoise mx-auto" />
              <h3 className="text-base font-bold font-display">Traceability & CoA</h3>
              <p className="text-xs text-slate-300">Batch Certificates of Analysis included with every tax invoice</p>
              <span className="inline-block text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2.5 py-1 rounded-full border border-emerald-500/30">
                100% Genuine
              </span>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Banner */}
      <CTABanner />
    </motion.div>
  );
}
