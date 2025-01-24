import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from '@fortawesome/fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
function Footer() 
{

  fontawesome.library.add(faDiscord, faEnvelope)

  return(
    <footer className="flex flex-row items-center justify-evenly h-full py-6 bg-softBlack 
    border-t-2 border-gray-700 shadow-slate-200  text-slate-400">
      <div>
        <h3>Shopiffy {new Date().getFullYear()}. The project is under the MIT license</h3>
        <p>This project is open source. 
          <a href="https://github.com/Anchiee/shopiffy" target="blank" className="ml-2 underline">
            Repository
          </a>
        </p>
      </div>
      
      <div>
        <h4>Contact info</h4>
        

        <div>
          <FontAwesomeIcon icon="fa-regular fa-envelope" />
          <p className="inline ml-1">
          wyhwtf@gmail.com
        </p>
        </div>
        
        <div>
          <FontAwesomeIcon icon="fa-brands fa-discord" />
          <p className="inline ml-1">
            anchie__
          </p>
        </div>
      </div>
    </footer>

  )
}

export default Footer