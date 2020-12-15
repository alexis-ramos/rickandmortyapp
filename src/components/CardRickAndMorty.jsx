import React from 'react';

const CardRickAndMorty = ({ children }) => (
  <section
    id='idRickAndMorty'
    className='container text-center mx-auto my-auto md:justify-items-center'
  >
    {children}
  </section>
);

export default CardRickAndMorty;
