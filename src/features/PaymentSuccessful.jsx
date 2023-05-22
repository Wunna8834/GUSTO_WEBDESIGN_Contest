import React, {useState, useEffect} from 'react'
import Correct from '../assets/correct.png'
import { Home } from '../pages/Home'
import {motion} from 'framer-motion'

const Animation = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="rounded-lg shadow-lg border border-gray-300 w-80 px-5 py-3"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        transition={{delay: 1.5, duration: 2, type: "spring", stiffness: 100}}
      >
        <motion.img
          src={Correct}
          className="mx-auto w-24 h-24"
          alt=""
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.p
          className="text-2xl font-semibold text-center mt-3 pb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Payment Successful
        </motion.p>
      </motion.div>
    </div>
  );
};

// const Animation = () => {
//     return(
//         <div className="flex justify-center items-center h-screen">
//       <div className="rounded-lg shadow-lg border border-gray-300 w-[40rem] px-5 py-3">
//         <img src={Correct} className="mx-auto w-24 h-24" alt="" />
//         <p className="text-2xl font-semibold text-center pb-6">
//           Payment Successful
//         </p>
//       </div>
//     </div>
//     )
// }
export const PaymentSuccessful = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 2000);
  
      return () => clearTimeout(timeout);
    }, []);
  return (
    <div>{loading? <Animation /> : <Home />}</div>
  )
}
