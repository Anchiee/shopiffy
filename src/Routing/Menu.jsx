import Input from "../Components/Input/Input"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons"
import fontawesome from "@fortawesome/fontawesome"

function Menu()
{

  fontawesome.library.add({faCaretDown, faCaretUp})

  let [isHidden, setIsHidden] = useState({
    category: true,
    brands: true,
    systems: true
  })

  const handleCategory = () => {
    if(isHidden.category) {
      setIsHidden({...isHidden, category: false})
    }
    else {
      setIsHidden({...isHidden, category: true})
    }
  }

  const handleBrands = () => {
    if(isHidden.brands) {
      setIsHidden({...isHidden, brands: false})
    }
    else {
      setIsHidden({...isHidden, brands: true})
    }
  }

  const handleSystems = () => {
    if(isHidden.systems) {
      setIsHidden({...isHidden, systems: false})
    }
    else {
      setIsHidden({...isHidden, systems: true})
    }
  }

  return (
    
      <section className="h-4/5 w-11/12 mx-auto my-10 bg-slate-200 rounded-md shadow-md shadow-gray-300-500/50">
        <AnimatedPage>

          <div className="flex flex-col gap-6 text-xl w-1/5 text-gray-600 pl-6">
            <form className="w-full my-3 flex flex-row gap-5">
              <Input InputPlaceholder="What are you looking for?"/>
            </form>

            <div className="flex flex-col ">
              <button 
              className="text-left hover:bg-gray-300 transition-all"
              onClick={handleCategory}>

                <span className="mr-5">Category</span>
                
                {isHidden.category ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
                
                </button>

              {!isHidden.category &&
              <select name="product-type" id="product-type" className="border-b-">
                <option value="laptop">Laptops</option>
                <option value="tablets">Tablets</option>
                <option value="phones">Phones</option>
                <option value="processors">Processors</option>
              </select>}
            </div>
            

          <div className="flex flex-col">
            <button className="text-left hover:bg-gray-300 transition-all" 
            onClick={handleBrands}>

              <span className="mr-5">Category</span>

              {isHidden.category ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}
            
            </button>

            {!isHidden.brands &&
            <div>
              <Input InputPlaceholder="Search brand"/>
  
              <div className="overflow-auto max-h-40">
                <div>
                  <input type="checkbox" id="samsung"/>
                  <label htmlFor="samsung">Brands</label>
                </div>

                <div>
                  <input type="checkbox" id="dell"/>
                  <label htmlFor="dell">Dell</label>
                </div>

                <div>
                  <input type="checkbox" id="hp"/>
                  <label htmlFor="hp">HP</label>
                </div>

                <div>
                  <input type="checkbox" id="apple"/>
                  <label htmlFor="apple">Apple</label>
                </div>

                <div>
                  <input type="checkbox" id="asus"/>
                  <label htmlFor="asus">Asus</label>
                </div>

                <div>
                  <input type="checkbox" id="msi"/>
                  <label htmlFor="msi">Msi</label>
                </div>

                <div>
                  <input type="checkbox" id="huawei"/>
                  <label htmlFor="huawei">Huawei</label>
                </div>
                  
                  
              </div>
            </div>}
              
          </div>

          <div className="flex flex-col">
            <button className="text-left hover:bg-gray-300 transition-all" 
            onClick={handleSystems}>

                <span className="mr-5">Operating systems</span>
                
                {isHidden.category ? <FontAwesomeIcon icon={faCaretDown} /> : <FontAwesomeIcon icon={faCaretUp} />}

            </button>
            
            {!isHidden.systems &&
            <div className="overflow-auto max-h-20">

              <div>
                <input type="checkbox" id="windows"/>
                <label htmlFor="windows">Windows</label>
              </div>

              <div>
                <input type="checkbox" id="macos"/>
                <label htmlFor="macos">MacOS</label>
              </div>

              <div>
                <input type="checkbox" id="android"/>
                <label htmlFor="android">Android</label>
              </div>

              <div>
                <input type="checkbox" id="iOS"/>
                <label htmlFor="iOS">iOS</label>
              </div>

            </div>}
                  
          </div>
            
              
          
            
            
        </div>
        </AnimatedPage>
      </section> 
    
  
)
}

export default Menu