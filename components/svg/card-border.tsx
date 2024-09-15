import { motion } from 'framer-motion';
import { FC } from 'react';

import { SVGProps } from './svg.types';

const CardBorder: FC<Omit<SVGProps, 'maxWidth' | 'maxHeight'>> = (props) => (
  <svg
    viewBox="0 0 630 646"
    height="100%"
    width="100%"
    fill="none"
    {...props}
    preserveAspectRatio="none"
  >
    <rect
      x="1.5"
      y="1.5"
      rx="13.5"
      width="626"
      height="643"
      strokeWidth="3"
      stroke="url(#paint0_linear_1655_1708)"
    />
    <defs>
      <motion.linearGradient
        x1="0"
        y1="0"
        x2="629"
        y2="646"
        id="paint0_linear_1655_1708"
        gradientTransform="rotate(0)"
        animate={{
          gradientTransform: ['rotate(0)', 'rotate(359)'],
          originX: 0.6,
          originY: 0.3,
          transition: {
            duration: 8,
            repeat: Infinity,
          },
        }}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9FECFEAA" />
        <stop offset="0.5" stopColor="#9FECFE11" />
        <stop offset="1" stopColor="#9FECFEAA" />
      </motion.linearGradient>
    </defs>
  </svg>
);

export default CardBorder;
