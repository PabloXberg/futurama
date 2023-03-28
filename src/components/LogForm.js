import React, { useContext, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext';

function LogForm({ functionType }) {
  const { createNewUser, logIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

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
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1em", alignItems: "flex-start" }}>
      <input placeholder='email' value={email} onChange={handleEmailChange} type='email'/>
      <input type='password' placeholder='password' value={password} onChange={(event) => setPassword(event.target.value)} />
      <button type='submit'>Submit</button>
    </form>
  )
}

export default LogForm