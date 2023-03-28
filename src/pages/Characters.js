import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'

function Characters() {
  // const values = useContext(AuthContext);
  // const user = values.user;
  // const test = values.test;

  const {user} = useContext(AuthContext);

  return (
    <div>
      <h1>Characters</h1>
    </div>
  )
}

export default Characters