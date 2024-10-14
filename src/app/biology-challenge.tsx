'use client'

import { motion } from 'framer-motion'

export default function BiologyChallengelogo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.svg
        width="300"
        height="200"
        viewBox="0 0 300 200"
        initial="logo"
        whileHover="trex"
        animate="logo"
        className="cursor-pointer"
        aria-labelledby="logo-title"
        role="img"
      >
        <motion.g transition={{ duration: 0.5 }}>
          {/* Logo Text */}
          <motion.text
            x="150"
            y="100"
            textAnchor="middle"
            fontSize="24"
            fontWeight="bold"
            fill="#2c3e50"
            variants={{
              logo: { opacity: 1, scale: 1 },
              trex: { opacity: 0, scale: 0 }
            }}
          >
            Biology Challenge
          </motion.text>

          {/* DNA Helix */}
          <motion.path
            d="M100,50 Q150,0 200,50 T300,50"
            fill="none"
            stroke="#3498db"
            strokeWidth="4"
            variants={{
              logo: { pathLength: 1, opacity: 1 },
              trex: { pathLength: 0, opacity: 0 }
            }}
          />
          <motion.path
            d="M100,150 Q150,100 200,150 T300,150"
            fill="none"
            stroke="#e74c3c"
            strokeWidth="4"
            variants={{
              logo: { pathLength: 1, opacity: 1 },
              trex: { pathLength: 0, opacity: 0 }
            }}
          />

          {/* T-Rex */}
          <motion.path
            d="M50,150 L100,100 L150,150 L200,100 L250,150 L270,120 L280,150 L290,140 L300,150 L290,160 L270,150 L250,180 L200,150 L150,200 L100,150 L50,200 L30,150 L20,160 L10,150 L20,140 L30,150 Z"
            fill="#2c3e50"
            variants={{
              logo: { pathLength: 0, opacity: 0 },
              trex: { pathLength: 1, opacity: 1 }
            }}
          />
        </motion.g>
      </motion.svg>
    </div>
  )
}