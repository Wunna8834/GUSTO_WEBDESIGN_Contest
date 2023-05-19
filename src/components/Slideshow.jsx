import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import {Navigation, Pagination, A11y, Autoplay} from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
export const Slideshow = () => {
  const slides = [
    {
      id: 1,
      name: "Zara Shirt",
      price: 150000,
      photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684510289/LevisShirt.jpg"
    },
    {
      id: 2,
      name: "Zara Jean",
      price: 150000,
      photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684510646/ZaraJean.jpg"
    },
    {
      id: 3,
      name: "Air Jordan",
      price: 10000,
      photo_url: "https://res.cloudinary.com/ddau1hn2z/image/upload/v1684510892/AirJordan.png"
    },
  ]
  return (
    <div className=''>
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        pagination={{clickable: true}}
        loop={true}
        autoplay={{delay: 3000}}

      >
        {slides.map(slide => 
          <SwiperSlide className='flex justify-center items-center bg-[#FFFAF4]'>
            <div className='relative w-96 md:w-2/3' style={{height: "70vh", backgroundImage: `url(${slide.photo_url})`,backgroundSize: "cover"}}>
              <h1 className='absolute top-0 left-0 font-medium text-xl'>Trending Product</h1>
              <div className='absolute left-0 bottom-0 px-5 py-2 bg-[#5f6262]'>
                <h2 className='text-4xl font-bold text-white'>{slide.name}</h2>
                <p className='text-lg font-medium text-amber-50'>{slide.price}</p>
              </div>
            </div>

          </SwiperSlide> 
        )}
      </Swiper>
    </div>
  )
}
