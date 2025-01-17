import "../../Style/main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from '@fortawesome/fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
function Footer() 
{

  fontawesome.library.add(faDiscord, faEnvelope)

  return(
    <footer className="flex flex-row items-center justify-evenly size-full bg-softBrown-200 pt-8">
      <div className="pb-8">
        <h3>Shopiffy {new Date().getFullYear()}. All rights reserved</h3>
        <p>This project is open source. 
          <a href="https://github.com/Anchiee/shopiffy" target="blank" className="ml-2 underline">
            Repository
          </a>
        </p>
      </div>
      
      <div className="footer-info">
        <h4>Contact info</h4>
        <p>
        <FontAwesomeIcon icon="fa-regular fa-envelope" size="lg" />
          wyhwtf@gmail.com
        </p>

        <p>
        <FontAwesomeIcon icon="fa-brands fa-discord" size="lg" />
          anchie__
        </p>
      </div>
    </footer>

  )
}

export default Footer