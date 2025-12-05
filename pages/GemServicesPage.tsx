import React from 'react';
import { CheckCircle, FileText, TrendingUp, Users, Search, ShoppingBag, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const GemServicesPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
         <div className="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-800 z-0"></div>
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0"></div>
         
         <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
                <span className="inline-block bg-primary/20 text-primary border border-primary/30 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    Government e-Marketplace
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                    Authorized OEM & <br/>Reseller on GeM
                </h1>
                <p className="text-xl text-slate-300 max-w-xl mb-8 leading-relaxed">
                    Modern Amenities simplifies furniture procurement for government departments, PSUs, and autonomous bodies through the GeM portal.
                </p>
                <div className="flex gap-4">
                    <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-red-700 transition-colors shadow-lg shadow-primary/30">
                        Enquire Now
                    </button>
                    <Link to="/products" className="bg-transparent border border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-slate-900 transition-colors">
                        View Catalog
                    </Link>
                </div>
            </div>
            <div className="flex-1 w-full max-w-md bg-white p-2 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img src="https://picsum.photos/600/400?random=gem" alt="GeM Portal" className="w-full h-auto rounded border border-slate-100" />
                <div className="p-4 text-center">
                    <p className="text-slate-900 font-bold text-sm">GeM Seller ID: MA-GEM-2024-X89</p>
                </div>
            </div>
         </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white border-b border-slate-100">
         <div className="container mx-auto px-4 md:px-8 py-8 flex flex-wrap justify-center md:justify-between items-center gap-8 text-slate-500 font-medium text-sm uppercase tracking-wide">
             <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> 100% Compliant</div>
             <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Pan-India Delivery</div>
             <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Warranty Support</div>
             <div className="flex items-center gap-2"><CheckCircle size={18} className="text-primary"/> Installation Included</div>
         </div>
      </section>

      {/* Main Content */}
      <section className="py-20 container mx-auto px-4 md:px-8">
         <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">Why Choose Modern Amenities on GeM?</h2>
            <p className="text-slate-600">
                We understand the nuances of government procurement. From specification drafting to final installation, our dedicated government sales team ensures a seamless experience.
            </p>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <ShoppingBag size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Direct Purchase</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    For requirements up to ₹25,000, you can directly purchase Modern Amenities products without comparison. Fast track your small value procurements.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-start gap-2">✓<span>Instant Order Placement</span></li>
                    <li className="flex items-start gap-2">✓<span>No Tenders Required</span></li>
                </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Search size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">L1 Comparison</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    For orders between ₹25,000 and ₹5,00,000, use the GeM comparison tool. We offer competitive pricing to ensure we meet your L1 requirements.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-start gap-2">✓<span>Transparent Pricing</span></li>
                    <li className="flex items-start gap-2">✓<span>Detailed Specifications</span></li>
                </ul>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                    <ShieldCheck size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Bids & RA</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    For large volume orders above ₹5,00,000, we participate in Bids and Reverse Auctions with full technical compliance and best-in-class financial offers.
                </p>
                <ul className="text-sm text-slate-500 space-y-2">
                    <li className="flex items-start gap-2">✓<span>Technical Compliance</span></li>
                    <li className="flex items-start gap-2">✓<span>Bulk Order Discounts</span></li>
                </ul>
            </div>
         </div>
      </section>

      {/* Product Categories on GeM */}
      <section className="bg-slate-900 text-white py-20">
         <div className="container mx-auto px-4 md:px-8">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Available Categories</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Executive Chairs', 'Staff Chairs', 'Office Desks', 'Steel Almirahs', 'Filing Cabinets', 'Conference Tables', 'Visitor Chairs', 'Sofa Sets'].map((item, idx) => (
                    <div key={idx} className="bg-slate-800 p-4 rounded-lg flex items-center justify-between group cursor-pointer hover:bg-primary transition-colors">
                        <span className="font-medium">{item}</span>
                        <TrendingUp size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* GeM Assistance Form */}
      <section className="py-20 bg-white">
         <div className="container mx-auto px-4 md:px-8">
             <div className="max-w-5xl mx-auto bg-slate-50 rounded-3xl overflow-hidden shadow-xl border border-slate-200 flex flex-col md:flex-row">
                 <div className="p-10 md:w-2/5 bg-primary text-white flex flex-col justify-between">
                     <div>
                        <h3 className="text-2xl font-bold mb-4">Need GeM Assistance?</h3>
                        <p className="text-white/80 mb-8 text-sm">
                            Our team helps you draft specifications, understand category codes, and navigate the portal.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Users className="text-white/70" />
                                <div>
                                    <p className="text-xs text-white/60 uppercase">Contact Person</p>
                                    <p className="font-bold">Rajesh Sharma</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="text-white/70">✉</div>
                                <div>
                                    <p className="text-xs text-white/60 uppercase">Email</p>
                                    <p className="font-bold">gem@modernamenities.com</p>
                                </div>
                            </div>
                        </div>
                     </div>
                     <div className="mt-12">
                         <p className="text-xs text-white/50">Modern Amenities Pvt Ltd.</p>
                     </div>
                 </div>

                 <div className="p-10 md:w-3/5">
                     <form className="space-y-6">
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                 <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                                 <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Officer Name" />
                             </div>
                             <div>
                                 <label className="block text-sm font-bold text-slate-700 mb-2">Department</label>
                                 <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="Dept Name" />
                             </div>
                         </div>
                         <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Official Email ID</label>
                             <input type="email" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" placeholder="name@gov.in" />
                         </div>
                         <div>
                             <label className="block text-sm font-bold text-slate-700 mb-2">Requirement</label>
                             <textarea className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all h-32" placeholder="Please describe your furniture requirements..."></textarea>
                         </div>
                         <button type="button" className="w-full bg-slate-900 text-white font-bold py-4 rounded-lg hover:bg-primary transition-colors shadow-lg">
                             Submit Enquiry
                         </button>
                     </form>
                 </div>
             </div>
         </div>
      </section>
    </div>
  );
};