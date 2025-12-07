import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // "instant" prevents the scroll animation from fighting with the page load
    window.scrollTo({
        top: 0,
        behavior: "instant" 
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;