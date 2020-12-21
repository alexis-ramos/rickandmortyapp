import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import CardRickAndMorty from '../components/CardRickAndMorty';
import CardRickAndMortyItem from '../components/CardRickAndMortyItem';
import LoadMore from '../components/LoadMore';

let queryString = '';
const page = Math.floor(Math.random() * 19) + 1;
queryString = `?page=${page}`;
/* const API = `https://rickandmortyapi.com/api/character/${queryString}`; */

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(query.toLowerCase());
  };

  const searchCharacter = async () => {
    let queryString = '';
    const page = Math.floor(Math.random() * 19) + 1;
    if (search) {
      queryString = `?name=${search}`;
    } else {
      queryString = `?page=${page}`;
    }
    const API = `https://rickandmortyapi.com/api/character/${queryString}`;

    try {
      const result = await axios.get(API);
      setCharacters(result.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchCharacter();
  }, [search]);

  /* const initialState = useInitialState(API); */

  /* return characters.length === 0 ? ( */
  return loading ? (
    <div>cargando...</div>
  ) : (
    <div className='App'>
      <Card>
        <CardRickAndMorty title='cards'>
          <form
            className='relative pt-3 md:text-center'
            onSubmit={handleSubmit}
          >
            <input
              className='focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-400 border border-gray-500 rounded-md py-2 pl-10 md:w-1/2 '
              type='text'
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label='filtro nombres'
              placeholder='You can search characters for name, example: Rick, Morty, Summer'
            />
          </form>
          {characters.results.map((character) => (
            <CardRickAndMortyItem key={character.id} {...character} />
          ))}
          <LoadMore />
        </CardRickAndMorty>
      </Card>
    </div>
  );
};

export default Home;
