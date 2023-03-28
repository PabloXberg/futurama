import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function CharDetails() {
  const params = useParams();
  console.log("params:", params)

  const { id } = useParams();
  // console.log("only id", id);

  const { result: character, error, loading } = useFetch(`https://api.sampleapis.com/futurama/characters/${id}`, 'sc');

  // const [character, setCharacter] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchCharacter() {
  //     try {
  //       const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  //       const result = await response.json();
  //       console.log("result", result);
  //       if (result.error) {
  //         setError(result.error)
  //         setLoading(false);
  //       } else {
  //         setCharacter(result);
  //         setLoading(false);
  //       }
  //     } catch (error) {
  //       console.log(error)
  //       setError(error)
  //     }
  //   }

  //   fetchCharacter();
  // }, [])



  // let name = "Emily";
  // const handleChange = (event) => {
  //   name = event.target.value
  //   This variable HAS been updated, if you console logged it - React just doesn't care unless you update state
  // }
  
  return (
    <div>
      <h1>Details about {character ? character.name[0,1,2] : 'Nobody'}</h1>

      { loading && <p>Loading...</p> }

      { error && <p>{error}</p>}

      { character && <img src={character.images.main} alt={`Picture of ${character.name.first}`} /> }







      {/* <p>{name}</p>
      <input onChange={handleChange}/> */}

    </div>
  )
}

export default CharDetails