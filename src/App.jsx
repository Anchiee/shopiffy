import {Routes, Route} from "react-router-dom"
import Navigation from "./Components/Nav/Nav.jsx"
import Register from "./Routing/Register.jsx"
import Login from "./Routing/Login.jsx"
import Contact from "./Routing/Contact.jsx"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Routing/Home.jsx"

function App() {


  return(

    <>  
      <BrowserRouter>
        <Navigation/>          
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
        

    </>

  )
 
}

export default App
