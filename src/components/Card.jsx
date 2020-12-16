import React from 'react';

const Card = ({ children }) => (
  <section>
    <div>
      <div className='cardTitle text-center'>
        <h4 className='font-bold text-2xl mt-5 mb-5 md:text-6xl'>
          Rick&Morty API- React - Tailwind
        </h4>
      </div>
    </div>
    <div>
      <div className='row bg-gray-700'>
        <div className='md:flex cardItem'>{children}</div>
      </div>
    </div>
  </section>
);

export default Card;
