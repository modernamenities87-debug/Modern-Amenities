
import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { Category, Product } from '../types';
import { Filter, ChevronRight } from 'lucide-react';

export const ProductPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [priceRange, setPriceRange] = useState<number>(100000);

  const categories = ['All', ...Object.values(Category)];

  // Basic filtering for selected category and price
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      const matchesPrice = product.price <= priceRange;
      return matchesCategory && matchesPrice;
    });
  }, [selectedCategory, priceRange]);

  // Grouping products by category for the "All" view
  const groupedProducts = useMemo(() => {
    if (selectedCategory !== 'All') return null;

    // Use explicit Record type to ensure values are recognized as Product[]
    const groups: Record<string, Product[]> = {};
    Object.values(Category).forEach(cat => {
      const productsInCat = PRODUCTS.filter(p => p.category === cat && p.price <= priceRange);
      if (productsInCat.length > 0) {
        groups[cat] = productsInCat;
      }
    });
    return groups;
  }, [selectedCategory, priceRange]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Sidebar Filters */}
        <aside className="w-full md:w-64 flex-shrink-0">
           <div className="sticky top-24 space-y-8">
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
                             <span className={`text-sm transition-colors ${selectedCategory === cat ? 'text-primary font-bold' : 'text-slate-600 group-hover:text-slate-900'}`}>
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

              {/* Quick Contact Box */}
              <div className="bg-primary/5 p-6 rounded-xl border border-primary/10">
                 <h4 className="font-bold text-primary text-sm mb-2">Need a Custom Quote?</h4>
                 <p className="text-xs text-slate-600 mb-4">Contact our experts for bulk orders and institutional pricing.</p>
                 <button className="w-full bg-primary text-white text-xs font-bold py-2 rounded uppercase hover:bg-red-700 transition-colors">
                    Get in Touch
                 </button>
              </div>
           </div>
        </aside>

        {/* Product Display Area */}
        <div className="flex-grow">
           <div className="flex justify-between items-center mb-10 border-b border-slate-100 pb-4">
              <h1 className="text-3xl font-serif font-bold text-slate-900">
                {selectedCategory === 'All' ? 'Product Catalog' : selectedCategory}
              </h1>
              <span className="text-sm text-slate-500 font-medium">
                 {filteredProducts.length} items found
              </span>
           </div>

           {selectedCategory === 'All' && groupedProducts ? (
             <div className="space-y-16">
                {/* FIX: Explicitly type products in Object.entries mapping to avoid 'unknown' type errors */}
                {Object.entries(groupedProducts).map(([categoryName, products]: [string, Product[]]) => (
                  <section key={categoryName} className="animate-fade-in">
                    <div className="flex items-center gap-4 mb-6">
                      <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                         <ChevronRight className="text-primary" size={20} />
                         {categoryName}
                      </h2>
                      <div className="h-px flex-grow bg-slate-100"></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                        {products.length} Items
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                       {products.map(product => (
                          <ProductCard key={product.id} product={product} />
                       ))}
                    </div>
                  </section>
                ))}
             </div>
           ) : filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                   <ProductCard key={product.id} product={product} />
                ))}
             </div>
           ) : (
             <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-xl p-16 text-center">
                <div className="w-16 h-16 bg-slate-200 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                   <Filter size={32} />
                </div>
                <p className="text-slate-500 text-lg font-medium">No products found matching your filters.</p>
                <button 
                  onClick={() => {setSelectedCategory('All'); setPriceRange(100000);}}
                  className="mt-6 bg-primary text-white px-6 py-2 rounded-full font-bold hover:bg-red-700 transition-all"
                >
                  Reset All Filters
                </button>
             </div>
           )}
        </div>

      </div>
    </div>
  );
};
