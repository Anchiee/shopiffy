import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub, faMicrosoft } from "@fortawesome/free-brands-svg-icons"

function IconContainer()
{
  fontawesome.library.add(faDiscord, faGithub, faMicrosoft)
  return(
    <div className="icon-container">
          <a href="https://discord.com/oauth2/authorize?client_id=1329212800610074766&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Fshopiffy%2Fserver%2Fcallbacks%2Fdiscord.php&scope=email+identify">
            <FontAwesomeIcon icon="fa-brands fa-discord" size="lg" />
          </a>
          <a href="https://github.com/login/oauth/authorize?client_id=Iv23lilBfiDMZpuPtzbu&scope=user">
            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-microsoft" size="lg" />
          </a>
          
    </div>
  )
}

export default IconContainer