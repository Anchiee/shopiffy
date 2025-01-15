import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import fontawesome from '@fortawesome/fontawesome'
import { faDiscord, faGithub, faMicrosoft } from "@fortawesome/free-brands-svg-icons"
import Input from "../Components/Input/Input"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import { NavLink } from "react-router-dom"
import "../Style/Auth.css"

function Login()
{

  fontawesome.library.add(faDiscord, faGithub, faMicrosoft)

  return (

    <section className="auth-section">
      <div className="auth-container-login">
        
        <div className="icon-container">
          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-discord" size="lg" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-github" size="lg" />
          </a>

          <a href="#">
            <FontAwesomeIcon icon="fa-brands fa-microsoft" size="lg" />
          </a>
          
        </div>

        <label htmlFor="username-input">Username</label>
        <Input InputType="text" InputPlaceholder="Enter your username" InputId="username-input"/>

        <label htmlFor="password-input">Password</label>
        <Input InputType="password" InputPlaceholder="Enter your password" InputId="password-input"/>

        <SolidButton ButtonType="submit" ButtonText="Sign-in"/>

        <p>New to shopiffy? <NavLink to="/register">Sign-in</NavLink></p>

      </div>
    </section>


  )
}

export default Login