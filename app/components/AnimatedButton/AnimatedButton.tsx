import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedButtonProps {
  children: ReactNode;
  onClick: () => void;
}

export default function AnimatedButton({ children, onClick }: AnimatedButtonProps) {
  const buttonClasses = "relative overflow-hidden px-6 py-3 bg-primary text-white rounded-[15px] cursor-pointer font-semibold focus:outline-none text-xl";
  
  const borderAnimation = {
    initial: {
      opacity: 0,
      x: 0,
      y: 0,
      width: 0,
      height: 0
    },
    hover: {
      opacity: 1,
      x: 0,
      y: 0,
      width: '100%',
      height: '100%'
    }
  };

  const transitionSettings = {
    type: 'spring',
    stiffness: 300
  };

  const borderTransition = {
    opacity: { duration: 0.3 },
    width: { duration: 0.8, ease: "easeInOut" },
    height: { duration: 0.8, ease: "easeInOut" }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1, backgroundColor: '#012227' }}
      whileTap={{ scale: 0.95 }}
      className={buttonClasses}
      onClick={onClick}
      transition={transitionSettings}
    >
      <motion.div
        className="absolute inset-0 border-2 border-primary"
        initial={borderAnimation.initial}
        whileHover={borderAnimation.hover}
        transition={borderTransition}
      />
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}