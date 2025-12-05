import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X, Search } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl">
            M
          </div>
          <span className="text-2xl font-serif font-bold text-slate-900 tracking-tight">
            Modern Amenities
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-sm font-medium text-slate-600 hover:text-primary transition-colors uppercase tracking-wide"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="text-slate-600 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          <div className="relative cursor-pointer" onClick={() => navigate('/products')}>
             <ShoppingCart size={20} className="text-slate-600 hover:text-primary transition-colors" />
             {cartCount > 0 && (
               <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center">
                 {cartCount}
               </span>
             )}
          </div>
          <button
            className="md:hidden text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 absolute w-full shadow-lg">
          <div className="flex flex-col p-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-800 font-medium py-2 border-b border-slate-50 last:border-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};