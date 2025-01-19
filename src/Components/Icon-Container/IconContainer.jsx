import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

function IconContainer()
{
  fontawesome.library.add(faDiscord, faGithub)
  return(
    <div className="flex justify-around pb-4 my-10 gap-6">
          <a href="https://discord.com/oauth2/authorize?client_id=1329212800610074766&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%2Fshopiffy%2Fserver%2Fcallbacks%2Fdiscord.php&scope=email+identify"
          className="my-auto border-gray-300 border-2 px-5 py-3 rounded-2xl">
            <FontAwesomeIcon icon={faDiscord} size="lg" />
            <span className="ml-2 font-bold text-lg">Discord</span>
          </a>
          <a href="https://github.com/login/oauth/authorize?client_id=Iv23lilBfiDMZpuPtzbu&scope=user"
          className="my-auto border-gray-300 border-2 pl-4 pr-6 py-3 rounded-2xl">
            <FontAwesomeIcon icon={faGithub} size="lg" />
            <span className="ml-2 font-bold text-lg">Github</span>
          </a>          
    </div>
  )
}

export default IconContainer