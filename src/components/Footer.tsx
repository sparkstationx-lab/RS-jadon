import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, Pill } from 'lucide-react';
import { CONTACT_INFO } from '../data/siteData';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="main-footer"
      className="bg-gradient-to-b from-harmony-dark to-slate-950 text-harmony-cream/90 border-t border-harmony-teal/20 relative overflow-hidden"
    >
      {/* Top Banner Badges */}
      <div className="bg-slate-950/45 border-b border-harmony-teal/15 py-8 relative">
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-harmony-turquoise/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-2xl border border-harmony-teal/15 shadow-inner">
            <div className="p-2.5 bg-harmony-cream/10 text-harmony-turquoise rounded-xl shrink-0">
              <ShieldCheck className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-display">
                Licensed Wholesale Distributor
              </p>
              <p className="text-xs text-harmony-cream/70 mt-0.5">
                Compliant with CDSCO, WHO-GDP, and DSCSA requirements.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-slate-950/50 p-4 rounded-2xl border border-harmony-teal/15 shadow-inner">
            <div className="p-2.5 bg-harmony-cream/10 text-harmony-turquoise rounded-xl shrink-0">
              <Award className="w-6 h-6 shrink-0" />
            </div>
            <div>
              <p className="text-sm font-bold text-white font-display">
                CDSCO-Approved Therapeutics
              </p>
              <p className="text-xs text-harmony-cream/70 mt-0.5">
                Ensuring supply-chain transparency and authentic medicine distribution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-harmony-cream flex items-center justify-center text-harmony-teal shadow-md overflow-hidden border border-harmony-teal/20">
                <Pill className="w-6 h-6 text-harmony-teal" />
              </div>
              <span className="font-display font-black text-xl tracking-tight text-white group-hover:text-harmony-turquoise transition-colors duration-200">
                RS JADON 
              </span>
            </Link>
            <p className="text-sm text-harmony-cream/80 leading-relaxed font-normal">
              Delivering high-quality medicines and essential medical products with efficiency, absolute integrity, and pharmaceutical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-harmony-cream/75 hover:text-harmony-turquoise transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-harmony-turquoise/40" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-harmony-cream/75 hover:text-harmony-turquoise transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-harmony-turquoise/40" />
                  <span>Product Catalog</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-harmony-cream/75 hover:text-harmony-turquoise transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-harmony-turquoise/40" />
                  <span>About RS JADON </span>
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-harmony-cream/75 hover:text-harmony-turquoise transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-harmony-turquoise/40" />
                  <span>Contact & Inquiries</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Contact Details
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-harmony-turquoise shrink-0 mt-0.5" />
                <span className="text-harmony-cream/85 leading-relaxed">
                  Plot No. 389, Ground Floor,<br />
                  Vinay Nagar Sector 2A,<br />
                  Near Urwai Gate,<br />
                  Ahukhana Kalan, Lashkar,<br />
                  Gwalior, Madhya Pradesh 474012, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-harmony-turquoise shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-harmony-cream/85 hover:text-harmony-turquoise transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-harmony-turquoise shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-harmony-cream/85 hover:text-harmony-turquoise transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white font-display">
              Business Hours
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-harmony-turquoise shrink-0 mt-0.5" />
                <div>
                  <p className="text-white font-bold">Monday – Friday</p>
                  <p className="text-harmony-cream/75 text-xs mt-1">8:00 AM – 6:00 PM IST</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-600 shrink-0 mt-0.5" />
                <div>
                  <p className="text-slate-400 font-bold">Saturday – Sunday</p>
                  <p className="text-slate-500 text-xs mt-1">Closed (Emergency Only)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-harmony-teal/20 text-center text-xs text-harmony-cream/65 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} RS JADON . All rights reserved.</p>
          <p className="text-harmony-cream/65 bg-slate-950/40 px-3.5 py-1.5 rounded-full border border-harmony-teal/15">
            Pharmaceutical Distributor License No:{' '}
            <span className="font-mono text-harmony-cream font-bold">
              {CONTACT_INFO.licenseNo}
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
