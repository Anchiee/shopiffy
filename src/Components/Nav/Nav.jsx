import { NavLink } from "react-router-dom"
import { useContext } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faGear, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import AnimatedPage from "../AnimatedPage/AnimatedPage.jsx"

function Navigation()
{
  fontawesome.library.add(faSearch, faBars, faRightFromBracket, faGear, faShoppingCart)
  const {userSession} = useContext(SessionContext)


  return(

    <>
      <AnimatedPage>
        <nav className="flex items-center justify-between pl-38 pt-7 py-6 text-slate-400 
         outline-1 outline-gray-700">

          <div className="pl-36">
            <NavLink to="/" className="text-base font-bold mr-5 tracking-wider">SHOPIFFY</NavLink>

            <NavLink to="/contact" 
            className="no-underline text-base transition-opacity mx-5 hover:opacity-70">Contact</NavLink>

            {userSession.username && 
            <NavLink to="/menu" 
            className="no-underline text-base transition-opacity mx-5 hover:opacity-70">Menu</NavLink>
            }
          </div>
          


          <div className="pr-28">
            {!userSession.username && 
            <NavLink to="/login" 
            className="no-underline text-base px-6 py-1 mx-5 outline-2 outline-slate-400 rounded-2xl hover:bg-slate-400 
            hover:text-softBlack transition-all">
              Sign-in
            </NavLink>
            }
            
            
            
            {userSession.username && 
            <NavLink to="/cart" 
            className="px-6 py-1 mx-5 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
            hover:text-slate-300 transition-all">
              <FontAwesomeIcon icon={faShoppingCart}/>
              <p className="inline text-base font-bold ml-1">Cart</p>
            </NavLink>}

            {userSession.username && 
            <NavLink to="/settings" 
            className="px-6 py-1 mx-10 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
            hover:text-slate-300 transition-all">
              <FontAwesomeIcon icon={faGear}/>
              <p className="inline text-base font-bold ml-1">Settings</p>
            </NavLink>}
          </div>

        </nav>  
      </AnimatedPage>
    </>
    

  )

}

export default Navigation