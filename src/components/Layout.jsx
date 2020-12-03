import React from 'react';
import CardRickAndMortyItem from './CardRickAndMortyItem';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => (
  <div className='Home'>
    <Header />
    {children}
    <Footer />
    <CardRickAndMortyItem />
  </div>
);

export default Layout;
