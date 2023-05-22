import React, { useState } from 'react'
import {BsBookmarkPlus} from 'react-icons/bs'
import {BsBookmarkCheckFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const ProductCard = ({product, productID}) => {
  const [isSave, setIsSave] = useState(false)
  return (
    <div  className='relative md:w-64 w-[11rem] mb-6 group border rounded-sm shadow-md'>
        <div className='relative'>
            <div className='rounded-sm h-60'>
                <img className='group-hover:scale-105 focus:scale-105 origin-center ease-in duration-150 rounded-sm w-full h-full'  src={product.product_photo} alt="" />
            </div>
            <button onClick={() => setIsSave(!isSave)} className='absolute outline-none border-none text-gray-700 text-3xl top-1 right-0'>
                {isSave ? <BsBookmarkCheckFill className='text-blue-500'/> : <BsBookmarkPlus  />}
            </button>
        </div>
        <div className='mt-2 px-2'>
            <Link to={`/main/product_details/${productID}`}>
            <div className=''>
                <h1 className='font-bold'>{product.name}</h1>
                <p>{product.price}</p>
            </div>
            <p className='text-slate-500'>{product.description}</p>
            </Link>
            
        </div>
        <Link to={`/main/product_details/${productID}`}>
            <a className='underline ms-2 inline-block mt-2 text-slate-500 mb-3' href="#">Details</a>
        </Link>
    </div>
  )
}
