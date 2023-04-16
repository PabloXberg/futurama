import React, { useContext } from 'react'
import { AuthContext } from '../src/contexts/AuthContext'
import { Outlet, useLocation } from 'react-router-dom'
import useFetch from '../src/hooks/useFetch';
import CarouselSlide from '../src/components/CarouselSlide';

function
  Homepage() {
  const location = useLocation();
  const { result: characters, error, loading } = useFetch('https://api.sampleapis.com/futurama/info', 'sc');



  return (
    <div>
      { location.pathname.includes("Characters") || location.pathname.includes("Episodes") ? <Outlet /> : 
      <>
          {characters && <CarouselSlide Info={characters[0]} /> }
      </>
      }
    </div>
  )
}

export default Homepage