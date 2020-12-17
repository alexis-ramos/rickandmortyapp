import React from 'react';

const CardRickAndMortyItem = ({
  id,
  image,
  name,
  status,
  species,
  origin,
  location,
}) => {
  let setStatus = '';

  if (status === 'Alive') {
    setStatus = (
      <span className=' w-3 h-3 mr-1 self-center bg-green-600 rounded-full'></span>
    );
  } else if (status === 'Dead') {
    setStatus = (
      <span className=' w-3 h-3 self-center mr-1 bg-red-600 rounded-full'></span>
    );
  } else {
    setStatus = (
      <span className=' w-3 h-3 mr-1 self-center bg-gray-600 rounded-full'></span>
    );
  }
  return (
    <div className='flex rounded-xl bg-indigo-300 m-3  md:inline-block md:mx-2'>
      <div className='w-1/2 md:m-1 md:w-full '>
        <img
          className='w-50 h-auto rounded-xl md:rounded-full'
          src={image}
          alt={name}
        />
      </div>
      <div className=' h-full w-1/2 text-center md:h-auto md:pb-8 self-center  md:pt-3 md:w-full'>
        <h1 className='text-lg md:w-full md:text-center font-extrabold'>
          {name}
        </h1>
        <span className='flex-wrap  inline-flex text-white'>
          {setStatus}
          {status} - {species}
        </span>
        <div className='pt-2'>
          <p className='text-lg md:text-lg font-extrabold'>Origen</p>
          <p className='text-white'>{origin.name}</p>
        </div>
        <div className='pt-2'>
          <p className='text-lg md:text-lg font-extrabold'>Locacion actual</p>
          <p className='text-white'>{location.name}</p>
        </div>
      </div>
    </div>
    /* detectScrollEnd = () => {
      const contentHeight = document.body.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;
      if (scrollPosition >= contentHeight) {
        if (this.state.nextPage < 26) {
          this.fetchCharacters();
        }
      } */
  );
};

export default CardRickAndMortyItem;
