import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavDropdown } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from "react-icons/fa";



const Signup1 = () => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  const [isHighlighted1, setIsHighlighted1] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState('')
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };

  const togglePassword = (e) => {
    e.preventDefault();
    if (passwordType === "password") {
      setPasswordType("text")
      return;
    }
    setPasswordType("password")
  }

  const handleSubmit = (e) => {

    e.preventDefault();

    if (email === '')
      setEmailError("please enter your email")
    if (password ==='')
      setPasswordError("please enter your password")
    if (email !== '' && password!== '') {





      toast.success("SignUp Successfully!", {
        autoClose: 15000,
        position: "top-center",


      });
      axios.post("https://reqres.in/api/register", {

        email: email,
        password: password,
        header,
      })
        .then((res) => {
          const token = "QpwL5tke4Pnpja7X4";
          const t = localStorage.setItem('token', token)
          console.log(t);
          history("/Login");
        });

    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value === '')
      setEmailError("please enter your email");
    else {
      setEmailError("");
    }
  }
  const validatePassword = (value) => {
    // Regular expressions to check for password characteristics
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const specialCharRegex = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/;

    let strength = '';

    if (value.length < 8) {
      strength = 'Password should have a minimum of 8 characters.';
    } else if (!uppercaseRegex.test(value)) {
      strength = 'Password should contain at least one uppercase letter.';
    } else if (!lowercaseRegex.test(value)) {
      strength = 'Password should contain at least one lowercase letter.';
    } else if (!specialCharRegex.test(value)) {
      strength = 'Password should contain at least one special character.';
    } else {
      strength = 'Password is strong.';
    }

    setPasswordStrength(strength);
  };
  const handlePasswordChange = (evnt) => {
    setPassword(evnt.target.value);
    if (evnt.target.value === '' || password=== "")
      setPasswordError("please enter your password");
    else {
      setPasswordError("");
    }
    const value = evnt.target.value;
    setPassword(value);
    validatePassword(value);
  }
  function handleFocus() {
    setIsHighlighted(true);
  }
  function handleBlur() {
    setIsHighlighted(false);
  }
  function handleFocus1() {
    setIsHighlighted1(true);
  }
  function handleBlur1() {
    setIsHighlighted1(false);
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
      <form className="mt-5 mx-auto" style={{ maxWidth: "400px" }}>


        <div className="mb-3">
          <label className="form-label">Email address</label>
          <div className="input-group my-4 ">

            <input
              type="email"
              className="form-control" id={isHighlighted ? "highlight" : ""}
              aria-describedby="emailHelp" required
              onChange={handleEmailChange} onFocus={handleFocus} onBlur={handleBlur}
            />

          </div>
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          
           <div className="input-group">  
         
            <input type={passwordType} id={isHighlighted1 ? "highlight1" : ""} onChange={handlePasswordChange} name="password" class="form-control" placeholder="Password" onFocus={handleFocus1} onBlur={handleBlur1}   />
           
            <div className="input-group-btn">
              <button className="btn btn-outline-primary" onClick={togglePassword}>
                {passwordType === "password" ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          
          </div> 
          
          <div>{passwordStrength}</div>
          {passwordError && <span style={{ color: 'red' }}>{passwordError}</span>}  <br /> 
        
             
        </div>
       
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <ToastContainer autoClose={8000} />
      </form>

    </>
  );
};

export default Signup1;