import React from 'react'
import {motion} from 'framer-motion'
export const JoinBtn = () => {
  return (
    <motion.button
        className="bg-violet-500 px-5 py-2 rounded text-white mt-6 hover:bg-violet-700 active:bg-violet-700"
        initial={{visibility: "hidden"}}
        whileInView={{visibility: "visible"}}
        transition={{delay: 1.8,duration: 1.5}}
    >Join Now
    </motion.button>
  )
}
