import React from 'react';
import { PenTool, Truck, Wrench, Headphones, Layout, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/600?random=services" 
            alt="Services Background" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">End-to-End Solutions</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            We offer more than just furniture. From space planning to after-sales support, we provide a comprehensive suite of services to ensure your workspace works for you.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Layout size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Space Planning & Design</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Our in-house design team works with you to optimize your floor plan. We create 2D layouts and 3D visualizations to help you envision your future workspace before you buy.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Layout Optimization</li>
              <li className="flex items-center gap-2">✓ 3D Visualization</li>
              <li className="flex items-center gap-2">✓ Color & Material Selection</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Settings size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Custom Manufacturing</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Need something unique? Our state-of-the-art manufacturing facility allows us to customize furniture dimensions, finishes, and materials to match your brand identity perfectly.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Brand Color Matching</li>
              <li className="flex items-center gap-2">✓ Custom Dimensions</li>
              <li className="flex items-center gap-2">✓ Material Selection</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Truck size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Logistics & Installation</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We handle the entire logistics process. Our trained installation team ensures that your furniture is assembled correctly, safely, and on time, anywhere in India.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Pan-India Delivery</li>
              <li className="flex items-center gap-2">✓ Professional Assembly</li>
              <li className="flex items-center gap-2">✓ Debris Removal</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Wrench size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Annual Maintenance (AMC)</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Protect your investment with our comprehensive Annual Maintenance Contracts. We conduct regular checks and repairs to extend the lifespan of your assets.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Periodic Inspections</li>
              <li className="flex items-center gap-2">✓ Priority Support</li>
              <li className="flex items-center gap-2">✓ Genuine Spares</li>
            </ul>
          </div>

           {/* Service 5 */}
           <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <PenTool size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Turnkey Projects</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              We take full responsibility for your interior project. From civil works and flooring to ceiling and furniture, we deliver a ready-to-move-in office space.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Single Point of Contact</li>
              <li className="flex items-center gap-2">✓ Timely Execution</li>
              <li className="flex items-center gap-2">✓ Quality Assurance</li>
            </ul>
          </div>

          {/* Service 6 */}
          <div className="bg-slate-50 p-8 rounded-xl hover:shadow-xl transition-all duration-300 group border border-slate-100">
            <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
              <Headphones size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Consultancy & Audit</h3>
            <p className="text-slate-600 leading-relaxed mb-6 text-sm">
              Existing office not working for you? We conduct ergonomic audits and workspace efficiency analysis to suggest improvements for better productivity.
            </p>
            <ul className="space-y-2 text-sm text-slate-500">
              <li className="flex items-center gap-2">✓ Ergonomic Audit</li>
              <li className="flex items-center gap-2">✓ Space Efficiency Analysis</li>
              <li className="flex items-center gap-2">✓ Acoustic Consultation</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-50 py-20">
         <div className="container mx-auto px-4 md:px-8">
            <div className="text-center mb-16">
               <span className="text-primary font-bold uppercase tracking-widest text-sm">Workflow</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">How We Work</h2>
            </div>

            <div className="relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 z-0"></div>

               <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                  
                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-slate-50">1</div>
                     <h4 className="font-bold text-lg mb-2">Consult</h4>
                     <p className="text-sm text-slate-500">We understand your requirements, budget, and timeline.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-slate-50">2</div>
                     <h4 className="font-bold text-lg mb-2">Design</h4>
                     <p className="text-sm text-slate-500">Our team creates layouts and proposes the best products.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                     <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-slate-50">3</div>
                     <h4 className="font-bold text-lg mb-2">Create</h4>
                     <p className="text-sm text-slate-500">Manufacturing begins at our state-of-the-art facility.</p>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                     <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 border-4 border-slate-50">4</div>
                     <h4 className="font-bold text-lg mb-2">Install</h4>
                     <p className="text-sm text-slate-500">We deliver and install your workspace to perfection.</p>
                  </div>

               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-primary text-white py-16">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <h2 className="text-3xl font-serif font-bold mb-6">Ready to transform your workspace?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
               Whether you need a single chair or a complete office overhaul, our team is ready to assist you.
            </p>
            <div className="flex justify-center gap-4">
               <Link to="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-bold hover:bg-slate-900 hover:text-white transition-colors">
                  Contact Us
               </Link>
               <Link to="/products" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-primary transition-colors">
                  View Products
               </Link>
            </div>
         </div>
      </section>
    </div>
  );
};