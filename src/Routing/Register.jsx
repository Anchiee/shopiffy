import "../Style/Auth.css"
import Input from "../Components/Input/Input.jsx"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton.jsx"
import { NavLink } from "react-router-dom"
import axios from "axios"
import {useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { SessionContext } from "../Contexts/SessionContext.jsx"
import IconContainer from "../Components/Icon-Container/IconContainer.jsx"

function Register()
{
  const {setSession} = useContext(SessionContext)
  const navigate = useNavigate()

  let [user, setUser] = useState({username: null, email: null, password: null, confirmPassword: null})
  let [errorMessage, setErrorMessage] = useState(null)
  let [inputErrorClass, setInputErrorClass] = useState(null)
  let [labelErrorClass, setLabelErrorClass] = useState(null)

  const handleUsername = (e) => {
    setUser(u => ({...u, username: e.target.value}))
  }
  const handleEmail = (e) => {
    setUser(u => ({...u, email: e.target.value}))
  }
  const handlePassword = (e) => {
    setUser(u => ({...u, password: e.target.value}))
  }
  const handleConfirmPassword = (e) => {
    setUser(u => ({...u, confirmPassword: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost/shopiffy/server/endpoints/register.php", user, {
      withCredentials: true,
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      console.log(response.data)
      
      if(response.data.status === "error") {
        setInputErrorClass("input-error")
        setLabelErrorClass("error")
        setErrorMessage("*" + response.data.message)
      }
      else {
        navigate("/menu")
        setSession(response.data.sessionUsername)
      }
    })
    .catch(error => {
      console.log(error)
    })

  }

  



  return(
    <section className="auth-section">
      <form onSubmit={handleSubmit} method="post" className="auth-container">
        <IconContainer/>

        <label htmlFor="username-input">Username</label>
        <Input InputType="text" InputPlaceholder="Enter your username" InputOnChange={handleUsername} InputClass={inputErrorClass} InputId="username-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <label htmlFor="password-input">Password</label>
        <Input InputType="password" InputPlaceholder="Enter your password" InputOnChange={handlePassword} InputClass={inputErrorClass} InputId="password-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <label htmlFor="password-confirm-input">Confirm password</label>
        <Input InputType="password" InputPlaceholder="Confirm your password" InputOnChange={handleConfirmPassword} InputClass={inputErrorClass} InputId="password-confirm-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <label htmlFor="email-input">Email</label>
        <Input InputType="text" InputPlaceholder="Enter your email" InputOnChange={handleEmail} InputClass={inputErrorClass} InputId="email-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <SolidButton ButtonType="submit" ButtonText="Sign-in"/>

        <p>Already have an account? <NavLink to="/login">Log-in</NavLink></p>
      </form>
    </section>

  )
  
}

export default Register