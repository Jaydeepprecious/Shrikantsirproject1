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


  const [nameError, setNameError] = useState("");
  const [companyError, setCompanyError] = useState("");
  const[emailError,setEmailError]=useState("");
  const[numberError,setNumberError]=useState("");
  const[informationError,setInformationError]=useState("");

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
    if(information==='')
    setInformationError("please enter some information")
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
    const handleMoreInformationChange = (event) => {
      setInformation(event.target.value);
      if (event.target.value === '')
        setInformationError("please enter your some Information");
      else {
        setInformationError("");
      }
    }
    function handleFocus(){
      setIsHighlighted(true);
    }
    function handleBlur(){
      setIsHighlighted(false);
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
            className="form-control" id={isHighlighted?"highlight1":""}
            placeholder="Enter your company name here"
            onChange={handleCompanyChange}    onFocus={handleFocus} onBlur={handleBlur}
          />
          {companyError && <span style={{ color: 'red' }}>{companyError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Company Email</label>
          <input
            type="email"
            className="form-control" id={isHighlighted?"highlight2":""}
            placeholder="Enter your email here"
            onChange={handleEmail1Change}    onFocus={handleFocus} onBlur={handleBlur}
          />
          {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="number"
            className="form-control" id={isHighlighted?"highlight3":""}
            placeholder="Enter your preferred phone number here"
            onChange={ handlePhoneChange}    onFocus={handleFocus} onBlur={handleBlur}
          />
          {numberError && <span style={{ color: 'red' }}>{numberError}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">More Information</label>
          <input
            type="text"
            className="form-control" id={isHighlighted?"highlight4":""}
            placeholder="Add Your Query and context in this box"
            onChange={handleMoreInformationChange }    onFocus={handleFocus} onBlur={handleBlur}
            
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