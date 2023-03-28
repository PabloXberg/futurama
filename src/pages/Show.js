import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

function Show() {
  const location = useLocation();

  return (
    <div>
      { location.pathname.includes("Characters") || location.pathname.includes("Episodes") ? <Outlet /> : 
      <>
        <h1>The Show</h1>
        <p>This page blah blah</p>
      </>
      }
    </div>
  )
}

export default Show