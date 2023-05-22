import React from 'react'
import Logo from './Logo.png'
import { CTA_Btn } from '../buttons/CTA_Btn'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
export const LandingNav = () => {
  return (
    <motion.div
      initial={{y: -250}} 
      animate={{y: -10}}
      transition={{delay: 0.2, duration: 0.5, type: 'spring', stiffness: 100}}
      className='flex justify-between items-center px-6 md:px-14 pt-3'
    >
        <img src={Logo} className='w-20 h-20' alt="" />
        <Link to="/main">
          <CTA_Btn className="bg-violet-500 hover:bg-violet-700 active:bg-violet-700 px-5 py-2 text-white">
              Sign In
          </CTA_Btn>
        </Link>
    </motion.div>
  )
}
