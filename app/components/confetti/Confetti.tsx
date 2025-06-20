'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

interface ConfettiProps {
  active: boolean;
}

const Confetti = ({ active }: ConfettiProps) => {
  useEffect(() => {
    if (!active) return;

    // Fire confetti from the center
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });

    // Side bursts
    const timer = setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);

    return () => clearTimeout(timer);
  }, [active]);

  return null;
};

export default Confetti;