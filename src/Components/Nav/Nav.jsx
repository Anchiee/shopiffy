import { NavLink, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faClose } from "@fortawesome/free-solid-svg-icons"
import "../../Style/main.css"
import "./nav.css"



function Navigation()
{
  fontawesome.library.add(faSearch, faBars, faRightFromBracket, faClose)
  const {userSession} = useContext(SessionContext)

  const path = useLocation()
  
  let [isClosed, setCloseStatus] = useState(true) 
  


  const handleSearch = () => {
    console.log("sli");
  }

  const showUser = () => {
    setCloseStatus(false)
  }

  const closeUser = () => {
    setCloseStatus(true)
  }

  return(

    <>
      <div className="nav-container">
        <h1>Shopiffy</h1>

        {userSession && path.pathname !== "/contact" &&
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
        </nav>

        {userSession && (
            <div className="user-info">
              {isClosed && (
              <button onClick={showUser}>
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
              )}
              {!isClosed && (
                <div className="user">
                
                <div className="button-layout">
                  <button>
                    <FontAwesomeIcon icon={faRightFromBracket} size="lg"/>
                  </button>

                  <button onClick={closeUser}>
                    <FontAwesomeIcon icon={faClose} size="lg"/>
                  </button>
                </div>
                
                <div className="info-layout">
                  <h2>Hi, {userSession}</h2>
                </div>
                
              </div>
              )}
            
            </div>
          )} 
      </div>  
    </>
    

  )

}

export default Navigation