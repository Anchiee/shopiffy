import "../../Style/main.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from '@fortawesome/fontawesome'
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
function Footer() 
{

  fontawesome.library.add(faDiscord, faEnvelope)

  return(
    <footer>
      <div className="footer-info">
        <h3>Shopiffy {new Date().getFullYear()}. All rights reserved</h3>
        <p>This project is open source. 
          <a href="https://github.com/Anchiee/shopiffy" target="blank">
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