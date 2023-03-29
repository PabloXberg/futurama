import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Outlet, useLocation } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import CarouselSlide from '../components/CarouselSlide';

function Show() {
  const location = useLocation();
  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/info', 'sc');
  const {user} = useContext(AuthContext);
  console.log('characters :>> ', characters[0]);

  return (
    <div>
      { location.pathname.includes("Characters") || location.pathname.includes("Episodes") ? <Outlet /> : 
      <>
        <h1>The Show</h1>
          <CarouselSlide Info={ characters && characters[0] } />
      </>
      }
    </div>
  )
}

export default Show