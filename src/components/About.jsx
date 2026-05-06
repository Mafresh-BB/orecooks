import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/tray.png"
                alt="Orecooks Catering"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary text-white p-8 rounded-3xl shadow-xl hidden lg:block">
              <p className="text-4xl font-bold font-serif mb-1">100%</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">Quality Ingredients</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">The Orecooks Story</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
              Premium Food, <br />Crafted with Passion
            </h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Based in the heart of Ikorodu, Orecooks has been serving the community with authentic, 
              flavor-rich Nigerian cuisine. Whether it's a private meal or a grand celebration, 
              we bring a touch of elegance to every dish.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-pink-50 p-3 rounded-xl text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Our Location</h4>
                  <p className="text-gray-600">No 77 Lagos Rd, Haruna, Ikorodu, Lagos.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-50 p-3 rounded-xl text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Always Ready</h4>
                  <p className="text-gray-600">Available for catering bookings 24/7.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-pink-50 p-3 rounded-xl text-primary">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Certified Excellence</h4>
                  <p className="text-gray-600">Fully registered and professional catering services.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
