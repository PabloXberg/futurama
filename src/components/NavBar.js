import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext} from '../contexts/AuthContext';

function NavBar({ demoUser, setDemoUser }) {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const linkStyle = {
    color: "red",
    fontSize: "large"
  }

  return (
    <div>
      {/* <div style={{ display: "flex", gap: "1em" }}>
        <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
        <Link style={location.pathname === '/about' ? linkStyle : null} to='about' state={ "send this message to about page" }>About</Link>
      </div> */}

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", gap: "1em", alignItems: "center" }}>
          <NavLink to='/' style={({ isActive }) => isActive ? linkStyle : null }>The Quiz</NavLink>
          <NavLink to='/Show' style={({ isActive }) => isActive ? linkStyle : null }>The Show</NavLink>
          { location.pathname.includes("Show") ? 
            <>
              - 
              <NavLink to='/Show/CharactersPage' style={({ isActive }) => isActive ? linkStyle : null }>Characters</NavLink>
              <NavLink to='/Show/Episodes' style={({ isActive }) => isActive ? linkStyle : null }>Episodes</NavLink>
            </> 
          : null }
        </div>
        { !user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null }>Log in!</NavLink> : <p style={{ cursor: "pointer" }} onClick={logOut}>Logout</p> }
      </div>
    </div>
  )
}

export default NavBar