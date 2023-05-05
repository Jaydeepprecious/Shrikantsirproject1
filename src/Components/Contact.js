import React from 'react'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
function Contact() {
  return (
    <>
        <h1>Contact</h1>
        <div className="inputfiled">
        <p >Your Name</p>
        <FloatingLabel
        controlId="floatingInput"
        label="Enter your full name here"
        className="mt-2 mx-auto"  style={{maxWidth:"800px"}} >
        <Form.Control type="text"   style={{ height: '50px' }} />
      </FloatingLabel><br/>
      <p1>Company Name</p1>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter your company name here"
        className="mt-2 mx-auto"  style={{maxWidth:"800px"}} >
        <Form.Control type="text"   style={{ height: '50px' }} />
      </FloatingLabel><br/>
      <p1>Company Email</p1>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Your Company email here"
        className="mt-2 mx-auto"  style={{maxWidth:"800px"}} >
        <Form.Control type="email"   style={{ height: '50px' }} />
      </FloatingLabel><br/>
      <p1>Phone Number</p1>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter your preferred phone number here"
        className="mt-2 mx-auto"  style={{maxWidth:"800px"}} >
        <Form.Control type="number"   style={{ height: '50px' }} />
      </FloatingLabel><br/>
      <p1>More Information</p1>
      <FloatingLabel
        controlId="floatingInput"
        label="Add Your query or context in this box"
        className="mt-2 mx-auto"  style={{maxWidth:"800px"}} >
        <Form.Control type="text"   style={{ height: '50px' }} />
      </FloatingLabel><br/><br/>
      <Button variant="success">SEND MESSAGE</Button>
        </div>
    </>
  )
}


export default Contact