import React from 'react';

const CardRickAndMortyItem = ({
  id,
  image,
  name,
  status,
  species,
  origin,
  location,
}) => (
  <div className='flex bg-red-400  mb-5'>
    <div className='flex-none w-1/2 relative'>
      <img
        className='absolute inset-0 w-full h-full object-cover'
        src={image}
        alt={name}
      />
    </div>
    <div className='w-1/2 text-center'>
      <div>
        <h1 className='font-semibold text-white text-4xl'>{name}</h1>
        <span className=''>
          <span className='bg-green-600'>s</span>
          {status} - {species}
        </span>
        <div className='pt-2'>
          <p className=' text-gray-700'>Origen</p>
          <p className='text-white'>{origin.name}</p>
        </div>
        <div className='pt-2'>
          <p className=' text-gray-700'>Locacion actual</p>
          <p className='text-white'>{location.name}</p>
        </div>
      </div>
    </div>
  </div>
);

export default CardRickAndMortyItem;
