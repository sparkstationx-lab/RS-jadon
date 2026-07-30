import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export function FloatingControls() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent(
    'Hello RS JADON , I would like to inquire about wholesale pharmaceutical orders and product catalog availability.'
  );

  return (
    <div id="floating-controls-container" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
      {/* Floating WhatsApp Button */}
      <motion.a
        id="floating-whatsapp-btn"
        href={`https://wa.me/${CONTACT_INFO.whatsapp}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-xl shadow-emerald-600/30 border border-emerald-400/30 transition-all duration-300 group cursor-pointer relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-slate-700">
          Chat on WhatsApp
        </span>
      </motion.a>

      {/* Back To Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            id="floating-back-to-top-btn"
            initial={{ opacity: 0, scale: 0.5, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 10 }}
            onClick={scrollToTop}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="w-11 h-11 rounded-full bg-harmony-dark text-harmony-cream hover:text-white flex items-center justify-center shadow-lg border border-harmony-teal/30 transition-all duration-300 group cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
