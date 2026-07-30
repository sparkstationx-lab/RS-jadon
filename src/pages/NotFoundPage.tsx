import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Home, ArrowLeft, Pill } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export function NotFoundPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[80vh] bg-grid-pattern flex items-center justify-center px-4 py-24 text-center"
    >
      <SEOHead title="Page Not Found" />

      <div className="max-w-md mx-auto space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-harmony-cream flex items-center justify-center text-harmony-teal mx-auto shadow-md border border-harmony-teal/20">
          <Pill className="w-8 h-8 text-harmony-teal" />
        </div>

        <div className="space-y-2">
          <span className="text-4xl font-extrabold text-harmony-teal font-display">404</span>
          <h1 className="text-2xl font-extrabold text-harmony-dark font-display">Page Not Found</h1>
          <p className="text-xs text-slate-600 leading-relaxed">
            The page you are searching for does not exist or has been relocated within the RS JADON  directory.
          </p>
        </div>

        <div className="flex justify-center gap-3 pt-4">
          <Link
            to="/"
            className="px-6 py-3 bg-harmony-teal text-white font-bold rounded-xl text-xs flex items-center gap-2 shadow-md hover:bg-harmony-mint transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            to="/products"
            className="px-6 py-3 bg-harmony-bg text-harmony-dark font-bold rounded-xl text-xs flex items-center gap-2 border border-harmony-teal/20 hover:bg-harmony-cream transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Product Catalog</span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
