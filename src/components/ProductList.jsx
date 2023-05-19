import React from 'react'
import products from '../data/products.json'
import { ProductCard } from './cards/ProductCard'
export const ProductList = () => {
  return (
    <div className='md:px-20 mt-5'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Latest Products</h2>
            <a href="" className='underline text-slate-500'>See More</a>
        </div>

        <div className='grid grid-cols-4 gap-3'>
            {products.map(product => 
                <ProductCard key={product.id} product={product}/>   
            )}
        </div>
    </div>
  )
}
