'use client';
import React from 'react';
import { m as motion } from 'framer-motion';
import X from 'lucide-react/dist/esm/icons/x';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button, Card, Eyebrow, Section } from '../ui';

const PAINS = [
  'You rely on word of mouth, and it’s slowing down',
  'You’ve Googled yourself and you don’t show up',
  'Your website looks like it was built in 2015',
  'Competitors are racking up reviews while yours sit empty',
  'You’ve said “I’ll sort the website” for 6 months',
  'ChatGPT and AI tools never mention your business. Ever',
];

const PlumbersPain = () => (
  <Section className="bg-gray-50">
    <div className="mb-12">
      <Eyebrow className="mb-4">Sound Familiar?</Eyebrow>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue">
        Be Honest With Yourself.
      </h2>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-start">
      {/* whileInView (not animate) so the stagger fires on scroll, once. */}
      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        className="space-y-4"
      >
        {PAINS.map((p) => (
          <motion.li
            key={p}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: {
                opacity: 1,
                x: 0,
                transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
              },
            }}
            className="flex items-start gap-x-3"
          >
            <X
              className="w-5 h-5 text-primaryOrange flex-shrink-0 mt-1"
              aria-hidden="true"
            />
            <span className="text-base sm:text-lg text-gray-700 leading-relaxed">{p}</span>
          </motion.li>
        ))}
      </motion.ul>

      <Card className="border-l-4 border-primaryOrange">
        <h3 className="text-xl sm:text-2xl font-bold text-primaryBlue mb-4">
          What Invisibility Is Costing You
        </h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          The average UK plumber job is worth £180–£400. If Google sends 10
          extra calls to your competitor instead of you, that&apos;s
          £1,800–£4,000 walking out the door.
        </p>
        <p className="text-gray-900 font-bold mb-6">Every. Single. Month.</p>
        <Eyebrow className="mb-6 !text-xs">
          How long can you afford this?
        </Eyebrow>
        <Button href="#booking" variant="primary" className="w-full sm:w-auto">
          Stop Losing Jobs
          <ArrowRight className="w-5 h-5" aria-hidden="true" />
        </Button>
      </Card>
    </div>
  </Section>
);

export default PlumbersPain;
