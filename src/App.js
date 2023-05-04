
import './App.css';
import { BrowserRouter,Route,Routes} from "react-router-dom"
import About from "./Components/About"
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import  Setting from "./Components/Setting"
import Home from "./Components/Home"
import Signup from "./Components/Signup"

function App() {
  return (
    <div className="App">

     <BrowserRouter>
    
<Routes>
   <Route  exact path="/" element={ <Home/>} />
    <Route  exact path="/about" element={ <About/>} />
    <Route  exact path="/Login" element={ <Login/>} />
    <Route  exact path="/singup" element={ <Signup/>} />
    <Route  exact path="/profile" element={ <Profile/>} />
    <Route  exact path="/setting" element={ <Setting/>} />
    

    </Routes>

     </BrowserRouter>
    
    </div>
      
        

  );
}

export default App;
