import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category } from '../types';
import { Filter } from 'lucide-react';

export const ProductPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(50000);

  const categories = ['All', ...Object.values(Category)];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, priceRange]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-8">
           <div>
              <h3 className="font-serif font-bold text-xl mb-4 flex items-center gap-2">
                 <Filter size={20} /> Filters
              </h3>
              <div className="h-px w-full bg-slate-200 mb-6"></div>
              
              <div className="mb-8">
                 <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Category</h4>
                 <div className="space-y-2">
                    {categories.map(cat => (
                       <label key={cat} className="flex items-center gap-2 cursor-pointer group">
                          <input 
                            type="radio" 
                            name="category" 
                            checked={selectedCategory === cat}
                            onChange={() => setSelectedCategory(cat)}
                            className="text-primary focus:ring-primary h-4 w-4"
                          />
                          <span className={`text-sm ${selectedCategory === cat ? 'text-primary font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
                            {cat}
                          </span>
                       </label>
                    ))}
                 </div>
              </div>

              <div>
                 <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">
                    Max Price: ₹{priceRange.toLocaleString()}
                 </h4>
                 <input 
                    type="range" 
                    min="5000" 
                    max="100000" 
                    step="5000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-primary"
                 />
                 <div className="flex justify-between text-xs text-slate-500 mt-2">
                    <span>₹5k</span>
                    <span>₹100k+</span>
                 </div>
              </div>
           </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-grow">
           <div className="flex justify-between items-center mb-6">
              <h1 className="text-2xl font-serif font-bold text-slate-900">
                {selectedCategory === 'All' ? 'All Products' : selectedCategory}
              </h1>
              <span className="text-sm text-slate-500">
                 Showing {filteredProducts.length} results
              </span>
           </div>

           {filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                ))}
             </div>
           ) : (
             <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-12 text-center">
                <p className="text-slate-500 text-lg">No products found matching your criteria.</p>
                <button 
                  onClick={() => {setSelectedCategory('All'); setPriceRange(100000);}}
                  className="mt-4 text-primary font-bold hover:underline"
                >
                  Clear Filters
                </button>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};