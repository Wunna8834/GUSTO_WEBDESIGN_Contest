import React from 'react'
import Rocket from './Rocket.png'
import MoneyBag from './Money bag.png'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
    <div className="bg-[#F9F5F6] relative min-h-screen flex flex-col">
            <motion.div className="container rounded-lg max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2"
                initial={{y: "-100vh"}}
                animate={{y: 0}}
                transition={{delay: 1.1, duration: 0.5}}
            >
                <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
                    <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="fullname"
                        placeholder="Full Name" />

                    <input 
                        type="text"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="email"
                        placeholder="Email" />

                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="password"
                        placeholder="Password" />
                    <input 
                        type="password"
                        className="block border border-grey-light w-full p-3 rounded mb-4"
                        name="confirm_password"
                        placeholder="Confirm Password" />

                    <button
                        type="submit"
                        className="w-full text-center py-3 rounded bg-blue-500 hover:bg-blue-400 text-white hover:bg-green-dark focus:outline-none my-1"
                    ><Link to='/main'>Create Account</Link></button>

                    <div className="text-center text-sm text-grey-dark mt-4">
                        By signing up, you agree to the 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Terms of Service
                        </a> and 
                        <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                            Privacy Policy
                        </a>
                    </div>
                </div>

                <div className="text-grey-dark mt-6">
                    Already have an account? 
                    <a className="text-blue-600  underline cursor-pointer">
                        Log in
                    </a>.
                </div>
            </motion.div>
            <motion.div className='absolute bottom-0 right-0'
                initial={{x: "100vw", opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{delay: 1.5, duration: 0.8}}
            >
                <img className='w-24 md:w-80' src={Rocket} alt="" />
            </motion.div>
            <motion.div className='absolute top-0 left-0'
                initial={{x: "-100vw", opacity: 0}}
                animate={{x:0, opacity: 1}}
                transition={{delay: 1.5, duration: 0.8}}
            >
                <img className='w-24 md:w-48' src={MoneyBag} alt="" />
            </motion.div>
    </div>
  )
}
