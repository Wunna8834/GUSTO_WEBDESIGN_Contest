import React, { createContext, useState } from 'react'
import {TbClipboardPlus} from 'react-icons/tb'
import {CgMenu} from 'react-icons/cg'
import {FaUserCircle} from 'react-icons/fa'
import {MdOutlineNotificationsActive} from 'react-icons/md'
import {BsChatDots} from 'react-icons/bs'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import Logo from './Logo.png'
import { UserMenu } from '../UserMenu'

export const UserContext = createContext(false)
export const MainNav = () => {
  const nav_links = [
    {nav: "Home", directory: '/main'},
    {nav: "Products", directory: '/products'},
    
  ]
  const [navShow, setNavShow] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [show, setShow]= useState(false)
  return (
    <div>
      <nav className='relative w-full bg-blue-50'>
      <div className='w-full md:flex items-center justify-between md:px-10 px-7'>
        <Link to='/main' className=''>
          <img className='w-20 h-20' src={Logo} alt="" />
        </Link>
        <ul className={`${navShow? 'block' : "hidden"} md:flex md:items-center transition-opacity duration-300 ease-in-out`}>
          {nav_links.map(nav_link => 
            <li className='md:ml-8 mt-3 md:mt-0' key={nav_link.nav}>
              <Link to={nav_link.directory} onClick={() => {
                setActiveLink(nav_link.nav);
                setNavShow(false)
              }} className={`${activeLink === nav_link.nav? 'font-semibold text-slate-800' : ''} transition duration-500 ease-in-out`}>{nav_link.nav}</Link>
            </li>  
          )}
        <div className='md:ml-20 flex flex-col md:flex-row items-center justify-center md:gap-4'>
            <input type='text' className='hidden md:visible rounded-md md:px-2 md:py-2 w-72' placeholder='Search' />
            <button className='hidden md:block text-slate-700 text-[1.8rem]'>
                    <MdOutlineNotificationsActive />
            </button>
            
            <button className='hidden md:block text-slate-700 text-[1.8rem]'>
                <Link to="/create"><AiOutlinePlusCircle /></Link>
            </button>
          

        </div>
        <button onClick={() => setShow(true)} className='hidden md:block md:ml-20 text-3xl rounded-full text-black'>
          <Link><FaUserCircle /></Link>
        </button>
        </ul>
      </div>
      <button onClick={() => setNavShow(!navShow)} className='absolute right-6 text-2xl text-slate-400 hover:text-slate-200 cursor-pointer top-5 focus:ring-2 focus:ring-blue-200 md:hidden '>
        <CgMenu />
      </button>
      </nav>
      <UserContext.Provider value={{show, setShow}}>
        <UserMenu />
      </UserContext.Provider>
    </div>
  )
}
