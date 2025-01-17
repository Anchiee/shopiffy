import Input from "../Components/Input/Input"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import IconContainer from "../Components/Icon-Container/IconContainer"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext"
import axios from "axios"

function Login()
{


  const {userSession, setSession} = useContext(SessionContext)
  const navigate = useNavigate()

  let [user, setUser] = useState({username: null, password: null})
  let [errorMessage, setErrorMessage] = useState("empty message")
  let [errorStatus, setErrorStatus] = useState(false)
  let [inputErrorClass, setInputErrorClass] = useState(null)


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
        setErrorMessage("*" + response.data.message)
        setErrorStatus(true)
      }
      else {
        navigate("/menu")
        setSession({username: response.data.username, email: response.data.email})
        console.log(userSession);
      }
    })
    .catch(error => {
      console.log(error)
    })

  }
  

  return (

    <section className="flex justify-center items-center mt-12">
      <form onSubmit={handleSubmit} method="post" className="inline bg-softBrown-200 text-xl rounded-md py-6 px-24 mt-16 w-1/3">

        <IconContainer/>
      

        <label htmlFor="username-input">Username</label>
        <Input InputType="text" InputPlaceholder="Enter your username" InputOnChange={handleUsername} InputClass={inputErrorClass} InputId="username-input"/>
        <p className={errorStatus ? "p-0 m-0 text-red-800 visible" : "invisible"}>{errorMessage}</p>

        <label htmlFor="password-input" >Password</label>
        <Input InputType="password" InputPlaceholder="Enter your password"  InputOnChange={handlePassword} InputClass={inputErrorClass} InputId="password-input"/>
        <p className={errorStatus ? "p-0 m-0 text-red-800 visible" : "invisible"}>{errorMessage}</p>

        <SolidButton ButtonType="submit" ButtonText="Log-in"/>

        <p className="text-center">New to shopiffy? <NavLink to="/register" className="underline">Sign-in</NavLink></p>

      </form>
    </section>


  )
}

export default Login