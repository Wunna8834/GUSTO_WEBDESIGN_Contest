import React from 'react';

const PostedCard = ({name, photo, price, description }) => {
  return (
    <div className="md:w-60 w-full rounded overflow-hidden shadow-lg">
      <img className="w-full h-80" src={photo} alt="Product" />
      <div className="px-6 py-4">
        <div className="mb-2 flex items-center justify-between">
          <p className='text-xl font-semibold'>{name}</p>
          <p>{price}</p>
        </div>
        <p className="text-slate-500 text-base">{description}</p>
      </div>
    </div>
  );
};

export default PostedCard;
