import { NavLink } from "react-router-dom"
import { useContext, useState } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faGear, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons"
import AnimatedPage from "../AnimatedPage/AnimatedPage.jsx"
import AnimatedNav from "../AnimatedNav/AnimatedNav.jsx"
import { AnimatePresence } from "motion/react"

function Navigation()
{
  fontawesome.library.add(faSearch, faBars, faRightFromBracket, faGear, faShoppingCart, faX)
  const {userSession} = useContext(SessionContext)
  let [menu, setToggleMenu] = useState(false)

  return(

    <>

      <AnimatedPage>
      <AnimatePresence mode="wait">

        {/*for mobile*/}
        {menu && 
          <section className="bg-transparent-300 fixed w-full h-screen md:hidden">
            
            
              <AnimatedNav>
              
                <nav className="bg-softBlack outline-1 outline-gray-700 shadow-lg absolute 
                h-screen w-40 text-slate-400 flex flex-col items-start gap-5">

                  <button className="self-end mt-5 mr-5" onClick={() => setToggleMenu(prev => !prev)}>
                    <FontAwesomeIcon icon={faX} size="1x"/>
                  </button>

                  <NavLink to="/" className="text-base ml-5 font-bold tracking-wider"
                  onClick={() => setToggleMenu(prev => !prev)}>
                    SHOPIFFY
                  </NavLink>                

                  <NavLink to="/contact" 
                  className="no-underline text-base mx-5"
                  onClick={() => setToggleMenu(prev => !prev)}>
                    Contact
                  </NavLink>


                {userSession.username && 
                  <NavLink to="/menu" 
                  className="no-underline text-base transition-opacity mx-5 hover:opacity-70" 
                  onClick={() => setToggleMenu(prev => !prev)}>
                    Menu
                  </NavLink>
                }
              

                {!userSession.username && 
                  <NavLink to="/login" 
                  className="no-underline text-base px-6 py-1 mx-5 outline-1 outline-gray-700 xl:outline-2 md:outline-slate-400 rounded-2xl hover:bg-slate-400 
                  hover:text-softBlack transition-all"
                  onClick={() => setToggleMenu(prev => !prev)}>
                    Sign-in
                  </NavLink>
                }
                
                
                
                {userSession.username && 
                  <NavLink to="/cart" 
                  className="ml-5 md:mx-6 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
                  hover:text-slate-300 transition-all"
                  onClick={() => setToggleMenu(prev => !prev)}>
                    <FontAwesomeIcon icon={faShoppingCart}/>
                    <p className="inline text-base font-bold ml-1">Cart</p>
                </NavLink>}

                {userSession.username && 
                  <NavLink to="/settings" 
                  className="ml-5 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
                  hover:text-slate-300 transition-all"
                  onClick={() => setToggleMenu(prev => !prev)}>
                    <FontAwesomeIcon icon={faGear}/>
                    <p className="inline text-base font-bold ml-1">Settings</p>
                </NavLink>}

                  
                </nav> 
              </AnimatedNav>
            
          </section>}
        </AnimatePresence>

        <section className="md:hidden text-slate-400 flex items-center outline-1 outline-gray-700">
          <button className="m-5" onClick={() => setToggleMenu(prev => !prev)}>
            <FontAwesomeIcon icon={faBars} size="2x"/>
          </button>

          <NavLink to="/" className="text-base font-bold mr-5 tracking-wider">SHOPIFFY</NavLink>  
        </section>
        

        



        {/* for pc*/}
        <nav className="hidden md:flex  md:items-center md:gap-4 md:py-6 md:text-slate-400 
         md:outline-1 md:outline-gray-700 md:px-[9rem] md:justify-start 
         ">

            <NavLink to="/" className="text-base font-bold mr-5 tracking-wider hidden md:inline">SHOPIFFY</NavLink>

            <NavLink to="/contact" 
            className="no-underline text-base transition-opacity mx-5 hover:opacity-70 hidden md:inline">Contact</NavLink>

            {userSession.username && 
            <NavLink to="/menu" 
            className="no-underline text-base transition-opacity mx-5 hover:opacity-70 hidden md:inline">Menu</NavLink>
            }
          

            {!userSession.username && 
            <NavLink to="/login" 
            className="no-underline text-base px-6 py-1 mx-5 outline-1 outline-gray-700 xl:outline-2 md:outline-slate-400 rounded-2xl hover:bg-slate-400 
            hover:text-softBlack transition-all hidden md:inline">
              Sign-in
            </NavLink>
            }
            
            
            
            {userSession.username && 
            <NavLink to="/cart" 
            className="ml-5 md:mx-6 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
            hover:text-slate-300 transition-all hidden md:inline">
              <FontAwesomeIcon icon={faShoppingCart}/>
              <p className="inline text-base font-bold ml-1">Cart</p>
            </NavLink>}

            {userSession.username && 
            <NavLink to="/settings" 
            className="ml-5 outline-2 outline-softBlack rounded-2xl hover:bg-softBlack 
            hover:text-slate-300 transition-all hidden md:inline">
              <FontAwesomeIcon icon={faGear}/>
              <p className="inline text-base font-bold ml-1">Settings</p>
            </NavLink>}

        </nav>  
      </AnimatedPage>
    </>
    

  )

}

export default Navigation