import React from 'react'
import {motion} from 'framer-motion'
export const SecondaryCard = ( {children, className} ) => {
  return (
    <motion.div className={className}
      initial={{scale: 0.6}}
      whileInView={{scale: 0.9}}
      transition={{delay: 1.2, duration: 1.2}}
    >
        {children}
    </motion.div>
  )
}
