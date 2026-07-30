import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ChevronRight, Pill } from 'lucide-react';
import { NavLink } from '../types';

const NAV_LINKS: NavLink[] = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      id="main-navbar"
      className={`fixed top-3 sm:top-5 inset-x-3 sm:inset-x-6 max-w-7xl mx-auto z-50 rounded-2xl md:rounded-3xl transition-all duration-300 backdrop-blur-md border overflow-hidden ${
        scrolled
          ? 'bg-harmony-dark/95 shadow-2xl shadow-slate-950/40 border-harmony-teal/30 py-2.5 sm:py-3'
          : 'bg-harmony-dark/90 shadow-xl shadow-slate-950/25 border-harmony-teal/20 py-3 sm:py-3.5'
      }`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Brand Link */}
          <Link
            id="logo-brand-link"
            to="/"
            className="flex items-center gap-3 group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
              className="w-10 h-10 rounded-xl bg-harmony-cream flex items-center justify-center text-harmony-teal shadow-md overflow-hidden border border-harmony-teal/20"
            >
              <Pill className="w-6 h-6 text-harmony-teal" />
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-harmony-cream transition-colors duration-300">
                RS JADON 
              </span>
              <span className="text-[10px] text-harmony-cream/90 font-bold tracking-wider uppercase -mt-0.5">
                Healthcare Distribution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1.5 bg-white/5 p-1.5 rounded-full border border-white/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                to={link.path}
                className={`relative px-5 py-2 text-sm font-semibold tracking-wide rounded-full transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-white font-bold shadow-xs'
                    : 'text-slate-200 hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="relative z-10">{link.name}</span>
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-harmony-turquoise/20 rounded-full border border-harmony-turquoise/30 shadow-inner"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Call Now CTA Button */}
          <div className="hidden md:flex items-center">
            <motion.a
              id="navbar-call-now-button"
              href="tel:+918810660831"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="px-5 py-2.5 bg-gradient-to-r from-harmony-teal to-harmony-turquoise hover:from-harmony-mint hover:to-harmony-turquoise text-harmony-dark rounded-full text-xs font-bold shadow-md transition-all duration-300 flex items-center gap-2 cursor-pointer"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Now</span>
            </motion.a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-200 hover:text-white hover:bg-white/10 transition-all duration-200 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-harmony-dark border-t border-harmony-teal/25 overflow-hidden shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex items-center justify-between px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 ${
                    isActive(link.path)
                      ? 'bg-harmony-turquoise/20 text-white border border-harmony-turquoise/30 shadow-xs'
                      : 'text-slate-200 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isActive(link.path) ? 'translate-x-1' : 'opacity-0'
                    }`}
                  />
                </Link>
              ))}
              <div className="pt-4 px-4 border-t border-harmony-teal/20">
                <a
                  href="tel:+918810660831"
                  className="w-full py-4 bg-gradient-to-r from-harmony-teal to-harmony-turquoise text-harmony-dark rounded-2xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Now: +91 88106 60831</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-white/15 pointer-events-none">
        <div
          className="h-full bg-harmony-turquoise transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </nav>
  );
}
