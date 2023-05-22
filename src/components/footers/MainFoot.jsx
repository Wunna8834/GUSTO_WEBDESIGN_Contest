import React from 'react';
import { BiUser } from 'react-icons/bi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';

export const MainFoot = () => {
  return (
    <div className='w-full md:hidden text-2xl text-white bg-black py-4 flex flex-row justify-center items-center gap-10 sticky bottom-0 z-50'>
      <BsSearch/>
      <AiOutlinePlusCircle/>
      <BiUser/>
    </div>
  );
};
