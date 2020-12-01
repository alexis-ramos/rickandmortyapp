import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full text-white bg-gray-800'>
      <div className='md:flex md:flex-row-reverse justify-around'>
        <div className='mt-4 ml-8'>
          <div className='hover:text-orange-400 transition ease-out duration-200 cursor-pointer'>
            <i className='fa fa-facebook'></i> @alexisramos
          </div>
          <div className='hover:text-orange-400 transition ease-out duration-200 cursor-pointer'>
            <i className='fa fa-twitter'></i> @alexisramos
          </div>
          <div className='hover:text-orange-400 transition ease-out duration-200 cursor-pointer'>
            <i className=' fa fa-instagram'></i> @alexisramos
          </div>
        </div>

        <ul className='mt-4 mb-4 ml-8  md:list-disc'>
          <li>Soporte</li>
          <li>Registro</li>
          <li>Aviso de privacidad</li>
          <li>Acerca de nosotros</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
