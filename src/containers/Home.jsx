import React from 'react';
import Card from '../components/Card';
import CardRickAndMorty from '../components/CardRickAndMorty';
import CardRickAndMortyItem from '../components/CardRickAndMortyItem';
import useInitialState from '../hooks/useInitialState';

const API = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const initialState = useInitialState(API);

  console.log(initialState);
};

export default Home;
