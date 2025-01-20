import {Routes, Route, useLocation, useNavigate} from "react-router-dom"
import Navigation from "./Components/Nav/Nav.jsx"
import Register from "./Routing/Register.jsx"
import Login from "./Routing/Login.jsx"
import Contact from "./Routing/Contact.jsx"
import Home from "./Routing/Home.jsx"
import Menu from "./Routing/Menu.jsx"
import { SessionContext } from "./Contexts/SessionContext.jsx"
import { useContext, useEffect } from "react"
import axios from "axios"
import Settings from "./Routing/Settings.jsx"
import Cart from "./Routing/Cart.jsx"


function App() {

  const { setSession} = useContext(SessionContext)
  const path = useLocation()
  const navigate = useNavigate()

  useEffect( () => {

    axios
    .get("http://localhost/shopiffy/server/endpoints/getuserinfo.php", {
      withCredentials: true
    })
    .then(response => {
      console.log(response.data)
      if(response.data.status == "success") {
        setSession({username: response.data.username, email: response.data.email})
      }
      else if(response.data.status == "error" && (path.pathname == "/settings" || path.pathname == "/menu" || path.pathname == "/cart")) {
        navigate("/login")
      }
    })
    .catch(error => {
      console.log(error)
    })

  }, [])

  return(

    <>  
        {path.pathname != "/register" && path.pathname != "/login" && <Navigation/>}          
        <Routes>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/menu" element={<Menu/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path="/settings" element={<Settings/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
    </>

  )
 
}

export default App
