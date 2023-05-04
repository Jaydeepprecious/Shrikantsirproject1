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
       <div class="topnav">
  <Link to="/"  >Home</Link>
  <Link to="/About"  >About</Link>
  <Link to="/Signup">Signup</Link>
  <Link to="/Login">SignIn</Link>

</div>
{/* <div style={{paddingLeft:'10px'}}>

 
</div> */}
    </div>
  )
}

export default Home
