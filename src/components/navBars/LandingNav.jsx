import React from 'react'
import Logo from './logo.jpg'
import { CTA_Btn } from '../buttons/CTA_Btn'
import { Link } from 'react-router-dom'
export const LandingNav = () => {
  return (
    <div className='flex justify-between items-center px-6 md:px-14 pt-3'>
        <img className='rounded-full w-12 h-12' src={Logo}/>
        <Link to="/main">
          <CTA_Btn className="bg-violet-500 hover:bg-violet-700 active:bg-violet-700 px-5 py-2 text-white">
              Sign In
          </CTA_Btn>
        </Link>
    </div>
  )
}
