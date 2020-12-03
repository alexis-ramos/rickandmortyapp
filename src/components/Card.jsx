import React from 'react';

const Card = ({ children }) => (
  <section>
    <div>
      <div className='row'>
        <div className='cardTitle'>
          <h4>Rik&Morty APP REACT</h4>
        </div>
      </div>
    </div>
    <div>
      <div className='row'>
        <div className='md:flex cardItem'>{children}</div>
      </div>
    </div>
  </section>
);

export default Card;
