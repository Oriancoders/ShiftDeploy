import { useEffect, useRef, useState } from 'react';

export default function useRafTicker(stepCount, intervalMs = 3000, enabled = true) {
  const [step, setStep] = useState(0);
  const frameRef = useRef();
  const lastTickRef = useRef(0);

  useEffect(() => {
    if (!enabled) {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = undefined;
      lastTickRef.current = 0;
      return;
    }

    const tick = (timestamp) => {
      if (document.visibilityState === 'hidden') {
        lastTickRef.current = timestamp;
        frameRef.current = requestAnimationFrame(tick);
        return;
      }

      if (!lastTickRef.current) {
        lastTickRef.current = timestamp;
      } else if (timestamp - lastTickRef.current >= intervalMs) {
        setStep((prev) => (prev < stepCount - 1 ? prev + 1 : 0));
        lastTickRef.current = timestamp;
      }

      frameRef.current = requestAnimationFrame(tick);
    };

    frameRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [enabled, intervalMs, stepCount]);

  return step;
}
