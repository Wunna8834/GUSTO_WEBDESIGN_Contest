import React from 'react'
import { MainNav } from '../components/navBars/MainNav'
import { BestSellers } from '../components/BestSellers'
import { Slideshow } from '../components/Slideshow'
import { ProductList } from '../components/ProductList'

export const Home = () => {
  return (
    <div className='bg-black-300'>
        <MainNav/>
        <Slideshow />
        <BestSellers />
        <ProductList />
    </div>
  )
}
