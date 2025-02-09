import { NavLink, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import {SessionContext} from "../../Contexts/SessionContext.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch, faBars, faRightFromBracket, faGear, faShoppingCart, faX } from "@fortawesome/free-solid-svg-icons"
import AnimatedPage from "../AnimatedPage/AnimatedPage.jsx"
import AnimatedNav from "../AnimatedNav/AnimatedNav.jsx"
import { AnimatePresence } from "motion/react"
import { useProducts } from "../../Hooks/Product/useProduct.jsx"


function Navigation()
{
  fontawesome.library.add(faSearch, faBars, faRightFromBracket, faGear, faShoppingCart, faX)
  const {userSession} = useContext(SessionContext)
  let [menu, setToggleMenu] = useState(false)
  const path = useLocation()
  const {handleInput, handleCategory, handleBrand, handleOs } = useProducts()

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

                {userSession.username && path.pathname == "/menu" &&
                  <div className="mt-14 flex flex-col gap-4 w-4/5 mx-auto">

                    {/* Search Form */}
                    <input type="text" placeholder="Search a product" 
                    className="block  py-2 pl-3 rounded-md bg-transparent-200 text-xs text-gray-400  
                    outline-1 -outline-offset-1 outline-gray-700 placeholder-gray-400 box-border" 
                    onChange={handleInput}
                    id="product-search-mobile"/>

                    {/* Category Selector */}
                    <div>
                      <label htmlFor="product-category-mobile" className="text-xs font-bold">
                        Choose a category
                      </label>
                      <select
                        id="product-category-mobile"
                        className="text-xs rounded-lg py-1 block w-full  bg-transparent-300 outline-1 outline-gray-700 
                        placeholder-gray-400"
                        onChange={handleCategory}
                      >
                        <option value="none">None</option>
                        <option value="laptops">Laptops</option>
                        <option value="tablets">Tablets</option>
                        <option value="phones">Phones</option>
                      </select>
                    </div>


                    <div className="flex flex-col">
                      <p className="text-xs font-bold">
                        Choose a brand
                      </p>
                      <div className="overflow-auto max-h-20 flex flex-col gap-2">
                      {[
                        { label: "Samsung", value: "samsung" },
                        { label: "Dell", value: "dell" },
                        { label: "HP", value: "hp" },
                        { label: "Apple", value: "apple" },
                        { label: "Asus", value: "asus" },
                        { label: "MSI", value: "msi" },
                        { label: "Huawei", value: "huawei" },
                      ].map((brand, index) => (
                        <div className="inline-flex items-center" key={index}>
                          <label className="flex items-center cursor-pointer relative" htmlFor={`check-mobile-${index}`}>
                            <input
                              value={brand.value}
                              type="checkbox"
                              className="peer h-4 w-4 bg-transparent-300 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-gray-700 checked:bg-blue-600 checked:border-blue-600"
                              id={`check-mobile-${index}`}
                              onChange={handleBrand}
                            
                            />
                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-3.5 w-3.5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeWidth="1"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </label>
                          <p className="text-xs mx-1">{brand.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>  

                  <div className="flex flex-col w-full">
                    <label className="text-xs font-bold" htmlFor="product-system-mobile">Operating systems</label>
                    <select
                      id="product-system-mobile"
                      className="text-xs rounded-lg block py-1 bg-transparent-300 outline-1 outline-gray-700 placeholder-gray-400
                      cursor-pointer"
                      onChange={handleOs}
                      >

                      <option value="none">None</option>
                      <option value="linux">Linux</option>
                      <option value="windows">Windows</option>
                      <option value="ios">iOS</option>
                      <option value="android">Android</option>
                    </select>
                  </div>
                </div>}


                
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