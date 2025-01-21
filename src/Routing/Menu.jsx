import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from "@fortawesome/fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import Input from "../Components/Input/Input"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"


function Menu()
{
  fontawesome.library.add(faSearch)

  return (
    
      <section className="h-full w-11/12 mx-auto my-13 bg-slate-200 rounded-md shadow-md shadow-gray-300-500/50">
        <AnimatedPage>
          <div className="flex flex-row justify-around">
            <form className="w-2/5 my-3 flex flex-row gap-5">
              <Input InputPlaceholder="What are you looking for?"/>
              <button type="submit">
                <FontAwesomeIcon icon={faSearch} size="lg" style={{color: "#9ca3af"}}/>
              </button>
            </form>
                  
          </div>
        </AnimatedPage>
      </section> 
    
  
)
}

export default Menu