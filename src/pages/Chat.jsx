import React from 'react'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {IoSend} from 'react-icons/io5'
export const Chat = ({onClick}) => {
  return (
    <div
      className="absolute bottom-0 right-16 flex flex-col items-center justify-center max-w-xs h-screen text-gray-800 pt-10 pb-6"
    >
      <div
        className="flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden"
      >
        <div>
          <div className="bg-blue-400 flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg"
                alt=""
                className="w-10 h-10 rounded-full bg-center bg-cover my-3 ms-3 me-3"
              />

              <p className="font-bold text-white text-xl">Phone Pyae Htoo</p>
            </div>

            <AiOutlineCloseCircle onClick={onClick} className="me-7 cursor-pointer text-3xl text-slate-200" />
          </div>
        </div>

        <div className="flex flex-col flex-grow h-0 p-4 overflow-auto">
        
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <img
              src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg"
              className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
              alt="person"
            />
            <div className="">
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Hi I'd like to inquire about the availability of Sneakers.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>

          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>

          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <img
              src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg"
              className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
              alt="person"
            />
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none"> min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">Lorem ipsum dolor sit amet.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs">
            <img
              src="https://res.cloudinary.com/ddau1hn2z/image/upload/v1684471883/Edited2.jpg"
              className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300"
              alt="person"
            />
            <div>
              <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
                <p className="text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
          <div className="flex w-full mt-2 space-x-3 max-w-xs ml-auto justify-end">
            <div>
              <div
                className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg"
              >
                <p className="text-sm">Lorem ipsum dolor sit.</p>
              </div>
              <span className="text-xs text-gray-500 leading-none">2 min ago</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-300 w-full py-3 ps-4 flex gap-2 justify-between items-center">
          <input
            className="flex items-center h-10 w-[83%] rounded px-3 text-sm"
            type="text"
            placeholder="Type your message…"
          />
          <IoSend className="me-2 text-3xl text-blue-600" />
        </div>
      </div>
    </div>
  )
}
