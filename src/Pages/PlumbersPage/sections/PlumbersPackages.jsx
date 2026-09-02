'use client';
import React from 'react';
import { m as motion, useReducedMotion } from 'framer-motion';
import { useIsDesktop } from '../useIsDesktop';
import Check from 'lucide-react/dist/esm/icons/check';
import ArrowRight from 'lucide-react/dist/esm/icons/arrow-right';
import { Button, Eyebrow, Section } from '../ui';
import { usePackageSelection } from '../PackageSelectionContext';
import { PACKAGES, FREE_OFFER_VALUE } from '../packages';

const PlumbersPackages = () => {
  const reduce = useReducedMotion();
  const isDesktop = useIsDesktop();
  const { selectPackage } = usePackageSelection();

  return (
    <Section id="packages" className="bg-gray-50">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <Eyebrow className="mb-4">Pricing</Eyebrow>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primaryBlue mb-4">
          Simple Pricing. No Contracts. No Surprises.
        </h2>
        <p className="text-lg text-gray-700">
          Cancel anytime. No results in 60 days and we work free.
        </p>
      </div>

      {/* items-start keeps the featured card's scale from stretching siblings. */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {PACKAGES.map((p) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{
              opacity: 1,
              y: 0,
              // Only lift the featured card where there is room beside it.
              scale: p.featured && !reduce && isDesktop ? 1.03 : 1,
            }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            className={`relative bg-white rounded-2xl p-6 sm:p-8 flex flex-col h-full ${
              p.featured ? 'mt-4 md:mt-0 pt-8 sm:pt-9 ' : ''
            }${
              p.featured
                ? 'border-2 border-primaryOrange shadow-xl'
                : 'border border-gray-200 shadow-md'
            }`}
          >
            {p.featured && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primaryOrange text-white text-xs font-bold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full whitespace-nowrap">
                Most Popular
              </span>
            )}

            <h3 className="text-xl font-bold text-primaryBlue mb-2 mt-2">
              {p.name}
            </h3>
            <div className="mb-6">
              <span className="text-3xl sm:text-4xl font-bold text-primaryBlue">
                {p.price}
              </span>
              <p className="text-sm text-gray-600 mt-1">{p.priceNote}</p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-x-3">
                  <Check
                    className="w-5 h-5 text-primaryOrange flex-shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>

            <Button
              onClick={() => selectPackage(p.packageValue)}
              variant={p.variant}
              className="w-full"
            >
              {p.cta}
              {p.variant === 'primary' && (
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              )}
            </Button>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
        className="mt-12 bg-white rounded-2xl border-2 border-primaryOrange p-6 sm:p-10 text-center"
      >
        <motion.div
          className="text-4xl mb-4"
          animate={reduce ? {} : { scale: [1, 1.12, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span role="img" aria-label="gift">
            🎁
          </span>
        </motion.div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primaryBlue mb-3">
          New Client? Get Your First Website FREE.
        </h3>
        <p className="text-lg text-gray-700 mb-6 max-w-xl mx-auto">
          We build at zero cost to prove our value. Just cover hosting, £20/month.
          No catch.
        </p>
        <div className="flex justify-center [&>*]:w-full sm:[&>*]:w-auto">
          <Button
            onClick={() => selectPackage(FREE_OFFER_VALUE)}
            variant="primary"
          >
            Claim Free Website
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
        <p className="text-sm text-gray-500 mt-4">
          Only 3 spots available this month
        </p>
      </motion.div>
    </Section>
  );
};

export default PlumbersPackages;
