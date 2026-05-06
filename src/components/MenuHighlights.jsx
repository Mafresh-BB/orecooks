import React from 'react';
import { motion } from 'framer-motion';

const dishes = [
  {
    name: 'Party Jollof Platter',
    description: 'Smoky, authentic party jollof served with fried plantain and chicken.',
    price: 'Popular Choice',
    image: '/hero.png'
  },
  {
    name: 'Special Egusi & Swallow',
    description: 'Rich, vegetable-infused egusi soup with assorted meats.',
    price: 'Chef Recommended',
    image: '/egusi.png'
  },
  {
    name: 'Luxury Food Trays',
    description: 'Perfectly arranged trays for birthdays and surprises.',
    price: 'Best for Events',
    image: '/tray.png'
  }
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 bg-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">On The Menu</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-serif">Signature Dishes</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow group"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 font-serif">{dish.name}</h3>
                  <span className="bg-pink-100 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-tighter">
                    {dish.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {dish.description}
                </p>
                <a
                  href="https://wa.me/2348083786824"
                  className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Order This Dish &rarr;
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-8 italic">Plus: Afang, Efo Riro, Stir fries, and many more...</p>
          <a
            href="https://wa.me/2348083786824"
            className="inline-block border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all"
          >
            Download Full Menu
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuHighlights;
