import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

function LogForm({ functionType }) {
  const { createNewUser, logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (functionType === "register") {
      createNewUser(email, password);
      setEmail('');
      setPassword('');
    }
    if (functionType === "login") {
      logIn(email, password);
      setEmail('');
      setPassword('');
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em", alignItems: "center" }}>
      <input placeholder='email' value={email} onChange={(event) => setEmail(event.target.value)} type='email'/>
      <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type='submit'>Accept</button>
    </form>
  )
}

export default LogForm