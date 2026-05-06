import React from 'react';
import { CheckCircle2, GraduationCap } from 'lucide-react';

const CulinarySchool = () => {
  const features = [
    "Professional 6-Month Intensive Program",
    "Hands-on Practical Training",
    "Certification Upon Graduation",
    "Business of Culinary Arts Module",
    "Internship Opportunities",
    "Lagos State Registered Academy"
  ];

  return (
    <section id="academy" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-pink-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 relative h-[400px] lg:h-auto">
            <img
              src="/culinary.png"
              alt="Orecooks Culinary Academy"
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-transparent hidden lg:block" />
          </div>

          <div className="lg:w-1/2 p-12 lg:p-20">
            <div className="flex items-center gap-3 text-primary mb-6">
              <GraduationCap size={32} />
              <span className="font-bold tracking-widest uppercase text-sm">Orecooks Culinary Academy</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 font-serif">
              Become a <span className="text-primary italic">Certified Chef</span>
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Join Ikorodu's premier culinary school. Whether you want to start a catering business 
               or refine your skills, our 6-month program provides the expert knowledge you need.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3 text-gray-300">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/2348083786824"
              className="inline-block bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-primary-dark transition-all shadow-xl hover:scale-105"
            >
              Enroll Now for Next Session
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CulinarySchool;
