import React, { useState } from "react";

// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { NavDropdown } from 'react-bootstrap';
const Contact= () => {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [information, setInformation] = useState("");
  const[isHighlighted,setIsHighlighted]=useState(false);
  const[isHighlighted1,setIsHighlighted1]=useState(false);
  const[isHighlighted2,setIsHighlighted2]=useState(false);
  const[isHighlighted3,setIsHighlighted3]=useState(false);
  const[isHighlighted4,setIsHighlighted4]=useState(false);
  
  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const[emailError,setEmailError]=useState("");
  const[numberError,setNumberError]=useState("");
  

  const handleSubmit = (e) => {

    e.preventDefault();

    if (name === '')
      setNameError("please enter your Name")
    if (company=== '')
      setCompanyError("please enter your Company Name")
    if(email==='')
    setEmailError("please enter company email")
    if(number==='')
    setNumberError("please enter your number");
    
};

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value === '')
      setNameError("please enter your Name");
    else {
      setNameError("");
    }
  }
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    if (event.target.value === '')
      setCompanyError("please enter your Company Name");
    else {
        setCompanyError("");
    }
  }
    const handleEmail1Change = (event) => {
      setEmail(event.target.value);
      if (event.target.value === '')
        setEmailError("please enter your  Company email");
      else {
        setEmailError("");
      }
    }
    const handlePhoneChange = (event) => {
      setNumber(event.target.value);
      if (event.target.value === '')
        setNumberError("please enter your Number");
      else {
        setNumberError("");
      }
    }
    
    function handleFocus(){
      setIsHighlighted(true);
    }
    function handleBlur(){
      setIsHighlighted(false);
    }
    function handleFocus1(){
      setIsHighlighted1(true);
    }
    function handleBlur1(){
      setIsHighlighted1(false);
    }
    function handleFocus2(){
      setIsHighlighted2(true);
    }
    function handleBlur2(){
      setIsHighlighted2(false);
    }
    function handleFocus3(){
      setIsHighlighted3(true);
    }
    function handleBlur3(){
      setIsHighlighted3(false);
    }
    function handleFocus4(){
      setIsHighlighted4(true);
    }
    function handleBlur4(){
      setIsHighlighted4(false);
    }
  return (
    <>
      
      <h1>Contact</h1>
      <form className="mt-5 mx-auto" style={{ maxWidth: "400px" }}>
       <div  className="mb-3">
          <label className="form-label">Your Name</label>
          <input
            type="text"
            className="form-control"
            id={isHighlighted?"highlight":""}
             placeholder="Enter your full name here" onChange={handleNameChange} 
             onFocus={handleFocus} onBlur={handleBlur}
          />
          {nameError && <span style={{ color: 'red' }}>{nameError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control" id={isHighlighted1?"highlight1":""}
            placeholder="Enter your company name here"
            onChange={handleCompanyChange}    onFocus={handleFocus1} onBlur={handleBlur1}
          />
          {companyError && <span style={{ color: 'red' }}>{companyError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Company Email</label>
          <input
            type="email"
            className="form-control" id={isHighlighted2?"highlight2":""}
            placeholder="Enter your email here"
            onChange={handleEmail1Change}    onFocus={handleFocus2} onBlur={handleBlur2}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control" id={isHighlighted3?"highlight3":""}
            placeholder="Enter your preferred phone number here"
            onChange={ handlePhoneChange}    onFocus={handleFocus3} onBlur={handleBlur3}
          />
          {numberError && <span style={{ color: 'red' }}>{numberError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">More Information</label>
          <input
            type="text"
            className="form-control" id={isHighlighted4?"highlight4":""}
            placeholder="Add Your Query and context in this box"
            onChange={(e)=>{setInformation(e.target.value)}}   onFocus={handleFocus4} onBlur={handleBlur4}
            
          />
          {/* {informationError && <span style={{ color: 'red' }}>{informationError}</span>} */}
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

export default Contact;