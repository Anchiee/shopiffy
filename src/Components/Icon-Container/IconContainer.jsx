import fontawesome from "@fortawesome/fontawesome"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons"

function IconContainer()
{
  fontawesome.library.add(faDiscord, faGithub)
  return(
    <div className="flex justify-around pb-4 my-10 gap-6 flex-wrap size-full">
          <a href="https://discord.com/oauth2/authorize?client_id=1329212800610074766&response_type=code&redirect_uri=http%3A%2F%2F192.168.0.13%2Fshopiffy%2Fserver%2Fcallbacks%2Fdiscord.php&scope=email+identify"
          className="flex items-center border-gray-300 border-2 px-5 py-3 rounded-2xl">
            <FontAwesomeIcon icon={faDiscord} className="text-xs"/>
            <span className="ml-2 font-bold text-xs md:text-lg">Discord</span>
          </a>
          <a href="https://github.com/login/oauth/authorize?client_id=Iv23lilBfiDMZpuPtzbu&scope=user"
          className="flex items-center border-gray-300 border-2 pl-4 pr-6 py-3 rounded-2xl">
            <FontAwesomeIcon icon={faGithub} className="text-xs"/>
            <span className="ml-2 font-bold text-xs md:text-lg">Github</span>
          </a>          
    </div>
  )
}

export default IconContainer