import React from 'react'
import Star from '../cards/star.png'
export const SellerCard = ( {seller} ) => {
  return (
    <div className={`w-full transition hover:ease-in delay-75 hover:scale-110 hover:-rotate-6 h-auto md:w-80 bg-cover bg-center rounded-xl shadow-xl shadow-slate-700 pb-3`} style={{backgroundImage: `url(${seller.photo_url})`}}>
        <button className="inline-block mt-52 mx-3 cursor-pointer rounded-lg bg-cyan-500 px-2 py-2 text-center text-[0.5rem] font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-cyan-600">
            Best seller
        </button>
        <p className="font-bold text-white text-2xl mx-3 my-1">{seller.name}</p>
        <div className="flex mx-3">
          <img className='w-5' src={Star} alt="" />
          <img className='w-5' src={Star} alt="" />
          <img className='w-5' src={Star} alt="" />
          <img className='w-5' src={Star} alt="" />
          <img className='w-5' src={Star} alt="" />
        </div>
    </div>
  )
}
