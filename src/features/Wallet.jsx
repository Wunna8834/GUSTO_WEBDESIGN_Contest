import React from 'react'
import QR from '../assets/QR.jpg'
import { Link } from 'react-router-dom'
export const Wallet = () => {
  return (
    <div className='h-screen'>
        <h1 className="text-center text-3xl font-semibold my-2">Meta Mask</h1>
    
    <form
      className="w-96 h-screen bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 mx-auto"
    >
        <img src={QR} className="mx-auto w-full  mb-3" />
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Seller's wallet address
        </label>
        <div className='bg-white shadow-md px-3  py-3  rounded-lg w-full'>
            <p className='text-sm text-slate-500'>0x52A9c35b347Df4d3A64d0bAA3b5DfEAbcd</p>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Your wallet address
        </label>
        <div className='bg-white shadow-md px-3  py-3  rounded-lg w-full'>
            <p className='text-sm text-slate-500'>0x52A9c35b347Df4d3A64d0bAA356yY</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center justify-between">
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-3 focus:outline-none focus:shadow-outline rounded-full"
          type="button"
        >
          <Link to="/token">Buy</Link>
        </button>
        <button
          className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-3 focus:outline-none focus:shadow-outline rounded-full"
          type="button"
        >
          <Link to='/payment-success'>Send</Link>
        </button>
      </div>
    </form>
    </div>
  )
}
