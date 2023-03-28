import React, { useContext } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext'

function ProtectedRoute(props) {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  return (
    <>{ user ? props.children : <Navigate to={'/Login'} />}</>
  )
}

export default ProtectedRoute