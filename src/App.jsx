import {Routes, Route} from "react-router-dom"
import Navigation from "./Components/Nav/Nav.jsx"
import Register from "./Routing/Register.jsx"
import Login from "./Routing/Login.jsx"
import Contact from "./Routing/Contact.jsx"
import { BrowserRouter } from 'react-router-dom'
import Home from "./Routing/Home.jsx"
import Menu from "./Routing/Menu.jsx"
import { SessionContext } from "./Contexts/SessionContext.jsx"
import { useContext, useEffect } from "react"
import axios from "axios"

function App() {

  const {setSession} = useContext(SessionContext)


  useEffect( () => {

    axios
    .get("http://localhost/shopiffy/server/endpoints/getsession.php", {
      withCredentials: true
    })
    .then(response => {
      console.log(response.data)
      if(response.data.status == "success") {
        setSession(response.data.username)
      }
    })
    .catch(error => {
      console.log(error)
    })

  }, [])
  return(

    <>  
      <BrowserRouter>
        <Navigation/>          
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/" element={<Home/>}/>
          </Routes>
      </BrowserRouter>
        

    </>

  )
 
}

export default App
