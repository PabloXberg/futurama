import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';
import theQuiz from '../components/theQuiz'

function Homepage() {
  const { user } = useContext(AuthContext);

  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/characters/', 'mc');

  // const [characters, setCharacters] = useState([]);

  // useEffect(() => {
  //   const fetchCharacters = async () => {
  //     try {
  //       const response = await fetch('https://rickandmortyapi.com/api/character');
  //       const result = await response.json();
  //       setCharacters(result.results);
  //       console.log(result.results);
  //     } catch (error) {
  //       console.log("error", error)
  //     }
  //   }

  //   fetchCharacters()
  // }, [])
  
  return (
    <div>
 
     <theQuiz />
      
    </div>
  )
}

export default Homepage