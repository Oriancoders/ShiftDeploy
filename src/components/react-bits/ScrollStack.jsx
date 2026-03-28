import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollStack({ items = [] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <motion.article
          key={item.title}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45, delay: index * 0.06 }}
          className="sticky top-24 rounded-3xl border border-primaryBlue/10 bg-white p-6 shadow-[0_20px_60px_rgba(12,31,58,0.08)]"
          style={{ top: 96 + index * 18 }}
        >
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primaryBlue text-white">
            <item.icon className="h-6 w-6" />
          </div>
          <div className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-primaryOrange">Step {index + 1}</div>
          <h3 className="text-2xl font-bold text-primaryBlue">{item.title}</h3>
          <p className="mt-3 text-base leading-7 text-textColor/80">{item.description}</p>
        </motion.article>
      ))}
    </div>
  );
}