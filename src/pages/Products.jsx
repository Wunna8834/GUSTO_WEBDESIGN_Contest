import React from 'react'
import { ProductList } from '../components/ProductList'
import sneakers from '../data/sneakers.json'
import casuals from '../data/casuals.json'
import { MainNav } from '../components/navBars/MainNav'
export const Products = () => {
  return (
    <div>
        <MainNav />
        <h2 className='font-medium text-center text-2xl mt-4'>Products</h2>
        <ProductList title="Sneakers" products={sneakers}/>
        <ProductList title="Casual Wears" products={casuals}/>
    </div>
  )
}
