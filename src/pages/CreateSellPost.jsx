import React from 'react'
import { MainNav } from '../components/navBars/MainNav'
import { Link } from 'react-router-dom'
export const CreateSellPost = () => {
  return (
    <div>
      <MainNav/>
      <div className="flex justify-center">
      {/* <MainNav/> */}
      <div
        className="w-[40rem] rounded-lg shadow-lg border border-gray-300 mt-4 pt-10 pb-7 px-8"
      >
        <h1 className="text-xl font-semibold text-gray-500 text-center">
          Creating Sell Post
        </h1>


        <div className="sm:flex mt-4">
          <div>
            <div className="w-36">
              <img src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684748820/Bag.jpg"/>
            </div>
            <label className="block mb-2 sm:mb-0 sm:mt-1">
              <span className="sr-only">Choose File</span>
              <input
                type="file"
                className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"
              />
            </label>
          </div>
          <div className="w-full sm:w-[60%]">
            <div className="w-full flex sm:mb-1 gap-2 flex-col">
              <label for="itemName">Name</label>
              <input
                className="h-10 rounded px-3 text-sm border border-gray-400"
                type="text"
                id="itemName"
                placeholder="Type item name…"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label for="itemprc">Price</label>
              <input
                className="h-10 rounded px-3 text-sm border border-gray-400"
                type="text"
                id="itemprc"
                placeholder="Set your Price…"
              />
            </div>
            <div className="flex gap-1 flex-col">
              <label for="itemDesc">Item Description</label>
              <textarea
                id="itemDesc"
                name="itemDesc"
                rows="2"
                cols="10"
                placeholder="Enter description"
                className="border p-1 rounded border-gray-400"
              >
              </textarea>
            </div>
            <div className='mt-2'>
              <h2 className='font-medium'>Choose payment options you want to deserve</h2>
                  <div className='mt-2 flex gap-1'>
                      <input id="metaMask" type="checkbox" />
                      <label htmlFor="metaMask">Meta Mask</label>
                      <input id="visa" type="checkbox" />
                      <label htmlFor="visa">Visa</label>
                      <input id="kPay" type="checkbox" />
                      <label htmlFor="kPay">K Pay</label>
                      <input id="ayaPay" type="checkbox" />
                      <label htmlFor="ayaPay">AYA Pay</label>
                      

                  </div>
            </div>
            <div className="flex justify-between mt-3">
              
              <button
                  className="inline-block rounded-full cursor-pointer bg-violet-600 px-8 py-1 text-center text-base font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
                >
                <Link to='/posted'>Post</Link>
              </button>
              

              <button
                className="inline-block rounded-full cursor-pointer bg-slate-300 px-5 py-2 text-center text-base font-semibold text-gray-500 transition duration-200 ease-in-out hover:bg-gray-300"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
