import { motion } from 'motion/react';
import { Building2, ShieldCheck, Award, HeartPulse } from 'lucide-react';
import { PARTNERS, STATS } from '../data/siteData';

const PARTNER_ICONS = [Building2, HeartPulse, Award, ShieldCheck];

export function FeaturesSection() {
  return (
    <section id="trust-bar-section" className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-harmony-dark text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-harmony-teal/30 backdrop-blur-xl"
      >
        {/* Stat Counters Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {STATS.map((stat, idx) => (
            <div key={idx} className={`space-y-1 text-center ${idx !== 0 ? 'pt-4 lg:pt-0' : ''}`}>
              <div className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-harmony-turquoise via-harmony-mint to-harmony-cream font-display">
                {stat.value}
              </div>
              <div className="text-xs font-bold text-white tracking-wide">{stat.label}</div>
              <div className="text-[10px] text-harmony-cream/70 font-medium uppercase tracking-wider">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Partners & Regulatory Badges */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold tracking-widest text-harmony-turquoise uppercase bg-white/5 px-3 py-1 rounded-full border border-white/10">
              Trusted Industry Partners & Regulatory Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {PARTNERS.map((partner, idx) => {
              const IconComp = PARTNER_ICONS[idx % PARTNER_ICONS.length];
              return (
                <div
                  key={idx}
                  className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-harmony-turquoise/40 rounded-2xl p-4 transition-all duration-300 flex items-start gap-3.5 group"
                >
                  <div className="p-2.5 bg-harmony-turquoise/15 rounded-xl text-harmony-turquoise group-hover:scale-110 transition-transform shrink-0">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-xs font-bold text-white font-display truncate group-hover:text-harmony-mint transition-colors">
                        {partner.name}
                      </h4>
                    </div>
                    <p className="text-[11px] text-slate-300 truncate">{partner.subtitle}</p>
                    <span className="inline-block text-[9px] font-bold text-harmony-cream bg-harmony-dark/80 px-2 py-0.5 rounded text-emerald-400 border border-emerald-500/20 mt-1">
                      {partner.tag}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
