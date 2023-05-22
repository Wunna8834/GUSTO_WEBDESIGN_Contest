import React from 'react'
import { MainNav } from '../components/navBars/MainNav'
import { Link } from 'react-router-dom'

export const PostedPage = () => {
  return (
    <div>
        <MainNav/>
        <h3 className='text-center font-semibold text-3xl'>Overview</h3>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:mt-10'>
            <div>
                <img className='w-64' src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684748820/Bag.jpg"/>
           
            </div>
            <div className='md:w-96 w-full'>
                <div className='flex justify-between items-center w-full'>
                    <p className='font-medium text-3xl text-slate-900'>Backpack</p>
                    <p className='text-slate-600 font-medium'>0.0003ETH (50000Ks)</p>
                </div>
                <div>
                    <p className='mt-5 text-xl font-medium text-slate-700'>Description</p>
                    <p className='text-sm text-slate-500 text-justify'>
                    Whether you're a frequent traveler or a busy professional, the Blue Bag is designed to withstand the rigors of daily life. Its durable, high-quality materials ensure long-lasting performance, giving you peace of mind knowing that your belongings are well-protected.        </p>
                </div>
                <div>
                    <p className='mt-5 text-xl font-medium text-slate-700'>Payment Options</p>
                    <ul className='mt-2'>
                        <li className='text-slate-500'>Meta Mask</li>
                        <li className='text-slate-500'>KBZ Pay</li>
                    </ul>
                </div>
                <Link to='/successful'>
                <button className='block w-full bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded mb-8 md:mb-0 md:mt-10'>Post Now</button>
                </Link>
            </div>
            
        </div>
        
    </div>
  )
}
