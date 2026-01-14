import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 z-0"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Contact Us</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            We are here to help. Reach out to us for any queries regarding our products, projects, or dealership opportunities.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div>
            <div className="mb-8">
              <span className="text-primary font-bold uppercase tracking-widest text-xs">Get in Touch</span>
              <h2 className="text-3xl font-serif font-bold text-slate-900 mt-2">Send us a Message</h2>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">First Name *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Last Name *</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="Doe" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address *</label>
                  <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number *</label>
                  <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="+91 97214 96611" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Enquiry Type</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-slate-600">
                  <option>Sales Enquiry</option>
                  <option>Customer Support</option>
                  <option>Dealership Enquiry</option>
                  <option>Career Opportunities</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                <textarea rows={5} className="w-full bg-slate-50 border border-slate-200 rounded-none px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all" placeholder="How can we assist you today?"></textarea>
              </div>

              <button type="button" className="bg-primary text-white px-8 py-3 font-bold uppercase tracking-wide hover:bg-slate-900 transition-colors flex items-center gap-2">
                Send Message <Send size={16} />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-12">
            
            {/* Corporate Office Card */}
            <div className="bg-slate-50 p-8 border border-slate-100">
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">
                Corporate Office
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Modern Amenities Pvt. Ltd.</h4>
                    <p className="text-slate-600 text-sm mt-1 leading-relaxed">
                      Reg. Office : 111A/27, Ashok Nagar,<br />
                      Kanpur Nagar, Uttar Pradesh 208012
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Phone</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      <a href="tel:9721496611" className="hover:text-primary transition-colors">+91 9721496611</a>
                    </p>
                    <p className="text-slate-500 text-xs mt-1">Mon - Sat, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white shadow-sm flex items-center justify-center text-primary flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Email</h4>
                    <p className="text-slate-600 text-sm mt-1">
                      <a href="mailto:info@modernamenities.in" className="hover:text-primary transition-colors">info@modernamenities.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Regional Offices Summary */}
            <div>
              <h3 className="text-xl font-serif font-bold text-slate-900 mb-6">Regional Presence</h3>
              <div className="grid grid-cols-2 gap-4">
                 {['New Delhi', 'Mumbai', 'Chennai', 'Hyderabad', 'Pune', 'Kolkata'].map((city) => (
                   <div key={city} className="flex items-center gap-2 text-slate-600 text-sm border-b border-slate-100 py-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> {city}
                   </div>
                 ))}
              </div>
              <button className="mt-6 text-primary font-bold text-sm uppercase tracking-wide border-b-2 border-primary pb-1 hover:text-slate-900 hover:border-slate-900 transition-all">
                Locate a Dealer Near You
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 w-full bg-slate-200 relative">
        {/* In a real app, this would be a Google Maps iframe */}
        <div className="absolute inset-0 flex items-center justify-center bg-slate-100 text-slate-400">
           <div className="text-center">
             <MapPin size={48} className="mx-auto mb-2 opacity-50" />
             <p className="font-bold uppercase tracking-widest text-sm">Interactive Map Loading...</p>
           </div>
        </div>
      </section>
    </div>
  );
};