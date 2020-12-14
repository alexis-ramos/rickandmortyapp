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
  <div className='flex rounded-xl p-3 md:inline-block md:mx-2'>
    <div className='w-1/2 md:w-full'>
      <img
        className='w-50 h-auto rounded-xl md:w-44 md:h-44 md:rounded-full'
        src={image}
        alt={name}
      />
    </div>
    <div className='text-center w-1/2 md:w-full'>
      <h1 className=''>{name}</h1>
      <span className=''>
        <span className=''>s</span>
        {status} - {species}
      </span>
      <div className='pt-2'>
        <p className=''>Origen</p>
        <p className=''>{origin.name}</p>
      </div>
      <div className=''>
        <p className=''>Locacion actual</p>
        <p className=''>{location.name}</p>
      </div>
    </div>
  </div>
);

export default CardRickAndMortyItem;
