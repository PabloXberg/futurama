import React, { useContext } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AuthContext} from '../contexts/AuthContext';

function NavBar({ demoUser, setDemoUser }) {
  const location = useLocation();
  const { user, logOut } = useContext(AuthContext);
  const linkStyle = {
    color: "blue",
    fontSize: "large",
    font: "strong",
    cursor: "pointer",
    scale: 3
    
  }

  return (
    <div className='NavBar'>
      {/* <div style={{ display: "flex", gap: "1em" }}>
        <Link style={location.pathname === '/' ? linkStyle : null} to='/'>HomePage</Link>
        <Link style={location.pathname === '/about' ? linkStyle : null} to='about' state={ "send this message to about page" }>About</Link>
      </div> */}

      <div style={{ height: "6rem", display: "flex", justifyContent: "space-between" }}>
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
        { !user ? <NavLink to='/login' style={({ isActive }) => isActive ? linkStyle : null }>Log in!</NavLink> : <p style={{ cursor: "pointer"}} onClick={logOut}>Logout</p> }
      </div>
    </div>
  )
}

export default NavBar


// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import "../../App.scss";

// const Navbar = () => {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
//       <div className="container">
//         <Link to="/" className="navbar-brand fs-3 text-success">
//           Rickipedia <span className="text-secondary"></span>
//         </Link>
//         <style jsx>{`
//           button[aria-expanded="false"] > .close {
//             display: none;
//           }
//           button[aria-expanded="true"] > .open {
//             display: none;
//           }
//         `}</style>
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span class="fas fa-bars open text-dark"></span>
//           <span class="fas fa-times close text-dark"></span>
//         </button>
//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNavAltMarkup"
//         >
//           <div className="navbar-nav fs-5">
//             <NavLink to="/" className="nav-link text-warning">
//               Characters
//             </NavLink>
//             <NavLink to="/episodes" className="nav-link text-warning">
//               Episode
//             </NavLink>
//             <NavLink
//               activeClassName="active"
//               className="nav-link text-warning"
//               to="/location"
//             >
//               Location
//             </NavLink>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;