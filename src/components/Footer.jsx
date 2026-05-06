import React from 'react';
import { Phone, MapPin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-gray-50 pt-24 pb-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <span className="text-3xl font-bold font-serif text-primary mb-6 block">
              OreCooks
            </span>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Excellence in every bite. Catering for birthdays, weddings, burials, and all corporate events.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/orecooks_events" target="_blank" rel="noreferrer" className="bg-white p-3 rounded-full shadow-sm text-gray-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="bg-white p-3 rounded-full shadow-sm text-gray-400 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-600 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-600 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-gray-600 hover:text-primary transition-colors">Menu Highlights</a></li>
              <li><a href="#academy" className="text-gray-600 hover:text-primary transition-colors">Culinary School</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-600">No 77 Lagos Rd, Haruna, Ikorodu, Lagos.</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-600">08083786824, 08093855253</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary flex-shrink-0" />
                <span className="text-gray-600">hello@orecooks.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm">Business Hours</h4>
            <ul className="space-y-4">
              <li className="flex justify-between text-gray-600">
                <span>Mon - Sat</span>
                <span>8:00 AM - 7:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-600">
                <span>Sunday</span>
                <span>Pre-orders Only</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} OreCooks Lagos. All rights reserved. Built for elegance.
          </p>
          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-gray-500 hover:text-primary transition-colors text-sm font-bold uppercase tracking-widest"
          >
            Back to Top
            <div className="p-2 bg-white rounded-full shadow-sm group-hover:-translate-y-1 transition-transform">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
