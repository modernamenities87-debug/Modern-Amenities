import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h3 className="text-2xl font-serif font-bold mb-6">Modern Amenities</h3>
          <p className="text-slate-400 mb-6 text-sm leading-relaxed">
            Leading the furniture industry with innovative designs and ergonomic comfort for over 50 years. We create spaces that inspire.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-200">Quick Links</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Our Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Projects</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Dealer Network</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-200">Categories</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li><a href="#" className="hover:text-white transition-colors">Office Chairs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Workstations</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Lounge Furniture</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Education</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Healthcare</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-bold mb-6 text-slate-200">Contact Us</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 flex-shrink-0" />
              <span>123 Furniture Lane, Industrial Area,<br />Bangalore, 560001</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} />
              <span>+91 80 1234 5678</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} />
              <span>sales@modernamenities.com</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-8 mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
        &copy; {new Date().getFullYear()} Modern Amenities. All rights reserved. This is a demo clone.
      </div>
    </footer>
  );
};