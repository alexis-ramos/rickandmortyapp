// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardRickAndMorty from '../components/CardRickAndMorty';
import CardRickAndMortyItem from '../components/CardRickAndMortyItem';
import LoadMore from '../components/LoadMore';
import Search from '../components/Search';
import useInitialState from '../hooks/useInitialState';

let queryString = '';
const page = Math.floor(Math.random() * 19) + 1;
queryString = `?page=${page}`;
const API = `https://rickandmortyapi.com/api/character/${queryString}`;

const Home = () => {
  const initialState = useInitialState(API);

  return initialState.length === 0 ? (
    <div>cargando...</div>
  ) : (
    <div className='App'>
      <Card>
        <CardRickAndMorty title='cards'>
          <Search />
          {initialState.results.map((item) => (
            <CardRickAndMortyItem key={item.id} {...item} />
          ))}
          <LoadMore />
        </CardRickAndMorty>
      </Card>
    </div>
  );
};

export default Home;
