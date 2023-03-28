import React from 'react'
import LogForm from '../components/LogForm'

function Login() {

  return (
    <div>
      <h1>Register</h1>
      <LogForm functionType={"register"} />

      <h1>Login</h1>
      <LogForm functionType={"login"}/>
    </div>
  )
}

export default Login