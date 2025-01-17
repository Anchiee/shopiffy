import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

function IconContainer()
{
  fontawesome.library.add(faDiscord, faGithub)
  return(
    <div className="flex justify-around pb-4 border-b-2 border-solid border-softBlack mb-8">
          <a href="https://discord.com/oauth2/authorize?client_id=1329212800610074766&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Fshopiffy%2Fserver%2Fcallbacks%2Fdiscord.php&scope=email+identify">
            <FontAwesomeIcon icon={faDiscord} size="lg" />
          </a>
          <a href="https://github.com/login/oauth/authorize?client_id=Iv23lilBfiDMZpuPtzbu&scope=user">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>          
    </div>
  )
}

export default IconContainer