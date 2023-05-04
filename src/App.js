
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./Components/About"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import Setting from "./Components/Setting"
import Home from "./Components/Home"
import Signup1 from "./Components/Signup1"

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route exact path="/About" element={<About />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup1 />} />
          <Route exact path="/Profile" element={<Profile />} />
          <Route exact path="/Setting" element={<Setting />} />


        </Routes>

      </BrowserRouter>

    </div>



  );
}

export default App;
