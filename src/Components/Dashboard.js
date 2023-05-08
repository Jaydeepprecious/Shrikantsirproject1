import React from 'react'
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Dashboard() {
    const history = useNavigate();
    function handleSubmit(){
       try {
        toast.success("LogOut Successfully!",{
          autoClose: 15000,
          position:"top-center",
          
          
        });
       } catch (error) {
         console.log(error)
       }  
     

        const token3=localStorage.removeItem('token');
         console.log(token3)
             
      
         history("/Login");
    }
  return (
    <div>
      <h1>Dashboard</h1>
      <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Logout
        </button>
        <ToastContainer />
    </div>
  )
}

export default Dashboard
