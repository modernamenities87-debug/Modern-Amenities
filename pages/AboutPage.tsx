import React from 'react';
import { Award, Users, Globe, Target, ShieldCheck, Leaf, Factory } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/1920/600?random=about-hero" 
            alt="Office Background" 
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <span className="text-primary font-bold uppercase tracking-widest text-sm mb-4 block">Since 1970</span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">Pioneering Workspace Solutions</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            For over 50 years, Modern Amenities has been synonymous with quality, innovation, and ergonomic excellence in the Indian furniture industry.
          </p>
        </div>
      </section>

      {/* The Story Section */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-6 relative after:content-[''] after:block after:w-20 after:h-1 after:bg-primary after:mt-4">
              Our Story
            </h2>
            <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
              <p>
                Founded in 1970, Modern Amenities started as a humble garden furniture workshop. Through decades of dedication to craftsmanship and an unwavering commitment to quality, we have evolved into one of India's leading furniture manufacturers.
              </p>
              <p>
                We pioneered the manufacturing of aluminium furniture in the early 80s and later revolutionized the office furniture segment with modular workstations and ergonomic chairs. Today, our footprint spans across the nation, serving corporate giants, educational institutions, and government bodies.
              </p>
              <p>
                Our philosophy is simple: <strong>Design serves people.</strong> Every curve, every material, and every mechanism is chosen to enhance the human experience of work and leisure.
              </p>
            </div>
            
            {/* Signature / Quote */}
            <div className="mt-8 border-l-4 border-slate-200 pl-6 italic text-slate-500">
              "We don't just build furniture; we craft environments where ideas flourish and businesses grow."
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/10 rounded-tl-3xl -z-10"></div>
            <img 
              src="https://picsum.photos/600/700?random=ceo" 
              alt="Our History" 
              className="w-full rounded-lg shadow-xl"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 shadow-lg rounded-lg max-w-xs hidden md:block">
              <p className="font-serif font-bold text-xl text-slate-900">50+</p>
              <p className="text-slate-500 text-sm">Years of Engineering Excellence & Customer Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Strip */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <Globe size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-4xl font-serif font-bold mb-2">65+</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Locations across India</p>
          </div>
          <div className="p-4">
            <Users size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-4xl font-serif font-bold mb-2">10k+</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Happy Corporate Clients</p>
          </div>
          <div className="p-4">
            <Factory size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-4xl font-serif font-bold mb-2">5L+</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Sq. Ft. Manufacturing Area</p>
          </div>
          <div className="p-4">
            <Award size={40} className="mx-auto mb-4 text-primary" />
            <h3 className="text-4xl font-serif font-bold mb-2">25+</h3>
            <p className="text-slate-400 text-sm uppercase tracking-wider">Design Awards Won</p>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Our Core</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2">Driven by Purpose</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-primary hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed">
                To be the global benchmark in workspace solutions, creating inspiring environments that foster productivity, well-being, and collaboration.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-slate-800 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 mb-6">
                <Globe size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed">
                To innovate continuously, manufacture sustainably, and deliver exceptional value to our customers through superior design and ergonomic engineering.
              </p>
            </div>

            {/* Values */}
            <div className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-green-600 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center text-green-600 mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4">Sustainability</h3>
              <p className="text-slate-600 leading-relaxed">
                We are committed to eco-friendly practices, using recyclable materials and energy-efficient manufacturing processes to minimize our carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 order-2 md:order-1">
               <img src="https://picsum.photos/800/600?random=factory" alt="Factory Floor" className="rounded-lg shadow-2xl" />
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
               <span className="text-primary font-bold uppercase tracking-widest text-sm">Infrastructure</span>
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mt-2 mb-6">
                  Manufacturing Excellence
               </h2>
               <p className="text-slate-600 mb-6 leading-relaxed">
                  Our state-of-the-art manufacturing facility in Kanpur is equipped with the latest machinery from Germany and Italy. We combine automated precision with skilled craftsmanship to produce furniture that stands the test of time.
               </p>
               <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                     <ShieldCheck className="text-primary mt-1 flex-shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-slate-900">Rigorous Quality Control</h4>
                        <p className="text-sm text-slate-500">Every product undergoes 25+ quality checks before dispatch.</p>
                     </div>
                  </li>
                  <li className="flex items-start gap-3">
                     <Factory className="text-primary mt-1 flex-shrink-0" size={20} />
                     <div>
                        <h4 className="font-bold text-slate-900">High Capacity Production</h4>
                        <p className="text-sm text-slate-500">Capable of furnishing 1000+ workstations per week.</p>
                     </div>
                  </li>
               </ul>
            </div>
        </div>
      </section>

      {/* Certifications Strip */}
      <section className="bg-slate-100 py-12 border-t border-slate-200">
         <div className="container mx-auto px-4 md:px-8 text-center">
            <p className="text-slate-500 font-bold uppercase tracking-widest mb-8 text-xs">Accreditations & Certifications</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all">
               {/* Placeholders for logos */}
               <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border-2 border-slate-300 p-2 rounded">ISO 9001</div>
               <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border-2 border-slate-300 p-2 rounded">ISO 14001</div>
               <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border-2 border-slate-300 p-2 rounded">BIFMA</div>
               <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border-2 border-slate-300 p-2 rounded">GreenGuard</div>
               <div className="flex items-center gap-2 font-bold text-slate-800 text-xl border-2 border-slate-300 p-2 rounded">OHSAS</div>
            </div>
         </div>
      </section>
    </div>
  );
};