
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import { useCart } from '../context/CartContext';
import { ShoppingCart, Menu, X, Search, FileText, ChevronRight } from 'lucide-react';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full bg-white/98 backdrop-blur-lg shadow-sm z-50 border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:rotate-6 transition-transform shadow-lg shadow-primary/20">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-lg md:text-xl font-serif font-bold text-slate-900 tracking-tight leading-none">
              Modern Amenities
            </span>
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-[0.3em] mt-1">Premium Furniture</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="text-xs font-bold text-slate-500 hover:text-primary transition-all uppercase tracking-widest relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-3 sm:gap-6">
          <button className="hidden sm:block text-slate-400 hover:text-primary transition-colors">
            <Search size={20} />
          </button>
          
          <div className="relative cursor-pointer group" onClick={() => navigate('/products')}>
             <ShoppingCart size={22} className="text-slate-400 group-hover:text-primary transition-colors" />
             {cartCount > 0 && (
               <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-md">
                 {cartCount}
               </span>
             )}
          </div>

          <Link 
            to="/contact" 
            className="hidden md:flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-bold hover:bg-primary transition-all shadow-xl hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText size={14} /> Request Quote
          </Link>

          <button
            className="lg:hidden text-slate-600 p-2 hover:bg-slate-50 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={`lg:hidden fixed inset-0 top-20 bg-white/95 backdrop-blur-xl z-40 transition-all duration-500 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'}`}>
          <div className="flex flex-col p-8 gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-800 font-bold text-2xl flex items-center justify-between group"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label} 
                <ChevronRight size={24} className="text-primary group-hover:translate-x-2 transition-transform" />
              </Link>
            ))}
            <div className="mt-8 space-y-4">
              <Link 
                to="/contact" 
                className="block w-full bg-primary text-white text-center py-4 rounded-2xl font-bold shadow-lg shadow-primary/20"
                onClick={() => setIsMenuOpen(false)}
              >
                Request Quote
              </Link>
              <div className="p-4 bg-slate-50 rounded-2xl">
                 <p className="text-[10px] text-slate-400 uppercase font-black tracking-widest mb-2">Support Hotline</p>
                 <p className="font-bold text-slate-900">+91 97214 96611</p>
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};
