import Input from "../Components/Input/Input"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import IconContainer from "../Components/Icon-Container/IconContainer"
import { NavLink, useNavigate } from "react-router-dom"
import "../Style/Auth.css"
import { useState, useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext"
import axios from "axios"

function Login()
{


  const {setSession} = useContext(SessionContext)
  const navigate = useNavigate()

  let [user, setUser] = useState({username: null, password: null})
  let [errorMessage, setErrorMessage] = useState(null)
  let [inputErrorClass, setInputErrorClass] = useState(null)
  let [labelErrorClass, setLabelErrorClass] = useState(null)


  const handleUsername = (e) => {
    setUser(u => ({...u, username: e.target.value}))
  }
  const handlePassword = (e) => {
    setUser(u => ({...u, password: e.target.value}))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post("http://localhost/shopiffy/server/endpoints/login.php", user, {
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


  return (

    <section className="auth-section">
      <form onSubmit={handleSubmit} method="post" className="auth-container-login">

        <IconContainer/>
      

        <label htmlFor="username-input" className="label-login">Username</label>
        <Input InputType="text" InputPlaceholder="Enter your username" InputOnChange={handleUsername} InputClass={inputErrorClass} InputId="username-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <label htmlFor="password-input" className="label-login">Password</label>
        <Input InputType="password" InputPlaceholder="Enter your password"  InputOnChange={handlePassword} InputClass={inputErrorClass} InputId="password-input"/>
        <p className={labelErrorClass}>{errorMessage}</p>

        <SolidButton ButtonType="submit" ButtonText="Log-in"/>

        <p>New to shopiffy? <NavLink to="/register">Sign-in</NavLink></p>

      </form>
    </section>


  )
}

export default Login