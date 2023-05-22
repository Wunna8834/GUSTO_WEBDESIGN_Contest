import React from 'react'

export const Footer = () => {
  return (
    <div className="bg-footer md:px-40 py-20 md:py-28">
        <p className='text-slate-300'>Do you have any question? <a className="underline" href="#">Contact Us</a></p>
        <div className='w-full md:w-1/2 flex flex-wrap gap-3 text-slate-300 mt-10'>
            <a className="underline" href="#">Terms & Conditions</a>
            <a className="underline" href="#">Cookies Policy</a>
            <a className="underline" href="#">Refund Policy</a>
            <a className="underline" href="#">Payment Methods</a>
            <a className="underline" href="#">Privacy</a>
            <a className="underline" href="#">FAQ</a>
            <a className="underline" href="#">Jobs</a>
            <a className="underline" href="#">Tokens</a>
        </div>
        <p className='text-slate-300 font-medium mt-5'>HND-43 Group 3</p>
    </div>
  )
}
