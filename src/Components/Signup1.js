import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

import { NavDropdown } from 'react-bootstrap';
const Signup1 = () => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const[emailError,setEmailError]=useState("");
  const[passwordError,setPasswordError]=useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };


  const handleSubmit = (e) => {

    e.preventDefault();
    
    if(email==='')
    setEmailError("please enter your email")
    if(password==='')
    setPasswordError("please enter your password")
    if(email!==''&&password!=='')
    {

    

     alert("Sigup Successfully");
    axios.post("https://reqres.in/api/register", {
    
      email: email,
      password:password,
      header,
    })
    .then((res)=>{
    const token="QpwL5tke4Pnpja7X4";
    localStorage.setItem('token',token)
     history("/Login");
     });

  }
  };
 
  const handleEmailChange=(event)=>{
    setEmail(event.target.value);
    if(event.target.value==='')
    setEmailError("please enter your email");
    else{
        setEmailError("");
    }
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
    if(event.target.value==='')
    setPasswordError("please enter your password");
    else{
        setPasswordError("");
    }
  }
  return (
    <>
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
    <h1>Signup page</h1>
      <form className="mt-5 mx-auto" style={{maxWidth:"400px"}}>
        
          
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp" required
            onChange={handleEmailChange}
          />
          {emailError&&<span style={{color:'red'}}>{emailError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            aria-describedby="emailHelp" required
            onChange={handlePasswordChange}
          />
          {passwordError&&<span style={{color:'red'}}>{passwordError}</span>}
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Signup1;