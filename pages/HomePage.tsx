import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, PRODUCTS, TESTIMONIALS } from '../constants';
import { ProductCard } from '../components/ProductCard';
import { ChevronRight, ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden bg-slate-900">
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-center justify-center text-center">
              <div className="max-w-4xl px-4 animate-fade-in-up">
                <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl text-slate-100 mb-8 font-light tracking-wide drop-shadow-md">
                  {slide.subtitle}
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-red-700 transition-colors shadow-lg"
                >
                  Explore Collection <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary scale-125' : 'bg-white/50 hover:bg-white'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Featured Categories Grid (Simulating Divi Layout) */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Range</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
            Designed for Every Space
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: 'Office Chairs', img: 'https://picsum.photos/400/500?random=101' },
            { title: 'Workstations', img: 'https://picsum.photos/400/500?random=102' },
            { title: 'Home Furniture', img: 'https://picsum.photos/400/500?random=103' },
            { title: 'Education', img: 'https://picsum.photos/400/500?random=104' }
          ].map((cat, idx) => (
             <div key={idx} className="relative group overflow-hidden rounded-lg aspect-[3/4] cursor-pointer">
                <img src={cat.img} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-white text-xl font-bold mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">{cat.title}</h3>
                  <span className="text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-1">
                    View Products <ChevronRight size={14} />
                  </span>
                </div>
             </div>
          ))}
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex justify-between items-end mb-12">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm">Bestsellers</span>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">
                  Featured Products
                </h2>
              </div>
              <Link to="/products" className="hidden md:flex items-center gap-2 text-slate-600 hover:text-primary transition-colors font-medium">
                 View All <ArrowRight size={18} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {PRODUCTS.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
           
           <div className="mt-8 text-center md:hidden">
              <Link to="/products" className="inline-flex items-center gap-2 text-primary font-bold">
                 View All Products <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </section>

      {/* Corporate Section (Divi style large image with text overlay) */}
      <section className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
           <div className="order-2 lg:order-1">
              <span className="text-primary font-bold uppercase tracking-widest text-sm">Projects</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">
                Creating Workspaces That Work
              </h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Modern Amenities has been the preferred partner for Fortune 500 companies for over three decades. 
                Our expertise lies in understanding the dynamics of modern workspaces and delivering solutions 
                that boost productivity and employee well-being.
              </p>
              <ul className="space-y-3 mb-8">
                 {['Ergonomic Assessment', 'Custom Space Planning', 'End-to-end Installation'].map((item, i) => (
                   <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                      <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xs">✓</div>
                      {item}
                   </li>
                 ))}
              </ul>
              <button className="bg-slate-900 text-white px-8 py-3 rounded-md hover:bg-primary transition-colors">
                View Our Projects
              </button>
           </div>
           <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden shadow-2xl">
              <img src="https://picsum.photos/800/600?random=200" alt="Office Interior" className="w-full h-auto" />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg">
                 <p className="text-sm font-bold text-slate-900">Trusted by 10,000+ Clients</p>
                 <div className="flex -space-x-2 mt-2">
                    {[1,2,3,4].map(n => (
                      <img key={n} src={`https://picsum.photos/40/40?random=${300+n}`} className="w-8 h-8 rounded-full border-2 border-white" alt="client" />
                    ))}
                    <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">+</div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900 text-white py-20 mt-8">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-4xl">
           <Quote size={48} className="text-primary mx-auto mb-8 opacity-50" />
           <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">What Our Clients Say</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-slate-800 p-8 rounded-xl border border-slate-700 text-left hover:border-primary transition-colors">
                   <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                   <div className="flex items-center gap-4">
                      <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                      <div>
                         <h4 className="font-bold text-white">{t.name}</h4>
                         <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
  );
};