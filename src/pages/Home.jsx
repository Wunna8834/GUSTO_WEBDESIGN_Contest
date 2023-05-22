import React from 'react'
import { MainNav, UserContext } from '../components/navBars/MainNav'
import { BestSellers } from '../components/BestSellers'
import { Slideshow } from '../components/Slideshow'
import { ProductList } from '../components/ProductList'
import {Footer} from '../components/footers/Footer'
import { Partnership } from '../components/Partnership'
import { UserMenu } from '../components/UserMenu'
import products from '../data/products.json'
export const Home = () => {
  return (
    <div className=''>
        <MainNav/>
        <Slideshow />
        <BestSellers />
        <ProductList title="Latest Product" products={products}/>
        <Partnership />
        <Footer />
    </div>
  )
}
