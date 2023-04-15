import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext} from '../contexts/AuthContext';

function NavBar({ demoUser, setDemoUser }) {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const linkStyleOn = {
    color: " orangered",
    fontSize: "x-large",
    scale: 1.9
  }
  const linkStyleOff = {
    color: "Orange",
    fontSize: "x-large",
    scale: 1
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark navy" >
       <div className="container">
         <Link to="/" className="navbar-brand fs-3 text-success">
          FUTU-DRAMA<span className="text-secondary"></span>
       </Link>
       <style jsx>{`
          button[aria-expanded="false"] > .close {
             display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;           }
       `}</style>
       <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fas fa-bars open text-dark"></span>
          <span className="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
             <NavLink to='/Quiz' className="nav-link"  style={({ isActive }) => isActive ? linkStyleOn :linkStyleOff }>The Quiz</NavLink>
                { location.pathname.includes("Quiz") ? 
                  <>
                    {/* <NavLink to='/Quiz/TheQuiz' className="nav-link " style={({ isActive }) => isActive ? linkStyleOn : linkStyleOff }>The Quiz</NavLink> */}
                    <NavLink to='/Quiz/tablaPuntos' className="nav-link " style={({ isActive }) => isActive ? linkStyleOn : linkStyleOff}>Table</NavLink>
                    <NavLink to='/Quiz/Chat' className="nav-link"  style={({ isActive }) => isActive ? linkStyleOn : linkStyleOff }>Chat</NavLink>
                  </> 
                : null }
         
               <div>
                 { !user ? <NavLink to='/login'className="nav-link text-success" style={{ cursor: "pointer"}}>Log in!</NavLink> : <p className="nav-link text-danger" style={{ cursor: "pointer"}} onClick={logOut}>Logout</p> }
              </div>
           </div>
        </div>
     </div>
   </nav>
  )
}

export default NavBar

