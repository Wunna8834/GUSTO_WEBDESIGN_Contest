import React from 'react'
import {motion} from 'framer-motion'
export const CTA_Btn = ( {children, className} ) => {
  return (
    <motion.button className={`rounded-md ${className}`}
      whileHover={{scale: 1.1, boxShadow: "0px 0px 8px rgba(255, 255, 255)"}}
    >
        {children}
    </motion.button>
  )
}
