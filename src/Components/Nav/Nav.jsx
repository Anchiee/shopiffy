import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faGear, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import "../../Style/main.css"



function Navigation()
{
  fontawesome.library.add(faSearch, faBars, faRightFromBracket, faGear, faShoppingCart)
  const {userSession} = useContext(SessionContext)

  const path = useLocation()

  const handleSearch = () => {
    console.log("sli");
  }

  return(

    <>
      <div className="nav-container">
        <h1>Shopiffy</h1>

        {userSession && path.pathname !== "/contact"  && path.pathname !== "/settings" &&
        path.pathname !== "/cart" && path.pathname !== "/" &&
          <form onSubmit={handleSearch} method="get" className="form-search">
            <input type="text" className="search-input" placeholder="Search for a product"/>
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} size="lg"/>
            </button>
          </form>}

        <nav>
          {!userSession && <NavLink to="/login">Log-in</NavLink>}
          {!userSession && <NavLink to="/register">Sign-in</NavLink>}
          {!userSession && <NavLink to="/">Home</NavLink>}
          
          <NavLink to="/contact">Contact</NavLink>
          {userSession && <NavLink to="/menu">Menu</NavLink>}
          {userSession && 
          <NavLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart}/>
          </NavLink>}

          {userSession && 
          <NavLink to="/settings">
            <FontAwesomeIcon icon={faGear}/>
          </NavLink>}
        </nav>

      </div>  
    </>
    

  )

}

export default Navigation