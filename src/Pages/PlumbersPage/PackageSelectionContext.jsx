'use client';
import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

/*
  Carries the pricing choice from the packages section down to the booking
  form.

  The two sections are split across separate lazy() boundaries, so a shared
  context is cheaper than threading a prop through the page shell. The state is
  a single string - the value the booking form's <select> expects.

  Why not a URL fragment: `#booking?package=X` is not a valid fragment, the
  browser would look for an element whose id is literally "booking?package=X",
  fail to find it, and the scroll-to-form would silently stop working.
*/
const PackageSelectionContext = createContext({
  selectedPackage: '',
  selectPackage: () => {},
  clearPackage: () => {},
});

export function PackageSelectionProvider({ children }) {
  const [selectedPackage, setSelectedPackage] = useState('');

  const selectPackage = useCallback((value) => {
    setSelectedPackage(value);
    // Scroll after paint so the form has committed the new selection and the
    // user sees the filled field rather than an empty one that fills in late.
    requestAnimationFrame(() => {
      document
        .getElementById('booking')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, []);

  const clearPackage = useCallback(() => setSelectedPackage(''), []);

  const value = useMemo(
    () => ({ selectedPackage, selectPackage, clearPackage }),
    [selectedPackage, selectPackage, clearPackage]
  );

  return (
    <PackageSelectionContext.Provider value={value}>
      {children}
    </PackageSelectionContext.Provider>
  );
}

export const usePackageSelection = () => useContext(PackageSelectionContext);
