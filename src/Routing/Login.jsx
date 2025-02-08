import Input from "../Components/Input/Input"
import SolidButton from "../Components/Buttons/SolidButton/SolidButton"
import IconContainer from "../Components/Icon-Container/IconContainer"
import { NavLink } from "react-router-dom"
import { useUser } from "../Hooks/Auth/useUser"
import AnimatedPage from "../Components/AnimatedPage/AnimatedPage"

function Login()
{
  const {handleSubmit, errorMessage, errorStatus, handleInputChange} = useUser()
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit("login", "/menu", "post")
  }
   

  return (
    <AnimatedPage>
      <section className="flex justify-center items-center">
        <form onSubmit={onSubmit} method="post" 
        className="inline bg-slate-200 text-xl rounded-md py-10 px-8 md:px-24 mt-20 shadow-gray-300-500/50 shadow-lg">
      
          <label htmlFor="username-input" className="font-bold text-base md:text-xl">Username</label>
          <Input 
          InputType="text" 
          InputPlaceholder="Enter your username" 
          InputOnChange={(e) => handleInputChange(e)} 
          InputErrorStatus={errorStatus} 
          InputId="username"/>
          
          <p className={errorStatus ? "mb-5 text-red-400 visible text-xs mx-0 py-0 md:text-lg" : "invisible"}>{errorMessage}</p>

          <label htmlFor="password-input" className="font-bold text-base md:text-xl">Password</label>
          <Input 
          InputType="password" 
          InputPlaceholder="Enter your password"  
          InputOnChange={(e) => handleInputChange(e)} 
          InputErrorStatus={errorStatus} 
          InputId="password"/>

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