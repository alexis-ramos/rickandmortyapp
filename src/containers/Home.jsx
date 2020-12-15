import React from 'react';
import Card from '../components/Card';
import CardRickAndMorty from '../components/CardRickAndMorty';
import CardRickAndMortyItem from '../components/CardRickAndMortyItem';
import Search from '../components/Search';
import useInitialState from '../hooks/useInitialState';

const API = 'https://rickandmortyapi.com/api/character';

const Home = () => {
  const initialState = useInitialState(API);
  return initialState.length === 0 ? (
    <div>cargando...</div>
  ) : (
    <div className='App'>
      <Card>
        <CardRickAndMorty title='cards'>
          {initialState.results.map((item) => (
            <CardRickAndMortyItem key={item.id} {...item} />
          ))}
        </CardRickAndMorty>
      </Card>
    </div>
  );
};

export default Home;
