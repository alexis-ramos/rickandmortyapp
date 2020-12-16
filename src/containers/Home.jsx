// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardRickAndMorty from '../components/CardRickAndMorty';
import CardRickAndMortyItem from '../components/CardRickAndMortyItem';
import useInitialState from '../hooks/useInitialState';

let queryString = '';
const page = Math.floor(Math.random() * 19) + 1;
queryString = `?page=${page}`;
const API = `https://rickandmortyapi.com/api/character/${queryString}`;

const Home = () => {
  const initialState = useInitialState(API);
  /*   // eslint-disable-next-line
  const [data, setData] = useState({});
  const [query, setQuery] = useState('');
  // eslint-disable-next-line
  const [search, setSearch] = useState('');
  // eslint-disable-next-line
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query);
  }; */

  return initialState.length === 0 ? (
    <div>cargando...</div>
  ) : (
    <div className='App'>
      <Card>
        <CardRickAndMorty title='cards'>
          <div className='m-3 pt-3'>
            <form className='relative  md:text-center'>
              <input
                className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-400 border border-gray-500 rounded-md py-2 pl-10 md:w-1/2 '
                type='text'
                /* value={query}
                onChange={(e) => setQuery(e.target.value)} */
                aria-label='filtro nombres'
                placeholder='Puedes buscar por nombre'
              />
            </form>
          </div>
          {initialState.results.map((item) => (
            <CardRickAndMortyItem key={item.id} {...item} />
          ))}
        </CardRickAndMorty>
      </Card>
    </div>
  );
};

export default Home;
