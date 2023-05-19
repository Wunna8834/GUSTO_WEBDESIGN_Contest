import React, { useState } from 'react'
import {TbClipboardPlus} from 'react-icons/tb'
import {CgMenu} from 'react-icons/cg'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {BsChatDots} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const MainNav = () => {
  const nav_links = [
    {nav: "Home", directory: '/main'},
    {nav: "Products", directory: ''},
    
  ]
  const [navShow, setNavShow] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  return (
    <nav className='relative w-full bg-[#F0F0F0]'>
      <div className='w-full md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-medium font-poppin text-2xl lg:text-2xl md:text-sm cursor-pointer'>
          Logo
        </div>
        <ul className={`${navShow? 'block' : "hidden"} md:flex md:items-center transition-opacity duration-300 ease-in-out`}>
          {nav_links.map(nav_link => 
            <li className='md:ml-8 mt-3 md:mt-0' key={nav_link.nav}>
              <Link to={nav_link.directory} onClick={() => {
                setActiveLink(nav_link.nav);
                setNavShow(false)
              }} className={`${activeLink === nav_link.nav? 'font-bold' : ''} transition duration-500 ease-in-out`}>{nav_link.nav}</Link>
            </li>  
          )}
        <div className='md:ml-20 flex flex-col md:flex-row items-center justify-center md:gap-4'>
            <input type='text' className='rounded-md md:px-2 md:py-2 w-72' placeholder='Search' />
            <button className='text-[1.8rem]'>
                    <MdOutlineNotificationsActive />
            </button>
            <button className='text-[1.6rem]'>
                    <BsChatDots />
            </button>

        </div>
        <button className='md:ml-20 text-3xl rounded-full text-black'>
          <FaUserCircle />
        </button>
        </ul>
      </div>
      <button onClick={() => setNavShow(!navShow)} className='absolute right-6 text-2xl text-slate-400 hover:text-slate-200 cursor-pointer top-5 focus:ring-2 focus:ring-blue-200 md:hidden '>
        <CgMenu />
      </button>

    </nav>
  )
}
