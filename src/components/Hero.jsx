import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Utensils } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero.png"
          alt="Premium Nigerian Food"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-md text-pink-200 px-4 py-1.5 rounded-full text-sm font-medium border border-white/20 mb-6">
            <Utensils size={14} />
            Established in Ikorodu
          </span>
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight font-serif">
            Bringing <span className="text-primary italic">Flavor & Elegance</span> to your Plate
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Professional catering, world-class culinary education, and the most delicious meals delivered straight to your door.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/2348083786824"
              className="bg-primary text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-dark transition-all flex items-center gap-2 group shadow-2xl"
            >
              Order Now
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#academy"
              className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all"
            >
              View Academy
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
