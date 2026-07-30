import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Package } from 'lucide-react';

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 },
    },
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white py-24 md:py-36"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center bg-no-repeat transform scale-102"
        style={{ filter: 'brightness(0.35)' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-harmony-dark/40 via-transparent to-harmony-dark/85 pointer-events-none" />

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 flex flex-col items-center"
        >
          {/* Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-harmony-dark/60 border border-harmony-turquoise/30 text-harmony-cream rounded-full text-xs font-bold tracking-widest uppercase shadow-xs backdrop-blur-md"
          >
            <span>CDSCO Registered & Licensed Wholesaler</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.15] font-display max-w-4xl"
          >
            Trusted Pharmaceutical <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-harmony-turquoise via-harmony-mint to-harmony-cream">
              Distribution Partner
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed text-center"
          >
            Delivering critical medicines and quality medical therapeutics with certified GDP standards and absolute temperature-controlled reliability across India.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto"
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                id="hero-contact-us-btn"
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 bg-harmony-teal hover:bg-harmony-mint text-white rounded-xl text-sm font-bold shadow-lg shadow-harmony-teal/20 hover:shadow-xl hover:shadow-harmony-teal/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-harmony-teal/30"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
              <Link
                id="hero-view-products-btn"
                to="/products"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 hover:border-white/30 rounded-xl text-sm font-bold backdrop-blur-md shadow-xs hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Package className="w-4 h-4 text-harmony-turquoise" />
                <span>View All Products</span>
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
