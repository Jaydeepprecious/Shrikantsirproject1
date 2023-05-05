import React from 'react';

// import About from "./Components/About"
// import Login from "./Components/Login"
// import Profile from "./Components/Profile"
// import  Setting from "./Components/Setting"

// import Signup from "./Components/Signup"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



import { NavDropdown } from 'react-bootstrap';

function Home() {
  return (
    <div>
      {/* <div class="topnav">
        <Link to="/"  >Home</Link>
        <Link to="/About"  >About</Link>
        <Link to="/Signup">Signup</Link>
        <Link to="/Login">SignIn</Link>
      
       

      </div> */}
      {/* <div style={{paddingLeft:'10px'}}>

 
</div> */}

      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Menu</Navbar.Brand>
          <Nav className="me-auto">

            <Nav.Link href="Home">Home</Nav.Link>
            <Nav.Link href="About">About</Nav.Link>
            <Nav.Link href="Signup">SignUp</Nav.Link>
            <Nav.Link href="Login">LogIn</Nav.Link>
            <NavDropdown title="More  " id="navbarScrollingDropdown">
              <NavDropdown.Item href="Profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="Setting">
                Setting
              </NavDropdown.Item> 
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar> 
         
     <img src="precious.png" alt="pic" className='centerImage'/>
     
    </div>

  )
}

export default Home
