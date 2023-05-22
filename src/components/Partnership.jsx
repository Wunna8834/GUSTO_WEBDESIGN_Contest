import React from 'react'
import partnerships from '../data/partnerships.json'
export const Partnership = ( ) => {
  return (
    <div className='md:px-20 mt-5'>
        <h2 className='text-2xl font-semibold text-center'>Partnerships With Us</h2>
        <div className='flex flex-wrap justify-center gap-6 items-center'>
            {partnerships.map(partnership => 
                <img className='w-28' src={partnership.logo}/>    
            )}
        </div>
    </div>
  )
}
