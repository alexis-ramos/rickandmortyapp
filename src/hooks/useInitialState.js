import axios from 'axios';
import { useState, useEffect } from 'react';

const useInitialState = (API) => {
  const [characters, setCharacters] = useState([]);

  useEffect( () => {
    const fetchData = async () => {
      const result = await axios.get(API);
      setCharacters(result.data);
      
    };

    fetchData();
  }, ); // eslint-disable-next-line
  return characters;
  
};

export default useInitialState;