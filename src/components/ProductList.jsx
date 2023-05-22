import React from 'react'

import { ProductCard } from './cards/ProductCard'
export const ProductList = ({title, products}) => {
  return (
    <div className='md:px-20 mt-5'>
        <div className='flex justify-between items-center'>
          <h2 className='text-2xl font-semibold text-center'>{title}</h2>
            <a href="" className='underline text-slate-500'>See More</a>
        </div>

        <div className='flex justify-between md:items-center flex-wrap mt-3'>
            {products.map(product => 
                <ProductCard key={product.id} productID={product.id} product={product}/>   
            )}
        </div>
    </div>
  )
}
