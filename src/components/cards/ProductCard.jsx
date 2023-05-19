import React from 'react'

export const ProductCard = ({product}) => {
  
  return (
    <div className='w-64 h-[22rem] relative'>
        <div className='relative'>
            <div className='rounded-sm h-60'>
                <img className='rounded-sm h-full'  src={product.product_photo} alt="" />
            </div>
            <h1 className='absolute top-0 right-0'>Save</h1>
        </div>
        <div className='mt-2'>
            <div className='flex justify-between'>
                <h1 className='font-bold'>{product.name}</h1>
                <p>{product.price}</p>
            </div>
            <p>{product.description}</p>
            <a className='underline absolute left-0 bottom-0' href="#">Details</a>
        </div>
    </div>
  )
}
