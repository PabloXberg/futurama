import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'

import Card from '../components/Card';
import Cards from '../components/Card';
import useFetch from '../hooks/useFetch';

function CharactersPage() {
  // const values = useContext(AuthContext);
  // const user = values.user;
  // const test = values.test;
  // const [characters, setCharacters] = useState(null);
  const [errores, setErrores] = useState(null);
  const [show, setShow] = useState(false);
  let [url, setUrl] = useState(`https://api.sampleapis.com/futurama/characters`);


  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/characters/', 'sc');
  const {user} = useContext(AuthContext);

  return (

    <div>
        

          <div className="CardContainer">
        {characters && characters.map((character) => {
          return (
       
            <Cards results={character} type={"character"} />
          )
        }
      )
}
</div>
      


      
    </div>
  )
}

export default CharactersPage