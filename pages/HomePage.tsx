
import React, { useState, useEffect } from 'react';
import { HERO_SLIDES, PRODUCTS } from '../constants';
import { ProductCard } from '../components/ProductCard';
// Fix: Removed non-existent 'Wordpress' icon and replaced it with 'Globe' which is available in lucide-react
import { ArrowRight, Shield, Award, PenTool, Zap, Laptop, Copy, Check, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showWPHelper, setShowWPHelper] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  const wpPrompts = [
    {
      title: "Hero Section Prompt",
      prompt: "Create a full-screen hero section for an office furniture brand. Background: high-res office interior with dark overlay. Heading: 'Workspaces that Inspire' in a bold serif font. Subheading: 'India's leading choice for ergonomic furniture'. Buttons: One solid red (#d32f2f), one ghost white button.",
      category: "Container AI"
    },
    {
      title: "Trust Pillars CSS",
      prompt: "Generate CSS for a 4-column feature grid. Each item should have a white background, a thin border (#f1f5f9), and a smooth lift animation on hover. Add a circular icon placeholder with 10% opacity red background.",
      category: "Code AI"
    },
    {
      title: "Product Card Style",
      prompt: "Design a product card layout for an e-commerce site. Image aspect ratio 4:5. Category label in small red caps. Title in bold dark slate. Include a bottom row with price in bold and a 'View Details' link.",
      category: "Container AI"
    }
  ];

  return (
    <div className="flex flex-col gap-16 pb-16 relative">
      {/* Hero Section */}
      <section className="relative h-[750px] w-full overflow-hidden bg-slate-900">
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
              <div className="max-w-4xl px-4 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light tracking-wide max-w-2xl mx-auto drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Link
                    to="/products"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-white px-10 py-4 rounded-full font-bold hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1"
                  >
                    Explore Catalog <ArrowRight size={20} />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all"
                  >
                    Visit Showroom
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Trust Pillars */}
      <section className="container mx-auto px-4 md:px-8 -mt-24 relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
           {[
             { icon: Shield, title: 'Long-term Warranty', desc: 'Up to 5 Years Support' },
             { icon: Award, title: 'BIFMA Certified', desc: 'Quality Guaranteed' },
             { icon: PenTool, title: 'Expert Planning', desc: 'Free Layout Design' },
             { icon: Zap, title: 'Pan India Delivery', desc: 'Fast & Secure Shipping' }
           ].map((item, i) => (
             <div key={i} className="bg-white p-8 rounded-2xl shadow-2xl flex flex-col gap-4 border border-slate-50 hover:border-primary/20 transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                   <item.icon size={28} />
                </div>
                <div>
                   <h4 className="font-bold text-slate-900 text-base mb-1">{item.title}</h4>
                   <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
             </div>
           ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container mx-auto px-4 md:px-8">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <span className="text-primary font-bold uppercase tracking-widest text-sm mb-2 block">Our Collections</span>
                <h2 className="text-4xl font-serif font-bold text-slate-900">Featured Ergonomics</h2>
              </div>
              <Link to="/products" className="text-slate-900 font-bold border-b-2 border-primary pb-1 hover:text-primary transition-colors flex items-center gap-2 w-fit">
                View All Categories <ArrowRight size={16} />
              </Link>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {PRODUCTS.slice(0, 4).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
           </div>
        </div>
      </section>

      {/* Elementor AI Helper Modal-like UI */}
      <div className="fixed bottom-32 left-6 z-50">
        <button 
          onClick={() => setShowWPHelper(!showWPHelper)}
          className="bg-slate-900 text-white p-4 rounded-full shadow-2xl hover:bg-primary transition-all flex items-center gap-2 group"
        >
          <Laptop size={24} />
          <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 whitespace-nowrap font-bold text-sm">
            AI Prompt Helper
          </span>
        </button>

        {showWPHelper && (
          <div className="absolute bottom-16 left-0 w-80 sm:w-96 bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-in slide-in-from-left-4 fade-in duration-300">
             <div className="bg-slate-900 p-6 text-white flex items-center justify-between">
                <div className="flex items-center gap-3">
                   {/* Fix: Replaced non-existent Wordpress with Globe icon */}
                   <div className="p-2 bg-primary rounded-lg"><Globe size={20} /></div>
                   <div>
                      <h3 className="font-bold">Elementor AI Guide</h3>
                      <p className="text-xs text-slate-400 underline decoration-primary">Live Prompt Generator</p>
                   </div>
                </div>
                <button onClick={() => setShowWPHelper(false)} className="text-slate-400 hover:text-white">×</button>
             </div>
             <div className="p-6 space-y-6 max-h-[400px] overflow-y-auto">
                <p className="text-sm text-slate-600 mb-4">Use these prompts inside Elementor's <strong>"Edit with AI"</strong> tool to replicate this site perfectly.</p>
                {wpPrompts.map((item, idx) => (
                   <div key={idx} className="space-y-2 border-b border-slate-100 pb-4 last:border-0">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-black uppercase text-primary bg-primary/5 px-2 py-0.5 rounded">{item.category}</span>
                        <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      </div>
                      <div className="relative group">
                         <p className="text-xs text-slate-500 bg-slate-50 p-3 rounded-xl border border-slate-100 pr-10 italic">
                            {item.prompt}
                         </p>
                         <button 
                           onClick={() => copyToClipboard(item.prompt, idx)}
                           className="absolute top-2 right-2 p-1.5 bg-white border border-slate-200 rounded-md shadow-sm hover:text-primary transition-colors"
                         >
                            {copiedIndex === idx ? <Check size={14} className="text-green-500" /> : <Copy size={14} />}
                         </button>
                      </div>
                   </div>
                ))}
             </div>
             <div className="p-4 bg-slate-50 border-t border-slate-100 text-center">
                <a href="https://elementor.com/ai/" target="_blank" className="text-[10px] font-bold text-slate-400 hover:text-primary transition-colors uppercase tracking-widest">
                   Learn more about Elementor AI
                </a>
             </div>
          </div>
        )}
      </div>
    </div>
  );
};
