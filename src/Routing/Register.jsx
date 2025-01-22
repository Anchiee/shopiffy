import Input from "../Components/Input/Input.jsx"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton.jsx"
import { NavLink } from "react-router-dom"
import axios from "axios"
import {useContext, useState} from "react"
import { useNavigate } from "react-router-dom"
import { SessionContext } from "../Contexts/SessionContext.jsx"
import IconContainer from "../Components/Icon-Container/IconContainer.jsx"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage.jsx"

function Register()
{
  const {setSession} = useContext(SessionContext)
  const navigate = useNavigate()

  let [user, setUser] = useState({
    username: null, 
    email: null, 
    password: null, 
    confirmPassword: null
  })

  
  let [errorMessage, setErrorMessage] = useState("empty message")
  let [errorStatus, setErrorStatus] = useState(false)
  let [inputErrorClass, setInputErrorClass] = useState(null)


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
        setErrorMessage(response.data.message)
        setErrorStatus(true)
      }
      else {
        navigate("/menu")
        setSession({
          username: response.data.username, 
          email: response.data.email})
      }
    })
    .catch(error => {
      console.log(error)
    })

  }

  



  return(
    <AnimatedPage>
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit} method="post" 
        className="inline bg-slate-200 text-xl rounded-md py-8 px-24 mt-10 w-1/3 shadow-gray-300-500/50 shadow-lg">

          <label htmlFor="username-input">Username</label>
          <Input 
          InputType="text" 
          InputPlaceholder="Enter your username" 
          InputOnChange={(e) => setUser(u => ({...u, username: e.target.value}))} 
          InputClass={inputErrorClass} InputId="username-input"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-lg" : "invisible"}>{errorMessage}</p>
          
          <label htmlFor="password-input">Password</label>
          <Input 
          InputType="password" 
          InputPlaceholder="Enter your password" 
          InputOnChange={(e) => setUser(u => ({...u, password: e.target.value}))} 
          InputClass={inputErrorClass} 
          InputId="password-input"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-lg" : "invisible"}>{errorMessage}</p>

          <label htmlFor="email-input">Email</label>
          <Input 
          InputType="text" 
          InputPlaceholder="Enter your email" 
          InputOnChange={(e) => setUser(u => ({...u, email: e.target.value}))} 
          InputClass={inputErrorClass} 
          InputId="email-input"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-lg" : "invisible"}>{errorMessage}</p>

          <SolidButton ButtonType="submit" ButtonText="Sign-in"/>

          <IconContainer/>

          <p>Already have an account? <NavLink to="/login" className="underline">Log-in</NavLink></p>
        </form>
      </section>
    </AnimatedPage>

  )
  
}

export default Register