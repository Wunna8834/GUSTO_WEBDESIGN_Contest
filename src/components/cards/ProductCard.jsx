import React, { useState } from 'react'
import {BsBookmarkPlus} from 'react-icons/bs'
import {BsBookmarkCheckFill} from 'react-icons/bs'
export const ProductCard = ({product}) => {
  const [isSave, setIsSave] = useState(false)
  return (
    <div className='w-64 border border-red-400 mb-6'>
        <div className='relative'>
            <div className='rounded-sm h-60'>
                <img className='rounded-sm h-full'  src={product.product_photo} alt="" />
            </div>
            <button onClick={() => setIsSave(!isSave)} className='absolute text-2xl top-0 right-0'>
                {isSave ? <BsBookmarkCheckFill/> : <BsBookmarkPlus />}
            </button>
        </div>
        <div className='mt-2'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>{product.name}</h1>
                <p>{product.price}</p>
            </div>
            <p>{product.description}</p>
            <a className='underline inline-block mt-5 text-slate-500 border border-red-500' href="#">Details</a>
        </div>
    </div>
  )
}
