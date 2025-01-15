import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import "../../Style/main.css"


function Navigation()
{
  const {userSession} = useContext(SessionContext)
  console.log(userSession)
  return(

    <>
      <div className="nav-container">
        <h1>Shopiffy</h1>
        <nav>
          {!userSession && <NavLink to="/login">Log-in</NavLink>}
          {!userSession && <NavLink to="/register">Sign-in</NavLink>}
          <NavLink to="/contact">Contact</NavLink>
          {userSession && <NavLink to="/menu">Menu</NavLink>}
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>  
    </>
    
    

  )

}

export default Navigation