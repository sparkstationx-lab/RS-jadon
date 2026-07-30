import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SplashLoader } from './components/SplashLoader';
import { FloatingControls } from './components/FloatingControls';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  const [loadingComplete, setLoadingComplete] = useState(false);

  return (
    <Router>
      {!loadingComplete && <SplashLoader onComplete={() => setLoadingComplete(true)} />}

      <div className="min-h-screen flex flex-col bg-harmony-bg text-harmony-dark font-sans selection:bg-harmony-turquoise/30 selection:text-harmony-dark">
        <ScrollToTop />
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
        <FloatingControls />
      </div>
    </Router>
  );
}
