import React from 'react'
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const history = useNavigate();
    function handleSubmit(){
        alert("Logout Successfully")

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
    </div>
  )
}

export default Dashboard
