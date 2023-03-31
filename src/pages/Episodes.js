import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import EpiCards from '../components/Epicard';
import useFetch from '../hooks/useFetch';

function Episodes() {


  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/episodes/', 'sc');
  const {user} = useContext(AuthContext);

  return (

    <div>
        <div className="EpiCardContainer">
          {characters && characters.map((character) => {
          
          return (
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