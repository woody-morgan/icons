'use client';

import type { Transition } from 'framer-motion';
import { motion, useAnimation } from 'framer-motion';

const defaultTransition: Transition = {
  type: 'spring',
  stiffness: 250,
  damping: 25,
};


const CircleChevronRight = () => {
  const controls = useAnimation();

  return (
    <div
      className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
      onMouseEnter={() => controls.start('animate')}
      onMouseLeave={() => controls.start('normal')}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <motion.path
           variants={{
            normal: { translateX: '0%' },
            animate: { translateX: '2px' },
          }}
          transition={defaultTransition}
          animate={controls}
          d="m10 8 4 4-4 4"
        />
      </svg>
    </div>
  );
};

export { CircleChevronRight };
