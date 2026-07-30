import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { HeartPulse, Snowflake, ShieldCheck, Zap, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

interface Pillar {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  icon: typeof HeartPulse;
  bullets: { lead: string; text: string }[];
  ctaText: string;
  ctaLink: string;
}

const PILLARS: Pillar[] = [
  {
    id: 'pillar-direct-sourcing',
    badge: 'Price & Authenticity Advantage',
    title: 'Direct Manufacturer Procurement',
    subtitle: 'Eliminating intermediaries to deliver genuine therapeutics at true wholesale rates.',
    image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Sterile pharmaceutical manufacturing facility',
    icon: HeartPulse,
    bullets: [
      { lead: 'Zero Intermediary Markup', text: 'Save 15% to 80% off MRP via direct-from-factory bulk allocation agreements.' },
      { lead: '100% Genuine Guarantee', text: 'Authentic factory-sealed batches with full DSCA lineage and anti-counterfeit protection.' },
      { lead: 'Premier Brand Access', text: 'Direct partner for Senores Pharmaceuticals and Concord Biotech (INCA) critical care lines.' },
    ],
    ctaText: 'Browse Direct Catalog',
    ctaLink: '/products',
  },
  {
    id: 'pillar-cold-chain',
    badge: 'Cold Chain Precision',
    title: 'WHO-GDP Cold Chain Distribution',
    subtitle: 'End-to-end active thermal monitoring for temperature-sensitive biologics and vaccines.',
    image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pharmaceutical cold chain logistics distribution',
    icon: Snowflake,
    bullets: [
      { lead: '2°C to 8°C Strict Control', text: 'Calibrated thermal packaging protecting critical plasma, immunoglobulins, and ICU infusions.' },
      { lead: 'Real-Time Telemetry Logs', text: 'Digital temperature tag included in every shipment for total hospital audit compliance.' },
      { lead: 'Express PAN-India Transit', text: 'Priority freight dispatch preventing critical inventory outages at clinical centers.' },
    ],
    ctaText: 'Inquire Cold Chain Freight',
    ctaLink: '/contact',
  },
  {
    id: 'pillar-regulatory',
    badge: 'Regulatory Excellence',
    title: 'Full CDSCO & WHO-GMP Compliance',
    subtitle: 'Uncompromising legal integrity, drug licensing, and batch paperwork.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Pharmaceutical quality testing laboratory',
    icon: ShieldCheck,
    bullets: [
      { lead: 'Government Wholesale License', text: 'Fully licensed drug distribution facility (License No: Wholesale-819-A).' },
      { lead: 'Batch Certificate of Analysis (CoA)', text: 'Full CoA documentation and compliant GST tax invoicing provided with every invoice.' },
      { lead: 'Audit-Ready Quality Standards', text: 'Rigorous GDP processes backing hospital procurement committees and clinical trials.' },
    ],
    ctaText: 'Request License Details',
    ctaLink: '/about',
  },
  {
    id: 'pillar-b2b-fulfillment',
    badge: 'Rapid B2B Support',
    title: 'Institutional Fulfillment & Service',
    subtitle: 'Streamlined procurement for hospitals, government agencies, and retail pharmacies.',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern pharmaceutical warehouse order fulfillment',
    icon: Zap,
    bullets: [
      { lead: 'Instant WhatsApp Inquiries', text: 'Direct 1-click quotes and stock availability confirmation within minutes.' },
      { lead: 'Flexible Order Quantities', text: 'Low Minimum Order Quantities (MOQ = 1 unit) up to full container-load hospital orders.' },
      { lead: 'Emergency Outage Reserve', text: 'Dedicated emergency stock buffer for critical ICU antifungal & antibiotic demands.' },
    ],
    ctaText: 'Get Instant Quote',
    ctaLink: '/contact',
  },
];

export function BentoSpecialties() {
  return (
    <section id="key-service-benefits-section" className="space-y-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/25 text-harmony-teal rounded-full text-xs font-bold tracking-wider uppercase shadow-3xs">
          <Sparkles className="w-3.5 h-3.5 text-harmony-teal" />
          <span>Core Service Advantages</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
          Why Hospitals & Pharmacies Choose RS JADON 
        </h2>
        <p className="text-harmony-dark/85 text-sm sm:text-base font-normal max-w-2xl mx-auto">
          We combine direct manufacturer pricing, active cold chain protection, and rigorous drug compliance into a reliable, friction-free wholesale partner.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PILLARS.map((pillar) => {
          const IconComponent = pillar.icon;
          return (
            <motion.div
              key={pillar.id}
              id={pillar.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-6 sm:p-8 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-harmony-dark via-harmony-teal to-harmony-turquoise transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                      {pillar.badge}
                    </span>
                    <div className="p-2.5 bg-harmony-bg text-harmony-teal rounded-xl border border-harmony-teal/10 group-hover:bg-harmony-teal group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-extrabold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-harmony-dark/80 font-normal">
                    {pillar.subtitle}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                  <div className="sm:col-span-5 relative rounded-2xl overflow-hidden aspect-4/3 border border-harmony-teal/15 shadow-2xs group-hover:border-harmony-teal/30 transition-all">
                    <img
                      src={pillar.image}
                      alt={pillar.imageAlt}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>

                  <div className="sm:col-span-7 space-y-3.5">
                    {pillar.bullets.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs text-harmony-dark">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-bold text-harmony-dark block font-display">
                            {b.lead}
                          </strong>
                          <span className="text-harmony-dark/80 leading-relaxed">
                            {b.text}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-harmony-teal/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  Immediate Wholesale Dispatch
                </span>
                <Link
                  to={pillar.ctaLink}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-harmony-teal hover:bg-harmony-mint text-white rounded-xl text-xs font-bold shadow-2xs hover:shadow-md transition-all group/btn"
                >
                  <span>{pillar.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
