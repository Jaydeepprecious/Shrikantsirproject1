import logo from './logo.svg';
import './App.css';
import {Link}
function App() {
  return (
    <div className="App">
      
      <nav className="navbar">

<div className="logo">MENU</div>


<ul className="nav-links">


  {/* <input type="checkbox" id="checkbox_toggle" />
  <label className="hamburger">&#9776;</label> */}


  <div className="menu">

    <li><Link to="#">Home</Link></li>
    <li><Link to="about">About</Link></li>

    <li className="services">
      <li><Link to="#">Service</Link></li>
      <ul className="dropdown">
        <li><Link to="profile">profile</Link></li>
        <li><Link to="setting">Settings</Link></li>
      
      </ul>

    </li>

    <li><Link to="signin">Login</Link></li>
    <li><Link to="signup">Signup</Link></li>
  </div>
</ul>
</nav>
    </div>
  );
}

export default App;
