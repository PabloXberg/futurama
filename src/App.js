import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import Show from './pages/Show'
import Error404 from './pages/Error404'
import NavBar from './components/NavBar'
import CharactersPage from './pages/CharactersPage'
import Episodes from './pages/Episodes'
import CharDetails from './pages/CharDetails'
import { AuthContextProvider } from './contexts/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Chat from './pages/Chat'

function App() {
  const [demoUser, setDemoUser] = useState({ email: "demo@email.com", username: "Demoman"});
  return (
    <>
      <AuthContextProvider>
        <NavBar demoUser={demoUser} setDemoUser={setDemoUser} />
        <Routes>

          <Route path='/' element={ <Homepage /> } />

          <Route path='*' element={<Error404 />} />
          
          

          <Route path='/Show' element={<ProtectedRoute>  <Show/> </ProtectedRoute> } >
                <Route path='CharactersPage' element={<CharactersPage />} />
                <Route path='Episodes' element={<Episodes />} /> 
                <Route path='Chat' element={ <Chat/> } />
          </Route>

          <Route path='details/:id' element={ <ProtectedRoute><CharDetails /></ProtectedRoute> } />

          <Route path='login' element={ <Login /> } />

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
