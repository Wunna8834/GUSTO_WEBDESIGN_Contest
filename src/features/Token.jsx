import React, { useState } from 'react'
import ETH from  '../assets/ethereum.png'
import Coin from '../assets/coin.png'
import { MainNav } from '../components/navBars/MainNav'
export const Token = () => {
    const [eth, setETH] = useState(0)
  return (
    <div>
        <MainNav />
        <div className="py-4 px-6 max-w-lg sm:mx-auto">
    <h1 className="text-2xl font-semibold text-center my-4">Token Shop</h1>
    <p className="text-lg font-semibold py-3">Swap Token</p>
    <div className="flex justify-between items-center">
      <div>
        <p className="text-center py-2">You send</p>
        <input
          value={eth}
          onChange={(e) => setETH(e.target.value)}
          type="text"
          className="w-24 text-center font-semibold py-2"
          placeholder="     ETH"
        />
        <button
          className="flex gap-2 items-center rounded-lg cursor-pointer bg-gray-300 px-3 py-2 my-2 text-center text-base font-semibold transition duration-200 ease-in-out hover:bg-gray-500"
        >
          <img src={ETH} alt="etherium" className="w-6" /> ETH
        </button>
      </div>
      <div>
        <p className="py-2 text-center">You receive</p>
        <input
          value={(eth / 0.003)}
          type="text"
          className="w-24 text-center font-semibold py-2"
          placeholder="      Token"
        />
        <button
          className="flex gap-2 rounded-lg cursor-pointer bg-gray-300 px-3 py-2 my-2 text-center text-base font-semibold transition duration-200 ease-in-out hover:bg-gray-500"
        >
          <img src={Coin} alt="Token" className="w-6" />Token
        </button>
      </div>
    </div>
    <p className="text-xl font-semibold py-2">Payment Method</p>
    <p className="py-3">MetaMask Wallet</p>
    <div className="flex justify-between mb-5">
      <p>Rate</p>
      <p>0.003 ETH = 1 Token</p>
    </div>
    <button
      className="w-full inline-block shadow-lg rounded-full cursor-pointer bg-violet-600 px-3 py-4 text-center text-md font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
    >
      Buy Token
    </button>
  </div>
    </div>
  )
}
