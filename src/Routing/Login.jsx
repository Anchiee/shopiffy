import Input from "../Components/Input/Input"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import IconContainer from "../Components/Icon-Container/IconContainer"
import { NavLink, useNavigate } from "react-router-dom"
import { useState, useContext } from "react"
import { SessionContext } from "../Contexts/SessionContext"
import axios from "axios"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"

function Login()
{

  
  const {setSession} = useContext(SessionContext)
  const navigate = useNavigate()

  let [user, setUser] = useState({
    username: null, 
    password: null
  })
  
  let [errorMessage, setErrorMessage] = useState("empty message")
  let [errorStatus, setErrorStatus] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    axios
    .post("http://192.168.0.13/shopiffy/server/endpoints/login.php", user, {
      withCredentials: true,
      headers: {
        "Content-Type":"application/json"
      }
    })
    .then(response => {
      console.log(response.data)
      
      if(response.data.status === "error") {
        setErrorMessage(response.data.message)
        setErrorStatus(true)
      }
      else {
        navigate("/menu")
        setSession({
          username: response.data.username, 
          email: response.data.email
        })
      }
    })
    .catch(error => {
      console.log(error)
    })

  }
   

  return (
    <AnimatedPage>
      <section className="flex justify-center items-center">
        <form onSubmit={handleSubmit} method="post" 
        className="inline bg-slate-200 text-xl rounded-md py-10 px-8 md:px-24 mt-20 shadow-gray-300-500/50 shadow-lg">
      
          <label htmlFor="username-input" className="font-bold text-base md:text-xl">Username</label>
          <Input 
          InputType="text" 
          InputPlaceholder="Enter your username" 
          InputOnChange={(e) => setUser(u => ({...u, username: e.target.value}))} 
          InputErrorStatus={errorStatus} 
          InputId="username-input"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-xs mx-0 py-0 md:text-lg" : "invisible"}>{errorMessage}</p>

          <label htmlFor="password-input" className="font-bold text-base md:text-xl">Password</label>
          <Input 
          InputType="password" 
          InputPlaceholder="Enter your password"  
          InputOnChange={(e) => setUser(u => ({...u, password: e.target.value}))} 
          InputErrorStatus={errorStatus} 
          InputId="password-input"/>

          <p className={errorStatus ? "mb-8 text-red-400 visible text-xs md:text-lg" : "invisible"}>{errorMessage}</p>

          <SolidButton ButtonType="submit"  ButtonText="Log-in"/>

          <IconContainer/>

          <p className="text-center text-base md:text-xl">New to shopiffy?
            <NavLink to="/register" className="px-2 font-bold hover:underline">Sign-up </NavLink>
          </p>

        </form>
      </section>
    </AnimatedPage>

  )
}

export default Login