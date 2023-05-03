import React from 'react';
 
// import About from "./Components/About"
// import Login from "./Components/Login"
// import Profile from "./Components/Profile"
// import  Setting from "./Components/Setting"

// import Signup from "./Components/Signup"

import {Link} from "react-router-dom"
function Home() {
  return (
    <div>
       <nav className="navbar">

<div className="logo">MENU</div>


<ul className="nav-links">


  {/* <input type="checkbox" id="checkbox_toggle" />
<label className="hamburger">&#9776;</label> */}


  <div className="menu">

    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>

    <li className="Services">
      <li><Link to="/">Service</Link></li>
      <ul className="dropdown">
        <li><Link to="/profile">profile</Link></li>
        <li><Link to="/setting">Settings</Link></li>

      </ul>

    </li>

    <li><Link to="/signin">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
  </div>
</ul>
</nav>
    </div>
  )
}

export default Home
