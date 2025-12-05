import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white border border-slate-100 rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      <div className="relative overflow-hidden aspect-[4/5] bg-slate-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
        />
        <button
          onClick={() => addToCart(product)}
          className="absolute bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          aria-label="Add to cart"
        >
          <Plus size={20} />
        </button>
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">
          {product.category}
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-slate-500 text-sm line-clamp-2 mb-4 flex-grow">
          {product.description}
        </p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-lg font-bold text-slate-900">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <button className="text-sm font-medium text-slate-600 hover:text-primary underline">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};