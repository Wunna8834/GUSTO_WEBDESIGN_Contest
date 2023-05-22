import React from 'react'
import { MainNav } from '../components/navBars/MainNav'
import MyPhoto from '../assets/John.png'
import PostedCard from '../components/cards/PostedCard'
export const MyProfile = () => {
  return (
    <div>
      <MainNav />
      <div className="p-5 max-w-[1300px] mx-auto">
      <div className="">
        <img
          src={MyPhoto}
          alt=""
          className="w-40 rounded-full my-4 mx-auto bg-cover"
        />
        <p className="text-4xl font-medium text-center text-slate-600">Wunna</p>
        <div className="flex justify-center my-2">
          <img src="./img/Star1.png" alt="" className="" />
          <img src="./img/Star1.png" alt="" className="" />
          <img src="./img/Star1.png" alt="" className="" />
          <img src="./img/Star1.png" alt="" className="" />
          <img src="./img/Star1.png" alt="" className="" />
        </div>
      </div>
      <hr className="w-[90%] mx-auto h-[1px] bg-slate-300" />

      <div className="w-[70%] mx-auto">
        <h1 className="text-2xl text-gray-500 text-center font-semibold mt-2">
          About
        </h1>
        <div className="lg:w-[65%] lg:mx-auto">
          <p className="py-3">
            Hello! I am Wunna Aung. If you want to buy computer related products, contact me.
          </p>
        </div>

        <div
          className="flex flex-col items-center justify-center md:flex-row gap-5"
        >
          <button
            className="w-40 shadow-md inline-block rounded-full cursor-pointer bg-violet-500 px-3 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-600"
          >
            Message
          </button>
          <button
            className="w-40 shadow-md inline-block rounded-full cursor-pointer bg-violet-500 px-3 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-600"
          >
            Share Profile
          </button>
        </div>
        <div>
          <h3 className='font-semibold text-xl'>Recent Posts</h3>
          <div className='mt-4 flex flex-col md:flex-row gap-4'>
            <PostedCard photo="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684748820/Bag.jpg"
              name="Backpack"
              price="50000 Ks"
              description="Whether you're a frequent traveler or a busy professional, the Blue Bag is designed to"
            />
            <PostedCard 
              photo="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684731193/Dunk.png"
              name="Nike Dunk"
              price="800000 Ks"
              description="ခြေလှမ်းတိုင်းအတွက် Dunk"
            />
          </div>
        </div>
      </div>
      
    </div>
      
    </div>
  )
}
