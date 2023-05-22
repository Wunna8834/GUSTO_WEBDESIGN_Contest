import React, { useContext } from 'react'
import { UserContext } from './navBars/MainNav'
import {motion} from 'framer-motion'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {FaRegUser} from 'react-icons/fa'
import {BiEdit} from 'react-icons/bi'
import {MdOutlineGeneratingTokens} from 'react-icons/md'
import {BsBookmarkCheck} from 'react-icons/bs'
import {RiUserSettingsLine} from 'react-icons/ri'
import {CiLogout} from 'react-icons/ci'
import {BsActivity} from 'react-icons/bs'
import { Link } from 'react-router-dom'
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "100vw" },
}
export const UserMenu = ({handleHide}) => {
  const {show, setShow} = useContext(UserContext)
  const items = [
    {
      id: 1,
      name: "Profile",
      icon: <FaRegUser />,
      directory: "/myprofile"
    },
    {
      id: 2,
      name: "Edit Profile",
      icon: <BiEdit />,
    },
    {
      id: 3,
      name: "Tokens",
      icon: <MdOutlineGeneratingTokens/>,
      directory: "/token"
    },
    {
      id: 4,
      name: "Bookmarks",
      icon: <BsBookmarkCheck />,
    },
    {
      id: 5,
      name: "Recent Activites",
      icon: <BsActivity />
    },
    {
      id: 6,
      name: "Account Setting",
      icon: <RiUserSettingsLine />,
    },
    {
      id: 7,
      name: "Sign Out",
      icon: <CiLogout />,
    },
  ]
  return (
    <motion.div className={`absolute ${show ? "visible" : "hidden"} w-64 top-0 right-0 rounded-s-md shadow-lg bg-[#454545] h-screen z-40`}
    animate={show ? "open" : "closed"}
    variants={variants}
    transition={{type: 'tween', delay: 0.2 }}
    >
        <div className='text-gray-50 p-4 flex justify-between'>
          <h2 className='font-semibold text-xl'>Wuna Aung</h2>
          <button className='text-3xl duration-300 hover:font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' onClick={() => setShow(false)}>
            <AiOutlineCloseCircle />
          </button>
        </div>
        <ul className='mt-8 w-full inline-block'>
          {items.map(item => 
              <Link to={item.directory}>
                <li onClick={() =>setShow(false)} key={item.id} className='group hover:bg-neutral-700 py-2 transition-all flex items-center gap-2 font-medium mb-6 hover:text-white cursor-pointer'>
                <div className='group-hover:text-white group-hover:translate-x-6 focus:translate-x-6 duration-100 flex ms-4 items-center gap-3 text-gray-400'>
                  <span>{item.icon}</span>
                  <p>{item.name}</p>  
                </div> 
                </li>  
              </Link>
          )}
        </ul>
        <div className='text-slate-300 underline text-sm leading-normal text-center mt-10'>
          <p>Terms & Conditions</p>
          <p>Policy</p>
        </div>
        
    </motion.div>
  )
}
