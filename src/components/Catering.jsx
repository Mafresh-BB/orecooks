import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Star } from 'lucide-react';

const Catering = () => {
  const services = [
    {
      title: "Weddings & Burials",
      description: "Large scale catering with professional servers and elegant presentation.",
      icon: <Star className="text-primary" />
    },
    {
      title: "Corporate Events",
      description: "Lunch trays and meeting platters for businesses in and around Ikorodu.",
      icon: <Users className="text-primary" />
    },
    {
      title: "Private Parties",
      description: "Custom menus for birthdays, anniversaries, and housewarmings.",
      icon: <Calendar className="text-primary" />
    }
  ];

  return (
    <section id="catering" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">Event Services</span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 font-serif leading-tight">
              Let Us Cater Your <br /><span className="text-primary italic">Special Moments</span>
            </h2>
            <p className="text-gray-600 text-lg mb-12 leading-relaxed">
              From intimate gatherings to massive celebrations, Orecooks brings flavor and elegance to every event. 
              Our team handles everything from cooking to setup, so you can focus on your guests.
            </p>

            <div className="space-y-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="bg-pink-50 p-4 rounded-2xl h-fit">
                    {service.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2 font-serif">{service.title}</h4>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src="/tray.png" alt="Catering 1" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
                <img src="/hero.png" alt="Catering 2" className="rounded-3xl shadow-lg w-full h-48 object-cover" />
              </div>
              <div className="space-y-4">
                <img src="/egusi.png" alt="Catering 3" className="rounded-3xl shadow-lg w-full h-48 object-cover" />
                <img src="/tray.png" alt="Catering 4" className="rounded-3xl shadow-lg w-full h-64 object-cover" />
              </div>
            </div>
            {/* Background decoration */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-pink-50 rounded-full blur-3xl opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catering;
