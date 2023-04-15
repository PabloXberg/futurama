import React, { useContext, useEffect, useState } from 'react'
import TheQuiz from '../components/TheQuizy';
import '../quiz.css'
import { Outlet, useLocation } from 'react-router-dom';

function Quiz() {


  const location = useLocation();


  return (

    <div>
      {location.pathname === "/Quiz/tablaPuntos" ||location.pathname === "/Quiz/Chat" ? <Outlet /> :  <TheQuiz />}
     
    
      
    </div>
  )
}

export default Quiz