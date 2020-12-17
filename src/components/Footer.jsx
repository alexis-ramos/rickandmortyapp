import React from 'react';

const Footer = () => (
  <footer className='w-full text-white bg-gray-800'>
    <div className='md:flex md:flex-row-reverse justify-around'>
      <div className='ml-8'>
        <div className='hover:text-orange-400 transition ease-out duration-200 cursor-pointer'>
          <i className='fa fa-facebook'></i> @_YoSoySebas
        </div>
        <div className='hover:text-orange-400 transition ease-out duration-200 cursor-pointer'>
          <a href='https://www.alexisramos.dev' target='_blanck'>
            <i className='fa fa-twitter'></i> alexisramos.dev
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
