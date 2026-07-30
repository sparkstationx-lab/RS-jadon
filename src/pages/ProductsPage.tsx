import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, LayoutGrid, List, MessageCircle, Eye, X, ArrowUpDown, ChevronDown, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { PRODUCTS } from '../data/products';
import { Product } from '../types';
import { CONTACT_INFO } from '../data/siteData';

const FORMS = ['All Forms', 'Injection', 'Bottle', 'Tablet', 'Capsule', 'Cream', 'Infusion Pen'];

export function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedForm, setSelectedForm] = useState('All Forms');
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc' | 'mrp-desc'>('name');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [quickViewQty, setQuickViewQty] = useState(1);
  const [displayLimit, setDisplayLimit] = useState(12);

  // Derive categories from products list
  const categories = useMemo(() => {
    const set = new Set(PRODUCTS.map((p) => p.category));
    return ['All Categories', ...Array.from(set)];
  }, []);

  // Filter & Sort
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchSearch =
        p.brandName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.strength.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (p.mfg && p.mfg.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (p.division && p.division.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchCategory = selectedCategory === 'All Categories' || p.category === selectedCategory;
      const matchForm = selectedForm === 'All Forms' || p.form === selectedForm;

      return matchSearch && matchCategory && matchForm;
    }).sort((a, b) => {
      if (sortBy === 'name') return a.brandName.localeCompare(b.brandName);
      if (sortBy === 'price-asc') return a.wholesalePrice - b.wholesalePrice;
      if (sortBy === 'price-desc') return b.wholesalePrice - a.wholesalePrice;
      if (sortBy === 'mrp-desc') return b.mrp - a.mrp;
      return 0;
    });
  }, [searchTerm, selectedCategory, selectedForm, sortBy]);

  const visibleProducts = useMemo(() => {
    return filteredProducts.slice(0, displayLimit);
  }, [filteredProducts, displayLimit]);

  const handleWhatsAppInquiry = (product: Product, quantity = 1) => {
    const text = `Hello RS JADON , I would like to place an order inquiry for:
*Product:* ${product.brandName}
*Formulation:* ${product.description}
*Packaging:* ${product.packaging}
*Quantity:* ${quantity} units
*Wholesale Price:* ₹${product.wholesalePrice} / unit (+${product.gstPct}% GST)

Please confirm stock availability and dispatch timeline.`;

    window.open(`https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div
      id="products-page-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen bg-grid-pattern pt-24 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8"
    >
      <SEOHead
        title="Wholesale Product Catalog"
        description="Explore 190+ WHO-GMP certified pharmaceutical formulations, ICU plasma, specialty therapeutics, and antibiotics at direct wholesale pricing from RS JADON ."
      />

      {/* Header Banner */}
      <div className="bg-harmony-dark text-white rounded-3xl p-8 sm:p-12 border border-harmony-teal/30 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-3xl space-y-3">
          <span className="px-3.5 py-1.5 bg-harmony-cream text-harmony-teal border border-harmony-teal/20 rounded-full text-xs font-bold uppercase tracking-wider">
            CDSCO Licensed Wholesaler Catalog
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display leading-tight">
            Wholesale Pharmaceutical Directory
          </h1>
          <p className="text-slate-300 text-sm sm:text-base font-normal leading-relaxed">
            Factory-direct pricing on ICU, plasma formulations, critical care, and broad-spectrum antibiotics supplied by RS JADON  and Senores Pharmaceuticals Limited.
          </p>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="bg-harmony-card p-6 rounded-3xl border border-harmony-teal/20 shadow-md space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
          {/* Search Input */}
          <div className="md:col-span-5 relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              id="product-search-input"
              type="text"
              placeholder="Search by medicine, composition, brand, manufacturer..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-harmony-bg rounded-2xl border border-harmony-teal/20 text-sm font-medium text-harmony-dark focus:outline-none focus:border-harmony-teal transition-colors"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Dropdown */}
          <div className="md:col-span-3 relative">
            <select
              id="category-filter-select"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-3 bg-harmony-bg rounded-2xl border border-harmony-teal/20 text-xs font-bold text-harmony-dark appearance-none focus:outline-none focus:border-harmony-teal transition-colors cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* Form Dropdown */}
          <div className="md:col-span-2 relative">
            <select
              id="form-filter-select"
              value={selectedForm}
              onChange={(e) => setSelectedForm(e.target.value)}
              className="w-full px-4 py-3 bg-harmony-bg rounded-2xl border border-harmony-teal/20 text-xs font-bold text-harmony-dark appearance-none focus:outline-none focus:border-harmony-teal transition-colors cursor-pointer"
            >
              {FORMS.map((f) => (
                <option key={f} value={f}>
                  {f}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          {/* View Mode Toggle */}
          <div className="md:col-span-2 flex items-center justify-end gap-2">
            <div className="flex bg-harmony-bg p-1 rounded-2xl border border-harmony-teal/20">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'grid' ? 'bg-harmony-teal text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-xl transition-colors ${
                  viewMode === 'list' ? 'bg-harmony-teal text-white' : 'text-slate-500 hover:text-slate-900'
                }`}
                title="List View"
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-harmony-dark/80 pt-2 border-t border-harmony-teal/10 gap-2">
          <div>
            Showing <strong className="font-bold text-harmony-dark">{visibleProducts.length}</strong> of{' '}
            <strong className="font-bold text-harmony-dark">{filteredProducts.length}</strong> products
          </div>

          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 font-semibold">Sort:</span>
            <select
              id="sort-by-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-transparent text-harmony-dark font-bold focus:outline-none cursor-pointer"
            >
              <option value="name">Product Name (A-Z)</option>
              <option value="price-asc">Price (Low to High)</option>
              <option value="price-desc">Price (High to Low)</option>
              <option value="mrp-desc">MRP (High to Low)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Display */}
      {filteredProducts.length === 0 ? (
        <div className="bg-harmony-card rounded-3xl p-16 text-center border border-harmony-teal/20 space-y-4">
          <Filter className="w-12 h-12 text-slate-400 mx-auto" />
          <h3 className="text-xl font-bold font-display text-harmony-dark">No Products Found</h3>
          <p className="text-sm text-slate-500 max-w-md mx-auto">
            Try adjusting your search criteria, clearing category filters, or browsing our full critical care directory.
          </p>
          <button
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('All Categories');
              setSelectedForm('All Forms');
            }}
            className="px-6 py-2.5 bg-harmony-teal text-white rounded-xl text-xs font-bold shadow-sm"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-harmony-card rounded-2xl border border-harmony-teal/20 p-5 shadow-sm hover:shadow-xl hover:border-harmony-teal/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2.5 py-0.5 bg-harmony-cream text-harmony-teal border border-harmony-teal/15 rounded-full text-[10px] font-bold uppercase truncate">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 shrink-0">
                    {product.form}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-extrabold text-harmony-dark font-display group-hover:text-harmony-teal transition-colors">
                    {product.brandName}
                  </h3>
                  <p className="text-xs text-harmony-dark/70 font-medium line-clamp-2 mt-0.5">
                    {product.description}
                  </p>
                </div>

                <div className="space-y-1 text-[11px] text-harmony-dark/80 bg-harmony-bg/50 p-2.5 rounded-xl border border-harmony-teal/10">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Strength:</span>
                    <span className="font-bold">{product.strength}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Packaging:</span>
                    <span className="font-bold">{product.packaging}</span>
                  </div>
                </div>

                <div className="pt-2 flex items-baseline justify-between">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Wholesale Rate</span>
                    <span className="text-lg font-black text-harmony-dark font-display">
                      ₹{product.wholesalePrice}
                    </span>
                    <span className="text-[9px] text-slate-500 ml-1">
                      (+{product.gstPct}%)
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] text-slate-400 block line-through">
                      MRP ₹{product.mrp}
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-harmony-teal/10 flex items-center gap-2">
                <button
                  onClick={() => {
                    setQuickViewProduct(product);
                    setQuickViewQty(1);
                  }}
                  className="p-2.5 bg-harmony-bg hover:bg-harmony-cream text-harmony-dark rounded-xl border border-harmony-teal/20 transition-colors"
                  title="Quick View"
                >
                  <Eye className="w-4 h-4" />
                </button>
                <Link
                  to={`/product/${product.id}`}
                  className="flex-1 py-2 px-3 bg-harmony-bg hover:bg-harmony-cream text-harmony-dark font-bold rounded-xl text-xs text-center border border-harmony-teal/20 transition-colors"
                >
                  View
                </Link>
                <button
                  onClick={() => handleWhatsAppInquiry(product, 1)}
                  className="py-2 px-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1 shadow-sm transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Inquire</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-3">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-harmony-card rounded-2xl border border-harmony-teal/20 p-4 sm:p-5 shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="space-y-1 flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-harmony-dark font-display">
                    {product.brandName}
                  </h3>
                  <span className="px-2 py-0.5 bg-harmony-cream text-harmony-teal rounded text-[10px] font-bold">
                    {product.category}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[10px] font-bold">
                    {product.form}
                  </span>
                </div>
                <p className="text-xs text-slate-600">{product.description}</p>
                <div className="text-[11px] text-slate-500 flex gap-4">
                  <span>
                    Strength: <strong>{product.strength}</strong>
                  </span>
                  <span>
                    Pack: <strong>{product.packaging}</strong>
                  </span>
                  <span>
                    Mfg: <strong>{product.mfg}</strong>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-6 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0">
                <div className="text-right">
                  <span className="text-base font-black text-harmony-dark block font-display">
                    ₹{product.wholesalePrice}
                  </span>
                  <span className="text-[10px] text-slate-400 line-through">MRP ₹{product.mrp}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Link
                    to={`/product/${product.id}`}
                    className="px-4 py-2 bg-harmony-bg hover:bg-harmony-cream text-harmony-dark font-bold rounded-xl text-xs border border-harmony-teal/20"
                  >
                    Details
                  </Link>
                  <button
                    onClick={() => handleWhatsAppInquiry(product, 1)}
                    className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center gap-1.5 shadow-sm"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Inquire</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination / Load More */}
      {visibleProducts.length < filteredProducts.length && (
        <div className="text-center pt-8">
          <button
            id="load-more-products-btn"
            onClick={() => setDisplayLimit((prev) => prev + 12)}
            className="px-8 py-3.5 bg-harmony-teal hover:bg-harmony-mint text-white font-bold rounded-2xl text-xs sm:text-sm shadow-md transition-all"
          >
            Load More Products ({filteredProducts.length - visibleProducts.length} remaining)
          </button>
        </div>
      )}

      {/* Quick View Modal */}
      <AnimatePresence>
        {quickViewProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-harmony-card rounded-3xl border border-harmony-teal/30 p-6 sm:p-8 max-w-xl w-full shadow-2xl relative space-y-6"
            >
              <button
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-600 rounded-full hover:bg-harmony-bg"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 bg-harmony-cream text-harmony-teal text-xs font-bold rounded-full">
                    {quickViewProduct.category}
                  </span>
                  <span className="px-2.5 py-0.5 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">
                    {quickViewProduct.form}
                  </span>
                </div>
                <h2 className="text-2xl font-extrabold text-harmony-dark font-display">
                  {quickViewProduct.brandName}
                </h2>
                <p className="text-sm text-slate-600">{quickViewProduct.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs bg-harmony-bg p-4 rounded-2xl border border-harmony-teal/15">
                <div>
                  <span className="text-slate-500 block">Strength</span>
                  <strong className="text-harmony-dark text-sm">{quickViewProduct.strength}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Packaging</span>
                  <strong className="text-harmony-dark text-sm">{quickViewProduct.packaging}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Manufacturer</span>
                  <strong className="text-harmony-dark text-sm">{quickViewProduct.mfg}</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">GST Rate</span>
                  <strong className="text-harmony-dark text-sm">{quickViewProduct.gstPct}%</strong>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-harmony-cream/60 rounded-2xl border border-harmony-teal/20">
                <div>
                  <span className="text-xs text-slate-500 block">Wholesale Rate</span>
                  <span className="text-2xl font-black text-harmony-dark font-display">
                    ₹{quickViewProduct.wholesalePrice}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 line-through block">
                    MRP ₹{quickViewProduct.mrp}
                  </span>
                  <span className="text-xs font-bold text-emerald-600">
                    Save {Math.round(((quickViewProduct.mrp - quickViewProduct.wholesalePrice) / quickViewProduct.mrp) * 100)}%
                  </span>
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center justify-between gap-4 pt-2">
                <span className="text-xs font-bold text-harmony-dark">Order Quantity:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQuickViewQty(Math.max(1, quickViewQty - 1))}
                    className="w-8 h-8 rounded-lg bg-harmony-bg font-bold border border-harmony-teal/20"
                  >
                    -
                  </button>
                  <span className="w-12 text-center font-bold text-sm">{quickViewQty}</span>
                  <button
                    onClick={() => setQuickViewQty(quickViewQty + 1)}
                    className="w-8 h-8 rounded-lg bg-harmony-bg font-bold border border-harmony-teal/20"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Link
                  to={`/product/${quickViewProduct.id}`}
                  onClick={() => setQuickViewProduct(null)}
                  className="flex-1 py-3 bg-harmony-bg text-harmony-dark font-bold rounded-2xl text-xs text-center border border-harmony-teal/20"
                >
                  Full Specification
                </Link>
                <button
                  onClick={() => {
                    handleWhatsAppInquiry(quickViewProduct, quickViewQty);
                    setQuickViewProduct(null);
                  }}
                  className="flex-1 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send WhatsApp Inquiry</span>
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
