import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Truck, Award, Pill, Building2, ExternalLink, ChevronRight, CheckCircle2, MessageCircle } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { BentoSpecialties } from '../components/BentoSpecialties';
import { FAQSection } from '../components/FAQSection';
import { CTABanner } from '../components/CTABanner';
import { PRODUCTS } from '../data/products';
import { CONTACT_INFO } from '../data/siteData';

export function HomePage() {
  const featuredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => p.isFeatured).slice(0, 3);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 80, damping: 15 } },
  };

  return (
    <motion.div
      id="home-page-container"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="space-y-0"
    >
      <SEOHead title="Wholesale Pharmaceutical Distributor" />

      {/* Hero Section */}
      <Hero />

      {/* Features / Stats Bar */}
      <FeaturesSection />

      {/* Main Content Pattern Container */}
      <div className="bg-grid-pattern py-16 md:py-24 space-y-16 md:space-y-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Core Service Advantages */}
        <BentoSpecialties />

        {/* Master Bento Section */}
        <section id="master-bento-section" className="space-y-12">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-harmony-cream border border-harmony-teal/25 text-harmony-teal rounded-full text-xs font-bold tracking-wider uppercase shadow-3xs">
              <Pill className="w-3.5 h-3.5 text-harmony-teal animate-pulse" />
              <span>Pharmaceutical Supply Hub</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
              A Resilient, High-Performance Infrastructure
            </h2>
            <p className="text-harmony-dark/85 text-sm sm:text-base font-normal max-w-2xl mx-auto">
              Explore our WHO-GDP compliant distribution networks, audited clinical depots, and ethical operations structured within a unified, multi-dimensional grid.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 auto-rows-auto"
          >
            {/* Bento Card 1: About RS JADON  */}
            <motion.div
              id="bento-card-about"
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: '0 25px 45px -15px rgba(2, 195, 154, 0.15), 0 10px 20px -10px rgba(2, 195, 154, 0.05)' }}
              className="lg:col-span-2 lg:row-span-2 md:col-span-2 col-span-1 bg-harmony-card p-6 sm:p-8 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden relative"
            >
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                    Institutional Distributor
                  </span>
                  <div className="p-2.5 bg-harmony-bg text-harmony-teal rounded-xl border border-harmony-teal/10">
                    <Building2 className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-3">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                    About RS JADON 
                  </h3>
                  <p className="text-harmony-dark/85 text-sm sm:text-base leading-relaxed font-normal">
                    RS JADON  operates as an established, regulated pharmaceutical wholesale partner supplying hospital-grade formulations, critical care, plasma, and specialty therapeutics across India.
                  </p>
                </div>

                <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-harmony-teal/15 shadow-inner">
                  <img
                    src="https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&w=800&q=80"
                    alt="RS JADON  modern sterile laboratory equipment"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs text-white font-medium">
                      Audited distribution facilities maintaining WHO-GDP standards.
                    </span>
                  </div>
                </div>

                <div className="space-y-2 text-xs text-harmony-dark/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Direct partner with Senores Pharmaceuticals & Concord Biotech</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fully licensed under CDSCO Wholesale License No: Wholesale-819-A</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-harmony-teal/10 flex items-center justify-between">
                <span className="text-xs font-bold text-harmony-teal">Learn More About Us</span>
                <Link
                  to="/about"
                  className="p-2 bg-harmony-teal hover:bg-harmony-mint text-white rounded-xl transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Bento Card 2: Cold Chain */}
            <motion.div
              id="bento-card-coldchain"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-harmony-card p-6 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-harmony-bg text-harmony-teal rounded-xl border border-harmony-teal/10">
                    <Truck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200 uppercase">
                    2°C - 8°C Active
                  </span>
                </div>
                <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                  Cold-Chain Precision
                </h4>
                <p className="text-xs text-harmony-dark/80 leading-relaxed">
                  Calibrated thermal packaging and 24/7 telemetry monitoring for sensitive biopharmaceuticals.
                </p>
              </div>
              <Link to="/about" className="text-xs font-bold text-harmony-teal flex items-center gap-1 pt-4">
                <span>Cold Storage Specs</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Bento Card 3: Quality Compliance */}
            <motion.div
              id="bento-card-compliance"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="bg-harmony-card p-6 rounded-3xl border border-harmony-teal/15 shadow-sm hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 bg-harmony-bg text-harmony-teal rounded-xl border border-harmony-teal/10">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-harmony-teal bg-harmony-cream px-2.5 py-1 rounded-full border border-harmony-teal/20 uppercase">
                    100% Verified
                  </span>
                </div>
                <h4 className="text-lg font-bold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                  Regulatory Integrity
                </h4>
                <p className="text-xs text-harmony-dark/80 leading-relaxed">
                  Full batch Certificate of Analysis (CoA) and GST tax invoices supplied with every delivery.
                </p>
              </div>
              <Link to="/about" className="text-xs font-bold text-harmony-teal flex items-center gap-1 pt-4">
                <span>View Certifications</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </motion.div>

            {/* Bento Card 4: Product Catalog */}
            <motion.div
              id="bento-card-catalog"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              className="lg:col-span-2 bg-gradient-to-r from-harmony-dark to-slate-900 text-white p-6 sm:p-8 rounded-3xl border border-harmony-teal/30 shadow-md flex flex-col sm:flex-row items-center justify-between gap-6 group"
            >
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-bold tracking-widest text-harmony-turquoise uppercase bg-white/10 px-3 py-1 rounded-full border border-white/10">
                  Full Product Directory
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-display text-white">
                  Explore 190+ Pharmaceutical Formulations
                </h4>
                <p className="text-xs text-slate-300 max-w-md">
                  Browse antibiotics, critical care plasma, gastroenterology, neurology, and topical treatments with transparent wholesale pricing.
                </p>
              </div>
              <Link
                to="/products"
                className="px-6 py-3 bg-harmony-turquoise hover:bg-harmony-mint text-harmony-dark font-bold rounded-xl text-xs sm:text-sm whitespace-nowrap shadow-md transition-all flex items-center gap-2 shrink-0"
              >
                <span>Browse Products</span>
                <ExternalLink className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>
        </section>

        {/* Featured Products Grid */}
        <section id="featured-products-section" className="space-y-8 pt-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-harmony-cream border border-harmony-teal/20 text-harmony-teal rounded-full text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-harmony-teal" />
                <span>Featured Therapeutics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark tracking-tight font-display leading-tight">
                Featured Critical Care Therapeutics
              </h2>
              <p className="text-harmony-dark/80 text-sm sm:text-base font-normal">
                Direct wholesale pricing on high-volume ICU, plasma, and specialty formulations supplied by RS JADON  and Senores Pharmaceuticals Limited.
              </p>
            </div>
            <Link
              id="view-all-products-top-btn"
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-harmony-teal hover:bg-harmony-mint text-white rounded-xl text-xs sm:text-sm font-bold shadow-xs hover:shadow-md transition-all group shrink-0"
            >
              <span>View All {PRODUCTS.length}+ Products</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => {
              const whatsappMsg = encodeURIComponent(
                `Hello RS JADON , I would like to inquire about wholesale order for ${product.brandName} (${product.description}). Please confirm current stock and dispatch timeline.`
              );

              return (
                <div
                  key={product.id}
                  className="bg-harmony-card rounded-2xl border border-harmony-teal/20 p-6 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/15 rounded-full text-[10px] font-bold uppercase tracking-wider">
                        {product.category}
                      </span>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                        {product.form}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-extrabold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                        {product.brandName}
                      </h3>
                      <p className="text-xs text-harmony-dark/70 font-medium mt-1">
                        {product.description}
                      </p>
                    </div>

                    <div className="space-y-1.5 text-xs text-harmony-dark/80 bg-harmony-bg/60 p-3 rounded-xl border border-harmony-teal/10">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Strength:</span>
                        <span className="font-bold">{product.strength}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Packaging:</span>
                        <span className="font-bold">{product.packaging}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Manufacturer:</span>
                        <span className="font-bold text-harmony-teal truncate max-w-[160px]">
                          {product.mfg}
                        </span>
                      </div>
                    </div>

                    <div className="pt-2 flex items-baseline justify-between">
                      <div>
                        <span className="text-[10px] text-slate-500 block">Wholesale Rate</span>
                        <span className="text-xl font-black text-harmony-dark font-display">
                          ₹{product.wholesalePrice}
                        </span>
                        <span className="text-[10px] text-slate-500 ml-1">
                          (+{product.gstPct}% GST)
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] text-slate-400 block line-through">
                          MRP ₹{product.mrp}
                        </span>
                        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Save {Math.round(((product.mrp - product.wholesalePrice) / product.mrp) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-harmony-teal/10 flex items-center gap-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="flex-1 py-2.5 px-3 bg-harmony-bg hover:bg-harmony-cream text-harmony-dark font-bold rounded-xl text-xs text-center border border-harmony-teal/20 transition-colors"
                    >
                      Details
                    </Link>
                    <a
                      href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FAQ Accordion */}
        <FAQSection />
      </div>

      {/* CTA Banner */}
      <CTABanner />
    </motion.div>
  );
}
