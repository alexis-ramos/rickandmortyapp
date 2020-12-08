import React from 'react';

const CardRickAndMortyItem = () => (
  <div className='flex bg-red-400  '>
    <div className='flex-none w-1/2 relative'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src='https://picsum.photos/seed/picsum/200/300'
        alt='img'
      />
    </div>
    <div className='w-1/2 text-center'>
      <div>
        <h1 className='font-semibold text-white text-4xl'>Nombre</h1>
        <span className=''>
          <span className='bg-green-600'>s</span>
          Vivo - Alien
        </span>
        <div className='pt-2'>
          <p className=' text-gray-700'>de</p>
          <p className='text-white'>ded</p>
        </div>
        <div className='pt-2'>
          <p className=' text-gray-700'>de</p>
          <p className='text-white'>ded</p>
        </div>
      </div>
    </div>
  </div>
);

export default CardRickAndMortyItem;
