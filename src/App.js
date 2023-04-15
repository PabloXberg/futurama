import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Error404 from './pages/Error404'
import NavBar from './components/NavBar'
import Quiz from './pages/Quiz'

import { AuthContextProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Chat from './pages/Chat'
import TablaPuntos from './pages/TablaPuntos'

function App() {

  return (
    <>
      <AuthContextProvider>
        <NavBar />
        <Routes>

          <Route path='/' element={ <Homepage /> } />
          <Route path='*' element={<Error404 />} />
          
    
          <Route path='/Quiz' element={<ProtectedRoute>  <Quiz/> </ProtectedRoute> } >
           	    <Route path='/Quiz/TablaPuntos' element={<TablaPuntos />} /> 
                <Route path='/Quiz/Chat' element={ <Chat/> } />
          </Route>

          {/* <Route path='details/:id' element={ <ProtectedRoute><CharDetails /></ProtectedRoute> } /> */}

          <Route path='login' element={ <Login /> } />

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
