import { NavLink, useLocation } from "react-router-dom"
import { useContext } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faGear, faShoppingCart } from "@fortawesome/free-solid-svg-icons"


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
      
        <div className="flex items-center justify-between pl-38 pt-7">
          <h1 className="text-2xl font-bold">Shopiffy</h1>

          {userSession.username && path.pathname !== "/contact"  && path.pathname !== "/settings" &&
          path.pathname !== "/cart" && path.pathname !== "/" &&
              <form onSubmit={handleSearch} method="get" className="flex items-center border-2 border-solid border-softBlack 
              rounded-md py-1 px-6">
                <input type="text" className="border-none bg-transparent-100 placeholder:text-softBlack outline-none text-lg" placeholder="Search for a product"/>
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} size="lg"/>
                </button>
              </form>}


          <nav className="pr-28">
            {!userSession.username && <NavLink to="/login" className="no-underline text-2xl mx-8 transition-opacity hover:opacity-70">Log-in</NavLink>}
            {!userSession.username && <NavLink to="/register" className="no-underline text-2xl mx-8 transition-opacity hover:opacity-70">Sign-in</NavLink>}
            {!userSession.username && <NavLink to="/" className="no-underline text-2xl mx-8 transition-opacity hover:opacity-70">Home</NavLink>}
            
            <NavLink to="/contact" className="no-underline text-2xl mx-8 transition-opacity hover:opacity-70">Contact</NavLink>
            {userSession.username && <NavLink to="/menu" className="no-underline text-2xl mx-8 transition-opacity hover:opacity-70">Menu</NavLink>}
            {userSession.username && 
            <NavLink to="/cart" className="px-8">
              <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
            </NavLink>}

            {userSession.username && 
            <NavLink to="/settings" className="px-8">
              <FontAwesomeIcon icon={faGear} size="lg"/>
            </NavLink>}
          </nav>

        </div>  
    </>
    

  )

}

export default Navigation