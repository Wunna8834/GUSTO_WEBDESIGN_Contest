import React from 'react'
import { LandingNav } from '../components/navBars/LandingNav'
import { CTA_Btn } from '../components/buttons/CTA_Btn'
import './landing.css'
import { SecondaryCard } from '../components/cards/SecondaryCard'
import {Partnership} from '../components/Partnership'
import Connect from '../assets/Connect.png'
import Buy from '../assets/Buy.png'
import Sell from '../assets/Sell.png'
import { Footer } from '../components/footers/Footer'
import {motion} from 'framer-motion'
import { JoinBtn } from '../components/buttons/JoinBtn'
import { Link } from 'react-router-dom'
export const Landing = () => {
  return (
    <div>
        <div className="hero">
            <LandingNav />
            <motion.div className="w-full md:w-3/4 mx-auto mt-36 px-4 md:px-0"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{delay: 1.2, duration: 1.2}}
            >
                <h2 className="text-xl md:text-4xl font-medium">Unlock Limitless Possibilities: <br/> 
                    <span className='mt-5'>Embrace the Peer-to-Peer</span>
                </h2>
                <p className='mt-4 text-justify w-3/4 md:w-2/4'>There is no barrier for you. Whether you're an entrepreneur looking to launch your own business or a savvy consumer searching for unique products, our peer-to-peer market platform has got you covered. </p>
                <CTA_Btn  className="bg-violet-500 px-5 py-2 text-white mt-6 hover:bg-violet-700 active:bg-violet-700"
                    
                >
                    <Link to="/sign-up">Register for Free</Link>
                </CTA_Btn>
            </motion.div>
        </div>
        {/* Features */}
        <div className='w-full'>
            <motion.h2 className='text-center text-2xl font-medium'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 1.5, duration: 1.6}}
            >
                Why wasting time? <br/>
                There is no barrier for you
            </motion.h2>
            <motion.div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-5 mt-5'
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{delay: 1.2, duration: 0.7}}
            >
                {features.map(feature =>
                    <SecondaryCard key={feature.id}>
                        <div className='card hover:bg-slate-200 w-60 ps-4 pb-3'>
                            <img className='mx-auto w-28 h-28 mt-3' src={feature.photo} alt="" />
                            <h3 className='text-center text-lg font-medium mt-2'>{feature.name}</h3>
                            <p className='text-center text-slate-600 font-normal'>{feature.description}</p>
                        </div>
                    </SecondaryCard>    
                )}
            </motion.div>
            <Link to='/sign-up' className='flex justify-center'>
                <JoinBtn />
            </Link >
        </div>

        {/* Testimonials */}
        <div className='mt-8 mb-3'>
            <h3 className='text-center text-xl md:text-2xl font-medium'>
                Discover a world where the traditional <br/>
                limitations of commerce fade away.
            </h3>

            <div className='flex flex-wrap justify-center items-start gap-3 mt-5'>
                {testimonials.map(testimonial =>
                    <SecondaryCard key={testimonial.id}>
                        <div className='group outline outline-2 outline-sky-400 hover:bg-sky-400 hover:outline-slate-200 outline-offset-2 rounded-sm w-40 md:w-44 flex flex-col justify-center items-center py-4'>
                            <h4 className='group-hover:text-white font-semibold text-xl'>{testimonial.reach}</h4>
                            <p className='group-hover:text-white'>{testimonial.title}</p>
                        </div>
                    </SecondaryCard>    
                )}
            </div>
        </div>
        <Partnership />
        <Footer />
    </div>
  )
}

const features = [
    {id: 1, name: "Connect", photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684427406/Connect.png",  description: "Build a network in our community"},
    {id: 2, name: "Buy", photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684427734/Buy.png", description: "There is no third-party.Buy directly from the sellers."},
    {id: 3, name: "Sell", photo: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684427787/Sell.png", description: "Create sell posts and earn money. Start your business"},
]

const testimonials = [
    {
        id: 1,
        reach: "1K +",
        title: "Trusted Entrepreneurs"
    },
    {
        id: 2,
        reach: "10000 +",
        title: "Users",
    },
    {
        id: 3,
        reach: "1M +",
        title: "Listed Products",
    },
    {
        id: 2,
        reach: "10M +",
        title: "Profit for Users",
    },
]
