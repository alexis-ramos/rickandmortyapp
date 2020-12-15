import React from 'react';

const Search = () => (
  <div className='m-3'>
    <form className='relative  md:text-center'>
      <input
        className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-400 border border-gray-500 rounded-md py-2 pl-10 md:w-1/2 '
        type='text'
        aria-label='filtro nombres'
        placeholder='Puedes buscar por nombre'
      />
    </form>
  </div>
);

export default Search;
