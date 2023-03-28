import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import useFetch from '../hooks/useFetch';

function Homepage() {
  const { user } = useContext(AuthContext);

  const { result: characters, error, loading } = useFetch('https://rickandmortyapi.com/api/character', 'mc');



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
      <h1>Home Page</h1>
      <h2>All Characters:</h2>
      { loading && <p>Loading....</p> }
      { error && <p>Something went wrong.. check console.</p> }
      { characters && characters.map((c) => {
        return <div key={c.id}>
          <h3>{c.name}</h3>
          { user && <Link to={`details/${c.id}/${c.name}`} >Learn more..</Link> }
          
        </div>
      }) }
      
    </div>
  )
}

export default Homepage