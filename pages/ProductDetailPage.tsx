
import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import { useCart } from '../context/CartContext';
import { ProductCard } from '../components/ProductCard';
import { ChevronLeft, ShoppingCart, ShieldCheck, Truck, RefreshCcw, Star } from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const product = useMemo(() => {
    return PRODUCTS.find((p) => p.id === id);
  }, [id]);

  const relatedProducts = useMemo(() => {
    if (!product) return [];
    return PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  }, [product]);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Product Not Found</h2>
        <p className="text-slate-600 mb-8">The product you are looking for might have been removed or renamed.</p>
        <Link to="/products" className="bg-primary text-white px-8 py-3 rounded-full font-bold">
          Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white animate-fade-in">
      {/* Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-100">
        <div className="container mx-auto px-4 md:px-8 py-4 flex items-center gap-2 text-sm text-slate-500 font-medium">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-slate-900">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8 py-12">
        <button 
          onClick={() => navigate(-1)} 
          className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors mb-8 font-medium"
        >
          <ChevronLeft size={20} /> Back to Catalog
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image Gallery (Simulated) */}
          <div className="space-y-4">
            <div className="aspect-square bg-slate-50 rounded-2xl overflow-hidden border border-slate-100">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
               {[1,2,3,4].map(i => (
                 <div key={i} className={`aspect-square rounded-lg border-2 overflow-hidden cursor-pointer ${i === 1 ? 'border-primary' : 'border-transparent hover:border-slate-200'}`}>
                    <img src={product.image} className="w-full h-full object-cover opacity-60 hover:opacity-100" />
                 </div>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full mb-4">
                {product.category}
              </span>
              <h1 className="text-4xl font-serif font-bold text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-amber-400">
                   {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <span className="text-sm text-slate-500 font-medium">(24 Customer Reviews)</span>
              </div>
              <div className="text-3xl font-bold text-slate-900 mb-6">
                ₹{product.price.toLocaleString('en-IN')}
                <span className="text-sm text-slate-400 font-normal ml-2">Inc. of all taxes</span>
              </div>
              <p className="text-slate-600 leading-relaxed mb-8">
                {product.description}
              </p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                   </li>
                 ))}
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-auto border-t border-slate-100 pt-8">
               <button 
                 onClick={() => addToCart(product)}
                 className="flex-grow bg-primary text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-red-700 transition-all shadow-lg shadow-primary/20"
               >
                 <ShoppingCart size={20} /> Add to Cart
               </button>
               <button className="flex-grow bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all">
                 Request a Quote
               </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-slate-100">
               <div className="text-center">
                  <ShieldCheck className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">3 Year Warranty</p>
               </div>
               <div className="text-center">
                  <Truck className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">Fast Installation</p>
               </div>
               <div className="text-center">
                  <RefreshCcw className="mx-auto text-primary mb-2" size={24} />
                  <p className="text-[10px] font-bold text-slate-900 uppercase tracking-tight">15 Day Return</p>
               </div>
            </div>
          </div>
        </div>

        {/* Product Tabs (Simulated) */}
        <div className="mt-20">
           <div className="flex border-b border-slate-200 mb-8">
              <button className="px-8 py-4 border-b-2 border-primary text-primary font-bold text-sm uppercase tracking-widest">Description</button>
              <button className="px-8 py-4 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-slate-600">Technical Specs</button>
              <button className="px-8 py-4 text-slate-400 font-bold text-sm uppercase tracking-widest hover:text-slate-600">Reviews (24)</button>
           </div>
           <div className="max-w-4xl prose prose-slate text-slate-600">
              <p className="mb-4">
                 Experience unparalleled comfort and style with the {product.name}. Designed by international award-winning designers, this piece represents the pinnacle of Modern Amenities' commitment to ergonomic engineering and aesthetic beauty.
              </p>
              <p className="mb-4">
                 Whether you're setting up a corporate HQ or a home office, our {product.category} collection provides the durability and support needed for long-term productivity. Using only premium materials sourced from around the globe, each component is tested to meet international BIFMA standards.
              </p>
              <h4 className="font-bold text-slate-900 mt-8 mb-4">Care Instructions</h4>
              <ul className="list-disc pl-5 space-y-2">
                 <li>Dust regularly with a soft, dry cloth.</li>
                 <li>Avoid direct sunlight to prevent color fading.</li>
                 <li>Tighten bolts every 6 months to ensure stability.</li>
              </ul>
           </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
             <div className="flex justify-between items-end mb-10">
                <h2 className="text-2xl font-serif font-bold text-slate-900">Recommended for You</h2>
                <Link to="/products" className="text-primary font-bold text-sm hover:underline">View All</Link>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {relatedProducts.map(p => (
                   <ProductCard key={p.id} product={p} />
                ))}
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
