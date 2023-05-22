import React from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import KBZ from '../assets/KBZ.png'
import AYA from '../assets/AYA.png'
import MetaMask from '../assets/MetamaskLogo.png'
import Visaa from '../assets/Visaa.png'
import { Link } from 'react-router-dom'
export const Payment = ({onClick, totalPrice}) => {
  return (
    <div className="flex absolute top-0 w-screen h-full border md:w-full md:h-full backdrop-filter backdrop-blur-lg backdrop-brightness-75 backdrop-contrast-125 backdrop-grayscale-50 justify-center my-[0.1rem]">
      <div
        className="rounded-lg shadow-lg  bg-zinc-50 h-max my-20 lg:w-[40rem]"
      >
        <div className="md:px-4 px-7 py-5">

          <div className="flex flex-col mb-0">
            
            <div onClick={onClick} className="flex text-4xl text-zinc-600 font-thin gap-4 items-center cursor-pointer">
              <AiOutlineCloseCircle />
            </div>

            <div className="mx-auto mb-1">
              <h1 className="text-2xl font-semibold text-gray-500">
                Payment Options
              </h1>
            </div>
          </div>

        
          <div className="flex lg:gap-5 mt-7">
            <div className="w-32 h-40 sm:w-44 sm:h-auto mx-auto md:mx-2">
              <img
                src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684520173/SizeChanges.png"
                alt="Shirt"
                className="w-full h-full"
              />
            </div>

            <div className="lg:mt-16">
              <div
                className="flex gap-2"
              >
                <p className="text-base font-semibold text-gray-600">Total</p>
                <p className="text-base font-semibold text-gray-500">
                  {totalPrice}
                </p>
              </div>

              <p className="text-lg font-semibold text-gray-500">Choose Payment</p>
              <div className="flex flex-col lg:flex-row gap-2 items-center my-2">
                
                <div className="flex gap-2">
                <div className="w-12 h-12">
                    <img src={Visaa} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12">
                    <img src={MetaMask} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12">
                    <img src={KBZ} alt="" className="w-full h-full" />
                  </div>
                  <div className="w-12 h-12">
                    <img
                      src={AYA}
                      alt=""
                      className="w-full h-full"
                    />
                  </div>
                </div>

                
                <div className="flex gap-6">
                  <div className="w-12">
                    <img src="./img/KBZpay.png" alt="" className="w-full" />
                  </div>
                  <div className="w-16">
                    <img
                      src="./img/ayalogo1Square.png"
                      alt=""
                      className="bg-transparent w-full"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="inline-block w-full mx-auto rounded-md cursor-pointer bg-violet-600 px-2 py-3 text-center text-md font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
                >
                  <Link to='/wallet'>Make Payment</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
