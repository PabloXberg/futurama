import React, { useEffect, useState } from 'react'
import { useNavigate, Navigate } from 'react-router-dom'

function Error404() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false);
  const [countdown, setCountdown] = useState(5);

  useEffect(() => {
    async function test() {
      timeoutFunction(1000, 4);
      timeoutFunction(2000, 3);
      timeoutFunction(3000, 2);
      timeoutFunction(4000, 1);

      setTimeout(() => {
        setRedirect(true);
        // navigate(-1, { replace: true });
      }, 5000)
    }
    test();
   
  }, [])
  
  function timeoutFunction (count, timeout) {
    setTimeout(() => {
      setCountdown(timeout)
    }, count)
  }

  return (
    <div>
      { redirect ? <Navigate to={"/"} replace={true} /> : null }
      <h1>Error404 Page not found :/</h1>
      <p>Redirecting in {countdown} seconds</p>
      <button onClick={() => navigate(-1)}>Go back...</button>
      <button onClick={() => navigate('/')}>Go home...</button>
    </div>
  )
}

export default Error404