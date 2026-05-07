'use client';
import React, { useEffect, useState } from 'react';
import { ContextAPI } from './ContextAPI';

const GlobalProvider = ({ children }) => {
  const [scrwidth, setWidth] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ContextAPI.Provider value={{ scrwidth, isLoading, setIsLoading }}>
      {children}
    </ContextAPI.Provider>
  );
};

export default GlobalProvider;
