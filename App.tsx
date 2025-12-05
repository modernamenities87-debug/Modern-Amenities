import React, { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { GemServicesPage } from './pages/GemServicesPage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIConsultant } from './components/AIConsultant';
import { CartProvider } from './context/CartContext';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <CartProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen">
          <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          <main className="flex-grow pt-16"> {/* pt-16 to offset fixed header */}
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductPage />} />
              <Route path="/gem-services" element={<GemServicesPage />} />
            </Routes>
          </main>
          <Footer />
          <AIConsultant />
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;