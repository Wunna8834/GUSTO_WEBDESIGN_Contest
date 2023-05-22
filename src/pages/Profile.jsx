import React from 'react'

export const Profile = () => {
  return (
    <div class="p-5 max-w-[1300px] mx-auto">
      <div class="">
        <img
          src="./img/FirstChatProfile.png"
          alt=""
          class="w-40 rounded-full my-4 mx-auto bg-cover"
        />
        <p class="text-4xl font-medium text-center text-slate-600">Aye Kyi</p>
        <div class="flex justify-center my-2">
          <img src="./img/Star1.png" alt="" class="" />
          <img src="./img/Star1.png" alt="" class="" />
          <img src="./img/Star1.png" alt="" class="" />
          <img src="./img/Star1.png" alt="" class="" />
          <img src="./img/Star1.png" alt="" class="" />
        </div>
      </div>
      <hr class="w-[90%] mx-auto h-[1px] bg-slate-300" />

      <div class="w-[70%] mx-auto">
        <h1 class="text-2xl text-gray-500 text-center font-semibold mt-2">
          About
        </h1>
        <div class="lg:w-[65%] lg:mx-auto">
          <p class="py-3">
            Yo, folks! I'm Aye Kyi. If you want high-quality products, you can
            buy at me.
          </p>
        </div>

        <div
          class="flex flex-col items-center justify-center md:flex-row gap-5"
        >
          <button
            class="w-40 inline-block rounded-full cursor-pointer bg-violet-600 px-3 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
          >
            Message
          </button>
          <button
            class="w-40 inline-block rounded-full cursor-pointer bg-violet-600 px-3 py-3 text-center text-sm font-semibold text-white transition duration-200 ease-in-out hover:bg-violet-800"
          >
            Share Profile
          </button>
        </div>
      </div>
    </div>
  )
}
