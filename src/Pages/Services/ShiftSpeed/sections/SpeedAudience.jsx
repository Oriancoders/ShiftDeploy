import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, Briefcase, Monitor } from 'lucide-react';

const SpeedAudience = () => {
  const audiences = [
    {
      icon: Stethoscope,
      title: "Dental & Medical",
      description: "Patients book appointments on mobile. Don't let them bounce to a competitor.",
      benefits: ["Mobile booking optimization", "Patient trust building", "Reduced appointment dropout"]
    },
    {
      icon: Briefcase,
      title: "Finance & Legal",
      description: "Trust is established in milliseconds. A slow site signals incompetence.",
      benefits: ["Professional credibility", "Client confidence boost", "Higher consultation rates"]
    },
    {
      icon: Monitor,
      title: "SaaS & Tech",
      description: "Your landing page performance dictates your CAC (Customer Acquisition Cost).",
      benefits: ["Lower acquisition costs", "Higher conversion rates", "Better user experience"]
    }
  ];

  return (
    <section id="who-its-for" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primaryBlue mb-6">
            Engineered for <span className="text-primaryOrange">High-Stakes</span> Service Businesses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            When every second counts and first impressions determine client lifetime value
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-primaryOrange mb-6">
                <audience.icon size={48} />
              </div>
              
              <h3 className="text-2xl font-bold text-primaryBlue mb-4">
                {audience.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {audience.description}
              </p>
              
              <ul className="space-y-2">
                {audience.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-primaryOrange rounded-full mr-3 flex-shrink-0"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedAudience;