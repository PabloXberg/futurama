import React from 'react'
import LogForm from '../components/LogForm'
import '../quiz.css'

function Login() {

  return (
    <div className="quizBody">
      <div className='quizApp'>
        <h1>Register</h1>
        <LogForm functionType={"register"} />

        <h1>Login</h1>
        <LogForm functionType={"login"}/>
      </div>
    </div>
  )
}

export default Login