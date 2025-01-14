import {Routes, Route} from "react-router-dom"
import Navigation from "./Components/Nav/Nav.jsx"
import Footer from "./Components/Footer/Footer.jsx"
import Register from "./Routing/Register.jsx"
import Login from "./Routing/Login.jsx"
import Contact from "./Routing/Contact.jsx"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Routing/home.jsx"

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

        <Footer/>
      </BrowserRouter>
        

    </>

  )
 
}

export default App
