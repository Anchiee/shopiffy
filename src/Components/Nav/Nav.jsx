import { NavLink } from "react-router-dom"
import "../../Style/main.css"


function Navigation()
{

  return(

    <>
      <div className="nav-container">
        <h1>Shopiffy</h1>
        <nav>
          <NavLink to="/login">Log-in</NavLink>
          <NavLink to="/register">Sign-in</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
      </div>  
    </>
    
    

  )

}

export default Navigation