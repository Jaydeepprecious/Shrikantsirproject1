import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavDropdown } from 'react-bootstrap';
const Read = () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://6449e5fe79279846dcda7b28.mockapi.io/crud-youtuber")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  function handleDelete(id) {
    axios
      .delete(`https://6449e5fe79279846dcda7b28.mockapi.io/crud-youtuber/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage=(id,name,email,password)=>{
localStorage.setItem("id",id);
localStorage.setItem("name",name);
localStorage.setItem("email",email);
localStorage.setItem("password",password);

  }

  useEffect(() => {
    getData();
  }, []);

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

    <div className="d-flex justify-content-between m-2">
      <h2>Read Operation</h2>
      <Link to="/">
      <button className="btn btn-primary" >Create</button>
      </Link>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Password</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Read;