import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import EpiCards from '../components/Epicard';
import useFetch from '../hooks/useFetch';

function Episodes() {
  // const values = useContext(AuthContext);
  // const user = values.user;
  // const test = values.test;
  // const [characters, setCharacters] = useState(null);
  // const [errores, setErrores] = useState(null);
  // const [show, setShow] = useState(false);
  // let [url, setUrl] = useState(`https://api.sampleapis.com/futurama/episodes`);


  //   const FilteredCards = characters?.filter((character) => {
  //   return character.name.toLocaleLowerCase().includes(searchInput .toLocaleLowerCase());
  // });

  //    async function fetchData(url) {
  //   try {
  //         const response = await fetch(url);
  //         const result = await response.json();
  //         console.log('result :>> ', result);
  //         setCharacters(result);
  //         setErrores(null)
  // } catch (error) {
  //         setErrores(error.message);
  //         alert(errores)
  //     }
  // }
  
  //   useEffect(() => {
  //   fetchData(url);
  //     }, [url]);

  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/episodes/', 'sc');
  const {user} = useContext(AuthContext);

  return (

    <div>
        <div className="EpiCardContainer">
          {characters && characters.map((character) => {
          
          return (
            // <CharacterCard character={character} setShow={setShow} />
            <EpiCards results={character}/>
          )
        }
      )
}
      </div>
    </div>
  )
}

export default Episodes