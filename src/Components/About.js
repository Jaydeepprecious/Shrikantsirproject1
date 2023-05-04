import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { NavDropdown } from 'react-bootstrap';


const About = () => {
  return (
    <div>
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

      This is about comp.
    </div>
  )
}

export default About
