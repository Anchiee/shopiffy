import "../Style/Auth.css"
import Input from "../Components/Input/Input.jsx"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton.jsx"
import { NavLink } from "react-router-dom"
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import fontawesome from '@fortawesome/fontawesome'
import { faDiscord, faGithub, faMicrosoft } from "@fortawesome/free-brands-svg-icons"

function Register()
{
  fontawesome.library.add(faDiscord, faGithub, faMicrosoft)

  return(

    <section className="auth-section">
      <div className="auth-container">
        
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

        <label htmlFor="password-confirm-input">Confirm password</label>
        <Input InputType="password" InputPlaceholder="Confirm your password" InputId="password-confirm-input"/>

        <label htmlFor="email-input">Email</label>
        <Input InputType="email" InputPlaceholder="Enter your email" InputId="email-input"/>

        <SolidButton ButtonType="submit" ButtonText="Sign-in"/>

        <p>Already have an account? <NavLink to="/login">Log-in</NavLink></p>

      </div>
    </section>

  )
  
}

export default Register