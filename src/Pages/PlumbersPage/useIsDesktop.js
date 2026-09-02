'use client';
import { useEffect, useState } from 'react';

/*
  True at Tailwind's md breakpoint and up.

  Starts false and flips after mount, so server and first client render agree
  (a hydration mismatch here would show as a flash of the wrong layout). The
  global ContextAPI already tracks `scrwidth`, but it only populates on resize
  after mount and re-renders every consumer on every resize event; a matchMedia
  listener fires only when the breakpoint is actually crossed.
*/
export function useIsDesktop(query = '(min-width: 768px)') {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [query]);

  return isDesktop;
}
