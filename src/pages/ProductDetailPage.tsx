import { useState, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MessageCircle,
  Share2,
  Check,
  ArrowLeft,
  ShieldCheck,
  Truck,
  Clock,
  Package,
  Building2,
  ChevronRight,
  AlertTriangle,
  Stethoscope,
  Activity,
  CheckCircle2,
  FileText,
  Pill,
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PRODUCTS } from '../data/products';
import { CONTACT_INFO } from '../data/siteData';
import { getTreatmentInfo } from '../utils/treatmentHelper';

export function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  const treatmentInfo = useMemo(() => {
    if (!product) return null;
    return getTreatmentInfo(product);
  }, [product]);

  const [quantity, setQuantity] = useState(product ? Math.max(product.minOrderQuantity || 1, 10) : 10);
  const [copied, setCopied] = useState(false);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    const sameCat = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id);
    if (sameCat.length >= 3) return sameCat.slice(0, 3);
    const remaining = PRODUCTS.filter((p) => p.id !== product.id && !sameCat.some((sc) => sc.id === p.id));
    return [...sameCat, ...remaining].slice(0, 3);
  }, [product]);

  const estimatedTotal = useMemo(() => {
    if (!product) return 0;
    const subtotal = product.wholesalePrice * quantity;
    const gstAmount = subtotal * (product.gstPct / 100);
    return Math.round(subtotal + gstAmount);
  }, [product, quantity]);

  const handleWhatsAppInquiry = () => {
    if (!product) return;
    const text = `Hello RS JADON , I would like to place an order inquiry for:
*Product:* ${product.brandName}
*Formulation:* ${product.description}
*Strength:* ${product.strength}
*Packaging:* ${product.packaging}
*Quantity:* ${quantity} units
*Wholesale Price:* ₹${product.wholesalePrice} / unit (+${product.gstPct}% GST)
*Estimated Total:* ₹${estimatedTotal.toLocaleString('en-IN')}

Please confirm stock availability and dispatch timeline.`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleCopyShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-grid-pattern pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center space-y-6">
        <SEOHead title="Product Not Found" />
        <div className="p-4 bg-amber-50 border border-amber-200 text-amber-800 rounded-2xl max-w-md mx-auto inline-flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 shrink-0" />
          <span className="text-xs font-bold">Product ID "{id}" was not found in catalog.</span>
        </div>
        <h1 className="text-3xl font-extrabold text-harmony-dark font-display">Product Specification Unavailable</h1>
        <p className="text-sm text-slate-600">
          The requested formulation may have been re-indexed or removed from public view. Please return to the directory.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-6 py-3 bg-harmony-teal text-white rounded-xl text-xs font-bold shadow-md"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Product Catalog</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      id="product-detail-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-grid-pattern pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8"
    >
      <SEOHead
        title={`${product.brandName} (${product.strength}) - Wholesale Rate`}
        description={`Order ${product.brandName} (${product.description}) at wholesale price ₹${product.wholesalePrice} from RS JADON . CDSCO verified batch distribution.`}
      />

      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500 overflow-x-auto pb-2">
        <Link to="/" className="hover:text-harmony-teal transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <Link to="/products" className="hover:text-harmony-teal transition-colors">
          Products
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-harmony-teal font-bold truncate max-w-[200px]">{product.category}</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-harmony-dark font-bold truncate">{product.brandName}</span>
      </nav>

      {/* Main Detail Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Specs & Overview */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-6 sm:p-8 shadow-md space-y-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.category}
                </span>
                <span className="px-3 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-full text-xs font-bold uppercase tracking-wider">
                  {product.form}
                </span>
                {product.isFeatured && (
                  <span className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-bold uppercase tracking-wider">
                    Featured Formulation
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold text-harmony-dark font-display">
                {product.brandName}
              </h1>
              <p className="text-base text-harmony-dark/80 font-medium">
                {product.description}
              </p>
            </div>

            {/* Product Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-harmony-teal/15">
              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Formulation Strength</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.strength}</strong>
              </div>

              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Packaging Pack</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.packaging}</strong>
              </div>

              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Manufacturer</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.mfg}</strong>
              </div>

              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Pharma Division</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.division || 'General Care'}</strong>
              </div>

              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Applicable GST Rate</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.gstPct}% GST</strong>
              </div>

              <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/10">
                <span className="text-xs text-slate-500 block">Min Order Quantity</span>
                <strong className="text-harmony-dark text-sm font-bold">{product.minOrderQuantity || 1} Unit(s)</strong>
              </div>
            </div>

            {/* Quality Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-harmony-teal/15">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-harmony-teal shrink-0" />
                <span className="text-xs font-bold text-harmony-dark">100% Factory Sealed</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-harmony-teal shrink-0" />
                <span className="text-xs font-bold text-harmony-dark">Cold Chain Compliant</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-harmony-teal shrink-0" />
                <span className="text-xs font-bold text-harmony-dark">24-48h Express Dispatch</span>
              </div>
            </div>
          </div>

          {/* Dedicated Treatment Info Card */}
          {treatmentInfo && (
            <div
              id="treatment-info-card"
              className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-6 sm:p-8 shadow-md space-y-6"
            >
              {/* Card Title Header */}
              <div className="flex items-center justify-between pb-4 border-b border-harmony-teal/15">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-harmony-cream rounded-2xl text-harmony-teal border border-harmony-teal/20 shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-xl font-extrabold text-harmony-dark font-display">
                      Treatment Info & Medical Indications
                    </h2>
                    <span className="text-xs text-slate-500 font-medium">
                      Clinical therapeutic profile & target conditions
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex px-3 py-1 bg-harmony-cream/80 text-harmony-teal border border-harmony-teal/20 rounded-full text-[11px] font-bold uppercase tracking-wider">
                  Verified Indication
                </span>
              </div>

              {/* Primary Health Condition Callout Box */}
              <div className="bg-harmony-bg p-5 rounded-2xl border border-harmony-teal/20 space-y-2">
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4 text-harmony-teal shrink-0" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                    Target Health Condition / Indication
                  </span>
                </div>
                <p className="text-base sm:text-lg font-extrabold text-harmony-dark font-display">
                  {treatmentInfo.targetConditions}
                </p>
              </div>

              {/* Detailed Clinical Usage & Mechanism */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Clinical Use & Mechanism
                </span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  {treatmentInfo.clinicalSummary}
                </p>
              </div>

              {/* Key Specific Indications Tags */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Specific Conditions & Symptoms Treated
                </span>
                <div className="flex flex-wrap gap-2">
                  {treatmentInfo.keyIndications.map((indication, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-harmony-bg text-harmony-dark border border-harmony-teal/20 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-harmony-teal shrink-0" />
                      <span>{indication}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Administration & Classification Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-harmony-teal/15">
                <div className="p-3 bg-harmony-bg rounded-xl border border-harmony-teal/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">Therapeutic Class</span>
                  <strong className="text-xs font-bold text-harmony-dark block truncate" title={treatmentInfo.therapeuticClass}>
                    {treatmentInfo.therapeuticClass}
                  </strong>
                </div>

                <div className="p-3 bg-harmony-bg rounded-xl border border-harmony-teal/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">Route of Admin</span>
                  <strong className="text-xs font-bold text-harmony-dark block truncate" title={treatmentInfo.administrationRoute}>
                    {treatmentInfo.administrationRoute}
                  </strong>
                </div>

                <div className="p-3 bg-harmony-bg rounded-xl border border-harmony-teal/10 space-y-1">
                  <span className="text-[11px] font-semibold text-slate-500 block">Prescription Status</span>
                  <strong className="text-xs font-bold text-harmony-teal block truncate" title={treatmentInfo.prescriptionStatus}>
                    {treatmentInfo.prescriptionStatus}
                  </strong>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Order Inquiry Calculator */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-harmony-card rounded-3xl border border-harmony-teal/20 p-6 sm:p-8 shadow-xl space-y-6 sticky top-28">
            <div className="flex items-center justify-between pb-4 border-b border-harmony-teal/15">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Wholesale Pricing Breakdown
              </span>
              <button
                id="share-product-btn"
                onClick={handleCopyShareLink}
                className="p-2 text-slate-500 hover:text-harmony-teal rounded-xl hover:bg-harmony-bg transition-colors flex items-center gap-1.5 text-xs font-bold"
                title="Share link"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Share'}</span>
              </button>
            </div>

            {/* Pricing Details */}
            <div className="space-y-3">
              <div className="flex items-baseline justify-between">
                <span className="text-xs text-slate-500">Wholesale Unit Price</span>
                <span className="text-3xl font-black text-harmony-dark font-display">
                  ₹{product.wholesalePrice}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                <span>Maximum Retail Price (MRP)</span>
                <span className="line-through">₹{product.mrp}</span>
              </div>

              <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs text-emerald-800 font-bold">
                <span>Bulk Savings Advantage</span>
                <span>Save {Math.round(((product.mrp - product.wholesalePrice) / product.mrp) * 100)}%</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3 pt-4 border-t border-harmony-teal/15">
              <label className="text-xs font-bold text-harmony-dark flex justify-between">
                <span>Order Quantity (Units):</span>
                <span className="text-harmony-teal">MOQ: {product.minOrderQuantity || 1} unit(s)</span>
              </label>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(product.minOrderQuantity || 1, quantity - 10))}
                  className="w-10 h-10 rounded-xl bg-harmony-bg font-bold border border-harmony-teal/20 hover:bg-harmony-cream transition-colors text-harmony-dark"
                >
                  -10
                </button>
                <input
                  type="number"
                  min={product.minOrderQuantity || 1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(product.minOrderQuantity || 1, parseInt(e.target.value) || 1))}
                  className="flex-1 py-2 text-center font-bold text-lg bg-harmony-bg rounded-xl border border-harmony-teal/20 text-harmony-dark focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 10)}
                  className="w-10 h-10 rounded-xl bg-harmony-bg font-bold border border-harmony-teal/20 hover:bg-harmony-cream transition-colors text-harmony-dark"
                >
                  +10
                </button>
              </div>
            </div>

            {/* Calculation Estimate */}
            <div className="bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/15 space-y-2 text-xs">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal ({quantity} units)</span>
                <span>₹{(product.wholesalePrice * quantity).toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>GST ({product.gstPct}%)</span>
                <span>₹{Math.round(product.wholesalePrice * quantity * (product.gstPct / 100)).toLocaleString('en-IN')}</span>
              </div>
              <div className="pt-2 border-t border-harmony-teal/15 flex justify-between items-baseline">
                <span className="font-bold text-harmony-dark">Estimated Total</span>
                <span className="text-xl font-black text-harmony-teal font-display">
                  ₹{estimatedTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* CTA Inquiry */}
            <button
              id="whatsapp-direct-inquiry-btn"
              onClick={handleWhatsAppInquiry}
              className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/20 transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Inquire via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="space-y-6 pt-12 border-t border-harmony-teal/20">
          <h2 className="text-2xl font-extrabold text-harmony-dark font-display">
            Related Pharmaceutical Formulations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((p) => (
              <div
                key={p.id}
                className="bg-harmony-card rounded-2xl border border-harmony-teal/20 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="px-2.5 py-0.5 bg-harmony-cream text-harmony-teal rounded text-[10px] font-bold">
                    {p.category}
                  </span>
                  <h3 className="text-lg font-bold font-display text-harmony-dark">{p.brandName}</h3>
                  <p className="text-xs text-slate-600 line-clamp-2">{p.description}</p>
                </div>
                <div className="pt-4 mt-4 border-t border-harmony-teal/10 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-400 block">Rate</span>
                    <strong className="text-base font-bold text-harmony-dark font-display">₹{p.wholesalePrice}</strong>
                  </div>
                  <Link
                    to={`/product/${p.id}`}
                    className="px-4 py-2 bg-harmony-teal text-white text-xs font-bold rounded-xl"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </motion.div>
  );
}
