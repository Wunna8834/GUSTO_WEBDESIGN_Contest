import React from 'react'
import { SellerCard } from './cards/SellerCard'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/scrollbar'
import { Scrollbar, A11y } from 'swiper'
export const BestSellers = () => {
  const sellers = [
    {
        id: 1,
        name: "Aye Maung",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg"
    },
    {
        id: 2,
        name: "Zin Maung",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684483370/BestSeller1.jpg"
    },
    {
        id: 3,
        name: "Aye Nyein",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471479/Seller3.jpg"
    },
    {
        id: 4,
        name: "Yin Htay",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684484086/BestSeller2.jpg"
    },
    {
        id: 5,
        name: "Kyal Sin",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684484215/BestSeller5.jpg"
    },
    {
        id: 6,
        name: "Yu Ya",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684503695/BestSeller6.jpg"
    },
    {
        id: 7,
        name: "Kathy",
        photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684503874/BestSeller7.jpg"
    },
  ]
  return (
    <div className='md:px-20 mt-5 -z-50'>
        <div className='flex justify-between items-center'>
            <h2 className='text-2xl font-semibold'>Top Sellers</h2>
            <a href="" className='underline text-slate-500'>See More</a>
        </div>
        {/* <div className='flex flex-wrap md:flex-nowrap gap-2 mt-4'>
            {sellers.map(seller => 
                <SellerCard 
                    key={seller.id}
                    seller={seller}
                />    
            )}
        </div> */}
        <Swiper
            className='rounded-t-lg'
            modules={[Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={4}
            scrollbar={{draggable: true}}
            breakpoints={{
                375: {
                    slidesPerView: 2
                },
                640: {
                    slidesPerView: 4
                }
            }}
        >
            {sellers.map(seller => 
                <SwiperSlide key={seller.id}>
                    <SellerCard seller={seller}/>
                </SwiperSlide>    
            )}
        </Swiper>
    </div>
  )
}
